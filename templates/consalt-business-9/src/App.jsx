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
      

<div className="px-4 pt-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
<div className="bg-[#062c2b] rounded-[2.5rem] relative overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Contact Background" className="w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
</div>

<nav className="relative z-20 flex items-center justify-between mx-4 mt-6 lg:mx-8 bg-white rounded-full px-6 py-4 shadow-sm">

<div className="flex items-center gap-2">
<i className="text-[#138b82] w-6 h-6" data-lucide="asterisk"></i>
<span className="text-xl tracking-tight font-semibold text-slate-900">
              Révol'H
            </span>
</div>

<div className="hidden lg:flex items-center gap-8">
<a className="text-base text-slate-600 hover:text-slate-900" href="#">
              Accueil
            </a>
<a className="text-base text-slate-600 hover:text-slate-900" href="#">
              À propos
            </a>
<a className="text-base text-slate-600 hover:text-slate-900" href="#">
              Services
            </a>
<a className="text-base text-slate-600 hover:text-slate-900" href="#">
              Contact
            </a>
</div>

<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center bg-[#062c2b] rounded-full px-6 py-3 text-white">
<a className="text-base font-semibold mr-2" href="#">
                Prendre rendez-vous
              </a>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
<button className="lg:hidden p-2 text-slate-600">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<div className="relative z-10 flex flex-col items-center justify-center pt-20 pb-40 px-6 text-center">
<h1 className="text-5xl sm:text-6xl tracking-tight font-semibold text-white mb-4">
            Contact Us
          </h1>
<div className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-300">
<a className="hover:text-white transition-colors" href="#">Home</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="text-white">Contact Us</span>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#138b82]/20 to-transparent pointer-events-none"></div>
</div>
</div>


<div className="bg-white">
<div className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<span className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2 block">
            SEND US EMAIL
          </span>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#062c2b] mb-8">
            Feel free to write
          </h2>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<input className="w-full px-5 py-4 bg-[#f4f7f6] rounded-lg text-sm text-slate-700 outline-none focus:ring-2 focus:ring-[#138b82] placeholder:text-slate-400" placeholder="Your Name" type="text"/>
<input className="w-full px-5 py-4 bg-[#f4f7f6] rounded-lg text-sm text-slate-700 outline-none focus:ring-2 focus:ring-[#138b82] placeholder:text-slate-400" placeholder="Email" type="email"/>
</div>
<input className="w-full px-5 py-4 bg-[#f4f7f6] rounded-lg text-sm text-slate-700 outline-none focus:ring-2 focus:ring-[#138b82] placeholder:text-slate-400" placeholder="Subject" type="text"/>
<textarea className="w-full px-5 py-4 bg-[#f4f7f6] rounded-lg text-sm text-slate-700 outline-none focus:ring-2 focus:ring-[#138b82] placeholder:text-slate-400 resize-none" placeholder="Write a Message" rows="6"></textarea>
<button className="bg-[#062c2b] hover:bg-[#0a423f] transition-colors text-white px-8 py-4 rounded-lg text-sm font-semibold mt-2" type="button">
              SEND MESSAGE
            </button>
</form>
</div>
<div>
<span className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2 block">
            NEED ANY HELP?
          </span>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#062c2b] mb-6">
            Get in touch with us
          </h2>
<p className="text-slate-500 text-sm leading-relaxed mb-10">
            Lorem ipsum is simply free text available dolor sit amet consectetur
            notted adipisicing elit sed do eiusmod tempor incididunt simply
            dolore magna.
          </p>
<div className="space-y-8">
<div className="flex items-center gap-6">
<div className="w-16 h-16 bg-[#062c2b] rounded-lg flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-white" data-lucide="phone"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-[#062c2b] mb-1">
                  Have any question?
                </h4>
<p className="text-sm text-slate-500">Free +88 017 500 500 88</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="w-16 h-16 bg-[#062c2b] rounded-lg flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-white" data-lucide="mail"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-[#062c2b] mb-1">
                  Write email
                </h4>
<p className="text-sm text-slate-500">needhelp@company.com</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="w-16 h-16 bg-[#062c2b] rounded-lg flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-white" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-[#062c2b] mb-1">
                  Visit anytime
                </h4>
<p className="text-sm text-slate-500">
                  66 broklyn golden street. New York
                </p>
</div>
</div>
</div>
</div>
</div>
<div className="w-full h-[500px] bg-slate-200">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528000654!2d-74.14448744573177!3d40.69763123333061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1689682544226!5m2!1sen!2sbd" style={{border: '0', filter: 'grayscale(100%)'}} width="100%"></iframe>
</div>
</div>












<footer className="px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto mb-12">
<div className="bg-[#062c2b] rounded-[2.5rem] pt-20 pb-10 px-10 lg:px-20">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<i className="text-[#138b82] w-6 h-6" data-lucide="asterisk"></i>
<span className="text-xl tracking-tight font-semibold text-white">
                Révol'H
              </span>
</div>
<p className="text-slate-400 text-sm mb-8 leading-relaxed">
              Consultante RH &amp; DRH à temps partagé au service des dirigeants
              de TPE et PME.
            </p>
<div className="flex bg-[#0b3d3a] rounded-full p-1 border border-white/10">
<input className="bg-transparent text-white px-4 py-2 w-full outline-none text-sm placeholder:text-slate-500" placeholder="Votre email professionnel" type="email"/>
<button className="bg-[#138b82] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#0f6e67] transition-colors whitespace-nowrap">
                Contacter
              </button>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Entreprise</h4>
<ul className="space-y-4">
<li>
<a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">
                  À propos
                </a>
</li>
<li>
<a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">
                  Mon parcours
                </a>
</li>
<li>
<a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">
                  L'approche
                </a>
</li>
<li>
<a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Services</h4>
<ul className="space-y-4">
<li>
<a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">
                  Audit &amp; Diagnostic RH
                </a>
</li>
<li>
<a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">
                  Mise en conformité sociale
                </a>
</li>
<li>
<a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">
                  DRH à temps partagé
                </a>
</li>
<li>
<a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">
                  Accompagnement PCRH
                </a>
</li>
<li>
<a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">
                  Bilan de compétences
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Contact</h4>
<ul className="space-y-6">
<li className="flex items-start gap-3">
<div className="bg-white/10 p-2 rounded-full mt-1">
<i className="w-4 h-4 text-[#138b82]" data-lucide="map-pin"></i>
</div>
<span className="text-slate-400 text-sm leading-relaxed">
                  Région Grand Est
                  <br/>
                  54 · 57 · 55 · 88 · 67
                </span>
</li>
<li className="flex items-center gap-3">
<div className="bg-white/10 p-2 rounded-full">
<i className="w-4 h-4 text-[#138b82]" data-lucide="phone"></i>
</div>
<span className="text-slate-400 text-sm">
                  Interventions distanciel
                  <br/>
                  toute la France
                </span>
</li>
<li className="flex items-center gap-3">
<div className="bg-white/10 p-2 rounded-full">
<i className="w-4 h-4 text-[#138b82]" data-lucide="mail"></i>
</div>
<span className="text-slate-400 text-sm">
                  civet.aurelia@outlook.fr
                </span>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-slate-400 text-sm">
            © 2025 Révol'H — Aurélia Civet · Tous droits réservés
          </p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">
              LinkedIn
            </a>
<a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">
              Mentions légales
            </a>
<a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">
              Contact
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
