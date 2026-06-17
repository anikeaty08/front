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



    (function () {
      var header = document.getElementById('main-header');
      if (!header) return;
      function onScroll() {
        var offset = window.innerWidth >= 640 ? 44 : 0;
        header.classList.toggle('shadow-md', window.scrollY > offset);
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    })();
  


    (function () {
      var root = document.querySelector('[data-element-id="aura-emqbeda4y34p6enbj"]');
      if (!root || root.dataset.countInit) return;
      root.dataset.countInit = "1";
      var counters = root.querySelectorAll("[data-count]");
      function animate(el) {
        var target = parseInt(el.getAttribute("data-count"), 10);
        var suffix = el.getAttribute("data-suffix") || "";
        var duration = 1600;
        var start = null;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / duration, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      }
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            counters.forEach(animate);
            io.disconnect();
          }
        });
      }, { threshold: 0.3 });
      io.observe(root);
    })();
  


    (function () {
      var root = document.querySelector('[data-element-id="aura-emqbeibil3ouiymmq"]');
      if (!root || root.dataset.carouselInit) return;
      root.dataset.carouselInit = "1";
      if (window.lucide) lucide.createIcons();

      var carousel = root.querySelector("#aura-carousel-emqbeibi");
      var slides = carousel.querySelectorAll("[data-slide]");
      var dotsWrap = carousel.querySelector("[data-dots]");
      var current = 0;
      var timer = null;
      var INTERVAL = 6000;

      slides.forEach(function (_, i) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", "Proje " + (i + 1));
        dot.className = "h-2 rounded-full transition-all duration-500 " + (i === 0 ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70");
        dot.addEventListener("click", function () { goTo(i); restart(); });
        dotsWrap.appendChild(dot);
      });

      function goTo(index) {
        current = (index + slides.length) % slides.length;
        slides.forEach(function (s, i) { s.classList.toggle("is-active", i === current); });
        dotsWrap.querySelectorAll("button").forEach(function (d, i) {
          d.className = "h-2 rounded-full transition-all duration-500 " + (i === current ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70");
        });
      }

      function restart() {
        clearInterval(timer);
        timer = setInterval(function () { goTo(current + 1); }, INTERVAL);
      }

      carousel.querySelector("[data-prev]").addEventListener("click", function () { goTo(current - 1); restart(); });
      carousel.querySelector("[data-next]").addEventListener("click", function () { goTo(current + 1); restart(); });
      carousel.addEventListener("mouseenter", function () { clearInterval(timer); });
      carousel.addEventListener("mouseleave", restart);

      restart();
    })();
  


    (function () {
      var root = document.querySelector('[data-med-quote-root]');
      if (!root || root.dataset.quoteInit) return;
      root.dataset.quoteInit = "1";
      if (window.lucide) lucide.createIcons();

      var form = root.querySelector('[data-quote-form="aura-emqbljud09bgxcvnx"]');
      var fileInput = root.querySelector("#aura-quote-photo");
      var fileLabel = root.querySelector('[data-file-label="aura-emqbljud09bgxcvnx"]');

      if (fileInput && fileLabel) {
        fileInput.addEventListener("change", function () {
          if (fileInput.files && fileInput.files.length > 0) {
            fileLabel.textContent = fileInput.files[0].name;
            fileLabel.classList.remove("text-slate-500");
            fileLabel.classList.add("text-[#1B2535]", "font-medium");
          }
        });
      }

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = (root.querySelector("#aura-quote-name").value || "").trim();
        var phone = (root.querySelector("#aura-quote-phone").value || "").trim();
        var material = root.querySelector("#aura-quote-material").value;
        var msg = "Merhaba, teklif almak istiyorum.";
        if (name) msg += "\nAd Soyad: " + name;
        if (phone) msg += "\nTelefon: " + phone;
        if (material) msg += "\nMalzeme: " + material;
        if (fileInput && fileInput.files && fileInput.files.length > 0) msg += "\nFotoğrafı WhatsApp üzerinden ileteceğim.";
        window.open("https://wa.me/902242449151?text=" + encodeURIComponent(msg), "_blank");
      });
    })();
  


    (function () {
      var root = document.querySelector('[data-element-id="aura-emqbljud09bgxcvnx"]');
      if (!root || root.dataset.quoteInit) return;
      root.dataset.quoteInit = "1";
      if (window.lucide) lucide.createIcons();

      var form = root.querySelector('[data-quote-form="aura-emqbljud09bgxcvnx"]');
      var fileInput = root.querySelector("#aura-quote-photo");
      var fileLabel = root.querySelector('[data-file-label="aura-emqbljud09bgxcvnx"]');

      if (fileInput && fileLabel) {
        fileInput.addEventListener("change", function () {
          if (fileInput.files && fileInput.files.length > 0) {
            fileLabel.textContent = fileInput.files[0].name;
            fileLabel.classList.remove("text-slate-500");
            fileLabel.classList.add("text-[#1B2535]", "font-medium");
          }
        });
      }

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = (root.querySelector("#aura-quote-name").value || "").trim();
        var phone = (root.querySelector("#aura-quote-phone").value || "").trim();
        var material = root.querySelector("#aura-quote-material").value;
        var msg = "Merhaba, teklif almak istiyorum.";
        if (name) msg += "\nAd Soyad: " + name;
        if (phone) msg += "\nTelefon: " + phone;
        if (material) msg += "\nMalzeme: " + material;
        if (fileInput && fileInput.files && fileInput.files.length > 0) msg += "\nFotoğrafı WhatsApp üzerinden ileteceğim.";
        window.open("https://wa.me/902242449151?text=" + encodeURIComponent(msg), "_blank");
      });
    })();
  


    (function () {
      var form = document.querySelector('[data-final-cta-form="aura-emqckxndt13x6gdw5"]');
      if (!form || form.dataset.finalCtaInit === "1") return;
      form.dataset.finalCtaInit = "1";
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var input = form.querySelector('input[name="phone"]');
        var phone = input ? (input.value || "").trim() : "";
        var message = "Merhaba, hayalimdeki proje için teklif almak istiyorum.";
        if (phone) { message += "\nTelefon numaram: " + phone; }
        else { message += "\nBeni arayabilir misiniz?"; }
        window.open("https://wa.me/902242449151?text=" + encodeURIComponent(message), "_blank");
      });
    })();
  


    (function () {
      var root = document.querySelector('[data-element-id="aura-emqcl0idy158ny66d"]');
      if (!root || root.dataset.finalCtaInit === "1") return;
      root.dataset.finalCtaInit = "1";

      if (window.lucide) {
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      }

      var form = root.querySelector('[data-final-cta-form="aura-emqckxndt13x6gdw5"]');
      if (!form) return;

      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var input = form.querySelector('input[name="phone"]');
        var phone = input ? (input.value || "").trim() : "";
        var message = "Merhaba, hayalimdeki proje için teklif almak istiyorum.";
        if (phone) {
          message += "\nTelefon numaram: " + phone;
        } else {
          message += "\nBeni arayabilir misiniz?";
        }
        window.open("https://wa.me/902242449151?text=" + encodeURIComponent(message), "_blank");
      });
    })();
  


    (function () {
      var root = document.querySelector('[data-med-quote-root]');
      if (!root || root.dataset.quoteInit) return;
      root.dataset.quoteInit = "1";
      if (window.lucide) lucide.createIcons();

      var form = root.querySelector('[data-quote-form="aura-emqbljud09bgxcvnx"]');
      var fileInput = root.querySelector("#aura-quote-photo");
      var fileLabel = root.querySelector('[data-file-label="aura-emqbljud09bgxcvnx"]');

      if (fileInput && fileLabel) {
        fileInput.addEventListener("change", function () {
          if (fileInput.files && fileInput.files.length > 0) {
            fileLabel.textContent = fileInput.files[0].name;
            fileLabel.classList.remove("text-slate-500");
            fileLabel.classList.add("text-[#1B2535]", "font-medium");
          }
        });
      }

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = (root.querySelector("#aura-quote-name").value || "").trim();
        var phone = (root.querySelector("#aura-quote-phone").value || "").trim();
        var material = root.querySelector("#aura-quote-material").value;
        var msg = "Merhaba, teklif almak istiyorum.";
        if (name) msg += "\nAd Soyad: " + name;
        if (phone) msg += "\nTelefon: " + phone;
        if (material) msg += "\nMalzeme: " + material;
        if (fileInput && fileInput.files && fileInput.files.length > 0) msg += "\nFotoğrafı WhatsApp üzerinden ileteceğim.";
        window.open("https://wa.me/902242449151?text=" + encodeURIComponent(msg), "_blank");
      });
    })();
  


    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
  
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
      

<header className="sticky top-0 sm:top-[-44px] z-50 w-full bg-white shadow-none transition-shadow duration-300" id="main-header" style={{fontFamily: '\'Inter\', sans-serif'}}>

<div className="hidden sm:flex h-11 w-full max-w-[1700px] mx-auto items-center justify-between px-6 lg:px-12 text-sm font-medium text-[#1B2535]">
<div className="flex items-center gap-4 md:gap-6">
<a className="flex items-center gap-2 transition-opacity hover:opacity-70" href="tel:+902242449151">
<svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<span>+90 224 244 91 51</span>
</a>
<span className="h-3.5 w-px bg-slate-200"></span>
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        Bursa, Türkiye
      </span>
