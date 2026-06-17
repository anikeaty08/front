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



                (function(){var form=document.getElementById('hero-contact-form');if(!form)return;form.addEventListener('submit',function(e){e.preventDefault();var btn=document.getElementById('hcf-submit');var label=document.getElementById('hcf-submit-label');var errEl=document.getElementById('hcf-error');var success=document.getElementById('hero-contact-success');errEl.classList.add('hidden');btn.disabled=true;var prev=label.textContent;label.textContent='Odesílám...';var data={name:form.name.value,phone:form.phone.value,service:form.service.value,message:form.message.value};fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}).then(function(r){if(!r.ok)throw new Error('bad');form.classList.add('hidden');success.classList.remove('hidden');}).catch(function(){errEl.textContent='Něco se pokazilo. Zkuste to prosím znovu.';errEl.classList.remove('hidden');btn.disabled=false;label.textContent=prev;});});})();
              
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
      

<nav className="absolute top-0 inset-x-0 z-30">
<div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-lg accent-gradient flex items-center justify-center font-bold tracking-tighter text-sm text-white">
            ZF
          </div>
<span className="font-semibold tracking-tight text-sm">
            Zateplení Šumperk
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-stone-600">
<a className="hover:text-stone-900" href="#sluzby">Služby</a>
<a className="hover:text-stone-900" href="#proc-my">Proč my</a>
<a className="hover:text-stone-900" href="#recenze">Recenze</a>
<a className="hover:text-stone-900" href="#kontakt">Kontakt</a>
</div>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition bg-stone-900 text-white hover:bg-stone-800" href="tel:722947657">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
          722 947 657
        </a>
</div>
</nav>

<section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
<div className="absolute inset-0 grain opacity-60"></div>
<div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-50 bg-orange-100"></div>
<div className="relative max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-5 gap-12 items-center">

<div className="lg:col-span-3">
<div className="inline-flex items-center gap-2 border rounded-full px-3 py-1.5 text-xs mb-6 shadow-sm bg-white border-stone-200 text-stone-600">
<span className="w-2 h-2 rounded-full animate-pulse bg-red-500"></span>
              Otevřeno 24/7 · Šumperk a okolí
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance mb-6">
              Zateplíme váš dům
              <br/>
<span className="serif italic text-orange-600">precizně</span>
              a férově.
            </h1>
<p className="text-lg max-w-xl text-balance mb-8 leading-relaxed text-stone-600">
              Lokální zednická firma ze Šumperka. Snížíme vám náklady na energie
              a zvýšíme hodnotu nemovitosti — díky kvalitnímu zateplení fasád a
              kompletním stavebním pracím.
            </p>
<div className="flex flex-wrap items-center gap-6 text-sm mb-8 text-stone-600">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:star-linear" width="18"></iconify-icon>
<span>5★ recenze</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span className="">Záruka kvality</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:hand-shake-linear" width="18"></iconify-icon>
<span>Férové jednání</span>
</div>
</div>
</div>

<div className="lg:col-span-2">
<div className="rounded-2xl border shadow-xl p-7 bg-white border-stone-200 shadow-stone-200/50">
<div className="mb-5">
<h3 className="text-lg font-semibold tracking-tight">
                  Nezávazná poptávka
                </h3>
<p className="text-sm text-stone-500 mt-1">
                  Ozveme se vám do 24 hodin.
                </p>
