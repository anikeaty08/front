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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-8 md:px-12 mix-blend-difference">
<a className="text-xl font-medium tracking-tighter uppercase text-white hover:opacity-70 transition-opacity" href="#">
        VRTX
      </a>
<div className="hidden md:flex items-center gap-10 text-sm font-light text-zinc-300">
<a className="hover:text-white transition-colors" href="#approach">
          Approach
        </a>
<a className="hover:text-white transition-colors" href="#work">
          Selected Work
        </a>
<a className="hover:text-white transition-colors" href="#studio">Studio</a>
</div>
<button className="md:hidden flex flex-col gap-2 z-50 focus:outline-none">
<span className="w-6 h-px bg-white block"></span>
<span className="w-4 h-px bg-white block self-end"></span>
</button>
<a className="hidden md:inline-flex items-center justify-center text-xs font-medium uppercase tracking-widest border border-zinc-800 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300" href="#contact">
        Initiate
      </a>
</nav>

<header className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-24 overflow-hidden">
<img alt="Container background" className="absolute inset-0 w-full h-full object-cover img-editorial" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d4ba842-bdd6-4c64-a6fa-0ca8762707be_3840w.png" style={{filter: 'grayscale(100%) contrast(0.66) brightness(0.4)'}}/>

<div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-indigo-900/20 rounded-full blur-[100px] -z-10 mix-blend-screen glow-accent-ambient"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-zinc-900/30 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-start">
<div className="flex items-center gap-4 mb-8 md:mb-12">
<span className="w-8 h-px bg-zinc-600 block"></span>
<p className="text-sm tracking-widest uppercase text-zinc-200 font-light">
            Digital home where emotion meets intention.
          </p>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium leading-[0.9] tracking-tighter text-zinc-50 w-full max-w-5xl">
          Rooted in lineage.
          <br/>
          Driven by purpose.
        </h1>
<div className="max-w-2xl mt-8">
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-200">
            Buena Vida was built on a simple idea: if you master the
            fundamentals and show up consistently, everything else takes care of
            itself — on the mat and in life. Coach Kolo grew up in Guam, trained
            under legends in San Francisco, and brought the best of both worlds
            to West Sacramento: Pacific-rooted warmth and world-class technique.
          </p>
</div>
</div>
</header>

<section className="md:px-12 lg:px-24 bg-black bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/256098a2-4f59-48b8-bb23-5693404ae9d1_3840w.png)] bg-cover bg-center pt-32 pr-6 pb-32 pl-6 relative" id="approach">
<div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 relative z-10">
<div className="md:col-span-3">
<h2 className="text-sm tracking-widest uppercase text-zinc-300 font-light sticky top-32">
            Philosophy
          </h2>
</div>
<div className="md:col-span-9 flex flex-col">
<div className="mb-16 md:mb-24 pr-4 max-w-3xl">
<h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-zinc-100 mb-8 leading-snug tracking-tight">
              Fundamentals
            </h3>
<p className="text-zinc-300 font-light text-base md:text-lg leading-relaxed mb-6">
              Master the fundamentals. Show up consistently. The rest follows.
              Professor Kolo Vida brings a rare balance to West Sacramento: the
              welcoming spirit of the islands met with the razor-sharp precision
              of a legendary lineage.
            </p>
</div>

<div className="border-t border-zinc-900 py-10 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center group cursor-crosshair gap-6">
<h3 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-zinc-100 group-hover:text-white group-hover:translate-x-4 transition-all duration-500">
              Consistency
            </h3>
<div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end opacity-60 group-hover:opacity-100 transition-opacity">
<p className="max-w-xs text-sm font-light text-zinc-300 text-left md:text-right">
                The ultimate multiplier. True transformation happens through the
                quiet discipline of showing up, day after day, to put in the
                work.
              </p>
<span className="text-zinc-400 font-light text-lg font-serif italic">
                01
              </span>
</div>
</div>

<div className="border-t border-zinc-900 py-10 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center group cursor-crosshair gap-6">
<h3 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-zinc-100 group-hover:text-white group-hover:translate-x-4 transition-all duration-500">
              Community
            </h3>
<div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end opacity-60 group-hover:opacity-100 transition-opacity">
<p className="max-w-xs text-sm font-light text-zinc-300 text-left md:text-right">
                The shared mat. A welcoming, ego-free collective built on mutual
                respect, where every student elevates the person across from
                them.
              </p>
<span className="text-zinc-400 font-light text-lg font-serif italic">
                02
              </span>
</div>
</div>

<div className="border-t border-b border-zinc-900 py-10 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center group cursor-crosshair gap-6">
<h3 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-zinc-100 group-hover:text-white group-hover:translate-x-4 transition-all duration-500">
              Academy
            </h3>
<div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end opacity-60 group-hover:opacity-100 transition-opacity">
<p className="max-w-xs text-sm font-light text-zinc-300 text-left md:text-right">
                The complete study of grappling. Blending traditional gi
                mechanics with modern, high-pace no-gi systems.
              </p>
