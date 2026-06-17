import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
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
sans: ['Geist', 'sans-serif'],
arabic: ['Noto Sans Arabic', 'sans-serif'],
},
colors: {
bio: {
50: '#f7fee7',
100: '#ecfccb',
300: '#bef264',
400: '#a3e635',
500: '#84cc16',
900: '#1a2e05',
lime: '#D9FF50', // Custom neon lime
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'marquee': 'marquee 25s linear infinite',
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'steam': 'steam 20s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
steam: {
'0%': { backgroundPosition: '0 0' },
'50%': { backgroundPosition: '400% 0' },
'100%': { backgroundPosition: '0 0' },
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-neutral-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter flex items-center gap-1" href="#">
                    bio<span className="text-neutral-400">.tm</span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#features">Features</a>
<a className="hover:text-neutral-900 transition-colors" href="#use-cases">Use Cases</a>
<a className="hover:text-neutral-900 transition-colors" href="#pricing">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 hidden sm:block" href="#">Login</a>
<a className="text-sm font-semibold bg-neutral-900 text-white px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors shadow-sm" href="#">
                    Sign Up
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid z-0 pointer-events-none h-full w-full"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-bio-lime/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bio-lime opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-wide">Born in the Middle East</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] mb-8 text-neutral-900 max-w-5xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Your identity isn’t just a link. It’s a <span className="relative inline-block">story<svg className="absolute w-full h-3 bottom-1 left-0 text-bio-lime -z-10" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path></svg></span>.
            </h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up font-normal" style={{animationDelay: '0.3s'}}>
                The intelligent link that empowers people &amp; brands to connect &amp; grow. Born in Arabic, built for the world. Simplifying digital identity for creators &amp; brands.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
<a className="w-full sm:w-auto px-8 py-4 bg-neutral-900 text-white font-medium rounded-xl hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-neutral-900/10" href="#">
                    Claim your bio.tm
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-900 font-medium rounded-xl border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all flex items-center justify-center gap-2" href="#demo">
<iconify-icon icon="lucide:play-circle" width="18"></iconify-icon>
                    See how it works
                </a>
</div>
</div>

<div className="mt-20 relative max-w-5xl mx-auto h-[400px] md:h-[500px] perspective-1000 px-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>

<div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-[320px] bg-white rounded-[40px] border-[8px] border-neutral-900 shadow-2xl overflow-hidden z-20 h-[580px] hover:translate-y-[-10px] transition-transform duration-500">

<div className="h-6 w-32 bg-neutral-900 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-30"></div>

<div className="p-6 pt-12 flex flex-col items-center h-full relative">
<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-neutral-100 to-white z-0"></div>
<div className="w-20 h-20 rounded-full border-4 border-white shadow-lg bg-neutral-200 z-10 mb-3 overflow-hidden relative">
<img alt="Profile" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=200&amp;h=200"/>
</div>
<h3 className="font-semibold text-lg text-neutral-900 tracking-tight z-10">Sarah Al-Mansour</h3>
<p className="text-xs text-neutral-500 mb-6 z-10">@sarah.design</p>

<div className="w-full space-y-3 z-10">
<div className="w-full p-3 bg-white border border-neutral-200 rounded-xl shadow-sm flex items-center gap-3 hover:scale-[1.02] transition-transform cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600">
<iconify-icon icon="lucide:globe" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium">My Portfolio</span>
</div>
<div className="w-full p-3 bg-neutral-900 text-white rounded-xl shadow-lg shadow-neutral-900/10 flex items-center gap-3 hover:scale-[1.02] transition-transform cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
<iconify-icon icon="lucide:shopping-bag" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium">New Collection Drop</span>
<span className="ml-auto text-[10px] bg-bio-lime text-neutral-900 px-2 py-0.5 rounded-full font-bold">NEW</span>
</div>
<div className="w-full p-3 bg-white border border-neutral-200 rounded-xl shadow-sm flex items-center gap-3 hover:scale-[1.02] transition-transform cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium">Latest Posts</span>
</div>
</div>

<div className="mt-auto w-full pt-4 border-t border-neutral-100 flex justify-around text-neutral-400">
<iconify-icon className="text-neutral-900" icon="lucide:home" width="20"></iconify-icon>
<iconify-icon icon="lucide:qr-code" width="20"></iconify-icon>
<iconify-icon icon="lucide:bar-chart-2" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="absolute left-0 md:left-[10%] top-[20%] w-64 glass-card p-4 rounded-2xl animate-float hidden md:block">
<div className="flex items-center gap-2 mb-4">
<div className="p-1.5 bg-green-100 rounded-lg text-green-600">
<iconify-icon icon="lucide:trending-up" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-500 font-medium">Profile Views</p>
<p className="text-lg font-bold tracking-tight">24.5k <span className="text-xs font-normal text-green-500">+12%</span></p>
</div>
</div>
<div className="h-16 flex items-end justify-between gap-1">
<div className="w-full bg-neutral-100 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-neutral-100 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-bio-lime rounded-t-sm h-[85%]"></div>
<div className="w-full bg-neutral-100 rounded-t-sm h-[55%]"></div>
<div className="w-full bg-neutral-100 rounded-t-sm h-[70%]"></div>
</div>
</div>

<div className="absolute right-0 md:right-[10%] top-[30%] w-56 glass-card p-4 rounded-2xl animate-float hidden md:block" style={{animationDelay: '1.5s'}}>
<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white border border-neutral-200 rounded-xl p-2 mb-3 shadow-sm">

<div className="w-full h-full grid grid-cols-4 gap-0.5">
<div className="col-span-1 row-span-1 bg-neutral-900 rounded-sm"></div>
<div className="bg-neutral-900 rounded-sm"></div>
<div className="bg-neutral-900/20 rounded-sm"></div>
<div className="bg-neutral-900 rounded-sm"></div>
<div className="bg-neutral-900 rounded-sm"></div>
<div className="bg-neutral-900/20 rounded-sm"></div>
<div className="bg-neutral-900 rounded-sm"></div>
<div className="bg-neutral-900/20 rounded-sm"></div>
<div className="bg-neutral-900 rounded-sm"></div>
<div className="bg-neutral-900 rounded-sm"></div>
<div className="bg-neutral-900/20 rounded-sm"></div>
<div className="bg-neutral-900 rounded-sm"></div>
</div>
</div>
<p className="text-xs font-semibold text-neutral-900">Dynamic Permanent QR</p>
<p className="text-[10px] text-neutral-500">Scan to connect instantly</p>
</div>
</div>
</div>
</header>

<section className="py-12 border-y border-neutral-200 bg-white">
<p className="text-center text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-8">Empowering Creators &amp; Brands Across the Globe</p>
<div className="relative flex overflow-x-hidden">
<div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
<span className="text-xl font-semibold text-neutral-300 font-sans tracking-tight">STRATEGY</span>
<span className="text-xl font-semibold text-neutral-300 font-sans tracking-tight">ARABIA.CO</span>
<span className="text-xl font-semibold text-neutral-300 font-sans tracking-tight">VELOCITY</span>
<span className="text-xl font-semibold text-neutral-300 font-sans tracking-tight">OASIS MEDIA</span>
<span className="text-xl font-semibold text-neutral-300 font-sans tracking-tight">CREATOR HUB</span>
<span className="text-xl font-semibold text-neutral-300 font-sans tracking-tight">NEXT GEN</span>

<span className="text-xl font-semibold text-neutral-300 font-sans tracking-tight">STRATEGY</span>
<span className="text-xl font-semibold text-neutral-300 font-sans tracking-tight">ARABIA.CO</span>
<span className="text-xl font-semibold text-neutral-300 font-sans tracking-tight">VELOCITY</span>
<span className="text-xl font-semibold text-neutral-300 font-sans tracking-tight">OASIS MEDIA</span>
<span className="text-xl font-semibold text-neutral-300 font-sans tracking-tight">CREATOR HUB</span>
<span className="text-xl font-semibold text-neutral-300 font-sans tracking-tight">NEXT GEN</span>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="features">
<div className="mb-16 max-w-3xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6 text-neutral-900">Everything you need to <br/>grow your digital footprint.</h2>
<p className="text-neutral-500 text-lg">One dashboard to manage everything anytime, anywhere. bio.tm turns digital identity into a living experience.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 grid-rows-[auto_auto]">

<div className="md:col-span-6 lg:col-span-8 bg-neutral-900 rounded-[32px] p-8 md:p-12 relative overflow-hidden group">
<div className="relative z-10 max-w-md">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mb-6 text-bio-lime border border-neutral-700">
<iconify-icon icon="lucide:languages" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Multilingual by Design</h3>
<p className="text-neutral-400 leading-relaxed mb-8">Built for Arabic &amp; global users. Present your profile in your preferred language with automated RTL support. Innovation knows no boundaries.</p>
<div className="flex items-center gap-3">
<span className="px-3 py-1 rounded-full bg-neutral-800 text-white text-xs border border-neutral-700">English</span>
<iconify-icon className="text-neutral-600" icon="lucide:arrow-right-left" width="14"></iconify-icon>
<span className="px-3 py-1 rounded-full bg-bio-lime text-neutral-900 text-xs font-bold font-arabic">العربية</span>
</div>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="text-[200px] font-bold font-arabic text-white select-none">ع</span>
</div>
</div>

<div className="md:col-span-6 lg:col-span-4 bg-white border border-neutral-200 rounded-[32px] p-8 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-6 text-neutral-900">
<iconify-icon icon="lucide:qr-code" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2 tracking-tight">Dynamic Permanent QR</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-6">Update your info anytime while keeping the same QR code. Ideal for business cards.</p>
<div className="mt-auto self-center bg-white p-4 rounded-xl shadow-sm border border-neutral-100 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-neutral-900 opacity-80" icon="lucide:qr-code" width="120"></iconify-icon>
</div>
</div>
</div>

<div className="md:col-span-6 lg:col-span-4 bg-bio-100/50 border border-bio-300/30 rounded-[32px] p-8 relative overflow-hidden group">
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 text-bio-900 shadow-sm">
<iconify-icon icon="lucide:bar-chart-2" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-bio-900 mb-2 tracking-tight">Tracks Your Impact</h3>
<p className="text-bio-900/70 text-sm leading-relaxed mb-6">Real-time analytics reveal who visits from where &amp; how they engage.</p>

<div className="flex items-end gap-2 h-24 mt-4 opacity-80">
<div className="w-full bg-bio-300 rounded-t h-[30%] group-hover:h-[40%] transition-all duration-500"></div>
<div className="w-full bg-bio-300 rounded-t h-[50%] group-hover:h-[60%] transition-all duration-500 delay-75"></div>
<div className="w-full bg-bio-400 rounded-t h-[40%] group-hover:h-[50%] transition-all duration-500 delay-100"></div>
<div className="w-full bg-bio-500 rounded-t h-[80%] group-hover:h-[90%] transition-all duration-500 delay-150"></div>
<div className="w-full bg-bio-400 rounded-t h-[60%] group-hover:h-[70%] transition-all duration-500 delay-200"></div>
</div>
</div>
</div>

<div className="md:col-span-6 lg:col-span-4 bg-white border border-neutral-200 rounded-[32px] p-8 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-6 text-neutral-900">
<iconify-icon icon="lucide:contact" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2 tracking-tight">Saveable in One Click</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Add any profile directly to phone book instantly. Replaces paper cards forever.</p>
<div className="mt-6 flex justify-center">
<button className="px-4 py-2 bg-neutral-900 text-white rounded-lg text-xs font-semibold flex items-center gap-2 group-hover:bg-bio-lime group-hover:text-neutral-900 transition-colors">
<iconify-icon icon="lucide:user-plus" width="14"></iconify-icon>
                            Add to Contacts
                        </button>
</div>
</div>
</div>

<div className="md:col-span-12 lg:col-span-4 bg-gradient-to-br from-neutral-100 to-white border border-neutral-200 rounded-[32px] p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<iconify-icon className="text-neutral-200" icon="lucide:infinity" width="80"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mb-6 text-bio-lime">
<iconify-icon icon="lucide:check-circle" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2 tracking-tight">One-Time License</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-4">No monthly fees. No limits. Your identity owned for life.</p>
<ul className="space-y-2 text-sm text-neutral-600">
<li className="flex items-center gap-2"><iconify-icon className="text-bio-500" icon="lucide:check"></iconify-icon> Lifetime access</li>
<li className="flex items-center gap-2"><iconify-icon className="text-bio-500" icon="lucide:check"></iconify-icon> Unlimited links</li>
<li className="flex items-center gap-2"><iconify-icon className="text-bio-500" icon="lucide:check"></iconify-icon> Verified Badge</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white relative overflow-hidden" id="use-cases">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bio-lime/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="text-bio-lime font-medium tracking-wide text-sm uppercase mb-2 block">Who We Serve</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter">Empowering every story.</h2>
</div>
<p className="text-neutral-400 max-w-sm text-sm md:text-base">From individual creators to global enterprises, bio.tm adapts to every need, industry &amp; identity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="h-64 bg-neutral-800 rounded-2xl mb-6 overflow-hidden relative border border-neutral-700 group-hover:border-bio-lime/50 transition-colors">
<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">

<div className="w-32 h-40 bg-neutral-700 rounded-xl flex flex-col gap-2 p-3 shadow-2xl">
<div className="w-8 h-8 rounded-full bg-neutral-600 mb-2"></div>
<div className="w-full h-2 bg-neutral-600 rounded"></div>
<div className="w-2/3 h-2 bg-neutral-600 rounded mb-2"></div>
<div className="flex gap-1">
<div className="w-full h-8 bg-bio-lime rounded"></div>
<div className="w-full h-8 bg-neutral-600 rounded"></div>
</div>
</div>
</div>
</div>
<h3 className="text-xl font-semibold mb-2 group-hover:text-bio-lime transition-colors">Influencers &amp; Content Creators</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Centralize content, collaborations &amp; audience insights in one link. Present your media kit instantly.</p>
</div>

<div className="group cursor-pointer">
<div className="h-64 bg-neutral-800 rounded-2xl mb-6 overflow-hidden relative border border-neutral-700 group-hover:border-bio-lime/50 transition-colors">
<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">

<div className="w-48 h-32 bg-neutral-700 rounded-xl p-4 shadow-2xl flex flex-col justify-between">
<div className="flex justify-between items-center">
<div className="w-20 h-3 bg-neutral-600 rounded"></div>
<div className="w-6 h-6 rounded-full bg-neutral-600"></div>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="h-12 bg-neutral-600 rounded"></div>
<div className="h-12 bg-neutral-600 rounded"></div>
<div className="h-12 bg-neutral-600 rounded"></div>
</div>
</div>
</div>
</div>
<h3 className="text-xl font-semibold mb-2 group-hover:text-bio-lime transition-colors">Companies &amp; Brands</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Build unified digital profiles for products, teams, or campaigns. Pixel integration for Facebook &amp; TikTok.</p>
</div>

<div className="group cursor-pointer">
<div className="h-64 bg-neutral-800 rounded-2xl mb-6 overflow-hidden relative border border-neutral-700 group-hover:border-bio-lime/50 transition-colors">
<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">

<div className="w-40 h-24 bg-white rounded-lg p-4 shadow-2xl transform rotate-[-5deg]">
<div className="flex gap-3 items-center">
<div className="w-10 h-10 bg-neutral-200 rounded-full"></div>
<div className="space-y-1">
<div className="w-16 h-2 bg-neutral-200 rounded"></div>
<div className="w-10 h-2 bg-neutral-200 rounded"></div>
</div>
</div>
</div>
<div className="w-40 h-24 bg-neutral-700 border border-neutral-600 rounded-lg p-4 shadow-2xl absolute transform rotate-[5deg] translate-y-2">
<div className="flex gap-3 items-center">
<div className="w-10 h-10 bg-neutral-600 rounded-full"></div>
<div className="space-y-1">
<div className="w-16 h-2 bg-neutral-600 rounded"></div>
<div className="w-10 h-2 bg-neutral-600 rounded"></div>
</div>
<iconify-icon className="ml-auto text-bio-lime" icon="lucide:qr-code" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
<h3 className="text-xl font-semibold mb-2 group-hover:text-bio-lime transition-colors">Professionals</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Create a modern digital business card. Smart, eco-friendly, and always up to date.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 relative animate-fade-in-up" id="pricing">
<div className="relative overflow-hidden rounded-[32px] bg-neutral-900 ring-1 ring-neutral-800 p-6 sm:p-12 shadow-2xl">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
<div>
<span className="inline-flex items-center gap-2 rounded-full border border-bio-lime/30 bg-bio-lime/10 px-3 py-1.5 text-xs font-medium text-bio-lime mb-4">
                        Pricing Plans
                    </span>
<h2 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tighter font-semibold">
                        Simple plans for every team
                    </h2>
</div>
<p className="sm:text-base text-sm text-neutral-400 max-w-[42ch] mb-2">
                    Start free. Scale when ready. Cancel anytime.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-neutral-800 bg-neutral-800/40 p-8 hover:bg-neutral-800/60 transition-colors">
<h3 className="text-xl text-white tracking-tight font-semibold">Free</h3>
<p className="text-sm text-neutral-500 mt-1">For individuals</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl text-white tracking-tighter font-semibold">$0</span>
<span className="text-sm text-neutral-500">/month</span>
</div>
<ul className="mt-8 space-y-4 text-sm text-neutral-400">
<li className="flex items-center gap-3">
<iconify-icon className="text-bio-lime" icon="lucide:check" width="18"></iconify-icon>
<span>Basic analytics</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-bio-lime" icon="lucide:check" width="18"></iconify-icon>
<span>Up to 3 links</span>
</li>
<li className="flex items-center gap-3 opacity-50">
<iconify-icon className="text-neutral-600" icon="lucide:x" width="18"></iconify-icon>
<span>Custom domain</span>
</li>
<li className="flex items-center gap-3 opacity-50">
<iconify-icon className="text-neutral-600" icon="lucide:x" width="18"></iconify-icon>
<span>Priority support</span>
</li>
</ul>
<a className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 text-white h-12 border border-white/10 text-sm font-medium transition-colors" href="#">
                        Get started
                    </a>
</div>

<div className="bg-neutral-950 rounded-2xl p-8 relative border border-transparent">

<div className="absolute inset-0 rounded-2xl pointer-events-none z-[-1]" style={{background: 'linear-gradient(45deg, rgba(217, 255, 80, 0.2), rgba(217, 255, 80, 0.05), rgba(217, 255, 80, 0.2))', backgroundSize: '200% 200%', margin: '-1px', animation: 'steam 20s linear infinite'}}></div>
<div className="absolute inset-0 rounded-2xl pointer-events-none z-[-2] blur-xl opacity-20" style={{background: 'linear-gradient(45deg, rgba(217, 255, 80, 0.5), transparent)', backgroundSize: '200% 200%', margin: '-2px', animation: 'steam 20s linear infinite'}}></div>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
<span className="inline-flex items-center gap-1.5 text-xs font-medium text-bio-lime bg-neutral-900 border border-bio-lime/30 rounded-full px-3 py-1 shadow-lg">
<span className="h-1.5 w-1.5 rounded-full bg-bio-lime animate-pulse"></span>
                            Most popular
                        </span>
</div>
<div className="relative z-10">
<h3 className="text-xl text-white tracking-tight font-semibold">Pro</h3>
<p className="text-sm text-neutral-400 mt-1">For professionals</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl text-white tracking-tighter font-semibold">$19</span>
<span className="text-sm text-neutral-500">/month</span>
</div>
<ul className="mt-8 space-y-4 text-sm text-neutral-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-bio-lime" icon="lucide:check" width="18"></iconify-icon>
<span>Unlimited links</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-bio-lime" icon="lucide:check" width="18"></iconify-icon>
<span>Custom domain</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-bio-lime" icon="lucide:check" width="18"></iconify-icon>
<span>Advanced analytics</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-bio-lime" icon="lucide:check" width="18"></iconify-icon>
<span>Priority support</span>
</li>
</ul>
<a className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-bio-lime hover:bg-bio-400 text-neutral-900 h-12 text-sm font-semibold transition-colors shadow-lg shadow-bio-lime/20" href="#">
                            Start Pro trial
                        </a>
</div>
</div>

<div className="rounded-2xl border border-neutral-800 bg-neutral-800/40 p-8 hover:bg-neutral-800/60 transition-colors">
<h3 className="text-xl text-white tracking-tight font-semibold">Team</h3>
<p className="text-sm text-neutral-500 mt-1">For organizations</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl text-white tracking-tighter font-semibold">$49</span>
<span className="text-sm text-neutral-500">/month</span>
</div>
<ul className="mt-8 space-y-4 text-sm text-neutral-400">
<li className="flex items-center gap-3">
<iconify-icon className="text-bio-lime" icon="lucide:check" width="18"></iconify-icon>
<span>Everything in Pro</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-bio-lime" icon="lucide:check" width="18"></iconify-icon>
<span>Team collaboration</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-bio-lime" icon="lucide:check" width="18"></iconify-icon>
<span>Shared workspaces</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-bio-lime" icon="lucide:check" width="18"></iconify-icon>
<span>API access</span>
</li>
</ul>
<a className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 text-white h-12 border border-white/10 text-sm font-medium transition-colors" href="#">
                        Contact sales
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="text-2xl font-semibold tracking-tighter flex items-center gap-1 mb-6" href="#">
                        bio<span className="text-neutral-400">.tm</span>
</a>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        The intelligent link that empowers people &amp; brands to connect &amp; grow.
                    </p>
<div className="flex gap-4 text-neutral-400">
<a className="hover:text-neutral-900 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="hover:text-neutral-900 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="hover:text-neutral-900 transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Digital Business Card</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Link in Bio</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4">Contact</h4>
<p className="text-sm text-neutral-500 mb-2">Powered By 971 Media LLC</p>
<a className="text-sm text-neutral-900 hover:text-bio-500 font-medium transition-colors" href="mailto:media@971media.com">media@971media.com</a>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
<p>© 2023 bio.tm. All rights reserved.</p>
<div className="flex gap-6">
<span>Designed in Dubai</span>
<span>Built for the World</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
