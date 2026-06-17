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



                (function(){
                  var idx = 0;
                  var total = 2;
                  var track = document.getElementById('gallery-bezvykopy-track');
                  var prev = document.getElementById('gallery-bezvykopy-prev');
                  var next = document.getElementById('gallery-bezvykopy-next');
                  var dots = document.querySelectorAll('#gallery-bezvykopy-dots span');
                  function update(){
                    track.style.transform = 'translateX(-' + (idx * 100) + '%)';
                    dots.forEach(function(d, i){
                      d.className = 'w-2 h-2 rounded-full ' + (i === idx ? 'bg-[#00A651]' : 'bg-zinc-300');
                    });
                  }
                  prev.addEventListener('click', function(){ idx = (idx - 1 + total) % total; update(); });
                  next.addEventListener('click', function(){ idx = (idx + 1) % total; update(); });
                })();
              


              (function(){
                var activeWcTab = 'event';
                window.wcSwitchTab = function(tab) {
                  activeWcTab = tab;
                  ['event','construction'].forEach(function(t){
                    var btn = document.getElementById('wc-tab-' + t);
                    var content = document.getElementById('wc-content-' + t);
                    if(t === tab){
                      btn.className = 'flex-1 py-2.5 text-sm font-medium rounded-lg transition-all bg-white text-[#00A651] shadow-sm';
                      content.classList.remove('hidden');
                    } else {
                      btn.className = 'flex-1 py-2.5 text-sm font-medium rounded-lg transition-all text-zinc-500 hover:text-zinc-700';
                      content.classList.add('hidden');
                    }
                  });
                  window.wcCalculate();
                };
                window.wcCalculate = function() {
                  var v = parseInt(document.getElementById('wc-visitors').value);
                  var d = parseInt(document.getElementById('wc-duration').value);
                  var eventResult = Math.max(2, Math.ceil((v / 50) * (d / 4)));
                  document.getElementById('wc-event-result').textContent = eventResult;
                  var sel = document.getElementById('wc-workers');
                  var wc = parseInt(sel.options[sel.selectedIndex].getAttribute('data-wc'));
                  document.getElementById('wc-construction-result').textContent = wc;
                };
                window.wcCalculate();
              })();
            


      // Burger menu toggle
      document.getElementById('burger').addEventListener('click', function () {
          document.getElementById('mobile-menu').classList.toggle('hidden');
      });

      // Close mobile menu on links
      document.querySelectorAll('#mobile-menu a').forEach(function (link) {
          link.addEventListener('click', function () {
              document.getElementById('mobile-menu').classList.add('hidden');
          });
      });

      // SPA Hash Router function
      function handleRoute() {
          let hash = window.location.hash.substring(1);
          if (!hash) hash = 'home';

          // Hide all pages
          document.querySelectorAll('.page-section').forEach(function(page) {
              page.classList.add('hidden');
              page.classList.remove('block');
          });

          // Show target page
          const targetPage = document.getElementById(hash);
          if (targetPage) {
              targetPage.classList.remove('hidden');
              targetPage.classList.add('block');
          } else {
              document.getElementById('home').classList.remove('hidden');
              document.getElementById('home').classList.add('block');
              hash = 'home';
          }

          // Update active states in navigation
          document.querySelectorAll('.nav-link, .nav-link-mobile').forEach(function(link) {
              link.classList.remove('text-[#00A651]');
              link.classList.add('text-zinc-600');

              if (link.getAttribute('href') === '#' + hash) {
                  link.classList.add('text-[#00A651]');
                  link.classList.remove('text-zinc-600');
              }
          });

          // Scroll instantly to the top of the page
          window.scrollTo({ top: 0, behavior: 'instant' });
      }

      // Initialize route on load and listen for hash changes
      window.addEventListener('hashchange', handleRoute);
      window.addEventListener('DOMContentLoaded', handleRoute);
    
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
      

<header className="sticky z-50 bg-white/80 w-full border-zinc-100 border-b top-0 backdrop-blur-md">
<div className="flex max-w-6xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="flex items-center" href="#home">
<img alt="SEBAK Logo" className="w-auto h-12" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4a4b9c9-8cc3-4232-88bc-2a45737826fa_320w.png"/>
</a>
<nav className="hidden md:flex flex-wrap text-sm font-medium text-zinc-600 gap-x-8 gap-y-8 items-center">
<a className="hover:text-[#00A651] transition-colors nav-link text-[#00A651]" href="#home">
            Úvod
          </a>
<a className="hover:text-[#00A651] transition-colors nav-link text-zinc-600" href="#cisteni">
            Čištění kanalizací
          </a>
<a className="hover:text-[#00A651] transition-colors nav-link text-zinc-600" href="#bezvykopy">
            Bezvýkopové opravy
          </a>
<a className="hover:text-[#00A651] transition-colors nav-link text-zinc-600" href="#technologie">
            Frézování kanalizace
          </a>
<a className="hover:text-[#00A651] transition-colors nav-link text-zinc-600" href="#revize">
            Revize potrubí
          </a>
<a className="hover:text-[#00A651] transition-colors nav-link text-zinc-600" href="#mobilni-wc">
            Mobilní WC
          </a>
<a className="hover:text-[#00A651] transition-colors nav-link text-zinc-600" href="#kontakt">
            Kontakty
          </a>
</nav>
<button className="md:hidden flex flex-col gap-1.5 p-2" id="burger">
<span className="block w-6 h-0.5 bg-zinc-700"></span>
<span className="block w-6 h-0.5 bg-zinc-700"></span>
<span className="block w-6 h-0.5 bg-zinc-700"></span>
</button>
</div>
<div className="hidden md:hidden border-t border-zinc-100 bg-white px-6 py-4 flex flex-col gap-4 text-sm font-medium text-zinc-600 shadow-lg absolute w-full" id="mobile-menu">
<a className="text-left hover:text-[#00A651] transition-colors nav-link-mobile text-[#00A651]" href="#home">
          Úvod
        </a>
<a className="text-left hover:text-[#00A651] transition-colors nav-link-mobile text-zinc-600" href="#cisteni">
          Čištění kanalizací
        </a>
<a className="text-left hover:text-[#00A651] transition-colors nav-link-mobile text-zinc-600" href="#bezvykopy">
          Bezvýkopové opravy
        </a>
<a className="text-left hover:text-[#00A651] transition-colors nav-link-mobile text-zinc-600" href="#technologie">
          Frézování kanalizace
        </a>
<a className="text-left hover:text-[#00A651] transition-colors nav-link-mobile text-zinc-600" href="#revize">
          Revize kamerou
        </a>
<a className="text-left hover:text-[#00A651] transition-colors nav-link-mobile text-zinc-600" href="#mobilni-wc">
          Mobilní WC
        </a>
<a className="text-left hover:text-[#00A651] transition-colors nav-link-mobile text-zinc-600" href="#kontakt">
          Kontakty
        </a>
</div>
</header>
<main className="">

<div className="page-section block" id="home">
<section className="overflow-hidden md:py-32 bg-[#00A651]/5 pt-24 pb-24 relative">
<div className="flex flex-col text-center max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center">
<div className="flex w-48 h-48 mb-8 items-center justify-center">
<img alt="SEBAK Logo" className="max-w-full max-h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e1bb33c-b5f2-4f52-a24e-99d6c0dd4b10_800w.png"/>
</div>
<h1 className="max-w-4xl text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900 mb-6 animate-slide-in">
              Více než
              <span className="text-[#00A651]">30 let</span>
              zkušeností
            </h1>
<p className="max-w-2xl text-lg text-zinc-600 font-medium mb-12">
              Jsme specialisté na čištění odpadů, kanalizací, revize a moderní
              bezvýkopové technologie. Rychle, profesionálně a za použití těch
              nejlepších dostupných technologií na trhu.
            </p>
