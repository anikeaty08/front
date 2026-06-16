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
      

<header className="absolute top-0 w-full z-50 flex justify-center pt-6 pb-6 md:pt-8 md:pb-8">
<div className="w-full max-w-7xl px-6 md:px-12 flex justify-between items-center">
<div className="text-white font-medium tracking-tighter text-xl uppercase mix-blend-overlay">Kollection</div>
<nav className="hidden md:flex gap-10 text-white/80 text-sm font-medium mix-blend-overlay">
<a className="hover:text-white transition-colors duration-300" href="#">Destinations</a>
<a className="hover:text-white transition-colors duration-300" href="#">Curation</a>
<a className="hover:text-white transition-colors duration-300" href="#">Journal</a>
</nav>
<button className="text-white hover:opacity-70 transition-opacity">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative h-[90vh] md:h-screen w-full overflow-hidden flex flex-col justify-end">
<img alt="Maldives Aerial" className="absolute inset-0 w-full h-full object-cover transform scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d7e89d8-785f-4abb-926a-3900c2aa128d_3840w.jpg"/>
<div className="hero-gradient absolute top-0 right-0 bottom-0 left-0"></div>
<div className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-8 md:pb-12 flex flex-col lg:flex-row relative gap-8 items-start lg:items-end justify-between z-10">

<div className="text-white w-full max-w-2xl">
<div className="flex flex-wrap items-center gap-3 mb-5 md:mb-6">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium tracking-widest uppercase">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                        Editor's Pick
                    </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium tracking-widest uppercase">
                        Ultimate Privacy
                    </span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none font-medium tracking-tight mb-4 md:mb-6">St. Regis</h1>
<p className="text-lg md:text-xl text-white/80 font-light max-w-lg leading-relaxed">
                    Ultra-private overwater villas with an exceptional house reef in the Baa Atoll UNESCO Biosphere.
                </p>
</div>

<div className="hidden lg:flex gap-2 lg:gap-3 relative z-10 shrink-0 overflow-x-auto no-scrollbar max-w-full pb-2 lg:pb-0">

<button className="w-16 h-20 xl:w-20 xl:h-28 rounded-xl overflow-hidden border border-white/20 hover:border-white/60 transition-all duration-500 relative group cursor-pointer shrink-0">
<img alt="Video thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105 transform" src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
<iconify-icon className="text-white ml-0.5" icon="solar:play-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</button>

<button className="w-16 h-20 xl:w-20 xl:h-28 rounded-xl overflow-hidden border border-white/20 hover:border-white/60 transition-all duration-500 relative group cursor-pointer shrink-0">
<img alt="Beach" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform" src="https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</button>

<button className="w-16 h-20 xl:w-20 xl:h-28 rounded-xl overflow-hidden border border-white/20 hover:border-white/60 transition-all duration-500 relative group cursor-pointer shrink-0">
<img alt="Rooms" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform" src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</button>

<button className="w-16 h-20 xl:w-20 xl:h-28 rounded-xl overflow-hidden border border-white/20 hover:border-white/60 transition-all duration-500 relative group cursor-pointer shrink-0">
<img alt="Restaurant" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38a6376f-c37e-44ce-a99d-25bb56eef5fd_320w.jpg"/>
</button>

<button className="w-16 h-20 xl:w-20 xl:h-28 rounded-xl overflow-hidden border border-white/20 hover:border-white/60 transition-all duration-500 relative group cursor-pointer shrink-0">
<img alt="Experiences" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d3a5470-7244-4d93-b9db-c43439cac289_320w.jpg"/>
</button>

<button className="w-16 h-20 xl:w-20 xl:h-28 rounded-xl overflow-hidden border border-white/20 hover:border-white/60 transition-all duration-500 relative flex items-center justify-center bg-white/5 backdrop-blur-md text-white text-sm font-medium group cursor-pointer shrink-0">
<span className="group-hover:scale-110 transition-transform duration-300">+24</span>
</button>
</div>
</div>
</section>

