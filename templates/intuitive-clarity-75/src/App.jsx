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
      
<main className="sm:py-24 flex flex-col sm:gap-32 w-full max-w-2xl pt-16 pr-6 pb-16 pl-6 gap-x-24 gap-y-24">

<div className="flex flex-col gap-10">
<header className="flex flex-col items-start gap-3 pb-8 border-b border-neutral-900/80 w-full">
<h1 className="text-3xl sm:text-4xl tracking-tight font-normal text-neutral-100">
            Spiritual Mediumship &amp; Psychic Reading
          </h1>
<p className="text-xl sm:text-2xl text-neutral-500 font-light">
            with Bryan
          </p>
</header>
<img alt="Bryan" className="sm:w-2/3 w-full border-neutral-700/50 border rounded-3xl mx-auto self-center block" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e22c710-ede2-403d-b366-9f4ec5d0ddbe_1600w.jpg"/>
</div>

<section className="flex flex-col gap-6 text-xl sm:text-2xl leading-relaxed text-neutral-300 font-light">
<p className="">
          Something isn't fully clear.
          <br className="hidden sm:block"/>
          A situation, a feeling, a pattern you keep returning to.
        </p>
<p className="text-neutral-500">
          Or perhaps a sense that someone - or something - beyond the physical
          wants to make contact.
        </p>
</section>

<section className="flex flex-col gap-8">
<h2 className="text-2xl tracking-tight font-normal text-neutral-100">
          What this is
        </h2>
<div className="flex flex-col gap-6 text-lg sm:text-xl text-neutral-400 leading-relaxed font-light">
<p className="">
            I work as a spiritual medium and psychic reader. During a session, I
            receive information through images, impressions, and direct knowing
            - sometimes about your life and patterns, sometimes from those who
            have passed on.
          </p>
<p className="">
            What comes through may include ancestors, loved ones, animals,
            spirit guides, or other beings - known or unknown to you. I cannot
            guarantee who or what will come through. I only share what is
            present.
          </p>
<div className="pl-6 border-l border-neutral-800/60 flex flex-col gap-3 py-1">
<p className="">I don't prepare in advance.</p>
<p className="">I don't follow a script.</p>
<p className="">I don't ask questions beforehand.</p>
</div>
<p className="">
            You simply sit with me, and what needs to be seen flows through.
          </p>
</div>
</section>

<section className="flex flex-col gap-8">
<h2 className="text-2xl tracking-tight font-normal text-neutral-100">
          What you may experience
        </h2>
<ul className="flex flex-col gap-8 text-lg sm:text-xl text-neutral-400 font-light">
<li className="flex items-start gap-5">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2.5 flex-shrink-0"></div>
<span className="">
              Seeing something you haven't been able to articulate
            </span>
</li>
<li className="flex items-start gap-5">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2.5 flex-shrink-0"></div>
<span>Recognition of a pattern you've been stuck in</span>
</li>
<li className="flex items-start gap-5">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2.5 flex-shrink-0"></div>
<span className="">
              What comes through may include presences, perspectives, or beings
              from beyond the physical realm - known or unknown to you
            </span>
</li>
<li className="flex items-start gap-5">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2.5 flex-shrink-0"></div>
<span>A shift in how things make sense</span>
</li>
</ul>
<div className="pt-6 flex flex-col gap-2 text-lg sm:text-xl text-neutral-400 font-light">
<p>Sometimes it’s subtle.</p>
<p>Sometimes it’s direct.</p>
<p className="pt-4 text-neutral-200 font-normal">
            It makes things visible.
          </p>
</div>
</section>

<section className="flex flex-col gap-8">
<h2 className="text-2xl tracking-tight font-normal text-neutral-100">
          This may be for you if
        </h2>
<ul className="flex flex-col gap-6 text-lg sm:text-xl text-neutral-400 font-light">
<li className="flex items-start gap-4">
<span className="text-neutral-700 mt-0.5">—</span>
<span className="">Something feels unclear or hard to name</span>
</li>
<li className="flex items-start gap-4">
<span className="text-neutral-700 mt-0.5">—</span>
<span className="">You keep circling the same situation</span>
</li>
<li className="flex items-start gap-4">
<span className="text-neutral-700 mt-0.5">—</span>
<span className="">
              You sense a spiritual presence or hold a hope to connect with
              someone who has passed
            </span>
</li>
<li className="flex items-start gap-4">
<span className="text-neutral-700 mt-0.5">—</span>
<span className="">You're open to what comes through</span>
</li>
</ul>
</section>

<section className="flex flex-col gap-6 bg-neutral-900/30 p-8 sm:p-10 rounded-3xl border border-neutral-800/40">
<h2 className="text-2xl tracking-tight font-normal text-neutral-100">
          What this isn’t
        </h2>
