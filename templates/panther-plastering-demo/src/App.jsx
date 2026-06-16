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
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-100 transition-all duration-300">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
<a aria-label="Home" className="flex items-center gap-3 group" href="#">

<span className="text-lg font-semibold tracking-tighter uppercase text-zinc-900 leading-none">
            Panther
            <br/>
            Plastering
          </span>
</a>
<div className="flex items-center gap-3">
<a aria-label="Call" className="w-10 h-10 flex items-center justify-center transition-colors duration-300 border bg-zinc-900 hover:bg-black text-white border-transparent rounded-md" href="tel:0438883631">
<iconify-icon className="text-xl" icon="solar:phone-bold" style={{}}></iconify-icon>
</a>
<a aria-label="Email" className="w-10 h-10 flex items-center justify-center transition-colors duration-300 border bg-zinc-900 hover:bg-black text-white border-transparent rounded-md" href="mailto:pantherplastering@outlook.com">
<iconify-icon className="text-xl" icon="solar:letter-bold" style={{}}></iconify-icon>
</a>
</div>
</div>
</header>
<main className="">

<section className="relative pt-48 pb-24 lg:pt-56 lg:pb-32 px-6 lg:px-12">
<div className="max-w-[88rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
<div className="lg:col-span-5 relative z-10">
<h1 className="text-5xl lg:text-7xl font-medium tracking-tighter leading-[1.05] text-zinc-900">
              Crafting Flawless Spaces.
            </h1>
<p className="mt-8 text-base text-zinc-500 leading-relaxed max-w-md">
              Brisbane’s premier plastering experts for high-end residential and
              commercial projects. Precision in every shadowline.
            </p>
<div className="mt-10 lg:mt-12">
<a className="inline-flex items-center justify-center bg-zinc-900 text-white px-7 py-3.5 rounded-md text-sm font-medium hover:bg-black transition-colors duration-300 w-full sm:w-auto text-center" href="#contact">
                Get A Free Quote
              </a>
</div>
</div>
<div className="lg:col-span-7 relative w-full aspect-[4/3] lg:aspect-[16/11] rounded-xl overflow-hidden bg-zinc-100">

<div className="absolute inset-0 bg-zinc-100 animate-pulse"></div>
<img alt="Worker Plastering Wall with Protective Gear" className="absolute inset-0 w-full h-full object-cover brand-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d28bd40-dd34-4820-9010-752e6e148505_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-32 lg:py-40 bg-zinc-50 px-6 lg:px-12 border-y border-zinc-100">
<div className="max-w-[88rem] mx-auto">
<div className="flex items-center justify-center mb-16">
<h2 className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
              01 / Craftsmanship in Motion
            </h2>
</div>
<div className="relative w-full aspect-video bg-zinc-900 rounded-xl overflow-hidden group cursor-pointer ring-1 ring-black/5 shadow-2xl shadow-zinc-200/40">
<img alt="Cinematic plastering process" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out brand-img" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:bg-black/10 transition-colors duration-500"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-500 ease-out">
<iconify-icon className="text-4xl" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<p className="text-xl lg:text-2xl font-medium tracking-tight text-zinc-800 text-center mt-16 max-w-3xl mx-auto leading-relaxed">
            “We don’t just smooth walls; we set the stage for architectural
            beauty.”
          </p>
</div>
</section>

<section className="py-32 lg:py-40 px-6 lg:px-12 bg-white">
<div className="max-w-[88rem] mx-auto">
<h2 className="text-xs font-semibold tracking-widest text-zinc-400 mb-16 uppercase">
            02 / Our Services
          </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-20">
<div className="group cursor-default">
<div className="aspect-[3/2] rounded-xl overflow-hidden bg-zinc-50 mb-8 ring-1 ring-black/5">
<img alt="Premium Residential Plastering" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brand-img" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900">
                Premium Residential
              </h3>
