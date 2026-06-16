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
      
<div id="video-upload-control" style={{position: 'fixed', top: '16px', right: '16px', zIndex: '9999', display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)', border: '1px solid rgba(212,175,55,0.45)', padding: '8px 12px', borderRadius: '9999px', boxShadow: '0 0 20px rgba(212,175,55,0.25)'}}>
<label htmlFor="bg-video-upload" style={{cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#e7d391', fontSize: '12px', fontWeight: '600', fontFamily: 'Inter,sans-serif'}}>
<iconify-icon icon="solar:upload-linear" style={{fontSize: '16px'}}></iconify-icon>
        Upload background video
      </label>
<input accept="video/*" id="bg-video-upload" onchange="(function(input){var f=input.files&amp;&amp;input.files[0];if(!f)return;var url=URL.createObjectURL(f);var v=document.getElementById('bg-video');var s=document.getElementById('bg-video-source');if(v&amp;&amp;s){s.src=url;s.type=f.type||'video/mp4';v.load();v.play().catch(function(){});}})(this);" style={{display: 'none'}} type="file"/>
</div>
<style>
      :root { color-scheme: dark; } html, body { min-height: 100%; } body { position: relative; background: #050304; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; } .cyber-storm-bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; min-height: 100vh; background: radial-gradient(ellipse at 82% 45%, rgba(212, 175, 55, 0.28), transparent 58%), radial-gradient(ellipse at 18% 20%, rgba(45, 70, 95, 0.32), transparent 52%), linear-gradient(90deg, #050304 0%, #0a0a10 35%, #131820 72%, #050304 100%); filter: contrast(1.18) brightness(0.88) saturate(1.25); } .cyber-bg-video { position: absolute; inset: 0; height: 100%; min-height: 100vh; width: 100%; object-fit: cover; opacity: 0.22; mix-blend-mode: screen; filter: saturate(1.2) contrast(1.2) brightness(0.55) hue-rotate(20deg) sepia(0.3); } .cyber-video-overlay { position: absolute; inset: 0; background: radial-gradient(circle at 50% 35%, rgba(212, 175, 55, 0.15), transparent 42%), linear-gradient(180deg, rgba(5,3,4,0.5), rgba(15,18,25,0.65)), repeating-linear-gradient(0deg, rgba(212, 175, 55, 0.06) 0 1px, transparent 1px 6px); mix-blend-mode: screen; } .cyber-storm-bg::before { content: ''; position: absolute; inset: -50%; background: radial-gradient(circle at 30% 70%, rgba(212, 175, 55, 0.22), transparent 50%), radial-gradient(circle at 72% 28%, rgba(60, 90, 120, 0.28), transparent 50%); opacity: 0.66; mix-blend-mode: screen; filter: blur(64px); animation: fogDrift 20s ease-in-out infinite alternate; } .cyber-storm-bg::after { content: ''; position: absolute; inset: -20%; background: repeating-linear-gradient(90deg, rgba(212, 175, 55, 0.12) 0 1px, transparent 1px 40px), repeating-linear-gradient(0deg, rgba(60, 90, 120, 0.12) 0 1px, transparent 1px 40px); opacity: 0.55; mix-blend-mode: overlay; animation: subtlePan 20s linear infinite; -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 90%); mask-image: radial-gradient(circle at center, black 40%, transparent 90%); } .cyber-storm-distortion { position: absolute; inset: -50%; background: radial-gradient(circle at 40% 60%, rgba(212,175,55,0.14) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(60,90,120,0.16) 0%, transparent 50%), repeating-radial-gradient(circle at 50% 50%, rgba(180,140,40,0.08) 0%, transparent 10%, rgba(40,60,90,0.06) 20%); opacity: 0.6; mix-blend-mode: color-dodge; animation: distortionPulse 12s ease-in-out infinite alternate; filter: blur(25px); } .text-slate-950 { color: #f5ecd6 !important; } .text-slate-900, .text-slate-800 { color: #ede2c4 !important; } .text-slate-600 { color: #c9b88a !important; } .text-slate-500, .text-slate-400, .text-slate-300 { color: #a89968 !important; } .text-indigo-600, .text-violet-600, .text-cyan-600, .text-cyan-300, .text-cyan-200, .text-violet-200 { color: #d4af37 !important; } [class~='bg-white'], [class~='bg-white/80'], [class~='bg-white/75'], [class~='bg-slate-50'] { background-color: #14110b !important; } [class~='bg-indigo-50'], [class~='bg-violet-50'], [class~='bg-cyan-50'] { background-color: #1d1a10 !important; } [class~='bg-cyan-200/40'], [class~='bg-violet-200/40'], [class~='bg-indigo-300/30'], [class~='bg-cyan-300/30'] { background-color: rgba(212, 175, 55, 0.22) !important; } [class~='border-slate-200'], [class~='border-violet-100'] { border-color: #4a3d1f !important; } .from-purple-900 { --tw-gradient-from: #1a2a3a var(--tw-gradient-from-position) !important; --tw-gradient-to: rgb(26 42 58 / 0) var(--tw-gradient-to-position) !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; } .via-purple-950 { --tw-gradient-to: rgb(10 14 20 / 0) var(--tw-gradient-to-position) !important; --tw-gradient-stops: var(--tw-gradient-from), #0a0e14 var(--tw-gradient-via-position), var(--tw-gradient-to) !important; } .from-cyan-300 { --tw-gradient-from: #d4af37 var(--tw-gradient-from-position) !important; --tw-gradient-to: rgb(212 175 55 / 0) var(--tw-gradient-to-position) !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; } .to-indigo-300 { --tw-gradient-to: #8c6f1f var(--tw-gradient-to-position) !important; } @keyframes fogDrift { 0% { transform: translate(-5%, -5%) scale(1); } 100% { transform: translate(5%, 5%) scale(1.1); } } @keyframes subtlePan { from { transform: translateY(0); } to { transform: translateY(-100px); } } @keyframes distortionPulse { 0% { transform: scale(1) rotate(0deg); opacity: 0.4; } 100% { transform: scale(1.1) rotate(2deg); opacity: 0.8; } }
    </style>
<div aria-hidden="true" className="cyber-storm-bg" style={{position: 'fixed', inset: '0', zIndex: '0', pointerEvents: 'none', overflow: 'hidden'}}>
<video autoplay="" className="cyber-bg-video" id="bg-video" loop="" muted="" playsinline="" preload="auto" style={{position: 'fixed', inset: '0', width: '100vw', height: '100vh', objectFit: 'cover', opacity: '0.34', mixBlendMode: 'screen', filter: 'saturate(1.9) contrast(1.3) brightness(0.48) hue-rotate(330deg)', zIndex: '0'}}>
<source id="bg-video-source" src="https://assets.mixkit.co/videos/preview/mixkit-red-neon-lights-in-a-tunnel-4935-large.mp4" type="video/mp4"/>
</video>
<div className="cyber-video-overlay"></div>
<div className="cyber-storm-distortion"></div>
</div>
<div className="relative z-10 overflow-hidden">
<div className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-purple-900 via-purple-950 to-transparent"></div>
<div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/40 blur-3xl"></div>
<div className="absolute right-0 top-44 -z-10 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl"></div>
<header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
<a className="flex items-center gap-3" href="#">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400 text-sm font-semibold tracking-tighter text-slate-950 shadow-sm">
            GD
          </div>
<div>
<p className="text-sm font-semibold tracking-tight text-slate-950">
              Gregory Dearham
            </p>
<p className="text-xs text-slate-500">Web • Builds • 3D</p>
</div>
</a>
<nav className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-950" href="#work">
            Work
          </a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-950" href="#skills">
            Skills
          </a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-950" href="#process">
            Process
          </a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-950" href="#contact">
            Contact
          </a>
</nav>
<a className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm backdrop-blur transition hover:border-slate-300 hover:bg-white md:flex" href="https://github.com/Do0vm" target="_blank">
<iconify-icon className="text-lg" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
          GitHub
        </a>
</header>
<main className="">
<section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-20">
<div className="">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              Available for website builds, design systems and digital
              experiences
            </div>
<h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Gregory Dearham — WebDev
            </h1>
<p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              A warm, cinematic portfolio built to showcase WordPress websites,
              Aura Build concepts, GitHub projects and 3D work — designed by
              Gregory Dearham with a gold, slate and ink palette.
            </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-300" href="#work">
                View selected work
                <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50" href="#contact">
                Start a project
                <iconify-icon className="text-lg" icon="solar:chat-round-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
<div className="rounded-2xl border border-slate-200 bg-white/75 p-4 shadow-sm backdrop-blur">
<p className="text-2xl font-semibold tracking-tight text-slate-950">
                  WP
                </p>
<p className="mt-1 text-xs text-slate-500">Custom sites</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white/75 p-4 shadow-sm backdrop-blur">
<p className="text-2xl font-semibold tracking-tight text-slate-950">
                  AB
                </p>
<p className="mt-1 text-xs text-slate-500">Aura Builds</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white/75 p-4 shadow-sm backdrop-blur">
<p className="text-2xl font-semibold tracking-tight text-slate-950">
                  3D
                </p>
<p className="mt-1 text-xs text-slate-500">Modelling</p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-indigo-300/30 blur-2xl"></div>
<div className="absolute -bottom-8 right-4 h-40 w-40 rounded-full bg-cyan-300/30 blur-2xl"></div>
<div className="relative rounded-[2rem] border border-slate-200 bg-white/80 p-3 shadow-2xl shadow-purple-900/50 backdrop-blur">
<div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950">
<div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-400"></span>
<span className="h-3 w-3 rounded-full bg-amber-400"></span>
<span className="h-3 w-3 rounded-full bg-emerald-400"></span>
</div>
<p className="text-xs font-medium text-slate-400">
                    project-preview.web
                  </p>
</div>
<div className="p-5">
<div className="rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-black p-5">
<div className="flex items-start justify-between gap-6">
<div className="">
<p className="text-xs font-medium uppercase tracking-[0.2rem] text-cyan-300">
                          Featured build
                        </p>
<h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                          Aura-inspired layout
                        </h2>
</div>
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
<iconify-icon className="text-2xl" icon="solar:figma-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="mt-8 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl bg-white/10 p-4">
<iconify-icon className="text-2xl text-cyan-200" icon="solar:monitor-linear" strokeWidth="1.5"></iconify-icon>
<p className="mt-4 text-sm font-semibold text-white">
                          Responsive Website
                        </p>
<p className="mt-1 text-xs leading-5 text-slate-300">
                          Fast, structured pages for service brands, portfolios
                          and landing pages.
                        </p>
</div>
<div className="rounded-2xl bg-white/10 p-4">
<iconify-icon className="text-2xl text-violet-200" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
<p className="mt-4 text-sm font-semibold text-white">
                          3D Visual Direction
                        </p>
<p className="mt-1 text-xs leading-5 text-slate-300">
                          Modelling background used to add depth, scenes and
                          spatial ideas.
                        </p>
</div>
</div>
<div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-white">
                          Build quality
                        </p>
<p className="text-xs text-slate-300">Production-ready</p>
</div>
<div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
<div className="h-full w-[88%] rounded-full bg-gradient-to-r from-cyan-300 to-indigo-300"></div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
<p className="text-xs text-slate-400">CMS</p>
<p className="mt-1 text-sm font-semibold text-white">
                        WordPress
                      </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
<p className="text-xs text-slate-400">Code</p>
<p className="mt-1 text-sm font-semibold text-white">
                        GitHub
                      </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
<p className="text-xs text-slate-400">Design</p>
<p className="mt-1 text-sm font-semibold text-white">3D</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="work">
<div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
<div className="">
<p className="text-sm font-semibold text-indigo-600">
                Portfolio gallery
              </p>
<h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A refined gold-and-ink gallery for Gregory Dearham's strongest
                work.
              </h2>
</div>
<p className="max-w-xl text-sm leading-6 text-slate-600">
              Showcase screenshots, renders, repository previews and design
              experiments inside elegant, golden-accent portfolio tiles with a
              cinematic atmosphere.
            </p>
</div>
<div className="mt-10 grid gap-5 md:grid-cols-2">
<article className="group overflow-hidden rounded-3xl border border-amber-500/30 bg-black/70 shadow-lg shadow-amber-950/30 backdrop-blur transition hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-amber-700/20 relative">
<div className="relative h-56 overflow-hidden bg-gradient-to-br from-amber-950 via-black to-slate-800 p-5">
<div className="absolute inset-0 opacity-40 [background:repeating-linear-gradient(0deg,rgba(255,255,255,.12)_0_1px,transparent_1px_7px)]"></div>
<div className="relative flex h-full items-end rounded-2xl border border-amber-400/30 bg-black/45 p-4 shadow-inner shadow-amber-500/20">
<div>
<p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
                      Website
                    </p>
<div className="mt-3 h-2 w-32 rounded-full bg-amber-400 shadow-[0_0_18px_rgba(212,175,55,.9)]"></div>
</div>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 text-xs font-medium text-amber-300">
<iconify-icon className="text-base" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
                  WordPress Site
                </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">
<a className="before:absolute before:inset-0" href="https://terroirbookings.com/" target="_blank">
                    Terroir Bookings
                  </a>
</h3>
<p className="mt-2 text-sm leading-6 text-amber-100/75">
                  WordPress website build.
                </p>
</div>
</article>
<article className="group overflow-hidden rounded-3xl border border-amber-500/30 bg-black/70 shadow-lg shadow-amber-950/30 backdrop-blur transition hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-amber-700/20 relative">
<div className="relative h-56 overflow-hidden bg-gradient-to-br from-black via-amber-950 to-slate-900 p-5">
<div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] bg-amber-500 shadow-[0_0_60px_rgba(212,175,55,.75)] transition group-hover:rotate-6"></div>
<div className="absolute left-10 top-10 h-20 w-20 rounded-full border border-amber-300/30 bg-white/5 backdrop-blur"></div>
<div className="absolute bottom-8 right-8 h-24 w-24 rounded-3xl border border-amber-300/30 bg-black/30 backdrop-blur"></div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 text-xs font-medium text-amber-300">
<iconify-icon className="text-base" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
                  WordPress Site
                </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">
<a className="before:absolute before:inset-0" href="https://kiffleads.com/" target="_blank">
                    Kiff Leads
                  </a>
</h3>
<p className="mt-2 text-sm leading-6 text-amber-100/75">
                  WordPress website build.
                </p>
</div>
</article>
<article className="group overflow-hidden rounded-3xl border border-amber-500/30 bg-black/70 shadow-lg shadow-amber-950/30 backdrop-blur transition hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-amber-700/20 relative">
<div className="h-56 bg-gradient-to-br from-amber-950 via-black to-slate-900 p-5">
<div className="h-full rounded-2xl border border-amber-500/20 bg-black p-4 font-mono text-xs text-amber-200 shadow-inner shadow-amber-600/20">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-amber-400"></span>
<span className="h-2 w-2 rounded-full bg-amber-200"></span>
<span className="h-2 w-2 rounded-full bg-white"></span>
</div>
<p className="mt-7">
<span className="text-amber-400">const</span>
                    project =
                    <span className="text-white">"featured"</span>
                    ;
                  </p>
<p className="mt-3 text-amber-300">deploy(github, portfolio);</p>
<p className="mt-3 text-amber-500/70">// add repository link</p>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 text-xs font-medium text-amber-300">
<iconify-icon className="text-base" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
                  Code Repository
                </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">
<a className="before:absolute before:inset-0" href="https://github.com/Do0vm" target="_blank">
                    GitHub Profile
                  </a>
</h3>
<p className="mt-2 text-sm leading-6 text-amber-100/75">
                  View my repositories, code experiments, and technical case
                  studies.
                </p>
</div>
</article>
<article className="group overflow-hidden rounded-3xl border border-amber-500/30 bg-black/70 shadow-lg shadow-amber-950/30 backdrop-blur transition hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-amber-700/20 relative">
<div className="relative h-56 overflow-hidden bg-gradient-to-br from-black via-amber-950 to-amber-700/60 p-5">
<div className="absolute inset-x-0 top-1/2 h-px bg-amber-300 shadow-[0_0_24px_rgba(212,175,55,.9)]"></div>
<div className="relative grid h-full grid-cols-3 gap-3">
<div className="rounded-2xl bg-amber-500/20"></div>
<div className="rounded-2xl bg-amber-400/30 shadow-[0_0_30px_rgba(212,175,55,.45)]"></div>
<div className="rounded-2xl bg-white/10"></div>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 text-xs font-medium text-amber-300">
<iconify-icon className="text-base" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                  3D Portfolio
                </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">
<a className="before:absolute before:inset-0" href="https://www.artstation.com/gregorydearham4" target="_blank">
                    ArtStation Profile
                  </a>
</h3>
<p className="mt-2 text-sm leading-6 text-amber-100/75">
                  Explore my 3D renders, models, lighting studies and scenes.
                </p>
</div>
</article>
<article className="group overflow-hidden rounded-3xl border border-amber-500/30 bg-black/70 shadow-lg shadow-amber-950/30 backdrop-blur transition hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-amber-700/20 relative">
<div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-900 via-black to-amber-950 p-5">
<div className="absolute inset-0 opacity-30 [background:repeating-linear-gradient(45deg,rgba(255,255,255,.08)_0_1px,transparent_1px_9px)]"></div>
<div className="relative flex h-full items-end rounded-2xl border border-amber-400/30 bg-black/45 p-4 shadow-inner shadow-amber-500/20">
<div>
<p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
                      Website
                    </p>
<div className="mt-3 h-2 w-32 rounded-full bg-amber-400 shadow-[0_0_18px_rgba(212,175,55,.9)]"></div>
</div>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 text-xs font-medium text-amber-300">
<iconify-icon className="text-base" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
                  WordPress Site
                </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">
<a className="before:absolute before:inset-0" href="https://lightsteelblue-crab-124531.hostingersite.com/" target="_blank">
                    Solomons Tree Felling
                  </a>
</h3>
<p className="mt-2 text-sm leading-6 text-amber-100/75">
                  WordPress website build.
                </p>
</div>
</article>
<article className="group overflow-hidden rounded-3xl border border-amber-500/30 bg-black/70 shadow-lg shadow-amber-950/30 backdrop-blur transition hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-amber-700/20">
<div className="relative h-56 overflow-hidden bg-black p-5">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,.45),transparent_55%)]"></div>
<div className="relative flex h-full items-center justify-center rounded-2xl border border-amber-500/30">
<div className="text-center">
<iconify-icon className="text-5xl text-amber-300" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
                      Add work
                    </p>
