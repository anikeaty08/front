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



                        var d = document,
                            w = "https://tally.so/widgets/embed.js",
                            v = function () {
                                if (typeof Tally !== "undefined") {
                                    Tally.loadEmbeds();
                                } else {
                                    d.querySelectorAll("iframe[data-tally-src]:not([src])")
                                        .forEach(function (e) {
                                            e.src = e.dataset.tallySrc;
                                        });
                                }
                            };
                    
                        if (typeof Tally !== "undefined") {
                            v();
                        } else if (d.querySelector('script[src="' + w + '"]') == null) {
                            var s = d.createElement("script");
                            s.src = w;
                            s.onload = v;
                            s.onerror = v;
                            d.body.appendChild(s);
                        }
                    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[50%] bg-indigo-600/5 blur-[120px] rounded-full"></div>

<div className="absolute top-[20%] left-[10%] w-px h-32 bg-green-500/10 blur-[2px]"></div>
<div className="absolute top-[25%] left-[10%] w-1 h-16 bg-green-500/20 blur-[1px] -translate-x-[1.5px]"></div>
<div className="absolute top-[40%] right-[15%] w-px h-24 bg-red-500/10 blur-[2px]"></div>
<div className="absolute top-[42%] right-[15%] w-1 h-12 bg-red-500/20 blur-[1px] -translate-x-[1.5px]"></div>
</div>

<nav className="relative z-10 w-full border-b border-white/5 bg-zinc-950/50 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="uppercase bg-center text-2xl font-semibold italic text-zinc-100/0 tracking-normal bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87e1068b-81a6-4648-98e3-8117559ddc49_320w.jpg)] bg-cover scale-150">AITJ</span>
</div>
</div>
</nav>

<main className="flex-grow relative z-10 flex flex-col">

<section className="pt-32 pb-24 px-6 relative flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-xs font-medium mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                Version 2.0 Early Access
            </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 mb-6 leading-tight">
                AI Trading Journal
            </h1>
<p className="text-lg md:text-xl font-normal text-zinc-400 max-w-2xl tracking-tight mb-4">
                Your trading journal is the bridge between gambling and growth.
            </p>
<p className="text-sm font-normal text-zinc-500 mb-10">
                Receive your personalized trading journal update every day at 9PM.
            </p>
<div className="flex w-full sm:w-auto items-center justify-center">
<button className="w-full sm:w-auto inline-flex items-center justify-center h-11 px-8 rounded-full bg-zinc-100 text-zinc-950 text-sm font-medium hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-950" data-tally-auto-close="0" data-tally-hide-title="1" data-tally-layout="modal" data-tally-open="1AKE4L" role="button">
    Start Journaling
</button>

</div>
</section>

<section className="border-t border-white/5 bg-zinc-950/30 py-24 px-6 relative">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="group p-8 rounded-3xl bg-zinc-900/20 border border-white/5 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-300 flex flex-col">
<div className="flex group-hover:text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all duration-300 text-zinc-400 bg-zinc-800/30 w-10 h-10 border-white/5 border rounded-xl mb-6 items-center justify-center">
<iconify-icon className="text-xl" icon="solar:crosshair-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-xs" height="12" icon="solar:chart-outline" style={{strokeWidth: '1.5', color: 'rgb(113, 113, 122)'}} width="12"></iconify-icon></div>
<h3 className="text-base font-medium tracking-tight text-zinc-100 mb-3">Track with precision</h3>
<p className="text-sm font-normal text-zinc-400 leading-relaxed">
                            Log every trade seamlessly. Our system captures the nuances of your entries and exits to build a comprehensive data set.
                        </p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/20 border border-white/5 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-300 flex flex-col">
<div className="w-10 h-10 rounded-xl bg-zinc-800/30 border border-white/5 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:graph-down-new-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-100 mb-3">Identify patterns</h3>
<p className="text-sm font-normal text-zinc-400 leading-relaxed">
                            Discover hidden correlations between your mood, time of day, and profitability. Stop letting emotions dictate your equity curve.
                        </p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-900/20 border border-white/5 backdrop-blur-sm hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-300 flex flex-col">
<div className="w-10 h-10 rounded-xl bg-zinc-800/30 border border-white/5 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-100 mb-3">AI-powered insights</h3>
<p className="text-sm font-normal text-zinc-400 leading-relaxed">
                            Improve consistency with actionable intelligence. Our engine analyzes your history to suggest tailored rules for your specific edge.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-4xl mx-auto">
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-zinc-900/40 to-zinc-900/10 border border-white/5 p-8 md:p-16 text-center group">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-white/5 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(79,70,229,0.1)] group-hover:shadow-[0_0_40px_rgba(79,70,229,0.2)] transition-shadow duration-500">
<iconify-icon className="text-2xl text-indigo-400" icon="solar:alarm-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-zinc-100 mb-4">
                            The 9PM Daily Review
                        </h2>
<p className="text-sm md:text-base font-normal text-zinc-400 max-w-lg mx-auto leading-relaxed">
                            Discipline isn't built during market hours; it's built in the review. Get a comprehensive, AI-summarized breakdown of your trading day delivered straight to your inbox exactly when the dust settles.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/5 bg-zinc-950" id="get-started">
<div className="max-w-2xl mx-auto">

</div>

</section>
</main>

<footer className="border-t border-white/5 bg-zinc-950 py-12 relative z-10 mt-auto">
<div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-4">
<div className="w-6 h-6 rounded bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500">
<iconify-icon className="text-xs" height="12" icon="solar:chart-square-linear" style={{strokeWidth: '1.5', color: 'rgb(113, 113, 122)'}} width="12"></iconify-icon>
</div>
<p className="text-xs font-normal text-zinc-500 tracking-tight">
                Built for disciplined traders.
            </p>
</div>
</footer>

    </>
  );
}