</div>
<form action="https://formsubmit.co/info@zatepleni-sumperk.cz" className="space-y-3" id="hero-contact-form" method="POST" novalidate="">
<div className="">
<input className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition bg-stone-50 border-stone-200" id="hcf-name" name="name" placeholder="Jméno a příjmení" required="" type="text"/>
</div>
<div className="">
<input className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition bg-stone-50 border-stone-200" id="hcf-phone" name="phone" placeholder="Telefon" required="" type="tel"/>
</div>
<div className="">
<select className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition text-stone-500 appearance-none bg-stone-50 border-stone-200" id="hcf-service" name="service" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22%23999%22 viewBox=%220 0 16 16%22%3E%3Cpath d=%22M3.204 5h9.592L8 10.481 3.204 5zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z%22/%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center'}}>
<option value="">Co potřebujete?</option>
<option value="zatepleni-fasady">Zateplení fasády</option>
<option value="rekonstrukce-domu">Rekonstrukce domu</option>
<option value="zednicke-prace">Zednické práce</option>
<option value="jine">Něco jiného</option>
</select>
</div>
<div className="">
<textarea className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition resize-none bg-stone-50 border-stone-200" id="hcf-message" name="message" placeholder="Stručný popis (volitelné)" rows="3"></textarea>
</div>
<input className="" name="_subject" type="hidden" value="Nová poptávka z webu"/>
<input name="_captcha" type="hidden" value="false"/>
<input name="_template" type="hidden" value="table"/>
<button className="accent-gradient hover:opacity-90 transition flex shadow-orange-500/20 disabled:opacity-60 disabled:cursor-not-allowed text-sm font-semibold w-full rounded-lg pt-3.5 pb-3.5 shadow-lg gap-x-2 gap-y-2 items-center justify-center text-white" id="hcf-submit" type="submit">
<span className="" id="hcf-submit-label">Získat cenovou nabídku</span>
<iconify-icon className="" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<p className="hidden text-xs text-center pt-1 text-red-600" id="hcf-error">
                  Něco se pokazilo. Zkuste to prosím znovu.
                </p>
<p className="text-xs text-center pt-1 text-stone-400">
                  Zdarma a bez závazku
                </p>
</form>
<div className="hidden text-center py-8" id="hero-contact-success">
<div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 bg-red-100 text-red-600">
<iconify-icon icon="solar:check-circle-bold" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">
                  Děkujeme!
                </h4>
<p className="text-sm text-stone-600">Ozveme se vám do 24 hodin.</p>
</div>

</div>
</div>
</div>
</div>
</section>

<section className="border-y py-8 border-stone-200 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-xs uppercase tracking-widest text-center mb-6 text-stone-400">
          Důvěřujte profesionálům
        </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
<div className="flex items-center justify-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="28"></iconify-icon>
<div>
<div className="font-semibold text-sm tracking-tight">5.0 / 5.0</div>
<div className="text-xs text-stone-500">Hodnocení Google</div>
</div>
</div>
<div className="flex items-center justify-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:medal-ribbons-star-linear" width="28"></iconify-icon>
<div>
<div className="font-semibold text-sm tracking-tight">10+ let</div>
<div className="text-xs text-stone-500">Zkušeností</div>
</div>
</div>
<div className="flex items-center justify-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:home-2-linear" width="28"></iconify-icon>
<div>
<div className="font-semibold text-sm tracking-tight">200+ domů</div>
<div className="text-xs text-stone-500">Zatepleno</div>
</div>
</div>
<div className="flex items-center justify-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:clock-circle-linear" width="28"></iconify-icon>
<div>
<div className="font-semibold text-sm tracking-tight">24/7</div>
<div className="text-xs text-stone-500">Dostupnost</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32" id="sluzby">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<p className="text-xs uppercase tracking-widest mb-3 font-medium text-orange-600">
            Naše služby
          </p>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-balance leading-tight">
            Od oprav po
            <span className="serif italic">kompletní stavbu</span>
            rodinných domů.
          </h2>
<p className="mt-5 text-balance text-stone-600">
            Postaráme se o celý projekt na klíč — bez subdodavatelů, bez stresu.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group border rounded-xl p-6 hover:border-orange-500 hover:shadow-lg transition-all md:col-span-2 md:row-span-2 relative overflow-hidden bg-white border-stone-200">
<div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl bg-orange-50"></div>
<div className="relative">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-12 bg-orange-100 text-orange-600">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">
                Zateplení fasád
              </h3>
<p className="text-sm leading-relaxed mb-6 max-w-md text-stone-600">
                Naše hlavní specializace. Snížíte náklady na vytápění až o 40 %
                a získáte krásnou novou fasádu. Používáme prověřené systémy s
                dlouhou životností.
              </p>