<div className="sticky top-0 z-40 nav-blur border-b border-stone-200/50 py-4 px-6 md:px-12 transition-all duration-300">
<div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
<nav className="hidden lg:flex items-center gap-8 overflow-x-auto no-scrollbar flex-1">
<a className="text-sm font-medium text-stone-900 border-b border-stone-900 pb-1 whitespace-nowrap" href="#overview">Overview</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors whitespace-nowrap" href="#villas">Villas</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors whitespace-nowrap" href="#">Food</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors whitespace-nowrap" href="#">Spa</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors whitespace-nowrap" href="#">Experience</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors whitespace-nowrap" href="#">Transportation</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors whitespace-nowrap" href="#">Reviews</a>
</nav>
<div className="lg:hidden font-serif text-xl font-medium tracking-tight text-stone-900">The Nautilus</div>
<div className="flex items-center gap-3 md:gap-6 shrink-0">
<button className="hidden md:inline-flex text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">
                    Talk to a specialist
                </button>
<button className="inline-flex items-center justify-center px-5 py-2.5 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-stone-800 transition-colors shadow-sm">
                    Get villa recommendation
                </button>
<button className="p-2.5 text-stone-500 hover:text-stone-900 transition-colors rounded-full hover:bg-stone-200/50 hidden sm:block">
<iconify-icon icon="solar:bookmark-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<section className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto" id="overview">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 bg-white p-8 md:p-10 rounded-2xl border border-stone-100 shadow-sm">
<div className="flex flex-col gap-2 relative lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-1 lg:after:bottom-1 lg:after:w-px lg:after:bg-stone-100 pr-4">
<span className="text-xs text-stone-400 font-medium tracking-widest uppercase">Privacy Score</span>
<div className="flex items-end gap-1.5 mt-1">
<span className="font-serif text-3xl font-medium tracking-tight text-stone-900 leading-none">9.8</span>
<span className="text-xs text-stone-400 pb-0.5">/10</span>
</div>
<div className="w-full bg-stone-100 h-1 mt-2.5 rounded-full overflow-hidden">
<div className="bg-stone-900 w-[98%] h-full rounded-full"></div>
</div>
</div>
<div className="flex flex-col gap-2 relative lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-1 lg:after:bottom-1 lg:after:w-px lg:after:bg-stone-100 pr-4">
<span className="text-xs text-stone-400 font-medium tracking-widest uppercase">Atmosphere</span>
<span className="text-sm font-medium text-stone-900 mt-2">Quiet &amp; Romantic</span>
<span className="text-xs text-stone-500 font-light">Highly adult-focused</span>
</div>
<div className="flex flex-col gap-2 relative lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-1 lg:after:bottom-1 lg:after:w-px lg:after:bg-stone-100 pr-4">
<span className="text-xs text-stone-400 font-medium tracking-widest uppercase">House Reef</span>
<span className="text-sm font-medium text-stone-900 mt-2">Exceptional</span>
<span className="text-xs text-stone-500 font-light">Accessible from villa</span>
</div>
<div className="flex flex-col gap-2 relative lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-1 lg:after:bottom-1 lg:after:w-px lg:after:bg-stone-100 pr-4">
<span className="text-xs text-stone-400 font-medium tracking-widest uppercase">Lagoon Swim</span>
<span className="text-sm font-medium text-stone-900 mt-2">Perfect</span>
<span className="text-xs text-stone-500 font-light">Crystal clear, sandy</span>
</div>
<div className="flex flex-col gap-2 relative lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-1 lg:after:bottom-1 lg:after:w-px lg:after:bg-stone-100 pr-4">
<span className="text-xs text-stone-400 font-medium tracking-widest uppercase">Arrival</span>
<div className="flex items-center gap-1.5 mt-2">
<iconify-icon className="text-stone-400" icon="solar:routing-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-sm font-medium text-stone-900">Easy</span>
</div>
<span className="text-xs text-stone-500 font-light">30m VIP Seaplane</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs text-stone-400 font-medium tracking-widest uppercase">Best For</span>
<span className="text-sm font-medium text-stone-900 mt-2">Total seclusion</span>
<span className="text-xs text-stone-500 font-light">Honeymoons</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto text-center">
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-stone-900 leading-[1.1] mb-10">
            Time stands still in a world of your own making.
        </h2>
<p className="text-base md:text-lg text-stone-500 font-light leading-relaxed mb-16 max-w-2xl mx-auto">
            Forget schedules, dress codes, and typical resort constraints. Here, everything is unscripted. Breakfast in bed at 3 PM? A private screening on a deserted sandbank? Your dedicated House Master ensures every whim is executed with invisible precision.
        </p>
<div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl group cursor-pointer">
<img alt="Resort Lifestyle" className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
</div>
<p className="text-xs text-stone-400 mt-5 font-light text-right uppercase tracking-widest">The Ocean Residence pool deck</p>
</section>