<div className="flex flex-wrap gap-4 justify-center">
<a className="inline-flex items-center gap-2 bg-[#00A651] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#00A651]/90 transition-colors" href="#cisteni">
                Naše služby
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 bg-white border border-zinc-200 text-zinc-900 px-6 py-3 rounded-lg text-sm font-medium hover:border-[#00A651] transition-colors" href="#kontakt">
                Kontaktovat nás
              </a>
</div>
</div>
</section>
<section className="border-zinc-100 border-b pt-24 pb-24">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-4xl font-medium tracking-tight text-zinc-900 mb-6 text-center">
              Co děláme
            </h2>
<p className="text-center text-zinc-600 max-w-2xl mx-auto mb-16">
              Komplexní služby v oblasti čištění, revize a sanace kanalizací pro
              soukromé i veřejné subjekty.
            </p>
<div className="grid md:grid-cols-3 gap-6">
<a className="block group text-left bg-white border border-zinc-200 rounded-2xl p-8 hover:border-[#00A651]/50 hover:shadow-lg transition-all" href="#cisteni">
<div className="w-12 h-12 bg-[#00A651]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00A651]/20 transition-colors">
<iconify-icon className="text-[#00A651] text-2xl" icon="solar:waterdrops-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">
                  Čištění kanalizací
                </h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                  Čištění odpadů v bytech, domech i venkovní kanalizace až do
                  délky 200 metrů.
                </p>
<div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#00A651]">
                  Více
                  <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
<a className="block group text-left bg-white border border-zinc-200 rounded-2xl p-8 hover:border-[#00A651]/50 hover:shadow-lg transition-all" href="#bezvykopy">
<div className="w-12 h-12 bg-[#00A651]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00A651]/20 transition-colors">
<iconify-icon className="text-[#00A651] text-2xl" icon="solar:ruler-pen-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">
                  Bezvýkopové opravy
                </h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                  Nejmodernější technologie bez nutnosti výkopových prací.
                  Šetříme čas i peníze.
                </p>
<div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#00A651]">
                  Více
                  <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
<a className="block group text-left bg-white border border-zinc-200 rounded-2xl p-8 hover:border-[#00A651]/50 hover:shadow-lg transition-all" href="#Frézování kanalizace">
<div className="w-12 h-12 bg-[#00A651]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00A651]/20 transition-colors">
<iconify-icon className="text-[#00A651] text-2xl" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">
                  Frézování kanalizace
                </h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                  Picote, IMS Robotics, Streicher – nejlepší dostupné
                  technologie na trhu.
                </p>
<div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#00A651]">
                  Více
                  <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
<a className="block group text-left bg-white border border-zinc-200 rounded-2xl p-8 hover:border-[#00A651]/50 hover:shadow-lg transition-all" href="#revize">
<div className="w-12 h-12 bg-[#00A651]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00A651]/20 transition-colors">
<iconify-icon className="text-[#00A651] text-2xl" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">
                  Revize kamerou
                </h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                  Diagnostika potrubí od 40 do 1200 mm. Detailní protokoly a
                  fotodokumentace.
                </p>
<div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#00A651]">
                  Více
                  <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
<a className="block group text-left bg-white border border-zinc-200 rounded-2xl p-8 hover:border-[#00A651]/50 hover:shadow-lg transition-all" href="#mobilni-wc">
<div className="flex group-hover:bg-[#00A651]/20 transition-colors bg-[#00A651]/10 w-12 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e1e147e-21e2-47a6-b48c-d2afdc78383a_800w.png)] bg-contain rounded-xl mb-6 items-center justify-center">
<iconify-icon className="text-[#00A651] text-2xl" icon="solar:toilet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">
                  Mobilní WC
                </h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                  Pronájem, údržba a čištění mobilních toalet pro stavby, akce i
                  soukromé události.
                </p>
<div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#00A651]">
                  Více
                  <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
<a className="block group hover:border-[#00A651]/50 hover:shadow-lg transition-all text-left bg-[#ffffff]/5 border-[#00A651]/20 border rounded-2xl px-8 py-8" href="#kontakt">
<div className="w-12 h-12 bg-[#00A651]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00A651]/30 transition-colors">
<iconify-icon className="text-[#00A651] text-2xl" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">
                  Kontakty
                </h3>
<p className="text-sm text-zinc-600 leading-relaxed">
                  Pobočky v Brně a Ostravě. Non-stop Dispečink 777 818 777.
                </p>
<div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#00A651]">
                  Kontaktovat
                  <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="bg-[#f2faf6] pt-16 pb-16">
<div className="mx-auto max-w-6xl px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-5xl font-semibold text-[#00A651] tracking-tight mb-2">
                  32
                </div>
<div className="text-xs font-medium text-zinc-400 uppercase tracking-widest">
                  Let zkušeností
                </div>
</div>
<div>
<div className="text-5xl font-semibold tracking-tight text-[#00A651] mb-2">
                  1 000+
                </div>
<div className="text-xs font-medium text-zinc-400 uppercase tracking-widest">
                  Opravených staveb
                </div>
</div>
<div>
<div className="text-5xl font-semibold tracking-tight text-[#00A651] mb-2">
                  6 000
                </div>
<div className="text-xs font-medium text-zinc-400 uppercase tracking-widest">
                  Opravených metrů ročně
                </div>
</div>
<div>
<div className="text-5xl font-semibold tracking-tight text-[#00A651] mb-2">
                  100%
                </div>
<div className="uppercase text-xs font-medium text-zinc-400 tracking-widest">
                  Spokojenost
                </div>
</div>
</div>
</div>
</section>

<section className="bg-[#ffffff] border-zinc-100 border-b pt-20 pb-20">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-xl font-semibold tracking-tight text-zinc-900 mb-2 text-center">
              Důvěřuje nám více než 1000 zákazníků
            </h2>
<p className="text-sm text-zinc-500 text-center mb-12">
              Včetně mnoha bytových a rodinných domů
            </p>
<div className="min-h-32 flex bg-zinc-50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/74fac0e7-d965-4d93-96ea-bcb082af3e1d_3840w.png)] bg-cover border-zinc-200 border-0 rounded-2xl pt-10 pr-8 pb-10 pl-8 items-center justify-center"></div>
</div>
</section>
</div>

<div className="page-section hidden" id="cisteni">
<div className="bg-[#00A651]/5 border-b border-zinc-100 py-16">
<div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row md:items-center justify-between gap-8">
<div className="order-2 md:order-1">
<div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
<a className="hover:text-[#00A651] transition-colors" href="#home">
                  Úvod
                </a>
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-zinc-900">Čištění kanalizací</span>
</div>
<h1 className="text-5xl font-semibold tracking-tight text-zinc-900 mb-4">
                Čištění kanalizací
              </h1>
<p className="text-lg text-zinc-600 max-w-2xl">
                Profesionální čištění odpadů a kanalizací v bytech, domech i
                venkovní infrastruktuře.
              </p>
</div>
<div className="order-1 md:order-2 flex w-32 h-32 md:w-48 md:h-48 flex-shrink-0 items-center justify-center">
<img alt="SEBAK Logo" className="max-w-full max-h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e1bb33c-b5f2-4f52-a24e-99d6c0dd4b10_800w.png"/>
</div>
</div>
</div>
<section className="border-zinc-100 border-b pt-24 pb-24">
<div className="mx-auto max-w-6xl px-6">
<div className="grid md:grid-cols-2 gap-12 items-center mb-24">
<div className="">
<div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[#00A651] uppercase tracking-widest">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
                  Byty a domy
                </div>
<h3 className="text-2xl font-medium tracking-tight mb-4">
                  Čištění odpadů v bytech a domech
                </h3>
<p className="text-zinc-600 text-base leading-relaxed">
                  Provádíme kompletní čištění a uvolňování domovních odpadů.
                  Rychle vyřešíme ucpané odpady od WC, umyvadel, dřezů, van,
                  sprch, pisoárů a výlevky. Vše jednoduše a bez zbytečného
                  bourání.
                </p>
</div>
<div className="aspect-video flex overflow-hidden bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b54ace5-d1d6-4f90-ab4f-6eebc2f8bdf4_1600w.png)] bg-cover bg-center border-zinc-200 border rounded-2xl items-center justify-center"></div>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 aspect-video flex overflow-hidden bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14d5aea0-070d-4d2e-a345-2c57e9ff164c_1600w.jpg)] bg-cover bg-center border-zinc-200 rounded-2xl items-center justify-center"></div>
<div className="order-1 md:order-2">
<div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[#00A651] uppercase tracking-widest">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
                  Venkovní sítě
                </div>
<h3 className="text-2xl font-medium tracking-tight mb-4">
                  Čištění venkovní kanalizace
                </h3>
<p className="text-zinc-600 text-base leading-relaxed">
                  Specializujeme se na efektivní čištění venkovní kanalizace až
                  do délky 200 metrů. Používáme moderní tlakové vozy a šetrné
                  postupy pro maximální výsledek bez poškození infrastruktury.
                </p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center mt-24">
<div className="">
<div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[#00A651] uppercase tracking-widest">
<iconify-icon icon="solar:tank-linear" strokeWidth="1.5"></iconify-icon>
                  Jímky a septiky
                </div>
<h3 className="text-2xl font-medium tracking-tight mb-4">
                  Jímky, žumpy, septiky
                </h3>
<p className="text-zinc-600 text-base leading-relaxed">
                  Odsávání, odvoz a likvidace odpadu.
                </p>
</div>
<div className="aspect-video flex overflow-hidden bg-zinc-100 border-zinc-200 border rounded-2xl items-center justify-center"></div>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="bezvykopy">
<div className="bg-[#00A651]/5 border-b border-zinc-100 py-16">
<div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row md:items-center justify-between gap-8">
<div className="order-2 md:order-1">
<div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
<a className="hover:text-[#00A651] transition-colors" href="#home">
                  Úvod
                </a>
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-zinc-900">Bezvýkopové opravy</span>
</div>
<h1 className="text-5xl font-semibold tracking-tight text-zinc-900 mb-4">
                Bezvýkopové opravy a obnovy
              </h1>
<p className="text-lg text-zinc-600 max-w-2xl">
                Nejmodernější technologie bez nutnosti výkopových prací. Šetříme
                čas, peníze a zachováváme okolní povrchy netknuté.
              </p>
</div>
<div className="order-1 md:order-2 flex w-32 h-32 md:w-48 md:h-48 flex-shrink-0 items-center justify-center">
<img alt="SEBAK Logo" className="max-w-full max-h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e1bb33c-b5f2-4f52-a24e-99d6c0dd4b10_800w.png"/>
</div>
</div>
</div>
<section className="border-zinc-100 border-b pt-24 pb-24">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="space-y-16">
<div className="grid md:grid-cols-2 gap-12 items-start">
<div>
<div className="mb-2 text-[#00A651] font-medium text-sm tracking-widest uppercase">
                    Průměr 50–400 mm
                  </div>
<h3 className="text-3xl font-medium tracking-tight mb-4">
                    Brawoliner – řešení pro rodinné a bytové domy
                  </h3>
<p className="text-zinc-600 text-base mb-6">
                    Flexibilní a spolehlivá oprava poškozených trubek. Jedná se
                    o bezešvý rukávec, který umí změnu dimenze. Pro tuto
                    technologii postačí pouze jeden vstup a nepotřebujete mít
                    start a cíl. Kliknutím níže zobrazíte naše 4 způsoby
                    vytvrzování.
                  </p>
<details className="group bg-zinc-50 rounded-xl border border-zinc-200 overflow-hidden cursor-pointer">
<summary className="flex justify-between items-center p-5 font-medium text-zinc-900 select-none">
                      Zobrazit 4 způsoby instalace
                      <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-sm text-zinc-600 border-t border-zinc-100 pt-4 bg-white">
<ul className="space-y-3">
<li className="flex items-center gap-2">
<iconify-icon className="text-[#00A651]" icon="solar:record-circle-linear"></iconify-icon>
                          Termoreaktivní rukáv
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#00A651]" icon="solar:record-circle-linear"></iconify-icon>
                          Horká voda
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#00A651]" icon="solar:record-circle-linear"></iconify-icon>
                          Pára
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#00A651]" icon="solar:record-circle-linear"></iconify-icon>
                          UV světlo
                        </li>
</ul>
</div>
</details>
</div>
<div className="aspect-video flex bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5998295-5c8a-4083-a9d0-a569bffddaac_1600w.png)] bg-cover bg-center border-zinc-200 border rounded-2xl items-center justify-center"></div>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 aspect-video flex bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/01cbaeb2-0311-40f2-b03b-dc6ee239548b_1600w.png)] bg-cover bg-center border-zinc-200 border rounded-2xl items-center justify-center"></div>
<div className="order-1 md:order-2">
<div className="mb-2 text-[#00A651] font-medium text-sm tracking-widest uppercase">
                    Průměr 150–1000 mm
                  </div>
