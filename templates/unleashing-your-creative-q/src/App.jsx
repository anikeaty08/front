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



      lucide.createIcons();
    
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
      

<nav className="fixed z-50 transition-all duration-300 bg-[#fff4e9]/90 w-full border-[#e7d8c9]/50 border-b top-0 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex-shrink-0 flex items-center">
<a className="flex items-center gap-3 group" href="#">
<span className="uppercase text-xl font-normal text-[#6b5a48] tracking-tighter font-['Playfair_Display',serif]">
                UYCQ.LS
              </span>
</a>
</div>

<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="text-[#879183] hover:text-[#6b5a48] px-3 py-2 text-base font-normal transition-colors" href="#books">
                Books
              </a>
<a className="text-[#879183] hover:text-[#6b5a48] px-3 py-2 text-base font-normal transition-colors" href="#store">
                Shop
              </a>
<a className="text-[#879183] hover:text-[#6b5a48] px-3 py-2 text-base font-normal transition-colors" href="#about">
                Author
              </a>
<a className="text-[#879183] hover:text-[#6b5a48] px-3 py-2 text-base font-normal transition-colors" href="#events">
                Events
              </a>
<a className="text-[#879183] hover:text-[#6b5a48] px-3 py-2 text-base font-normal transition-colors" href="#journal">
                Journal
              </a>
<a className="text-[#879183] hover:text-[#6b5a48] px-3 py-2 text-base font-normal transition-colors" href="#camps">
                Writing Camps
              </a>
</div>
</div>

