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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<div className="bg-element text-4xl top-20 left-10">☁️</div>
<div className="bg-element text-3xl top-40 right-20" style={{animationDelay: '2s'}}>🌸</div>
<div className="bg-element text-4xl top-1/4 left-1/4" style={{animationDelay: '4s'}}>✨</div>
<div className="bg-element text-5xl top-1/2 right-10" style={{animationDelay: '1s'}}>☁️</div>
<div className="bg-element text-3xl bottom-1/4 left-20" style={{animationDelay: '3s'}}>🦋</div>
</div>

<header className="relative pt-8 pb-16 md:pt-12 md:pb-24 px-4 flex flex-col items-center text-center z-10 w-full overflow-hidden">

<div className="w-full absolute top-0 left-0 overflow-hidden bg-white/50 border-b-2 border-[#3E2A1E] py-2 z-20">
<div className="animate-marquee text-lg md:text-xl">
<span className="px-4">⭐ 🌸 ☁️ 🦋 ✨ 🌼 🐻 🐦 ⭐ 🌸 ☁️ 🦋 ✨ 🌼 🐻 🐦 ⭐ 🌸 ☁️ 🦋 ✨ 🌼 🐻 🐦</span>
<span className="px-4">⭐ 🌸 ☁️ 🦋 ✨ 🌼 🐻 🐦 ⭐ 🌸 ☁️ 🦋 ✨ 🌼 🐻 🐦 ⭐ 🌸 ☁️ 🦋 ✨ 🌼 🐻 🐦</span>
</div>
</div>
<div className="max-w-4xl mx-auto mt-12 flex flex-col items-center">

<div className="mb-6 relative animate-float">
<div className="w-24 h-24 bg-[#C9A9E9] rounded-full cartoon-border flex items-center justify-center text-5xl overflow-hidden relative">

<span className="absolute z-0">🐻</span>
<img alt="Meadow Bear Logo" className="w-full h-full object-contain z-10 px-0 relative" onerror="this.style.display='none'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a17d9bf-75ba-44f1-be9e-ea44bad1252c_320w.png"/>
</div>
</div>

<h1 className="font-nunito font-semibold tracking-tight text-[#FFD966] text-6xl md:text-8xl text-bubbly mb-6 leading-tight">
                Meadow Bear
            </h1>
<p className="text-xl md:text-2xl font-medium max-w-lg mx-auto mb-6 text-[#6B4C3B]">
                Songs, stories, and learning for your little one
            </p>

<div className="inline-flex items-center gap-2 bg-[#FF7F7F] text-white px-5 py-2 rounded-full font-nunito font-semibold tracking-tight text-lg mb-10 cartoon-border rotate-[-2deg]">
<span>🐦</span>
<span>Coming soon to YouTube Kids!</span>
</div>

<button className="bg-[#FFD966] text-[#3E2A1E] font-nunito font-semibold tracking-tight text-2xl md:text-3xl px-10 py-5 rounded-[2rem] cartoon-border-lg hover-bounce flex items-center gap-3 group relative overflow-hidden">
<span className="relative z-10">Notify Me! 🔔</span>
<div className="absolute inset-0 bg-white/20 w-full translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
</button>

<div className="mt-16 relative w-full max-w-2xl aspect-video bg-[#A8D5A2]/30 rounded-[3rem] cartoon-border-lg p-4 animate-float-delayed overflow-hidden flex items-end justify-center">
<div className="bg-center opacity-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/968f29a7-ded6-4efc-940c-faf4ebe6ffe3_1600w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0">
</div>

</div>
</div>
</header>

<section className="w-full bg-[#FFFBF0] py-12 overflow-hidden border-y-[3px] border-[#3E2A1E] z-10 relative shadow-[0_4px_0_0_#3E2A1E]">

<div className="mb-6 transform rotate-[-1deg]">
<div className="animate-marquee gap-4 pb-2 px-4">

