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
sans: ['Syne', 'sans-serif'],
serif: ['Instrument Serif', 'serif'],
body: ['Inter', 'sans-serif'],
},
colors: {
cyan: {
DEFAULT: '#00F3FF',
500: '#00F3FF',
400: '#33F5FF',
900: '#004D52',
}
},
animation: {
'fade-up': 'fadeUp 0.8s ease-out forwards',
'scroll': 'scroll 30s linear infinite',
'float': 'float 8s ease-in-out infinite',
'float-delayed': 'float 8s ease-in-out 4s infinite',
'wave-slow': 'wave 15s linear infinite',
'wave-slower': 'wave 25s linear infinite reverse',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
wave: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0px)' },
'50%': { transform: 'translateY(-10px)' },
},
fadeUp: {
'from': { opacity: 0, transform: 'translateY(20px)' },
'to': { opacity: 1, transform: 'translateY(0)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
},
plugins: [
function({ addUtilities }) {
const utilities = {
'.perspective-1000': { perspective: '1000px' },
'.transform-style-3d': { 'transform-style': 'preserve-3d' },
'.backface-hidden': { 'backface-visibility': 'hidden' },
'.rotate-y-12': { transform: 'rotateY(12deg)' },
'.rotate-y-n12': { transform: 'rotateY(-12deg)' },
};
addUtilities(utilities);
}
]
};



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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-white group-hover:text-[#00F3FF] transition-colors" icon="lucide:box-select" width="20"></iconify-icon>
<span className="font-semibold text-lg tracking-tight uppercase text-white font-display">
            CC
            <span className="text-[#00F3FF]">III</span>
</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400 uppercase tracking-widest">
<a className="hover:text-white transition-colors duration-200" href="#methodology">
            The Walk
          </a>
<a className="hover:text-white transition-colors duration-200" href="#focus">
            The System
          </a>
<a className="hover:text-white transition-colors duration-200" href="#writings">
            Writings
          </a>
</div>
<div className="flex items-center gap-4">
<a className="group relative px-5 py-2 overflow-hidden rounded-full bg-white/5 border border-white/10 hover:border-[#00F3FF]/50 transition-all duration-300" href="#contact">
<div className="absolute inset-0 w-0 bg-[#00F3FF] transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
<span className="relative text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#00F3FF]">
              Join STRIDE
            </span>
</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050505]">

<div className="absolute inset-0 z-0 opacity-40 pointer-events-none">

<div className="absolute inset-0 w-[200%] h-full wave-bg animate-wave-slow" style={{backgroundRepeat: 'repeat-x'}}></div>

<div className="absolute inset-0 w-[200%] h-full wave-bg animate-wave-slower opacity-50" style={{backgroundPosition: '0 50px', backgroundRepeat: 'repeat-x', transform: 'scaleY(1.2)'}}></div>

<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
<div className="space-y-8 animate-fade-up">
<div className="inline-flex gap-2 text-[10px] uppercase font-bold text-gray-200 tracking-widest bg-white/5 border-white/20 border rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center shadow-[0_0_15px_rgba(229,231,235,0.3)]">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-200 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gray-200"></span>
</span>
            One Step. One Goal. One Community.
          </div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white leading-[0.9]">
            WALK
            <br/>
<span className="font-serif italic font-normal text-white/60">
              with Purpose.
            </span>
</h1>
<p className="text-sm md:text-base text-neutral-400 max-w-md leading-relaxed font-light font-body">
            I help busy professionals redeem their time, rebuild their health,
            and show up online with clarity — one step at a time. No hype. No
            shortcuts. Just systems that work in real life.
          </p>
<div className="flex items-center gap-6 pt-4">
<button className="h-12 px-8 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#00F3FF] transition-colors flex items-center gap-2 group">
              Start Walking
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
<button className="h-12 px-8 border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white/5 transition-colors">
              Read My Writings
            </button>
</div>
</div>