<h3 className="text-3xl font-medium tracking-tight mb-4">
                    UV-Liner
                  </h3>
<p className="text-zinc-600 text-base mb-6">
                    Bleskurychlá oprava pomocí špičkových UV technologií. Tento
                    rukáv snese i vysoký stupeň zatížení. Pracujeme s prémiovými
                    materiály pro dosažení maximální pevnosti a životnosti.
                    Vhodné zejména pro
                    <strong className="text-zinc-900">venkovní kanalizace</strong>
                    .
                  </p>
<p className="text-sm text-zinc-600">
                    Pracujeme s materiály: Reline Europe, Saertex, Brandenburger
                  </p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="">
<div className="mb-2 text-[#00A651] font-medium text-sm tracking-widest uppercase">
                    Průměr 200–1000 mm
                  </div>
<h3 className="text-3xl font-medium tracking-tight mb-4">
                    Inverzní rukávec - Insak/Kawo
                  </h3>
<p className="text-zinc-600 text-base">
                    Ideální řešení pro specifické sanace. Zajišťuje plnou
                    těsnost a vynikající strukturální integritu pro větší
                    průměry.
                  </p>
</div>
<div className="aspect-video flex bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4db26087-bb43-4446-9115-0306a46bf704_1600w.png)] bg-cover bg-center border-zinc-200 border rounded-2xl items-center justify-center"></div>
</div>
</div>
<div className="mt-16 bg-[#00A651]/5 border border-[#00A651]/20 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
<h3 className="text-2xl font-medium tracking-tight mb-4 text-[#00A651]">
                Spray-Liner
              </h3>
<p className="text-zinc-700 text-base">
                Specializovaná metoda pro nanášení ochranné vrstvy stříkáním.
                Ideální pro renovaci těžko přístupných nebo silně členitých míst
                v potrubí.
              </p>
</div>
<div className="mt-16 bg-[#00A651]/5 border border-[#00A651]/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
<h3 className="text-2xl font-medium tracking-tight mb-6 text-[#00A651]">
                Zákazníkovi předáváme:
              </h3>
<ul className="space-y-4 text-zinc-700 text-base">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00A651] text-xl mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Videozáznam realizované opravy</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00A651] text-xl mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>
                    Protokol každého opravovaného úseku kanalizace dle ČSN EN 13
                    508
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00A651] text-xl mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>
                    Prohlášení o shodě a certifikáty instalovaných materiálů
                  </span>
</li>
</ul>
</div>
<div className="mt-24">
<h3 className="text-3xl font-medium tracking-tight text-zinc-900 mb-8 text-center">
                Ukázky z prací
              </h3>