<div className="flex flex-col gap-5 text-lg sm:text-xl text-neutral-400 font-light leading-relaxed">
<p className="">
            This isn't coaching or therapy.
            <br/>
            There's no structured guidance or step-by-step process.
          </p>
</div>
</section>

<section className="flex flex-col gap-8">
<h2 className="text-2xl tracking-tight font-normal text-neutral-100">
          About Bryan
        </h2>
<div className="flex flex-col gap-6 text-lg sm:text-xl text-neutral-400 leading-relaxed font-light">
<p className="">
            I trained at Arthur Findlay College, completing the 'Mastering
            Energy &amp; Mediumship' programme three times. I came to this work
            through direct experience - information began flowing, spirits began
            coming through, and I sought training to honor what was happening
            with integrity.
          </p>
<p className="">
            I am from Welsh and Irish heritage. I work online from Tbilisi,
            Georgia, and will be relocating to the UK in mid-2026.
          </p>
</div>
</section>
<section className="flex flex-col gap-8 pt-16 border-t border-neutral-900/80">
<h2 className="text-2xl tracking-tight font-normal text-neutral-100">
          Format
        </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg sm:text-xl text-neutral-400 font-light">
<div className="flex items-center gap-4 bg-neutral-900/20 px-6 py-5 rounded-2xl border border-neutral-800/40">
<iconify-icon className="text-neutral-500 text-2xl flex-shrink-0" icon="solar:videocamera-linear"></iconify-icon>
<span>Live 1:1 (Zoom)</span>
</div>
<div className="flex items-center gap-4 bg-neutral-900/20 px-6 py-5 rounded-2xl border border-neutral-800/40">
<iconify-icon className="text-neutral-500 text-2xl flex-shrink-0" icon="solar:clock-circle-linear"></iconify-icon>
<span>30–40 minutes</span>
</div>
<div className="flex items-start gap-4 sm:col-span-2 bg-neutral-900/20 px-6 py-5 rounded-2xl border border-neutral-800/40">
<iconify-icon className="mt-1 text-neutral-500 text-2xl flex-shrink-0" icon="solar:infinity-linear"></iconify-icon>
<span>
              I don’t cut the session short if something is still unfolding
            </span>
</div>
<div className="flex items-center gap-4 sm:col-span-2 bg-neutral-900/20 px-6 py-5 rounded-2xl border border-neutral-800/40">
<iconify-icon className="text-neutral-500 text-2xl flex-shrink-0" icon="solar:tag-linear"></iconify-icon>
<span className="text-neutral-200">Investment: £40</span>
</div>
</div>
</section>

<section className="flex flex-col items-center gap-10 pt-10">
<div className="flex flex-col items-center text-center gap-3">
<h2 className="text-3xl tracking-tight font-normal text-neutral-100">
            Book a session
          </h2>
</div>
<div className="flex flex-col items-center gap-8 w-full max-w-md mx-auto">

<div className="flex flex-col sm:p-8 cursor-pointer bg-neutral-900/30 w-full border-neutral-800/50 border rounded-3xl pt-6 pr-6 pb-6 pl-6 gap-x-5 gap-y-5 items-center" onclick="window.location.href='https://www.paypal.com/ncp/payment/AVQ6JKYLNQTBY'" role="button">
<a className="inline-flex items-center justify-center gap-3 hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-lg font-normal text-neutral-950 bg-neutral-100 w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_0_40px_-15px_rgba(255,255,255,0.3)]" href="https://www.paypal.com/ncp/payment/AVQ6JKYLNQTBY">
<span className="" onclick="window.location.href='https://www.paypal.com/ncp/payment/AVQ6JKYLNQTBY'" role="button">
                Book via PayPal
              </span>
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<p className="text-sm sm:text-base text-neutral-500 font-light text-center leading-relaxed">
              Payment confirms your session.
              <br/>
              I’ll follow up within 24 hours to arrange a time.
            </p>
</div>

<div className="flex flex-col items-center gap-3">
<p className="text-lg text-neutral-400 font-light">
              Unsure if this is right for you?
            </p>
<div className="flex flex-col items-center gap-1.5">
<a className="text-lg text-neutral-300 hover:text-neutral-100 underline decoration-neutral-700 underline-offset-4 transition-colors" href="mailto:bryan@bryanroberts.co">
                Message me first
              </a>
<p className="text-sm sm:text-base text-neutral-500 font-light">
                bryan@bryanroberts.co
              </p>
</div>
</div>
</div>
</section>

<footer className="flex flex-col items-center text-center gap-4 pt-20 border-t border-neutral-900/80">
<p className="text-lg font-normal text-neutral-300">
          This work is simple—but not casual.
        </p>
<p className="text-base text-neutral-600 font-light">
          If it resonates, you’ll feel it.
        </p>
</footer>
</main>

    </>
  );
}
