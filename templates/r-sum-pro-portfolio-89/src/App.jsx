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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-xl font-semibold tracking-tight text-gray-900" href="#">résumé<span className="text-gray-400 font-medium">pro</span></a>
<div className="hidden md:flex gap-8 text-base font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#about">About</a>
<a className="hover:text-gray-900 transition-colors" href="#services">Services</a>
<a className="hover:text-gray-900 transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-gray-900 transition-colors" href="#pricing">Pricing</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors" href="#contact">
                Contact Me
            </a>
<button className="md:hidden text-gray-500">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center">
<p className="text-lg font-medium text-gray-500 mb-4 tracking-tight">I am a professional</p>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-8 leading-tight">
                Building great things <br className="hidden md:block"/>for the modern web.
            </h1>
<p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                A minimalist and highly customizable template designed to showcase your work, skills, and experience with absolute clarity.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all w-full sm:w-auto" href="#portfolio">
                    Check it out
                    <i className="ml-2 w-4 h-4" data-lucide="arrow-down" strokeWidth="1.5"></i>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all w-full sm:w-auto" href="#contact">
                    Get in touch
                </a>
</div>
</div>
</header>

<section className="py-24 bg-gray-50 border-t border-gray-100" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">what I do</h2>
<p className="text-lg text-gray-500 max-w-2xl mx-auto">Core services and offerings tailored to your needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
<i className="text-gray-900" data-lucide="target" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">1st Title</h3>
<p className="text-base text-gray-500 mb-6 leading-relaxed">
                        Crebitrate tunica die et armatis eum et nihil muros mandato obscuro. Polam prope indumentis.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors group" href="#">
                        Learn more <i className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
<i className="text-gray-900" data-lucide="play-square" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">2nd Title</h3>
<p className="text-base text-gray-500 mb-6 leading-relaxed">
                        Miaci celeri non non quicquid si hostes rapacium vastabant nec tamen ultro celeri sinmo vantur.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors group" href="#">
                        Learn more <i className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
<i className="text-gray-900" data-lucide="search" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">3rd Title</h3>
<p className="text-base text-gray-500 mb-6 leading-relaxed">
                        Laeva successoria Euphratis dextra cum limes cognomentum regna porrigitur ut efficaciae.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors group" href="#">
                        Learn more <i className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white" id="about">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-white">who I am</h2>
<p className="text-lg text-gray-400 mb-6 leading-relaxed">
                    This is the "About Me" sample section, here you will write information about yourself or your business.
                </p>
<p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    With the inline rich-text editor in edit mode, you can edit this text, add fonts, style italic, font-medium type, larger or smaller characters, images &amp; links. People will get to know you better if your message is clear and straight forward.
                </p>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 transition-colors" href="#">
                    See my story
                </a>
</div>
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
<img alt="Workspace" className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">I got the skills</h2>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-100 pb-20 mb-20">
<div className="text-center">
<div className="text-5xl font-semibold tracking-tight text-gray-900 mb-2">65<span className="text-2xl text-gray-400">%</span></div>
<div className="text-base font-medium text-gray-500 uppercase tracking-widest">Football</div>
</div>
<div className="text-center">
<div className="text-5xl font-semibold tracking-tight text-gray-900 mb-2">79<span className="text-2xl text-gray-400">%</span></div>
<div className="text-base font-medium text-gray-500 uppercase tracking-widest">Wrestling</div>
</div>
<div className="text-center">
<div className="text-5xl font-semibold tracking-tight text-gray-900 mb-2">83<span className="text-2xl text-gray-400">%</span></div>
<div className="text-base font-medium text-gray-500 uppercase tracking-widest">Tennis</div>
</div>
<div className="text-center">
<div className="text-5xl font-semibold tracking-tight text-gray-900 mb-2">95<span className="text-2xl text-gray-400">%</span></div>
<div className="text-base font-medium text-gray-500 uppercase tracking-widest">Jogging</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8">more skills</h3>
<div className="space-y-6">
<div>
<div className="flex justify-between mb-2">
<span className="text-base font-medium text-gray-600">Volley ball</span>
<span className="text-base text-gray-400">65%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-gray-900 h-2 rounded-full" style={{width: '65%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-base font-medium text-gray-600">Swimming</span>
<span className="text-base text-gray-400">80%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-gray-900 h-2 rounded-full" style={{width: '80%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-base font-medium text-gray-600">Dancing</span>
<span className="text-base text-gray-400">90%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-gray-900 h-2 rounded-full" style={{width: '90%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-base font-medium text-gray-600">Baby golf</span>
<span className="text-base text-gray-400">75%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-gray-900 h-2 rounded-full" style={{width: '75%'}}></div>
</div>
</div>
</div>
</div>
<div className="lg:pl-12 lg:border-l lg:border-gray-100">
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">curriculum vitae</h3>
<p className="text-lg text-gray-500 mb-8 leading-relaxed">
                        Blah blah blah... lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors" href="#">