<div className="relative h-[500px] w-full bg-neutral-900/30 rounded-3xl border border-white/5 overflow-hidden animate-fade-up group backdrop-blur-sm" style={{animationDelay: '0.2s'}}>
<div className="bg-center group-hover:scale-105 transition-transform duration-700 hover:grayscale-0 opacity-60 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/93ba3e00-dc48-4e05-99bf-e25bda967280_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0 grayscale"></div>
<div className="bg-gradient-to-t from-[#050505] via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="flex bg-black/60 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 absolute right-6 bottom-6 left-6 backdrop-blur-md items-center justify-between">
<div>
<p className="text-white text-xs font-bold uppercase tracking-widest">
                Morning Walk
              </p>
<p className="text-[#00F3FF] text-[10px] uppercase tracking-wider mt-1">
                10,000 Steps: Done
              </p>
</div>
<div className="flex items-center gap-3">
<div className="flex flex-col items-end">
<span className="text-[10px] uppercase tracking-wider text-neutral-500">
                  Daily Goal
                </span>
<div className="w-24 h-1 bg-white/20 rounded-full mt-1 overflow-hidden">
<div className="h-full bg-[#00F3FF] w-[100%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-neutral-900/20 overflow-hidden py-6">
<div className="flex whitespace-nowrap animate-scroll">
<div className="flex gap-20 items-center px-10 opacity-30">
<span className="text-2xl font-semibold tracking-tight font-display">
            STRIDE
          </span>
<span className="text-2xl font-serif italic tracking-tight">Walking</span>
<span className="text-2xl font-semibold tracking-tight font-display text-[#00F3FF]">
            FAITH
          </span>
<span className="text-2xl font-serif italic tracking-tight">Clarity</span>
<span className="text-2xl font-semibold tracking-tight font-display">
            SYSTEMS
          </span>
<span className="text-2xl font-serif italic tracking-tight">Purpose</span>
<span className="text-2xl font-semibold tracking-tight font-display">
            CONSISTENCY
          </span>
<span className="text-2xl font-serif italic tracking-tight">
            Stewardship
          </span>
<span className="text-2xl font-semibold tracking-tight font-display text-[#00F3FF]">
            halak
          </span>
<span className="text-2xl font-serif italic tracking-tight">
            The Vault
          </span>
</div>

<div className="flex gap-20 items-center px-10 opacity-30">
<span className="text-2xl font-semibold tracking-tight font-display">
            STRIDE
          </span>
<span className="text-2xl font-serif italic tracking-tight">Walking</span>
<span className="text-2xl font-semibold tracking-tight font-display text-[#00F3FF]">
            FAITH
          </span>
<span className="text-2xl font-serif italic tracking-tight">Clarity</span>
<span className="text-2xl font-semibold tracking-tight font-display">
            SYSTEMS
          </span>
<span className="text-2xl font-serif italic tracking-tight">Purpose</span>
<span className="text-2xl font-semibold tracking-tight font-display">
            CONSISTENCY
          </span>
<span className="text-2xl font-serif italic tracking-tight">
            Stewardship
          </span>
<span className="text-2xl font-semibold tracking-tight font-display text-[#00F3FF]">
            halak
          </span>
<span className="text-2xl font-serif italic tracking-tight">
            The Vault
          </span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto pt-24 px-6 pb-4 relative group/section" id="methodology">
<div className="flex justify-between items-end mb-12 relative z-10">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-2 relative inline-flex items-center gap-2">
            The Walk
            <span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F3FF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00F3FF]"></span>
</span>
</h2>
<p className="text-neutral-500 text-sm font-body">
            Three pillars. One consistent life. It starts with your feet.
          </p>
</div>
<a className="group/link flex items-center gap-2 text-xs uppercase tracking-widest text-white transition-colors" href="#">
<span className="border-b border-white/20 pb-0.5 group-hover/link:border-white transition-colors duration-300">
            See The Plan
          </span>
