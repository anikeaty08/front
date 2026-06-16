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
      

<header className="border-b border-zinc-900/50 sticky top-0 bg-zinc-950/80 backdrop-blur-md z-10">
<div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="text-zinc-100 font-medium tracking-tighter text-lg flex items-center gap-2 transition-opacity hover:opacity-80" href="#">
<iconify-icon className="text-xl" icon="solar:moon-fog-linear"></iconify-icon>
          zoonsociety.
        </a>
<nav className="text-xs font-medium text-zinc-500 flex gap-4">
<a className="hover:text-zinc-300 transition-colors" href="#">About</a>
<a className="hover:text-zinc-300 transition-colors" href="#">
            Initiatives
          </a>
</nav>
</div>
</header>

<main className="flex-grow flex flex-col items-center justify-center p-6 py-12 sm:py-20">
<div className="w-full max-w-3xl space-y-10">

<div className="space-y-4 text-center max-w-2xl mx-auto">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 mb-2">
<iconify-icon icon="solar:leaf-linear"></iconify-icon>
<span>Free Registration Open</span>
</div>
<h1 className="text-3xl sm:text-4xl tracking-tight font-medium text-zinc-100">
            Preserve &amp; promote
            <br/>
            Kashmiri culture.
          </h1>
<p className="text-sm text-zinc-400 leading-relaxed">
            Join a passionate community dedicated to celebrating the rich
            tapestry of Kashmiri tradition, folk art, and dialogue. Select a
            role below to become a core contributor to zoonsociety.
          </p>
</div>

<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black">
<form action="https://formsubmit.co/iffamzadasajad@gmail.com" className="space-y-8" method="POST" target="_blank">
<input name="_subject" type="hidden" value="New Registration - zoonsociety."/>

<div className="space-y-4">
<h2 className="text-base tracking-tight font-medium text-zinc-100 flex items-center gap-2 border-b border-zinc-800/50 pb-2">
<iconify-icon className="text-zinc-500" icon="solar:user-linear"></iconify-icon>
                Personal Details
              </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-500" htmlFor="fullName">
                    Full Name
                  </label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-200 px-3 py-2.5 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" id="fullName" name="fullName" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-500" htmlFor="email">
                    Email Address
                  </label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-200 px-3 py-2.5 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" id="email" name="email" placeholder="jane@example.com" required="" type="email"/>
</div>
<div className="space-y-1.5 sm:col-span-2">
<label className="block text-xs font-medium text-zinc-500" htmlFor="institution">
                    Institution / Organization (Optional)
                  </label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-200 px-3 py-2.5 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" id="institution" name="institution" placeholder="University of Kashmir" type="text"/>
</div>
</div>
</div>

<div className="space-y-6">
<h2 className="text-base tracking-tight font-medium text-zinc-100 flex items-center gap-2 border-b border-zinc-800/50 pb-2">
<iconify-icon className="text-zinc-500" icon="solar:star-circle-linear"></iconify-icon>
                Choose Your Role
              </h2>

<div className="space-y-3">
<h3 className="text-xs font-medium text-zinc-500 tracking-wide uppercase">
                  Public Speaking &amp; Discussions
                </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="role" type="radio" value="Debate Coordinator"/>
<div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3 text-sm font-medium text-zinc-400 transition-all group-hover:border-zinc-700 peer-checked:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:text-zinc-100 flex items-center justify-between">
                      Debate Coordinator
                      <iconify-icon className="opacity-0 peer-checked:opacity-100 text-lg transition-opacity" icon="solar:check-circle-linear"></iconify-icon>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="role" type="radio" value="MUN Lead"/>
<div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3 text-sm font-medium text-zinc-400 transition-all group-hover:border-zinc-700 peer-checked:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:text-zinc-100 flex items-center justify-between">
                      MUN Lead
                      <iconify-icon className="opacity-0 peer-checked:opacity-100 text-lg transition-opacity" icon="solar:check-circle-linear"></iconify-icon>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="role" type="radio" value="Discussion Host"/>
<div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3 text-sm font-medium text-zinc-400 transition-all group-hover:border-zinc-700 peer-checked:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:text-zinc-100 flex items-center justify-between">
                      Discussion Host
                      <iconify-icon className="opacity-0 peer-checked:opacity-100 text-lg transition-opacity" icon="solar:check-circle-linear"></iconify-icon>
</div>
</label>
<label className="relative cursor-pointer group sm:col-span-2 lg:col-span-1">
<input className="peer sr-only" name="role" type="radio" value="Research Team Member"/>
<div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3 text-sm font-medium text-zinc-400 transition-all group-hover:border-zinc-700 peer-checked:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:text-zinc-100 flex items-center justify-between">
                      Research Team Member
                      <iconify-icon className="opacity-0 peer-checked:opacity-100 text-lg transition-opacity" icon="solar:check-circle-linear"></iconify-icon>
</div>
</label>
</div>
</div>

<div className="space-y-3">
<h3 className="text-xs font-medium text-zinc-500 tracking-wide uppercase">
                  Media &amp; Socials
                </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="role" type="radio" value="Social Media Manager"/>
<div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3 text-sm font-medium text-zinc-400 transition-all group-hover:border-zinc-700 peer-checked:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:text-zinc-100 flex items-center justify-between">
                      Social Media Manager
                      <iconify-icon className="opacity-0 peer-checked:opacity-100 text-lg transition-opacity" icon="solar:check-circle-linear"></iconify-icon>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="role" type="radio" value="Content Writer"/>