<div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm relative">
<div className="overflow-hidden" id="gallery-bezvykopy">
<div className="flex transition-transform duration-500 ease-in-out" id="gallery-bezvykopy-track" style={{transform: 'translateX(0%)'}}>
<div className="flex-shrink-0 w-full grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square flex overflow-hidden bg-center bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b64bb97a-233d-4964-aeae-2f9786991a00_800w.jpg)] bg-cover border-zinc-200 border rounded-xl"></div>
<div className="aspect-square flex overflow-hidden bg-center bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d63b3c51-2ef7-4ab4-8917-6adfe6ea38b3_800w.jpg)] bg-cover border-zinc-200 border rounded-xl"></div>
<div className="aspect-square flex overflow-hidden bg-zinc-50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3eb28450-4569-48f1-b8dc-c8f4f8944418_800w.jpg)] bg-cover bg-center border-zinc-200 border rounded-xl"></div>
<div className="aspect-square flex overflow-hidden bg-zinc-50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1aa5fddc-6c4c-4637-b4e7-09780d58947a_800w.jpg)] bg-cover bg-center border-zinc-200 border rounded-xl"></div>
</div>
<div className="flex-shrink-0 w-full grid grid-cols-2 md:grid-cols-4 gap-4 pl-4">
<div className="aspect-square flex overflow-hidden bg-center bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b64bb97a-233d-4964-aeae-2f9786991a00_800w.jpg)] bg-cover border-zinc-200 border rounded-xl"></div>
<div className="aspect-square flex overflow-hidden bg-center bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d63b3c51-2ef7-4ab4-8917-6adfe6ea38b3_800w.jpg)] bg-cover border-zinc-200 border rounded-xl"></div>
<div className="aspect-square flex overflow-hidden bg-zinc-50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3eb28450-4569-48f1-b8dc-c8f4f8944418_800w.jpg)] bg-cover bg-center border-zinc-200 border rounded-xl"></div>
<div className="aspect-square flex overflow-hidden bg-zinc-50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1aa5fddc-6c4c-4637-b4e7-09780d58947a_800w.jpg)] bg-cover bg-center border-zinc-200 border rounded-xl"></div>
</div>
</div>
</div>
<div className="flex justify-between items-center mt-6">
<button aria-label="Předchozí" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:border-[#00A651] hover:text-[#00A651] transition-colors text-zinc-600" id="gallery-bezvykopy-prev">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="flex gap-2" id="gallery-bezvykopy-dots">
<span className="w-2 h-2 rounded-full bg-[#00A651]" data-dot="0"></span>
<span className="w-2 h-2 rounded-full bg-zinc-300" data-dot="1"></span>
</div>
<button aria-label="Další" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:border-[#00A651] hover:text-[#00A651] transition-colors text-zinc-600" id="gallery-bezvykopy-next">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

</div>
</div>
</section>
<section className="bg-[#ffffff] border-zinc-100 border-b pt-20 pb-20">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-xl font-semibold tracking-tight text-zinc-900 mb-12 text-center"></h2>
<div className="min-h-32 md:min-h-48 flex bg-center w-full bg-contain bg-no-repeat border-0 rounded-2xl items-center justify-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2fdbe9cb-1946-4fd2-8658-f9754d055ce7_3840w.png)]"></div>
</div>
</section>
</div>

<div className="page-section hidden" id="technologie">
<div className="bg-[#00A651]/5 border-b border-zinc-100 py-16">
<div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row md:items-center justify-between gap-8">
<div className="order-2 md:order-1">
<div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
<a className="hover:text-[#00A651] transition-colors" href="#home">
                  Úvod
                </a>
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-zinc-900">Frézování kanalizace</span>
</div>
<h1 className="text-5xl font-semibold tracking-tight text-zinc-900 mb-4">
                Technologie a roboty
              </h1>
<p className="text-lg text-zinc-600 max-w-2xl">
                Nejmodernější stroje a roboti pro dokonalou diagnostiku a sanaci
                kanalizací.
              </p>
</div>
<div className="order-1 md:order-2 flex w-32 h-32 md:w-48 md:h-48 flex-shrink-0 items-center justify-center">
<img alt="SEBAK Logo" className="max-w-full max-h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e1bb33c-b5f2-4f52-a24e-99d6c0dd4b10_800w.png"/>
</div>
</div>
</div>
<section className="pt-24 pb-24">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
<div>
<div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-[#00A651] uppercase tracking-widest">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
                  Byty a domy
                </div>
<h3 className="text-2xl font-medium tracking-tight mb-4">
                  Frézování stoupaček a svislých kanalizací
                </h3>
<p className="text-base text-zinc-600">
                  Vysokorychlostní a frézovací systém Picote pro odstranění
                  nejtvrdších usazenin, betonu či kořenů. Šetrný k samotné
                  trubce, nesmlouvavý k překážkám.
                </p>
</div>
<div className="aspect-video flex bg-transparent bg-contain bg-center bg-no-repeat items-center justify-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/41d44a15-3cf5-4f55-be92-d77ced21a760_1600w.png)]"></div>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 aspect-video flex bg-transparent bg-contain bg-center bg-no-repeat items-center justify-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/464f0044-a387-4671-9f3f-b2c6aa080387_1600w.png)]"></div>
<div className="order-1 md:order-2">
<h3 className="text-2xl font-medium tracking-tight mb-4">
                  Pro malé potrubí
                </h3>
<p className="text-zinc-600 text-base">
                  Precizní frézovací roboti pro úpravu potrubí před samotnou
                  sanací. Umožňují dokonalé otevření přípojek po aplikaci
                  rukávu.
                </p>
</div>
</div>
</div>
</section>
<section className="bg-[#f9f9f9] border-zinc-100 border-t border-b pt-24 pb-24">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-4">
                  Potrubí středních a velkých rozměrů
                </h3>
<p className="text-zinc-600 text-base">
                  Špičkoví roboti pro kontrolu a sanaci. Nabízí nekompromisní
                  výkon v náročných podmínkách, včetně detailní kamerové
                  asistence při každém kroku.
                </p>
</div>
<div className="aspect-video flex bg-transparent bg-contain bg-center bg-no-repeat items-center justify-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11759f37-e287-4af7-9c02-7a735680de61_1600w.png)]"></div>
</div>
</div>
</section>
<section className="bg-[#ffffff] border-zinc-100 border-b pt-20 pb-20">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="min-h-32 md:min-h-48 flex bg-center w-full bg-contain bg-no-repeat border-0 rounded-2xl items-center justify-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6882982-3b85-4fa2-8c1a-de2444c8b072_3840w.png)]"></div>
</div>
</section>
</div>

<div className="page-section hidden" id="revize">
<div className="bg-[#00A651]/5 border-zinc-100 border-b pt-16 pb-16">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6 flex flex-col md:flex-row md:items-center justify-between gap-8">
<div className="order-2 md:order-1">
<div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
<a className="hover:text-[#00A651] transition-colors" href="#home">
                  Úvod
                </a>
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-zinc-900">Revize potrubí</span>
</div>
<h1 className="text-5xl font-semibold tracking-tight text-zinc-900 mb-4">
                Revize potrubí
              </h1>
<p className="text-lg text-zinc-600 max-w-2xl">
                Tlačné kamery, pojezdové kamery, zjišťovaní směru sondou a
                generátor kouře.
              </p>
<div className="mt-6 space-y-3 text-base text-zinc-600">
<div className="inline-flex items-center gap-2 text-sm font-medium text-[#00A651] uppercase tracking-widest mb-2">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                  Co provádíme
                </div>
<ul className="space-y-3">
<li className="flex items-start gap-2">
<iconify-icon className="text-[#00A651] text-lg mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Inspekce kanalizačních přípojek</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#00A651] text-lg mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Inspekce vnitřních kanalizací v budovách</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#00A651] text-lg mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Zjišťování směru a polohy kanalizace</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#00A651] text-lg mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Inspekce hlavních kanalizačních řadů a stok</span>
</li>
</ul>
</div>
</div>
<div className="order-1 md:order-2 flex w-32 h-32 md:w-48 md:h-48 flex-shrink-0 items-center justify-center">
<img alt="SEBAK Logo" className="max-w-full max-h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e1bb33c-b5f2-4f52-a24e-99d6c0dd4b10_800w.png"/>
</div>
</div>
</div>
<section className="border-zinc-100 border-b pt-24 pb-24">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="grid md:grid-cols-2 gap-12 items-center mb-24">
<div className="">
<h3 className="text-2xl font-medium tracking-tight mb-4">
                  Měření a diagnostika potrubí
                </h3>
<ul className="space-y-4 text-zinc-600 text-base">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00A651] text-xl mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Revidujeme potrubí už od 40 mm do 1200 mm.
                  </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00A651] text-xl mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Měříme digitálně ovalitu a spád.
                  </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00A651] text-xl mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Dokážeme zaměřit a vytrasovat potrubí.
                  </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00A651] text-xl mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Určíme orientačně hloubku uložení potrubí.
                  </li>
</ul>
</div>
<div className="aspect-video flex overflow-hidden bg-white bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38c139be-37fe-40e3-bad7-abfc65e625e8_1600w.png)] bg-cover bg-center border-zinc-200 border rounded-2xl shadow-sm items-center justify-center"></div>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center mb-24">
<div className="order-2 md:order-1 aspect-[4/3] bg-white rounded-2xl flex items-center justify-center overflow-hidden border border-zinc-200 shadow-sm">
<div className="text-sm text-zinc-400 text-center pt-6 pr-6 pb-6 pl-6">
<iconify-icon className="mb-4 text-[#00A651] block mx-auto" icon="solar:document-text-linear" strokeWidth="1.5" width="48"></iconify-icon>
                  [Ukázka revize domku s fotodokumentací v PDF]
                </div>
</div>
<div className="order-1 md:order-2">
<h3 className="text-2xl font-medium tracking-tight mb-4 uppercase text-[#00A651]">
                  Jak vypadá výsledek od nás
                </h3>
<p className="text-zinc-600 text-base leading-relaxed mb-6">
                  Předáme vám kompletní podklady včetně videozáznamu, protokolu
                  a fotodokumentace.
                </p>