<p className="text-sm text-zinc-500 mt-4 leading-relaxed max-w-md">
                New builds, architectural extensions, and luxury renovations
                delivered with microscopic attention to detail.
              </p>
</div>
<div className="group cursor-default">
<div className="aspect-[3/2] rounded-xl overflow-hidden bg-zinc-50 mb-8 ring-1 ring-black/5">
<img alt="Commercial Fitting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brand-img" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900">
                Commercial Fitting
              </h3>
<p className="text-sm text-zinc-500 mt-4 leading-relaxed max-w-md">
                Office partitions, retail fit-outs, and high-rise developments
                operating on strict timelines and standard codes.
              </p>
</div>
<div className="group cursor-default">
<div className="aspect-[3/2] rounded-xl overflow-hidden bg-zinc-50 mb-8 ring-1 ring-black/5">
<img alt="Repairs and Restorations" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brand-img" src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900">
                Repairs &amp; Restorations
              </h3>
<p className="text-sm text-zinc-500 mt-4 leading-relaxed max-w-md">
                Seamless crack repairs, water damage restoration, and ceiling
                sagging fixes that blend perfectly with existing structures.
              </p>
</div>
<div className="group cursor-default">
<div className="aspect-[3/2] rounded-xl overflow-hidden bg-zinc-50 mb-8 ring-1 ring-black/5">
<img alt="Architectural Finishes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brand-img" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900">
                Architectural Finishes
              </h3>
<p className="text-sm text-zinc-500 mt-4 leading-relaxed max-w-md">
                Shadowline junctions, ornamental cornices, and modern
                square-setting for high-end, gallery-like aesthetics.
              </p>
</div>
</div>
</div>
</section>

<section className="py-32 lg:py-40 bg-zinc-50 px-6 lg:px-12 border-t border-zinc-100">
<div className="max-w-[88rem] mx-auto">
<h2 className="text-xs font-semibold tracking-widest text-zinc-400 mb-16 uppercase">
            03 / Selected Projects
          </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 aspect-[16/10] md:aspect-auto md:h-[32rem] bg-zinc-200 rounded-xl overflow-hidden ring-1 ring-black/5 group">
<img alt="Modern living space" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brand-img" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>

<div className="aspect-square md:aspect-auto md:h-[32rem] bg-zinc-200 rounded-xl overflow-hidden ring-1 ring-black/5 group">
<img alt="Detailed ceiling corner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brand-img" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="aspect-square md:aspect-auto md:h-[32rem] bg-zinc-200 rounded-xl overflow-hidden ring-1 ring-black/5 group">
<img alt="Smooth wall finish" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brand-img" src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="lg:col-span-2 aspect-[16/10] md:aspect-auto md:h-[32rem] bg-zinc-200 rounded-xl overflow-hidden ring-1 ring-black/5 group">
<img alt="Minimalist hallway" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brand-img" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</div>
</section>

<section className="py-32 lg:py-40 bg-white px-6 lg:px-12">
<div className="max-w-[88rem] mx-auto">
<h2 className="text-xs font-semibold tracking-widest text-zinc-400 mb-16 lg:mb-24 uppercase">
            04 / The Panther Standard
          </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
<div className="relative">
<div className="text-6xl lg:text-7xl font-medium tracking-tighter text-zinc-100 mb-8 selection:bg-transparent">
                01
              </div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">
                3+ Years of Excellence
              </h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
                A proven track record of delivering flawless finishes across
                Brisbane, building long-term trust with top-tier builders.
              </p>
</div>
<div className="relative">
<div className="text-6xl lg:text-7xl font-medium tracking-tighter text-zinc-100 mb-8 selection:bg-transparent">
                02
              </div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">
                Uncompromising Quality
              </h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
                Using premium materials paired with meticulous workmanship. We
                refuse to cut corners, ensuring longevity in every project.
              </p>