<div className="flex items-center space-x-4">
<button className="relative p-2 text-[#879183] hover:text-[#6b5a48] transition-colors group"></button>
<button className="md:hidden p-2 text-[#879183]">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 lg:px-8 flex flex-col lg:flex-row w-full max-w-7xl mr-auto ml-auto pt-48 pr-6 pb-32 pl-6 items-center">
<div className="lg:w-1/2 flex flex-col text-left w-full items-start">
<span className="uppercase text-sm font-normal text-[#879183] tracking-widest mb-6">
          MISSION STATEMENT
        </span>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-normal text-[#6b5a48] tracking-tight font-['Playfair_Display',serif] mb-6">
          Stories that linger
          <br/>
          long after the last page.
        </h1>
<p className="leading-relaxed text-xl text-[#879183] max-w-md mb-10">
          We craft and publish inspiring literature, host immersive author
          events, and guide the next generation of storytellers through our
          writing camps.
        </p>
<div className="flex flex-wrap gap-4 my-4 gap-x-4 gap-y-4">
<a className="bg-[#6b5a48] text-[#fff4e9] px-7 py-3.5 rounded-sm text-base font-normal hover:bg-[#879183] transition-colors flex items-center gap-2" href="#store">
<i className="w-5 h-5" data-lucide="book-open" strokeWidth="1.5"></i>
            Explore Books
          </a>
<a className="bg-transparent border border-[#6b5a48] text-[#6b5a48] px-7 py-3.5 rounded-sm text-base font-normal hover:bg-[#e7d8c9] transition-colors" href="#camps">
            Join a Camp
          </a>
</div>
</div>
<div className="w-full lg:w-1/2 relative">
<div className="absolute inset-0 bg-[#e7d8c9] rounded-tr-[4rem] rounded-bl-[4rem] translate-x-4 translate-y-4 -z-10"></div>
<img alt="Reading a book" className="w-full h-auto object-cover rounded-tr-[4rem] rounded-bl-[4rem] shadow-sm aspect-[4/3]" src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=2160&amp;q=80&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="bg-[#e7d8c9]/30 pt-24 pb-24" id="books">
<div className="lg:px-8 flex max-w-7xl mr-auto mb-12 ml-auto pr-6 pl-6 items-end justify-between">
<div className="">
<h2 className="lg:text-4xl text-3xl font-normal text-[#6b5a48] tracking-tight font-['Playfair_Display',serif] mb-3">BOOKS BY ARBRIA OWENS</h2>
<p className="text-base text-[#879183]">
            Discover our most recent and celebrated titles.
          </p>
</div>
</div>
<div className="pl-6 lg:pl-8 lg:pr-0 overflow-hidden">
<div className="flex overflow-x-auto gap-8 hide-scrollbar snap-x snap-mandatory pr-6 pb-12 gap-x-8 gap-y-8">

<div className="min-w-[300px] md:min-w-[340px] snap-start group relative overflow-hidden bg-[#fff4e9] rounded-sm shadow-sm border border-[#e7d8c9] flex flex-col">
<div className="relative w-full aspect-[2/3] overflow-hidden bg-[#e7d8c9]">
<img alt="Battle of Courts Cover" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa2458b3-4ca4-4fa3-ae29-5fb1a285149b_800w.jpg?w=800&amp;q=80"/>

<div className="flex flex-col group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-[#6b5a48]/95 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 translate-y-full justify-center">
<h4 className="text-xl font-normal text-[#fff4e9] tracking-tight font-['Playfair_Display',serif] mb-2">Battle of Courts Worlds Apart</h4>
<p className="leading-relaxed line-clamp-4 text-base text-[#e7d8c9] mb-6">Battle of Courts: Worlds Apart A crown can command obedience—but never the heart. Princess Serene Lyecraft once believed her engagement to Prince Tobias Kreed was nothing more than a duty—an alliance forged to unite Arden and Valeene.</p>
<div className="flex flex-col gap-3 mt-auto"></div>
</div>
</div>
<div className="flex-1 flex flex-col pt-10 pr-5 pb-5 pl-5">
<span className="uppercase text-sm text-[#879183] tracking-wider mb-1">Signed EDITION | HARDCOVER</span>
<h3 className="text-xl font-normal text-[#6b5a48] tracking-tight font-['Playfair_Display',serif] mb-4">Battle of Courts Worlds Apart</h3>
<div className="mt-auto flex justify-between items-center border-t border-[#e7d8c9] pt-4">
<span className="text-[#6b5a48] font-normal">$24.00</span>
<a className="hover:text-[#6b5a48] underline underline-offset-4 flex items-center gap-1 text-sm text-[#879183]" href="#">Buy</a>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[340px] snap-start group relative overflow-hidden bg-[#fff4e9] rounded-sm shadow-sm border border-[#e7d8c9] flex flex-col">
<div className="relative w-full aspect-[2/3] overflow-hidden bg-[#e7d8c9]">
<img alt="Rooted in Wind Cover" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37c2de67-ce2f-48d9-b42b-8b287ed02849_1600w.jpg?w=800&amp;q=80"/>
<div className="flex flex-col group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-[#6b5a48]/95 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 translate-y-full justify-center">
<h4 className="text-xl font-normal text-[#fff4e9] tracking-tight font-['Playfair_Display',serif] mb-2">
                  Finding My Native Tongue
                </h4>
<p className="text-[#e7d8c9] text-base leading-relaxed mb-6 line-clamp-4">
                  A collection of essays exploring the transient nature of
                  modern life and the human desire for groundedness. Beautifully
                  observed and deeply felt.
                </p>
<div className="flex flex-col gap-3 mt-auto"></div>
</div>
</div>
<div className="flex-1 flex flex-col pt-5 pr-5 pb-5 pl-5">
<span className="uppercase text-sm text-[#879183] tracking-wider mb-1">Signed EDITION | HARDCOVER</span>
<h3 className="text-xl font-normal text-[#6b5a48] tracking-tight font-['Playfair_Display',serif] mb-4">
                Finding My Native Tongue
              </h3>
<div className="mt-auto flex justify-between items-center border-t border-[#e7d8c9] pt-4">
<span className="text-[#6b5a48] font-normal">$18.00</span>
<a className="hover:text-[#6b5a48] underline underline-offset-4 flex items-center gap-1 text-sm text-[#879183]" href="#">Buy</a>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[340px] snap-start group relative overflow-hidden bg-[#fff4e9] rounded-sm shadow-sm border border-[#e7d8c9] flex flex-col">
<div className="relative w-full aspect-[2/3] overflow-hidden bg-[#e7d8c9]">
<img alt="The Art of Stillness Cover" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b495dc6-07e3-4e72-b128-8ed7955a1a33_1600w.jpg?w=800&amp;q=80"/>
<div className="flex flex-col group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-[#6b5a48]/95 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 translate-y-full justify-center">
<h4 className="text-xl font-normal text-[#fff4e9] tracking-tight font-['Playfair_Display',serif] mb-2">
                  Battle of Courts: New Beginnings
                </h4>
<p className="leading-relaxed line-clamp-4 text-base text-[#e7d8c9] mb-6">
                  A kingdom on the brink. A sacrifice that changes everything.
                  Princess Serene Lyecraft is forced to make an impossible
                  choice—to save her brother and her kingdom, she must enter a
                  political marriage with a prince she does not love. But her
                  heart belongs to another, and as war, loyalty, and hidden
                  truths collide, Serene must navigate a world where love and
                  duty stand on opposite sides. When the lion meets the dove,
                  destiny is rewritten.
                </p>
<div className="flex flex-col gap-3 mt-auto"></div>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<span className="uppercase text-sm text-[#879183] tracking-wider mb-1">Signed EDITION | HARDCOVER</span>
<h3 className="text-xl font-normal text-[#6b5a48] tracking-tight font-['Playfair_Display',serif] mb-4">
                Battle of Courts: New Beginnings
              </h3>
<div className="mt-auto flex justify-between items-center border-t border-[#e7d8c9] pt-4">
<span className="text-[#6b5a48] font-normal">$22.00</span>
<a className="hover:text-[#6b5a48] underline underline-offset-4 flex items-center gap-1 text-sm text-[#879183]" href="#">Buy</a>
</div>
</div>
</div>
<div className="min-w-[40px] snap-start"></div>
</div>
</div>
</section>

<section className="lg:px-8 w-full max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="store">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-['Playfair_Display',serif] text-[#6b5a48] font-normal tracking-tight mb-4">
          The Bookshop
        </h2>
<p className="text-[#879183] max-w-2xl mx-auto text-base">
          Purchase signed copies and digital editions directly from Lumina
          Press. Fast, secure checkout.
        </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<div className="flex flex-col group">
<div className="bg-[#e7d8c9] aspect-[3/4] rounded-sm p-8 flex items-center justify-center mb-6 relative overflow-hidden">
<img alt="Book" className="group-hover:-translate-y-2 transition-transform duration-500 w-2/3 h-auto object-cover bg-center shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b495dc6-07e3-4e72-b128-8ed7955a1a33_800w.jpg?w=800&amp;q=80"/>
</div>
<div className="flex flex-col flex-1">
<h3 className="text-2xl font-normal text-[#6b5a48] tracking-tight font-['Playfair_Display',serif] mb-1">
              Battle of Courts: New Beginnings
            </h3>
<p className="line-clamp-2 text-base text-[#879183] mb-4">
              A kingdom on the brink. A sacrifice that changes everything.
            </p>
<div className="flex flex-wrap gap-2 mb-6 gap-x-2 gap-y-2">
<label className="cursor-pointer">
<input checked="" className="peer hidden" name="format_1" onchange="document.getElementById('price_1').innerText='$32.00'" type="radio"/>
<span className="block peer-checked:bg-[#e7d8c9] peer-checked:text-[#6b5a48] peer-checked:border-[#e7d8c9] transition-all hover:border-[#879183] text-sm text-[#879183] border-[#e7d8c9] border rounded-sm pt-1.5 pr-3 pb-1.5 pl-3">
                  Paperback
                </span>
</label>
<label className="cursor-pointer">
<input className="peer hidden" name="format_1" onchange="document.getElementById('price_1').innerText='$7.99'" type="radio"/>
<span className="block peer-checked:bg-[#e7d8c9] peer-checked:text-[#6b5a48] peer-checked:border-[#e7d8c9] transition-all hover:border-[#879183] text-sm text-[#879183] border-[#e7d8c9] border rounded-sm pt-1.5 pr-3 pb-1.5 pl-3">
                  eBook (ePub)
                </span>
</label>
</div>
<div className="flex mt-auto items-center justify-between">
<span className="text-xl font-normal text-[#6b5a48] tracking-tight transition-all duration-300" id="price_1">
                $5.99
              </span>
<button className="hover:bg-[#879183] transition-colors flex text-sm font-normal text-[#fff4e9] bg-[#6b5a48] rounded-sm pt-2.5 pr-5 pb-2.5 pl-5 gap-x-2 gap-y-2 items-center cursor-pointer" onclick="window.location.href='https://www.amazon.com/dp/B0FJ2NPRGZ?ref=cm_sw_r_ffobk_cso_cp_apin_dp_82ZCPAWPCJGNG3T8MRBH&amp;ref_=cm_sw_r_ffobk_cso_cp_apin_dp_82ZCPAWPCJGNG3T8MRBH&amp;social_share=cm_sw_r_ffobk_cso_cp_apin_dp_82ZCPAWPCJGNG3T8MRBH&amp;bestFormat=true&amp;rsd=hF4K3XZOmJl6a5dOWBEOjSCPeHkJFFG2UYvpgiwNeuuZBARGh3fRG2tKiAW1RLmDSVvrpXdNymVpXJ3qcv9adc8Mix0esIOY6dI3nzZNXkc%3D&amp;edk=AQIDAHi1lw%2FM8UbbSMD9ScOOFEmBMHMthHeEhqDaQYPJUAX3jQESeUllAjr5DmQ7ke2V4DppAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQM%2F4T7U1vNJDi1UkudAgEQgDvHJ7DPBTJgQVr%2FAVrdDgK9pM14hThxfOYDRvwzIex7%2BiWK3eHs5puiil1qwYcx5ohugoRUX2pvNpxbPg%3D%3D'" role="button">
                Buy
              </button>
</div>
</div>
</div>

<div className="flex flex-col group">
<div className="aspect-[3/4] flex overflow-hidden bg-[#e7d8c9] rounded-sm mb-6 pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">
<img alt="Book" className="group-hover:-translate-y-2 transition-transform duration-500 w-2/3 h-auto object-cover bg-center shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/40e4de2b-6bc6-4cd8-9f13-390ff3f269dd_800w.jpg?w=800&amp;q=80"/>
</div>
<div className="flex flex-col flex-1">
<h3 className="text-2xl font-normal text-[#6b5a48] tracking-tight font-['Playfair_Display',serif] mb-1">
              Metamorphosis: Let old petals Fall and Grow New Ones
            </h3>
<p className="line-clamp-2 text-base text-[#879183] mb-4">
              Metamorphosis is a collection of poems that expresses the
              unraveling of the self. After discovering our identity, there
              comes a time where we have to pull off the layers that were
              falsely formed, so that we can be our true selves.
            </p>
<div className="flex flex-wrap gap-2 mb-6">
<label className="cursor-pointer">
<input checked="" className="peer hidden" name="format_2" onchange="document.getElementById('price_2').innerText='$18.00'" type="radio"/>
<span className="block peer-checked:bg-[#e7d8c9] peer-checked:text-[#6b5a48] peer-checked:border-[#e7d8c9] transition-all hover:border-[#879183] text-sm text-[#879183] border-[#e7d8c9] border rounded-sm pt-1.5 pr-3 pb-1.5 pl-3">
                  Paperback
                </span>
</label>
<label className="cursor-pointer">
<input className="peer hidden" name="format_2" onchange="document.getElementById('price_2').innerText='$3.99'" type="radio"/>
<span className="block peer-checked:bg-[#e7d8c9] peer-checked:text-[#6b5a48] peer-checked:border-[#e7d8c9] transition-all hover:border-[#879183] text-sm text-[#879183] border-[#e7d8c9] border rounded-sm pt-1.5 pr-3 pb-1.5 pl-3">
                  eBook (ePub)
                </span>
</label>
</div>
<div className="flex mt-auto items-center justify-between">
<span className="transition-all duration-300 text-xl font-normal text-[#6b5a48] tracking-tight" id="price_2">
                $12.99
              </span>
<button className="hover:bg-[#e7d8c9] transition-colors flex cursor-pointer text-sm font-normal text-[#6b5a48] bg-[#fff4e9] border-[#6b5a48] border rounded-sm pt-2.5 pr-5 pb-2.5 pl-5 gap-x-2 gap-y-2 items-center" onclick="window.location.href='https://www.amazon.com/dp/B08J5CZ76B?ref=cm_sw_r_ffobk_cso_cp_apin_dp_M2CH1CXFYQMWR4EBBRX9&amp;ref_=cm_sw_r_ffobk_cso_cp_apin_dp_M2CH1CXFYQMWR4EBBRX9&amp;social_share=cm_sw_r_ffobk_cso_cp_apin_dp_M2CH1CXFYQMWR4EBBRX9&amp;bestFormat=true'" role="button">
                Buy
              </button>
</div>
</div>
</div>

<div className="flex flex-col group">
<div className="bg-[#e7d8c9] aspect-[3/4] rounded-sm p-8 flex items-center justify-center mb-6 relative overflow-hidden">
<img alt="Book" className="group-hover:-translate-y-2 transition-transform duration-500 w-2/3 h-auto object-cover bg-center shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa2458b3-4ca4-4fa3-ae29-5fb1a285149b_800w.jpg?w=800&amp;q=80"/>
</div>
<div className="flex flex-col flex-1">
<h3 className="text-2xl font-normal text-[#6b5a48] tracking-tight font-['Playfair_Display',serif] mb-1">
              Battle of Courts Worlds Apart
            </h3>
<p className="line-clamp-2 text-base text-[#879183] mb-4">
              Battle of Courts: Worlds Apart A crown can command obedience—but
              never the heart. Princess Serene Lyecraft once believed her
              engagement to Prince Tobias Kreed was nothing more than a duty—an
              alliance forged to unite Arden and Valeene.
            </p>
<div className="flex flex-wrap gap-2 mb-6">
<label className="cursor-pointer">
<input checked="" className="peer hidden" name="format_3" onchange="document.getElementById('price_3').innerText='$15.99'" type="radio"/>
<span className="block peer-checked:bg-[#e7d8c9] peer-checked:text-[#6b5a48] peer-checked:border-[#e7d8c9] transition-all hover:border-[#879183] text-sm text-[#879183] border-[#e7d8c9] border rounded-sm pt-1.5 pr-3 pb-1.5 pl-3">
                  Paperback
                </span>
</label>
<label className="cursor-pointer">
<input className="peer hidden" name="format_3" onchange="document.getElementById('price_3').innerText='$5.99'" type="radio"/>
<span className="block peer-checked:bg-[#e7d8c9] peer-checked:text-[#6b5a48] peer-checked:border-[#e7d8c9] transition-all hover:border-[#879183] text-sm text-[#879183] border-[#e7d8c9] border rounded-sm pt-1.5 pr-3 pb-1.5 pl-3">
                  eBook (ePub)
                </span>
</label>
</div>
<div className="mt-auto flex items-center justify-between">
<span className="text-xl font-normal text-[#6b5a48] tracking-tight transition-all duration-300" id="price_3">
                $15.99
              </span>
<button className="hover:bg-[#879183] transition-colors flex text-sm font-normal text-[#fff4e9] bg-[#6b5a48] rounded-sm pt-2.5 pr-5 pb-2.5 pl-5 gap-x-2 gap-y-2 items-center" onclick="window.location.href='https://www.amazon.com/dp/B0G4PV56M8?ref=cm_sw_r_ffobk_cso_cp_apin_dp_G77HJX18RBGGAH5GSD87&amp;ref_=cm_sw_r_ffobk_cso_cp_apin_dp_G77HJX18RBGGAH5GSD87&amp;social_share=cm_sw_r_ffobk_cso_cp_apin_dp_G77HJX18RBGGAH5GSD87&amp;bestFormat=true'" role="button">
                Buy
              </button>
</div>
</div>
</div>
<div className="flex flex-col group">
<div className="bg-[#e7d8c9] aspect-[3/4] rounded-sm p-8 flex items-center justify-center mb-6 relative overflow-hidden">
<img alt="Echoes of the Forgotten" className="group-hover:-translate-y-2 transition-transform duration-500 w-2/3 h-auto object-cover bg-center shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/239f67da-4f8f-427b-af4e-43c0a95ee8f5_800w.png?w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-[#6b5a48] text-[#fff4e9] text-xs px-2.5 py-1 uppercase tracking-widest rounded-sm">
              Bestseller
            </div>
</div>
<div className="flex flex-col flex-1">
<h3 className="text-2xl font-normal text-[#6b5a48] tracking-tight font-['Playfair_Display',serif] mb-1">
              The Journal: Unleashing Your Creative Quill Literary Solutions
            </h3>
<p className="line-clamp-2 text-base text-[#879183] mb-4">
              Arbria Owens (Author)
            </p>
<div className="flex flex-wrap gap-2 mb-6 gap-x-2 gap-y-2">
<label className="cursor-pointer">
<input checked="" className="peer hidden" name="format_4" onchange="document.getElementById('price_4').innerText='$26.00'" type="radio"/>
</label>
<label className="cursor-pointer">
<input className="peer hidden" name="format_4" onchange="document.getElementById('price_4').innerText='$16.00'" type="radio"/>
<span className="block peer-checked:bg-[#e7d8c9] peer-checked:text-[#6b5a48] peer-checked:border-[#e7d8c9] transition-all hover:border-[#879183] cursor-pointer text-sm text-[#879183] border-[#e7d8c9] border rounded-sm pt-1.5 pr-3 pb-1.5 pl-3" onclick="window.location.href='https://www.amazon.com/dp/B0FR2BB3NY?ref=cm_sw_r_ffobk_cso_cp_apin_dp_Z9BVFBNZ561ZTBBY1BD4&amp;ref_=cm_sw_r_ffobk_cso_cp_apin_dp_Z9BVFBNZ561ZTBBY1BD4&amp;social_share=cm_sw_r_ffobk_cso_cp_apin_dp_Z9BVFBNZ561ZTBBY1BD4&amp;bestFormat=true'" role="button">
                  eBook (ePub)
                </span>
</label>
</div>
<div className="flex mt-auto items-center justify-between">
<span className="transition-all duration-300 text-xl font-normal text-[#6b5a48] tracking-tight cursor-pointer" id="price_4" onclick="window.location.href='https://www.amazon.com/dp/B0FR2BB3NY?ref=cm_sw_r_ffobk_cso_cp_apin_dp_Z9BVFBNZ561ZTBBY1BD4&amp;ref_=cm_sw_r_ffobk_cso_cp_apin_dp_Z9BVFBNZ561ZTBBY1BD4&amp;social_share=cm_sw_r_ffobk_cso_cp_apin_dp_Z9BVFBNZ561ZTBBY1BD4&amp;bestFormat=true'" role="button">
                $3.99
              </span>
<button className="hover:bg-[#e7d8c9] transition-colors flex gap-2 text-sm font-normal text-[#6b5a48] bg-[#fff4e9] border-[#6b5a48] border rounded-sm pt-2.5 pr-5 pb-2.5 pl-5 gap-x-2 gap-y-2 items-center cursor-pointer" onclick="window.location.href='https://www.amazon.com/dp/B0FR2BB3NY?ref=cm_sw_r_ffobk_cso_cp_apin_dp_Z9BVFBNZ561ZTBBY1BD4&amp;ref_=cm_sw_r_ffobk_cso_cp_apin_dp_Z9BVFBNZ561ZTBBY1BD4&amp;social_share=cm_sw_r_ffobk_cso_cp_apin_dp_Z9BVFBNZ561ZTBBY1BD4&amp;bestFormat=true'" role="button">
                Buy
              </button>
</div>
</div>
</div>
<div className="flex flex-col group">
<div className="bg-[#e7d8c9] aspect-[3/4] rounded-sm p-8 flex items-center justify-center mb-6 relative overflow-hidden">
<img alt="The Silent Echo" className="group-hover:-translate-y-2 transition-transform duration-500 w-2/3 h-auto object-cover bg-center shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20e1fee1-d7f4-443c-8473-d5c86f29c914_800w.jpg?w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-[#9eab9a] text-[#fff4e9] text-xs px-2.5 py-1 uppercase tracking-widest rounded-sm">
              New Release
            </div>
</div>
<div className="flex flex-col flex-1">
<h3 className="text-2xl font-normal text-[#6b5a48] tracking-tight font-['Playfair_Display',serif] mb-1">
              Tongue of Fire: The Wordsmith's Journey
            </h3>
<p className="line-clamp-2 text-base text-[#879183] mb-4">
              In Tongue of Fire: The Wordsmith’s Journey, Arbria Owens blends
              prophetic philosophy, testimony, and spiritual revelation to call
              forth a generation of wordsmiths.
            </p>
<div className="flex flex-wrap gap-2 mb-6 gap-x-2 gap-y-2">
<label className="cursor-pointer">
<input checked="" className="peer hidden" name="format_5" onchange="document.getElementById('price_5').innerText='$20.00'" type="radio"/>
<span className="block peer-checked:bg-[#e7d8c9] peer-checked:text-[#6b5a48] peer-checked:border-[#e7d8c9] transition-all hover:border-[#879183] text-sm text-[#879183] border-[#e7d8c9] border rounded-sm pt-1.5 pr-3 pb-1.5 pl-3">
                  Paperback
                </span>
</label>
</div>
<div className="mt-auto flex items-center justify-between">
<span className="transition-all duration-300 text-xl font-normal text-[#6b5a48] tracking-tight" id="price_5">
                $14.99
              </span>
<button className="hover:bg-[#879183] transition-colors flex cursor-pointer text-sm font-normal text-[#fff4e9] bg-[#6b5a48] rounded-sm pt-2.5 pr-5 pb-2.5 pl-5 gap-x-2 gap-y-2 items-center" onclick="window.location.href='https://www.amazon.com/dp/B0FR2BB3NY?ref=cm_sw_r_ffobk_cso_cp_apin_dp_Z9BVFBNZ561ZTBBY1BD4&amp;ref_=cm_sw_r_ffobk_cso_cp_apin_dp_Z9BVFBNZ561ZTBBY1BD4&amp;social_share=cm_sw_r_ffobk_cso_cp_apin_dp_Z9BVFBNZ561ZTBBY1BD4&amp;bestFormat=true'" role="button">
                Buy
              </button>
</div>
</div>
</div>
<div className="flex flex-col group">
<div className="bg-[#e7d8c9] aspect-[3/4] rounded-sm p-8 flex items-center justify-center mb-6 relative overflow-hidden">
<img alt="Words Unspoken" className="group-hover:-translate-y-2 transition-transform duration-500 w-2/3 h-auto object-cover bg-center shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4f82511-6f2b-42ca-9225-95370a0a85ca_800w.jpg?w=800&amp;q=80"/>
</div>
<div className="flex flex-col flex-1">
<h3 className="font-['Playfair_Display',serif] text-2xl text-[#6b5a48] font-normal tracking-tight mb-1">
              Words Unspoken
            </h3>
<p className="text-[#879183] text-base mb-4 line-clamp-2">
              A beautiful poetry collection capturing the essence of unexpressed
              emotions and lingering feelings.
            </p>
<div className="flex flex-wrap gap-2 mb-6 gap-x-2 gap-y-2">
<label className="cursor-pointer">
<input checked="" className="peer hidden" name="format_6" onchange="document.getElementById('price_6').innerText='$24.00'" type="radio"/>
<span className="block peer-checked:bg-[#e7d8c9] peer-checked:text-[#6b5a48] peer-checked:border-[#e7d8c9] transition-all hover:border-[#879183] text-sm text-[#879183] border-[#e7d8c9] border rounded-sm pt-1.5 pr-3 pb-1.5 pl-3">
                  Hardcover
                </span>
</label>
</div>
<div className="mt-auto flex items-center justify-between">
<span className="text-xl font-normal text-[#6b5a48] tracking-tight transition-all duration-300" id="price_6">
                $24.00
              </span>
<button className="hover:bg-[#e7d8c9] transition-colors flex text-sm font-normal text-[#6b5a48] bg-[#fff4e9] border-[#6b5a48] border rounded-sm pt-2.5 pr-5 pb-2.5 pl-5 gap-x-2 gap-y-2 items-center">Buy</button>
</div>
</div>
</div>
<div className="flex flex-col group">
<div className="flex flex-col flex-1"></div>
</div>
<div className="flex flex-col group">
<div className="flex flex-col flex-1"></div>
</div>
<div className="flex flex-col group"></div>
</div>
</section>

<section className="bg-[#e7d8c9]/50 pt-24 pb-24" id="about">
<div className="lg:px-8 flex flex-col md:flex-row gap-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-center">
<div className="w-full md:w-7/12">
<h2 className="lg:text-4xl text-3xl font-normal text-[#6b5a48] tracking-tight font-['Playfair_Display',serif] mb-6">About Arbria Owens</h2>
<p className="leading-relaxed text-lg text-[#879183] mb-6">Arbria Owens is a storyteller of depth, emotion, and imagination—crafting worlds where love, power, and destiny collide. Best known for her Battle of Courts series, she brings fantasy romance to life through richly layered characters, high-stakes choices, and the tension between duty and desire.
Beyond the realm of fantasy, Arbria’s voice extends into transformative poetry and reflective prose, where themes of identity, healing, faith, and self-discovery take center stage. Her writing is both immersive and introspective—inviting readers not only to escape into new worlds, but to confront the truths within their own.
With every page, she creates an experience that lingers—where stories are felt as deeply as they are read.</p>
<button className="hover:bg-[#879183] transition-colors flex cursor-pointer text-sm font-normal text-[#fff4e9] bg-[#6b5a48] rounded-sm pt-2.5 pr-5 pb-2.5 pl-5 gap-x-2 gap-y-2 items-center" onclick="window.location.href='https://www.instagram.com/arbria_cko/'" role="button">Follow</button><button className="hover:bg-[#879183] transition-colors flex cursor-pointer text-sm font-normal text-[#fff4e9] bg-[#6b5a48] rounded-sm my-4 pt-2.5 pr-5 pb-2.5 pl-5 gap-x-2 gap-y-2 items-center" onclick="window.location.href='https://linktr.ee/arbriacowens10?utm_source=ig&amp;utm_medium=social&amp;utm_content=link_in_bio&amp;fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGng33zNo_6JHd5i2B5Mng3FclBv0gpRVBN2FGebPOxr3upZf2TvM2R1rxzuKU_aem_FPZqSLGInAzC1QRpyK7S3Q'" role="button">Linktree</button></div><div className="w-full md:w-5/12 relative">
<div className="aspect-[4/5] overflow-hidden rounded-tl-[4rem] rounded-br-[4rem]">
<img alt="Author Portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3687b6dc-9ab6-4fc9-bfdd-8a6b77ddf2a2_800w.png"/>
</div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#9eab9a] rounded-full -z-10 blur-2xl opacity-50"></div>
</div>
</div>
</section><section className="bg-[#e7d8c9]/50 pt-24 pb-24" id="about">
<div className="lg:px-8 flex flex-col md:flex-row gap-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-center">
<div className="w-full md:w-5/12 relative">
<div className="aspect-[4/5] overflow-hidden rounded-tl-[4rem] rounded-br-[4rem]">
<img alt="Author Portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3cc281ad-07f5-4262-937c-f7949c3271a3_800w.png?w=800&amp;q=80"/>
</div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#9eab9a] rounded-full -z-10 blur-2xl opacity-50"></div>
</div>
<div className="w-full md:w-7/12">
<h2 className="lg:text-4xl text-3xl font-normal text-[#6b5a48] tracking-tight font-['Playfair_Display',serif] mb-6">
            WHAT IS UYCQ.LS
          </h2>
<p className="leading-relaxed text-lg text-[#879183] mb-6">
            Unleashing Your Creative Quill Literary Solutions (UYCQ.LS) is a
            small publishing press and literary empowerment company dedicated to
            guiding writers from idea to publication and beyond. We specialize
            in supporting authors at every stage of their journey—whether they
            are just beginning to write, refining their manuscript, or preparing
            to publish professionally. UYCQ.LS blends creative development,
            mentoring, and industry-standard publishing services to create a
            holistic experience for writers. As a press, we offer multiple
            publishing pathways, allowing authors to choose the level of support
            and partnership that best fits their vision. Our services include
            manuscript development, editing, book formatting, cover design,
            publishing setup, and author mentoring. Beyond publishing, UYCQ.LS
            is a creative hub for writers—offering workshops, courses, and
            community-centered opportunities designed to strengthen skill, build
            confidence, and cultivate consistency. At its core, UYCQ.LS is more
            than a publishing company—it is a movement centered on purpose,
            creativity, and transformation through the written word.
          </p>
<p className="leading-relaxed text-lg text-[#879183] mb-8">
            CORE VALUES Authenticity: We champion the true voice of every writer
            Empowerment: We equip authors with knowledge, confidence, and
            ownership. Creativity: We nurture imagination and innovative
            storytelling . Excellence: We provide high-quality, professional
            publishing standards Purpose: We believe every story carries impact
            and meaning.
          </p>
</div>
</div>
</section>

<section className="lg:px-8 w-full max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="events">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-['Playfair_Display',serif] text-[#6b5a48] font-normal tracking-tight mb-4">
            Gatherings &amp; Signings
          </h2>
<p className="text-base text-[#879183]">
            Join us for in-person readings, book launches, and literary
            conversations.
          </p>
</div>
</div>
<div className="flex flex-col gap-6">

<div className="flex flex-col sm:flex-row bg-[#fff4e9] border border-[#e7d8c9] rounded-sm overflow-hidden group hover:shadow-md transition-shadow">
<div className="bg-[#9eab9a] text-[#fff4e9] p-6 sm:w-32 flex sm:flex-col justify-center items-center gap-2 sm:gap-0 shrink-0">
<span className="text-3xl font-normal tracking-tight font-['Playfair_Display',serif]">
              Coming Soon
            </span>
</div>
<div className="md:p-8 flex-1 flex flex-col pt-6 pr-6 pb-6 pl-6 justify-center">
<div className="flex gap-2 text-sm text-[#879183] mb-2 gap-x-2 gap-y-2 items-center"></div>
<h3 className="text-2xl font-normal text-[#6b5a48] tracking-tight font-['Playfair_Display',serif] mb-2">
              THE WORDSMITH BOOTCAMP
            </h3>
<p className="line-clamp-2 text-base text-[#879183]">
              The Wordsmith Bootcamp is a transformational writing experience
              designed to help writers unlock creativity, break through writer’s
              block, and build consistency in their craft. Rooted in both
              creative activation and disciplined practice, this program guides
              participants through the art of storytelling, language, and
              self-expression.
            </p>
</div>
<div className="p-6 md:p-8 sm:border-l border-t sm:border-t-0 border-[#e7d8c9] flex items-center justify-center bg-[#e7d8c9]/20 shrink-0">
<button className="sm:w-auto hover:bg-[#6b5a48] hover:text-[#fff4e9] transition-colors cursor-pointer text-sm font-normal text-[#6b5a48] bg-transparent w-full border-[#6b5a48] border rounded-sm pt-2.5 pr-6 pb-2.5 pl-6" onclick="window.location.href='mailto:owens@uycqliterarysolutions.com'" role="button">
              Reserve Spot
            </button>
</div>
</div>

</div>
</section>


<section className="lg:px-8 w-full max-w-7xl border-[#e7d8c9]/50 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="journal">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-['Playfair_Display',serif] text-[#6b5a48] font-normal tracking-tight mb-4">
            The Journal
          </h2>
<p className="text-[#879183] text-base">
            Musings, editorial insights, and literary explorations.
          </p>
</div>
</div>
<div className="cms-collection-wrapper w-full" data-cms-collection="blog-posts">
<iframe className="bg-[#fff4e9] w-full h-[800px] border-[#e7d8c9] border rounded-sm shadow-sm" src="https://ulycqls.blogspot.com" title="Blog"></iframe>
</div>
</section>


<section className="py-24 max-w-7xl mx-auto px-6 lg:px-8 w-full">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-['Playfair_Display',serif] text-[#6b5a48] font-normal tracking-tight">
          Reader Praise
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-[#e7d8c9]/30 p-8 rounded-sm relative">
<i className="w-10 h-10 absolute top-6 left-6 text-[#9eab9a] opacity-20" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-xl italic text-[#6b5a48] font-['Playfair_Display',serif] z-10 mt-4 mb-6 relative">"UYCQ.LS Press books always feel like they were made specifically for me. The physical quality is stunning, and the writing is consistently breathtaking."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#9eab9a] flex items-center justify-center text-[#fff4e9] text-sm font-normal">
              S
            </div>
<span className="text-sm text-[#879183] uppercase tracking-wider">
              Sarah M.
            </span>
</div>
</div>
<div className="bg-[#e7d8c9]/30 p-8 rounded-sm relative">
<i className="w-10 h-10 absolute top-6 left-6 text-[#9eab9a] opacity-20" data-lucide="quote" strokeWidth="1.5"></i>
<p className="font-['Playfair_Display',serif] text-xl text-[#6b5a48] italic relative z-10 mb-6 mt-4">
            "The writing retreat changed my entire approach to my novel. The
            supportive environment and expert guidance were exactly what I
            needed to cross the finish line."
          </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#6b5a48] flex items-center justify-center text-[#fff4e9] text-sm font-normal">
              J
            </div>
<span className="text-sm text-[#879183] uppercase tracking-wider">
              James T.
            </span>
</div>
</div>
<div className="bg-[#e7d8c9]/30 p-8 rounded-sm relative">
<i className="w-10 h-10 absolute top-6 left-6 text-[#9eab9a] opacity-20" data-lucide="quote" strokeWidth="1.5"></i>
<p className="font-['Playfair_Display',serif] text-xl text-[#6b5a48] italic relative z-10 mb-6 mt-4">
            "I ordered the signed edition directly from the site. The packaging
            was beautiful, shipping was fast, and the personal note inside made
            it so special."
          </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#879183] flex items-center justify-center text-[#fff4e9] text-sm font-normal">
              E
            </div>
<span className="text-sm text-[#879183] uppercase tracking-wider">
              Elena R.
            </span>
</div>
</div>
</div>
</section>


<footer className="bg-[#e7d8c9]/20 pt-16 pb-8 border-t border-[#e7d8c9]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-3 group mb-4" href="#">
<span className="uppercase text-xl font-normal text-[#6b5a48] tracking-tighter font-['Playfair_Display',serif]">UYCQ.LS</span>
</a>
<p className="text-sm text-[#879183] leading-relaxed max-w-xs">
              An independent publisher and author brand dedicated to crafting
              stories that linger long after the last page.
            </p>
</div>
<div className="">
<h4 className="text-sm font-normal text-[#6b5a48] uppercase tracking-widest mb-4">
              Explore
            </h4>
<ul className="space-y-3 text-base">
<li className="">
<a className="text-[#879183] hover:text-[#6b5a48] transition-colors" href="#books">
                  Books
                </a>
</li>
<li className="">
<a className="text-[#879183] hover:text-[#6b5a48] transition-colors" href="#store">
                  Shop Direct
                </a>
</li>
<li className="">
<a className="text-[#879183] hover:text-[#6b5a48] transition-colors" href="#journal">
                  The Journal
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-normal text-[#6b5a48] uppercase tracking-widest mb-4">
              Connect
            </h4>
<ul className="space-y-3 text-base">
<li className="">
<a className="text-[#879183] hover:text-[#6b5a48] transition-colors" href="#about">
                  About the Author
                </a>
</li>
<li>
<a className="text-[#879183] hover:text-[#6b5a48] transition-colors" href="#">
                  Contact Us
                </a>
</li>
<li className="">
<a className="text-[#879183] hover:text-[#6b5a48] transition-colors" href="#">
                  Wholesale Inquiries
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-normal text-[#6b5a48] uppercase tracking-widest mb-4">
              Follow
            </h4>
<div className="flex gap-4">
<a className="text-[#879183] hover:text-[#6b5a48] transition-colors text-xl" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-[#879183] hover:text-[#6b5a48] transition-colors text-xl" href="#">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</a>
<a className="text-[#879183] hover:text-[#6b5a48] transition-colors text-xl" href="#">
<i className="w-5 h-5" data-lucide="bookmark" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#e7d8c9]/50 text-xs text-[#879183] uppercase tracking-wider">
<p className="">© 2024 UYCQ.LS . All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-[#6b5a48] transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-[#6b5a48] transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