<div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3 text-sm font-medium text-zinc-400 transition-all group-hover:border-zinc-700 peer-checked:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:text-zinc-100 flex items-center justify-between">
                      Content Writer
                      <iconify-icon className="opacity-0 peer-checked:opacity-100 text-lg transition-opacity" icon="solar:check-circle-linear"></iconify-icon>
</div>
</label>
<label className="relative cursor-pointer group sm:col-span-2 lg:col-span-1">
<input className="peer sr-only" name="role" type="radio" value="Media &amp; Events Coord."/>
<div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3 text-sm font-medium text-zinc-400 transition-all group-hover:border-zinc-700 peer-checked:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:text-zinc-100 flex items-center justify-between">
                      Media &amp; Events Coord.
                      <iconify-icon className="opacity-0 peer-checked:opacity-100 text-lg transition-opacity" icon="solar:check-circle-linear"></iconify-icon>
</div>
</label>
</div>
</div>

<div className="space-y-3">
<h3 className="text-xs font-medium text-zinc-500 tracking-wide uppercase">
                  Creative &amp; Visuals
                </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="role" type="radio" value="Photographer"/>
<div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3 text-sm font-medium text-zinc-400 transition-all group-hover:border-zinc-700 peer-checked:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:text-zinc-100 flex items-center justify-between">
                      Photographer
                      <iconify-icon className="opacity-0 peer-checked:opacity-100 text-lg transition-opacity" icon="solar:check-circle-linear"></iconify-icon>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="role" type="radio" value="Videographer"/>
<div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3 text-sm font-medium text-zinc-400 transition-all group-hover:border-zinc-700 peer-checked:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:text-zinc-100 flex items-center justify-between">
                      Videographer
                      <iconify-icon className="opacity-0 peer-checked:opacity-100 text-lg transition-opacity" icon="solar:check-circle-linear"></iconify-icon>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="role" type="radio" value="Video Editor"/>
<div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3 text-sm font-medium text-zinc-400 transition-all group-hover:border-zinc-700 peer-checked:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:text-zinc-100 flex items-center justify-between">
                      Video Editor
                      <iconify-icon className="opacity-0 peer-checked:opacity-100 text-lg transition-opacity" icon="solar:check-circle-linear"></iconify-icon>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="role" type="radio" value="Graphic Designer"/>
<div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3 text-sm font-medium text-zinc-400 transition-all group-hover:border-zinc-700 peer-checked:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:text-zinc-100 flex items-center justify-between">
                      Graphic Designer
                      <iconify-icon className="opacity-0 peer-checked:opacity-100 text-lg transition-opacity" icon="solar:check-circle-linear"></iconify-icon>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="role" type="radio" value="Creative Director"/>
<div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3 text-sm font-medium text-zinc-400 transition-all group-hover:border-zinc-700 peer-checked:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:text-zinc-100 flex items-center justify-between">
                      Creative Director
                      <iconify-icon className="opacity-0 peer-checked:opacity-100 text-lg transition-opacity" icon="solar:check-circle-linear"></iconify-icon>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="role" type="radio" value="Content Creator"/>
<div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3 text-sm font-medium text-zinc-400 transition-all group-hover:border-zinc-700 peer-checked:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:text-zinc-100 flex items-center justify-between">
                      Content Creator
                      <iconify-icon className="opacity-0 peer-checked:opacity-100 text-lg transition-opacity" icon="solar:check-circle-linear"></iconify-icon>
</div>
</label>
<label className="relative cursor-pointer group sm:col-span-2 lg:col-span-3">
<input className="peer sr-only" name="role" type="radio" value="Visual Storyteller"/>
<div className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3 text-sm font-medium text-zinc-400 transition-all group-hover:border-zinc-700 peer-checked:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:text-zinc-100 flex items-center justify-between">
                      Visual Storyteller
                      <iconify-icon className="opacity-0 peer-checked:opacity-100 text-lg transition-opacity" icon="solar:check-circle-linear"></iconify-icon>
</div>
</label>
</div>
</div>
</div>

<div className="space-y-4 pt-2">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-500" htmlFor="experience">
                  Briefly describe your experience or why you want to join
                  (Optional)
                </label>
<textarea className="w-full bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-200 px-3 py-2.5 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700 resize-none" id="experience" name="experience" rows="3"></textarea>
</div>
</div>

<div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-between border-t border-zinc-800/50 mt-4">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input className="peer absolute opacity-0 w-4 h-4 z-10 cursor-pointer" name="agreed" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-950 peer-checked:bg-zinc-100 peer-checked:border-zinc-100 transition-colors"></div>
<iconify-icon className="absolute text-zinc-950 text-xs opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  I agree to the community guidelines.
                </span>
</label>
<button className="sm:w-auto hover:bg-white transition-colors flex text-sm font-medium text-zinc-950 bg-zinc-100 w-full rounded-lg pt-2.5 pr-6 pb-2.5 pl-6 gap-x-2 gap-y-2 items-center justify-center" type="submit">
                Submit Form
              </button>
</div>
</form>
</div>
</div>
</main>

<footer className="border-t border-zinc-900/50 mt-auto">
<div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<span className="text-xs text-zinc-600">
          © 2024 zoonsociety. All rights reserved.
        </span>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