</div>
<div className="relative">
<div className="text-6xl lg:text-7xl font-medium tracking-tighter text-zinc-100 mb-8 selection:bg-transparent">
                03
              </div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">
                On-Time Delivery
              </h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
                Reliable, transparent scheduling. We respect your timeline and
                coordinate seamlessly with other trades to keep your project
                moving.
              </p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#09090b] pt-32 lg:pt-40 pb-12 px-6 lg:px-12 text-zinc-400 selection:bg-white/20 selection:text-white" id="contact">
<div className="max-w-[88rem] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-16 items-start">
<div className="">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.05] text-white max-w-lg">
              Ready to start your project?
            </h2>
<p className="mt-6 text-sm text-zinc-500 max-w-sm leading-relaxed">
              Leave your details below and our team will be in touch within 24
              hours to discuss your blueprint.
            </p>
</div>
<div className="w-full max-w-md lg:ml-auto">

<form className="space-y-8" onsubmit="event.preventDefault(); window.location.href='mailto:pantherplastering@outlook.com?subject=Project%20Request&amp;body=Name:%20' + encodeURIComponent(document.getElementById('name').value) + '%0D%0APhone:%20' + encodeURIComponent(document.getElementById('phone').value) + '%0D%0AProject%20Details:%20' + encodeURIComponent(document.getElementById('details').value);">
<div className="relative group">
<input className="peer block w-full appearance-none bg-transparent border-0 border-b border-zinc-800 px-0 py-3 text-sm text-white focus:outline-none focus:ring-0 focus:border-white transition-colors duration-300" id="name" name="name" placeholder=" " required="" type="text"/>
<label className="absolute top-3 pointer-events-none origin-[0] -translate-y-6 scale-[0.85] transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-[0.85] text-zinc-400 peer-focus:text-white" htmlFor="name">
                  Your Name
                </label>
</div>
<div className="relative group">
<input className="peer block w-full appearance-none bg-transparent border-0 border-b border-zinc-800 px-0 py-3 text-sm text-white focus:outline-none focus:ring-0 focus:border-white transition-colors duration-300" id="phone" name="phone" placeholder=" " required="" type="tel"/>
<label className="absolute top-3 pointer-events-none origin-[0] -translate-y-6 scale-[0.85] transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-[0.85] text-zinc-400 peer-focus:text-white" htmlFor="phone">
                  Phone Number
                </label>
</div>
<div className="relative group">
<input className="peer block w-full appearance-none bg-transparent border-0 border-b border-zinc-800 px-0 py-3 text-sm text-white focus:outline-none focus:ring-0 focus:border-white transition-colors duration-300" id="details" name="details" placeholder=" " type="text"/>
<label className="absolute top-3 pointer-events-none origin-[0] -translate-y-6 scale-[0.85] transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-[0.85] text-zinc-400 peer-focus:text-white" htmlFor="details">
                  Project Details
                </label>
</div>
<button className="mt-12 w-full bg-white text-zinc-900 px-6 py-4 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors duration-300 flex justify-center items-center gap-2" type="submit">
                Submit Request
                <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</form>
</div>
</div>

<div className="mt-32 lg:mt-48 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-xs">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-base text-zinc-500" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Brisbane &amp; Surrounding Areas</span>
</div>
<div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
<a className="flex items-center gap-2.5 hover:text-white transition-colors duration-300 group" href="tel:0438883631">
<iconify-icon className="text-base text-zinc-500 group-hover:text-white transition-colors" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              0438 883 631
            </a>
<a className="flex items-center gap-2.5 hover:text-white transition-colors duration-300 group" href="mailto:pantherplastering@outlook.com">
<iconify-icon className="text-base text-zinc-500 group-hover:text-white transition-colors" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              pantherplastering@outlook.com
            </a>
</div>
<div className="tracking-tighter font-semibold text-white uppercase text-sm">
            Panther plastering
          </div>
</div>
</div>
</footer>

    </>
  );
}