</div>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 text-xs font-medium text-amber-300">
<iconify-icon className="text-base" icon="solar:gallery-wide-linear" strokeWidth="1.5"></iconify-icon>
                  Portfolio Slot 06
                </div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">
                  Next Showcase
                </h3>
<p className="mt-2 text-sm leading-6 text-amber-100/75">
                  Keep this slot ready for your next portfolio piece, client
                  work or personal build.
                </p>
</div>
</article>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="skills">
<div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-10">
<div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
<div className="">
<p className="text-sm font-semibold text-indigo-600">
                  Core background
                </p>
<h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Gregory's flexible mix of web, design and 3D skills.
                </h2>
<p className="mt-5 text-sm leading-6 text-slate-600">
                  This portfolio positions Gregory Dearham as a maker who
                  understands both practical website building and visual design
                  depth.
                </p>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:wordpress-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mt-5 text-base font-semibold text-slate-950">
                    WordPress Websites
                  </h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
                    Landing pages, business sites, portfolio pages, responsive
                    sections and CMS-ready layouts.
                  </p>
</div>
<div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-violet-600 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mt-5 text-base font-semibold text-slate-950">
                    Aura Build Designs
                  </h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
                    Modern build concepts with atmospheric visuals, smooth
                    spacing and premium presentation.
                  </p>
