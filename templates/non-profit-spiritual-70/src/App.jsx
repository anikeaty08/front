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



      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-red-50 border-b border-red-100 px-4 py-3 sm:px-6">
<div className="max-w-6xl mx-auto flex items-center justify-center text-center">
<p className="text-sm font-medium text-red-800 flex items-center gap-2">
<i className="w-4 h-4 shrink-0" data-lucide="alert-triangle"></i>
<span>
            We're not on Facebook, Instagram, X (Twitter) or any other social
            media due to impersonation accounts. If you see an account claiming
            to be us, please let us know.
          </span>
</p>
</div>
</div>

<div className="max-w-6xl mx-auto w-full bg-white shadow-sm border-x border-gray-100 flex-grow flex flex-col">

<header className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-10">
<div className="px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100 text-indigo-600 group-hover:bg-indigo-100 transition-colors">
<i className="w-6 h-6" data-lucide="flower-2"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-gray-900">
              Good Fortune Trust
            </span>
</a>
<nav>
<ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-base font-medium text-gray-500">
<li><a className="text-indigo-600" href="#">Home</a></li>
<li>
<a className="hover:text-gray-900 flex items-center gap-1 transition-colors" href="#">
                  News
                  <i className="w-4 h-4" data-lucide="chevron-down"></i>
</a>
</li>
<li>
<a className="hover:text-gray-900 flex items-center gap-1 transition-colors" href="#">
                  Projects
                  <i className="w-4 h-4" data-lucide="chevron-down"></i>
</a>
</li>
<li>
<a className="hover:text-gray-900 flex items-center gap-1 transition-colors" href="#">
                  Khensur Rinpoche
                  <i className="w-4 h-4" data-lucide="chevron-down"></i>
</a>
</li>
<li>
<a className="hover:text-gray-900 flex items-center gap-1 transition-colors" href="#">
                  Gallery
                  <i className="w-4 h-4" data-lucide="chevron-down"></i>
</a>
</li>
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Donations
                </a>
</li>
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Contact
                </a>
</li>
<li>
<a className="hover:text-gray-900 transition-colors" href="#">
                  Buddhism
                </a>
</li>
</ul>
</nav>
</div>
</header>

<div className="w-full h-48 md:h-72 bg-gray-100 relative overflow-hidden group">
<img alt="Community gathering outdoors" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>

<div className="border-b border-gray-100 bg-gray-50/50 py-8 px-6">
<div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-lg text-base font-medium shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all" href="#">
<span>Go to the TKSL School Page</span>
<i className="w-4 h-4 text-gray-400" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 border border-transparent text-white px-6 py-3 rounded-lg text-base font-medium shadow-sm hover:bg-indigo-700 transition-all" href="#">
<span>Sign up for our newsletter</span>
<i className="w-4 h-4 text-indigo-200" data-lucide="mail"></i>
</a>
</div>
</div>

<main className="flex-grow px-6 py-12 md:py-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

<div className="lg:col-span-8 space-y-8">
<div>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                About the Trust
              </h1>
<div className="prose prose-lg max-w-none text-gray-600 space-y-6">
<p className="text-lg leading-relaxed">
                  The Good Fortune Trust is an initiative of students of
                  <a className="text-indigo-600 hover:underline decoration-indigo-200 underline-offset-4" href="#">
                    Khensur Rinpoche, Geshe Tashi Tsering
                  </a>
                  , a Tibetan lama who has been teaching Western students in
                  south-east Queensland since 1990. It is supported by several
                  hundred sponsors and benefactors around Australia and
                  overseas. Many are Buddhists and students of Khensur Rinpoche,
                  while others may be neither, but have sympathy for the plight
                  of the Tibetan people and wish to help.
                </p>
<p className="text-lg leading-relaxed">
                  The Good Fortune Trust is rebuilding Khangmar monastery, a
                  small and very poor monastery in eastern Tibet, and supporting
                  the nuns in nearby Jhilu Ritrek nunnery. It also supports
                  hundreds of monks studying the traditional monastic curriculum
                  in the Sera Je monastery-in-exile in southern India.
                </p>
<p className="text-lg leading-relaxed">
                  This website has news about the different projects managed by
                  the Trust and well as many beautiful photos taken in remote
                  parts of Tibet. It tries to offer some insight into Tibetan
                  Buddhism - in particular the lives of Tibetan (and Western)
                  monks and nuns - and the vital role that comprehensive study
                  plays in the Gelug-pa tradition.
                </p>
<p className="text-lg leading-relaxed">
                  The Good Fortune Trust is grateful for all the generous
                  support it receives, through both occasional and ongoing
                  donations, and the time cheerfully volunteered by the small
                  team who manage the Trust's activities.
                </p>
</div>
</div>
</div>

<aside className="lg:col-span-4 space-y-10">

<div className="group">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 mb-4 border border-gray-100 shadow-sm relative">
<img alt="Group of people discussing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<p className="text-sm font-medium text-center text-gray-500">
                Khensur Rinpoche, Geshe Tashi Tsering
              </p>
</div>

<div className="w-12 h-px bg-gray-200 mx-auto"></div>

<div className="text-center group">
<a className="inline-flex items-center gap-2 text-base font-medium text-indigo-600 hover:text-indigo-800 mb-4 transition-colors" href="#">
                Introducing Geshe Tsewang Topden
                <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
<div className="aspect-square rounded-xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm relative">
<img alt="People meeting around a table" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</aside>
</div>
</main>

<section className="bg-gray-50 border-t border-gray-100 px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<a className="flex flex-col items-center text-center group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow" href="#">
<div className="w-32 h-32 mb-4 rounded-full overflow-hidden border border-gray-100 bg-gray-100">
<img alt="Volunteers holding hands" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<h3 className="text-base font-semibold tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors">
              Tashi Khangmar Samdrub Ling
            </h3>
<p className="text-sm text-gray-500 mt-1">School of Buddhist Science</p>
</a>

<a className="flex flex-col items-center text-center group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow" href="#">
<div className="w-32 h-32 mb-4 rounded-full overflow-hidden border border-gray-100 bg-gray-100">
<img alt="Community gathering" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<h3 className="text-base font-semibold tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors">
              Geshe Tashi Tsering
            </h3>
</a>

<div className="flex flex-col items-center md:items-end text-center md:text-right p-6">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">
              Contact Us
            </h3>
<div className="space-y-3 text-base text-gray-600">
<p className="flex items-center md:justify-end gap-2">
<i className="w-4 h-4 text-gray-400" data-lucide="phone"></i>
                Ph. 0438 386 223
              </p>
<address className="not-italic flex items-start md:justify-end gap-2">
<i className="w-4 h-4 text-gray-400 mt-1 shrink-0" data-lucide="map-pin"></i>
<span>
                  P.O. Box 1227
                  <br/>
                  Spring Hill, QLD 4004
                  <br/>
                  Australia
                </span>
</address>
</div>
</div>
</div>
</section>

<footer className="border-t border-gray-200 bg-white px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
<p>
          © 2026 Good Fortune Trust. All Rights Reserved.
          <a className="hover:text-gray-900 transition-colors" href="#">Login</a>
          .
        </p>
<p className="flex items-center gap-1">
<i className="w-4 h-4" data-lucide="settings"></i>
          Powered by
          <a className="hover:text-gray-900 transition-colors underline decoration-gray-200 underline-offset-2" href="#">
            concrete5
          </a>
</p>
</footer>
</div>




    </>
  );
}
