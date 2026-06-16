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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
},
colors: {
brand: {
black: '#000000',
white: '#FFFFFF',
zinc900: '#111111',
zinc800: '#222222',
zinc100: '#F5F5F5'
}
}
}
}
}



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
      

<div className="fixed top-0 w-full z-50 bg-brand-black border-b border-white/10 text-brand-white py-2 text-xs flex justify-center gap-6 tracking-widest uppercase font-medium overflow-hidden whitespace-nowrap">
<span>★ EARN LOYALTY POINTS ON ALL ORDERS</span>
<span className="hidden sm:inline">★ 10% OFF YOUR FIRST ORDER</span>
<span className="hidden md:inline">★ FREE UK DELIVERY OVER £50</span>
</div>

<header className="fixed top-8 w-full z-40 px-6 py-4 transition-all duration-300 backdrop-blur-md bg-black/40 border-b border-white/5 text-white">
<nav className="max-w-[1400px] mx-auto flex justify-between items-center">

<div className="flex items-center gap-8 flex-1">
<button className="hover:opacity-70 transition-opacity flex items-center">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="hidden lg:flex gap-6 text-sm font-medium tracking-wide">
<a className="hover:opacity-70 transition-opacity" href="#">Eat</a>
<a className="hover:opacity-70 transition-opacity" href="#">Move</a>
<a className="hover:opacity-70 transition-opacity" href="#">Mind</a>
<a className="hover:opacity-70 transition-opacity" href="#">Sleep</a>
<a className="hover:opacity-70 transition-opacity" href="#">Community</a>
</div>
</div>

<div className="flex-shrink-0 text-center">
<a className="text-3xl font-semibold tracking-tighter hover:opacity-80 transition-opacity" href="#">healf.</a>
</div>

<div className="flex items-center gap-4 flex-1 justify-end">
<button className="hidden md:flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-medium hover:bg-white/10 transition-colors">
<iconify-icon className="text-base" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
                    Search
                </button>
<button className="hidden lg:flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-medium hover:bg-white/10 transition-colors">
<iconify-icon className="text-base text-blue-400" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
                    Ask Helix
                </button>
<button className="hover:opacity-70 transition-opacity flex items-center">
<iconify-icon className="text-2xl" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="hover:opacity-70 transition-opacity flex items-center">
<iconify-icon className="text-2xl" icon="solar:cart-large-2-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>
</header>

<section className="relative h-[90vh] min-h-[600px] flex items-center justify-center pt-20 px-6">

<div className="absolute inset-0 z-0 overflow-hidden bg-brand-zinc900">
<img alt="Hero Background" className="w-full h-full object-cover opacity-40 blur-md scale-105" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&amp;w=2920&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
</div>
<div className="relative z-10 w-full max-w-4xl flex flex-col items-center mt-12">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-center mb-10 leading-none">What's your health goal today?</h1>

<div className="w-full max-w-2xl bg-white rounded-full flex items-center p-2 mb-8 shadow-2xl">
<button className="w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center shrink-0 hover:bg-brand-zinc800 transition-colors">
<iconify-icon className="text-xl" icon="solar:add-linear" strokeWidth="1.5"></iconify-icon>
</button>
<input className="flex-1 bg-transparent border-none focus:outline-none px-6 text-brand-black text-base md:text-lg placeholder-zinc-400" placeholder="Start typing your goal..." type="text"/>
<button className="w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center shrink-0 hover:bg-brand-zinc800 transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="flex flex-wrap justify-center gap-3">
<button className="rounded-full border border-white/40 bg-black/20 backdrop-blur-sm px-6 py-2.5 text-sm hover:bg-white hover:text-black transition-colors">Brain fog</button>
<button className="rounded-full border border-white/40 bg-black/20 backdrop-blur-sm px-6 py-2.5 text-sm hover:bg-white hover:text-black transition-colors">Digestive issues</button>
<button className="rounded-full border border-white/40 bg-black/20 backdrop-blur-sm px-6 py-2.5 text-sm hover:bg-white hover:text-black transition-colors">Sleep quality</button>
<button className="rounded-full border border-white/40 bg-black/20 backdrop-blur-sm px-6 py-2.5 text-sm hover:bg-white hover:text-black transition-colors">Joint pain</button>
</div>
</div>
</section>

