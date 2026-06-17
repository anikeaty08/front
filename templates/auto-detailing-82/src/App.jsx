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



      document.querySelectorAll('.ba-slider').forEach(function(slider){var after=slider.querySelector('.ba-after');var handle=slider.querySelector('.ba-handle');if(handle){handle.style.touchAction='none';handle.style.userSelect='none';handle.style.webkitUserSelect='none';}slider.style.touchAction='none';slider.style.userSelect='none';slider.style.webkitUserSelect='none';var dragging=false;function setPosition(clientX){var rect=slider.getBoundingClientRect();var position=((clientX-rect.left)/rect.width)*100;position=Math.max(0,Math.min(100,position));after.style.width=position+'%';handle.style.left=position+'%';}slider.addEventListener('touchstart',function(event){dragging=true;if(event.touches&&event.touches[0])setPosition(event.touches[0].clientX);},{passive:false});slider.addEventListener('touchmove',function(event){if(dragging){event.preventDefault();if(event.touches&&event.touches[0])setPosition(event.touches[0].clientX);}},{passive:false});slider.addEventListener('touchend',function(){dragging=false;});slider.addEventListener('touchcancel',function(){dragging=false;});});
    


      const menuOpen = document.getElementById('menuOpen');
      const menuClose = document.getElementById('menuClose');
      const mobileMenu = document.getElementById('mobileMenu');

      function openMenu() {
        mobileMenu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
      }

      function closeMenu() {
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = '';
      }

      menuOpen.addEventListener('click', openMenu);
      menuClose.addEventListener('click', closeMenu);
      document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', closeMenu));

      document.querySelectorAll('.faq-btn').forEach(button => {
        button.addEventListener('click', () => {
          const item = button.closest('.faq-item');
          const content = item.querySelector('.faq-content');
          const icon = item.querySelector('.faq-icon');
          const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

          document.querySelectorAll('.faq-content').forEach(panel => panel.style.maxHeight = '0px');
          document.querySelectorAll('.faq-icon').forEach(symbol => symbol.textContent = '+');

          if (!isOpen) {
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.textContent = '–';
          }
        });
      });

      document.querySelectorAll('.ba-slider').forEach(slider => {
        const after = slider.querySelector('.ba-after');
        const handle = slider.querySelector('.ba-handle');
        let dragging = false;

        const setPosition = clientX => {
          const rect = slider.getBoundingClientRect();
          let position = ((clientX - rect.left) / rect.width) * 100;
          position = Math.max(0, Math.min(100, position));
          after.style.width = position + '%';
          handle.style.left = position + '%';
        };

        slider.addEventListener('pointerdown', event => {
          dragging = true;
          slider.setPointerCapture(event.pointerId);
          setPosition(event.clientX);
        });

        slider.addEventListener('pointermove', event => {
          if (dragging) setPosition(event.clientX);
        });

        slider.addEventListener('pointerup', () => dragging = false);
        slider.addEventListener('pointercancel', () => dragging = false);
      });

      document.querySelectorAll('.custom-select').forEach(select => {
        const button = select.querySelector('.select-button');
        const menu = select.querySelector('.select-menu');
        const label = select.querySelector('.select-label');
        const input = select.querySelector('input[type="hidden"]');

        button.addEventListener('click', () => {
          document.querySelectorAll('.select-menu').forEach(other => {
            if (other !== menu) other.classList.add('hidden');
          });
          menu.classList.toggle('hidden');
        });

        select.querySelectorAll('.select-option').forEach(option => {
          option.addEventListener('click', () => {
            input.value = option.dataset.value;
            label.textContent = option.dataset.value;
            label.classList.remove('text-[#888888]');
            menu.classList.add('hidden');
          });
        });
      });

      document.addEventListener('click', event => {
        if (!event.target.closest('.custom-select')) {
          document.querySelectorAll('.select-menu').forEach(menu => menu.classList.add('hidden'));
        }
      });

      const revealItems = document.querySelectorAll('.reveal');
      revealItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(24px)';
        item.style.transition = 'opacity 700ms ease, transform 700ms ease';
      });

      const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      revealItems.forEach(item => revealObserver.observe(item));

      const bottomBar = document.getElementById('mobileBottomBar');
      const hero = document.getElementById('hero');

      const barObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            bottomBar.classList.add('hidden');
          } else {
            bottomBar.classList.remove('hidden');
          }
        });
      }, { threshold: 0.16 });

      barObserver.observe(hero);
    


      (function(){var form=document.getElementById('contactForm');if(!form)return;var status=document.getElementById('formStatus');
      var nameInput=form.querySelector('input[name="jmeno"]');
      var phoneInput=form.querySelector('input[name="telefon"]');
      var serviceInput=form.querySelector('input[name="sluzba"]');
      var serviceButton=form.querySelector('.custom-select[data-name="sluzba"] .select-button');
      var errName=form.querySelector('[data-error="jmeno"]');
      var errPhone=form.querySelector('[data-error="telefon"]');
      var errService=form.querySelector('[data-error="sluzba"]');
      function setError(el,errEl,hasError){if(hasError){if(el){el.classList.remove('border-[#0E0E0E]/10');el.classList.add('border-red-600');}if(errEl)errEl.classList.remove('hidden');}else{if(el){el.classList.remove('border-red-600');el.classList.add('border-[#0E0E0E]/10');}if(errEl)errEl.classList.add('hidden');}}
      function validate(){var ok=true;
        var nameVal=(nameInput&&nameInput.value||'').trim();
        var nameBad=nameVal.length<2;setError(nameInput,errName,nameBad);if(nameBad)ok=false;
        var phoneVal=(phoneInput&&phoneInput.value||'').trim();
        var digits=phoneVal.replace(/\\s+/g,'');
        var phoneBad=!/^[0-9]+$/.test(digits)||digits.length<9;setError(phoneInput,errPhone,phoneBad);if(phoneBad)ok=false;
        var serviceVal=(serviceInput&&serviceInput.value||'').trim();
        var serviceBad=serviceVal.length===0;setError(serviceButton,errService,serviceBad);if(serviceBad)ok=false;
        return ok;}
      form.addEventListener('submit',function(e){e.preventDefault();if(status){status.classList.add('hidden');}if(!validate())return;var name=(nameInput||{}).value||'';var phone=(phoneInput||{}).value||'';var service=(serviceInput||{}).value||'';var message=(form.querySelector('textarea[name="zprava"]')||{}).value||'';var payload={access_key:'a9af44a0-b351-479c-92cb-04bc55873d65',name:name,phone:phone,service:service,message:message};fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(payload)}).then(function(r){return r.json()}).then(function(data){if(data&&data.success){status.textContent='Děkujeme! Ozveme se do 2 hodin.';status.classList.remove('hidden','text-red-600');status.classList.add('text-green-600');form.reset();var lbl=form.querySelector('.select-label');if(lbl){lbl.textContent='Vyberte službu';lbl.classList.add('text-[#888888]');}}else{status.textContent='Něco se pokazilo. Zavolejte nám na 721 200 357.';status.classList.remove('hidden','text-green-600');status.classList.add('text-red-600');}}).catch(function(){status.textContent='Něco se pokazilo. Zavolejte nám na 721 200 357.';status.classList.remove('hidden','text-green-600');status.classList.add('text-red-600');});});})();
    


      (function(){var form=document.getElementById('contactForm');if(!form)return;var status=document.getElementById('formStatus');
      var toast=document.getElementById('toastNotification');var toastTimer=null;
      function showToast(){if(!toast)return;toast.classList.remove('opacity-0','-translate-y-4');toast.classList.add('opacity-100','translate-y-0');if(toastTimer)clearTimeout(toastTimer);toastTimer=setTimeout(function(){toast.classList.remove('opacity-100','translate-y-0');toast.classList.add('opacity-0','-translate-y-4');},4000);}
      var nameInput=form.querySelector('input[name="jmeno"]');
      var phoneInput=form.querySelector('input[name="telefon"]');
      var serviceInput=form.querySelector('input[name="sluzba"]');
      var serviceButton=form.querySelector('.custom-select[data-name="sluzba"] .select-button');
      var errName=form.querySelector('[data-error="jmeno"]');
      var errPhone=form.querySelector('[data-error="telefon"]');
      var errService=form.querySelector('[data-error="sluzba"]');
      function setError(el,errEl,hasError){if(hasError){if(el){el.classList.remove('border-[#0E0E0E]/10');el.classList.add('border-red-600');}if(errEl)errEl.classList.remove('hidden');}else{if(el){el.classList.remove('border-red-600');el.classList.add('border-[#0E0E0E]/10');}if(errEl)errEl.classList.add('hidden');}}
      function validate(){var ok=true;
        var nameVal=(nameInput&&nameInput.value||'').trim();
        var nameBad=nameVal.length<2;setError(nameInput,errName,nameBad);if(nameBad)ok=false;
        var phoneVal=(phoneInput&&phoneInput.value||'').trim();
        var digits=phoneVal.replace(/\s+/g,'');
        var phoneBad=!/^[0-9]+$/.test(digits)||digits.length<9;setError(phoneInput,errPhone,phoneBad);if(phoneBad)ok=false;
        var serviceVal=(serviceInput&&serviceInput.value||'').trim();
        var serviceBad=serviceVal.length===0;setError(serviceButton,errService,serviceBad);if(serviceBad)ok=false;
        return ok;}
      form.addEventListener('submit',function(e){e.preventDefault();if(status){status.classList.add('hidden');}if(!validate())return;var name=(nameInput||{}).value||'';var phone=(phoneInput||{}).value||'';var service=(serviceInput||{}).value||'';var message=(form.querySelector('textarea[name="zprava"]')||{}).value||'';var payload={access_key:'a9af44a0-b351-479c-92cb-04bc55873d65',name:name,phone:phone,service:service,message:message};fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(payload)}).then(function(r){return r.json()}).then(function(data){if(data&&data.success){showToast();form.reset();if(serviceInput)serviceInput.value='';var lbl=form.querySelector('.select-label');if(lbl){lbl.textContent='Vyberte službu';lbl.classList.add('text-[#888888]');}}else{status.textContent='Něco se pokazilo. Zavolejte nám na 721 200 357.';status.classList.remove('hidden','text-green-600');status.classList.add('text-red-600');}}).catch(function(){status.textContent='Něco se pokazilo. Zavolejte nám na 721 200 357.';status.classList.remove('hidden','text-green-600');status.classList.add('text-red-600');});},true);})();
    
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
      