<div className="bg-[#00A651]/5 p-6 rounded-xl border border-[#00A651]/20">
<ul className="space-y-3 text-zinc-900 font-medium text-sm">
<li className="flex items-center gap-2">
<iconify-icon className="text-[#00A651] text-lg" icon="solar:file-check-linear" strokeWidth="1.5"></iconify-icon>
                      Detailní revizní zpráva
                    </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#00A651] text-lg" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon>
                      Přehledná fotodokumentace
                    </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#00A651] text-lg" icon="solar:map-linear" strokeWidth="1.5"></iconify-icon>
                      Situace dané revize
                    </li>
</ul>
</div>
</div>
</div>
<h3 className="text-3xl font-medium tracking-tight text-zinc-900 mb-12 text-center">
              Naše vybavení a ukázky z revizí
            </h3>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-24">
<div className="aspect-square flex overflow-hidden bg-center bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6985917c-a0e8-49a1-82ee-c2c1da5a2ddc_800w.jpg)] bg-cover border-zinc-200 border rounded-2xl items-center justify-center"></div>
<div className="aspect-square flex overflow-hidden bg-center bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1a02fd7-56c9-4434-b01f-5e9e4d7b1310_800w.jpg)] bg-cover border-zinc-200 border rounded-2xl items-center justify-center"></div>
<div className="aspect-square flex overflow-hidden bg-center bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3405580-a486-4ba3-9d63-7023d12391c0_800w.jpg)] bg-cover border-zinc-200 border rounded-2xl items-center justify-center"></div>
<div className="aspect-square flex overflow-hidden bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/febe23d9-f384-4f7c-a67c-8ecb7f1afb67_800w.png)] bg-cover bg-center border-zinc-200 border rounded-2xl items-center justify-center"></div>
<div className="aspect-square flex overflow-hidden bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60f58a9d-a847-43e9-8306-55958af3908a_800w.png)] bg-cover bg-center border-zinc-200 border rounded-2xl items-center justify-center"></div>
</div>
<div className="grid md:grid-cols-2 gap-12">
<div>
<div className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#00A651] uppercase tracking-widest">
<iconify-icon icon="solar:document-linear" strokeWidth="1.5"></iconify-icon>
                  Co získáte
                </div>
<ul className="space-y-3 text-zinc-700 text-base">
<li className="flex items-start gap-2">
<iconify-icon className="text-[#00A651] text-lg mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Videozáznam z kamerové prohlídky</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#00A651] text-lg mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Protokol s popisem stavu kanalizace</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#00A651] text-lg mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Fotodokumentace zjištěných závad</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#00A651] text-lg mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Dispozční situační plán</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#00A651] text-lg mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Situační nákres</span>
</li>
</ul>
</div>
</div>
<div className="mt-16 bg-[#00A651]/5 border border-[#00A651]/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
<h3 className="text-2xl font-medium tracking-tight mb-6 text-[#00A651]">
                Zákazníkovi předáváme:
              </h3>
<ul className="space-y-4 text-zinc-700 text-base">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00A651] text-xl mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Videozáznam z kamerové prohlídky</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00A651] text-xl mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>
                    Technický protokol každého revidovaného úseku kanalizace dle
                    ČSN EN 13 508
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00A651] text-xl mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Videodokumentace zjištěných závad a stavu potrubí</span>
</li>
</ul>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="mobilni-wc">
<div className="bg-[#00A651]/5 border-b border-zinc-100 py-16">
<div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row md:items-center justify-between gap-8">
<div className="order-2 md:order-1">
<div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
<a className="hover:text-[#00A651] transition-colors" href="#home">
                  Úvod
                </a>
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-zinc-900">Mobilní WC</span>
</div>
<h1 className="text-5xl font-semibold tracking-tight text-zinc-900 mb-4">
                Mobilní WC
              </h1>
<p className="text-lg text-zinc-600 max-w-2xl">
                Pronájem, údržba a čištění mobilních toalet pro stavby, veřejné
                akce i soukromé události.
              </p>
<div className="mt-6 inline-flex items-center gap-2.5 text-sm font-medium text-zinc-700 bg-white border border-zinc-200 px-4 py-2.5 rounded-xl shadow-sm">
<iconify-icon className="text-[#00A651] text-lg" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                Volat je možné jen v rozmezí 8:00 – 15:30
              </div>
</div>
<div className="order-1 md:order-2 flex w-32 h-32 md:w-48 md:h-48 flex-shrink-0 items-center justify-center">
<img alt="SEBAK Logo" className="max-w-full max-h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e1bb33c-b5f2-4f52-a24e-99d6c0dd4b10_800w.png"/>
</div>
</div>
</div>
<section className="border-zinc-100 border-b pt-24 pb-24">
<div className="mx-auto max-w-6xl px-6">
<div className="grid md:grid-cols-2 gap-12 items-center mb-24">
<div className="aspect-video flex bg-center bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/687e10cc-d707-46f5-b65f-127bb82464de_1600w.jpg)] bg-cover border-zinc-200 border rounded-2xl items-center justify-center"></div>
<div>
<h3 className="text-2xl font-medium tracking-tight mb-4">
                  Zajištění mobilních toalet
                </h3>
<p className="text-zinc-600 text-base leading-relaxed mb-4">
                  Poskytujeme kompletní servis pronájmu, údržby a čištění
                  mobilních toalet. Vhodné pro stavby, veřejné akce i soukromé
                  události. Garantujeme maximální hygienu a pravidelný servis.
                </p>
<div className="bg-[#00A651]/5 border border-[#00A651]/20 rounded-xl p-5 mb-6">
<p className="text-sm font-medium text-zinc-900 mb-3">
                    Způsoby předání
                  </p>
<ul className="space-y-2 text-sm text-zinc-700">
<li className="flex items-start gap-2">
<iconify-icon className="text-[#00A651] text-lg mt-0.5 flex-shrink-0" icon="solar:delivery-linear" strokeWidth="1.5"></iconify-icon>
<span>
<span className="font-medium text-zinc-900">
                          Dovoz a odvoz
                        </span>
                        – záchody, ploty i příslušenství vám přivezeme přímo na
                        místo a po skončení odvezeme.
                      </span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#00A651] text-lg mt-0.5 flex-shrink-0" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
<span>
<span className="font-medium text-zinc-900">
                          Osobní vyzvednutí
                        </span>
                        – vybavení si můžete také osobně vyzvednout a vrátit na
                        naší provozovně v Brně.
                      </span>
</li>
</ul>
</div>
<a className="inline-flex items-center gap-2 bg-[#00A651] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#00A651]/90 transition-colors" href="#kontakt">
                  Nezávazná poptávka
                  <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<h3 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4 text-center">
              Typy mobilních WC
            </h3>
<p className="text-center text-zinc-600 mb-12 max-w-2xl mx-auto">
              Vyberte si jeden z našich podob variací přípoj – od základních WC
              po luxusní varianty
            </p>