<ul className="space-y-2 text-sm text-stone-700">
<li className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
                  Komplet na klíč včetně lešení
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
                  Pomoc s žádostí o dotaci
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
                  Záruka na provedení
                </li>
</ul>
</div>
</div>
<div className="border rounded-xl p-6 hover:border-orange-500 hover:shadow-lg transition-all bg-white border-stone-200">
<div className="inline-flex items-center justify-center w-11 h-11 rounded-lg mb-4 bg-stone-100 text-stone-700">
<iconify-icon icon="solar:wall-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight mb-1.5">Zednické práce</h3>
<p className="text-sm text-stone-500">
              Cihly, tvárnice, kompletní zdění.
            </p>
</div>
<div className="border rounded-xl p-6 hover:border-orange-500 hover:shadow-lg transition-all bg-white border-stone-200">
<div className="inline-flex items-center justify-center w-11 h-11 rounded-lg mb-4 bg-stone-100 text-stone-700">
<iconify-icon icon="solar:hammer-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight mb-1.5">Renovace domů</h3>
<p className="text-sm text-stone-500">
              Kompletní rekonstrukce starších budov.
            </p>
</div>
<div className="border rounded-xl p-6 hover:border-orange-500 hover:shadow-lg transition-all bg-white border-stone-200">
<div className="inline-flex items-center justify-center w-11 h-11 rounded-lg mb-4 bg-stone-100 text-stone-700">
<iconify-icon icon="solar:settings-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight mb-1.5">Opravy zdiva</h3>
<p className="text-sm text-stone-500">
              Údržba a opravy poškozeného zdiva.
            </p>
</div>
<div className="border rounded-xl p-6 hover:border-orange-500 hover:shadow-lg transition-all bg-white border-stone-200">
<div className="inline-flex items-center justify-center w-11 h-11 rounded-lg mb-4 bg-stone-100 text-stone-700">
<iconify-icon icon="solar:layers-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight mb-1.5">Sádrokartony</h3>
<p className="text-sm text-stone-500">Opravy a montáže příček.</p>
</div>
<div className="border rounded-xl p-6 hover:border-orange-500 hover:shadow-lg transition-all bg-white border-stone-200">
<div className="inline-flex items-center justify-center w-11 h-11 rounded-lg mb-4 bg-stone-100 text-stone-700">
<iconify-icon icon="solar:eraser-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight mb-1.5">
              Odstranění nátěrů
            </h3>
<p className="text-sm text-stone-500">
              Příprava povrchů pro novou úpravu.
            </p>
</div>
<div className="border rounded-xl p-6 hover:border-orange-500 hover:shadow-lg transition-all bg-white border-stone-200">
<div className="inline-flex items-center justify-center w-11 h-11 rounded-lg mb-4 bg-stone-100 text-stone-700">
<iconify-icon icon="solar:palette-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight mb-1.5">Malování</h3>
<p className="text-sm text-stone-500">
              Interiér i exteriér, čistě a rychle.
            </p>
</div>
<div className="rounded-xl p-6 transition-all cursor-pointer bg-stone-900 text-white hover:bg-stone-800">
<div className="inline-flex items-center justify-center w-11 h-11 bg-orange-500 rounded-lg mb-4 text-white">
<iconify-icon icon="solar:buildings-3-linear" width="22"></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight mb-1.5">Výstavba RD</h3>
<p className="text-sm text-stone-400">Rodinné domy na klíč.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative overflow-hidden bg-stone-900 text-white" id="proc-my">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-3xl"></div>
<div className="relative max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div className="lg:sticky lg:top-24">
<p className="text-xs uppercase tracking-widest mb-3 font-medium text-orange-400">
              Proč právě my
            </p>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-balance leading-tight mb-6">
              Lokální řemeslník,
              <br/>
              kterému
              <span className="serif italic text-orange-400">můžete věřit.</span>
</h2>
<p className="text-balance mb-8 leading-relaxed text-stone-400">
              Nejsme velká korporace. Jsme lokální firma ze Šumperka, která si
              zakládá na osobním přístupu a poctivé práci. Každý projekt vedeme
              osobně.
            </p>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition bg-white text-stone-900 hover:bg-stone-100" href="#kontakt">
              Nezávazná konzultace
              <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="space-y-4">