<section className="bg-brand-black text-white py-32 px-6">
<div className="max-w-[1400px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16 border-b border-white/10 pb-12">
<h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase leading-tight w-full md:w-1/2">Eat, Move,<br/>Mind, Sleep</h2>
<p className="text-zinc-400 text-base md:text-lg font-light w-full md:w-1/3 leading-relaxed">We believe these four pillars are the foundation to a healthy life. We curate the best products in each category to help you build your daily rituals.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-brand-zinc900 block" href="#">
<img alt="Eat" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<h3 className="text-3xl font-light tracking-tight uppercase">Eat</h3>
<div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>

<a className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-brand-zinc900 block" href="#">
<img alt="Move" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<h3 className="text-3xl font-light tracking-tight uppercase">Move</h3>
<div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>

<a className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-brand-zinc900 block" href="#">
<img alt="Mind" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<h3 className="text-3xl font-light tracking-tight uppercase">Mind</h3>
<div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>

<a className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-brand-zinc900 block" href="#">
<img alt="Sleep" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1541480601022-2308c0f02487?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<h3 className="text-3xl font-light tracking-tight uppercase">Sleep</h3>
<div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="bg-brand-black text-white py-32 px-6 border-t border-white/10">
<div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

<div className="w-full lg:w-[45%]">
<div className="lg:sticky lg:top-40">
<h2 className="text-5xl md:text-7xl lg:text-[5rem] font-light tracking-tighter uppercase leading-[0.9]">Bestselling<br/>Everyday<br/>Staples</h2>
<button className="mt-12 rounded-full border border-white px-8 py-4 text-sm font-medium hover:bg-white hover:text-black transition-colors flex items-center gap-3">
                        Shop all bestsellers
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="w-full lg:w-[55%] flex flex-col">

<a className="group flex items-center gap-6 py-8 border-b border-white/10 hover:border-white/40 transition-colors" href="#">
<div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-brand-zinc900 overflow-hidden shrink-0">
<img alt="Product" className="w-full h-full object-cover mix-blend-screen opacity-80 group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex-1">
<p className="text-xs md:text-sm text-zinc-500 tracking-widest uppercase mb-2">Dirtea</p>
<h4 className="text-xl md:text-3xl font-light tracking-tight group-hover:text-zinc-300 transition-colors">Lion's Mane Mushroom Extract</h4>
</div>
<div className="hidden sm:block text-zinc-500 text-sm font-medium pr-8">Powder</div>
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-up-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>

<a className="group flex items-center gap-6 py-8 border-b border-white/10 hover:border-white/40 transition-colors" href="#">
<div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-brand-zinc900 overflow-hidden shrink-0">
<img alt="Product" className="w-full h-full object-cover mix-blend-screen opacity-80 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<p className="text-xs md:text-sm text-zinc-500 tracking-widest uppercase mb-2">Athletic Greens</p>
<h4 className="text-xl md:text-3xl font-light tracking-tight group-hover:text-zinc-300 transition-colors">AG1 Comprehensive Nutrition</h4>
</div>
<div className="hidden sm:block text-zinc-500 text-sm font-medium pr-8">Powder</div>
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-up-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>

<a className="group flex items-center gap-6 py-8 border-b border-white/10 hover:border-white/40 transition-colors" href="#">
<div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-brand-zinc900 overflow-hidden shrink-0">
<img alt="Product" className="w-full h-full object-cover mix-blend-screen opacity-80 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<p className="text-xs md:text-sm text-zinc-500 tracking-widest uppercase mb-2">Heights</p>
<h4 className="text-xl md:text-3xl font-light tracking-tight group-hover:text-zinc-300 transition-colors">Vitals⁺ Daily Essential Nutrients</h4>
</div>
<div className="hidden sm:block text-zinc-500 text-sm font-medium pr-8">Capsules</div>
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-up-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="bg-brand-white text-brand-black py-32 px-6">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] bg-brand-zinc100">
<img alt="Routine" className="absolute inset-0 w-full h-full object-cover mix-blend-darken opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<h3 className="text-3xl md:text-4xl font-light tracking-tight uppercase">Morning<br/>Routine</h3>
<div className="flex justify-end">
<button className="bg-brand-black text-white rounded-full px-8 py-4 text-sm font-medium flex items-center gap-3 hover:bg-zinc-800 transition-colors">
                                Shop collection <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] bg-brand-zinc100">