<section className="py-32 bg-white border-y border-stone-200/50" id="villas">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
<div className="max-w-xl">
<span className="text-xs text-stone-400 font-medium tracking-widest uppercase block mb-4">Accommodation</span>
<h3 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-6">The Residences</h3>
<p className="text-stone-500 font-light text-base leading-relaxed">26 immensely private houses and residences, each a masterpiece of bohemian elegance designed to blur the line between indoor and outdoor living.</p>
</div>
<button className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 group shrink-0 pb-1 border-b border-stone-900/30 hover:border-stone-900 transition-colors">
                    View all 4 categories
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-20">

<div className="group cursor-pointer flex flex-col">
<div className="overflow-hidden rounded-xl mb-8 aspect-[4/3] bg-stone-100 relative">
<img alt="Ocean House" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-5 left-5 px-3.5 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-medium text-stone-900 shadow-sm tracking-wide">Overwater</div>
</div>
<div className="flex justify-between items-start mb-4 gap-4">
<h4 className="font-serif text-3xl font-medium tracking-tight text-stone-900 leading-snug">Ocean House with Private Pool</h4>
<span className="text-sm font-medium text-stone-400 mt-1.5 shrink-0">282 sqm</span>
</div>
<p className="text-stone-500 font-light text-sm leading-relaxed mb-8 flex-1">Suspended over the lagoon with glass floor panels in the living room, expansive sun decks, and a curved infinity pool looking out to the unbroken horizon.</p>
<div className="flex flex-wrap gap-6 pt-6 border-t border-stone-100">
<div className="flex items-center gap-2 text-sm text-stone-600 font-light">
<iconify-icon className="text-stone-400" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>2 Adults + 1 Child</span>
</div>
<div className="flex items-center gap-2 text-sm text-stone-600 font-light">
<iconify-icon className="text-stone-400" icon="solar:bed-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>1 King Bed</span>
</div>
</div>
</div>

<div className="group cursor-pointer flex flex-col md:mt-16">
<div className="overflow-hidden rounded-xl mb-8 aspect-[4/3] bg-stone-100 relative">
<img alt="Beach Residence" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-5 left-5 px-3.5 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-medium text-stone-900 shadow-sm tracking-wide">Beachfront</div>
</div>
<div className="flex justify-between items-start mb-4 gap-4">
<h4 className="font-serif text-3xl font-medium tracking-tight text-stone-900 leading-snug">Beach Residence with Private Pool</h4>
<span className="text-sm font-medium text-stone-400 mt-1.5 shrink-0">400 sqm</span>
</div>
<p className="text-stone-500 font-light text-sm leading-relaxed mb-8 flex-1">Steps from the powdery sand, featuring a separate living room, sprawling walled garden, and a massive custom-tiled pool shaded by swaying palm trees.</p>
<div className="flex flex-wrap gap-6 pt-6 border-t border-stone-100">
<div className="flex items-center gap-2 text-sm text-stone-600 font-light">
<iconify-icon className="text-stone-400" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>4 Guests</span>
</div>
<div className="flex items-center gap-2 text-sm text-stone-600 font-light">
<iconify-icon className="text-stone-400" icon="solar:home-angle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>2 Bedrooms</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center max-w-3xl mx-auto">
<span className="text-xs text-stone-400 font-medium tracking-widest uppercase block mb-6">Concierge</span>
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-8 leading-tight">Find your perfect sanctuary</h2>
<p className="text-stone-500 font-light mb-12 text-base md:text-lg leading-relaxed px-4">
            Rather than browsing endlessly, let our curation team match you with the ideal residence based on your preferences for privacy, sun orientation, and reef access.
        </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-5">
<button className="w-full sm:w-auto px-8 py-4 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/10">
                Start guided selection
            </button>
<button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-stone-300 text-stone-900 text-sm font-medium rounded-full hover:border-stone-900 transition-colors">
                Talk to a specialist
            </button>
</div>
</section>

<footer className="bg-[#121212] text-stone-400 py-16 px-6 md:px-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-stone-200 font-medium tracking-tighter text-xl uppercase">Kollection</div>
<div className="flex gap-8 text-xs font-light tracking-wide uppercase">
<a className="hover:text-stone-200 transition-colors" href="#">Instagram</a>
<a className="hover:text-stone-200 transition-colors" href="#">Journal</a>
<a className="hover:text-stone-200 transition-colors" href="#">Contact</a>
</div>
<div className="text-xs font-light text-stone-500">© 2024 Kollection. All rights reserved.</div>
</div>
</footer>

    </>
  );
}
