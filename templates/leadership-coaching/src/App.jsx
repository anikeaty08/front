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



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head||document.body).appendChild(i)}}();
      


      const cards = document.querySelectorAll('.spotlight-card');
      cards.forEach(card => {
          card.onmousemove = e => {
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              card.style.setProperty('--mouse-x', `${x}px`);
              card.style.setProperty('--mouse-y', `${y}px`);
          };
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZHhDKfVqqu8PKOSMwfuA"></div>

<div className="absolute inset-0 bg-[#050505]/30"></div>
</div>
<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
<div className="absolute inset-0 w-full h-full opacity-[0.05]">
<div className="line line-anim line-1 absolute w-px h-full top-0 left-1/2 bg-white" style={{marginLeft: '-22.5vw'}}></div>
<div className="line line-anim line-2 absolute w-px h-full top-0 left-1/2 bg-white"></div>
<div className="line line-anim line-3 absolute w-px h-full top-0 left-1/2 bg-white" style={{marginLeft: '22.5vw'}}></div>
</div>
</div>

<header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
<nav aria-label="Main menu" className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a aria-label="Dr. Frank Harper Home" className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-orange-500/10 overflow-hidden group-hover:bg-orange-500/20 group-hover:border-orange-500/30 transition-all duration-300 bg-orange-500/10 w-9 h-9 border-orange-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon aria-hidden="true" className="text-orange-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-sm">
            Dr. Frank Harper
          </span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-zinc-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-black bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#demo">
            Book a Call
            <iconify-icon aria-hidden="true" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main className="">

<section className="overflow-hidden min-h-[95vh] pt-44 pb-20 relative flex flex-col justify-center">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none opacity-50"></div>

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="absolute top-[30%] left-0 h-[2px] w-[15%] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent -translate-y-[0.5px]" style={{animation: 'pulseLineHorizontal 4s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></div>
<div className="absolute top-[70%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="absolute top-[70%] left-0 h-[2px] w-[20%] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent -translate-y-[0.5px]" style={{animation: 'pulseLineHorizontal 6s cubic-bezier(0.4, 0, 0.2, 1) 2s infinite'}}></div>

<div className="absolute left-[20%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute left-[20%] top-0 w-[2px] h-[15%] bg-gradient-to-b from-transparent via-orange-500/40 to-transparent -translate-x-[0.5px]" style={{animation: 'pulseLineVertical 5s cubic-bezier(0.4, 0, 0.2, 1) 1s infinite'}}></div>
</div>
<div className="z-10 text-center max-w-7xl mx-auto px-6 relative w-full">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-300 text-xs uppercase font-medium tracking-wide mb-8 hover:border-orange-500/40 transition-colors cursor-default shadow-[0_0_20px_rgba(234,88,12,0.1)] backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-signal"></span>
            Dr. Frank Harper · Strategy Execution
          </div>
<h1 className="leading-[1.1] md:text-6xl lg:text-6xl text-5xl font-semibold text-white tracking-tight mb-8">
            Your Strategy Looks Great on Paper.
            <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              It Just Never Gets Executed.
            </span>
</h1>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto">
            Only about a third of projects succeed, not from bad tools, but
            because strategy dies in execution. Dr. Frank Harper has spent four
            decades fixing exactly that, in over 65 countries.
          </p>
<div className="flex flex-col mb-16 items-center justify-center">
<div className="flex w-full max-w-lg mb-6 px-4 items-center justify-center">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-white px-8 text-base font-medium text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] ring-1 ring-black/5" href="#demo">
                Book a Call With Dr. Harper
                <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="w-full max-w-5xl mx-auto relative z-10 text-left bg-[#09090b]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden group">
<div className="absolute -inset-4 bg-gradient-to-br from-orange-500/5 to-transparent opacity-50 pointer-events-none rounded-[3rem] z-[-1]"></div>
<div className="flex flex-col lg:flex-row gap-10 items-center">

<div className="w-full lg:w-[60%] shrink-0">
<div className="aspect-video w-full rounded-2xl border border-white/10 bg-black/50 relative overflow-hidden flex items-center justify-center group-hover:border-white/20 transition-colors">
<div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-600 z-10">
<iconify-icon className="mb-2 text-zinc-500" icon="solar:play-circle-linear" strokeWidth="1.5" width="48"></iconify-icon>
<span className="text-sm font-mono tracking-widest">
                      [VIDEO PLACEHOLDER]
                    </span>
</div>
</div>
<div className="mt-4 flex items-center gap-2 px-2">
<span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(234,88,12,0.8)]"></span>
<span className="text-sm text-zinc-400 font-medium">
                    Watch: Why Most Transformations Fail
                  </span>
</div>
</div>

<div className="w-full lg:w-[40%] flex flex-col justify-center">
<p className="text-white text-base leading-relaxed mb-6 font-medium">
                  If your transformations keep stalling after the kickoff, this
                  isn't an effort problem.
                </p>
<p className="text-orange-400 text-lg font-semibold tracking-tight mb-6">
                  It’s an execution problem.
                </p>
<div className="text-sm text-zinc-400 mb-4">Most reps:</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded flex items-center justify-center bg-red-500/10 text-red-400 shrink-0 mt-0.5">
<iconify-icon icon="solar:close-square-linear" width="14"></iconify-icon>
</div>
<span className="text-zinc-300 text-sm">
                      Write strategies that never reach the front line
                    </span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded flex items-center justify-center bg-red-500/10 text-red-400 shrink-0 mt-0.5">
<iconify-icon icon="solar:close-square-linear" width="14"></iconify-icon>
</div>
<span className="text-zinc-300 text-sm">
                      Buy rigid methodologies that break on contact
                    </span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded flex items-center justify-center bg-red-500/10 text-red-400 shrink-0 mt-0.5">
<iconify-icon icon="solar:close-square-linear" width="14"></iconify-icon>
</div>
<span className="text-zinc-300 text-sm">
                      Mistake activity for real progress
                    </span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded flex items-center justify-center bg-red-500/10 text-red-400 shrink-0 mt-0.5">
<iconify-icon icon="solar:close-square-linear" width="14"></iconify-icon>
</div>
<span className="text-zinc-300 text-sm">
                      Can't say where execution actually fails
                    </span>
</li>
</ul>
<div className="p-4 rounded-xl bg-black/50 border border-white/5">
<div className="text-xs text-zinc-500 uppercase tracking-wide mb-2">
                    In this video, Dr. Harper breaks down:
                  </div>
<div className="text-sm text-zinc-300 leading-relaxed">
                    • Why most transformations fail
                    <br/>
                    • Where strategy and execution disconnect
                    <br/>
                    • How to build an organization that adapts
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-white/5 relative z-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-mono text-zinc-500 uppercase tracking-wide mb-8">
            Trusted by leaders across 65+ countries
          </p>
<div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="w-32 h-12 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center text-xs text-zinc-600 font-mono">
              [IMAGE PLACEHOLDER]
            </div>
<div className="w-32 h-12 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center text-xs text-zinc-600 font-mono">
              [IMAGE PLACEHOLDER]
            </div>
<div className="w-32 h-12 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center text-xs text-zinc-600 font-mono">
              [IMAGE PLACEHOLDER]
            </div>
<div className="w-32 h-12 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center text-xs text-zinc-600 font-mono hidden md:flex">
              [IMAGE PLACEHOLDER]
            </div>
<div className="w-32 h-12 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center text-xs text-zinc-600 font-mono hidden lg:flex">
              [IMAGE PLACEHOLDER]
            </div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 relative z-20" id="problem">
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500 mb-8 border border-red-500/20">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="md:text-5xl leading-tight text-4xl font-semibold text-white tracking-tight mb-16">
            Why Your Transformation
            <br className="hidden md:block"/>
            Keeps Stalling
          </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">

<div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/60 transition-colors">
<div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-6">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">
                Strategy stays on paper
              </h3>
<p className="text-zinc-400 text-base leading-relaxed">
                It looks sharp in the boardroom, then stalls the moment it meets
                the real organization.
              </p>
</div>

<div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/60 transition-colors">
<div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-6">
<iconify-icon icon="solar:user-cross-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">
                Rigid methodology
              </h3>
<p className="text-zinc-400 text-base leading-relaxed">
                You bought the framework, but it breaks against how your teams
                actually work.
              </p>
</div>

<div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/60 transition-colors">
<div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-6">
<iconify-icon icon="solar:loudspeaker-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">
                Activity over outcomes
              </h3>
<p className="text-zinc-400 text-base leading-relaxed">
                Everyone's busy, but motion isn't progress and the results don't
                move.
              </p>
</div>

<div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/60 transition-colors">
<div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-6">
<iconify-icon icon="solar:graph-down-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">
                No execution discipline
              </h3>
<p className="text-zinc-400 text-base leading-relaxed">
                There's no system connecting the strategy to what people do
                every day.
              </p>
</div>
</div>
</div>
</section>

<section className="py-32 border-y border-white/5" id="process">
<div className="max-w-6xl mx-auto px-6">

<div className="text-center mb-24 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8 leading-tight">
              The Problem Isn't Strategy.
              <br/>
<span className="text-orange-500">It’s Execution.</span>
</h2>
<div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
<p className="">
                Better plans won't fix this. Working harder won't fix this.
              </p>
<p className="">
                Results come when strategy is translated into disciplined,
                adaptable execution your teams can actually run.
              </p>
</div>
</div>

<div className="mt-20">
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-12 ml-4 md:ml-12 border-b border-white/10 pb-4">
              How Dr. Harper Fixes It:
              <span className="text-white font-medium ml-2">
                Disciplined Strategy Execution
              </span>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-orange-500 transition-colors">
<iconify-icon icon="solar:scissors-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-orange-400 font-mono text-xs uppercase tracking-wide mb-3 block">
                    Step 01
                  </span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">
                    Diagnose where execution breaks
                  </h3>
<p className="text-zinc-400 text-base leading-relaxed">
                    We map the real gaps between your strategy and what's
                    happening on the ground.
                  </p>
</div>
<div className="lg:col-span-7">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
<iconify-icon icon="solar:text-field-focus-linear" width="18"></iconify-icon>
</div>
<h4 className="text-white text-base font-medium">
                        Diagnostic Assessment
                      </h4>
</div>
<p className="text-zinc-500 text-sm leading-relaxed">
                      A clear-eyed audit of where strategy, structure, and
                      execution disconnect and what it's costing you.
                    </p>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-blue-500 transition-colors">
<iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-blue-400 font-mono text-xs uppercase tracking-wide mb-3 block">
                    Step 02
                  </span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">
                    Design an adaptable framework
                  </h3>
<p className="text-zinc-400 text-base leading-relaxed">
                    Not a rigid methodology a framework your leaders can flex to
                    their own environment.
                  </p>
</div>
<div className="lg:col-span-7">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon className="" icon="solar:filter-linear" width="18"></iconify-icon>
</div>
<h4 className="text-white text-base font-medium">
                        Framework Design
                      </h4>
</div>
<p className="text-zinc-500 text-sm leading-relaxed">
                      We build execution systems around how your teams actually
                      operate, not a template pulled off a shelf.
                    </p>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-green-500 transition-colors">
<iconify-icon icon="solar:chat-round-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-green-400 font-mono text-xs uppercase tracking-wide mb-3 block">
                    Step 03
                  </span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">
                    Install execution discipline
                  </h3>
<p className="text-zinc-400 text-base leading-relaxed">
                    We embed the practices, training, and governance that make
                    the change stick after we're gone.
                  </p>
</div>
<div className="lg:col-span-7">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900/80 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:rocket-linear" width="18"></iconify-icon>
</div>
<h4 className="text-white text-base font-medium">
                        Disciplined Execution
                      </h4>
</div>
<p className="text-zinc-500 text-sm leading-relaxed">
                      Soft-skill leadership plus governance, so the organization
                      keeps adapting without depending on us.
                    </p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-20 flex justify-center">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-white px-8 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" href="#demo">
              Book a Call With Dr. Harper
              <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              What Working Together Looks Like
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between group overflow-hidden" style={{-MouseX: '431px', -MouseY: '1.861114501953125px'}}>
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-orange-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:pen-new-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">
                  Strategy Execution &amp; Business Transformation
                </h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-md">
                  We turn a written strategy into a system your organization
                  actually runs diagnosing gaps, designing the framework, and
                  driving disciplined execution.
                </p>
</div>
<div className="mt-8 flex flex-wrap gap-2">
<span className="px-2 py-1 bg-black/50 rounded border border-white/5 text-xs text-zinc-500">
                  Strategy → Execution
                </span>
<span className="px-2 py-1 bg-black/50 rounded border border-white/5 text-xs text-zinc-500">
                  Turnaround
                </span>
<span className="px-2 py-1 bg-black/50 rounded border border-white/5 text-xs text-white">
                  AI-Enabled
                </span>
</div>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col group overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:structure-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">
                Agile Leadership Development
              </h3>
<p className="text-zinc-400 text-base leading-relaxed mb-4">
                Turn project managers into strategic leaders with the GRIP™
                framework taught across 65+ countries.
              </p>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:checklist-minimalistic-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-2">
                  Organizational PMO Design
                </h3>
<p className="text-zinc-400 text-base leading-relaxed">
                  Build the PMOs and centers of excellence that keep strategy on
                  track at scale.
                </p>
</div>
</div>

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col md:flex-row items-center justify-between overflow-hidden gap-6" style={{-MouseX: '94.77777099609375px', -MouseY: '209.19444274902344px'}}>
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">
                  Corporate Training &amp; Mentoring
                </h3>
<p className="text-zinc-400 text-base leading-relaxed">
                  Operator-level, PhD-backed coaching for your leaders built to
                  up-skill and re-skill teams for constant change.
                </p>
</div>
<div className="flex items-center gap-2 opacity-80">
<div className="px-3 py-2 bg-zinc-900 border border-white/10 rounded text-xs text-zinc-400">
                  Strategy
                </div>
<iconify-icon aria-hidden="true" className="text-zinc-600" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<div className="px-3 py-2 bg-purple-900/30 border border-purple-500/30 rounded text-xs text-purple-300">
                  Capability
                </div>
<iconify-icon aria-hidden="true" className="text-zinc-600" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<div className="px-3 py-2 bg-orange-900/30 border border-orange-500/30 rounded text-xs text-orange-300">
                  Growth
                </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="text-orange-500 font-mono text-xs uppercase tracking-wide mb-2">
              Proven at Scale
            </div>
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-4">
              Four decades turning strategy into results
            </h2>
<p className="text-zinc-400 text-base max-w-xl mx-auto">
              Across conglomerates, startups, governments, and universities
              leaders trained in over 65 countries.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full">
<div className="w-full aspect-video bg-zinc-900 rounded-xl border border-white/5 mb-6 flex items-center justify-center overflow-hidden">
<span className="text-xs font-mono text-zinc-600">
                  [IMAGE PLACEHOLDER]
                </span>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                [placeholder: Dr. Harper to supply an exact client quote]
              </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-zinc-800"></div>
<div>
<div className="text-white text-sm font-medium">Client</div>
<div className="text-zinc-500 text-xs">Enterprise</div>
</div>
</div>
</div>
<div className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full">
<div className="w-full aspect-video bg-zinc-900 rounded-xl border border-white/5 mb-6 flex items-center justify-center overflow-hidden">
<span className="text-xs font-mono text-zinc-600">
                  [IMAGE PLACEHOLDER]
                </span>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                [placeholder: exact quote]
              </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-zinc-800"></div>
<div>
<div className="text-white text-sm font-medium">Client</div>
<div className="text-zinc-500 text-xs">
                    Government / Institution
                  </div>
</div>
</div>
</div>
<div className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full">
<div className="w-full aspect-video bg-zinc-900 rounded-xl border border-white/5 mb-6 flex items-center justify-center overflow-hidden">
<span className="text-xs font-mono text-zinc-600">
                  [IMAGE PLACEHOLDER]
                </span>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                [placeholder: exact quote]
              </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-zinc-800"></div>
<div>
<div className="text-white text-sm font-medium">Client</div>
<div className="text-zinc-500 text-xs">Startup</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12 bg-zinc-900/30 rounded-3xl p-8 md:p-12 border border-white/5">
<div className="w-full md:w-1/3 aspect-square rounded-2xl bg-zinc-800 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden relative">
<span className="text-xs font-mono text-zinc-500">
                [IMAGE PLACEHOLDER]
              </span>
</div>
<div className="w-full md:w-2/3">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                Hi, I’m Dr. Frank Harper.
              </h2>
<div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
<p className="">
                  I began as an engineer in 1982 and spent decades in the
                  C-suite before becoming a professor of agile leadership and
                  strategic project management.
                </p>
<p className="">
                  I've led multi-billion-dollar portfolios and trained leaders
                  in over 65 countries and I've seen the same thing everywhere:
                  great strategies that never get executed.
                </p>
<p className="text-white font-medium">I exist to fix that.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">
              FAQ
            </h2>
</div>
<div className="space-y-4">

<details className="group bg-zinc-900/30 border border-white/5 rounded-2xl p-6 open:bg-zinc-900/60 transition-colors cursor-pointer">
<summary className="flex justify-between items-center font-medium text-white list-none">
                Who is this for?
                <iconify-icon className="text-zinc-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-zinc-400 mt-4 text-sm leading-relaxed border-t border-white/5 pt-4">
                Executives and organizations whose strategy or transformation
                keeps stalling in execution.
              </div>
</details>

<details className="group bg-zinc-900/30 border border-white/5 rounded-2xl p-6 open:bg-zinc-900/60 transition-colors cursor-pointer">
<summary className="flex justify-between items-center font-medium text-white list-none">
                Is this consulting or training?
                <iconify-icon className="text-zinc-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-zinc-400 mt-4 text-sm leading-relaxed border-t border-white/5 pt-4">
                Both — advice that isn't transferred to your people doesn't
                last, so I build the capability too.
              </div>
</details>

<details className="group bg-zinc-900/30 border border-white/5 rounded-2xl p-6 open:bg-zinc-900/60 transition-colors cursor-pointer">
<summary className="flex justify-between items-center font-medium text-white list-none">
                We already have a PM methodology. Why this?
              </summary>
<div className="text-zinc-400 mt-4 text-sm leading-relaxed border-t border-white/5 pt-4">
                Methodologies are rigid; your environment isn't. This is about
                adaptable frameworks and execution discipline.
              </div>
</details>

<details className="group bg-zinc-900/30 border border-white/5 rounded-2xl p-6 open:bg-zinc-900/60 transition-colors cursor-pointer">
<summary className="flex justify-between items-center font-medium text-white list-none">
                Is this only for large enterprises?
                <iconify-icon className="text-zinc-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-zinc-400 mt-4 text-sm leading-relaxed border-t border-white/5 pt-4">
                No — it's been applied from global conglomerates to startups,
                scoped to your organization.
              </div>
</details>

<details className="group bg-zinc-900/30 border border-white/5 rounded-2xl p-6 open:bg-zinc-900/60 transition-colors cursor-pointer">
<summary className="flex justify-between items-center font-medium text-white list-none">
                How do we start?
                <iconify-icon className="text-zinc-500 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-zinc-400 mt-4 text-sm leading-relaxed border-t border-white/5 pt-4">
                Book a call.
              </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden border-t border-white/5" id="demo">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12 lg:p-16 items-center">

<div className="flex flex-col justify-center h-full pt-4 lg:pt-0">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                Stop Writing Strategies That Never Get Executed.
              </h2>
<p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-md">
                Book a call to see exactly where your transformation is leaking
                and what it takes to fix it.
              </p>
<div className="flex">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-white px-8 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" href="#demo">
                  Book a Call With Dr. Harper
                  <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:calendar-minimalistic-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-auto md:h-full min-h-[400px] lg:min-h-[600px] bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 flex flex-col items-center justify-center group">
<iconify-icon className="text-zinc-600 mb-4 transition-transform duration-300 group-hover:scale-110" icon="solar:calendar-mark-linear" width="48"></iconify-icon>
<div className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
                [CALENDLY PLACEHOLDER]
              </div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 pt-20 pb-10 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
<div className="col-span-1 pr-8">
<a aria-label="Dr. Frank Harper Home" className="flex items-center gap-3 text-white font-semibold tracking-tight text-lg mb-6 group" href="/">
<div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-orange-500/5 relative overflow-hidden group-hover:bg-orange-500/10 group-hover:border-orange-500/20 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-orange-500 transition-colors duration-300" icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
              Dr. Frank Harper
            </a>
<p className="text-zinc-500 mb-6 leading-relaxed max-w-xs">
              Strategic project management and agile leadership for
              transformations that actually get executed.
            </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Links</h4>
<a className="text-zinc-500 hover:text-orange-400 transition-colors flex items-center gap-2" href="https://linkedin.com/in/drfharper" target="_blank">
              LinkedIn
              <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-orange-400 transition-colors flex items-center gap-2" href="https://icms-tppm.com" target="_blank">
              ICMS
              <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Navigation</h4>
<a className="text-zinc-500 hover:text-orange-400 transition-colors" href="#problem">
              The Problem
            </a>
<a className="text-zinc-500 hover:text-orange-400 transition-colors" href="#process">
              Process
            </a>
<a className="text-zinc-500 hover:text-orange-400 transition-colors" href="#about">
              About
            </a>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-600 text-xs">
            © 2026 Intelligent Systems Services LLC. All rights reserved.
          </div>
</div>
</div>
</footer>


    </>
  );
}