<div className="border rounded-xl p-6 transition border-stone-700 hover:bg-stone-800/50">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0 text-orange-400">
<iconify-icon icon="solar:medal-star-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold tracking-tight mb-2">
                    Vysoká kvalita práce
                  </h3>
<p className="text-sm leading-relaxed text-stone-400">
                    Pětihvězdičkové recenze od skutečných zákazníků. Každý
                    detail řešíme s precizností.
                  </p>
</div>
</div>
</div>
<div className="border rounded-xl p-6 transition border-stone-700 hover:bg-stone-800/50">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0 text-orange-400">
<iconify-icon icon="solar:hand-shake-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold tracking-tight mb-2">
                    Férové jednání
                  </h3>
<p className="text-sm leading-relaxed text-stone-400">
                    Žádné skryté poplatky. Cenovou nabídku dostanete písemně a
                    budeme se jí držet.
                  </p>
</div>
</div>
</div>
<div className="border rounded-xl p-6 transition border-stone-700 hover:bg-stone-800/50">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0 text-orange-400">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold tracking-tight mb-2">
                    Místní firma ze Šumperka
                  </h3>
<p className="text-sm leading-relaxed text-stone-400">
                    Jsme tu pro vás osobně. Známe region, klimatické podmínky i
                    lokální dodavatele.
                  </p>
</div>
</div>
</div>
<div className="border rounded-xl p-6 transition border-stone-700 hover:bg-stone-800/50">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0 text-orange-400">
<iconify-icon icon="solar:widget-5-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold tracking-tight mb-2">
                    Široké spektrum služeb
                  </h3>
<p className="text-sm leading-relaxed text-stone-400">
                    Od drobných oprav po výstavbu rodinného domu. Vše pod jednou
                    střechou.
                  </p>
</div>
</div>
</div>
<div className="border rounded-xl p-6 transition border-stone-700 hover:bg-stone-800/50">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0 text-orange-400">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold tracking-tight mb-2">
                    Dostupnost 24/7
                  </h3>
<p className="text-sm leading-relaxed text-stone-400">
                    Zavolejte kdykoliv. Reagujeme rychle a domluvíme prohlídku v
                    nejbližším termínu.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32" id="recenze">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<p className="text-xs uppercase tracking-widest mb-3 font-medium text-orange-600">
            Recenze
          </p>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-balance leading-tight">
            Co o nás říkají
            <br/>
<span className="serif italic">naši zákazníci.</span>
</h2>
<div className="flex items-center gap-3 mt-6">
<div className="flex gap-0.5">
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="22"></iconify-icon>
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="22"></iconify-icon>
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="22"></iconify-icon>
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="22"></iconify-icon>
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="22"></iconify-icon>
</div>
<span className="font-semibold text-sm">5.0</span>
<span className="text-stone-500 text-sm">· Hodnocení Google</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-5">
<div className="border rounded-2xl p-7 bg-white border-stone-200">
<div className="flex gap-0.5 mb-4">
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="leading-relaxed mb-6 text-balance text-stone-700">
              "Naprostá spokojenost. Pánové odvedli kvalitní práci při zateplení
              našeho domu, dodrželi termín i cenu. Doporučuji."
            </p>
<div className="flex items-center gap-3 pt-4 border-t border-stone-100">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm bg-orange-100 text-orange-700">
                JN
              </div>
<div>
<div className="font-semibold text-sm">Jan Novák</div>
<div className="text-xs text-stone-500">Šumperk · Zateplení RD</div>
</div>
</div>
</div>
<div className="border rounded-2xl p-7 md:translate-y-6 bg-white border-stone-200">
<div className="flex gap-0.5 mb-4">
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="leading-relaxed mb-6 text-balance text-stone-700">
              "Skvělá komunikace od první chvíle. Rekonstrukce proběhla rychle a
              kvalitně. Cítila jsem se v dobrých rukách."
            </p>