<div className="grid md:grid-cols-4 gap-6 mb-24">
<div className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-[#00A651]/50 transition-colors">
<div className="aspect-square flex bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/802a4ff6-31d7-473d-9955-496cae1a0df8_800w.jpg)] bg-cover bg-center items-center justify-center"></div>
<div className="p-5">
<div className="mb-3 inline-flex items-center gap-2 text-xs font-medium text-[#00A651] bg-[#00A651]/10 px-3 py-1 rounded-full">
<iconify-icon icon="solar:toilet-linear"></iconify-icon>
                    Tufway
                  </div>
<h4 className="text-lg font-medium tracking-tight mb-2 text-zinc-900">
                    Standardní mobilní WC
                  </h4>
<p className="text-sm text-zinc-600">
                    Zdobný vzhled WC pro běžné použití. Jednoduché, spolehlivé a
                    ekonomické řešení.
                  </p>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-[#00A651]/50 transition-colors">
<div className="aspect-square flex bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c851922a-fd07-4b47-b8bf-006c05455162_800w.png)] bg-cover bg-center items-center justify-center"></div>
<div className="p-5">
<div className="mb-3 inline-flex items-center gap-2 text-xs font-medium text-[#00A651] bg-[#00A651]/10 px-3 py-1 rounded-full">
<iconify-icon icon="solar:toilet-linear"></iconify-icon>
                    V.I.P.
                  </div>
<h4 className="text-lg font-medium tracking-tight mb-2 text-zinc-900">
                    Mobilní WC s umyvadlem
                  </h4>
<p className="text-sm text-zinc-600">
                    WC s pultovým umyvadlem, mobilní a propláchovací funkcemi s
                    extra komfortem.
                  </p>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-[#00A651]/50 transition-colors">
<div className="aspect-square flex bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99be24cb-7c78-4f95-bbdd-97dbab9054d3_800w.png)] bg-cover bg-center items-center justify-center"></div>
<div className="p-5">
<div className="mb-3 inline-flex items-center gap-2 text-xs font-medium text-[#00A651] bg-[#00A651]/10 px-3 py-1 rounded-full">
<iconify-icon icon="solar:toilet-linear"></iconify-icon>
                    HIGH TECH+
                  </div>
<h4 className="text-lg font-medium tracking-tight mb-2 text-zinc-900">
                    Bezbarikádový mobilní WC
                  </h4>
<p className="text-sm text-zinc-600">
                    Přístroj s otevřeným prostorem pro snadnější přístup –
                    ekonomická variace.
                  </p>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-[#00A651]/50 transition-colors">
<div className="aspect-square flex bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70dc3535-df0b-482f-b1c7-cf46fd3f0d1d_800w.png)] bg-cover bg-center items-center justify-center"></div>
<div className="p-5">
<div className="mb-3 inline-flex items-center gap-2 text-xs font-medium text-[#00A651] bg-[#00A651]/10 px-3 py-1 rounded-full">
<iconify-icon icon="solar:toilet-linear"></iconify-icon>
                    Pisoáry
                  </div>
<h4 className="text-lg font-medium tracking-tight mb-2 text-zinc-900">
                    Mobilní pisoáry
                  </h4>
<p className="text-sm text-zinc-600">
                    Vhodné pro stavby, venkovní prostory a k údržbě – praktické
                    a hygienické.
                  </p>
</div>
</div>
</div>
<div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200 overflow-x-auto mb-24">
<h3 className="text-2xl font-medium tracking-tight mb-6 text-zinc-900">
                Technické parametry
              </h3>
<table className="w-full text-sm">
<thead className="">
<tr className="border-b border-zinc-200">
<th className="text-left py-3 px-4 font-medium text-zinc-700">
                      Parametr
                    </th>
<th className="text-center py-3 px-4 font-medium text-[#00A651]">
                      Tufway
                    </th>
<th className="text-center py-3 px-4 font-medium text-[#00A651]">
                      V.I.P.
                    </th>
<th className="text-center py-3 px-4 font-medium text-[#00A651]">
                      HIGH TECH II.
                    </th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-200">
<tr className="">
<td className="py-3 px-4 text-zinc-700">
                      Objem nádrže (kapalina)
                    </td>
<td className="text-center py-3 px-4 font-medium">265 l</td>
<td className="text-center py-3 px-4 font-medium">265 l</td>
<td className="text-center py-3 px-4 font-medium">333 l</td>
</tr>
<tr>
<td className="py-3 px-4 text-zinc-700">
                      Objem nádrže (umyvadla)
                    </td>
<td className="text-center py-3 px-4 text-zinc-500">–</td>
<td className="text-center py-3 px-4 font-medium">40 l</td>
<td className="text-center py-3 px-4 font-medium">38 l</td>
</tr>
<tr className="">
<td className="py-3 px-4 text-zinc-700">
                      Objem nádrže (odpady)
                    </td>
<td className="text-center py-3 px-4 text-zinc-500">–</td>
<td className="text-center py-3 px-4 text-zinc-500">–</td>
<td className="text-center py-3 px-4 font-medium">98 l</td>
</tr>
<tr className="">
<td className="py-3 px-4 text-zinc-700">Šírka</td>
<td className="text-center py-3 px-4 font-medium">1043 mm</td>
<td className="text-center py-3 px-4 font-medium">1143 mm</td>
<td className="text-center py-3 px-4 font-medium">1334 mm</td>
</tr>
<tr className="">
<td className="py-3 px-4 text-zinc-700">Hloubka</td>
<td className="text-center py-3 px-4 font-medium">1043 mm</td>
<td className="text-center py-3 px-4 font-medium">1143 mm</td>
<td className="text-center py-3 px-4 font-medium">1219 mm</td>
</tr>
<tr className="">
<td className="py-3 px-4 text-zinc-700">Výška</td>
<td className="text-center py-3 px-4 font-medium">2235 mm</td>
<td className="text-center py-3 px-4 font-medium">2311 mm</td>
<td className="text-center py-3 px-4 font-medium">113 kg</td>
</tr>
<tr className="">
<td className="py-3 px-4 text-zinc-700">Hmotnost</td>
<td className="text-center py-3 px-4 font-medium">91 kg</td>
<td className="text-center py-3 px-4 font-medium">105 kg</td>
<td className="text-center py-3 px-4 font-medium">113 kg</td>
</tr>
<tr className="">
<td className="py-3 px-4 text-zinc-700">Výška sedidla</td>
<td className="text-center py-3 px-4 font-medium">457 mm</td>
<td className="text-center py-3 px-4 font-medium">457 mm</td>
<td className="text-center py-3 px-4 font-medium">457 mm</td>
</tr>
<tr className="">
<td className="py-3 px-4 text-zinc-700">Rozměr dveří</td>
<td className="text-center py-3 px-4 font-medium">
                      1880×610 mm
                    </td>
<td className="text-center py-3 px-4 font-medium">
                      1880×610 mm
                    </td>
<td className="text-center py-3 px-4 font-medium">
                      1905×635 mm
                    </td>
</tr>
<tr className="">
<td className="py-3 px-4 text-zinc-700" colspan="4">
<span className="font-medium text-zinc-900">
                        Umývárna – technické údaje
                      </span>
</td>
</tr>
<tr>
<td className="py-3 px-4 text-zinc-700">
                      Hmotnost (bez náplní)
                    </td>
<td className="text-center py-3 px-4 font-medium" colspan="3">
                      54 kg
                    </td>
</tr>
<tr className="">
<td className="py-3 px-4 text-zinc-700">
                      Šířka / Hloubka / Výška
                    </td>
<td className="text-center py-3 px-4 font-medium" colspan="3">
                      107 cm / 70 cm / 116 cm
                    </td>
</tr>
<tr>
<td className="py-3 px-4 text-zinc-700">
                      Nádrž na čistou vodu
                    </td>
<td className="text-center py-3 px-4 font-medium" colspan="3">
                      163 l
                    </td>
</tr>
<tr className="">
<td className="py-3 px-4 text-zinc-700">
                      Nádrž na odpadní vodu
                    </td>
<td className="text-center py-3 px-4 font-medium" colspan="3">
                      178 l
                    </td>
</tr>
<tr>
<td className="py-3 px-4 text-zinc-700">
                      Voda na jedno použití
                    </td>
<td className="text-center py-3 px-4 font-medium" colspan="3">
                      248 ml (4 sešlápnutí)
                    </td>
</tr>
<tr className="">
<td className="py-3 px-4 text-zinc-700">Počet použití (cca)</td>
<td className="text-center py-3 px-4 font-medium" colspan="3">
                      630
                    </td>
</tr>
<tr>
<td className="py-3 px-4 text-zinc-700">Barva seda</td>
<td className="text-center py-3 px-4 font-medium" colspan="3">
                      –
                    </td>
</tr>
<tr className="">
<td className="py-3 px-4 text-zinc-700">
                      Zásobník papírových utěrek
                    </td>
<td className="text-center py-3 px-4 font-medium" colspan="3">
                      2 × 250
                    </td>
</tr>
<tr>
<td className="py-3 px-4 text-zinc-700">Zásobník mýdla</td>
<td className="text-center py-3 px-4 font-medium" colspan="3">
                      2 × 887 ml
                    </td>
</tr>
</tbody>
</table>
</div>
<h3 className="text-3xl font-medium tracking-tight text-zinc-900 mb-3 text-center">
              Příslušenství a doplňkové služby
            </h3>
<p className="text-center text-zinc-600 mb-12 max-w-2xl mx-auto">
              Kromě mobilních WC nabízíme i další vybavení pro vaše akce a
              stavby.
            </p>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-[#00A651]/50 transition-all hover:shadow-lg">
<div className="aspect-video flex bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70dc3535-df0b-482f-b1c7-cf46fd3f0d1d_800w.png)] bg-cover bg-center items-center justify-center"></div>
<div className="p-5 text-center">
<h4 className="text-lg font-medium tracking-tight text-zinc-900">
                    Mobilní pisoáry
                  </h4>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-[#00A651]/50 transition-all hover:shadow-lg">
<div className="aspect-video flex bg-center bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c7dc011-2f85-4b72-8076-b1facc1d8dd8_800w.png)] bg-cover items-center justify-center"></div>
<div className="p-5 text-center">
<h4 className="text-lg font-medium tracking-tight text-zinc-900">
                    Umyvárny
                  </h4>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-[#00A651]/50 transition-all hover:shadow-lg">
<div className="aspect-video flex bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99be24cb-7c78-4f95-bbdd-97dbab9054d3_800w.png)] bg-cover bg-center items-center justify-center"></div>
<div className="p-5 text-center">
<h4 className="text-lg font-medium tracking-tight text-zinc-900">
                    Bezbarikádové kabiny
                  </h4>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-[#00A651]/50 transition-all hover:shadow-lg">
<div className="aspect-video flex bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/82132880-eb8e-4e24-a5fc-ba7a06accc9e_800w.png)] bg-cover bg-center items-center justify-center"></div>
<div className="p-5 text-center">
<h4 className="text-lg font-medium tracking-tight text-zinc-900">
                    Mobilní oplocení
                  </h4>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-[#00A651]/50 transition-all hover:shadow-lg">
<div className="aspect-video flex bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a56c123-fd5d-4c5e-8a6a-1fa9a33b2e0c_800w.png)] bg-cover bg-center items-center justify-center"></div>
<div className="p-5 text-center">
<h4 className="text-lg font-medium tracking-tight text-zinc-900">
                    Mobilní oplocení
                  </h4>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-[#00A651]/50 transition-all hover:shadow-lg">
<div className="aspect-video flex bg-center bg-zinc-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1b5fa68-7530-4ef1-93f4-eb8c88d8c5f1_800w.png)] bg-cover items-center justify-center"></div>
<div className="p-5 text-center">
<h4 className="text-lg font-medium tracking-tight text-zinc-900">
                    Mobilní oplocení
                  </h4>
</div>
</div>
</div>
<div className="mt-16">
<h3 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4 text-center">
                Kalkulačka mobilních WC
              </h3>
<p className="text-center text-zinc-600 mb-10 max-w-2xl mx-auto">
                Zjistěte, kolik mobilních WC budete potřebovat pro vaši akci
                nebo staveniště.
              </p>
<div className="max-w-xl mx-auto bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm">

<div className="flex gap-1 bg-zinc-100 rounded-xl p-1 mb-8">
<button className="flex-1 py-2.5 text-sm font-medium rounded-lg transition-all bg-white text-[#00A651] shadow-sm" id="wc-tab-event" onclick="wcSwitchTab('event')">
                    🎉 Akce
                  </button>
<button className="flex-1 py-2.5 text-sm font-medium rounded-lg transition-all text-zinc-500 hover:text-zinc-700" id="wc-tab-construction" onclick="wcSwitchTab('construction')">
                    🏗️ Staveniště
                  </button>
</div>

<div id="wc-content-event">
<div className="mb-5">
<label className="block text-sm font-medium text-zinc-700 mb-2">
                      Počet návštěvníků
                    </label>
<select className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-[#00A651] transition-colors cursor-pointer" id="wc-visitors" onchange="wcCalculate()">
<option value="250">250</option>
<option selected="" value="500">500</option>
<option value="1000">1 000</option>
<option value="2000">2 000</option>
<option value="3000">3 000</option>
<option value="5000">5 000</option>
<option value="10000">10 000</option>
<option value="20000">20 000</option>
<option value="50000">50 000</option>
</select>
</div>
<div className="mb-6">
<label className="block text-sm font-medium text-zinc-700 mb-2">
                      Doba trvání (hodiny)
                    </label>
<select className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-[#00A651] transition-colors cursor-pointer" id="wc-duration" onchange="wcCalculate()">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option selected="" value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
</select>
</div>
<div className="text-center bg-[#00A651]/5 border border-[#00A651]/20 rounded-xl py-8 px-6">
<div className="text-sm text-zinc-500 mb-2">
                      Doporučený počet
                    </div>
<div className="text-6xl font-semibold text-[#00A651] tracking-tight" id="wc-event-result">
                      10
                    </div>
<div className="text-sm text-zinc-500 mt-2">mobilních WC</div>
</div>
</div>

<div className="hidden" id="wc-content-construction">
<div className="mb-6">
<label className="block text-sm font-medium text-zinc-700 mb-2">
                      Počet pracovníků
                    </label>
<select className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-[#00A651] transition-colors cursor-pointer" id="wc-workers" onchange="wcCalculate()">
<option data-wc="1" value="10">1 – 10</option>
<option data-wc="1" selected="" value="20">
                        11 – 20
                      </option>
<option data-wc="2" value="30">21 – 30</option>
<option data-wc="2" value="40">31 – 40</option>
<option data-wc="3" value="50">41 – 50</option>
<option data-wc="4" value="60">51 – 60</option>
<option data-wc="4" value="70">61 – 70</option>
<option data-wc="5" value="80">71 – 80</option>
<option data-wc="5" value="90">81 – 90</option>
<option data-wc="6" value="91">přes 91</option>
</select>
</div>
<div className="text-center bg-[#00A651]/5 border border-[#00A651]/20 rounded-xl py-8 px-6">
<div className="text-sm text-zinc-500 mb-2">
                      Doporučený počet
                    </div>
<div className="text-6xl font-semibold text-[#00A651] tracking-tight" id="wc-construction-result">
                      1
                    </div>
<div className="text-sm text-zinc-500 mt-2">mobilních WC</div>
</div>
</div>
</div>
</div>

</div>
</section>
</div>

<div className="page-section hidden" id="kontakt">
<div className="bg-[#00A651]/5 border-b border-zinc-100 py-16">
<div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row md:items-center justify-between gap-8">
<div className="order-2 md:order-1">
<div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
<a className="hover:text-[#00A651] transition-colors" href="#home">
                  Úvod
                </a>
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-zinc-900">Kontakty</span>
</div>
<h1 className="text-5xl font-semibold tracking-tight text-zinc-900 mb-4">
                Kontaktujte nás
              </h1>
<p className="text-lg text-zinc-600 max-w-2xl">
                Působíme po celé ČR. Máme provozovny v Brně a Ostravě.
              </p>
<a className="inline-flex items-center gap-3 mt-4 text-3xl font-semibold text-[#00A651] tracking-tight hover:text-[#00A651]/80 transition-colors" href="tel:777818777"></a>
</div>
<div className="order-1 md:order-2 flex w-32 h-32 md:w-48 md:h-48 flex-shrink-0 items-center justify-center">
<img alt="SEBAK Logo" className="max-w-full max-h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e1bb33c-b5f2-4f52-a24e-99d6c0dd4b10_800w.png"/>
</div>
</div>
</div>
<section className="border-zinc-100 border-b pt-24 pb-24">
<div className="mx-auto max-w-6xl px-6">
<div className="bg-white rounded-3xl border border-zinc-200 p-8 md:p-12 text-center mb-24 max-w-3xl mx-auto shadow-sm hover:border-[#00A651]/50 transition-all hover:shadow-lg">
<div className="inline-flex items-center justify-center w-16 h-16 bg-[#00A651]/10 rounded-2xl mb-5">
<iconify-icon className="text-[#00A651] text-3xl" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">
                Telefon
              </h2>
<a className="block text-4xl md:text-6xl font-semibold tracking-tighter text-[#00A651] hover:text-[#00A651]/80 transition-colors" href="tel:777818777">
                777 818 777
              </a>
</div>
<h3 className="text-3xl font-medium tracking-tight text-zinc-900 mb-12 text-center">
              Naše provozovny
            </h3>
<div className="grid md:grid-cols-3 gap-8 mb-24">
<div className="bg-[#00A651]/5 border border-[#00A651]/20 rounded-2xl p-8">
<h4 className="text-xl font-semibold text-zinc-900 mb-4">Brno</h4>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed"></p>
<div className="space-y-4 text-sm">
<div className="flex items-start gap-3">
<iconify-icon className="text-[#00A651] text-lg mt-0.5 flex-shrink-0" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-zinc-700">
                      Šámalova 312/81, 615 00 Brno
                    </span>
</div>
<div className="flex flex-col gap-2 pl-7">
<div>
<span className="text-zinc-500">Provozní říditel:</span>
<br/>
<span className="font-medium text-zinc-900">
                        Ing. Martin Peniaško
                      </span>
<br/>
<a className="text-[#00A651]" href="tel:+420602718642">
                        +420 602 718 642
                      </a>
</div>
<div>
<span className="text-zinc-500">Bezvýkopové opravy:</span>
<br/>
<span className="font-medium text-zinc-900">
                        Ing. Lukáš Spáčil
                      </span>
<br/>
<a className="text-[#00A651]" href="tel:+420724600105">
                        +420 724 600 105
                      </a>
<br/>
<a className="text-[#00A651]" href="mailto:spacil@sebak.cz">
                        spacil@sebak.cz
                      </a>
</div>
<div>
<span className="text-zinc-500">Revize TV kamerou:</span>
<br/>
<span className="font-medium text-zinc-900">Jan Dudek</span>
<br/>
<a className="text-[#00A651]" href="tel:+420724600112">
                        +420 724 600 112
                      </a>
<br/>
<a className="text-[#00A651]" href="mailto:dudek@sebak.cz">
                        dudek@sebak.cz
                      </a>
</div>
<div>
<span className="text-zinc-500">Mobilní WC:</span>
<br/>
<span className="font-medium text-zinc-900">
                        Ing. Linda Sedláčková
                      </span>
<br/>
<a className="text-[#00A651]" href="tel:+420602542471">
                        +420 724 600 127
                      </a>
<br/>
<a className="text-[#00A651]" href="mailto:wc@sebak.cz">
                        wc@sebak.cz
                      </a>
</div>
</div>
<div className="flex items-center gap-3 pt-2">
<iconify-icon className="text-[#00A651] text-lg flex-shrink-0" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<div>
<span className="text-zinc-500 text-xs block">Dispečink</span>
<a className="text-[#00A651] font-semibold text-base" href="tel:777818777">
                        777 818 777
                      </a>
</div>
</div>
</div>
</div>
<div className="bg-[#00A651]/5 border border-[#00A651]/20 rounded-2xl p-8">
<h4 className="text-xl font-semibold text-zinc-900 mb-4">
                  Ostrava
                </h4>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed"></p>
<div className="space-y-4 text-sm">
<div className="flex items-start gap-3">
<iconify-icon className="text-[#00A651] text-lg mt-0.5 flex-shrink-0" icon="solar:map-point-linear" strokeWidth="1.5">
<iconify-icon className="text-[#00A651] text-lg mt-0.5 flex-shrink-0" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-zinc-700">
                        Teslova 2, 702 00 Ostrava 1 – Přívoz
                      </span>
</iconify-icon>
<span className="text-zinc-700">
                      Testková 2, 702 00 Ostrava 1 – Přívoz
                    </span>
</div>
<div className="flex flex-col gap-2 pl-7">
<div>
<span className="text-zinc-500">Vedoucí provozovny:</span>
<br/>
<span className="font-medium text-zinc-900">
                        Ing. Patrik Poláček
                      </span>
<br/>
<a className="text-[#00A651]" href="tel:+420602718643">
                        +420 602 718 643
                      </a>
<br/>
<a className="text-[#00A651]" href="mailto:ostrava@sebak.cz">
                        ostrava@sebak.cz
                      </a>
</div>
<div>
<span className="text-zinc-500">Mobilní WC:</span>
<br/>
<span className="font-medium text-zinc-900">
                        Jana Pecková
                      </span>
<br/>
<a className="text-[#00A651]" href="tel:+420724800126">
                        +420 724 600 126
                      </a>
<br/>
<a className="text-[#00A651]" href="mailto:wc2@sebak.cz">
                        wc2@sebak.cz
                      </a>
</div>
</div>
<div className="flex items-center gap-3 pt-2">
<iconify-icon className="text-[#00A651] text-lg flex-shrink-0" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<div>
<span className="text-zinc-500 text-xs block">Dispečink</span>
<a className="text-[#00A651] font-semibold text-base" href="tel:+420596136000">
                        596 136 000
                      </a>
</div>
</div>
</div>
</div>
<div className="bg-[#00A651]/5 border border-[#00A651]/20 rounded-2xl p-8">
<h4 className="text-xl font-semibold text-zinc-900 mb-6">
                  Fakturační údaje
                </h4>
<div className="mb-6">
<div className="text-sm text-zinc-500 mb-1">Non-stop linka</div>
<a className="text-3xl font-semibold text-[#00A651] tracking-tight hover:text-[#00A651]/80 transition-colors" href="tel:777818777">
                    777 818 777
                  </a>
</div>
<div className="space-y-3 text-sm text-zinc-700 mb-6">
<div className="flex items-center gap-2">
<span className="text-zinc-700">sebak@sebak.cz</span>
</div>
<div className="flex items-start gap-2">
<iconify-icon className="text-[#00A651] mt-0.5 flex-shrink-0" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<span>Kudrnova 27 (Fakturační adresa)</span>
</div>
</div>
<div className="flex gap-2 mb-6">
<span className="bg-white border border-zinc-200 px-3 py-1 rounded-md text-sm text-zinc-700">
                    Brno
                  </span>
<span className="bg-white border border-zinc-200 px-3 py-1 rounded-md text-sm text-zinc-700">
                    Ostrava
                  </span>
</div>
<div className="text-xs text-zinc-500 border-t border-zinc-200 pt-4 space-y-1">
<p>IČ: 60696834</p>
<p>DIČ: 60696834</p>
<p>Číslo účtu: 303318008/2700 (Unicredit Bank)</p>
</div>
</div>
</div>
<div className="mb-16">
<h3 className="text-2xl font-medium tracking-tight mb-8 text-zinc-900">
                Kde nás najdete
              </h3>
<div className="w-full h-80 rounded-xl overflow-hidden border border-zinc-200">
<iframe allowfullscreen="" className="w-full h-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.2755250495394!2d14.346853177114175!3d50.081113613217425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95d038f6365b%3A0x836f696e0ca8579f!2sKudrnova%2027%2F95%2C%20150%2000%20Praha%205-Motol!5e0!3m2!1scs!2scz!4v1711234567890!5m2!1scs!2scz"></iframe>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="text-white bg-zinc-900 border-zinc-800 border-t pt-20 pb-20">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="grid md:grid-cols-12 gap-16">
<div className="md:col-span-7">
<h4 className="text-xl font-medium tracking-tight mb-6">
              SEBAK spol. s r.o.
            </h4>
<p className="leading-relaxed text-sm text-zinc-400 mb-8">
              Specialisté na čištění odpadů, kanalizací, revize a moderní
              bezvýkopové technologie. Více než 30 let zkušeností.
            </p>
<div className="rounded-xl overflow-hidden border border-zinc-700 mb-10 w-full h-52">
<iframe allowfullscreen="" className="w-full h-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.2755250495394!2d14.346853177114175!3d50.081113613217425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95d038f6365b%3A0x836f696e0ca8579f!2sKudrnova%2027%2F95%2C%20150%2000%20Praha%205-Motol!5e0!3m2!1scs!2scz!4v1711234567890!5m2!1scs!2scz"></iframe>
</div>
<div className="border-zinc-700 border-t pt-10">
<h4 className="uppercase text-sm font-medium text-zinc-500 tracking-widest mb-4">
                Ke stažení
              </h4>
<div className="flex flex-wrap gap-4">
<a className="flex items-center gap-2 text-zinc-400 hover:text-[#00A651] transition-colors text-sm border border-zinc-700 rounded-lg px-4 py-2 hover:border-[#00A651]" href="#">
<iconify-icon icon="solar:document-linear" strokeWidth="1.5"></iconify-icon>
                  Ceník našich služeb
                </a>
<a className="flex items-center gap-2 text-zinc-400 hover:text-[#00A651] transition-colors text-sm border border-zinc-700 rounded-lg px-4 py-2 hover:border-[#00A651]" href="#">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                  Certifikáty a osvědčení
                </a>
</div>
</div>
</div>
</div>
<div className="flex text-xs text-zinc-600 text-center border-zinc-800 border-t mt-16 pt-8 items-center justify-between">
<p>© 2024 SEBAK. Všechna práva vyhrazena.</p>
<p className="uppercase tracking-tight">Více než 30 let zkušeností</p>
</div>
</div>
</footer>


    </>
  );
}