<div className="flex gap-4 items-center">
<div className="bg-[#FFD966] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">A</div>
<div className="bg-[#7EC8E3] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">B</div>
<div className="bg-[#A8D5A2] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">C</div>
<div className="bg-[#C9A9E9] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">D</div>
<div className="bg-[#FF7F7F] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">E</div>
<div className="bg-[#FFD966] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">F</div>
<div className="bg-[#7EC8E3] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">G</div>
<div className="bg-[#A8D5A2] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">H</div>
<div className="bg-white text-[#3E2A1E] font-nunito font-semibold text-4xl w-16 h-16 rounded-full flex items-center justify-center cartoon-border">🐻</div>
</div>
<div className="flex gap-4 items-center">
<div className="bg-[#FFD966] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">A</div>
<div className="bg-[#7EC8E3] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">B</div>
<div className="bg-[#A8D5A2] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">C</div>
<div className="bg-[#C9A9E9] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">D</div>
<div className="bg-[#FF7F7F] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">E</div>
<div className="bg-[#FFD966] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">F</div>
<div className="bg-[#7EC8E3] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">G</div>
<div className="bg-[#A8D5A2] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">H</div>
<div className="bg-white text-[#3E2A1E] font-nunito font-semibold text-4xl w-16 h-16 rounded-full flex items-center justify-center cartoon-border">🐻</div>
</div>
</div>
</div>