<i className="mr-2 w-4 h-4" data-lucide="download" strokeWidth="1.5"></i> Download CV
                        </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors" href="#">
                            Hire me
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">Portfolio</h2>
<p className="text-lg text-gray-400">some fine art</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">

<a className="group relative block aspect-square overflow-hidden bg-gray-800" href="#">
<img alt="Random" className="object-cover w-full h-full opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">random</h3>
<p className="text-base text-gray-300">Crebitrate tunica mandato obscuro.</p>
</div>
</a>

<a className="group relative block aspect-square overflow-hidden bg-gray-800" href="#">
<img alt="Collections" className="object-cover w-full h-full opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">collections</h3>
<p className="text-base text-gray-300">Miaci vastabant nec tamen ultro.</p>
</div>
</a>

<a className="group relative block aspect-square overflow-hidden bg-gray-800" href="#">
<img alt="Pop-ups" className="object-cover w-full h-full opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">pop-ups</h3>
<p className="text-base text-gray-300">Retentabant virtutum humanitatis.</p>
</div>
</a>

<a className="group relative block aspect-square overflow-hidden bg-gray-800" href="#">
<img alt="Album one" className="object-cover w-full h-full opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Album one</h3>
</div>
</a>

<a className="group relative block aspect-square overflow-hidden bg-gray-800" href="#">
<img alt="Album two" className="object-cover w-full h-full opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Album two</h3>
</div>
</a>

<a className="group relative block aspect-square overflow-hidden bg-gray-800" href="#">
<img alt="Album three" className="object-cover w-full h-full opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Album three</h3>
</div>
</a>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 transition-colors" href="#">
                    See all projects
                </a>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-100">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">Testimonials</h2>
<p className="text-lg text-gray-500">customers say ..</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">

<div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 text-center shadow-sm">
<img alt="Avatar" className="w-16 h-16 rounded-full mx-auto mb-6 ring-4 ring-gray-50" src="https://i.pravatar.cc/150?img=11"/>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">"Beautiful theme, excellent support"</h3>
<div className="flex justify-center gap-1 mb-6">
<i className="w-5 h-5 text-gray-900 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-gray-900 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-gray-900 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-gray-900 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-gray-900 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base text-gray-500 mb-6 italic">
                        "This theme is beautifully made and is very customizable. The author was very helpful with support questions. Highly recommended!"
                    </p>
<div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Krip</div>
</div>

<div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 text-center shadow-sm">
<img alt="Avatar" className="w-16 h-16 rounded-full mx-auto mb-6 ring-4 ring-gray-50" src="https://i.pravatar.cc/150?img=68"/>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">"Great Support!"</h3>
<div className="flex justify-center gap-1 mb-6">
<i className="w-5 h-5 text-gray-900 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-gray-900 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-gray-900 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-gray-900 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-gray-200 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base text-gray-500 mb-6 italic">
                        "Responded immediately to a problem. Super supportive and dedicated to making sure I was happy with the result. Highly recommend!"
                    </p>