<img alt="Recovery" className="absolute inset-0 w-full h-full object-cover mix-blend-darken opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<h3 className="text-3xl md:text-4xl font-light tracking-tight uppercase">Deep<br/>Recovery</h3>
<div className="flex justify-end">
<button className="bg-brand-black text-white rounded-full px-8 py-4 text-sm font-medium flex items-center gap-3 hover:bg-zinc-800 transition-colors">
                                Shop collection <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] bg-brand-zinc100">
<img alt="Performance" className="absolute inset-0 w-full h-full object-cover mix-blend-darken opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<h3 className="text-3xl md:text-4xl font-light tracking-tight uppercase">Peak<br/>Performance</h3>
<div className="flex justify-end">
<button className="bg-brand-black text-white rounded-full px-8 py-4 text-sm font-medium flex items-center gap-3 hover:bg-zinc-800 transition-colors">
                                Shop collection <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] bg-brand-zinc100">
<img alt="Longevity" className="absolute inset-0 w-full h-full object-cover mix-blend-darken opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<h3 className="text-3xl md:text-4xl font-light tracking-tight uppercase">Everyday<br/>Longevity</h3>
<div className="flex justify-end">
<button className="bg-brand-black text-white rounded-full px-8 py-4 text-sm font-medium flex items-center gap-3 hover:bg-zinc-800 transition-colors">
                                Shop collection <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-brand-white text-brand-black py-32 px-6 border-t border-black/10">
<div className="max-w-[1400px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16 border-b border-black/10 pb-12">
<h2 className="text-4xl md:text-6xl font-light tracking-tighter uppercase leading-tight w-full md:w-1/2">The Healf<br/>Source</h2>
<p className="text-zinc-500 text-base md:text-lg font-light w-full md:w-1/3 leading-relaxed">Expert insights, deep dives into ingredients, and lifestyle guides to help you optimize your daily routines.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

<a className="group block" href="#">
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-brand-zinc100 mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">Mind</span>
<h4 className="text-xl font-light tracking-tight leading-snug">The science behind functional mushrooms for focus</h4>
<span className="text-sm font-medium border-b border-black inline-block w-fit pb-0.5 mt-2 hover:text-zinc-600 hover:border-zinc-600 transition-colors">Read More</span>
</div>
</a>

<a className="group block" href="#">
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-brand-zinc100 mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">Eat</span>
<h4 className="text-xl font-light tracking-tight leading-snug">Building a microbiome-friendly morning routine</h4>
<span className="text-sm font-medium border-b border-black inline-block w-fit pb-0.5 mt-2 hover:text-zinc-600 hover:border-zinc-600 transition-colors">Read More</span>
</div>
</a>

<a className="group block" href="#">
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-brand-zinc100 mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">Move</span>
<h4 className="text-xl font-light tracking-tight leading-snug">Optimizing recovery with cold exposure therapy</h4>
<span className="text-sm font-medium border-b border-black inline-block w-fit pb-0.5 mt-2 hover:text-zinc-600 hover:border-zinc-600 transition-colors">Read More</span>
</div>
</a>

<a className="group block" href="#">
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-brand-zinc100 mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">Sleep</span>
<h4 className="text-xl font-light tracking-tight leading-snug">Why magnesium is the ultimate evening supplement</h4>
<span className="text-sm font-medium border-b border-black inline-block w-fit pb-0.5 mt-2 hover:text-zinc-600 hover:border-zinc-600 transition-colors">Read More</span>
</div>
</a>
</div>
<div className="flex justify-between items-center">
<button className="bg-brand-black text-white rounded-full px-8 py-4 text-sm font-medium hover:bg-zinc-800 transition-colors">Explore the source</button>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="bg-brand-black text-white py-32 px-6 overflow-hidden">
<div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-20">