<div className="flex items-center gap-3 pt-4 border-t border-stone-100">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm bg-orange-100 text-orange-700">
                MS
              </div>
<div>
<div className="font-semibold text-sm">Marie Svobodová</div>
<div className="text-xs text-stone-500">Zábřeh · Rekonstrukce</div>
</div>
</div>
</div>
<div className="border rounded-2xl p-7 bg-white border-stone-200">
<div className="flex gap-0.5 mb-4">
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-orange-500" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="leading-relaxed mb-6 text-balance text-stone-700">
              "Férové ceny, žádné překvapení v rozpočtu. Pracovali profesionálně
              a po sobě uklidili. Hvězdičky zaslouženě."
            </p>
<div className="flex items-center gap-3 pt-4 border-t border-stone-100">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm bg-orange-100 text-orange-700">
                PD
              </div>
<div>
<div className="font-semibold text-sm">Petr Dvořák</div>
<div className="text-xs text-stone-500">
                  Mohelnice · Zednické práce
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative overflow-hidden bg-stone-50" id="kontakt">
<div className="absolute inset-0 grain opacity-60"></div>
<div className="relative max-w-5xl mx-auto px-6">
<div className="bg-gradient-to-br rounded-3xl p-10 lg:p-16 relative overflow-hidden from-stone-900 via-stone-900 to-orange-950 text-white">
<div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"></div>
<div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
<div className="relative">
<div className="max-w-2xl">
<p className="text-xs uppercase tracking-widest mb-4 font-medium text-orange-400">
                Začněme
              </p>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-balance leading-tight mb-6">
                Připraveni dát vašemu domu
                <span className="serif italic text-orange-400">nový kabát?</span>
</h2>
<p className="text-balance mb-10 leading-relaxed text-stone-300">
                Zavolejte nám nebo napište. Domluvíme prohlídku zdarma a
                připravíme cenovou nabídku přesně pro váš projekt.
              </p>
</div>
<div className="grid sm:grid-cols-2 gap-4 mb-10">
<a className="rounded-2xl p-6 transition group bg-white text-stone-900 hover:bg-stone-100" href="tel:722947657">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-orange-600" icon="solar:phone-calling-linear" width="22"></iconify-icon>
<span className="text-sm font-medium text-stone-500">
                    Zavolejte nyní
                  </span>
</div>
<div className="text-2xl font-semibold tracking-tight flex items-center justify-between">
                  722 947 657
                  <iconify-icon className="group-hover:text-orange-600 transition text-stone-400" icon="solar:arrow-right-up-linear" width="22"></iconify-icon>
</div>
</a>
<a className="bg-orange-500 rounded-2xl p-6 transition group text-white hover:bg-orange-600" href="#">
<div className="flex items-center gap-3 mb-3">
<iconify-icon icon="solar:chat-round-line-linear" width="22"></iconify-icon>
<span className="text-sm font-medium text-orange-100">
                    Napište nám
                  </span>
</div>
<div className="text-2xl font-semibold tracking-tight flex items-center justify-between">
                  Poslat poptávku
                  <iconify-icon className="group-hover:text-white transition text-orange-200" icon="solar:arrow-right-up-linear" width="22"></iconify-icon>
</div>
</a>
</div>
<div className="flex flex-wrap items-center gap-6 text-sm pt-8 border-t text-stone-400 border-stone-700">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-400" icon="solar:clock-circle-linear" width="18"></iconify-icon>
                Otevřeno 24/7
              </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-400" icon="solar:map-point-linear" width="18"></iconify-icon>
                Šumperk a okolí
              </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
                Nabídka zdarma
              </div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t py-10 border-stone-200 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg accent-gradient flex items-center justify-center font-bold tracking-tighter text-xs text-white">
            ZF
          </div>
<span className="font-semibold tracking-tight text-sm">
            Zateplení fasád Šumperk
          </span>
</div>
<div className="text-xs text-stone-500">
          © 2025 Zednické práce Šumperk · Všechna práva vyhrazena
        </div>
</div>
</footer>

    </>
  );
}
