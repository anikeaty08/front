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



    lucide.createIcons({
      attrs: {
        "stroke-width": 1.5
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
      
<main className="mx-auto min-h-screen w-full max-w-[112rem] overflow-hidden px-5 sm:px-8 lg:px-14">
<header className="flex items-center justify-between py-8 sm:py-10">
<nav className="hidden items-center gap-9 text-xs uppercase tracking-tight text-[#252525] md:flex">
<a className="hover:opacity-60" href="#home">Home</a>
<a className="hover:opacity-60" href="#about">About me</a>
<a className="hover:opacity-60" href="#best">Best seller</a>
<a className="hover:opacity-60" href="#menu">Menu</a>
<a className="hover:opacity-60" href="#contact">Contact us</a>
</nav>
<a className="md:hidden text-sm uppercase tracking-tight" href="#home">Little Latte Cafe</a>
<button aria-label="Open menu" className="grid size-11 place-items-center rounded-full border border-transparent hover:border-[#252525]/20">
<i className="size-6" data-lucide="menu"></i>
</button>
</header>
<section className="pt-12 sm:pt-20" id="home">
<div className="grid items-start gap-10 lg:grid-cols-[1fr_1.15fr_12rem]">
<div className="space-y-5">
<div className="grid w-20 grid-cols-4 gap-1">
<span className="aspect-square bg-[#252525] rotate-45"></span>
<span className="aspect-square bg-[#252525] rotate-45"></span>
<span className="aspect-square bg-[#252525] rotate-45"></span>
<span className="aspect-square bg-[#252525] rotate-45"></span>
<span className="aspect-square bg-[#252525] rotate-45 col-start-2"></span>
<span className="aspect-square bg-[#252525] rotate-45"></span>
<span className="aspect-square bg-[#252525] rotate-45"></span>
</div>
<p className="max-w-sm text-sm leading-relaxed text-[#252525]/70">
            A cozy, small-batch coffee spot in the heart of downtown Victoria—built for slow mornings, fresh bites, and very good coffee.
          </p>
</div>
<div className="">
<p className="text-4xl font-light uppercase leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            Warm cups.<br/>
            Open hearts.
          </p>
</div>
<a className="group hidden size-32 place-items-center rounded-full border border-[#252525] text-center text-sm lg:grid" href="#menu">
<span className="flex flex-col items-center gap-2">
<i className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" data-lucide="arrow-up-right"></i>
            Order Now
          </span>
</a>
</div>
<div className="relative mt-14">
<img alt="Little Latte Cafe counter" className="h-[23rem] w-full object-cover brightness-[0.62] contrast-[1.08] saturate-[0.92] sm:h-[34rem] lg:h-[46rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/084e9852-b8c5-4f7a-801e-1758ba192969_3840w.png"/>
<div className="pointer-events-none absolute -top-4 left-0 right-0 overflow-hidden">
<p className="whitespace-nowrap text-[16vw] font-light uppercase leading-none tracking-tight text-transparent [-webkit-text-stroke:0.08rem_#efeee6]">
            Little Latte
          </p>
</div>
<div className="absolute -bottom-4 right-6 hidden grid-cols-3 gap-1 sm:grid">
<span className="size-7 bg-[#efeee6]"></span>
<span className="size-7 bg-[#252525]"></span>
<span className="size-7 bg-[#efeee6]"></span>
<span className="size-7 bg-[#252525] col-start-2"></span>
<span className="size-7 bg-[#efeee6]"></span>
</div>
</div>
</section>
<section className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-20" id="about">
<div>
<h1 className="max-w-4xl text-4xl font-light uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          More than a coffee<br/>
          — it’s a pause
        </h1>
<p className="mt-9 max-w-2xl text-sm leading-relaxed text-[#252525]/70">
          Inside The SoMA building on Broughton Street, Little Latte Cafe is a warm downtown hideaway for espresso, reading, studying, and low-key catch-ups across from the Central Library.
        </p>
</div>
<div className="flex flex-col items-start gap-8 lg:items-end">
<div className="text-left lg:text-right">
<p className="text-4xl font-light uppercase tracking-tight sm:text-5xl">5.0 Stars</p>
<p className="mt-3 text-xs uppercase tracking-tight">Cozy service, fresh food, quiet atmosphere</p>
</div>
<a className="inline-flex h-12 items-center justify-center border border-[#252525] px-8 text-xs uppercase tracking-tight hover:bg-[#252525] hover:text-[#efeee6]" href="#contact">
          Visit downtown
        </a>
</div>
<div className="grid items-center gap-8 lg:col-span-2 lg:grid-cols-[10rem_18rem_1fr_12rem]">
<div className="text-center text-2xl font-light tracking-tight">
          01<br/>
<span className="text-sm">/</span><br/>
<span className="text-sm">09</span>
</div>
<img alt="Cafe exterior" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&amp;fit=crop&amp;w=900&amp;q=85"/>
<div>
<p className="text-sm uppercase tracking-tight">01.</p>
<h2 className="mt-3 max-w-md text-2xl font-light uppercase leading-tight tracking-tight sm:text-3xl">
            Small-batch espresso, served with soul
          </h2>
<a className="mt-7 inline-flex items-center gap-5 border-b border-[#252525] text-xs uppercase tracking-tight" href="#best">
            Read more <i className="size-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="hidden grid-cols-2 gap-1 justify-self-end lg:grid">
<span className="size-16 bg-[#252525]"></span>
<span className="size-16 bg-[#252525] translate-y-16"></span>
</div>
</div>
</section>
<section className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[24rem_1fr_11rem]">
<img alt="Cafe interior" className="h-[28rem] w-full object-cover lg:h-[32rem]" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&amp;fit=crop&amp;w=900&amp;q=85"/>
<div>
<p className="text-4xl font-light uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Brewing stories since<br/>
          2024 – now
        </p>
<p className="mt-10 max-w-3xl text-sm leading-relaxed text-[#252525]/70">
          Built with love and a simple idea—to create a warm space where Victoria locals can slow down, sip something handcrafted, and enjoy fresh food made in-house.
        </p>
</div>
<div className="space-y-28">
<a className="group mx-auto grid size-32 place-items-center rounded-full border border-[#252525] text-center text-sm" href="#menu">
<span className="flex flex-col items-center gap-2">
<i className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" data-lucide="arrow-up-right"></i>
            Read More
          </span>
</a>
<div className="hidden grid-cols-4 gap-1 lg:grid">
<span className="aspect-square bg-[#252525] rotate-45"></span>
<span className="aspect-square bg-[#252525] rotate-45"></span>
<span className="aspect-square bg-[#252525] rotate-45"></span>
<span className="aspect-square bg-[#252525] rotate-45"></span>
<span className="aspect-square bg-[#252525] rotate-45 col-start-2"></span>
<span className="aspect-square bg-[#252525] rotate-45"></span>
<span className="aspect-square bg-[#252525] rotate-45"></span>
</div>
</div>
</section>
<section className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_1.25fr_0.85fr] lg:items-center">
<div className="space-y-4">
<div className="grid grid-cols-[4rem_1fr] border-b border-[#252525]/50 py-4 text-xs uppercase tracking-tight">
<span>01.</span>
<span>Cocoa Hazelnut Latte</span>
</div>
<div className="grid grid-cols-[4rem_1fr] border-b border-[#252525]/50 py-4 text-xs uppercase tracking-tight">
<span>02.</span>
<span>Strawberry Dirty Soda</span>
</div>
<div className="grid grid-cols-[4rem_1fr] border-b border-[#252525]/50 py-4 text-xs uppercase tracking-tight">
<span>03.</span>
<span>Bacon, Egg &amp; Cheese Croissant</span>
</div>
</div>
<img alt="Coffee shop window" className="h-64 w-full object-cover sm:h-80" src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&amp;fit=crop&amp;w=1200&amp;q=85"/>
<h2 className="text-4xl font-light uppercase leading-tight tracking-tight sm:text-5xl">
        Rooted in<br/>
        flavor, fueled<br/>
        by community
      </h2>
</section>
<section className="py-16 sm:py-24" id="best">
<div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
<h2 className="text-4xl font-light uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Coffee. Pastries. And<br/>
          everything you crave.
        </h2>
<p className="max-w-xl self-end text-sm leading-relaxed text-[#252525]/70 lg:justify-self-end">
          Customer favorites rotate with daily bakes, but the signature sweet lattes, dirty sodas, breakfast croissants, and lemon bars keep regulars coming back.
        </p>
</div>
<div className="mt-20 grid items-end gap-12 lg:grid-cols-[0.75fr_1.2fr_0.75fr_10rem]">
<div>
<img alt="Iced latte" className="h-64 w-full object-cover sm:h-80" src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&amp;fit=crop&amp;w=700&amp;q=85"/>
<div className="mt-5 flex items-center justify-between text-sm uppercase tracking-tight">
<span className="text-2xl font-light tracking-tight">$6</span>
<span>Cocoa Hazelnut Latte</span>
</div>
</div>
<div>
<img alt="Creamy latte" className="h-[30rem] w-full object-cover" src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&amp;fit=crop&amp;w=1000&amp;q=85"/>
<div className="mt-6 grid gap-6 sm:grid-cols-[8rem_1fr] sm:items-end">
<span className="text-5xl font-light tracking-tight sm:text-6xl">$7</span>
<div>
<p className="text-sm uppercase tracking-tight">Strawberry Dirty Soda</p>
<p className="mt-3 text-sm leading-relaxed text-[#252525]/65">Bright, refreshing, playful, and made for the afternoon wind-down.</p>
</div>
</div>
</div>
<div>
<img alt="Hot chocolate" className="h-64 w-full object-cover sm:h-80" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&amp;fit=crop&amp;w=700&amp;q=85"/>
<div className="mt-5 flex items-center justify-between text-sm uppercase tracking-tight">
<span className="text-2xl font-light tracking-tight">$5</span>
<span>Hot Chocolate</span>
</div>
</div>
<div className="hidden place-items-end lg:grid">
<div className="text-center">
<p className="text-2xl font-light tracking-tight">01<span className="text-sm"> / 09</span></p>
<div className="mt-4 flex gap-2">
<span className="h-1 w-8 bg-[#252525]"></span>
<span className="h-1 w-6 bg-[#252525]"></span>
<span className="h-1 w-4 bg-[#252525]"></span>
</div>
</div>
</div>
</div>
</section>
<section className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[24rem_1fr] lg:gap-20" id="menu">
<div>
<h2 className="text-4xl font-light uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Fresh made,<br/>
          every day.
        </h2>
<img alt="Cafe customers" className="mt-14 h-[32rem] w-full object-cover" src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&amp;fit=crop&amp;w=900&amp;q=85"/>
</div>
<div className="flex flex-col justify-between gap-16">
<a className="group ml-auto hidden size-32 place-items-center rounded-full border border-[#252525] text-center text-sm lg:grid" href="#contact">
<span className="flex flex-col items-center gap-2">
<i className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" data-lucide="arrow-up-right"></i>
            Read More
          </span>
</a>
<div className="space-y-0">
<div className="grid grid-cols-[5rem_1fr] border-b border-[#252525]/50 py-5 text-xs uppercase tracking-tight sm:grid-cols-[7rem_1fr]">
<span>$4–6</span>
<span className="text-right">Smooth espresso &amp; BC-roasted lattes</span>
</div>
<div className="grid grid-cols-[5rem_1fr] border-b border-[#252525]/50 py-5 text-xs uppercase tracking-tight sm:grid-cols-[7rem_1fr]">
<span>$6</span>
<span className="text-right">Cocoa Hazelnut Latte</span>
</div>
<div className="grid grid-cols-[5rem_1fr] border-b border-[#252525]/50 py-5 text-xs uppercase tracking-tight sm:grid-cols-[7rem_1fr]">
<span>$7</span>
<span className="text-right">Strawberry Dirty Soda</span>
</div>
<div className="grid grid-cols-[5rem_1fr] border-b border-[#252525]/50 py-5 text-xs uppercase tracking-tight sm:grid-cols-[7rem_1fr]">
<span>$8</span>
<span className="text-right">Bacon, Egg &amp; Cheese Croissant</span>
</div>
<div className="grid grid-cols-[5rem_1fr] border-b border-[#252525]/50 py-5 text-xs uppercase tracking-tight sm:grid-cols-[7rem_1fr]">
<span>$4</span>
<span className="text-right">Daily Lemon Bars</span>
</div>
</div>
<div className="grid gap-10 lg:grid-cols-[1fr_18rem] lg:items-end">
<div>
<p className="max-w-xl text-sm leading-relaxed text-[#252525]/70">
              Original in-house recipes, economical prices, and payment by debit, credit, or mobile wallet. Wheelchair-accessible entrance, seating, and nearby parking are available.
            </p>
<a className="mt-8 inline-flex items-center gap-5 border-b border-[#252525] text-xs uppercase tracking-tight" href="#contact">
              Read more <i className="size-4" data-lucide="arrow-right"></i>
</a>
</div>
<img alt="Iced drink" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1513267048331-5611cad62e41?auto=format&amp;fit=crop&amp;w=700&amp;q=85"/>
</div>
</div>
</section>
<section className="grid gap-8 border-y border-[#252525]/20 py-10 sm:grid-cols-2 lg:grid-cols-4">
<div className="flex gap-4">
<i className="mt-1 size-5 shrink-0" data-lucide="clock"></i>
<div>
<p className="text-xs uppercase tracking-tight">Hours</p>
<p className="mt-2 text-sm leading-relaxed text-[#252525]/70">Tuesday – Monday<br/>6:00 AM – 6:00 PM</p>
</div>
</div>
<div className="flex gap-4">
<i className="mt-1 size-5 shrink-0" data-lucide="map-pin"></i>
<div>
<p className="text-xs uppercase tracking-tight">Location</p>
<p className="mt-2 text-sm leading-relaxed text-[#252525]/70">732 Broughton St<br/>Victoria, BC V8W 1E1</p>
</div>
</div>
<div className="flex gap-4">
<i className="mt-1 size-5 shrink-0" data-lucide="credit-card"></i>
<div>
<p className="text-xs uppercase tracking-tight">Payment</p>
<p className="mt-2 text-sm leading-relaxed text-[#252525]/70">Debit, credit, Apple Pay<br/>and Google Pay accepted</p>
</div>
</div>
<div className="flex gap-4">
<i className="mt-1 size-5 shrink-0" data-lucide="accessibility"></i>
<div>
<p className="text-xs uppercase tracking-tight">Access</p>
<p className="mt-2 text-sm leading-relaxed text-[#252525]/70">Accessible entrance, seating<br/>and nearby parking</p>
</div>
</div>
</section>
<footer className="py-16 sm:py-24" id="contact">
<div className="grid gap-12 lg:grid-cols-[20rem_1fr]">
<div>
<p className="text-2xl font-light uppercase tracking-tight">Contact us</p>
<a className="group mt-8 grid size-28 place-items-center rounded-full border border-[#252525] text-center text-xs" href="https://www.instagram.com/">
<span className="flex flex-col items-center gap-2">
<i className="size-5" data-lucide="instagram"></i>
              Instagram
            </span>
</a>
</div>
<div className="text-left lg:text-center">
<p className="text-4xl font-light uppercase leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Little Latte Cafe
          </p>
<p className="mt-8 text-3xl font-light uppercase leading-tight tracking-tight sm:text-5xl">
            732 Broughton St
          </p>
</div>
</div>
<div className="mt-20 grid gap-14 lg:grid-cols-[1fr_12rem_12rem_20rem]">
<div className="grid w-40 grid-cols-4 gap-2 self-end">
<span className="aspect-square bg-[#252525] rotate-45"></span>
<span className="aspect-square bg-[#252525] rotate-45"></span>
<span className="aspect-square bg-[#252525] rotate-45"></span>
<span className="aspect-square bg-[#252525] rotate-45"></span>
<span className="aspect-square bg-[#252525] rotate-45 col-start-2"></span>
<span className="aspect-square bg-[#252525] rotate-45"></span>
<span className="aspect-square bg-[#252525] rotate-45"></span>
</div>
<div>
<p className="text-sm uppercase tracking-tight">Menu</p>
<div className="mt-8 space-y-3 text-xs uppercase tracking-tight text-[#252525]/65">
<a className="block hover:text-[#252525]" href="#about">About us</a>
<a className="block hover:text-[#252525]" href="#best">Best sellers</a>
<a className="block hover:text-[#252525]" href="#menu">Fresh menu</a>
<a className="block hover:text-[#252525]" href="#contact">Visit</a>
</div>
</div>
<div>
<p className="text-sm uppercase tracking-tight">Visit</p>
<div className="mt-8 space-y-3 text-xs uppercase tracking-tight text-[#252525]/65">
<p>Downtown Victoria</p>
<p>The SoMA Building</p>
<p>Across from Library</p>
<p>Paid street parking</p>
</div>
</div>
<div>
<p className="text-sm uppercase tracking-tight">Contact</p>
<div className="mt-8 space-y-3 text-xs uppercase tracking-tight text-[#252525]/65">
<p>732 Broughton St, Victoria, BC</p>
<p>Phone not publicly listed</p>
<p>Open major regional holidays</p>
<p>Little Latte Cafe</p>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