</div>
<div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:branching-paths-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mt-5 text-base font-semibold text-slate-950">
                    GitHub Workflow
                  </h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
                    Repository management, version control, project
                    documentation and code experiments.
                  </p>
</div>
<div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-cyan-600 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mt-5 text-base font-semibold text-slate-950">
                    3D Modelling
                  </h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
                    A creative background in spatial design, product-style
                    visuals, forms, lighting and composition.
                  </p>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="process">
<div className="text-center">
<p className="text-sm font-semibold text-indigo-600">Process</p>
<h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              From idea to polished digital presence.
            </h2>
</div>
<div className="mt-12 grid gap-5 md:grid-cols-3">
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
<iconify-icon className="text-2xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mt-6 text-base font-semibold text-slate-950">Plan</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
                Define your goals, website structure, visual references and the
                kind of work you want to showcase.
              </p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mt-6 text-base font-semibold text-slate-950">
                Design
              </h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
                Create polished pages, Aura-style sections and visual systems
                that make your work feel premium.
              </p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
<iconify-icon className="text-2xl" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="mt-6 text-base font-semibold text-slate-950">
                Launch
              </h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
                Publish the site, connect your GitHub, add project links and
                keep improving with new builds.
              </p>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="contact">
<div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-10">
<div className="grid gap-10 lg:grid-cols-2">
<div className="">
<p className="text-sm font-semibold text-indigo-600">Contact</p>
<h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Let's work together.
                </h2>
