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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[40rem] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="absolute top-1/4 right-0 w-96 h-96 bg-[#8B2323]/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B1120] blur-[100px] rounded-full pointer-events-none -z-10"></div>

<nav className="fixed top-0 w-full border-b border-white/[0.05] bg-[#080C16]/80 backdrop-blur-md z-50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-slate-100 flex items-center gap-2" href="#">
<span className="text-[#D4AF37]">Z</span>OON
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-slate-200 transition-colors" href="#about">About</a>
<a className="hover:text-slate-200 transition-colors" href="#initiatives">Initiatives</a>
</div>
<a className="text-xs md:text-sm font-medium bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.05] text-slate-200 px-4 py-2 rounded-full transition-all flex items-center gap-2" href="#register">
                Join Now
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</nav>
<main className="pt-24 md:pt-32">

<section className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-medium mb-8">
<iconify-icon icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
                Applications for 2024 are open
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-50 mb-6 max-w-4xl leading-tight">
                Shape the narrative of <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-[#D4AF37] to-[#8B2323]">Kashmir's tomorrow.</span>
</h1>
<p className="text-base md:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
                Zoon Club is an exclusive collective of storytellers, creatives, and visionaries. We are building a community dedicated to art, culture, and positive social impact in the valley.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#D4AF37] hover:bg-[#C5A028] text-[#080C16] text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)]" href="#register">
                    Apply for Membership
                </a>
<a className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] text-slate-200 text-sm font-medium transition-colors flex items-center justify-center gap-2" href="#about">
                    Learn More
                </a>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/[0.05]" id="about">
<div className="mb-16 md:text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-50 mb-4">Why join the club?</h2>
<p className="text-sm md:text-base text-slate-400 max-w-2xl md:mx-auto">A multidisciplinary platform designed to amplify your craft and connect you with like-minded individuals.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-200 mb-2 tracking-tight">Creative Expression</h3>
<p className="text-sm text-slate-400 leading-relaxed">Whether it's writing, design, or film, find the resources and audience to bring your visions to life.</p>
</div>

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-[#8B2323]/10 flex items-center justify-center text-[#8B2323] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-200 mb-2 tracking-tight">Cultural Heritage</h3>
<p className="text-sm text-slate-400 leading-relaxed">Rooted in the essence of Chinar, we aim to preserve and promote the rich traditions of Kashmir.</p>
</div>

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-200 mb-2 tracking-tight">Network &amp; Grow</h3>
<p className="text-sm text-slate-400 leading-relaxed">Collaborate with fellow volunteers, build your portfolio, and make a tangible impact in society.</p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24" id="register">
<div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">

<div className="lg:w-2/5 p-10 lg:p-14 bg-gradient-to-br from-white/[0.03] to-transparent border-r border-white/[0.05] relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[80px] rounded-full pointer-events-none"></div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-50 mb-4">Begin Your Journey</h2>
<p className="text-sm text-slate-400 mb-8 leading-relaxed">Fill out the application form to join Zoon Club. We review applications on a rolling basis and will reach out to selected candidates.</p>
<div className="space-y-6">
<div className="flex items-start gap-4 text-sm text-slate-300">
<iconify-icon className="text-lg text-[#D4AF37] mt-0.5" icon="solar:mailbox-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="font-medium text-slate-200">Direct Contact</p>
<p className="text-slate-500 mt-1">sajadiffam57@gmail.com</p>
</div>
</div>
<div className="flex items-start gap-4 text-sm text-slate-300">
<iconify-icon className="text-lg text-[#D4AF37] mt-0.5" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="font-medium text-slate-200">Location</p>
<p className="text-slate-500 mt-1">Srinagar, Kashmir</p>
</div>
</div>
</div>
</div>

<div className="lg:w-3/5 p-10 lg:p-14">

<form action="https://formsubmit.co/sajadiffam57@gmail.com" className="space-y-6" method="POST">

<input name="_honey" style={{display: 'none'}} type="text"/>

<input name="_captcha" type="hidden" value="false"/>

<input name="_subject" type="hidden" value="New Zoon Club Application!"/>

<input name="_template" type="hidden" value="box"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="block text-xs font-medium text-slate-300" htmlFor="name">Full Name</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full pl-10 pr-4 py-2.5 bg-[#080C16] border border-white/[0.1] rounded-lg text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50 transition-all" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
</div>

<div className="space-y-2">
<label className="block text-xs font-medium text-slate-300" htmlFor="phone">Phone Number</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full pl-10 pr-4 py-2.5 bg-[#080C16] border border-white/[0.1] rounded-lg text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50 transition-all" id="phone" name="phone" placeholder="+91 00000 00000" required="" type="tel"/>
</div>
</div>
</div>

<div className="space-y-2">
<label className="block text-xs font-medium text-slate-300" htmlFor="email">Email Address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full pl-10 pr-4 py-2.5 bg-[#080C16] border border-white/[0.1] rounded-lg text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50 transition-all" id="email" name="email" placeholder="john@example.com" required="" type="email"/>
</div>
</div>

<div className="space-y-2">
<label className="block text-xs font-medium text-slate-300" htmlFor="role">Desired Role</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 z-10">
<iconify-icon icon="solar:briefcase-linear" strokeWidth="1.5"></iconify-icon>
</div>
<select className="w-full pl-10 pr-10 py-2.5 bg-[#080C16] border border-white/[0.1] rounded-lg text-sm text-slate-200 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50 transition-all appearance-none cursor-pointer" id="role" name="role" required="">
<option className="text-slate-600" disabled="" selected="" value="">Select an area of interest</option>
<option className="bg-[#0B1120]" value="General Volunteer">General Volunteer</option>
<option className="bg-[#0B1120]" value="Social Media">Social Media</option>
<option className="bg-[#0B1120]" value="Creative Writing">Creative Writing</option>
<option className="bg-[#0B1120]" value="Videography">Videography</option>
<option className="bg-[#0B1120]" value="Cinematography">Cinematography</option>
<option className="bg-[#0B1120]" value="Graphic Design">Graphic Design</option>
</select>

<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-500 group-hover:text-[#D4AF37] transition-colors">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<button className="w-full py-3 mt-4 rounded-lg bg-[#D4AF37] hover:bg-[#C5A028] text-[#080C16] text-sm font-semibold transition-all flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]" type="submit">
                            Submit Application
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:plain-2-linear" strokeWidth="1.5"></iconify-icon>
</button>
<p className="text-center text-xs text-slate-500 mt-4">
                            By submitting, you agree to our community guidelines.
                        </p>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/[0.05] mt-12 py-8 text-center">
<div className="text-lg font-semibold tracking-tighter text-slate-100 mb-2 text-[#D4AF37]/50">Z O O N</div>
<p className="text-xs text-slate-600">© 2024 Zoon Club Kashmir. All rights reserved.</p>
</footer>

    </>
  );
}