<iconify-icon className="transform transition-transform duration-300 group-hover/link:translate-x-1 text-white/60 group-hover/link:text-white" icon="lucide:arrow-up-right"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 group bento-card border-neutral-800 hover:border-[#00F3FF]/30 transition-colors duration-500">
<div className="absolute inset-0 img-wrap overflow-hidden">
<img alt="Walker" className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale" src="https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 w-full z-20">
<div className="flex justify-between items-end">
<div className="transform transition-transform duration-500 group-hover:-translate-y-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#00F3FF]/10 text-[#00F3FF] border border-[#00F3FF]/20 uppercase tracking-wider mb-3 backdrop-blur-sm">
                  Step 01
                </span>
<h3 className="text-3xl font-medium text-white mb-2 leading-tight">
                  Walk First.
                </h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
<p className="text-neutral-300 text-sm max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0 font-body">
                    After two heart attacks, I didn't start with a gym
                    membership. I started with a walk. 10,000 steps a day is
                    where STRIDE begins — and where your whole life starts to
                    shift.
                  </p>
</div>
</div>
<button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 hover:bg-[#00F3FF]">
<iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bento-card border-neutral-800 hover:border-white/20 transition-colors duration-500">
<div className="absolute inset-0 img-wrap overflow-hidden">
<img alt="Minimal Structure" className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110 grayscale" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
<div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
              Open The Vault
            </div>
</div>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
<div className="transform transition-transform duration-300 group-hover:translate-y-1">
<h3 className="text-lg font-medium text-white">Sync Your Life.</h3>
<p className="text-neutral-400 text-[10px] mt-1 uppercase tracking-widest group-hover:text-[#00F3FF] transition-colors">
                The STRIDE Sync System
              </p>
</div>
</div>
</div>

<div className="group bento-card border-neutral-800 p-6 flex flex-col justify-between hover:border-white/20 transition-colors duration-500">

<div className="absolute -right-16 -top-16 w-64 h-64 rounded-full overflow-hidden opacity-30 transition-opacity duration-500">
<div className="w-full h-full relative group-hover:animate-spin-slow">
<div className="absolute inset-0 border border-dashed border-white/20 rounded-full"></div>
<div className="absolute inset-4 border border-white/10 rounded-full"></div>
</div>
</div>
<div className="relative z-10 flex justify-end">
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-800/80 border border-white/10 text-white/50 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0">
<iconify-icon icon="lucide:fingerprint" width="16"></iconify-icon>
</div>
</div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white group-hover:translate-x-1 transition-transform duration-300">
              Build Your Brand.
            </h3>
<div className="flex items-center gap-2 mt-2">
<span className="h-px w-4 bg-neutral-600 group-hover:w-8 group-hover:bg-[#00F3FF] transition-all duration-500"></span>
<p className="text-neutral-500 text-[10px] uppercase tracking-widest group-hover:text-neutral-300 transition-colors">
                Upper Echelon
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] py-4 px-6 relative overflow-hidden" id="focus">
<div className="max-w-7xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="bento-card col-span-1 md:col-span-2 p-8 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-[#00F3FF]" icon="lucide:crosshair"></iconify-icon>
<span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                Mission
              </span>
</div>
<h2 className="text-4xl font-medium tracking-tight text-white mb-4">
              Built for the
              <span className="relative inline-block text-white font-serif italic">
                Chaos Current.
                <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-[#00F3FF] to-transparent"></span>
</span>
</h2>
<p className="text-neutral-400 text-sm leading-relaxed max-w-lg font-body">
              Life doesn't slow down so you can get organized. I built the
              STRIDE Sync System for exactly that — a single source of truth
              called The Vault, so you stop searching and start building.
            </p>
</div>

<div className="bento-card col-span-1 md:row-span-2 relative group overflow-hidden">
<div className="absolute inset-0 bg-neutral-900/50"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-full aspect-square max-w-xs mx-auto transform transition-transform duration-700 hover:scale-105">

<div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow"></div>
<div className="absolute inset-12 border border-dashed border-white/10 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}}></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-neutral-900 shadow-2xl z-10 group-hover:border-[#00F3FF]/30 transition-colors duration-500">
<img alt="Focus" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/80 border border-white/10 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest text-white shadow-xl">
                  STRIDE:
                  <span className="text-[#00F3FF]">Active</span>
</div>
</div>
</div>
</div>

<div className="bento-card p-8 flex flex-col justify-center gap-6 group hover:border-white/20">
<div className="space-y-2 group/slider">
<div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover/slider:text-white transition-colors">
<span>Daily Steps</span>
<span className="text-[#00F3FF]">10,000</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-[#00F3FF] rounded-full w-[100%] shadow-[0_0_10px_rgba(0,243,255,0.5)]"></div>
</div>
</div>
<div className="space-y-2 group/slider">
<div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover/slider:text-white transition-colors">
<span>Consistency</span>
<span className="text-white">Daily</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white rounded-full w-[100%]"></div>
</div>
</div>
</div>

<div className="bento-card p-8 flex flex-col justify-center group hover:border-white/20">
<ul className="space-y-4 font-body">
<li className="flex items-start gap-3 group/item">
<div className="p-1 rounded-full bg-white/5 group-hover/item:bg-[#00F3FF]/20 group-hover/item:text-[#00F3FF] transition-colors">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-xs text-neutral-400 group-hover/item:text-white transition-colors">
                  10,000 steps before the day owns you.
                </span>
</li>
<li className="flex items-start gap-3 group/item">
<div className="p-1 rounded-full bg-white/5 group-hover/item:bg-[#00F3FF]/20 group-hover/item:text-[#00F3FF] transition-colors">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-xs text-neutral-400 group-hover/item:text-white transition-colors">
                  One Vault for everything you capture.
                </span>
</li>
<li className="flex items-start gap-3 group/item">
<div className="p-1 rounded-full bg-white/5 group-hover/item:bg-[#00F3FF]/20 group-hover/item:text-[#00F3FF] transition-colors">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-xs text-neutral-400 group-hover/item:text-white transition-colors">
                  Consistency over intensity — always.
                </span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-4 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-[#050505] to-[#050505] opacity-60 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[450px]">

<div className="bento-card lg:col-span-2 p-10 flex flex-col justify-between">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-[#00F3FF] mb-6">
<iconify-icon icon="lucide:layout-dashboard" width="12"></iconify-icon>
                STRIDE Sync
              </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1] mb-6">
                Navigate the
                <span className="text-neutral-500 font-serif italic">
                  Chaos Current.
                </span>
</h2>
<p className="text-lg text-neutral-400 max-w-md font-light font-body">
                The Vault is your single source of truth. I built a system using
                SYNC — Source, Yield, Narrow, Communicate — so busy
                professionals can stop reacting and start leading.
              </p>
</div>
<div className="flex items-center gap-4 mt-8">
<div className="h-px bg-white/10 flex-1"></div>
<span className="text-xs text-neutral-500 uppercase tracking-widest">
                SYNC System Active
              </span>
</div>
</div>

<div className="bento-card lg:col-span-1 p-0 relative overflow-hidden group perspective-1000">
<div className="absolute inset-0 bg-gradient-to-tr from-[#00F3FF]/10 to-transparent opacity-50 transition-opacity group-hover:opacity-80"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-auto bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl p-5 flex flex-col gap-5 transform rotate-y-n12 rotate-6 transition-transform duration-700 cubic-bezier(0.2, 0.8, 0.2, 1) group-hover:rotate-0">
<div className="flex justify-between items-center border-b border-white/5 pb-3">
<div className="w-16 h-1.5 bg-white/10 rounded-full"></div>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
</div>
<div className="flex-1 flex flex-col justify-center gap-4">
<div className="space-y-2">
<div className="flex justify-between items-center text-[10px] text-neutral-400 uppercase tracking-wider">
<span>Content Goals</span>
<span className="text-[#00F3FF] font-bold">On Track</span>
</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-white rounded-full"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center text-[10px] text-neutral-400 uppercase tracking-wider">
<span>Deep Walk</span>
<span className="text-white font-bold">4.5 Miles</span>
</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
<div className="w-1/2 h-full bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="bento-card p-6 flex items-center justify-between gap-4">
<div>
<p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">
                Free Time
              </p>
<p className="text-2xl text-white font-mono">+4 Hours</p>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div>
<p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">
                Status
              </p>
<p className="text-[#00F3FF] text-xs font-bold uppercase tracking-widest">
                Active
              </p>
</div>
</div>
<div className="bento-card lg:col-span-2 p-6 flex items-center gap-6 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-[#00F3FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="h-24 flex items-end gap-1.5 opacity-80">
<div className="w-3 bg-white/20 rounded-t-sm h-[40%] group-hover:h-[50%] transition-all duration-500"></div>
<div className="w-3 bg-white/40 rounded-t-sm h-[60%] group-hover:h-[65%] transition-all duration-500 delay-75"></div>
<div className="w-3 bg-white rounded-t-sm h-[50%] group-hover:h-[70%] transition-all duration-500 delay-100"></div>
<div className="w-3 bg-[#00F3FF] rounded-t-sm h-[85%] shadow-[0_0_10px_#00F3FF] group-hover:h-[95%] transition-all duration-500 delay-150"></div>
<div className="w-3 bg-white/40 rounded-t-sm h-[70%] group-hover:h-[75%] transition-all duration-500 delay-200"></div>
</div>
<div>
<h3 className="text-lg font-medium text-white">
                Consistency Compounds
              </h3>
<p className="text-xs text-neutral-500 font-mono mt-1">
                STRIDE_SYNC_ACTIVE
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-4 px-6 relative overflow-hidden group/blueprint">

<div className="absolute inset-0 bg-[#080808] z-0"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bento-card md:col-span-3 p-8 flex flex-col md:flex-row justify-between items-center bg-neutral-900/80">
<h2 className="text-3xl font-medium text-white tracking-tight">
              What I'm
              <span className="text-neutral-600 font-serif italic">Building.</span>
</h2>
<div className="flex items-center gap-2 mt-4 md:mt-0 px-4 py-2 rounded-full border border-white/10 bg-black/50">
<span className="w-2 h-2 rounded-full bg-[#00F3FF] animate-pulse"></span>
<span className="text-xs font-mono text-[#00F3FF] uppercase tracking-widest">
                In Motion
              </span>
</div>
</div>

<div className="bento-card h-80 group hover:border-[#00F3FF]/30 transition-all duration-500">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-6 h-full flex flex-col">
<div className="flex justify-between items-start mb-6">
<span className="text-xs font-mono text-neutral-500">
                  STRIDE SYNC
                </span>
<iconify-icon className="text-neutral-400" icon="lucide:layout-dashboard"></iconify-icon>
</div>
<div className="w-full h-32 bg-white/5 rounded-lg mb-4 flex items-center justify-center border border-dashed border-white/20 overflow-hidden relative">
<img alt="Tech" className="w-full h-full object-cover grayscale opacity-50 mix-blend-screen group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium text-white mb-1">
                The Vault System
              </h3>
<p className="text-xs text-neutral-400 font-body leading-relaxed">
                A second brain built for people who think in frameworks. One
                place. Everything captured.
              </p>
</div>
</div>

<div className="bento-card h-80 group hover:border-[#00F3FF]/30 transition-all duration-500">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-6 h-full flex flex-col">
<div className="flex justify-between items-start mb-6">
<span className="text-xs font-mono text-neutral-500">
                  STRIDE TOGETHER
                </span>
<iconify-icon className="text-neutral-400" icon="lucide:heart-pulse"></iconify-icon>
</div>
<div className="w-full h-32 bg-white/5 rounded-lg mb-4 flex items-center justify-center border border-dashed border-white/20 overflow-hidden relative">
<img alt="Bio" className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium text-white mb-1">10K Community</h3>
<p className="text-xs text-neutral-400 font-body leading-relaxed">
                Busy professionals walking toward better health. One goal. One
                community. Daily accountability.
              </p>
</div>
</div>

<div className="bento-card h-80 group hover:border-[#00F3FF]/30 transition-all duration-500">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-6 h-full flex flex-col">
<div className="flex justify-between items-start mb-6">
<span className="text-xs font-mono text-neutral-500">
                  UPPER ECHELON
                </span>
<iconify-icon className="text-neutral-400" icon="lucide:pen-tool"></iconify-icon>
</div>
<div className="w-full h-32 bg-white/5 rounded-lg mb-4 flex items-center justify-center border border-dashed border-white/20 overflow-hidden relative">
<img alt="Writing" className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium text-white mb-1">Brand Clarity</h3>
<p className="text-xs text-neutral-400 font-body leading-relaxed">
                Websites and digital branding for solopreneurs ready to show up
                online with confidence and purpose.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-[#050505]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00F3FF]/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
<div className="max-w-xl">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
              The Result:
              <span className="text-neutral-500 font-serif italic">Clarity.</span>
</h2>
<p className="text-neutral-400 text-lg font-light leading-relaxed font-body">
              When you have a system, you stop surviving and start walking with
              purpose.
            </p>
</div>
</div>

<div className="grid md:grid-cols-3 gap-4">

<div className="bento-card md:col-span-1 p-8 hover:bg-neutral-900/60 transition-all duration-500">
<div className="flex flex-col h-full justify-between">
<div>
<iconify-icon className="text-[#00F3FF] mb-6" icon="lucide:quote"></iconify-icon>
<p className="text-neutral-300 text-sm leading-7 mb-8 font-light font-body">
                  "I went from zero consistency to 10,000 steps every single
                  day. Clint's framework is the simplest thing I've ever done
                  that actually changed my life."
                </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold text-white">
                  JD
                </div>
<div>
<p className="text-sm font-medium text-white">Community Member</p>
<p className="text-xs text-neutral-500">STRIDE Together</p>
</div>
</div>
</div>
</div>

<div className="bento-card md:col-span-1 p-8 hover:bg-neutral-900/60 transition-all duration-500 bg-neutral-800/30">
<div className="flex flex-col h-full justify-between">
<div>
<iconify-icon className="text-[#00F3FF] mb-6" icon="lucide:quote"></iconify-icon>
<p className="text-neutral-300 text-sm leading-7 mb-8 font-light font-body">
                  "The SYNC system gave me back my mornings. I stopped feeling
                  buried and started moving — literally and figuratively."
                </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold text-white">
                  AS
                </div>
<div>
<p className="text-sm font-medium text-white">Solopreneur</p>
<p className="text-xs text-neutral-500">Digital Strategy</p>
</div>
</div>
</div>
</div>

<div className="bento-card md:col-span-1 p-8 hover:bg-neutral-900/60 transition-all duration-500">
<div className="flex flex-col h-full justify-between">
<div>
<iconify-icon className="text-[#00F3FF] mb-6" icon="lucide:quote"></iconify-icon>
<p className="text-neutral-300 text-sm leading-7 mb-8 font-light font-body">
                  "No fluff. No hype. Just real structure from someone who has
                  actually been through it. That's rare."
                </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold text-white">
                  MR
                </div>
<div>
<p className="text-sm font-medium text-white">Brand Client</p>
<p className="text-xs text-neutral-500">Upper Echelon</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="contact">
<div className="max-w-5xl mx-auto bento-card p-12 md:p-20 text-center relative overflow-hidden bg-neutral-900">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"></div>
<div className="relative z-10 space-y-6">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
            Ready to Take Your
            <span className="text-[#00F3FF] font-serif italic">First Step?</span>
</h2>
<p className="text-neutral-400 text-sm max-w-lg mx-auto font-body">
            Whether it's your health, your systems, or your brand — every
            transformation starts with one step. Let's take yours together.
          </p>
<div className="flex justify-center gap-4 pt-4">
<button className="h-12 px-10 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#00F3FF] transition-colors">
              Start the Walk
            </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030303] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8">
<a className="text-xl font-bold tracking-tighter text-white mb-4 md:mb-0 uppercase font-display" href="#">
            CC
            <span className="text-[#00F3FF]">III</span>
</a>
<div className="flex gap-6 text-[10px] uppercase tracking-widest text-neutral-500 font-body">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Substack</a>
<a className="hover:text-white transition-colors" href="#">Email</a>
</div>
</div>
<p className="text-center md:text-left text-[10px] text-neutral-700 mt-8 font-mono">
          © 2026 Clinton Cohen III — STRIDE Together. All rights reserved.
        </p>
</div>
</footer>
<style id="metallic-silver-theme">
      :root{--aura-metallic-silver:#c9c9c9;--aura-metallic-silver-bright:#f4f4f4;--aura-metallic-silver-dark:#8d9094;--aura-metallic-glow:rgba(220,220,220,.42)}
      ::selection{background:var(--aura-metallic-silver)!important;color:#000!important}
      ::-webkit-scrollbar-thumb:hover{background:var(--aura-metallic-silver)!important}
      .text-\[\#00F3FF\],.group:hover .group-hover\:text-\[\#00F3FF\],.group\/item:hover .group-hover\/item\:text-\[\#00F3FF\]{color:var(--aura-metallic-silver)!important;text-shadow:0 0 14px var(--aura-metallic-glow)}
      .bg-\[\#00F3FF\],.hover\:bg-\[\#00F3FF\]:hover{background:linear-gradient(135deg,var(--aura-metallic-silver-bright) 0%,var(--aura-metallic-silver) 45%,var(--aura-metallic-silver-dark) 100%)!important;box-shadow:0 0 18px var(--aura-metallic-glow)}
      .bg-\[\#00F3FF\]\/5{background-color:rgba(201,201,201,.05)!important}
      .bg-\[\#00F3FF\]\/10{background-color:rgba(201,201,201,.10)!important}
      .bg-\[\#00F3FF\]\/20,.group\/item:hover .group-hover\/item\:bg-\[\#00F3FF\]\/20{background-color:rgba(201,201,201,.20)!important}
      .border-\[\#00F3FF\]\/20{border-color:rgba(201,201,201,.20)!important}
      .hover\:border-\[\#00F3FF\]\/30:hover,.group:hover .group-hover\:border-\[\#00F3FF\]\/30{border-color:rgba(201,201,201,.30)!important;box-shadow:0 0 18px rgba(220,220,220,.16)}
      .hover\:border-\[\#00F3FF\]\/50:hover{border-color:rgba(201,201,201,.50)!important;box-shadow:0 0 18px rgba(220,220,220,.18)}
      .from-\[\#00F3FF\]\/5{--tw-gradient-from:rgb(201 201 201 / .05) var(--tw-gradient-from-position)!important;--tw-gradient-to:rgb(201 201 201 / 0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}
      .from-\[\#00F3FF\]\/10{--tw-gradient-from:rgb(201 201 201 / .10) var(--tw-gradient-from-position)!important;--tw-gradient-to:rgb(201 201 201 / 0) var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)!important}
      .shadow-\[0_0_10px_\#00F3FF\],.shadow-\[0_0_10px_rgba\(0\2c 243\2c 255\2c 0\.5\)\]{box-shadow:0 0 12px var(--aura-metallic-glow)!important}
      .wave-bg{background-image:url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 1200 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 400C100 350 200 450 300 400C400 350 500 450 600 400C700 350 800 450 900 400C1000 350 1100 450 1200 400' stroke='rgba(255,255,255,0.03)' strokeWidth='1' fill='none'/%3E%3Cpath d='M0 450C120 400 220 500 320 450C420 400 520 500 620 450C720 400 820 500 920 450C1020 400 1120 500 1220 450' stroke='rgba(201,201,201,0.08)' strokeWidth='1.5' fill='none'/%3E%3Cpath d='M0 350C80 300 180 400 280 350C380 300 480 400 580 350C680 300 780 400 880 350C980 300 1080 400 1180 350' stroke='rgba(255,255,255,0.03)' strokeWidth='1' fill='none'/%3E%3C/svg%3E")!important}
    </style>
<style id="metallic-silver-glow-boost">
      :root{--aura-metallic-silver:#dedede;--aura-metallic-silver-bright:#ffffff;--aura-metallic-glow:rgba(244,244,244,.78)}
      [class~="text-[#00F3FF]"],.group:hover [class~="group-hover:text-[#00F3FF]"],[class~="group/item"]:hover [class~="group-hover/item:text-[#00F3FF]"]{text-shadow:0 0 10px rgba(255,255,255,.55),0 0 28px var(--aura-metallic-glow)!important}
      [class~="bg-[#00F3FF]"],[class~="hover:bg-[#00F3FF]"]:hover{box-shadow:0 0 18px rgba(255,255,255,.55),0 0 38px var(--aura-metallic-glow)!important}
      [class~="shadow-[0_0_10px_#00F3FF]"],[class~="shadow-[0_0_10px_rgba(0,243,255,0.5)]"]{box-shadow:0 0 18px rgba(255,255,255,.6),0 0 34px var(--aura-metallic-glow)!important}
      [class~="hover:border-[#00F3FF]/30"]:hover,.group:hover [class~="group-hover:border-[#00F3FF]/30"],[class~="hover:border-[#00F3FF]/50"]:hover{box-shadow:0 0 20px rgba(255,255,255,.22),0 0 42px rgba(244,244,244,.28)!important}
    </style>

    </>
  );
}