<div className="transform rotate-[1deg]">
<div className="animate-marquee-reverse gap-4 pb-2 px-4">
<div className="flex gap-4 items-center">
<div className="bg-[#C9A9E9] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">S</div>
<div className="bg-[#FF7F7F] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">T</div>
<div className="bg-[#FFD966] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">U</div>
<div className="bg-[#7EC8E3] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">V</div>
<div className="bg-[#A8D5A2] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">W</div>
<div className="bg-[#C9A9E9] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">X</div>
<div className="bg-[#FF7F7F] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">Y</div>
<div className="bg-[#FFD966] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">Z</div>
<div className="bg-white text-[#3E2A1E] font-nunito font-semibold text-4xl w-16 h-16 rounded-full flex items-center justify-center cartoon-border">🐦</div>
</div>
<div className="flex gap-4 items-center">
<div className="bg-[#C9A9E9] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">S</div>
<div className="bg-[#FF7F7F] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">T</div>
<div className="bg-[#FFD966] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">U</div>
<div className="bg-[#7EC8E3] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">V</div>
<div className="bg-[#A8D5A2] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">W</div>
<div className="bg-[#C9A9E9] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">X</div>
<div className="bg-[#FF7F7F] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">Y</div>
<div className="bg-[#FFD966] text-[#3E2A1E] font-nunito font-semibold text-3xl w-16 h-16 rounded-2xl flex items-center justify-center cartoon-border">Z</div>
<div className="bg-white text-[#3E2A1E] font-nunito font-semibold text-4xl w-16 h-16 rounded-full flex items-center justify-center cartoon-border">🐦</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 py-24 relative z-10">
<div className="text-center mb-16">
<h2 className="font-nunito font-semibold tracking-tight text-4xl md:text-5xl text-[#3E2A1E] mb-4">First Three Episodes</h2>
<p className="text-lg md:text-xl text-[#6B4C3B] font-medium bg-white/60 inline-block px-6 py-2 rounded-full border-2 border-[#3E2A1E] rotate-1">A peek at what's coming on launch day</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-[2.5rem] p-6 cartoon-border-lg hover:rotate-[-2deg] flex flex-col h-full group cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-[#FFD966]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-2 mb-4 relative z-10">
<span className="bg-[#FFD966] text-[#3E2A1E] text-xs font-nunito font-semibold uppercase tracking-tight px-3 py-1.5 rounded-full border-2 border-[#3E2A1E]">Episode 1</span>
</div>
<div className="bg-[#FFFBF0] border-4 border-[#3E2A1E] rounded-3xl h-48 mb-6 flex items-center justify-center text-6xl relative overflow-hidden group-hover:scale-[1.02] transition-transform">
<div className="[background-size:100%] opacity-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77dc1504-be80-440c-a403-2183680a9795_800w.png)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<h3 className="font-nunito font-semibold tracking-tight text-2xl text-[#3E2A1E] leading-snug mb-2 relative z-10">Colors &amp; Shapes with Meadow Bear</h3>
</div>

<div className="bg-white rounded-[2.5rem] p-6 cartoon-border-lg hover:rotate-[2deg] flex flex-col h-full group cursor-pointer relative overflow-hidden md:mt-8">
<div className="absolute inset-0 bg-[#7EC8E3]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-2 mb-4 relative z-10">
<span className="bg-[#7EC8E3] text-[#3E2A1E] text-xs font-nunito font-semibold uppercase tracking-tight px-3 py-1.5 rounded-full border-2 border-[#3E2A1E]">Episode 2</span>
</div>
<div className="bg-[#FFFBF0] border-4 border-[#3E2A1E] rounded-3xl h-48 mb-6 flex items-center justify-center text-6xl relative overflow-hidden group-hover:scale-[1.02] transition-transform">
<div className="[background-size:100%] bg-center opacity-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0872c00c-f1ff-41eb-96c2-17de600846c5_800w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<h3 className="font-nunito font-semibold tracking-tight text-2xl text-[#3E2A1E] leading-snug mb-2 relative z-10">Numbers 1 to 10 with Meadow Bear</h3>
</div>

<div className="bg-white rounded-[2.5rem] p-6 cartoon-border-lg hover:rotate-[-1deg] flex flex-col h-full group cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-[#A8D5A2]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-2 mb-4 relative z-10">
<span className="bg-[#A8D5A2] text-[#3E2A1E] text-xs font-nunito font-semibold uppercase tracking-tight px-3 py-1.5 rounded-full border-2 border-[#3E2A1E]">Episode 3</span>
</div>
<div className="bg-[#FFFBF0] border-4 border-[#3E2A1E] rounded-3xl h-48 mb-6 flex items-center justify-center text-6xl relative overflow-hidden group-hover:scale-[1.02] transition-transform">
<div className="[background-size:100%] opacity-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91a9c3c2-4d81-4328-ad05-9e61ed1fab8d_800w.png)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<h3 className="font-nunito font-semibold tracking-tight text-2xl text-[#3E2A1E] leading-snug mb-2 relative z-10">The Alphabet with Meadow Bear</h3>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-4 py-20 relative z-10">
<h2 className="font-nunito font-semibold tracking-tight text-4xl md:text-6xl text-center text-[#3E2A1E] mb-16 text-bubbly text-[#FFD966]">Meet the Characters</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">

<div className="bg-white rounded-[3rem_2rem_4rem_2rem] p-8 cartoon-border-lg flex flex-col items-center text-center relative mt-12 md:mt-0">
<div className="w-32 h-32 rounded-full cartoon-border-lg absolute -top-16 bg-[#C9A9E9] flex items-center justify-center overflow-hidden z-10">
<span className="text-6xl absolute z-0">🐻</span>
<img alt="Meadow Bear" className="w-full h-full object-cover object-top relative z-10" onerror="this.style.display='none'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bff55643-c7d7-41ae-b6e1-0301341be490_320w.png"/>
</div>
<div className="mt-12">
<h3 className="font-nunito font-semibold tracking-tight text-3xl text-[#3E2A1E] mb-3">Meadow Bear</h3>
<div className="inline-block bg-[#C9A9E9] text-[#3E2A1E] px-4 py-1.5 rounded-full font-nunito font-semibold text-sm border-2 border-[#3E2A1E] mb-4 transform rotate-1">Guide &amp; Teacher</div>
<p className="text-lg text-[#6B4C3B] leading-relaxed">A gentle, curious bear who loves exploring the world. Meadow Bear guides your little ones through new concepts with patience and a big warm hug.</p>
</div>
</div>

<div className="bg-white rounded-[2rem_4rem_2rem_3rem] p-8 cartoon-border-lg flex flex-col items-center text-center relative mt-16 md:mt-0">
<div className="w-32 h-32 rounded-full cartoon-border-lg absolute -top-16 bg-[#FF7F7F] flex items-center justify-center overflow-hidden z-10">
<span className="text-6xl absolute z-0">🐦</span>
<img alt="J Bird" className="w-full h-full object-cover object-top relative z-10" onerror="this.style.display='none'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ccb89455-97f3-4c48-adb6-0f509ff1f644_320w.png"/>
</div>
<div className="mt-12">
<h3 className="font-nunito font-semibold tracking-tight text-3xl text-[#3E2A1E] mb-3">J Bird</h3>
<div className="inline-block bg-[#7EC8E3] text-[#3E2A1E] px-4 py-1.5 rounded-full font-nunito font-semibold text-sm border-2 border-[#3E2A1E] mb-4 transform -rotate-1">Comedy &amp; Energy</div>
<p className="text-lg text-[#6B4C3B] leading-relaxed">Fast, funny, and full of questions! J Bird brings the laughs and high energy, making sure learning is always an exciting adventure.</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 py-24 relative z-10">
<h2 className="font-nunito font-semibold tracking-tight text-4xl md:text-5xl text-center text-[#3E2A1E] mb-16">Why Parents Love It</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-[#FFD966]/20 p-8 rounded-[2.5rem] cartoon-border flex gap-6 items-start">
<div className="w-16 h-16 rounded-full bg-white cartoon-border flex items-center justify-center text-3xl flex-shrink-0">🎵</div>
<div className="">
<h3 className="font-nunito font-semibold tracking-tight text-2xl text-[#3E2A1E] mb-2">Catchy Original Songs</h3>
<p className="text-lg text-[#6B4C3B]">Music that won't drive you crazy. Our acoustic, gentle melodies are designed to be enjoyed by the whole family.</p>
</div>
</div>

<div className="bg-[#7EC8E3]/20 p-8 rounded-[2.5rem] cartoon-border flex gap-6 items-start">
<div className="w-16 h-16 rounded-full bg-white cartoon-border flex items-center justify-center text-3xl flex-shrink-0">🧠</div>
<div>
<h3 className="font-nunito font-semibold tracking-tight text-2xl text-[#3E2A1E] mb-2">Real Learning, Gently</h3>
<p className="text-lg text-[#6B4C3B]">Paced specifically for 2-4 year olds. No hyper-editing or flashing colors. Just calm, thoughtful education.</p>
</div>
</div>

<div className="bg-[#A8D5A2]/20 p-8 rounded-[2.5rem] cartoon-border flex gap-6 items-start">
<div className="w-16 h-16 rounded-full bg-white cartoon-border flex items-center justify-center text-3xl flex-shrink-0">👨‍👩‍👧</div>
<div className="">
<h3 className="font-nunito font-semibold tracking-tight text-2xl text-[#3E2A1E] mb-2">Co-viewing Friendly</h3>
<p className="text-lg text-[#6B4C3B]">Content that sparks conversations. We encourage moments where you can interact with your toddler during the show.</p>
</div>
</div>

<div className="bg-[#C9A9E9]/20 p-8 rounded-[2.5rem] cartoon-border flex gap-6 items-start">
<div className="w-16 h-16 rounded-full bg-white cartoon-border flex items-center justify-center text-3xl flex-shrink-0">🌎</div>
<div>
<h3 className="font-nunito font-semibold tracking-tight text-2xl text-[#3E2A1E] mb-2">Going Global</h3>
<p className="text-lg text-[#6B4C3B]">Themes of kindness, nature, and understanding that resonate with families everywhere.</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 pb-12 pt-8 relative z-10">
<div className="bg-gradient-to-br from-[#FFD966] to-[#A8D5A2] py-20 px-6 text-center rounded-[3rem] border-4 border-[#3E2A1E] shadow-[8px_8px_0_0_#3E2A1E] relative overflow-hidden">

<div className="absolute top-10 left-10 text-3xl animate-float opacity-70">✨</div>
<div className="absolute bottom-20 right-10 text-4xl animate-float-delayed opacity-70">🚀</div>
<div className="absolute top-20 right-20 text-3xl animate-float opacity-70">🌸</div>
<div className="absolute bottom-10 left-20 text-3xl animate-float-delayed opacity-70">⭐</div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="font-nunito font-semibold tracking-tight text-5xl md:text-6xl text-[#3E2A1E] mb-6">Launch is almost here!</h2>
<p className="text-xl md:text-2xl font-medium text-[#3E2A1E]/80 mb-10">Be the first parent to know when Meadow Bear goes live on YouTube Kids.</p>
<button className="bg-white text-[#3E2A1E] font-nunito font-semibold tracking-tight text-2xl md:text-3xl px-12 py-5 rounded-[2.5rem] cartoon-border-lg hover-bounce inline-flex items-center gap-3">
<span className="w-10 h-9 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7b99aad-f049-444b-ad1a-8fd871f50f76_320w.png)] bg-cover bg-center relative"></span>
<span className="">Count Me In!</span>
</button>
</div>
</div>
</section>

<footer className="text-center py-12 relative z-10">
<div className="flex justify-center gap-4 mb-6 text-[#3E2A1E]/40 text-xl">
<span>🐾</span>
<span>🐾</span>
<span>🐾</span>
</div>
<p className="text-[#6B4C3B] text-sm font-medium">Made with ♥ for toddlers aged 2–4 · COPPA compliant</p>
<p className="text-[#6B4C3B] text-sm font-medium mt-2">© 2026 Meadow Bear. All rights reserved.</p>
</footer>

    </>
  );
}