<div className="w-full lg:w-1/3">
<div className="lg:sticky lg:top-40">
<h2 className="text-5xl md:text-6xl font-light tracking-tighter uppercase mb-8 leading-[1.1]">Our Curation<br/>Process</h2>
<p className="text-zinc-400 text-lg mb-10 font-light leading-relaxed">We sift through thousands of brands so you don't have to. Only the top 1% make it onto Healf, ensuring everything you find here is backed by science and trusted by experts.</p>
<button className="rounded-full border border-white px-8 py-4 text-sm font-medium hover:bg-white hover:text-black transition-colors">Learn about our standards</button>
</div>
</div>

<div className="w-full lg:w-2/3 flex flex-col gap-32 relative">

<div className="relative w-full md:w-[85%] ml-auto">
<div className="relative aspect-[3/4] md:aspect-[4/3] rounded-2xl overflow-hidden bg-brand-zinc900">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
<h3 className="absolute top-12 left-10 md:left-16 text-3xl md:text-5xl font-light tracking-tighter w-2/3 leading-tight">Sourcing the world's best.</h3>
</div>
<span className="absolute top-8 -right-4 md:-right-12 text-8xl md:text-[10rem] font-light text-white/20 tracking-tighter leading-none pointer-events-none select-none z-10">01</span>
</div>

<div className="relative w-full md:w-[85%] ml-auto">
<div className="relative aspect-[3/4] md:aspect-[4/3] rounded-2xl overflow-hidden bg-brand-zinc900">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
<h3 className="absolute top-12 left-10 md:left-16 text-3xl md:text-5xl font-light tracking-tighter w-2/3 leading-tight">Rigorous expert vetting.</h3>
</div>
<span className="absolute top-8 -right-4 md:-right-12 text-8xl md:text-[10rem] font-light text-white/20 tracking-tighter leading-none pointer-events-none select-none z-10">02</span>
</div>

<div className="relative w-full md:w-[85%] ml-auto">
<div className="relative aspect-[3/4] md:aspect-[4/3] rounded-2xl overflow-hidden bg-brand-zinc900">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
<h3 className="absolute top-12 left-10 md:left-16 text-3xl md:text-5xl font-light tracking-tighter w-2/3 leading-tight">Tested by our community.</h3>
</div>
<span className="absolute top-8 -right-4 md:-right-12 text-8xl md:text-[10rem] font-light text-white/20 tracking-tighter leading-none pointer-events-none select-none z-10">03</span>
</div>
</div>
</div>
</section>

<footer className="bg-brand-black text-white pt-32 pb-12 px-6 border-t border-white/10">
<div className="max-w-[1400px] mx-auto">

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 border-b border-white/10 pb-20 mb-16">

<div className="w-full lg:w-1/2">
<div className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter leading-none hover:opacity-80 transition-opacity cursor-pointer">healf.</div>
</div>

<div className="w-full lg:w-[40%] max-w-md">
<p className="text-zinc-400 mb-6 text-sm md:text-base font-light">Join the community. Subscribe to our newsletter for exclusive offers and expert health guides.</p>
<div className="bg-brand-zinc900 rounded-full flex items-center p-1.5 border border-white/10 focus-within:border-white/40 transition-colors">
<input className="flex-1 bg-transparent border-none focus:outline-none px-6 text-white text-sm md:text-base placeholder-zinc-500" placeholder="Email address" type="email"/>
<button className="bg-white text-black rounded-full px-8 py-3.5 text-sm font-semibold hover:bg-zinc-200 transition-colors">Subscribe</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm text-zinc-400 font-light">

<div>
<h5 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Shop</h5>
<ul className="space-y-4">
<li><a className="hover:text-white transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-white transition-colors" href="#">Bestsellers</a></li>
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Brands A-Z</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>

<div>
<h5 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Explore</h5>
<ul className="space-y-4">
<li><a className="hover:text-white transition-colors" href="#">The Healf Source</a></li>
<li><a className="hover:text-white transition-colors" href="#">Our Standards</a></li>
<li><a className="hover:text-white transition-colors" href="#">Meet the Advisors</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
</ul>
</div>

<div>
<h5 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Support</h5>
<ul className="space-y-4">
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Track Order</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accessibility</a></li>
</ul>
</div>

<div className="flex flex-col justify-between">
<div>
<h5 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Social</h5>
<div className="flex gap-4 mb-8">
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div className="text-xs space-y-2">
<p>© 2024 Healf. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
