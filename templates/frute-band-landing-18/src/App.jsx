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



      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
          threshold: 0.15,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
          let delay = 0;
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('is-visible');
              }, delay);
              delay += 200;
              observer.unobserve(entry.target);
            }
          });
          setTimeout(() => { delay = 0; }, 1000);
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal-on-scroll');
        elements.forEach((el) => {
           observer.observe(el);
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 md:px-12 flex reveal-on-scroll text-white mix-blend-difference w-full pt-8 pr-6 pb-8 pl-6 top-0 items-center justify-between">
<div className="uppercase text-sm font-bold tracking-widest">Frute</div>
<button className="group">
<div className="cursor-pointer space-y-1.5">
</div>
</button>
</nav>

<header className="min-h-[800px] overflow-hidden bg-[#41311a] w-full h-screen relative">
<div className="sonar-wrapper">
<div className="sonar-emitter delay-1 border border-[#da8e24]/30"></div>
<div className="sonar-emitter delay-2 border border-[#da8e24]/30"></div>
<div className="sonar-emitter delay-3 border border-[#da8e24]/30"></div>
</div>

<div className="w-full h-full absolute top-0 right-0 bottom-0 left-0">
<img alt="Background Atmosphere" className="grayscale-[20%] z-20 opacity-60 mix-blend-overlay w-full h-full object-cover scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53a136eb-a113-4e6a-8c63-eb05159df1a2_3840w.jpg"/>

<div className="bg-gradient-to-b from-[#41311a]/80 via-transparent to-[#2a2f2d]/90 mix-blend-multiply absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="-translate-x-1/2 blur-[120px] animate-pulse duration-[4000ms] bg-[#ce3d11]/50 opacity-80 mix-blend-color-dodge w-[40vw] h-[25vw] rounded-full absolute top-[25%] left-1/2"></div>
<div className="blur-[40px] bg-[#da8e24]/40 mix-blend-overlay w-[30vw] h-[5vw] absolute top-[30%] left-[40%]"></div>

<div className="flex pointer-events-none z-10 w-full h-full absolute top-0 right-0 bottom-0 left-0">
<div className="flex-1 backdrop-blur-[0.5px] bg-gradient-to-b from-white/5 to-transparent border-white/5 border-r"></div>
<div className="flex-1 backdrop-blur-[1px] bg-black/5 border-white/5 border-r"></div>
<div className="flex-1 bg-transparent border-white/5 border-r"></div>
<div className="flex-1 backdrop-blur-[1px] bg-white/5 border-white/5 border-r"></div>
<div className="flex-1 border-r border-white/5 bg-black/10"></div>
<div className="flex-1 border-r border-white/5 bg-transparent"></div>
<div className="flex-1 border-r border-white/5 bg-white/5 backdrop-blur-[2px]"></div>
<div className="flex-1 border-r border-white/5 bg-black/5"></div>
<div className="flex-1 border-r border-white/5 bg-transparent"></div>
<div className="flex-1 bg-gradient-to-b from-white/5 to-transparent"></div>
</div>

<div className="flex flex-col z-20 w-full h-full pb-0 relative justify-end">

<div className="pointer-events-none w-full h-full absolute top-0 right-0 bottom-0 left-0">
<div className="md:left-12 z-30 max-w-xs absolute top-[45%] left-6">
<p className="md:text-3xl leading-tight text-2xl text-white/90 font-serif-italic drop-shadow-lg reveal-on-scroll is-visible"></p>
</div>
<div className="md:right-12 z-30 text-right max-w-lg absolute top-[38%] right-6">
<h2 className="md:text-5xl leading-[1.1] text-3xl font-medium text-white tracking-tight drop-shadow-lg reveal-on-scroll is-visible"></h2>
</div>
</div>

<div className="flex select-none w-full relative translate-y-[12%] items-end justify-center">

<h1 className="text-[26vw] leading-[0.8] bg-clip-text font-bold text-transparent tracking-tighter bg-gradient-to-br from-[#da8e24]/30 via-[#DA8E24]/50 to-[#DA8E24]/80 z-20 pr-4 pb-12 pl-4 relative drop-shadow-2xl reveal-on-scroll is-visible">
            Frute
          </h1>

<div className="z-30 hidden md:flex absolute top-[18%] right-[16%] items-center justify-center"></div>

<span className="-right-[15%] text-[26vw] leading-[0.8] blur-[2px] z-10 font-bold text-[#da8e24] tracking-tighter opacity-30 mix-blend-overlay absolute bottom-[18%]"></span>
</div>
</div>
</header>

<section className="overflow-hidden z-20 bg-neutral-950 w-full h-screen pt-12 pb-12 relative">
<div className="z-10 w-full h-full absolute top-0 right-0 bottom-0 left-0 bg-neutral-950">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/ME0aCFgxre8?si=LTXvNRATAWOXsTQ9" title="YouTube video player"></iframe>
</div>
<iframe allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" className="z-0 w-full h-full relative reveal-on-scroll" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://player.vimeo.com/video/1145735576?h=05e531a98d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="Dont Make Me Sad - Big What"></iframe>
</section>

<section className="md:pt-24 md:pb-24 z-20 bg-neutral-900 border-white/5 border-b pt-8 pr-8 pb-8 pl-8 relative">
<div className="sonar-wrapper opacity-30">
<div className="sonar-emitter delay-1 border border-[#da8e24]/20"></div>
<div className="sonar-emitter delay-2 border border-[#da8e24]/20"></div>
</div>

<div className="pointer-events-none z-10 opacity-20 w-full h-full absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex flex-col w-full max-w-none max-h-none z-20 relative items-center">


<div className="w-full max-w-3xl reveal-on-scroll relative group px-4 sm:px-0">

<div className="absolute -inset-1 bg-gradient-to-b from-[#da8e24]/30 to-transparent rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-700">
</div>

<div className="relative w-full rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900/50 backdrop-blur-sm shadow-2xl">
<img alt="Official Tour Poster" className="block w-full h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da6daeb1-fba1-4f91-839f-c8fb0810643d_3840w.png"/>
</div>
</div>

<div className="mt-12 flex gap-4 flex-col sm:flex-row reveal-on-scroll">
</div>
</div>
</section>

<section className="md:px-12 md:pt-12 md:pb-12 z-10 bg-neutral-900 border-white/5 border-t-0 pt-0 pr-6 pb-24 pl-6 relative">
<h4 className="uppercase reveal-on-scroll text-lg font-bold text-neutral-300/80 tracking-widest pt-4 pb-4">Recent Tour Highlights</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mr-auto ml-auto gap-x-6 gap-y-6">

<div className="group overflow-hidden bg-neutral-950 h-[500px] border-white/5 border rounded-3xl relative reveal-on-scroll">
<img alt="Abstract" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80 opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/058aecd4-af39-4305-9d5b-2258cdc68adc_1600w.jpg"/>
<div className="group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-[10px] uppercase text-neutral-300 font-mono bg-black/30 border-white/10 border rounded pt-1 pr-2 pb-1 pl-2 absolute top-4 right-4 backdrop-blur-sm">1/17/26</div>
<div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-end justify-between border-t border-white/10 pt-4">
<div className="">
<span className="uppercase block text-xs font-semibold text-[#da8e24] tracking-widest mb-1">Atlanta - Variety Playhouse</span>
<h3 className="text-xl font-medium text-white tracking-tight">500+ Presale Tickets - Support for Spafford</h3>
</div>
</div>
</div>
</div>

<div className="group overflow-hidden reveal-on-scroll bg-neutral-950 h-[500px] border-white/5 border rounded-3xl relative">
<img alt="Swiss Alps" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80 opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4faeaa2-b5e0-43bc-a7d5-26a005880af4_800w.png"/>
<div className="group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-[10px] uppercase text-neutral-300 font-mono bg-black/30 border-white/10 border rounded pt-1 pr-2 pb-1 pl-2 absolute top-4 right-4 backdrop-blur-sm">
            11/29/25
          </div>
<div className="transform group-hover:translate-y-0 transition-transform duration-300 w-full pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0 translate-y-2">
<div className="flex border-white/10 border-t pt-4 items-end justify-between">
<div className="">
<span className="uppercase block text-xs font-semibold text-[#da8e24] tracking-widest mb-1">
                  Atlanta - Aisle 5
                </span>
<h3 className="text-xl font-medium text-white tracking-tight">
                  184 Tickets
                </h3>
</div>
</div>
</div>
</div>

<div className="group relative h-[500px] rounded-3xl overflow-hidden bg-neutral-950 border border-white/5 reveal-on-scroll">
<img alt="Iceland" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80 opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0823a9e8-1c91-4229-8107-bb675175870c_800w.png"/>
<div className="group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0823a9e8-1c91-4229-8107-bb675175870c_800w.png)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-[10px] uppercase text-neutral-300 font-mono bg-black/30 border-white/10 border rounded pt-1 pr-2 pb-1 pl-2 absolute top-4 right-4 backdrop-blur-sm">
            11/28/25
          </div>
<div className="transform group-hover:translate-y-0 transition-transform duration-300 w-full pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0 translate-y-2">
<div className="flex items-end justify-between border-t border-white/10 pt-4">
<div className="">
<span className="uppercase block text-xs font-semibold text-[#da8e24] tracking-widest mb-1">
                  Asheville Music Hall
                </span>
<h3 className="text-xl font-medium text-white tracking-tight">
                  118 Tickets
                </h3>
</div>
</div>
</div>
</div>

<div className="group relative h-[500px] rounded-3xl overflow-hidden bg-neutral-950 border border-white/5 reveal-on-scroll">
<img alt="Turkey" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80 object-auto object-repeat opacity-60 w-full h-full object-cover bg-center absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8bdc6d3d-db7d-4f2c-9bf9-153142d9e715_800w.png"/>
<div className="group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-[10px] uppercase text-neutral-300 font-mono bg-black/30 border-white/10 border rounded pt-1 pr-2 pb-1 pl-2 absolute top-4 right-4 backdrop-blur-sm">
            11/15/25
          </div>
<div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-end justify-between border-t border-white/10 pt-4">
<div className="">
<span className="uppercase block text-xs font-semibold text-[#da8e24] tracking-widest mb-1">
                  Raleigh Pourhouse
                </span>
<h3 className="text-xl font-medium text-white tracking-tight">
                  135 Tickets
                </h3>
</div>
</div>
</div>
</div>

<div className="group overflow-hidden bg-neutral-950 h-[500px] border-white/5 border rounded-3xl relative reveal-on-scroll">
<img alt="Dolomites" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80 object-auto opacity-60 w-full h-full object-contain absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b02ab66-07df-49f0-8f18-28e9e7cd5916_800w.png"/>
<div className="group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-[10px] uppercase text-neutral-300 font-mono bg-black/30 border-white/10 border rounded pt-1 pr-2 pb-1 pl-2 absolute top-4 right-4 backdrop-blur-sm">
            10/31/25
          </div>
<div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex border-white/10 border-t pt-4 items-end justify-between">
<div className="">
<span className="uppercase block text-xs font-semibold text-[#da8e24] tracking-widest mb-1">
                  Knoxville - Bijou Theater
                </span>
<h3 className="text-xl font-medium text-white tracking-tight">
                  Halloween w/ Big Something
                </h3>
</div>
</div>
</div>
</div>

<div className="group overflow-hidden bg-neutral-950 h-[500px] border-white/5 border rounded-3xl relative reveal-on-scroll">
<img alt="Dolomites" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80 opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3598d76b-92d8-4f91-8b31-05db2f9e9626_800w.png"/>
<div className="group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-[10px] uppercase text-neutral-300 font-mono bg-black/30 border-white/10 border rounded pt-1 pr-2 pb-1 pl-2 absolute top-4 right-4 backdrop-blur-sm">
            10/17/25
          </div>
<div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-end justify-between border-t border-white/10 pt-4">
<div className="">
<span className="uppercase block text-xs font-semibold text-[#da8e24] tracking-widest mb-1">
                  Charleston Pour House
                </span>
<h3 className="text-xl font-medium text-white tracking-tight">
                  204 Tickets
                </h3>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-neutral-950 z-10 border-white/5 border-t pt-4 pb-4 relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6 reveal-on-scroll">
<div className="text-center mb-12">
<p className="uppercase text-base font-black text-neutral-400 tracking-widest">
            Previous Support Slots
          </p>
</div>
<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 15%, black 85%, transparent)'}}>
<div className="ticker-track flex gap-16 whitespace-nowrap items-center">

<div className="flex gap-16 items-center">
<span className="hover:text-[#da8e24] transition-colors duration-300 bg-center text-3xl font-bold text-neutral-600 font-bricolage w-40 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6169505f-ffca-4d7b-9a36-82a3829ceef4_1600w.png)] bg-cover"></span>
<span className="hover:text-[#da8e24] transition-colors duration-300 text-3xl font-medium italic text-neutral-600 font-instrument-serif w-40 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6ccdb81f-54c6-457e-9cd6-52ae8d1d2a9f_800w.png)] bg-contain"></span>
<span className="hover:text-[#da8e24] transition-colors duration-300 text-3xl font-bold text-neutral-600 tracking-tight font-space-grotesk w-40 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57aada63-70a5-4618-9828-6d3fb16175c5_320w.png)] bg-cover bg-center"></span>
<span className="hover:text-[#da8e24] transition-colors duration-300 text-3xl font-bold italic text-neutral-600 font-newsreader w-60 h-36 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d6cf0f06-12d1-4882-9a62-949d289e4b30_3840w.png)] bg-contain"></span>
<span className="hover:text-[#da8e24] transition-colors duration-300 font-bold text-neutral-600 font-space-mono w-40 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a914a0e5-9864-41d3-ad58-28c8f1d55e1e_320w.png)] bg-contain"></span>
<span className="hover:text-[#da8e24] transition-colors duration-300 uppercase bg-center text-3xl font-black text-neutral-600 tracking-widest font-oswald w-40 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/02a2cdd8-3cb5-4706-a6ef-2037922b4ee2_320w.png)] bg-cover"></span>
<span className="hover:text-[#da8e24] transition-colors duration-300 text-3xl font-bold text-neutral-600 font-jakarta w-40 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4944615-c8e0-45f7-8f54-62807cb776a3_800w.png)] bg-cover"></span>
</div>

<div className="flex gap-16 items-center">
<span className="hover:text-[#da8e24] transition-colors duration-300 bg-center text-3xl font-bold text-neutral-600 font-bricolage w-40 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/026add28-5b78-4744-8a43-459fba34cb39_320w.png)] bg-cover"></span>
<span className="hover:text-[#da8e24] transition-colors duration-300 bg-center text-3xl font-medium italic text-neutral-600 font-instrument-serif w-40 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/213e2d6a-c514-4180-a3d3-866b3aa6190d_320w.png)] bg-cover"></span>
</div>
</div>
</div>
</div>
<style className="">
        @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .ticker-track {
            animation: ticker 40s linear infinite;
            width: max-content;
        }
        .ticker-track:hover {
            animation-play-state: paused;
        }
      </style>
</section>
<section className="overflow-hidden z-20 bg-neutral-950 w-full h-screen pt-12 pb-12 relative">
<div className="opacity-20 w-full h-full absolute top-0 right-0 bottom-0 left-0"></div>
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="z-0 reveal-on-scroll w-full h-full relative" frameborder="0" height="315" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/RtnoH1hkNp8?si=OglopikuY8iBOjum" title="YouTube video player" width="560"></iframe>
</section>


<footer className="md:px-12 flex flex-col md:flex-row md:items-center reveal-on-scroll text-neutral-500 bg-neutral-950 z-10 border-white/10 border-t pt-12 pr-6 pb-12 pl-6 relative gap-x-8 gap-y-8 items-start justify-between">
<div className="flex flex-col gap-2">
<span className="text-white text-lg font-semibold tracking-tight">
          Frute
        </span>
<span className="text-sm">Atlanta, GA</span>
</div>
<div className="flex gap-6 gap-x-6 gap-y-6 items-center">
<a className="text-white hover:text-[#da8e24] transition-colors" href="https://www.instagram.com/fruteband/" target="_blank">
<svg className="lucide lucide-instagram w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" style={{width: '20px', height: '20px', color: 'rgb(218, 142, 36)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388a5.9 5.9 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076s-.069 1.688-.063 4.947s.021 3.667.083 4.947c.061 1.277.264 2.149.563 2.911c.308.789.72 1.457 1.388 2.123a5.9 5.9 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552c1.278.056 1.689.069 4.947.063s3.668-.021 4.947-.082c1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.123-1.388a5.9 5.9 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912c.056-1.28.07-1.69.063-4.948c-.006-3.258-.02-3.667-.081-4.947c-.06-1.28-.264-2.148-.564-2.911a5.9 5.9 0 0 0-1.387-2.123a5.9 5.9 0 0 0-2.128-1.38c-.764-.294-1.636-.496-2.914-.55C15.647.009 15.236-.006 11.977 0S8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895a3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228c-.06-1.264-.072-1.644-.08-4.848c-.006-3.204.006-3.583.061-4.848c.05-1.169.246-1.805.408-2.228c.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417c1.265-.06 1.644-.072 4.848-.08c3.203-.006 3.583.006 4.85.062c1.168.05 1.804.244 2.227.408c.56.216.96.475 1.382.895s.681.817.9 1.378c.165.422.362 1.056.417 2.227c.06 1.265.074 1.645.08 4.848c.005 3.203-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23c-.216.56-.477.96-.896 1.38a3.7 3.7 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418c-1.266.06-1.645.072-4.85.079s-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442a1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024a6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16A4 4 0 0 1 8 12.008" fill="#da8e24"></path></svg>
</a>
<a className="text-white hover:text-[#da8e24] transition-colors" href="https://open.spotify.com/artist/58zUyObup2GjOuye4EcPRZ" target="_blank">
<svg className="lucide lucide-music w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="spotify" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" style={{width: '20px', height: '20px', color: 'rgb(218, 142, 36)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12s12-5.4 12-12S18.66 0 12 0m5.521 17.34c-.24.359-.66.48-1.021.24c-2.82-1.74-6.36-2.101-10.561-1.141c-.418.122-.779-.179-.899-.539c-.12-.421.18-.78.54-.9c4.56-1.021 8.52-.6 11.64 1.32c.42.18.479.659.301 1.02m1.44-3.3c-.301.42-.841.6-1.262.3c-3.239-1.98-8.159-2.58-11.939-1.38c-.479.12-1.02-.12-1.14-.6s.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2m.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721c-.18-.601.18-1.2.72-1.381c4.26-1.26 11.28-1.02 15.721 1.621c.539.3.719 1.02.419 1.56c-.299.421-1.02.599-1.559.3" fill="#da8e24"></path></svg>
</a>
<a className="text-white hover:text-[#da8e24] transition-colors" href="https://www.youtube.com/channel/UCl5uTy1jlaKfXQh2iYV9cIA" target="_blank">
<svg className="lucide lucide-youtube w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(218, 142, 36)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path className="" d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
<div className="text-sm">© 2026 Frute</div>
</footer>



    </>
  );
}