<span className="text-zinc-400 font-light text-lg font-serif italic">
                03
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end gap-6 mb-16 gap-x-6 gap-y-6 items-start justify-between">
<h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight">
            Case Studies
          </h2>
<a className="text-sm font-light text-zinc-200 hover:text-white transition-colors flex items-center gap-2 pb-1 border-b border-transparent hover:border-white" href="#">
            Index View
            <iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[350px] md:auto-rows-[450px]">

<div className="md:col-span-8 relative group rounded-xl overflow-hidden bg-zinc-950 flex flex-col justify-end p-8 md:p-10 border border-zinc-900/50">
<div className="absolute inset-0 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65dd6d6a-fd43-40de-b6a0-c3cecd660a42_1600w.png')] bg-cover bg-center img-editorial"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="relative z-10 flex flex-col items-start">
<div className="flex gap-3 mb-4">
<span className="px-3 py-1 text-xs uppercase tracking-widest text-orange-400 border border-orange-900/50 rounded-full bg-black/50 backdrop-blur-sm">
                  Martial Arts
                </span>
<span className="px-3 py-1 text-xs uppercase tracking-widest text-zinc-200 border border-zinc-800 rounded-full bg-black/50 backdrop-blur-sm">
                  Editorial
                </span>
</div>
<h3 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-white mb-3">
                Dojo Protocol
              </h3>
<p className="text-base text-zinc-300 font-light max-w-md hidden md:block">
                Redefining the martial arts experience through reductive design
                and fluid motion principles.
              </p>
</div>
</div>

<div className="md:col-span-4 relative group rounded-xl overflow-hidden bg-zinc-950 flex flex-col justify-between p-8 md:p-10 border border-zinc-900/50">
<div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-black to-black"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMzZjNmNDYiIGZpbGwtb3BhY2l0eT0iMC4xNCIvPjwvc3ZnPg==')] opacity-50 mix-blend-overlay"></div>
<div className="relative z-10 self-end">
<div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center backdrop-blur-md bg-black/40 group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="relative z-10">
<span className="text-xs uppercase tracking-widest text-indigo-400 mb-3 block font-medium">
                Protocol
              </span>
<h3 className="text-2xl font-serif font-medium tracking-tight text-white">
                Nexus Layer
              </h3>
</div>
</div>

<div className="md:col-span-5 relative group rounded-xl overflow-hidden bg-zinc-950 flex flex-col justify-end p-8 md:p-10 border border-zinc-900/50">
<div className="absolute inset-0 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3504386b-5054-433e-af73-a0101fe021f2_1600w.png')] bg-cover bg-center img-editorial"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
<div className="relative z-10">
<span className="text-xs uppercase tracking-widest text-amber-500 mb-3 block font-medium">
                Academy
              </span>
<h3 className="text-2xl font-serif font-medium tracking-tight text-white">
                Next Generation
              </h3>
</div>
</div>

<div className="md:col-span-7 relative group rounded-xl overflow-hidden bg-zinc-900 border border-zinc-900/50 flex flex-col justify-center items-center p-10 text-center">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black transition-opacity duration-500 group-hover:opacity-50"></div>

<div className="absolute inset-0 overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-700">
<div className="w-full h-[1px] bg-white absolute top-1/3 -left-1/4 rotate-12 transform scale-150 group-hover:translate-x-10 transition-transform duration-1000"></div>
<div className="w-full h-[1px] bg-white absolute bottom-1/3 -right-1/4 -rotate-12 transform scale-150 group-hover:-translate-x-10 transition-transform duration-1000"></div>
</div>
<div className="relative z-10 max-w-md flex flex-col items-center">
<button className="w-16 h-16 rounded-full border border-zinc-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500 bg-black/50 backdrop-blur-sm text-white">
<iconify-icon className="text-2xl ml-1" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<h3 className="text-2xl md:text-3xl font-serif font-medium tracking-tight text-white mb-3">
                Showreel 2024
              </h3>
<p className="text-sm text-zinc-300 font-light hidden md:block">
                A curation of cinematic framing, generative motion, and precise
                interfaces.
              </p>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-auto py-12 px-6 md:px-12 lg:px-24 border-t border-zinc-900 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex flex-col gap-2">
<a className="text-2xl font-medium tracking-tighter uppercase text-zinc-200" href="#">
            VRTX
          </a>
<div className="text-xs text-zinc-400 font-light uppercase tracking-widest">
            Global Reach. Remote First.
          </div>
</div>
<div className="flex flex-wrap gap-8 md:gap-12 text-xs font-light text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Read.cv</a>
<a className="hover:text-white transition-colors" href="#">Awwwards</a>
</div>
<div className="text-sm text-zinc-400 font-light">
          © 2024. All rights reserved.
        </div>
</div>
</footer>

    </>
  );
}