<p className="mt-5 text-sm leading-6 text-slate-600">
                  Reach out to discuss website builds, Aura concepts, 3D
                  modelling, or general collaborations. Feel free to send a
                  message and I'll get back to you shortly.
                </p>
<div className="mt-10 flex items-center gap-4 text-slate-950">
<iconify-icon className="text-2xl text-indigo-600" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<a className="text-sm font-medium hover:underline" href="/mailto:gregory.dearham@gmail.com">
                    gregory.dearham@gmail.com
                  </a>
</div>
</div>
<div className="">
<form action="https://formsubmit.co/gregory.dearham@gmail.com" className="grid gap-4" method="POST">
<div className="">
<label className="block text-sm font-medium text-slate-950" htmlFor="name">
                      Name
                    </label>
<input className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400" id="name" name="name" required="" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-950" htmlFor="email">
                      Email
                    </label>
<input className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400" id="email" name="email" required="" type="email"/>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-950" htmlFor="message">
                      Message
                    </label>
<textarea className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400" id="message" name="message" required="" rows="4"></textarea>
</div>
<input name="_honey" style={{display: 'none'}} type="text"/>
<input name="_captcha" type="hidden" value="false"/>
<button className="inline-flex transition hover:bg-amber-300 cursor-pointer text-sm font-semibold text-slate-950 bg-amber-400 w-full rounded-xl mt-2 pt-3 pr-5 pb-3 pl-5 shadow-lg gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='/mailto:gregory.dearham@gmail.com'" role="button" type="submit">
                    Send Message
                    <iconify-icon className="text-lg" height="17" icon="solar:plain-linear" strokeWidth="1.5" style={{color: 'rgb(245, 236, 214)'}} width="17"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>
</main>
</div>

    </>
  );
}