<header className="min-h-[90vh] lg:min-h-screen overflow-hidden bg-[#0E0E0E] z-20 relative" id="hero">
<div className="absolute inset-0 bg-[#0E0E0E]"></div>
<nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
<a aria-label="Detailing By Max domů" className="group inline-flex items-center gap-3" href="#hero">
<span className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-[#D4A24C]/60 bg-[#0E0E0E] overflow-hidden shrink-0">
<img alt="Detailing By Max" className="h-full w-full object-contain scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f960f62e-426a-4fdd-b0fd-50d5c2b83279_800w.png"/>
</span>
<span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18rem] text-[#F5F2EC]">
            DETAILING
            <span className="text-[#D4A24C]">BY MAX</span>
</span>
</a>
<div className="hidden items-center gap-8 lg:flex">
<a className="text-sm font-medium text-[#F5F2EC]/75 transition hover:text-[#D4A24C]" href="#sluzby">
            Služby
          </a>
<a className="text-sm font-medium text-[#F5F2EC]/75 transition hover:text-[#D4A24C]" href="#realizace">
            Realizace
          </a>
<a className="text-sm font-medium text-[#F5F2EC]/75 transition hover:text-[#D4A24C]" href="#omne">
            O mně
          </a>
<a className="text-sm font-medium text-[#F5F2EC]/75 transition hover:text-[#D4A24C]" href="#kontakt">
            Kontakt
          </a>
<a className="inline-flex items-center gap-2 rounded-full border border-[#F5F2EC]/15 bg-[#F5F2EC]/5 px-4 py-2 text-sm font-semibold text-[#F5F2EC] transition hover:border-[#D4A24C]/60 hover:bg-[#D4A24C]/10" href="tel:+420721200357">
<iconify-icon className="" icon="solar:phone-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
            721 200 357
          </a>
</div>
<button aria-label="Otevřít menu" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#F5F2EC]/15 bg-[#F5F2EC]/5 text-[#F5F2EC] lg:hidden" id="menuOpen">
<iconify-icon icon="solar:hamburger-menu-linear" style={{fontSize: '1.35rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
</nav>
<div className="fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm translate-x-full bg-[#0E0E0E] p-6 shadow-2xl shadow-black/50 transition duration-300 lg:hidden" id="mobileMenu">
<div className="mb-12 flex items-center justify-between">
<span className="text-xs font-semibold uppercase tracking-[0.18rem] text-[#F5F2EC]">
            DETAILING
            <span className="text-[#D4A24C]">BY MAX</span>
</span>
<button aria-label="Zavřít menu" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F5F2EC]/15 text-[#F5F2EC]" id="menuClose">
<iconify-icon icon="solar:close-circle-linear" style={{fontSize: '1.35rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-2">
<a className="mobile-link rounded-2xl px-4 py-4 text-2xl font-semibold tracking-tight text-[#F5F2EC] transition hover:bg-[#1A1A1A] hover:text-[#D4A24C]" href="#sluzby">
            Služby
          </a>
<a className="mobile-link rounded-2xl px-4 py-4 text-2xl font-semibold tracking-tight text-[#F5F2EC] transition hover:bg-[#1A1A1A] hover:text-[#D4A24C]" href="#realizace">
            Realizace
          </a>
<a className="mobile-link rounded-2xl px-4 py-4 text-2xl font-semibold tracking-tight text-[#F5F2EC] transition hover:bg-[#1A1A1A] hover:text-[#D4A24C]" href="#omne">
            O mně
          </a>
<a className="mobile-link rounded-2xl px-4 py-4 text-2xl font-semibold tracking-tight text-[#F5F2EC] transition hover:bg-[#1A1A1A] hover:text-[#D4A24C]" href="#kontakt">
            Kontakt
          </a>
</div>
<div className="mt-10 rounded-3xl border border-[#D4A24C]/25 bg-[#D4A24C]/10 p-5">
<p className="text-xs uppercase tracking-[0.16rem] text-[#D4A24C]">
            Rychlý kontakt
          </p>
<a className="mt-3 flex items-center gap-3 text-xl font-semibold tracking-tight text-[#F5F2EC]" href="tel:+420721200357">
<iconify-icon icon="solar:phone-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
            721 200 357
          </a>
</div>
</div>
<div className="relative z-20 mx-auto flex min-h-[calc(90vh-5rem)] max-w-7xl items-center px-5 pb-20 pt-10 sm:px-6 lg:min-h-[calc(100vh-5rem)] lg:px-8">
<div className="max-w-4xl">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F5F2EC]/12 bg-[#F5F2EC]/6 px-3 py-2 text-xs font-medium text-[#F5F2EC]/75 backdrop-blur">
<span className="h-2 w-2 rounded-full bg-[#D4A24C] shadow-lg shadow-[#D4A24C]/40"></span>
            Jeden detailer. Jedna kvalita. Jihlava.
          </div>
<h1 className="max-w-5xl text-5xl font-bold leading-[0.98] tracking-tight text-[#F5F2EC] sm:text-6xl lg:text-7xl xl:text-8xl">
            Vašemu autu se tady věnuje jeden člověk od začátku do konce.
          </h1>
<p className="mt-7 max-w-2xl text-lg leading-8 text-[#F5F2EC]/68 sm:text-xl">
            Jmenuju se Max a dělám detailing v Jihlavě tak, jak bych ho chtěl
            mít na svém vlastním autě.
          </p>
<div className="mt-9 flex flex-col gap-3 sm:flex-row">
<a className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A24C] px-7 py-4 text-sm font-semibold text-[#0E0E0E] shadow-xl shadow-[#D4A24C]/15 transition duration-300 hover:scale-[1.02] hover:shadow-[#D4A24C]/25" href="#kontakt">
              Objednat termín
              <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F5F2EC]/28 bg-[#F5F2EC]/5 px-7 py-4 text-sm font-semibold text-[#F5F2EC] backdrop-blur transition duration-300 hover:scale-[1.02] hover:border-[#F5F2EC]/55 hover:bg-[#F5F2EC]/10" href="tel:+420721200357">
<iconify-icon icon="solar:phone-calling-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
              721 200 357
            </a>
</div>
<p className="mt-6 text-sm leading-6 text-[#F5F2EC]/55">
            ★ 5.0 na Google  •  Jihlava, Alšova
            1889  •  Po-So 6-19, Ne 9-17
          </p>
</div>
</div>
</header>
<main className="">
<section className="reveal bg-[#F5F2EC] py-20 text-[#0E0E0E] sm:py-28" id="sluzby" style={{transition: 'opacity 700ms, transform 700ms'}}>
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="mb-12 max-w-3xl">
<p className="mb-3 text-sm font-semibold uppercase tracking-[0.16rem] text-[#D4A24C]">
              Služby
            </p>
<h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Co konkrétně dělám
            </h2>
<p className="mt-4 text-lg leading-8 text-[#66615A]">
              Šest nejžádanějších služeb. Žádné kompromisy.
            </p>
</div>
<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
<article className="group overflow-hidden rounded-[2rem] border border-[#0E0E0E]/8 bg-white/45 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D4A24C]/70 hover:shadow-xl hover:shadow-[#0E0E0E]/10">
<div className="relative h-64 overflow-hidden bg-[#161616]">
<img alt="Chemické čištění interiéru" className="absolute inset-0 h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/36290c92-b69c-4fa3-8e35-cdb1b5d79e51_3840w.png"/>
</div>
<div className="p-6">
<h3 className="text-2xl font-semibold tracking-tight">
                  Chemické čištění interiéru
                </h3>
<p className="mt-3 min-h-24 text-sm leading-7 text-[#5F5A53]">
                  Hloubkové čištění sedadel, koberců, stropu a plastů.
                  Odstranění zápachu po psech i kuřácích.
                </p>
<div className="mt-5 flex items-center justify-between gap-4">
<p className="text-lg font-semibold text-[#0E0E0E]">
                    od 2 000 Kč
                  </p>
<a className="text-sm font-semibold text-[#B77E24] transition group-hover:text-[#0E0E0E]" href="#kontakt">
                    Více o službě →
                  </a>
</div>
</div>
</article>
<article className="group overflow-hidden rounded-[2rem] border border-[#0E0E0E]/8 bg-white/45 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D4A24C]/70 hover:shadow-xl hover:shadow-[#0E0E0E]/10">
<div className="relative h-64 overflow-hidden bg-[#161616]">
<img alt="Leštění laku" className="absolute inset-0 h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d96ec64-18af-4b4a-bde0-c7e813bf9f95_3840w.png"/>
</div>
<div className="p-6">
<h3 className="text-2xl font-semibold tracking-tight">
                  Leštění laku
                </h3>
<p className="mt-3 min-h-24 text-sm leading-7 text-[#5F5A53]">
                  Odstranění škrábanců, obnova lesku, předpříprava pro keramiku.
                </p>
<div className="mt-5 flex items-center justify-between gap-4">
<p className="text-lg font-semibold text-[#0E0E0E]">
                    od 5 500 Kč
                  </p>
<a className="text-sm font-semibold text-[#B77E24] transition group-hover:text-[#0E0E0E]" href="#kontakt">
                    Více o službě →
                  </a>
</div>
</div>
</article>
<article className="group overflow-hidden rounded-[2rem] border border-[#0E0E0E]/8 bg-white/45 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D4A24C]/70 hover:shadow-xl hover:shadow-[#0E0E0E]/10">
<div className="relative h-64 overflow-hidden bg-[#161616]">
<img alt="Dechrom úprava" className="absolute inset-0 h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0eabd207-c483-4268-bb1b-08c5f565391b_3840w.png"/>
</div>
<div className="p-6">
<h3 className="text-2xl font-semibold tracking-tight">De-Chrome</h3>
<p className="mt-3 min-h-24 text-sm leading-7 text-[#5F5A53]">
                  Permanentní úprava chromovaných prvků do matné černé. Drží
                  roky, ne týdny.
                </p>
<div className="mt-5 flex items-center justify-between gap-4">
<p className="text-lg font-semibold text-[#0E0E0E]">
                    od 1 000 Kč
                  </p>
<a className="text-sm font-semibold text-[#B77E24] transition group-hover:text-[#0E0E0E]" href="#kontakt">
                    Více o službě →
                  </a>
</div>
</div>
</article>
<article className="group overflow-hidden rounded-[2rem] border border-[#0E0E0E]/8 bg-white/45 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D4A24C]/70 hover:shadow-xl hover:shadow-[#0E0E0E]/10">
<div className="relative h-64 overflow-hidden bg-[#161616]">
<img alt="Renovace a lakování disků" className="absolute inset-0 h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6fc7aa55-f866-461c-b229-5df14fbfa77b_3840w.png"/>
</div>
<div className="p-6">
<h3 className="text-2xl font-semibold tracking-tight">
                  Renovace disků
                </h3>
<p className="mt-3 min-h-24 text-sm leading-7 text-[#5F5A53]">
                  Renovace, přelakování, změna barvy. Sada 4 disků za 2–3 dny.
                </p>
<div className="mt-5 flex items-center justify-between gap-4">
<p className="text-lg font-semibold text-[#0E0E0E]">
                    od 4 500 Kč
                  </p>
<a className="text-sm font-semibold text-[#B77E24] transition group-hover:text-[#0E0E0E]" href="#kontakt">
                    Více o službě →
                  </a>
</div>
</div>
</article>
<article className="group overflow-hidden rounded-[2rem] border border-[#0E0E0E]/8 bg-white/45 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D4A24C]/70 hover:shadow-xl hover:shadow-[#0E0E0E]/10">
<div className="relative h-64 overflow-hidden bg-[#161616]">
<img alt="Tónování zadních světel" className="absolute inset-0 h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92529fe7-c78e-4902-a739-b5949cbd9494_3840w.png"/>
</div>
<div className="p-6">
<h3 className="text-2xl font-semibold tracking-tight">
                  Tónování zadních světel
                </h3>
<p className="mt-3 min-h-24 text-sm leading-7 text-[#5F5A53]">
                  Decentní nebo výraznější ztmavení. Bez ztráty viditelnosti.
                </p>
<div className="mt-5 flex items-center justify-between gap-4">
<p className="text-lg font-semibold text-[#0E0E0E]">od 600 Kč</p>
<a className="text-sm font-semibold text-[#B77E24] transition group-hover:text-[#0E0E0E]" href="#kontakt">
                    Více o službě →
                  </a>
</div>
</div>
</article>
<article className="group overflow-hidden rounded-[2rem] border border-[#0E0E0E]/8 bg-white/45 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D4A24C]/70 hover:shadow-xl hover:shadow-[#0E0E0E]/10">
<div className="relative h-64 overflow-hidden bg-[#161616]">
<img alt="Keramická ochrana laku" className="absolute inset-0 h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8678339f-dffd-4580-bff8-471bce0257af_3840w.png"/>
</div>
<div className="p-6">
<h3 className="text-2xl font-semibold tracking-tight">
                  Keramická ochrana laku
                </h3>
<p className="mt-3 min-h-24 text-sm leading-7 text-[#5F5A53]">
                  Dlouhodobá ochrana laku, snadné mytí, brutální lesk.
                  Koch-Chemie, Gyeon, CarPro.
                </p>
<div className="mt-5 flex items-center justify-between gap-4">
<p className="text-lg font-semibold text-[#0E0E0E]">
                    od 2 000 Kč
                  </p>
<a className="text-sm font-semibold text-[#B77E24] transition group-hover:text-[#0E0E0E]" href="#kontakt">
                    Více o službě →
                  </a>
</div>
</div>
</article>
</div>
<p className="mt-10 text-center text-sm leading-7 text-[#66615A]">
            Nabízím celkem 12 služeb — kompletní ceník na vyžádání nebo v sekci
            Kontakt.
          </p>
</div>
</section>
<section className="reveal bg-[#0E0E0E] py-20 text-[#F5F2EC] sm:py-28" id="realizace" style={{transition: 'opacity 700ms, transform 700ms'}}>
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
<div className="max-w-3xl">
<p className="mb-3 text-sm font-semibold uppercase tracking-[0.16rem] text-[#D4A24C]">
                Před / po
              </p>
<h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Vybrané realizace
              </h2>
<p className="mt-4 text-lg leading-8 text-[#888888]">
                Konkrétní auta, konkrétní výsledky.
              </p>
</div>
<a className="hidden rounded-full border border-[#F5F2EC]/15 px-5 py-3 text-sm font-semibold text-[#F5F2EC]/80 transition hover:border-[#D4A24C]/50 hover:text-[#D4A24C] lg:inline-flex" href="#kontakt">
              Chci podobný výsledek
            </a>
</div>
<div className="grid gap-6 lg:grid-cols-2">
<article className="rounded-[2rem] border border-[#F5F2EC]/10 bg-[#1A1A1A] p-4 transition duration-300 hover:border-[#D4A24C]/45">
<div className="ba-slider relative h-80 overflow-hidden rounded-[1.5rem] bg-[#090909]" data-start="50" style={{touchAction: 'none', userSelect: 'none'}}>
<div className="absolute inset-0 h-full w-full bg-[#1A1A1A] flex items-center justify-center">
<img alt="Range Rover 2020 před" className="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f23fd65-dcad-4953-81ae-d207148c621b_1600w.png" style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
</div>
<div className="ba-after absolute inset-y-0 left-0 overflow-hidden" style={{width: '0%'}}>
<div className="absolute inset-0 h-full bg-[#1A1A1A] flex items-center justify-center" style={{width: '100vw'}}>
<img alt="Range Rover 2020 po" className="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc30ac53-d02d-4f09-8e2c-d42138c2f162_1600w.png" style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
</div>
</div>
<span className="absolute left-4 top-4 rounded-full bg-[#0E0E0E]/70 px-3 py-1 text-xs font-semibold text-[#F5F2EC] backdrop-blur">
                  Před
                </span>
<span className="absolute right-4 top-4 rounded-full bg-[#D4A24C] px-3 py-1 text-xs font-semibold text-[#0E0E0E]">
                  Po
                </span>
<div className="ba-handle absolute inset-y-0 cursor-ew-resize" style={{left: '0%', touchAction: 'none', userSelect: 'none'}}>
<div className="h-full w-px bg-[#D4A24C] shadow-[0_0_30px_rgba(212,162,76,0.65)]"></div>
<div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D4A24C] bg-[#0E0E0E]/90 text-[#D4A24C] shadow-xl">
<iconify-icon className="" icon="solar:alt-arrow-left-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="" icon="solar:alt-arrow-right-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="p-3 pt-6">
<h3 className="text-2xl font-semibold tracking-tight">
                  Range Rover 2020
                </h3>
<p className="mt-2 text-sm leading-6 text-[#888888]">
                  Chemické čištění interiéru + leštění laku + leštění interiéru
                  + leštění světel
                </p>
<p className="mt-4 inline-flex rounded-full bg-[#D4A24C]/10 px-3 py-1 text-sm font-semibold text-[#D4A24C]">
                  40 hodin práce
                </p>
</div>
</article>
<article className="rounded-[2rem] border border-[#F5F2EC]/10 bg-[#1A1A1A] p-4 transition duration-300 hover:border-[#D4A24C]/45">
<div className="ba-slider relative h-80 overflow-hidden rounded-[1.5rem] bg-[#090909]" data-start="50" style={{touchAction: 'none', userSelect: 'none'}}>
<div className="absolute inset-0 h-full w-full bg-[#1A1A1A] flex items-center justify-center">
<img alt="BMW E60 před" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95bb7bbb-cc78-4b5e-996e-04e1f479ee8c_1600w.png" style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
</div>
<div className="ba-after absolute inset-y-0 left-0 overflow-hidden" style={{width: '50%'}}>
<div className="absolute inset-0 h-full bg-[#1A1A1A] flex items-center justify-center" style={{width: '100vw'}}>
<img alt="BMW E60 po" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aedeb742-bf2d-4e78-923d-a7c788eb2063_1600w.png" style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
</div>
</div>
<span className="absolute left-4 top-4 rounded-full bg-[#0E0E0E]/70 px-3 py-1 text-xs font-semibold text-[#F5F2EC] backdrop-blur">
                  Před
                </span>
<span className="absolute right-4 top-4 rounded-full bg-[#D4A24C] px-3 py-1 text-xs font-semibold text-[#0E0E0E]">
                  Po
                </span>
<div className="ba-handle absolute inset-y-0 cursor-ew-resize" style={{left: '50%', touchAction: 'none', userSelect: 'none'}}>
<div className="h-full w-px bg-[#D4A24C] shadow-[0_0_30px_rgba(212,162,76,0.65)]"></div>
<div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D4A24C] bg-[#0E0E0E]/90 text-[#D4A24C] shadow-xl">
<iconify-icon icon="solar:alt-arrow-left-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:alt-arrow-right-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="p-3 pt-6">
<h3 className="text-2xl font-semibold tracking-tight">BMW E60</h3>
<p className="mt-2 text-sm leading-6 text-[#888888]">
                  Chemické čištění interiéru
                </p>
<p className="mt-4 inline-flex rounded-full bg-[#D4A24C]/10 px-3 py-1 text-sm font-semibold text-[#D4A24C]">
                  12 hodin práce
                </p>
</div>
</article>
<article className="rounded-[2rem] border border-[#F5F2EC]/10 bg-[#1A1A1A] p-4 transition duration-300 hover:border-[#D4A24C]/45">
<div className="ba-slider relative h-80 overflow-hidden rounded-[1.5rem] bg-[#090909]" data-start="50" style={{touchAction: 'none', userSelect: 'none'}}>
<div className="absolute inset-0 h-full w-full bg-[#1A1A1A]">
<img alt="Škoda Superb 3 před" src="" style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
</div>
<div className="ba-after absolute inset-y-0 left-0 overflow-hidden" style={{width: '50%'}}>
<div className="absolute inset-0 h-full bg-[#1A1A1A]" style={{width: '100vw'}}>
<img alt="Škoda Superb 3 po" src="" style={{width: '100vw', maxWidth: 'none', height: '100%', objectFit: 'contain'}}/>
</div>
</div>
<span className="absolute left-4 top-4 rounded-full bg-[#0E0E0E]/70 px-3 py-1 text-xs font-semibold text-[#F5F2EC] backdrop-blur">
                  Před
                </span>
<span className="absolute right-4 top-4 rounded-full bg-[#D4A24C] px-3 py-1 text-xs font-semibold text-[#0E0E0E]">
                  Po
                </span>
<div className="ba-handle absolute inset-y-0 cursor-ew-resize" style={{left: '50%', touchAction: 'none', userSelect: 'none'}}>
<div className="h-full w-px bg-[#D4A24C] shadow-[0_0_30px_rgba(212,162,76,0.65)]"></div>
<div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D4A24C] bg-[#0E0E0E]/90 text-[#D4A24C] shadow-xl">
<iconify-icon icon="solar:alt-arrow-left-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:alt-arrow-right-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="p-3 pt-6">
<h3 className="text-2xl font-semibold tracking-tight">
                  Škoda Superb 3
                </h3>
<p className="mt-2 text-sm leading-6 text-[#888888]">De-Chrome</p>
<p className="mt-4 inline-flex rounded-full bg-[#D4A24C]/10 px-3 py-1 text-sm font-semibold text-[#D4A24C]">
                  5 hodin práce
                </p>
</div>
</article>
<article className="rounded-[2rem] border border-[#F5F2EC]/10 bg-[#1A1A1A] p-4 transition duration-300 hover:border-[#D4A24C]/45">
<div className="ba-slider relative h-80 overflow-hidden rounded-[1.5rem] bg-[#090909]" data-start="50" style={{touchAction: 'none', userSelect: 'none'}}>
<div className="absolute inset-0 h-full w-full bg-[#1A1A1A]">
<img alt="Škoda Superb 2 před" src="" style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
</div>
<div className="ba-after absolute inset-y-0 left-0 overflow-hidden" style={{width: '50%'}}>
<div className="absolute inset-0 h-full bg-[#1A1A1A]" style={{width: '100vw'}}>
<img alt="Škoda Superb 2 po" src="" style={{width: '100vw', maxWidth: 'none', height: '100%', objectFit: 'contain'}}/>
</div>
</div>
<span className="absolute left-4 top-4 rounded-full bg-[#0E0E0E]/70 px-3 py-1 text-xs font-semibold text-[#F5F2EC] backdrop-blur">
                  Před
                </span>
<span className="absolute right-4 top-4 rounded-full bg-[#D4A24C] px-3 py-1 text-xs font-semibold text-[#0E0E0E]">
                  Po
                </span>
<div className="ba-handle absolute inset-y-0 cursor-ew-resize" style={{left: '50%', touchAction: 'none', userSelect: 'none'}}>
<div className="h-full w-px bg-[#D4A24C] shadow-[0_0_30px_rgba(212,162,76,0.65)]"></div>
<div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D4A24C] bg-[#0E0E0E]/90 text-[#D4A24C] shadow-xl">
<iconify-icon icon="solar:alt-arrow-left-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:alt-arrow-right-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="p-3 pt-6">
<h3 className="text-2xl font-semibold tracking-tight">
                  Škoda Superb 2
                </h3>
<p className="mt-2 text-sm leading-6 text-[#888888]">
                  Lakování disků
                </p>
<p className="mt-4 inline-flex rounded-full bg-[#D4A24C]/10 px-3 py-1 text-sm font-semibold text-[#D4A24C]">
                  16 hodin práce
                </p>
</div>
</article>
</div>
<div className="mt-10">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A24C] px-7 py-4 text-sm font-semibold text-[#0E0E0E] shadow-xl shadow-[#D4A24C]/10 transition duration-300 hover:scale-[1.02]" href="#kontakt">
              Více realizací
              <iconify-icon icon="solar:arrow-right-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>
<section className="reveal bg-[#F5F2EC] py-20 text-[#0E0E0E] sm:py-28" style={{transition: 'opacity 700ms, transform 700ms'}}>
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="mb-14 max-w-3xl">
<p className="mb-3 text-sm font-semibold uppercase tracking-[0.16rem] text-[#D4A24C]">
              Proces
            </p>
<h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Jak to probíhá
            </h2>
</div>
<div className="grid gap-5 lg:grid-cols-4">
<div className="rounded-[2rem] border border-[#0E0E0E]/8 bg-white/40 p-7">
<p className="text-6xl font-bold tracking-tight text-[#D4A24C]">01</p>
<h3 className="mt-8 text-2xl font-semibold tracking-tight">
                Domluvíme se
              </h3>
<p className="mt-3 text-sm leading-7 text-[#5F5A53]">
                Napište mi, zavolejte, nebo přijďte. Řekneme si, co auto
                potřebuje a co je reálné.
              </p>
</div>
<div className="rounded-[2rem] border border-[#0E0E0E]/8 bg-white/40 p-7">
<p className="text-6xl font-bold tracking-tight text-[#D4A24C]">02</p>
<h3 className="mt-8 text-2xl font-semibold tracking-tight">
                Přivezete auto
              </h3>
<p className="mt-3 text-sm leading-7 text-[#5F5A53]">
                Alšova 1889, Jihlava. Nebo se domluvíme na vyzvednutí, podle
                situace.
              </p>
</div>
<div className="rounded-[2rem] border border-[#0E0E0E]/8 bg-white/40 p-7">
<p className="text-6xl font-bold tracking-tight text-[#D4A24C]">03</p>
<h3 className="mt-8 text-2xl font-semibold tracking-tight">
                Pracuju
              </h3>
<p className="mt-3 text-sm leading-7 text-[#5F5A53]">
                Podle služby 2 až 14 hodin. Bez spěchu. Posílám průběžně fotky.
              </p>
</div>
<div className="rounded-[2rem] border border-[#0E0E0E]/8 bg-white/40 p-7">
<p className="text-6xl font-bold tracking-tight text-[#D4A24C]">04</p>
<h3 className="mt-8 text-2xl font-semibold tracking-tight">Předám</h3>
<p className="mt-3 text-sm leading-7 text-[#5F5A53]">
                Ukážu výsledek, projdeme to spolu, řeknu jak o to pečovat.
                Hotovo.
              </p>
</div>
</div>
</div>
</section>
<section className="reveal bg-[#0E0E0E] py-20 text-[#F5F2EC] sm:py-28" id="omne" style={{transition: 'opacity 700ms, transform 700ms'}}>
<div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
<div className="relative min-h-[34rem] overflow-hidden rounded-[2.5rem] border border-[#F5F2EC]/10 bg-[#1A1A1A]">
<img alt="Max při práci v dílně" className="absolute inset-0 h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="bg-center bg-gradient-to-t from-[#0E0E0E]/80 via-transparent to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2db5d762-b427-42fa-84ce-f3dd6ae7d15a_1600w.png?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0">
<img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2db5d762-b427-42fa-84ce-f3dd6ae7d15a_3840w.png"/>
</div>
<div className="absolute bottom-8 left-8 right-8 rounded-[2rem] border border-[#D4A24C]/25 bg-[#0E0E0E]/60 p-6 backdrop-blur">
<p className="text-xs font-semibold uppercase tracking-[0.16rem] text-[#D4A24C]">
                Dílna
              </p>
<p className="mt-2 text-2xl font-semibold tracking-tight">
                Max při práci v dílně
              </p>
<p className="mt-3 text-sm leading-6 text-[#F5F2EC]/60">
                Alšova 1889 — ruce, světlo, lak, práce.
              </p>
</div>
</div>
<div className="lg:pl-8">
<p className="mb-3 text-sm font-semibold uppercase tracking-[0.16rem] text-[#D4A24C]">
              O mně
            </p>
<h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Kdo to dělá
            </h2>
<p className="mt-5 text-2xl font-semibold tracking-tight text-[#D4A24C]">
              Maks Chubirko
            </p>
<div className="mt-8 space-y-6 text-base leading-8 text-[#F5F2EC]/72">
<p>
                Jmenuju se Maks a detailingu se věnuju naplno. Sídlím v Jihlavě,
                na Alšově 1889 - tady máte jistotu, že vaše auto neputuje k
                subdodavateli. Všechno dělám sám.
              </p>
<p>
                Beru jen tolik aut, kolik můžu pořádně odpracovat. Když mi
                přivezete auto na leštění, počítejte se 6 až 10 hodinami práce.
                Žádný spěch, žádné kompromisy.
              </p>
<p>
                Pracuju s materiály od značek Gyeon, Koch-Chemie, Rupes a Sonax.
                Jestli vám ty názvy nic neříkají, nevadí. Vím, proč zrovna s
                nimi.
              </p>
</div>
</div>
</div>
</section>
<section className="reveal bg-[#F5F2EC] py-20 text-[#0E0E0E] sm:py-28" style={{transition: 'opacity 700ms, transform 700ms'}}>
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="mb-12 max-w-3xl">
<p className="mb-3 text-sm font-semibold uppercase tracking-[0.16rem] text-[#D4A24C]">
              Recenze
            </p>
<h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Co říkají zákazníci
            </h2>
<p className="mt-4 text-lg leading-8 text-[#66615A]">
              Všechny recenze najdete na našem Google profilu.
            </p>
</div>
<div className="grid gap-5 lg:grid-cols-2">
<figure className="rounded-[2rem] border border-[#0E0E0E]/8 bg-white/45 p-7">
<div className="text-sm tracking-[0.18rem] text-[#D4A24C]">★★★★★</div>
<blockquote className="mt-5 text-base leading-8 text-[#2B2926]">
                „Maxovi jsem dovezl Octavii před prodejem. Vrátil mi ji v lepším
                stavu, než když byla nová. Profesionální komunikace, předem řekl
                cenu, dodržel termín. Doporučuju.“
              </blockquote>
<figcaption className="mt-6 text-sm font-semibold text-[#0E0E0E]">
                Pavel K., Škoda Octavia
              </figcaption>
</figure>
<figure className="rounded-[2rem] border border-[#0E0E0E]/8 bg-white/45 p-7">
<div className="text-sm tracking-[0.18rem] text-[#D4A24C]">★★★★★</div>
<blockquote className="mt-5 text-base leading-8 text-[#2B2926]">
                „Dělal mi dechrom a tónování světel na BMW. Vše precizně, čistě,
                drží jak má. Vidět, že to chlapa baví.“
              </blockquote>
<figcaption className="mt-6 text-sm font-semibold text-[#0E0E0E]">
                Tomáš M., BMW 3
              </figcaption>
</figure>
<figure className="rounded-[2rem] border border-[#0E0E0E]/8 bg-white/45 p-7">
<div className="text-sm tracking-[0.18rem] text-[#D4A24C]">★★★★★</div>
<blockquote className="mt-5 text-base leading-8 text-[#2B2926]">
                „Hloubkové čištění interiéru po psech. Auto smrdělo, teď voní
                novotou. Cenu řekl rovnou, žádné překvapení v závěru.“
              </blockquote>
<figcaption className="mt-6 text-sm font-semibold text-[#0E0E0E]">
                Lenka S., Audi A4
              </figcaption>
</figure>
<figure className="rounded-[2rem] border border-[#0E0E0E]/8 bg-white/45 p-7">
<div className="text-sm tracking-[0.18rem] text-[#D4A24C]">★★★★★</div>
<blockquote className="mt-5 text-base leading-8 text-[#2B2926]">
                „Renovace 4 disků v termínu, kvalitně, za rozumnou cenu.
                Komunikace přes WhatsApp, posílal průběžně fotky. Spokojenost.“
              </blockquote>
<figcaption className="mt-6 text-sm font-semibold text-[#0E0E0E]">
                Martin P., VW Golf
              </figcaption>
</figure>
</div>
<a className="mt-8 inline-flex text-sm font-semibold text-[#B77E24] transition hover:text-[#0E0E0E]" href="#">
            Přečíst všechny recenze na Google →
          </a>
</div>
</section>
<section className="reveal bg-[#0E0E0E] py-20 text-[#F5F2EC] sm:py-28" style={{transition: 'opacity 700ms, transform 700ms'}}>
<div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
<div className="mb-12">
<p className="mb-3 text-sm font-semibold uppercase tracking-[0.16rem] text-[#D4A24C]">
              FAQ
            </p>
<h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Časté otázky
            </h2>
</div>
<div className="space-y-3">
<div className="faq-item rounded-3xl border border-[#F5F2EC]/10 bg-[#1A1A1A]">
<button className="faq-btn flex w-full items-center justify-between gap-4 p-6 text-left text-lg font-semibold tracking-tight">
                Jak dlouho leštění laku trvá?
                <span className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F5F2EC]/10 text-[#D4A24C]">
                  +
                </span>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300">
<p className="px-6 pb-6 text-sm leading-7 text-[#888888]">
                  Podle stavu laku a velikosti auta 6 až 10 hodin. Většinou auto
                  přijímám ráno a vracím odpoledne nebo druhý den.
                </p>
</div>
</div>
<div className="faq-item rounded-3xl border border-[#F5F2EC]/10 bg-[#1A1A1A]">
<button className="faq-btn flex w-full items-center justify-between gap-4 p-6 text-left text-lg font-semibold tracking-tight">
                Co když po leštění uvidím další škrábance?
                <span className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F5F2EC]/10 text-[#D4A24C]">
                  +
                </span>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300">
<p className="px-6 pb-6 text-sm leading-7 text-[#888888]">
                  Hluboké škrábance přes lak ven nevyleštím a vždycky vás na to
                  upozorním předem. Co se dá leštěním odstranit, to odstraním.
                  Když nebudete spokojeni, doleštím zdarma.
                </p>
</div>
</div>
<div className="faq-item rounded-3xl border border-[#F5F2EC]/10 bg-[#1A1A1A]">
<button className="faq-btn flex w-full items-center justify-between gap-4 p-6 text-left text-lg font-semibold tracking-tight">
                Berete platby kartou?
                <span className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F5F2EC]/10 text-[#D4A24C]">
                  +
                </span>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300">
<p className="px-6 pb-6 text-sm leading-7 text-[#888888]">
                  Beru hotově i převodem. Kartu zatím ne, ale pracuju na tom.
                </p>
</div>
</div>
<div className="faq-item rounded-3xl border border-[#F5F2EC]/10 bg-[#1A1A1A]">
<button className="faq-btn flex w-full items-center justify-between gap-4 p-6 text-left text-lg font-semibold tracking-tight">
                Můžu si auto vyzvednout ten samý den?
                <span className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F5F2EC]/10 text-[#D4A24C]">
                  +
                </span>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300">
<p className="px-6 pb-6 text-sm leading-7 text-[#888888]">
                  U menších služeb (čištění, tónování) ano. U leštění a keramiky
                  většinou druhý den, abych měl jistotu, že je vše dokonalé.
                </p>
</div>
</div>
<div className="faq-item rounded-3xl border border-[#F5F2EC]/10 bg-[#1A1A1A]">
<button className="faq-btn flex w-full items-center justify-between gap-4 p-6 text-left text-lg font-semibold tracking-tight">
                Jezdíte si pro auto?
                <span className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F5F2EC]/10 text-[#D4A24C]">
                  +
                </span>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300">
<p className="px-6 pb-6 text-sm leading-7 text-[#888888]">
                  Ano, ale jen po předchozí domluvě. Kontaktujte nás a domluvíme
                  se na podrobnostech.
                </p>
</div>
</div>
<div className="faq-item rounded-3xl border border-[#F5F2EC]/10 bg-[#1A1A1A]">
<button className="faq-btn flex w-full items-center justify-between gap-4 p-6 text-left text-lg font-semibold tracking-tight">
                Jaký je rozdíl mezi voskem a keramikou?
                <span className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F5F2EC]/10 text-[#D4A24C]">
                  +
                </span>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300">
<p className="px-6 pb-6 text-sm leading-7 text-[#888888]">
                  Vosk drží 2-3 měsíce, keramika 2-5 let podle kvality. Keramika
                  víc chrání lak a usnadňuje mytí. Cena je vyšší, ale dlouhodobě
                  se vyplatí.
                </p>
</div>
</div>
<div className="faq-item rounded-3xl border border-[#F5F2EC]/10 bg-[#1A1A1A]">
<button className="faq-btn flex w-full items-center justify-between gap-4 p-6 text-left text-lg font-semibold tracking-tight">
                Dárkové poukazy?
                <span className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F5F2EC]/10 text-[#D4A24C]">
                  +
                </span>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300">
<p className="px-6 pb-6 text-sm leading-7 text-[#888888]">
                  Ano, dělám dárkové poukazy na jakoukoliv službu nebo částku.
                  Napište mi, do hodiny ho máte v mailu.
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="reveal bg-[#F5F2EC] py-20 pb-32 text-[#0E0E0E] sm:py-28 lg:pb-28" id="kontakt" style={{transition: 'opacity 700ms, transform 700ms'}}>
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="mb-12 max-w-3xl">
<p className="mb-3 text-sm font-semibold uppercase tracking-[0.16rem] text-[#D4A24C]">
              Kontakt
            </p>
<h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Domluvíme se
            </h2>
</div>
<div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
<form action="#" className="rounded-[2rem] border border-[#0E0E0E]/8 bg-white/55 p-6 shadow-sm sm:p-8" id="contactForm" method="post" novalidate="novalidate">
<h3 className="text-2xl font-semibold tracking-tight">
                Pošlete nezávaznou poptávku
              </h3>
<div className="mt-8 grid gap-5 sm:grid-cols-2">
<label className="block">
<span className="text-sm font-semibold text-[#0E0E0E]">
                    Jméno
                  </span>
<input className="mt-2 w-full rounded-2xl border border-[#0E0E0E]/10 bg-[#F5F2EC]/70 px-4 py-4 text-base text-[#0E0E0E] outline-none transition placeholder:text-[#888888] focus:border-[#D4A24C]" name="jmeno" placeholder="Vaše jméno" type="text"/>
<p className="mt-1 text-sm font-medium text-red-600 hidden" data-error="jmeno">
                    Prosím zadejte jméno
                  </p>
</label>
<label className="block">
<span className="text-sm font-semibold text-[#0E0E0E]">
                    Telefon
                  </span>
<input className="mt-2 w-full rounded-2xl border border-[#0E0E0E]/10 bg-[#F5F2EC]/70 px-4 py-4 text-base text-[#0E0E0E] outline-none transition placeholder:text-[#888888] focus:border-[#D4A24C]" name="telefon" placeholder="721 200 357" type="tel"/>
<p className="mt-1 text-sm font-medium text-red-600 hidden" data-error="telefon">
                    Prosím zadejte platné telefonní číslo
                  </p>
</label>
</div>
<div className="mt-5">
<span className="text-sm font-semibold text-[#0E0E0E]">Služba</span>
<div className="custom-select relative mt-2" data-name="sluzba">
<input name="sluzba" type="hidden" value=""/>
<button className="select-button flex w-full items-center justify-between rounded-2xl border border-[#0E0E0E]/10 bg-[#F5F2EC]/70 px-4 py-4 text-left text-base text-[#0E0E0E] outline-none transition focus:border-[#D4A24C]" type="button">
<span className="select-label text-[#888888]">
                      Vyberte službu
                    </span>
<iconify-icon icon="solar:alt-arrow-down-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="select-menu absolute z-20 mt-2 hidden w-full overflow-hidden rounded-2xl border border-[#0E0E0E]/10 bg-white shadow-2xl">
<button className="select-option block w-full px-4 py-3 text-left text-sm hover:bg-[#F5F2EC]" data-value="Chemické čištění interiéru" type="button">
                      Chemické čištění interiéru
                    </button>
<button className="select-option block w-full px-4 py-3 text-left text-sm hover:bg-[#F5F2EC]" data-value="Leštění laku" type="button">
                      Leštění laku
                    </button>
<button className="select-option block w-full px-4 py-3 text-left text-sm hover:bg-[#F5F2EC]" data-value="Leštění interiéru" type="button">
                      Leštění interiéru
                    </button>
<button className="select-option block w-full px-4 py-3 text-left text-sm hover:bg-[#F5F2EC]" data-value="Leštění světel" type="button">
                      Leštění světel
                    </button>
<button className="select-option block w-full px-4 py-3 text-left text-sm hover:bg-[#F5F2EC]" data-value="De-Chrome" type="button">
                      De-Chrome
                    </button>
<button className="select-option block w-full px-4 py-3 text-left text-sm hover:bg-[#F5F2EC]" data-value="Renovace disků" type="button">
                      Renovace disků
                    </button>
<button className="select-option block w-full px-4 py-3 text-left text-sm hover:bg-[#F5F2EC]" data-value="Lakování disků" type="button">
                      Lakování disků
                    </button>
<button className="select-option block w-full px-4 py-3 text-left text-sm hover:bg-[#F5F2EC]" data-value="Tónování zadních světel" type="button">
                      Tónování zadních světel
                    </button>
<button className="select-option block w-full px-4 py-3 text-left text-sm hover:bg-[#F5F2EC]" data-value="Keramická ochrana laku" type="button">
                      Keramická ochrana laku
                    </button>
<button className="select-option block w-full px-4 py-3 text-left text-sm hover:bg-[#F5F2EC]" data-value="Voskování" type="button">
                      Voskování
                    </button>
<button className="select-option block w-full px-4 py-3 text-left text-sm hover:bg-[#F5F2EC]" data-value="Mytí exteriéru" type="button">
                      Mytí exteriéru
                    </button>
<button className="select-option block w-full px-4 py-3 text-left text-sm hover:bg-[#F5F2EC]" data-value="Čištění motoru" type="button">
                      Čištění motoru
                    </button>
<button className="select-option block w-full px-4 py-3 text-left text-sm hover:bg-[#F5F2EC]" data-value="Odstranění zápachu" type="button">
                      Odstranění zápachu
                    </button>
<button className="select-option block w-full px-4 py-3 text-left text-sm hover:bg-[#F5F2EC]" data-value="Jiné" type="button">
                      Jiné
                    </button>
</div>
</div>
<p className="mt-1 text-sm font-medium text-red-600 hidden" data-error="sluzba">
                  Prosím vyberte službu
                </p>
</div>
<label className="mt-5 block">
<span className="text-sm font-semibold text-[#0E0E0E]">
                  Krátká zpráva
                </span>
<textarea className="mt-2 w-full resize-none rounded-2xl border border-[#0E0E0E]/10 bg-[#F5F2EC]/70 px-4 py-4 text-base text-[#0E0E0E] outline-none transition placeholder:text-[#888888] focus:border-[#D4A24C]" name="zprava" placeholder="Auto, stav, kdy by se vám hodil termín..." rows="5"></textarea>
</label>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4A24C] px-7 py-4 text-sm font-semibold text-[#0E0E0E] shadow-xl shadow-[#D4A24C]/10 transition duration-300 hover:scale-[1.01] sm:w-auto" type="submit">
                Odeslat poptávku
                <iconify-icon icon="solar:plain-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
<p className="mt-4 text-sm text-[#66615A]">
                Ozvu se obvykle do 2 hodin.
              </p>
<p className="mt-2 text-sm text-[#66615A]">
                Přijímáme platby v hotovosti.
              </p>
<p className="mt-4 text-sm font-semibold hidden" id="formStatus"></p>
</form>
<aside className="rounded-[2rem] border border-[#0E0E0E]/8 bg-[#0E0E0E] p-6 text-[#F5F2EC] shadow-sm sm:p-8">
<h3 className="text-2xl font-semibold tracking-tight">
                Nebo rovnou:
              </h3>
<div className="mt-8 space-y-5">
<a className="flex items-center gap-4 rounded-2xl border border-[#F5F2EC]/10 bg-[#F5F2EC]/5 p-4 text-xl font-semibold tracking-tight transition hover:border-[#D4A24C]/50 hover:text-[#D4A24C]" href="tel:+420721200357">
<iconify-icon icon="solar:phone-calling-linear" style={{fontSize: '1.4rem', strokeWidth: '1.5'}}></iconify-icon>
                  721 200 357
                </a>
<a className="flex items-center gap-4 rounded-2xl border border-[#F5F2EC]/10 bg-[#F5F2EC]/5 p-4 text-xl font-semibold tracking-tight transition hover:border-[#D4A24C]/50 hover:text-[#D4A24C]" href="https://www.instagram.com/detailing_by_max" rel="noopener" target="_blank">
<iconify-icon icon="solar:camera-linear" style={{fontSize: '1.4rem', strokeWidth: '1.5'}}></iconify-icon>
                  @detailing_by_max
                </a>
<div className="flex items-start gap-4 rounded-2xl border border-[#F5F2EC]/10 bg-[#F5F2EC]/5 p-4">
<iconify-icon icon="solar:map-point-linear" style={{fontSize: '1.4rem', strokeWidth: '1.5', color: '#D4A24C'}}></iconify-icon>
<p className="text-base leading-7 text-[#F5F2EC]/78">
                    Alšova 1889,
                    <br/>
                    586 01 Jihlava
                  </p>
</div>
<div className="flex items-start gap-4 rounded-2xl border border-[#F5F2EC]/10 bg-[#F5F2EC]/5 p-4">
<iconify-icon icon="solar:clock-circle-linear" style={{fontSize: '1.4rem', strokeWidth: '1.5', color: '#D4A24C'}}></iconify-icon>
<p className="text-base leading-7 text-[#F5F2EC]/78">
                    Po-So: 6:00 - 19:00
                    <br/>
                    Ne: 9:00 - 17:00
                  </p>
</div>
</div>
<div className="mt-6 h-72 overflow-hidden rounded-[1.5rem] border border-[#F5F2EC]/10 bg-[#1A1A1A]">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Al%C5%A1ova%201889,%20586%2001%20Jihlava&amp;output=embed" style={{border: '0'}} title="Detailing By Max - Alšova 1889, Jihlava" width="100%"></iframe>
</div>
</aside>
</div>
</div>
</section>
</main>
<footer className="bg-black py-14 pb-28 text-[#F5F2EC] lg:pb-14">
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="grid gap-10 md:grid-cols-3">
<div>
<div className="text-xs font-semibold uppercase tracking-[0.18rem]">
              DETAILING
              <span className="text-[#D4A24C]">BY MAX</span>
</div>
<p className="mt-5 max-w-xs text-sm leading-7 text-[#888888]">
              Detailing v Jihlavě. Jeden člověk, jedna kvalita.
            </p>
</div>
<div>
<h4 className="text-sm font-semibold text-[#F5F2EC]">Rychlé odkazy</h4>
<div className="mt-5 grid gap-3 text-sm text-[#888888]">
<a className="transition hover:text-[#D4A24C]" href="#sluzby">
                Služby
              </a>
<a className="transition hover:text-[#D4A24C]" href="#realizace">
                Realizace
              </a>
<a className="transition hover:text-[#D4A24C]" href="#omne">O mně</a>
<a className="transition hover:text-[#D4A24C]" href="#kontakt">
                Kontakt
              </a>
<a className="transition hover:text-[#D4A24C]" href="#kontakt">
                Dárkové poukazy
              </a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-[#F5F2EC]">Kontakt</h4>
<div className="mt-5 space-y-3 text-sm text-[#888888]">
<p>Alšova 1889, 586 01 Jihlava</p>
<a className="block transition hover:text-[#D4A24C]" href="tel:+420721200357">
                721 200 357
              </a>
<a className="block transition hover:text-[#D4A24C]" href="https://www.instagram.com/detailing_by_max" rel="noopener" target="_blank">
                @detailing_by_max
              </a>
</div>
<div className="mt-6 flex gap-3">
<a aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F5F2EC]/10 text-[#F5F2EC] transition hover:border-[#D4A24C] hover:text-[#D4A24C]" href="https://www.instagram.com/detailing_by_max" rel="noopener" target="_blank">
<iconify-icon icon="solar:camera-linear" style={{fontSize: '1.2rem', strokeWidth: '1.5'}}></iconify-icon>
</a>
<a aria-label="Threads" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F5F2EC]/10 text-[#F5F2EC] transition hover:border-[#D4A24C] hover:text-[#D4A24C]" href="#">
<iconify-icon icon="solar:chat-round-like-linear" style={{fontSize: '1.2rem', strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
<div className="mt-12 border-t border-[#F5F2EC]/10 pt-6 text-xs leading-6 text-[#888888]">
          © 2026 Detailing By Max  •  IČO:
          [placeholder]  •  Ochrana osobních údajů
        </div>
</div>
</footer>

<div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#0E0E0E]/10 bg-[#0E0E0E]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur lg:hidden" id="mobileBottomBar">
<div className="grid grid-cols-2 gap-3">
<a className="flex items-center justify-center gap-2 rounded-full bg-[#D4A24C] px-4 py-3 text-sm font-semibold text-[#0E0E0E]" href="tel:+420721200357">
<iconify-icon icon="solar:phone-calling-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
          Zavolat
        </a>
<a className="flex items-center justify-center gap-2 rounded-full border border-[#F5F2EC]/20 px-4 py-3 text-sm font-semibold text-[#F5F2EC]" href="https://www.instagram.com/detailing_by_max" rel="noopener" target="_blank">
<iconify-icon icon="solar:chat-round-line-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
          Napsat na IG
        </a>
</div>
</div>


<div aria-live="polite" className="fixed left-1/2 top-6 z-[60] -translate-x-1/2 rounded-2xl bg-green-600 px-6 py-4 text-sm font-semibold text-white shadow-2xl shadow-black/30 opacity-0 -translate-y-4 pointer-events-none transition-all duration-500" id="toastNotification" role="status">
      Děkujeme! Ozveme se do 2 hodin. ✓
    </div>


    </>
  );
}