</div>
<a className="flex items-center gap-2 transition-opacity hover:opacity-70" href="https://wa.me/902242449151" rel="noopener noreferrer" target="_blank">
<svg aria-hidden="true" className="h-[18px] w-[18px]" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"></path></svg>
<span>WhatsApp'tan Yazın</span>
</a>
</div>
<div className="hidden sm:block h-px w-full bg-slate-200/80"></div>

<div className="relative z-20 w-full border-b border-slate-200/80 bg-white">
<div className="flex w-full max-w-[1700px] mx-auto items-center justify-between gap-6 px-6 lg:px-12 py-4 sm:py-5">

<a className="flex shrink-0 flex-col leading-none" href="/">
<span className="text-4xl sm:text-5xl font-light tracking-[0.12em] text-[#1B2535]">MED</span>
<span className="mt-2 text-xs sm:text-sm font-light tracking-[0.3em] text-[#1B2535]/70">MADENCİLİK</span>
</a>

<nav className="hidden lg:flex items-center gap-x-5 xl:gap-x-7 text-base font-medium text-[#1B2535]">
<a className="transition-colors hover:text-slate-500" href="#">Anasayfa</a>
<span aria-hidden="true" className="h-3.5 w-px shrink-0 bg-slate-300"></span>
<a className="transition-colors hover:text-slate-500" href="#">Kurumsal</a>
<span aria-hidden="true" className="h-3.5 w-px shrink-0 bg-slate-300"></span>
<a className="transition-colors hover:text-slate-500" href="#">Ürünler</a>
<span aria-hidden="true" className="h-3.5 w-px shrink-0 bg-slate-300"></span>
<a className="transition-colors hover:text-slate-500" href="#">Projeler</a>
<span aria-hidden="true" className="h-3.5 w-px shrink-0 bg-slate-300"></span>
<a className="transition-colors hover:text-slate-500" href="#">İletişim</a>
</nav>

<div className="flex shrink-0 items-center">
<a className="hidden sm:inline-flex items-center justify-center gap-2 rounded-lg bg-[#1B2535] px-5 sm:px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#26344a] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="https://wa.me/902242449151" rel="noopener noreferrer" target="_blank">
  Hızlı Teklif Al
  <svg aria-hidden="true" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<button aria-label="Menü" className="lg:hidden -mr-2 inline-flex items-center justify-center rounded-lg p-2 text-[#1B2535] transition-colors hover:bg-slate-50">
<svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</div>
</div>

</header>

<section className="overflow-hidden bg-white w-full relative" style={{fontFamily: '\'Inter\', sans-serif'}}>
<div className="mx-auto grid max-w-[1700px] grid-cols-1 px-6 lg:grid-cols-2 lg:px-12">

<div className="order-2 flex flex-col justify-center py-10 lg:order-1 lg:py-20 lg:pr-12">

<div className="flex items-center gap-3 border-l-4 border-[#1B2535] pl-4">
<p className="text-xs font-medium tracking-[0.25em] text-slate-700 sm:text-sm">DOĞAL TAŞ MÜHENDİSLİĞİ</p>
</div>