<div className="text-sm font-medium text-gray-400 uppercase tracking-widest">lschlosberg497</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-8">
<div className="w-2 h-2 rounded-full border border-gray-400"></div>
<div className="w-2 h-2 rounded-full bg-gray-900"></div>
<div className="w-2 h-2 rounded-full bg-gray-900"></div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">prices</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:border-gray-300 transition-colors flex flex-col">
<div className="w-16 h-16 mx-auto rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
<i className="w-8 h-8 text-gray-900" data-lucide="download" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">1st item</h3>
<div className="text-base font-medium text-green-600 mb-6 uppercase tracking-wider">Free</div>
<p className="text-base text-gray-500 mb-8 flex-grow">
                        Cognomentum regna porrigitur eum efficaciae crebitrate tunica dia.
                    </p>
<button className="w-full py-3 px-6 text-base font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                        Get Started
                    </button>
</div>

<div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 text-center shadow-xl flex flex-col relative transform md:-translate-y-4">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 rounded-t-2xl"></div>
<div className="w-16 h-16 mx-auto rounded-2xl bg-gray-800 flex items-center justify-center mb-6 border border-gray-700">
<i className="w-8 h-8 text-white" data-lucide="gift" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">2nd item</h3>
<div className="text-base font-medium text-white mb-6">€15,00</div>
<p className="text-base text-gray-400 mb-8 flex-grow">
                        Virtutum humanitatis dubitatur ingenuos dubitatur miaci celeri.
                    </p>
<button className="w-full py-3 px-6 text-base font-medium text-gray-900 bg-white hover:bg-gray-100 rounded-lg transition-colors">
                        Order Now
                    </button>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:border-gray-300 transition-colors flex flex-col">
<div className="w-16 h-16 mx-auto rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
<i className="w-8 h-8 text-gray-900" data-lucide="diamond" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">3rd item</h3>
<div className="mb-6 flex flex-col items-center">
<span className="text-sm text-gray-400 line-through">€75,00 / h</span>
<span className="text-base font-medium text-green-600">€45,00 / h</span>
</div>
<p className="text-base text-gray-500 mb-8 flex-grow">
                        Vastabant nec tamen ultro celeri sinmo celeri retentabant dami.
                    </p>
<button className="w-full py-3 px-6 text-base font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                        Order Now
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100" id="contact">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">Contacts</h2>
<p className="text-lg text-gray-500">and subtitle here</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
<div>
<div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center mb-4 border border-gray-200">
<i className="w-5 h-5 text-gray-900" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Telephone</h3>
<p className="text-base text-gray-500">+0 (1) 2 34 56 78</p>
</div>
<div>
<div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center mb-4 border border-gray-200">
<i className="w-5 h-5 text-gray-900" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Openings</h3>
<p className="text-base text-gray-500">Monday - Friday: 9am - 6pm<br/>Saturday: 9am - 2pm<br/>Sunday: Closed</p>
</div>
<div>
<div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center mb-4 border border-gray-200">
<i className="w-5 h-5 text-gray-900" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Address</h3>
<p className="text-base text-gray-500">10 rue de Example<br/>75006 Paris<br/>France</p>
</div>
<div>
<div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center mb-4 border border-gray-200">
<i className="w-5 h-5 text-gray-900" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">E-mail</h3>
<a className="text-base text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-4 decoration-gray-300" href="mailto:your@email.here">your@email.here</a>
</div>
</div>
</div>
</section>

<footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
<div className="text-center md:text-right">
<p className="text-sm mb-1">a footer phrase goes here</p>
<p className="text-sm">and subtitle here</p>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center">
<p>© 2024 Résumé Pro. All rights reserved.</p>
<p className="mt-2 md:mt-0">Designed with simplicity.</p>
</div>
</footer>




    </>
  );
}
