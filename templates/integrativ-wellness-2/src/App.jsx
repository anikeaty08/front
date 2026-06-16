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
      

<nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Logo" className="h-10 w-10" src="https://img1.wsimg.com/isteam/ip/0dd32e65-f2c7-44d9-bad2-0bcf5cbe5d69/blob-8496dcd.png/:/rs=w:105,h:105,cg:true,m/cr=w:105,h:105/qt=q:95"/>
<span className="text-lg font-semibold tracking-tighter uppercase">Renew</span>
</div>
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-full hover:bg-emerald-100 transition-all duration-200" href="https://calendly.com/matt-dawndimension/30min">
                Book Consult
            </a>
</div>
</nav>

<section className="relative pt-20 pb-16 overflow-hidden">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium mb-6">
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<span>Thomasville's Premier Integrative Care</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-950 mb-6 leading-[1.1]">
                    Discover Real Relief with Root Cause Solutions
                </h1>
<p className="text-base md:text-lg text-slate-500 mb-10 leading-relaxed font-light">
                    At Renew Integrative Wellness, Dr. Jennifer Bowling leads Thomasville patients on a journey to better health with customized treatments. We blend naturopathic care and bio-identical hormone therapy to tackle root problems.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white text-base font-medium rounded-xl hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-200" href="https://calendly.com/matt-dawndimension/30min">
                        Book Your Free Consultation
                        <iconify-icon className="ml-2 text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="pb-24">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-8">
<span className="text-xs font-semibold tracking-widest text-emerald-600 uppercase">Watch This First</span>
</div>
<div className="vsl-shadow relative aspect-video w-full bg-slate-900 rounded-3xl overflow-hidden group cursor-pointer border border-slate-200">

<div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/5 text-white">
<div className="w-20 h-20 flex items-center justify-center bg-emerald-600 rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>

<img alt="VSL Preview" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>
<div className="mt-6 flex items-center justify-center gap-2 text-slate-500 italic">
<iconify-icon className="text-lg" icon="solar:videocamera-record-linear"></iconify-icon>
<p className="text-sm">A short video from Dr. Bowling. Watch it before you book.</p>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-square rounded-3xl bg-emerald-100 overflow-hidden">
<img alt="Dr. Jennifer Bowling" className="w-full h-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl shadow-xl border border-white max-w-xs">
<p className="text-sm font-medium text-emerald-800">"We don't do temporary fixes. We find the source."</p>
</div>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-950 mb-8">
                        This Isn't Your Average Clinic.
                    </h2>
<div className="space-y-6 text-slate-600 leading-relaxed font-light">
<p>Dr. Jennifer Bowling prioritizes personalized care. She blends conventional and complementary therapies. Naturopathic methods aim for root cause identification. No temporary fixes here.</p>
<p>Our integrative approach suits Thomasville patients. Targeted, whole-person health solutions. Bio-identical hormone therapy is one of our key offerings. Rebalance your system naturally.</p>
</div>
<div className="mt-10 grid grid-cols-2 gap-6">
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Personalized Care</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Root Cause Focus</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-950">
                    Integrated Wellness Services
                </h2>
<p className="text-slate-500 mt-4 font-light">Here's what's available at our Thomasville clinic.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl border border-slate-100 bg-white hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3">Naturopathy</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                        Holistic treatments tailored to individual needs for optimal health and long-term vitality.
                    </p>
</div>

<div className="p-8 rounded-3xl border border-slate-100 bg-white hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:test-tube-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3">Hormone Therapy</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                        Balance hormones naturally with bio-identical replacement options designed for your unique biology.
                    </p>
</div>

<div className="p-8 rounded-3xl border border-slate-100 bg-white hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3">Integrative Medicine</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                        Comprehensive therapies to address root causes and enhance wellness through scientific rigor.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-emerald-950 text-white overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-full opacity-10">
<div className="absolute top-10 left-10 w-64 h-64 bg-emerald-400 rounded-full blur-[100px]"></div>
<div className="absolute bottom-10 right-10 w-64 h-64 bg-emerald-400 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What Patients Are Saying.</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
<div className="flex text-emerald-400 mb-4">
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-light leading-relaxed mb-6 italic">"I feel like I have my life back. Dr. Bowling really listens and doesn't just push meds."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center text-[10px] font-semibold">P</div>
<span className="text-xs font-medium text-emerald-200">Patient, Thomasville NC</span>
</div>
</div>

<div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
<div className="flex text-emerald-400 mb-4">
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-light leading-relaxed mb-6 italic">"Dr. Bowling is dedicated to finding the root cause. I finally have real answers."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center text-[10px] font-semibold">P</div>
<span className="text-xs font-medium text-emerald-200">Patient, Thomasville NC</span>
</div>
</div>

<div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
<div className="flex text-emerald-400 mb-4">
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-light leading-relaxed mb-6 italic">"This integrative approach has significantly improved my quality of life."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center text-[10px] font-semibold">P</div>
<span className="text-xs font-medium text-emerald-200">Patient, Thomasville NC</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-950 mb-6">
                Ready to Feel Like Yourself Again?
            </h2>
<p className="text-base text-slate-500 mb-10 font-light">
                Book your consultation today. The team at Renew Integrative Wellness will take it from there.
            </p>
<a className="group relative inline-flex items-center justify-center px-10 py-5 bg-emerald-600 text-white text-lg font-medium rounded-2xl hover:bg-emerald-700 transition-all duration-300" href="https://calendly.com/matt-dawndimension/30min">
                Book Your Consult
                <iconify-icon className="ml-3 text-xl" icon="solar:calendar-linear"></iconify-icon>
</a>
</div>
</section>

<footer className="py-12 border-t border-slate-100">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<img alt="Logo" className="h-6 w-6 opacity-80" src="https://img1.wsimg.com/isteam/ip/0dd32e65-f2c7-44d9-bad2-0bcf5cbe5d69/blob-8496dcd.png/:/rs=w:105,h:105,cg:true,m/cr=w:105,h:105/qt=q:95"/>
<span className="text-xs font-medium tracking-tight uppercase text-slate-500">Renew Integrative Wellness</span>
</div>
<div className="text-xs text-slate-400 font-light">
                    Renew Integrative Wellness — Thomasville, NC
                </div>
</div>
</div>
</footer>

    </>
  );
}