<h1 className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight text-[#1B2535] sm:text-5xl xl:text-7xl">
        Doğadan Gelen<br className="hidden sm:block"/>
        Değer, Ustalıkla<br className="hidden sm:block"/>
        Hayat Bulur
      </h1>

<p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600">
        Mermer, traverten ve granitte projelendirme, üretim
        ve saha uygulamasını uçtan uca yönetiyoruz.
      </p>

<div className="flex flex-col sm:flex-row sm:gap-0 w-full max-w-3xl mt-9">
<div className="relative flex-1">
<span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
<svg aria-hidden="true" className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</span>
<input autocomplete="tel" className="placeholder:text-slate-400 outline-none transition focus:border-[#1B2535] focus:ring-2 focus:ring-[#1B2535]/15 sm:rounded-r-none sm:border-r-0 text-base text-slate-800 bg-white w-full h-16 border-slate-300 border rounded-xl pr-5 pl-14" id="med-hero-phone" inputmode="tel" placeholder="0 (5__) ___ __ __" type="tel"/>
</div>
<button className="inline-flex shrink-0 gap-3 leading-snug transition hover:bg-[#26344a] sm:rounded-l-none sm:text-left text-base font-medium text-white bg-[#1B2535] h-16 rounded-xl pr-7 pl-7 shadow-sm gap-x-3 gap-y-3 items-center justify-center" onclick="const v=document.getElementById('med-hero-phone').value.trim();const msg='Merhaba, doğal taş projem için teklif almak istiyorum.'+(v?' Telefon numaram: '+v:'');window.open('https://wa.me/905555555555?text='+encodeURIComponent(msg),'_blank');" type="button">
<svg aria-hidden="true" className="h-6 w-6 shrink-0" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path></svg>
          WhatsApp'tan<br className="hidden sm:block"/> Teklif Al
        </button>
</div>

<div className="mt-4 flex items-center gap-2.5">
<svg aria-hidden="true" className="h-4 w-4 text-slate-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
<p className="text-sm text-slate-500">Numaranızı bırakın, uzmanımız sizi arasın.</p>
</div>

<div className="bg-white w-full max-w-4xl border border-slate-200 rounded-[2rem] shadow-sm p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 mt-6 mb-6" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<div className="flex-1 flex flex-col justify-center">
<div className="flex items-center gap-5 pb-6 border-b border-slate-200">
<svg className="w-8 h-8 text-[#1B2535] shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="8" r="6"></circle>
<path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
</svg>
<span className="text-xl md:text-2xl font-medium tracking-tight text-[#1B2535]">30+ Yıl Tecrübe</span>
</div>
<div className="flex items-center gap-5 py-6 border-b border-slate-200">
<svg className="w-8 h-8 text-[#1B2535] shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span className="text-xl md:text-2xl font-medium tracking-tight text-[#1B2535]">Bursa Merkezli</span>
</div>
<div className="flex items-center gap-5 pt-6">
<svg className="w-8 h-8 text-[#1B2535] shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
</path>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
<span className="text-xl md:text-2xl font-medium tracking-tight text-[#1B2535]">Proje · Üretim · Uygulama</span>
</div>
</div>
<div className="hidden md:block w-px bg-slate-200"></div>
<div className="block md:hidden h-px w-full bg-slate-200"></div>
<div className="flex-1 flex flex-col items-center md:items-start justify-center pl-0 md:pl-4 text-center md:text-left">
<div className="flex -space-x-3 mb-6 md:mb-8">
<img alt="Avatar" className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full border-4 border-white shadow-sm object-cover" src="https://i.pravatar.cc/150?img=11"/>
<img alt="Avatar" className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full border-4 border-white shadow-sm object-cover" src="https://i.pravatar.cc/150?img=47"/>
<img alt="Avatar" className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full border-4 border-white shadow-sm object-cover" src="https://i.pravatar.cc/150?img=12"/>
<img alt="Avatar" className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full border-4 border-white shadow-sm object-cover" src="https://i.pravatar.cc/150?img=44"/>
<img alt="Avatar" className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full border-4 border-white shadow-sm object-cover" src="https://i.pravatar.cc/150?img=15"/>
</div>
<p className="text-lg md:text-xl font-medium text-[#1B2535] leading-snug md:leading-relaxed max-w-[320px] md:max-w-[340px]">
            Mimarlar, müteahhitler ve villa sahipleri tarafından tercih ediliyor
          </p>
</div>
</div>
</div>

<div className="order-1 relative min-h-[340px] overflow-hidden rounded-2xl sm:min-h-[440px] lg:order-2 lg:my-20 lg:rounded-l-none">
<img alt="Damarlı beyaz mermer blok" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1517329782449-810562a4ec2f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>

<div className="pointer-events-none absolute inset-y-0 left-0 hidden lg:block" style={{width: '48%', background: 'linear-gradient(to right, #ffffff 0%, #ffffff 14%, rgba(255,255,255,0.75) 42%, rgba(255,255,255,0.35) 68%, rgba(255,255,255,0) 100%)'}}>
</div>
</div>
</div>
</section><section className="relative w-full overflow-hidden bg-white">
<div className="mx-auto max-w-[1700px] px-6 lg:px-12">
<style>
      @keyframes auraStoneBandScroll {
        from { transform: translate3d(0, 0, 0); }
        to { transform: translate3d(-50%, 0, 0); }
      }
    </style>
<div className="relative w-full overflow-hidden bg-white py-6 sm:py-8 lg:py-10">
<div className="w-full relative" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'}}>
<div className="flex w-max items-center gap-6 pr-6 sm:gap-8 sm:pr-8 lg:gap-10 lg:pr-10" style={{animation: 'auraStoneBandScroll 58s linear infinite'}}>
<div className="h-36 w-64 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-950/5 sm:h-40 sm:w-80 lg:w-96">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&amp;fit=crop&amp;w=900&amp;q=90"/>
</div>
<div className="h-36 w-64 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-950/5 sm:h-40 sm:w-80 lg:w-96">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;w=900&amp;q=90"/>
</div>
<div className="h-36 w-64 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-950/5 sm:h-40 sm:w-80 lg:w-96">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&amp;fit=crop&amp;w=900&amp;q=90"/>
</div>
<div className="h-36 w-64 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-950/5 sm:h-40 sm:w-80 lg:w-96">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&amp;fit=crop&amp;w=900&amp;q=90"/>
</div>
<div className="h-36 w-64 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-950/5 sm:h-40 sm:w-80 lg:w-96">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&amp;fit=crop&amp;w=900&amp;q=90"/>
</div>
<div className="h-36 w-64 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-950/5 sm:h-40 sm:w-80 lg:w-96">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&amp;fit=crop&amp;w=900&amp;q=90"/>
</div>
<div className="h-36 w-64 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-950/5 sm:h-40 sm:w-80 lg:w-96">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&amp;fit=crop&amp;w=900&amp;q=90"/>
</div>
<div className="h-36 w-64 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-950/5 sm:h-40 sm:w-80 lg:w-96">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=900&amp;q=90"/>
</div>

<div className="h-36 w-64 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-950/5 sm:h-40 sm:w-80 lg:w-96">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&amp;fit=crop&amp;w=900&amp;q=90"/>
</div>
<div className="h-36 w-64 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-950/5 sm:h-40 sm:w-80 lg:w-96">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;w=900&amp;q=90"/>
</div>
<div className="h-36 w-64 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-950/5 sm:h-40 sm:w-80 lg:w-96">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&amp;fit=crop&amp;w=900&amp;q=90"/>
</div>
<div className="h-36 w-64 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-950/5 sm:h-40 sm:w-80 lg:w-96">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&amp;fit=crop&amp;w=900&amp;q=90"/>
</div>
<div className="h-36 w-64 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-950/5 sm:h-40 sm:w-80 lg:w-96">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&amp;fit=crop&amp;w=900&amp;q=90"/>
</div>
<div className="h-36 w-64 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-950/5 sm:h-40 sm:w-80 lg:w-96">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&amp;fit=crop&amp;w=900&amp;q=90"/>
</div>
<div className="h-36 w-64 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-950/5 sm:h-40 sm:w-80 lg:w-96">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&amp;fit=crop&amp;w=900&amp;q=90"/>
</div>
<div className="h-36 w-64 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-950/5 sm:h-40 sm:w-80 lg:w-96">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=900&amp;q=90"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full overflow-hidden bg-white" style={{fontFamily: '\'Inter\', sans-serif'}}>
<div className="lg:pb-0 lg:pl-12 lg:pr-12 lg:pt-0 text-left max-w-[1700px] mx-auto pt-20 pr-12 pb-0 pl-12">

<div className="grid grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-16 relative">

<div className="">
<div className="flex items-center gap-3 border-l-4 border-slate-900 pl-4">
<p className="text-xs font-medium tracking-[0.25em] text-slate-700 sm:text-sm">UZMANLIĞIMIZ</p>
</div>
<h2 className="mt-8 text-4xl font-semibold leading-[1.15] tracking-tight text-[#13202e] sm:text-5xl xl:text-6xl">
          Doğal Taşta Uçtan Uca<br className="hidden sm:block"/>
          Mühendislik Çözümleri
        </h2>
<p className="leading-relaxed text-lg text-slate-600 max-w-2xl my-7">
          MED Madencilik olarak, mermer, granit ve travertenin estetik gücünü; mühendislik, ileri üretim
          teknolojileri ve deneyimli uygulama ekibimizle buluşturuyoruz. Her projeye özel çözümler geliştiriyor,
          doğal taşın karakterini koruyarak uzun ömürlü, yüksek kaliteli ve sürdürülebilir sonuçlar üretiyoruz.
        </p>
<div className="mt-9">
</div>
</div>

<div className="grid grid-cols-1 gap-5 self-start sm:grid-cols-3 xl:pt-6 pt-6">

<div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white px-5 py-8 text-center shadow-sm">
<svg aria-hidden="true" className="lucide lucide-pencil-ruler h-11 w-11 text-[#13202e]" data-lucide="pencil-ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path><path d="m8 6 2-2"></path><path d="m18 16 2-2"></path><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-[#13202e]">Projelendirme</h3>
<p className="mt-3 text-sm leading-relaxed text-slate-600">
            Mimari projeye özel teknik çözümler ve detaylandırma desteği.
          </p>
</div>

<div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white px-5 py-8 text-center shadow-sm">
<svg aria-hidden="true" className="lucide lucide-settings h-11 w-11 text-[#13202e]" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-[#13202e]">Üretim</h3>
<p className="mt-3 text-sm leading-relaxed text-slate-600">
            Modern tesislerimizde hassas işleme, kalite kontrol ve zamanında teslimat.
          </p>
</div>

<div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white px-5 py-8 text-center shadow-sm">
<svg aria-hidden="true" className="lucide lucide-hard-hat h-11 w-11 text-[#13202e]" data-lucide="hard-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path><path d="M14 6a6 6 0 0 1 6 6v3"></path><path d="M4 15v-3a6 6 0 0 1 6-6"></path><rect height="4" rx="1" width="20" x="2" y="15"></rect></svg>
<h3 className="mt-5 text-lg font-semibold tracking-tight text-[#13202e]">Saha Uygulaması</h3>
<p className="mt-3 text-sm leading-relaxed text-slate-600">
            Deneyimli ekibimizle yerinde keşif, doğru uygulama ve teknik destek.
          </p>
</div>
<a className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#13202e] px-7 py-4 text-base font-medium text-white shadow-sm transition hover:bg-[#1c2e42] sm:col-span-3" href="#">
  Uygulama Alanlarını İncele
  <svg aria-hidden="true" className="lucide lucide-arrow-right h-5 w-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a></div>
</div>

<div className="lg:mt-16 mt-16 relative" style={{fontFamily: '\'Inter\', sans-serif'}}>

<button aria-label="Önceki" className="absolute -left-3 top-[45%] z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1B2535] shadow-md transition hover:shadow-lg md:flex lg:-left-6" onclick="const s=document.getElementById('med-slider');s.scrollBy({left:-s.clientWidth*0.9,behavior:'smooth'});" type="button">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>

<button aria-label="Sonraki" className="absolute -right-3 top-[45%] z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1B2535] shadow-md transition hover:shadow-lg md:flex lg:-right-6" onclick="const s=document.getElementById('med-slider');s.scrollBy({left:s.clientWidth*0.9,behavior:'smooth'});" type="button">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>

<div className="flex cursor-grab snap-x snap-mandatory gap-7 overflow-x-auto pb-2 gap-x-7 gap-y-7" data-d="0" data-s="0" data-x="151" id="med-slider" onpointerdown="if(event.pointerType==='mouse'){this.dataset.d='1';this.dataset.x=event.clientX;this.dataset.s=this.scrollLeft;this.classList.remove('scroll-smooth');this.classList.add('cursor-grabbing');}" onpointerleave="this.dataset.d='0';this.classList.add('scroll-smooth');this.classList.remove('cursor-grabbing');" onpointermove="if(this.dataset.d==='1'){this.scrollLeft=Number(this.dataset.s)-(event.clientX-Number(this.dataset.x));}" onpointerup="this.dataset.d='0';this.classList.add('scroll-smooth');this.classList.remove('cursor-grabbing');" onscroll="const m=Math.max(1,this.scrollWidth-this.clientWidth);const i=Math.min(2,Math.round(this.scrollLeft/m*2));['med-dot-0','med-dot-1','med-dot-2'].forEach(function(d,k){const e=document.getElementById(d);if(e){e.classList.toggle('bg-[#1B2535]',k===i);e.classList.toggle('bg-slate-300',k!==i);}});" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<div className="flex w-[84%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md sm:w-[46%] lg:w-[30%]">
<div className="flex items-start gap-4 px-6 py-6">
<span className="inline-flex h-12 w-12 shrink-0 select-none items-center justify-center rounded-lg bg-[#1B2535] text-base font-semibold text-white">01</span>
<h3 className="text-lg font-semibold leading-snug tracking-tight text-[#1B2535] sm:text-xl">Proje-Taahhüt<br/>Uygulamaları</h3>
</div>
<div className="relative mt-auto h-72 w-full sm:h-80 lg:h-[26rem]">
<img alt="Bej traverten cephe ve merdiven uygulaması" className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover" draggable="false" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="flex w-[84%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md sm:w-[46%] lg:w-[30%]">
<div className="flex items-start gap-4 px-6 py-6">
<span className="inline-flex h-12 w-12 shrink-0 select-none items-center justify-center rounded-lg bg-[#1B2535] text-base font-semibold text-white">02</span>
<h3 className="text-lg font-semibold leading-snug tracking-tight text-[#1B2535] sm:text-xl">Endüstriyel Mutfak<br/>Uygulamaları</h3>
</div>
<div className="relative mt-auto h-72 w-full sm:h-80 lg:h-[26rem]">
<img alt="Mermer tezgâhlı profesyonel endüstriyel mutfak" className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover" draggable="false" src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="flex w-[84%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md sm:w-[46%] lg:w-[30%]">
<div className="flex items-start gap-4 px-6 py-6">
<span className="inline-flex h-12 w-12 shrink-0 select-none items-center justify-center rounded-lg bg-[#1B2535] text-base font-semibold text-white">03</span>
<h3 className="text-lg font-semibold leading-snug tracking-tight text-[#1B2535] sm:text-xl">Mutfak Tezgahı<br/>Uygulamaları</h3>
</div>
<div className="relative mt-auto h-72 w-full sm:h-80 lg:h-[26rem]">
<img alt="Damarlı mermer mutfak tezgâhı detayı" className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover" draggable="false" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="flex w-[84%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md sm:w-[46%] lg:w-[30%]">
<div className="flex items-start gap-4 px-6 py-6">
<span className="inline-flex h-12 w-12 shrink-0 select-none items-center justify-center rounded-lg bg-[#1B2535] text-base font-semibold text-white">04</span>
<h3 className="text-lg font-semibold leading-snug tracking-tight text-[#1B2535] sm:text-xl">Masa Sehpa ve Dresuar<br/>Uygulamaları</h3>
</div>
<div className="relative mt-auto h-72 w-full sm:h-80 lg:h-[26rem]">
<img alt="Doğal taş yuvarlak sehpa ve oturma alanı" className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover" draggable="false" src="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="flex w-[84%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md sm:w-[46%] lg:w-[30%]">
<div className="flex items-start gap-4 px-6 py-6">
<span className="inline-flex h-12 w-12 shrink-0 select-none items-center justify-center rounded-lg bg-[#1B2535] text-base font-semibold text-white">05</span>
<h3 className="text-lg font-semibold leading-snug tracking-tight text-[#1B2535] sm:text-xl">Villa<br/>Uygulamaları</h3>
</div>
<div className="relative mt-auto h-72 w-full sm:h-80 lg:h-[26rem]">
<img alt="Mermer kaplı villa iç mekânı, merdiven ve şömine" className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover" draggable="false" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="mt-8 flex items-center justify-center gap-2.5">
<button aria-label="Sayfa 1" className="h-3 w-3 rounded-full bg-[#1B2535] transition" id="med-dot-0" onclick="const s=document.getElementById('med-slider');s.scrollTo({left:0,behavior:'smooth'});" type="button"></button>
<button aria-label="Sayfa 2" className="h-3 w-3 rounded-full bg-slate-300 transition" id="med-dot-1" onclick="const s=document.getElementById('med-slider');s.scrollTo({left:(s.scrollWidth-s.clientWidth)/2,behavior:'smooth'});" type="button"></button>
<button aria-label="Sayfa 3" className="h-3 w-3 rounded-full bg-slate-300 transition" id="med-dot-2" onclick="const s=document.getElementById('med-slider');s.scrollTo({left:s.scrollWidth-s.clientWidth,behavior:'smooth'});" type="button"></button>
</div>
</div>
</div>
</section><section className="relative w-full overflow-hidden bg-white">
<div className="mx-auto max-w-[1700px]">



<div className="mx-6 my-8 rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm lg:mx-12 lg:my-10 lg:px-10">
<div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:gap-0">
<div className="flex flex-1 items-center gap-4 xl:pr-8">
<i className="h-10 w-10 shrink-0 text-[#13202e]" data-lucide="shield-check"></i>
<div className="">
<p className="text-base font-semibold text-slate-900">Kurumsal ve Bireysel Çözümler</p>
<p className="mt-0.5 text-sm text-slate-500">Her ölçekte projeye özel çözümler sunuyoruz.</p>
</div>
</div>
<div className="hidden h-12 w-px bg-slate-200 xl:block"></div>
<div className="flex flex-1 items-center gap-4 xl:px-8">
<i className="h-10 w-10 shrink-0 text-[#13202e]" data-lucide="map-pin"></i>
<div className="">
<p className="text-base font-semibold text-slate-900">Bursa Merkezli Üretim</p>
<p className="mt-0.5 text-sm text-slate-500">Modern tesislerimizde kaliteli üretim sağlıyoruz.</p>
</div>
</div>
<div className="hidden h-12 w-px bg-slate-200 xl:block"></div>
<div className="flex flex-1 items-center gap-4 xl:px-8">
<i className="h-10 w-10 shrink-0 text-[#13202e]" data-lucide="hammer"></i>
<div className="">
<p className="text-base font-semibold text-slate-900">Keşif, Üretim ve Montaj</p>
<p className="mt-0.5 text-sm text-slate-500">Uçtan uca entegre hizmet sunuyoruz.</p>
</div>
</div>
<a className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-xl bg-[#13202e] px-7 py-4 text-base font-medium text-white shadow-sm transition hover:bg-[#1c2e42]" href="#">
<i className="h-5 w-5" data-lucide="file-text"></i>
            Hizmetleri İncele
          </a>
</div>
</div>
</div>
</section><section className="overflow-hidden bg-white w-full relative">
<div className="mx-auto max-w-[1700px]">

<div className="lg:pt-0 lg:pl-12 lg:pr-12 lg:pb-0 bg-white pt-0 pr-12 pb-16 pl-12" style={{fontFamily: '\'Inter\', sans-serif'}}>
<h2 className="leading-[1.15] sm:text-5xl xl:text-5xl text-4xl font-semibold text-[#13202e] tracking-tight mt-8">Doğal Taş Çeşitleri</h2><div className="group/cards mt-8 flex flex-col gap-4 md:h-[560px] md:flex-row lg:h-[640px]">

<a className="group relative block h-72 w-full overflow-hidden rounded-2xl transition-all duration-700 ease-in-out sm:h-80 md:h-full md:flex-[3] md:group-hover/cards:flex-[1] md:hover:!flex-[3]" href="#">
<img alt="Mermer dokusu makro çekim" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517329782449-810562a4ec2f?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 p-6 lg:p-10">
<div className="max-h-40 opacity-100 transition-all duration-700 md:group-hover/cards:max-h-0 md:group-hover/cards:overflow-hidden md:group-hover/cards:opacity-0 md:group-hover:!max-h-40 md:group-hover:!opacity-100">
<p className="lg:text-lg text-base text-slate-50">Zamansız damar yapısı ve güçlü estetik etki.</p>
<span className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#1B2535] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#2a3a52]">Teklif Al</span>
</div>
<p className="whitespace-nowrap sm:text-5xl lg:text-6xl text-4xl font-semibold text-slate-50 tracking-tight mt-6">Mermer</p>
</div>
</a>

<a className="group relative block h-72 w-full overflow-hidden rounded-2xl transition-all duration-700 ease-in-out sm:h-80 md:h-full md:flex-[1] md:hover:!flex-[3]" href="#">
<img alt="Traverten dokusu makro çekim" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="bg-gradient-to-t from-[#1B2535]/70 via-[#1B2535]/10 to-transparent absolute top-0 right-0 bottom-0 left-0 grayscale invert" style={{maskImage: 'linear-gradient(50deg, transparent, black 0%, black 0%, transparent)', WebkitMaskImage: 'linear-gradient(50deg, transparent, black 0%, black 0%, transparent)'}}></div>
<div className="absolute inset-x-0 bottom-0 p-6 lg:p-10">
<div className="max-h-40 opacity-100 transition-all duration-700 md:max-h-0 md:overflow-hidden md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100">
<p className="text-base text-white/90 lg:text-lg">Sıcak tonlar ve doğal gözenekli karakter.</p>
<span className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#1B2535] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#2a3a52]">Teklif Al</span>
</div>
<p className="mt-6 whitespace-nowrap text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">Traverten</p>
</div>
</a>

<a className="group relative block h-72 w-full overflow-hidden rounded-2xl transition-all duration-700 ease-in-out sm:h-80 md:h-full md:flex-[1] md:hover:!flex-[3]" href="#">
<img alt="Granit dokusu makro çekim" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-gradient-to-t from-[#1B2535]/70 via-[#1B2535]/10 to-transparent absolute top-0 right-0 bottom-0 left-0 grayscale invert" style={{maskImage: 'linear-gradient(50deg, transparent, black 0%, black 0%, transparent)', WebkitMaskImage: 'linear-gradient(50deg, transparent, black 0%, black 0%, transparent)'}}></div>
<div className="absolute inset-x-0 bottom-0 p-6 lg:p-10">
<div className="max-h-40 opacity-100 transition-all duration-700 md:max-h-0 md:overflow-hidden md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100">
<p className="text-base text-white/90 lg:text-lg">Yoğun dokusuyla maksimum dayanım.</p>
<span className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#1B2535] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#2a3a52]">Teklif Al</span>
</div>
<p className="mt-6 whitespace-nowrap text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">Granit</p>
</div>
</a>
</div>
</div>


<div className="mx-6 my-12 bg-white lg:mx-12 lg:my-16" style={{fontFamily: '\'Inter\', sans-serif'}}>
<style>
    @keyframes aura-marquee-emqbeda4 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    .aura-marquee-track-emqbeda4 { animation: aura-marquee-emqbeda4 32s linear infinite; }
    .aura-marquee-wrap-emqbeda4:hover .aura-marquee-track-emqbeda4 { animation-play-state: paused; }
  </style>
<h2 className="text-4xl font-semibold tracking-tight text-[#1B2535] sm:text-5xl lg:text-6xl" style={{lineHeight: '1.15'}}>Bursa'nın Simgelerine İmza Attık</h2>
<div className="mt-12 grid grid-cols-2 gap-y-10 lg:mt-16 lg:flex lg:items-stretch lg:gap-y-0">
<div className="flex flex-1 flex-col items-center text-center">
<p className="text-4xl font-semibold tracking-tight text-[#1B2535] sm:text-5xl lg:text-6xl"><span className="" data-count="30" data-suffix="+">30+</span> Yıl</p>
<p className="mt-3 text-base text-slate-500 sm:text-lg">Tecrübe</p>
</div>
<div className="hidden w-px self-stretch bg-slate-200 lg:block"></div>
<div className="flex flex-1 flex-col items-center text-center">
<p className="text-4xl font-semibold tracking-tight text-[#1B2535] sm:text-5xl lg:text-6xl"><span className="" data-count="9" data-suffix="+">9+</span></p>
<p className="mt-3 text-base text-slate-500 sm:text-lg">Prestij Proje</p>
</div>
<div className="hidden w-px self-stretch bg-slate-200 lg:block"></div>
<div className="flex flex-1 flex-col items-center text-center">
<p className="text-4xl font-semibold tracking-tight text-[#1B2535] sm:text-5xl lg:text-6xl"><span className="" data-count="8" data-suffix="">8</span></p>
<p className="mt-3 text-base text-slate-500 sm:text-lg">Şehir</p>
</div>
<div className="hidden w-px self-stretch bg-slate-200 lg:block"></div>
<div className="flex flex-1 flex-col items-center text-center">
<p className="text-4xl font-semibold tracking-tight text-[#1B2535] sm:text-5xl lg:text-6xl"><span className="" data-count="5000" data-suffix="+">5000+</span></p>
<p className="mt-3 text-base text-slate-500 sm:text-lg">Uygulama</p>
</div>
</div>
<div className="aura-marquee-wrap-emqbeda4 relative mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white px-2 py-6 shadow-sm lg:mt-16 lg:py-8">
<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-20"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-20"></div>
<div className="aura-marquee-track-emqbeda4 flex w-max items-center gap-4 sm:gap-6">
<span className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-[#1B2535] shadow-sm sm:px-8 sm:py-4 sm:text-base">Zafer Plaza</span>
<span className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-[#1B2535] shadow-sm sm:px-8 sm:py-4 sm:text-base">Korupark</span>
<span className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-[#1B2535] shadow-sm sm:px-8 sm:py-4 sm:text-base">Bursa Adalet Sarayı</span>
<span className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-[#1B2535] shadow-sm sm:px-8 sm:py-4 sm:text-base">Mersin Üniversitesi</span>
<span className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-[#1B2535] shadow-sm sm:px-8 sm:py-4 sm:text-base">Uludağ Üniv. Tıp Fakültesi</span>
<span className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-[#1B2535] shadow-sm sm:px-8 sm:py-4 sm:text-base">Adana TOKİ</span>
<span aria-hidden="true" className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-[#1B2535] shadow-sm sm:px-8 sm:py-4 sm:text-base">Zafer Plaza</span>
<span aria-hidden="true" className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-[#1B2535] shadow-sm sm:px-8 sm:py-4 sm:text-base">Korupark</span>
<span aria-hidden="true" className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-[#1B2535] shadow-sm sm:px-8 sm:py-4 sm:text-base">Bursa Adalet Sarayı</span>
<span aria-hidden="true" className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-[#1B2535] shadow-sm sm:px-8 sm:py-4 sm:text-base">Mersin Üniversitesi</span>
<span aria-hidden="true" className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-[#1B2535] shadow-sm sm:px-8 sm:py-4 sm:text-base">Uludağ Üniv. Tıp Fakültesi</span>
<span aria-hidden="true" className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-[#1B2535] shadow-sm sm:px-8 sm:py-4 sm:text-base">Adana TOKİ</span>
</div>
</div>

</div><div className="mx-6 my-12 bg-white lg:mx-12 lg:my-16" style={{fontFamily: '\'Inter\', sans-serif'}}>
<style>
    @keyframes aura-kenburns-emqbeibi { from { transform: scale(1); } to { transform: scale(1.1); } }
    .aura-slide-emqbeibi { opacity: 0; transition: opacity 1.2s ease-in-out; pointer-events: none; }
    .aura-slide-emqbeibi.is-active { opacity: 1; pointer-events: auto; }
    .aura-slide-emqbeibi.is-active img { animation: aura-kenburns-emqbeibi 7s ease-out forwards; }
    .aura-caption-emqbeibi { opacity: 0; transform: translateY(12px); transition: opacity .8s ease .4s, transform .8s ease .4s; }
    .aura-slide-emqbeibi.is-active .aura-caption-emqbeibi { opacity: 1; transform: translateY(0); }
  </style>
<h2 className="text-4xl font-semibold tracking-tight text-[#1B2535] sm:text-5xl" style={{lineHeight: '1.15'}}>Referans Projelerimiz</h2>

<div className="relative mt-8 h-[420px] overflow-hidden rounded-2xl bg-[#1B2535] sm:h-[480px] lg:mt-10 lg:h-[580px]">
<div className="aura-slide-emqbeibi is-active absolute inset-0" data-slide="">
<img alt="Zafer Plaza AVM" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1B2535]/80 via-[#1B2535]/10 to-transparent"></div>
<div className="aura-caption-emqbeibi absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
<p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Zafer Plaza AVM <span className="font-normal text-white/70">— Bursa</span></p>
</div>
</div>
<div className="aura-slide-emqbeibi absolute inset-0" data-slide="">
<img alt="Korupark AVM" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1B2535]/80 via-[#1B2535]/10 to-transparent"></div>
<div className="aura-caption-emqbeibi absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
<p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Korupark AVM <span className="font-normal text-white/70">— Bursa</span></p>
</div>
</div>
<div className="aura-slide-emqbeibi absolute inset-0" data-slide="">
<img alt="Bursa Adalet Sarayı" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1B2535]/80 via-[#1B2535]/10 to-transparent"></div>
<div className="aura-caption-emqbeibi absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
<p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Bursa Adalet Sarayı <span className="font-normal text-white/70">— Bursa</span></p>
</div>
</div>
<div className="aura-slide-emqbeibi absolute inset-0" data-slide="">
<img alt="Mersin Üniversitesi" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1B2535]/80 via-[#1B2535]/10 to-transparent"></div>
<div className="aura-caption-emqbeibi absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
<p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Mersin Üniversitesi <span className="font-normal text-white/70">— Mersin</span></p>
</div>
</div>
<div className="aura-slide-emqbeibi absolute inset-0" data-slide="">
<img alt="Uludağ Üniv. Tıp Fakültesi" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1B2535]/80 via-[#1B2535]/10 to-transparent"></div>
<div className="aura-caption-emqbeibi absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
<p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Uludağ Üniv. Tıp Fakültesi <span className="font-normal text-white/70">— Bursa</span></p>
</div>
</div>
<div className="aura-slide-emqbeibi absolute inset-0" data-slide="">
<img alt="Adana TOKİ" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1B2535]/80 via-[#1B2535]/10 to-transparent"></div>
<div className="aura-caption-emqbeibi absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
<p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Adana TOKİ <span className="font-normal text-white/70">— Adana</span></p>
</div>
</div>

<button aria-label="Önceki proje" className="absolute right-[4.5rem] top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25 sm:right-20 sm:top-8" data-prev="" type="button">
<i className="h-5 w-5" data-lucide="chevron-left" style={{strokeWidth: '1.5'}}></i>
</button>
<button aria-label="Sonraki proje" className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25 sm:right-8 sm:top-8" data-next="" type="button">
<i className="h-5 w-5" data-lucide="chevron-right" style={{strokeWidth: '1.5'}}></i>
</button>

<div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 sm:bottom-10 sm:right-10" data-dots=""></div>
</div>


</div>
</div><div className="lg:mx-12 lg:my-16 bg-white mt-16 mr-12 mb-16 ml-12" style={{fontFamily: '\'Inter\', sans-serif'}}>
<section className="overflow-hidden bg-white w-full relative" style={{fontFamily: '\'Inter\', sans-serif'}}>
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 lg:pt-0 lg:pl-12 lg:pr-12 lg:pb-0 max-w-[1700px] mx-auto pt-0 pr-12 pb-20 pl-12 gap-x-10 gap-y-8" data-med-quote-root="" data-quote-init="1">

<div className="relative overflow-hidden rounded-2xl">
<img alt="Mermer tezgahlı modern mutfak" className="h-72 w-full object-cover sm:h-96 lg:h-full lg:min-h-[640px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute left-5 top-5 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-lg sm:left-8 sm:top-8">
<svg aria-hidden="true" className="h-5 w-5 text-[#1B2535]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="whitespace-nowrap text-sm font-extralight text-[#1B2535] sm:text-base">30+ Yıl · 5000+ Uygulama</span>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
<h2 className="sm:text-4xl text-3xl font-medium text-[#1B2535] tracking-tight">Hızlı Teklif Al</h2>
<p className="mt-3 text-base font-light text-slate-500 sm:text-lg">Bilgilerinizi bırakın, size en uygun fiyatı WhatsApp üzerinden iletelim.</p>
<form className="mt-8 flex flex-col gap-6" data-quote-form="aura-emqbljud09bgxcvnx">

<div className="flex flex-col gap-2">
<label className="text-sm font-extralight text-[#1B2535]" htmlFor="aura-quote-name">Ad Soyad</label>
<div className="relative">
<svg aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
<input className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-base font-light text-[#1B2535] placeholder-slate-400 outline-none transition focus:border-[#1B2535] focus:ring-2 focus:ring-[#1B2535]/10" placeholder="Adınız ve soyadınız" type="text"/>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="text-sm font-extralight text-[#1B2535]" htmlFor="aura-quote-phone">Telefon</label>
<div className="relative">
<svg aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
<input className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-base font-light text-[#1B2535] placeholder-slate-400 outline-none transition focus:border-[#1B2535] focus:ring-2 focus:ring-[#1B2535]/10" placeholder="05XX XXX XX XX" type="tel"/>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="text-sm font-extralight text-[#1B2535]" htmlFor="aura-quote-material">Malzeme</label>
<div className="relative">
<svg aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</svg>
<select className="h-12 w-full cursor-pointer rounded-xl border border-slate-200 bg-white pl-12 pr-12 text-base font-light text-[#1B2535] outline-none transition focus:border-[#1B2535] focus:ring-2 focus:ring-[#1B2535]/10" style={{appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none'}}>
<option selected="" value="">Malzeme Seçin</option>
<option value="Mermer">Mermer</option>
<option value="Traverten">Traverten</option>
<option value="Granit">Granit</option>
<option value="Bazalt">Bazalt</option>
<option value="Diğer">Diğer</option>
</select>
<svg aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="text-sm font-extralight text-[#1B2535]" htmlFor="aura-quote-photo">Fotoğraf <span className="font-thin text-slate-400">(İsteğe Bağlı)</span></label>
<label className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 transition hover:border-[#1B2535]/40 hover:bg-slate-100" htmlFor="aura-quote-photo">
<span className="flex items-center gap-3 overflow-hidden">
<svg aria-hidden="true" className="h-5 w-5 shrink-0 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
<span className="truncate text-base font-light text-slate-500" data-file-label="aura-emqbljud09bgxcvnx">Mutfak, banyo, cephe vb. fotoğraf yükleyin</span>
</span>
<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm">
<svg aria-hidden="true" className="h-4 w-4 text-[#1B2535]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
</span>
</label>
<input accept="image/*" className="sr-only" type="file"/>
</div>

<button className="mt-2 inline-flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#1B2535] text-base font-extralight text-white shadow-sm transition hover:bg-[#2a3a52]" type="submit">
<svg aria-hidden="true" className="h-5 w-5 shrink-0" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"></path></svg>
          WhatsApp'tan Teklif Al
        </button>
<p className="flex items-center justify-center gap-2 text-sm font-light text-slate-500">
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
</svg>
          Ölçüyü biz alıyoruz, siz sadece numaranızı bırakın.
        </p>
</form>
</div>
</div>
</section>

</div>
</section><div className="w-full bg-white" style={{fontFamily: '\'Inter\', sans-serif'}}>
<div className="mx-auto max-w-[1700px] px-6 sm:px-8 lg:px-12">
<div className="flex flex-wrap sm:gap-3 text-[#1B2535] bg-slate-50 rounded-2xl px-6 py-5 gap-x-2 gap-y-2 items-center justify-center">
<p className="mr-1 text-base font-normal leading-7 text-[#1B2535] sm:text-lg">Tekliften sonra süreç:</p>
<span className="inline-flex items-center justify-center rounded-full border border-[#1B2535]/15 bg-white/55 px-4 py-2 text-sm font-light leading-5 text-[#1B2535] shadow-sm shadow-[#1B2535]/[0.03] sm:px-5 sm:text-base">Keşif</span>
<span className="select-none text-sm font-light leading-none text-[#1B2535]/70 sm:text-base">→</span>
<span className="inline-flex items-center justify-center rounded-full border border-[#1B2535]/15 bg-white/55 px-4 py-2 text-sm font-light leading-5 text-[#1B2535] shadow-sm shadow-[#1B2535]/[0.03] sm:px-5 sm:text-base">Malzeme Seçimi</span>
<span className="select-none text-sm font-light leading-none text-[#1B2535]/70 sm:text-base">→</span>
<span className="inline-flex items-center justify-center rounded-full border border-[#1B2535]/15 bg-white/55 px-4 py-2 text-sm font-light leading-5 text-[#1B2535] shadow-sm shadow-[#1B2535]/[0.03] sm:px-5 sm:text-base">Ölçü &amp; Uygulama</span>
</div>
</div>
</div><div className="w-full bg-white" style={{fontFamily: '\'Inter\', sans-serif'}}>
<div className="mx-auto max-w-[1700px] px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
<div className="grid w-full grid-cols-1 gap-8 text-[#1B2535] md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-14">
<div className="min-w-0 md:border-r md:border-slate-200 md:pr-8 lg:pr-10">
<div className="mb-7 h-px w-12 bg-[#1B2535]"></div>
<h2 className="text-2xl font-semibold leading-tight tracking-tight text-[#1B2535] sm:text-3xl">Son Sorular</h2>
<a className="group mt-8 inline-flex max-w-52 items-end gap-3 text-base font-light leading-7 text-[#1B2535] underline decoration-[#1B2535]/35 underline-offset-4 transition hover:text-[#1B2535]/70 hover:decoration-[#1B2535]/60 sm:text-lg" href="https://wa.me/902242449151?text=Merhaba%2C%20do%C4%9Fal%20ta%C5%9F%20projem%20i%C3%A7in%20bir%20sorum%20var.%20Yard%C4%B1mc%C4%B1%20olabilir%20misiniz%3F" rel="noopener noreferrer" target="_blank">
<span className="">Başka sorunuz mu var? WhatsApp'tan yazın</span>
<svg aria-hidden="true" className="mb-1 h-4 w-4 shrink-0 transition group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="min-w-0">
<div className="w-full">
<details className="group border-b border-slate-200" open="">
<summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-4 text-left [&amp;::-webkit-details-marker]:hidden sm:py-5">
<span className="min-w-0 text-lg font-medium leading-7 tracking-tight text-[#1B2535] sm:text-xl">Ölçü nasıl alınıyor?</span>
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#1B2535] transition duration-200 group-open:rotate-180" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="pb-5">
<p className="max-w-3xl text-base font-light leading-7 text-[#1B2535]/72 sm:text-lg sm:leading-8">Yerinde
                keşif yaparak tüm ölçüleri net şekilde alıyor, uygulamaya uygun planı çıkarıyoruz.</p>
</div>
</details>
<details className="group border-b border-slate-200">
<summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-4 text-left [&amp;::-webkit-details-marker]:hidden sm:py-5">
<span className="min-w-0 text-lg font-medium leading-7 tracking-tight text-[#1B2535] sm:text-xl">Montaj hizmeti sağlıyor musunuz?</span>
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#1B2535] transition duration-200 group-open:rotate-180" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="pb-5">
<p className="max-w-3xl text-base font-light leading-7 text-[#1B2535]/72 sm:text-lg sm:leading-8">Evet. Üretim
                sonrası montajı ekibimiz planlanan zamanda ve temiz şekilde tamamlar.</p>
</div>
</details>
<details className="group border-b border-slate-200">
<summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-4 text-left [&amp;::-webkit-details-marker]:hidden sm:py-5">
<span className="min-w-0 text-lg font-medium leading-7 tracking-tight text-[#1B2535] sm:text-xl">Ek yeri belli olur mu?</span>
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#1B2535] transition duration-200 group-open:rotate-180" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="pb-5">
<p className="max-w-3xl text-base font-light leading-7 text-[#1B2535]/72 sm:text-lg sm:leading-8">Damar yönü
                ve plaka ölçüsüne göre ekleri en sade görünecek şekilde planlıyoruz.</p>
</div>
</details>
<details className="group border-b border-slate-200">
<summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-4 text-left [&amp;::-webkit-details-marker]:hidden sm:py-5">
<span className="min-w-0 text-lg font-medium leading-7 tracking-tight text-[#1B2535] sm:text-xl">Mermer ve granitte leke oluşur mu?</span>
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#1B2535] transition duration-200 group-open:rotate-180" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="pb-5">
<p className="max-w-3xl text-base font-light leading-7 text-[#1B2535]/72 sm:text-lg sm:leading-8">Doğru koruma
                ve nazik temizlikle yüzeyler uzun süre temiz görünümünü korur.</p>
</div>
</details>
<details className="group border-b border-slate-200">
<summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-4 text-left [&amp;::-webkit-details-marker]:hidden sm:py-5">
<span className="min-w-0 text-lg font-medium leading-7 tracking-tight text-[#1B2535] sm:text-xl">Bursa içi hizmet veriyor musunuz?</span>
<svg aria-hidden="true" className="h-4 w-4 shrink-0 text-[#1B2535] transition duration-200 group-open:rotate-180" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="pb-5">
<p className="max-w-3xl text-base font-light leading-7 text-[#1B2535]/72 sm:text-lg sm:leading-8">Evet. Bursa
                içinde keşif, üretim ve montaj sürecini uçtan uca yürütüyoruz.</p>
</div>
</details>
</div>
</div>
</div>
</div>
</div><div className="sm:px-8 lg:px-12 lg:py-14 bg-slate-50 w-full max-w-[1700px] mr-auto ml-auto px-6 py-12" data-med-quote-root="" data-quote-init="1" style={{fontFamily: '\'Inter\', sans-serif'}}>
<div className="rounded-3xl bg-[#FAF7F2] text-[#1B2535]">
<div className="grid grid-cols-1 lg:grid-cols-[19rem_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[22rem_minmax(0,1fr)] bg-slate-50 gap-x-8 gap-y-8 items-center">
<div className="min-w-0 lg:pr-4">
<div className="mb-7 h-px w-12 bg-[#1B2535]/18"></div>
<p className="text-sm font-medium uppercase tracking-widest text-[#1B2535]/55">Müşteri Yorumları</p>
<div className="mt-6 flex items-end gap-2">
<span className="text-7xl font-semibold leading-none tracking-tight text-[#1B2535] sm:text-8xl">4.9</span>
<span className="pb-2 text-4xl font-light leading-none tracking-tight text-[#1B2535] sm:text-5xl">/5</span>
</div>
<div aria-label="5 üzerinden 4.9 puan" className="mt-6 inline-flex items-center gap-2 text-[#1B2535]">
<svg aria-hidden="true" className="h-6 w-6" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.77.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.77-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
<svg aria-hidden="true" className="h-6 w-6" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.77.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.77-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
<svg aria-hidden="true" className="h-6 w-6" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.77.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.77-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
<svg aria-hidden="true" className="h-6 w-6" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.77.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.77-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
<svg aria-hidden="true" className="h-6 w-6" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.77.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.77-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
</div>
<p className="mt-7 max-w-xs text-xl font-light leading-8 tracking-tight text-[#1B2535] sm:text-2xl">Mimar, müteahhit ve ev sahiplerinin tercihi</p>
</div>
<div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
<article className="flex h-full min-w-0 flex-col rounded-2xl border border-[#1B2535]/12 bg-white/70 p-6 shadow-lg shadow-[#1B2535]/[0.07] sm:p-7">
<div className="text-4xl font-light leading-none text-[#CFC4B5]">“</div>
<p className="mt-5 flex-1 text-base font-light leading-7 text-[#1B2535] sm:text-lg sm:leading-8">Projelerimizde güvenle çalıştığımız bir firma. Ürün kalitesi, ölçü hassasiyeti ve zamanında teslimat her zaman beklentimizin üzerinde.</p>
<div className="mt-8 border-t border-[#1B2535]/10 pt-6">
<div className="flex items-center gap-4">
<img alt="Ahmet Yılmaz portre" className="h-14 w-14 shrink-0 rounded-full border border-[#1B2535]/10 object-cover shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="min-w-0">
<p className="truncate text-base font-medium leading-6 text-[#1B2535] sm:text-lg">Ahmet Yılmaz</p>
<p className="truncate text-sm font-light leading-5 text-[#1B2535]/65 sm:text-base">Mimar</p>
<div aria-label="5 yıldız" className="mt-3 inline-flex items-center gap-1 text-[#1B2535]">
<svg aria-hidden="true" className="h-4 w-4" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.77.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.77-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
<svg aria-hidden="true" className="h-4 w-4" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.77.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.77-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
<svg aria-hidden="true" className="h-4 w-4" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.77.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.77-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
<svg aria-hidden="true" className="h-4 w-4" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.77.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.77-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
<svg aria-hidden="true" className="h-4 w-4" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.77.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.77-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
</div>
</div>
</div>
</div>
</article>
<article className="flex h-full min-w-0 flex-col rounded-2xl border border-[#1B2535]/12 bg-white/70 p-6 shadow-lg shadow-[#1B2535]/[0.07] sm:p-7">
<div className="text-4xl font-light leading-none text-[#CFC4B5]">“</div>
<p className="mt-5 flex-1 text-base font-light leading-7 text-[#1B2535] sm:text-lg sm:leading-8">Şantiye sürecimiz boyunca iletişimleri ve çözüm odaklı yaklaşımları sayesinde işlerimiz çok daha kolay ilerledi.</p>
<div className="mt-8 border-t border-[#1B2535]/10 pt-6">
<div className="flex items-center gap-4">
<img alt="Mehmet Kaya portre" className="h-14 w-14 shrink-0 rounded-full border border-[#1B2535]/10 object-cover shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="min-w-0">
<p className="truncate text-base font-medium leading-6 text-[#1B2535] sm:text-lg">Mehmet Kaya</p>
<p className="truncate text-sm font-light leading-5 text-[#1B2535]/65 sm:text-base">Müteahhit</p>
<div aria-label="5 yıldız" className="mt-3 inline-flex items-center gap-1 text-[#1B2535]">
<svg aria-hidden="true" className="h-4 w-4" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.77.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.77-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
<svg aria-hidden="true" className="h-4 w-4" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.77.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.77-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
<svg aria-hidden="true" className="h-4 w-4" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.77.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.77-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
<svg aria-hidden="true" className="h-4 w-4" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.77.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.77-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
<svg aria-hidden="true" className="h-4 w-4" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.77.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.77-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
</div>
</div>
</div>
</div>
</article>
<article className="flex h-full min-w-0 flex-col rounded-2xl border border-[#1B2535]/12 bg-white/70 p-6 shadow-lg shadow-[#1B2535]/[0.07] sm:p-7 md:col-span-2 xl:col-span-1">
<div className="text-4xl font-light leading-none text-[#CFC4B5]">“</div>
<p className="mt-5 flex-1 text-base font-light leading-7 text-[#1B2535] sm:text-lg sm:leading-8">Evimizin tüm taş uygulamalarını MED Madencilik'e yaptırdık. Sonuç çok temiz oldu; ekip ilgili ve özenliydi.</p>
<div className="mt-8 border-t border-[#1B2535]/10 pt-6">
<div className="flex items-center gap-4">
<img alt="Elif Demir portre" className="h-14 w-14 shrink-0 rounded-full border border-[#1B2535]/10 object-cover shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="min-w-0">
<p className="truncate text-base font-medium leading-6 text-[#1B2535] sm:text-lg">Elif Demir</p>
<p className="truncate text-sm font-light leading-5 text-[#1B2535]/65 sm:text-base">Ev Sahibi</p>
<div aria-label="5 yıldız" className="mt-3 inline-flex items-center gap-1 text-[#1B2535]">
<svg aria-hidden="true" className="h-4 w-4" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.77.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.77-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
<svg aria-hidden="true" className="h-4 w-4" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.77.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.77-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
<svg aria-hidden="true" className="h-4 w-4" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.770.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.770-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
<svg aria-hidden="true" className="h-4 w-4" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.770.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.770-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
<svg aria-hidden="true" className="h-4 w-4" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.751a.53.53 0 0 1 .294.904l-3.738 3.644a2.12 2.12 0 0 0-.611 1.878l.882 5.145a.53.53 0 0 1-.770.56l-4.62-2.429a2.12 2.12 0 0 0-1.966 0l-4.62 2.429a.53.53 0 0 1-.770-.56l.882-5.145a2.12 2.12 0 0 0-.611-1.878L2.16 9.789a.53.53 0 0 1 .294-.904l5.166-.751a2.12 2.12 0 0 0 1.595-1.16z"></path></svg>
</div>
</div>
</div>
</div>
</article>
</div>
</div>
</div>
</div><div className="bg-white w-full max-w-[1700px] mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 sm:px-8 lg:px-12 lg:py-20" data-med-quote-root="" data-quote-init="1" style={{fontFamily: '\'Inter\', sans-serif'}}>
<div className="flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between mb-10 gap-x-6 gap-y-6">
<div className="min-w-0">
<h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#1B2535] sm:text-5xl lg:text-6xl">Doğal Taş Rehberi</h2>
<p className="mt-4 max-w-3xl text-lg font-light leading-8 text-[#1B2535]/70 sm:text-xl">Doğal taşlar hakkında ipuçları, bakım önerileri ve ilham veren projeler.</p>
</div>
<a className="group inline-flex w-fit shrink-0 items-center gap-3 border-b border-[#1B2535] pb-2 text-lg font-light leading-7 text-[#1B2535] transition hover:text-[#1B2535]/70 sm:text-xl" href="#">
      Tüm Yazılar
      <svg aria-hidden="true" className="h-5 w-5 transition group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
<article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
<a className="flex h-full flex-col" href="#">
<div className="h-72 overflow-hidden bg-slate-100 sm:h-80 lg:h-72 xl:h-80">
<img alt="Mermer ve granit mutfak tezgahı" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex flex-1 flex-col p-6 sm:p-8">
<span className="inline-flex w-fit rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium uppercase tracking-wide text-[#1B2535]">Mutfak</span>
<h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-[#1B2535] sm:text-3xl">Mutfak Tezgahında Granit mi, Mermer mi?</h3>
<div className="mt-auto pt-8">
<div className="border-t border-slate-200 pt-6">
<div className="flex items-center justify-between gap-5">
<div className="inline-flex min-w-0 items-center gap-3 text-base font-light leading-7 text-[#1B2535]/70 sm:text-lg">
<svg aria-hidden="true" className="h-5 w-5 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
<span className="truncate">16 Mayıs 2024</span>
</div>
<span className="inline-flex shrink-0 items-center gap-3 text-base font-light leading-7 text-[#1B2535] transition group-hover:text-[#1B2535]/70 sm:text-lg">
                  Devamını Oku
                  <svg aria-hidden="true" className="h-5 w-5 transition group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</div>
</div>
</div>
</div>
</a>
</article>
<article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
<a className="flex h-full flex-col" href="#">
<div className="h-72 overflow-hidden bg-slate-100 sm:h-80 lg:h-72 xl:h-80">
<img alt="Doğal taş işleme ve mermer yüzey detayı" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-1 flex-col p-6 sm:p-8">
<span className="inline-flex w-fit rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium uppercase tracking-wide text-[#1B2535]">Teknoloji</span>
<h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-[#1B2535] sm:text-3xl">Su Jeti Kesim Teknolojisi Nedir?</h3>
<div className="mt-auto pt-8">
<div className="border-t border-slate-200 pt-6">
<div className="flex items-center justify-between gap-5">
<div className="inline-flex min-w-0 items-center gap-3 text-base font-light leading-7 text-[#1B2535]/70 sm:text-lg">
<svg aria-hidden="true" className="h-5 w-5 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
<span className="truncate">10 Mayıs 2024</span>
</div>
<span className="inline-flex shrink-0 items-center gap-3 text-base font-light leading-7 text-[#1B2535] transition group-hover:text-[#1B2535]/70 sm:text-lg">
                  Devamını Oku
                  <svg aria-hidden="true" className="h-5 w-5 transition group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</div>
</div>
</div>
</div>
</a>
</article>
<article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
<a className="flex h-full flex-col" href="#">
<div className="h-72 overflow-hidden bg-slate-100 sm:h-80 lg:h-72 xl:h-80">
<img alt="Mermer kaplı modern banyo tasarımı" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex flex-1 flex-col p-6 sm:p-8">
<span className="inline-flex w-fit rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium uppercase tracking-wide text-[#1B2535]">Banyo</span>
<h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-[#1B2535] sm:text-3xl">Villa Banyolarında Doğal Taş Trendleri</h3>
<div className="mt-auto pt-8">
<div className="border-t border-slate-200 pt-6">
<div className="flex items-center justify-between gap-5">
<div className="inline-flex min-w-0 items-center gap-3 text-base font-light leading-7 text-[#1B2535]/70 sm:text-lg">
<svg aria-hidden="true" className="h-5 w-5 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
<span className="truncate">6 Mayıs 2024</span>
</div>
<span className="inline-flex shrink-0 items-center gap-3 text-base font-light leading-7 text-[#1B2535] transition group-hover:text-[#1B2535]/70 sm:text-lg">
                  Devamını Oku
                  <svg aria-hidden="true" className="h-5 w-5 transition group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</div>
</div>
</div>
</div>
</a>
</article>
</div>
</div><div className="sm:px-8 lg:pl-12 lg:pr-12 lg:pb-14 w-full max-w-[1700px] mx-auto pr-12 pb-14 pl-12" style={{fontFamily: '\'Inter\', sans-serif'}}>
<div className="overflow-hidden rounded-3xl bg-[#1B2535] shadow-2xl">
<div className="mx-auto w-full max-w-[1700px] px-6 sm:px-8 lg:px-12" style={{fontFamily: '\'Inter\', sans-serif'}}>
<div className="overflow-hidden rounded-3xl bg-[#1B2535] shadow-2xl">
<div className="grid grid-cols-1 gap-12 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-0 lg:px-16 lg:py-20 xl:px-24">

<div className="min-w-0 lg:pr-12 xl:pr-16">
<h2 className="text-4xl sm:text-5xl lg:text-5xl font-semibold leading-tight tracking-tight text-white mb-4">
          Hayalinizdeki Projeyi<br className="hidden lg:block"/> Ertelemeyin
        </h2>
<p className="max-w-xl text-base sm:text-lg font-normal leading-relaxed text-slate-300">
          Doğal taşın şıklığını ve kalitesini yaşam alanlarınıza taşıyalım. Size özel çözümlerimizle yanınızdayız.
        </p>
</div>

<div className="min-w-0 lg:border-l lg:border-white/10 lg:pl-12 xl:pl-16">
<form className="w-full max-w-xl" data-final-cta-form="aura-emqckxndt13x6gdw5" data-final-cta-init="1">
<div className="flex flex-col sm:flex-row gap-3">

<label className="relative flex-1 min-w-0 block">
<span className="sr-only">Telefon numaranız</span>
<svg aria-hidden="true" className="pointer-events-none absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<input autocomplete="tel" className="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-base text-white placeholder:text-slate-400 outline-none transition-all focus:border-white/30 focus:bg-white/10 focus:ring-4 focus:ring-white/5" inputmode="tel" name="phone" placeholder="Telefon Numaranız" type="tel"/>
</label>

<button className="inline-flex h-14 shrink-0 items-center justify-center gap-2.5 rounded-xl bg-white px-6 text-base font-semibold text-[#1B2535] transition-colors hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-white/20 whitespace-nowrap" type="submit">
<svg aria-hidden="true" className="h-6 w-6 shrink-0" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"></path></svg>
              WhatsApp'tan Teklif Al
            </button>
</div>

<p className="mt-4 flex items-center gap-2 text-sm font-normal text-slate-400">
<svg aria-hidden="true" className="h-5 w-5 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="16" r="1"></circle>
<rect height="12" rx="2" width="18" x="3" y="10"></rect>
<path d="M7 10V7a5 5 0 0 1 10 0v3"></path>
</svg>
            Numaranızı bırakın, sizi arayalım.
          </p>
</form>
</div>
</div>
</div>

</div>
</div>

</div><div className="w-full bg-[#1B2535] py-16 sm:py-24" style={{fontFamily: '\'Inter\', sans-serif'}}>
<div className="mx-auto w-full max-w-[1700px] px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center">

<div className="mb-12 flex flex-col items-center">
<div className="text-6xl sm:text-7xl font-light tracking-[0.18em] text-white mb-3 [text-indent:0.18em]">MED</div>
<div className="text-base sm:text-lg font-light tracking-[0.35em] uppercase text-white mb-5 [text-indent:0.35em]">
        MADENCİLİK</div>
<div className="h-px w-10 bg-white/20 mb-5"></div>
<div className="text-xs sm:text-sm font-light tracking-[0.3em] uppercase text-slate-300 [text-indent:0.3em]">DOĞAL TAŞ
        ÇÖZÜMLERİ</div>
</div>

<p className="mx-auto max-w-2xl text-lg sm:text-xl font-light text-slate-300 leading-relaxed mb-12">
      Doğal taşın estetiğini, mühendislik ve ustalıkla buluşturuyor,<br className="hidden sm:block"/> mekanlara kalıcı değer katıyoruz.
    </p>

<nav className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-10 gap-y-4 mb-12 text-base sm:text-lg font-light text-white">
<a className="hover:text-slate-300 transition-colors" href="#">Kurumsal</a>
<span className="text-slate-600 text-sm">•</span>
<a className="hover:text-slate-300 transition-colors" href="#">Ürünler</a>
<span className="text-slate-600 text-sm">•</span>
<a className="hover:text-slate-300 transition-colors" href="#">Uygulamalar</a>
<span className="text-slate-600 text-sm">•</span>
<a className="hover:text-slate-300 transition-colors" href="#">Referanslar</a>
<span className="text-slate-600 text-sm">•</span>
<a className="hover:text-slate-300 transition-colors" href="#">İletişim</a>
</nav>

<div className="flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-3 mb-16 text-base sm:text-lg font-light text-slate-300">
<a className="hover:text-white transition-colors" href="tel:+902242449151">+90 224 244 91 51</a>
<span className="hidden sm:block w-px h-5 bg-slate-600"></span>
<span className="sm:hidden text-slate-600 text-sm">•</span>
<a className="hover:text-white transition-colors" href="mailto:info@medmadencilik.com.tr">info@medmadencilik.com.tr</a>
</div>

<div className="w-full flex flex-col sm:flex-row items-center justify-between gap-y-4 pt-8 border-t border-white/10 text-sm sm:text-base font-light text-slate-400">
<p>© 2026 MED Madencilik</p>
<p>Tasarım: <a className="text-slate-300 underline underline-offset-4 decoration-white/20 hover:text-white hover:decoration-white/60 transition-all" href="https://retnaajans.com" rel="noopener noreferrer" target="_blank">Retna
          Ajans</a></p>
</div>
</div>
</div><section className="overflow-hidden bg-white w-full relative" style={{fontFamily: '\'Inter\', sans-serif'}}>

</section>


    </>
  );
}
