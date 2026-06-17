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
fontFamily: {
sans: ['Space Grotesk', 'Noto Sans SC', 'sans-serif'],
display: ['Oswald', 'Noto Sans SC', 'sans-serif'],
mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
},
extend: {
colors: {
neutral: {
900: '#121212',
950: '#050505',
},
cyber: {
purple: '#b026ff', // Neon Purple
green: '#00ff41',  // Matrix Green
dark: '#020202',
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #202020 1px, transparent 1px), linear-gradient(to bottom, #202020 1px, transparent 1px)",
},
animation: {
'marquee': 'marquee 20s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        (function() {
            const targetDate = new Date('July 27, 2026 00:00:00').getTime();
            function updateCountdown() {
                const now = new Date().getTime();
                const distance = targetDate - now;
                if (distance < 0) {
                    const timer = document.getElementById('countdown-timer');
                    if (timer) {
                        timer.innerHTML = '<div class="col-span-2 md:col-span-4 text-center py-8"><div class="text-2xl text-cyber-green uppercase tracking-widest font-display animate-pulse">System Active</div></div>';
                    }
                    return;
                }
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                const elDays = document.getElementById('cd-days');
                const elHours = document.getElementById('cd-hours');
                const elMinutes = document.getElementById('cd-minutes');
                const elSeconds = document.getElementById('cd-seconds');
                
                if(elDays) elDays.innerText = String(days).padStart(2, '0');
                if(elHours) elHours.innerText = String(hours).padStart(2, '0');
                if(elMinutes) elMinutes.innerText = String(minutes).padStart(2, '0');
                if(elSeconds) elSeconds.innerText = String(seconds).padStart(2, '0');
            }
            updateCountdown();
            setInterval(updateCountdown, 1000);
        })();
    


        // Language Switcher Function
        function switchLang(lang) {
            const body = document.getElementById('main-body');
            
            if (lang === 'en') {
                body.classList.remove('lang-cn');
                body.classList.add('lang-en');
                document.documentElement.lang = 'en';
            } else {
                body.classList.remove('lang-en');
                body.classList.add('lang-cn');
                document.documentElement.lang = 'zh-CN';
            }
        }
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="text-white font-display font-bold tracking-tight text-xl flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold relative overflow-hidden">
<div className="absolute top-0 right-0 bottom-0 left-0 bg-white z-10 flex items-center justify-center">
<img alt="Icon" className="w-5 h-5 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e076b1e2-4f90-4e9d-be8e-5922c5ba77eb_320w.png"/>
<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-tr from-cyber-purple to-cyber-green opacity-0 group-hover:opacity-100 transition-opacity mix-blend-multiply"></div>
</div>
                    MF
                </div>
<span className="">MONEY FRONTIER <span className="text-cyber-green">2026</span></span>
</a>

<div className="hidden lg:flex items-center gap-2">
<a className="px-4 py-2 text-xs uppercase tracking-widest font-bold text-neutral-400 hover:text-white transition-colors" href="#">
<span className="" data-lang="en">Experience</span>
<span data-lang="cn">参会体验</span>
</a>
<div className="relative group">
<button className="px-4 py-2 text-xs uppercase tracking-widest font-bold text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
<span className="" data-lang="en">Agenda</span>
<span data-lang="cn">会议日程</span>
<svg aria-hidden="true" className="iconify group-hover:rotate-180 transition-transform duration-300 iconify--lucide" data-icon="lucide:chevron-down" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="dropdown-menu absolute top-full left-0 w-48 pt-4">
<div className="bg-neutral-900 border border-white/10 shadow-2xl p-1">
<a className="block px-4 py-3 text-sm hover:bg-white/5 text-neutral-400 hover:text-cyber-green transition-colors font-medium tracking-wide" href="#">
<span className="" data-lang="en">Speakers</span>
<span data-lang="cn">演讲嘉宾</span>
</a>
<a className="block px-4 py-3 text-sm hover:bg-white/5 text-neutral-400 hover:text-cyber-green transition-colors font-medium tracking-wide" href="#">
<span className="" data-lang="en">Full Schedule</span>
<span data-lang="cn">完整议程</span>
</a>
</div>
</div>
</div>
<div className="relative group">
<button className="px-4 py-2 text-xs uppercase tracking-widest font-bold text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
<span className="" data-lang="en">Partners</span>
<span data-lang="cn">合作伙伴</span>
<svg aria-hidden="true" className="iconify group-hover:rotate-180 transition-transform duration-300 iconify--lucide" data-icon="lucide:chevron-down" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="dropdown-menu absolute top-full left-0 w-64 pt-4">
<div className="bg-neutral-900 border border-white/10 shadow-2xl p-1">
<a className="block px-4 py-3 text-sm hover:bg-white/5 text-neutral-400 hover:text-cyber-green transition-colors font-medium tracking-wide" href="#">
<span className="" data-lang="en">Sponsors List</span>
<span data-lang="cn">赞助商列表</span>
</a>
<a className="block px-4 py-3 text-sm hover:bg-white/5 text-neutral-400 hover:text-cyber-green transition-colors font-medium tracking-wide" href="#">
<span className="" data-lang="en">Become a Sponsor</span>
<span data-lang="cn">成为赞助商</span>
</a>
</div>
</div>
</div>
<div className="relative group">
<button className="px-4 py-2 text-xs uppercase tracking-widest font-bold text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
<span className="" data-lang="en">Guide</span>
<span data-lang="cn">参会指南</span>
<svg aria-hidden="true" className="iconify group-hover:rotate-180 transition-transform duration-300 iconify--lucide" data-icon="lucide:chevron-down" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="dropdown-menu absolute top-full right-0 w-48 pt-4">
<div className="bg-neutral-900 border border-white/10 shadow-2xl p-1">
<a className="block px-4 py-3 text-sm hover:bg-white/5 text-cyber-purple hover:text-white transition-colors font-medium tracking-wide" href="#">
<span data-lang="en">VIP Access</span>
<span data-lang="cn">VIP 门票</span>
</a>
<a className="block px-4 py-3 text-sm hover:bg-white/5 text-neutral-400 hover:text-cyber-green transition-colors font-medium tracking-wide" href="#">
<span data-lang="en">Travel Info</span>
<span data-lang="cn">差旅指南</span>
</a>
<a className="block px-4 py-3 text-sm hover:bg-white/5 text-neutral-400 hover:text-cyber-green transition-colors font-medium tracking-wide" href="#">
<span data-lang="en">FAQ</span>
<span data-lang="cn">常见问题</span>
</a>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-4">

<div className="hidden sm:flex items-center gap-3 border-r border-white/10 pr-6 mr-2">
<button className="btn-lang-en text-xs font-bold uppercase tracking-widest transition-colors" onclick="switchLang('en')">Eng</button>
<span className="text-neutral-700 select-none">/</span>
<button className="btn-lang-cn uppercase transition-colors text-xs font-bold tracking-widest" onclick="switchLang('cn')">中文</button>
</div>
<a className="hidden sm:flex bg-gradient-to-r from-cyber-purple to-teal-600 hover:to-cyber-green text-white px-6 py-2.5 text-xs uppercase tracking-widest font-bold hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] transition-all items-center gap-2 skew-x-[-10deg]" href="#tickets">
<span className="skew-x-[10deg]" data-lang="en">Get Tickets</span>
<span className="skew-x-[10deg]" data-lang="cn">立即购票</span>
</a>
<button className="lg:hidden text-white hover:text-cyber-green transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</nav>

<header className="min-h-screen flex flex-col bg-black border-white/10 border-b relative justify-center">

<div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.15] pointer-events-none z-0"></div>

<div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-cyber-purple/20 blur-[150px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyber-green/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="w-full max-w-7xl z-10 mr-auto ml-auto pt-20 pr-6 pl-6 relative">

<div className="absolute top-[-10%] right-[-5%] w-full lg:w-[65%] h-[140%] pointer-events-none z-0 hidden lg:block select-none mix-blend-screen overflow-visible">
<div alt="Hong Kong Cyberpunk Skyline" className="relative background and keep neon lights (Vector/Cyberpunk feel) --&gt; &lt;img src=" https:="" images.unsplash.com="" photo-1536560035542-1326fab3a507?ixlib='rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2670&amp;q=80"' style={{maskImage: 'linear-gradient(to right, transparent, black 30%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%)', animationDuration: '8s'}}>

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
</div>
</div>
<div className="flex flex-col z-10 max-w-5xl relative items-start">

<div className="flex gap-4 bg-black/50 border-white/20 border rounded-sm mb-8 pt-2 pr-4 pb-2 pl-4 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md gap-x-4 gap-y-4 items-center">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-cyber-green animate-pulse shadow-[0_0_10px_#00ff41] rounded-full"></span>
<span className="uppercase text-sm font-semibold text-white tracking-widest font-display" data-lang="en"> Hong Kong</span>
<span className="text-sm font-semibold text-white uppercase tracking-widest font-display" data-lang="cn">中国香港</span>
</div>
<span className="w-px h-4 bg-white/20"></span>
<span className="uppercase text-sm font-semibold text-neutral-400 tracking-widest font-display" data-lang="en">27-28 July 2026</span>
<span className="uppercase text-sm font-semibold text-neutral-400 tracking-widest font-display" data-lang="cn">2026年6月</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-[9rem] font-display font-semibold text-white tracking-tighter leading-[0.85] mb-10 uppercase select-none drop-shadow-2xl">
            Money <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 via-white to-neutral-400">Frontier</span> <br/>
<span className="text-cyber-green drop-shadow-[0_0_20px_rgba(0,255,65,0.5)]">2026</span>
</h1>
<div className="border-l-4 border-cyber-purple pl-8 mb-12 bg-gradient-to-r from-cyber-purple/10 to-transparent py-2">
<div className="" data-lang="en">
<p className="md:text-2xl leading-tight text-xl font-light text-white tracking-wide font-sans mb-1">AT THE FRONTIER OF MARKET REALITY AND INNOVATION.</p>
<p className="md:text-2xl leading-tight text-xl font-light text-neutral-400 tracking-wide font-sans">CONVENED BY A LONG-STANDING, ESTABLISHED PRINCIPAL NETWORK.</p>
</div>
<div data-lang="cn">
<p className="text-xl md:text-2xl text-white font-light tracking-wide leading-tight font-sans mb-1">
                    处于市场现实与创新技术的最前沿。
                </p>
<p className="text-xl md:text-2xl text-neutral-400 font-light tracking-wide leading-tight font-sans">
                    由深耕行业多年的资深 Principal 网络发起。
                </p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
<a className="group relative px-8 py-3 bg-white text-black text-sm uppercase tracking-widest font-semibold overflow-hidden hover:bg-cyber-green transition-colors duration-300 flex items-center justify-center w-full sm:w-56" href="#tickets">
<span className="relative z-10 flex items-center gap-2">
<span className="" data-lang="en">Get Tickets</span>
<span data-lang="cn">立即购票</span>
</span>
<div className="transform group-hover:translate-y-0 transition-transform duration-300 ease-in-out absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
</a>
<a className="group relative px-8 py-3 bg-black border border-white/20 text-white text-sm uppercase tracking-widest font-semibold overflow-hidden hover:bg-cyber-purple hover:border-cyber-purple transition-colors duration-300 flex items-center justify-center w-full sm:w-56" href="#sponsor">
<span className="relative z-10 flex items-center gap-2">
<span className="" data-lang="en">Sponsor</span>
<span data-lang="cn">成为赞助商</span>
</span>
<div className="transform group-hover:translate-y-0 transition-transform duration-300 ease-in-out absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
</a>
</div>
</div>
</div>
</header>

<section className="overflow-hidden bg-neutral-950 border-white/10 border-b relative">
<div className="max-w-7xl mx-auto px-6 py-24 relative">

<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyber-purple/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyber-green/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

<div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start relative z-10 mb-24">

<div className="lg:col-span-5 lg:sticky lg:top-32">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-mono tracking-[0.2em] text-cyber-green uppercase">
<span data-lang="cn">// 我们的使命</span>
</span>
</div>
<div className="" data-lang="en">
<h2 className="text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] font-semibold text-white tracking-tighter font-display">
                    Beyond <br/>
                    The <span className="italic text-cyber-purple inline-block pb-2" style={{lineHeight: '1.1'}}>Noise</span>
</h2>
</div>
<div data-lang="cn">
<h2 className="text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] font-semibold text-white tracking-tighter font-display">
                    超越喧嚣 <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-green italic">直抵前沿</span>
</h2>
</div>
</div>

<div className="lg:col-span-7">
<div className="relative">

<div className="absolute -top-8 -left-2 text-8xl font-display text-cyber-purple/20 leading-none select-none pointer-events-none">"</div>
<div className="relative pl-6 border-l border-white/10">
<div className="space-y-6" data-lang="en">
<p className="text-2xl md:text-3xl leading-[1.3] font-light text-white tracking-tight">
                            Money Frontier is built to <span className="text-cyber-green font-normal">cut through the noise</span> of each market cycle and identify where the opportunities, challenges, and risks truly lie.
                        </p>
<p className="text-base md:text-lg leading-relaxed font-light text-neutral-400">
                            We bring together the market intelligence and operator insight you need to navigate a fast-changing market with greater clarity.
                        </p>
</div>
<div className="space-y-6" data-lang="cn">
<p className="text-2xl md:text-3xl leading-[1.4] font-light text-white tracking-wide">
                            Money Frontier 是由 <span className="text-cyber-green font-normal">Benmo</span> 主办的会议，旨在通过全新的视角和精心策划的圆桌讨论，<span className="text-cyber-green font-normal">穿透行业噪音</span>。
                        </p>
<p className="text-base md:text-lg leading-relaxed font-light text-neutral-400">
                            如今许多会议反复邀请相同的演讲者，讨论陈旧的话题，让与会者感到空洞，参展商也无法接触到真实用户。这反映了活动与一线市场现实的脱节。
                        </p>
<p className="text-base md:text-lg leading-relaxed font-light text-neutral-400">
                            立足于一线市场现实，Money Frontier 汇聚活跃的市场参与者，发掘真实需求、未被满足的痛点和用户实际问题，直面结构性挑战，使创新与现实应用接轨。
                        </p>
</div>
</div>
</div>
</div>
</div>

<div className="w-full relative z-10">

<div className="flex flex-col md:flex-row gap-4 mb-12 justify-between items-end border-b border-white/10 pb-6">
<div className="">
<div className="flex items-center gap-3 mb-4">
<span className="w-2 h-2 bg-cyber-purple shadow-[0_0_10px_#b026ff] rounded-full"></span>
<span className="text-cyber-purple uppercase text-xs tracking-[0.2em] font-mono">
<span className="" data-lang="en">// Money FRONTIER 2026</span>
<span data-lang="cn">// 前沿探索</span>
</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-semibold text-white tracking-tighter font-display leading-[0.95]">
<span className="" data-lang="en">Core theme</span>
<span data-lang="cn">大会核心议题</span>
</h2>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-6 gap-x-6 gap-y-6">

<div className="group relative flex flex-col p-8 md:p-10 bg-gradient-to-br from-cyber-purple/5 to-transparent border border-white/10 hover:border-cyber-purple/40 transition-all duration-500 overflow-hidden backdrop-blur-xl">
<div className="absolute inset-0 bg-[radial-gradient(rgba(176,38,255,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="absolute -top-32 -right-32 w-96 h-96 bg-cyber-purple/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-cyber-purple/20 transition-all duration-700"></div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyber-purple/0 via-cyber-purple/50 to-cyber-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col mb-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<span className="text-xs text-cyber-purple uppercase tracking-[0.2em] font-mono px-3 py-1.5 border border-cyber-purple/30 bg-cyber-purple/5">
<span className="" data-lang="en">Track 01</span>
<span data-lang="cn">议题 01</span>
</span>
</div>
</div>
<h3 className="text-2xl md:text-3xl uppercase leading-[1.05] font-semibold text-white tracking-tight font-display whitespace-nowrap overflow-hidden text-ellipsis">
<span className="" data-lang="en">Capital Strategy &amp; Market Intelligence</span>
<span data-lang="cn">资本策略 &amp; 市场情报</span>
</h3>
</div>
<div className="relative z-10 mt-auto flex flex-col gap-1.5">
<div className="group/item flex items-center gap-5 p-4 border-l-2 border-cyber-purple/20 hover:border-cyber-purple hover:bg-white/[0.03] transition-all duration-300 cursor-default">
<span className="text-neutral-300 group-hover/item:text-white font-medium tracking-wide text-sm md:text-base transition-colors flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
<span className="" data-lang="en">Yield Products &amp; Strategies</span>
<span data-lang="cn">收益产品与策略</span>
</span>
</div>
<div className="group/item flex items-center gap-5 p-4 border-l-2 border-cyber-purple/20 hover:border-cyber-purple hover:bg-white/[0.03] transition-all duration-300 cursor-default">
<span className="text-neutral-300 group-hover/item:text-white font-medium tracking-wide text-sm md:text-base transition-colors flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
<span className="" data-lang="en">High-Beta Assets &amp; Market Outlook</span>
<span data-lang="cn">高Beta资产与市场展望</span>
</span>
</div>
<div className="group/item flex items-center gap-5 p-4 border-l-2 border-cyber-purple/20 hover:border-cyber-purple hover:bg-white/[0.03] transition-all duration-300 cursor-default">
<span className="text-neutral-300 group-hover/item:text-white font-medium tracking-wide text-sm md:text-base transition-colors flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
<span className="" data-lang="en">Global Regulation &amp; Security in AI Age</span>
<span data-lang="cn">AI时代下的全球监管与安全风险</span>
</span>
</div>
</div>
</div>

<div className="group relative flex flex-col p-8 md:p-10 bg-gradient-to-br from-cyber-green/5 to-transparent border border-white/10 hover:border-cyber-green/40 transition-all duration-500 overflow-hidden backdrop-blur-xl">
<div className="absolute inset-0 bg-[radial-gradient(rgba(0,255,65,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyber-green/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-cyber-green/20 transition-all duration-700"></div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyber-green/0 via-cyber-green/50 to-cyber-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col mb-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<span className="text-xs text-cyber-green uppercase tracking-[0.2em] font-mono px-3 py-1.5 border border-cyber-green/30 bg-cyber-green/5">
<span className="" data-lang="en">Track 02</span>
<span data-lang="cn">议题 02</span>
</span>
</div>
</div>
<h3 className="text-2xl md:text-3xl uppercase leading-[1.05] font-semibold text-white tracking-tight font-display whitespace-nowrap overflow-hidden text-ellipsis">
<span className="" data-lang="en">Bitcoin Mining x AI</span>
<span data-lang="cn">比特币挖矿 x AI</span>
</h3>
</div>
<div className="relative z-10 mt-auto flex flex-col gap-1.5">
<div className="group/item flex gap-5 border-cyber-green/20 hover:border-cyber-green hover:bg-white/[0.03] transition-all duration-300 cursor-default border-l-2 pt-4 pr-4 pb-4 pl-4 gap-x-5 gap-y-5 items-center">
<span className="group-hover/item:text-white md:text-base transition-colors flex-1 whitespace-nowrap overflow-hidden text-ellipsis text-sm font-medium text-neutral-300 tracking-wide"><span className="" data-lang="en">The shift to Server-Like, Rack-Based Miners</span> <span data-lang="cn">从矿场升级到混合算力基础设施</span></span>
</div>
<div className="group/item flex items-center gap-5 p-4 border-l-2 border-cyber-green/20 hover:border-cyber-green hover:bg-white/[0.03] transition-all duration-300 cursor-default">
<span className="group-hover/item:text-white md:text-base transition-colors flex-1 text-sm font-medium text-neutral-300 tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">
<span className="" data-lang="en">Mining Farm Upgrades</span>
<span data-lang="cn">AI算力需求与能源经济</span>
</span>
</div>
<div className="group/item flex items-center gap-5 p-4 border-l-2 border-cyber-green/20 hover:border-cyber-green hover:bg-white/[0.03] transition-all duration-300 cursor-default">
<span className="group-hover/item:text-white md:text-base transition-colors flex-1 whitespace-nowrap overflow-hidden text-ellipsis text-sm font-medium text-neutral-300 tracking-wide">From Mining  to Hybrid Compute Infrastructure</span>
</div>
</div>
</div>
</div>
</div>
</div><div className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
<div className="bg-neutral-900/40 border border-white/10 p-8 md:p-12 relative overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-[0.05] pointer-events-none"></div>
<div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyber-purple to-cyber-green"></div>
<div className="flex flex-col xl:flex-row items-center justify-between gap-12 relative z-10">
<div className="text-center xl:text-left">
<span className="text-cyber-purple uppercase block text-xs tracking-widest font-mono mb-3">
<span className="" data-lang="en">// Conference Countdown</span>
<span data-lang="cn">// 系统状态：倒计时已启动</span>
</span>
<h3 className="text-3xl md:text-5xl uppercase font-semibold text-white tracking-tight font-display">
<span className="" data-lang="en">Time Until <br className="hidden xl:block"/><span className="text-cyber-green">Money Frontier</span></span>
<span data-lang="cn">距离大会<br className="hidden xl:block"/><span className="text-cyber-green">开幕</span></span>
</h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full xl:w-auto font-mono" id="countdown-timer">
<div className="flex flex-col items-center bg-black/60 border border-white/10 px-6 py-8 relative w-full xl:w-[140px]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-cyber-purple"></div>
<div className="sm:text-5xl text-4xl font-semibold text-white tracking-tight" id="cd-days">77</div>
<div className="text-[10px] uppercase text-neutral-500 tracking-widest mt-2 font-sans font-medium">
<span className="" data-lang="en">Days</span>
<span data-lang="cn">天</span>
</div>
</div>
<div className="flex flex-col items-center bg-black/60 border border-white/10 px-6 py-8 relative w-full xl:w-[140px]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-cyber-purple"></div>
<div className="text-4xl sm:text-5xl font-semibold text-white tracking-tight" id="cd-hours">05</div>
<div className="text-[10px] uppercase text-neutral-500 tracking-widest mt-2 font-sans font-medium">
<span className="" data-lang="en">Hours</span>
<span data-lang="cn">时</span>
</div>
</div>
<div className="flex flex-col items-center bg-black/60 border border-white/10 px-6 py-8 relative w-full xl:w-[140px]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-cyber-green"></div>
<div className="text-4xl sm:text-5xl font-semibold text-white tracking-tight" id="cd-minutes">05</div>
<div className="text-[10px] uppercase text-neutral-500 tracking-widest mt-2 font-sans font-medium">
<span className="" data-lang="en">Mins</span>
<span data-lang="cn">分</span>
</div>
</div>
<div className="flex flex-col items-center bg-black/60 border border-cyber-green/30 px-6 py-8 relative w-full xl:w-[140px] shadow-[inset_0_0_20px_rgba(0,255,65,0.05)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-cyber-green shadow-[0_0_10px_#00ff41]"></div>
<div className="text-4xl sm:text-5xl font-semibold text-cyber-green tracking-tight drop-shadow-[0_0_10px_rgba(0,255,65,0.3)]" id="cd-seconds">53</div>
<div className="text-[10px] uppercase text-cyber-green/80 tracking-widest mt-2 font-sans font-medium">
<span data-lang="en">Secs</span>
<span data-lang="cn">秒</span>
</div>
</div>
</div>
</div>
</div>

</div>
</section>

<section className="bg-black border-white/10 border-b relative" id="tickets">
<div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyber-purple/20 to-transparent"></div>
<div className="z-10 max-w-7xl mx-auto px-6 py-32 relative">
<div className="text-center mb-16">
<span className="text-cyber-green uppercase block text-xs tracking-[0.2em] font-mono mb-4">
<span className="" data-lang="en">Join us in Hong Kong</span>
<span data-lang="cn">相聚香港</span>
</span>
<h2 className="text-5xl md:text-6xl uppercase font-bold text-white tracking-tighter font-display">
<span className="" data-lang="en">Choose Your Pass</span>
<span data-lang="cn">选择您的门票</span>
</h2>
</div>
<div className="grid lg:grid-cols-3 gap-x-6 gap-y-6 items-start">

<div className="group flex flex-col p-1 bg-neutral-900 border border-white/10 hover:border-white/30 transition-all h-full">
<div className="flex flex-col bg-black/50 h-full p-8">
<div className="border-white/10 border-b mb-8 pb-8">
<h3 className="uppercase text-2xl font-bold text-white font-display mb-2">
<span className="" data-lang="en">Standard</span>
<span data-lang="cn">标准门票</span>
</h3>
<div className="text-4xl font-bold text-neutral-300 tracking-tight">$99</div>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<span className="text-cyber-green">✓</span>
<span className="" data-lang="en">Main Stage Access</span>
<span data-lang="cn">主会场通行证</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<span className="text-cyber-green">✓</span>
<span className="" data-lang="en">Exhibition Hall Entry</span>
<span data-lang="cn">展厅入场资格</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<span className="" data-lang="en"></span>
<span data-lang="cn">官方社交 App 使用权</span>
</li>
</ul>
<button className="uppercase hover:bg-white hover:text-black transition-all text-sm font-bold text-white tracking-widest w-full border-white/20 border py-4">
<span data-lang="en">Buy Now</span>
<span data-lang="cn">立即购买</span>
</button>
</div>
</div>

<div className="group flex flex-col relative transform lg:-translate-y-4">
<div className="flex flex-col bg-gradient-to-b from-cyber-purple/20 to-neutral-900 h-full p-8 relative border border-cyber-purple/50 shadow-[0_0_30px_rgba(176,38,255,0.15)]">
<div className="absolute top-0 right-0 bg-cyber-purple text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
<span data-lang="en">Most Popular</span>
<span data-lang="cn">最受欢迎</span>
</div>
<div className="mb-8 border-b border-white/10 pb-8">
<h3 className="uppercase flex items-center gap-2 text-2xl font-bold text-white font-display mb-2">
<span className="" data-lang="en">PRO Pass</span>
<span data-lang="cn">PRO 门票</span>
</h3>
<div className="text-4xl font-bold text-white tracking-tight">$499</div>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm font-medium text-white">
<span className="text-cyber-purple">✓</span>
<span className="" data-lang="en">All Standard Features</span>
<span data-lang="cn">包含所有标准门票权益</span>
</li>
<li className="flex items-start gap-3 text-sm font-medium text-white">
<span className="text-cyber-purple">✓</span>
<span className="" data-lang="en">Complimentary Drinks</span>
<span data-lang="cn">全天免费饮品</span>
</li>
<li className="flex items-start gap-3 text-sm text-white font-medium">
<span className="text-cyber-purple">✓</span>
<span className="" data-lang="en">Exclusive Afterparty</span>
<span data-lang="cn">专属 Afterparty 入场券</span>
</li>
</ul>
<button className="uppercase bg-cyber-purple hover:bg-white hover:text-black transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] text-sm font-bold text-white tracking-widest w-full py-4 shadow-[0_0_20px_rgba(176,38,255,0.3)]">
<span className="" data-lang="en">Buy Now</span>
<span data-lang="cn">立即购买</span>
</button>
</div>
</div>

<div className="group flex flex-col p-1 bg-neutral-900 border border-white/10 hover:border-white/30 transition-all h-full">
<div className="flex flex-col bg-gradient-to-b from-cyber-green/10 to-black h-full p-8 relative border border-cyber-green/30 hover:border-cyber-green/50 transition-colors duration-300">
<div className="absolute top-0 right-0 bg-cyber-green text-black text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
<span data-lang="en">Limited</span>
<span data-lang="cn">尊享体验</span>
</div>
<div className="border-white/10 border-b mb-8 pb-8">
<h3 className="uppercase text-2xl font-bold text-white font-display mb-2">
<span className="" data-lang="en">VIP Pass</span>
<span data-lang="cn">VIP 门票</span>
</h3>
<div className="text-4xl font-bold text-neutral-300 tracking-tight">$1,999</div>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<span className="text-cyber-green">✓</span>
<span className="" data-lang="en">VIP &amp; Speaker Lounge</span>
<span data-lang="cn">VIP 及演讲嘉宾休息室</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<span className="text-cyber-green">✓</span>
<span className="" data-lang="en">Private Roundtables</span>
<span data-lang="cn">闭门圆桌会议通道</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<span className="text-cyber-green">✓</span>
<span className="" data-lang="en">All Official Parties</span>
<span data-lang="cn">所有官方派对通行证</span>
</li>
</ul>
<button className="uppercase hover:bg-cyber-green hover:text-black transition-all text-sm font-bold text-white tracking-widest w-full border-white/20 border py-4 hover:border-cyber-green">
<span className="" data-lang="en">Buy Now</span>
<span data-lang="cn">立即购买</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 border-white/10 border-b pt-32 pb-32">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="flex flex-col md:flex-row gap-6 mb-12 gap-x-6 gap-y-6 items-end justify-between">
<div className="">
<span className="text-cyber-purple uppercase block text-xs tracking-widest font-mono mb-2">// 
                    <span className="" data-lang="en">money frontier 2026</span>
<span data-lang="cn">前沿之声</span>
</span>
<h2 className="text-4xl md:text-5xl uppercase font-bold text-white tracking-tighter font-display">
<span className="" data-lang="en">Featured Speakers</span>
<span data-lang="cn">精选演讲嘉宾</span>
</h2>
</div>
<a className="uppercase hover:bg-cyber-green hover:border-cyber-green hover:text-black transition-all flex items-center gap-2 text-xs font-bold text-white tracking-widest border-white/20 border pt-3 pr-6 pb-3 pl-6" href="#">
<span className="" data-lang="en">View All</span>
<span data-lang="cn">查看全部嘉宾</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 gap-y-8">

<div className="group relative flex flex-col bg-neutral-900/20 border border-white/10 hover:border-cyber-purple/50 transition-colors duration-500 p-3">
<div className="relative w-full aspect-[4/5] overflow-hidden mb-4 bg-black">
<div className="absolute inset-0 bg-[radial-gradient(rgba(176,38,255,0.2)_1px,transparent_1px)] [background-size:8px_8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
<img alt="CHRIS ZHU" className="object-cover w-full h-full object-top group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16d654fd-0a07-4468-acf6-718b7507a907_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyber-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
</div>
<div className="flex flex-col px-1 pb-1">
<h3 className="uppercase group-hover:text-cyber-purple transition-colors line-clamp-1 text-lg font-bold text-white tracking-tight font-display mb-1">Dr.yang</h3>
<p className="text-[10px] uppercase text-cyber-green line-clamp-1 tracking-widest font-mono mb-1">MicroBT</p>
<p className="text-[10px] uppercase line-clamp-1 font-medium text-neutral-500 tracking-wider">Founder and CEO</p>
</div>
</div>

<div className="group relative flex flex-col bg-neutral-900/20 border border-white/10 hover:border-cyber-green/50 transition-colors duration-500 p-3">
<div className="relative w-full aspect-[4/5] overflow-hidden mb-4 bg-black">
<div className="absolute inset-0 bg-[radial-gradient(rgba(0,255,65,0.2)_1px,transparent_1px)] [background-size:8px_8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
<img alt="XING KONG" className="object-cover w-full h-full object-top group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2634640-837f-4d8b-a623-682061715bdd_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyber-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
</div>
<div className="flex flex-col px-1 pb-1">
<h3 className="uppercase text-lg font-bold text-white tracking-tight font-display mb-1 group-hover:text-cyber-green transition-colors line-clamp-1">XING KONG</h3>
<p className="text-[10px] uppercase text-cyber-green font-mono tracking-widest mb-1 line-clamp-1">BIXIN</p>
<p className="text-[10px] uppercase font-medium text-neutral-500 tracking-wider line-clamp-1">FOUNDER</p>
</div>
</div>

<div className="group relative flex flex-col bg-neutral-900/20 border border-white/10 hover:border-cyber-purple/50 transition-colors duration-500 p-3">
<div className="relative w-full aspect-[4/5] overflow-hidden mb-4 bg-black">
<div className="absolute inset-0 bg-[radial-gradient(rgba(176,38,255,0.2)_1px,transparent_1px)] [background-size:8px_8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
<img alt="SUPER" className="object-cover w-full h-full object-top group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4409b6e0-b375-4513-bea7-ea6a0a651c94_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyber-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
</div>
<div className="flex flex-col px-1 pb-1">
<h3 className="uppercase text-lg font-bold text-white tracking-tight font-display mb-1 group-hover:text-cyber-purple transition-colors line-clamp-1">SUPER</h3>
<p className="text-[10px] uppercase text-cyber-green font-mono tracking-widest mb-1 line-clamp-1">BENMO</p>
<p className="text-[10px] uppercase font-medium text-neutral-500 tracking-wider line-clamp-1">FOUNDER</p>
</div>
</div>

<div className="group relative flex flex-col bg-neutral-900/20 border border-white/10 hover:border-cyber-green/50 transition-colors duration-500 p-3">
<div className="relative w-full aspect-[4/5] overflow-hidden mb-4 bg-black">
<div className="absolute inset-0 bg-[radial-gradient(rgba(0,255,65,0.2)_1px,transparent_1px)] [background-size:8px_8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
<img alt="LAOMAO" className="object-cover w-full h-full object-top group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c80bfe56-c590-481c-abec-e656d90f3ac0_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyber-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
</div>
<div className="flex flex-col px-1 pb-1">
<h3 className="uppercase text-lg font-bold text-white tracking-tight font-display mb-1 group-hover:text-cyber-green transition-colors line-clamp-1">LAOMAO</h3>
<p className="text-[10px] uppercase text-cyber-green font-mono tracking-widest mb-1 line-clamp-1">ANCHPOR</p>
<p className="text-[10px] uppercase font-medium text-neutral-500 tracking-wider line-clamp-1">FOUNDER</p>
</div>
</div>

<div className="group relative flex flex-col bg-neutral-900/20 border border-white/10 hover:border-cyber-purple/50 transition-colors duration-500 p-3">
<div className="relative w-full aspect-[4/5] overflow-hidden mb-4 bg-black">
<div className="absolute inset-0 bg-[radial-gradient(rgba(176,38,255,0.2)_1px,transparent_1px)] [background-size:8px_8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
<img alt="JOHN RIGGINS" className="object-cover w-full h-full object-top group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c8ee02c9-8ead-49bc-8c73-e833365a890d_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyber-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
</div>
<div className="flex flex-col px-1 pb-1">
<h3 className="uppercase text-lg font-bold text-white tracking-tight font-display mb-1 group-hover:text-cyber-purple transition-colors line-clamp-1">JOHN RIGGINS</h3>
<p className="text-[10px] uppercase text-cyber-green font-mono tracking-widest mb-1 line-clamp-1">MOON INC</p>
<p className="text-[10px] uppercase font-medium text-neutral-500 tracking-wider line-clamp-1">CEO</p>
</div>
</div>

<div className="group relative flex flex-col bg-neutral-900/20 border border-white/10 hover:border-cyber-green/50 transition-colors duration-500 p-3">
<div className="relative w-full aspect-[4/5] overflow-hidden mb-4 bg-black">
<div className="absolute inset-0 bg-[radial-gradient(rgba(0,255,65,0.2)_1px,transparent_1px)] [background-size:8px_8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
<img alt="DAVID ZELL" className="object-cover w-full h-full object-top group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14c19a74-f25b-4e24-99f6-8010788cf501_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyber-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
</div>
<div className="flex flex-col px-1 pb-1">
<h3 className="uppercase text-lg font-bold text-white tracking-tight font-display mb-1 group-hover:text-cyber-green transition-colors line-clamp-1">DAVID ZELL</h3>
<p className="text-[10px] uppercase text-cyber-green font-mono tracking-widest mb-1 line-clamp-1">BITCOIN POLICY INSTITUTE</p>
<p className="text-[10px] uppercase font-medium text-neutral-500 tracking-wider line-clamp-1">CO-FOUNDER &amp; PRESIDENT</p>
</div>
</div>

<div className="group relative flex flex-col bg-neutral-900/20 border border-white/10 hover:border-cyber-purple/50 transition-colors duration-500 p-3">
<div className="relative w-full aspect-[4/5] overflow-hidden mb-4 bg-black">
<div className="absolute inset-0 bg-[radial-gradient(rgba(176,38,255,0.2)_1px,transparent_1px)] [background-size:8px_8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
<img alt="GUY YOUNG" className="object-cover w-full h-full object-top group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f2c2e093-104d-4eb3-a581-1596430ea189_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyber-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
</div>
<div className="flex flex-col px-1 pb-1">
<h3 className="uppercase text-lg font-bold text-white tracking-tight font-display mb-1 group-hover:text-cyber-purple transition-colors line-clamp-1">GUY YOUNG</h3>
<p className="text-[10px] uppercase text-cyber-green font-mono tracking-widest mb-1 line-clamp-1">ETHENA</p>
<p className="text-[10px] uppercase font-medium text-neutral-500 tracking-wider line-clamp-1">FOUNDER &amp; CEO</p>
</div>
</div>

<div className="group relative flex flex-col bg-neutral-900/20 border border-white/10 hover:border-cyber-green/50 transition-colors duration-500 p-3">
<div className="relative w-full aspect-[4/5] overflow-hidden mb-4 bg-black">
<div className="absolute inset-0 bg-[radial-gradient(rgba(0,255,65,0.2)_1px,transparent_1px)] [background-size:8px_8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
<img alt="XIAN DAO" className="object-cover w-full h-full object-top group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52bba35f-e2c1-478a-a455-b9c61cf64248_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyber-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
</div>
<div className="flex flex-col px-1 pb-1">
<h3 className="uppercase text-lg font-bold text-white tracking-tight font-display mb-1 group-hover:text-cyber-green transition-colors line-clamp-1">XIAN DAO</h3>
<p className="text-[10px] uppercase text-cyber-green font-mono tracking-widest mb-1 line-clamp-1">JILIAN GROUP</p>
<p className="text-[10px] uppercase font-medium text-neutral-500 tracking-wider line-clamp-1">FOUNDER</p>
</div>
</div>

<div className="group relative flex flex-col bg-neutral-900/20 border border-white/10 hover:border-cyber-purple/50 transition-colors duration-500 p-3">
<div className="relative w-full aspect-[4/5] overflow-hidden mb-4 bg-black">
<div className="absolute inset-0 bg-[radial-gradient(rgba(176,38,255,0.2)_1px,transparent_1px)] [background-size:8px_8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
<img alt="DAVID KIM" className="object-top group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2db32f0f-f968-4c58-9b6b-9220c661b7b0_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyber-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
</div>
<div className="flex flex-col px-1 pb-1">
<h3 className="uppercase group-hover:text-cyber-purple transition-colors line-clamp-1 text-lg font-bold text-white tracking-tight font-display mb-1">Chris zhu</h3>
<p className="text-[10px] uppercase text-cyber-green font-mono tracking-widest mb-1 line-clamp-1">KUPOOL</p>
<p className="text-[10px] uppercase font-medium text-neutral-500 tracking-wider line-clamp-1">CEO</p>
</div>
</div>

<div className="group relative flex flex-col bg-neutral-900/20 border border-white/10 hover:border-cyber-green/50 transition-colors duration-500 p-3">
<div className="relative w-full aspect-[4/5] overflow-hidden mb-4 bg-black">
<div className="absolute inset-0 bg-[radial-gradient(rgba(0,255,65,0.2)_1px,transparent_1px)] [background-size:8px_8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
<img alt="ALEXANDRA ZHAO" className="object-cover w-full h-full object-top group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/745edf6a-57cf-4148-bedd-20452a0f7870_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyber-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
</div>
<div className="flex flex-col px-1 pb-1">
<h3 className="uppercase text-lg font-bold text-white tracking-tight font-display mb-1 group-hover:text-cyber-green transition-colors line-clamp-1">ALEXANDRA ZHAO</h3>
<p className="text-[10px] uppercase text-cyber-green font-mono tracking-widest mb-1 line-clamp-1">CSOP ASSET MANAGEMENT</p>
<p className="text-[10px] uppercase font-medium text-neutral-500 tracking-wider line-clamp-1">EXECUTIVE DIRECTOR</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24 relative">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#00ff41_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.05] pointer-events-none"></div>
<div className="z-10 max-w-5xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative">

<div className="mb-16">

<div className="flex mb-8 gap-x-3 gap-y-3 items-center justify-center">
<div className="flex gap-1 text-cyber-purple font-semibold text-xl md:text-2xl italic tracking-tighter">
<span>/</span><span>/</span><span>/</span>
</div>
<h2 className="text-lg md:text-xl font-medium text-black tracking-[0.15em] uppercase font-sans">
<span className="" data-lang="en">Strategic Principal Networks</span>
<span data-lang="cn">联合呈现</span>
</h2>
</div>

<div className="flex flex-col md:flex-row gap-16 md:gap-32 gap-x-16 gap-y-16 items-center justify-center">
<div className="flex items-center gap-4 md:gap-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
<img alt="Benmo" className="md:h-12 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f917cc3-6f63-4fd2-99fa-d898e59c520f_320w.png"/>
<span className="uppercase md:text-3xl text-3xl font-medium text-gray-950 tracking-tight font-sans">Benmo</span>
</div>
<div className="flex items-center gap-4 md:gap-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
<img alt="吾道不孤" className="h-10 md:h-12 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1996091-105d-4e6a-b14e-3e84d4d3f941_320w.png"/>
<span className="text-3xl font-medium text-gray-950 tracking-tight font-sans md:text-3xl">吾道不孤</span>
</div>
</div>
</div>

<div className="mb-12">

<div className="flex mb-1 gap-x-3 gap-y-3 items-center justify-center">
<div className="flex gap-1 text-cyber-green font-semibold text-lg md:text-xl italic tracking-tighter">
<span>/</span><span>/</span><span>/</span>
</div>
<h2 className="text-base md:text-lg font-medium text-black tracking-[0.15em] uppercase font-sans">
<span className="text-lg md:text-xl" data-lang="en">Produced By</span>
<span data-lang="cn">执行主办</span>
</h2>
</div>

<div className="flex flex-col md:flex-row md:gap-12 gap-x-8 gap-y-8 items-center justify-center">
<img alt="Kupool" className="h-16 md:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6ec6f67-7fea-4c5b-8cd1-7722af95b87a_800w.png"/>
<img alt="KUAI.CLOUD" className="h-16 md:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab364a59-c569-4079-9f75-8df840479515_800w.png"/>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 border-black/10 border-t mt-16 pt-8 items-center justify-center">
<a className="group relative px-8 py-4 bg-black text-white text-xs uppercase tracking-widest font-semibold hover:bg-cyber-green hover:text-black transition-colors duration-300 flex items-center justify-center w-full sm:w-auto min-w-[240px]" href="#">
<span className="relative z-10 flex items-center gap-2">
<span data-lang="en">Become a Sponsor</span>
<span data-lang="cn">成为赞助商</span>
<svg className="group-hover:translate-x-1 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<a className="group relative px-8 py-4 bg-transparent border border-black/20 text-black text-xs uppercase tracking-widest font-semibold hover:border-black hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center w-full sm:w-auto min-w-[240px]" href="#">
<span className="relative z-10 flex items-center gap-2">
<span data-lang="en">View All Partners</span>
<span data-lang="cn">查看所有合作伙伴</span>
<svg className="group-hover:translate-x-1 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
</div>
</div>
</section>

<footer className="bg-black border-white/10 border-t pt-24 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
<div className="max-w-sm">
<a className="text-white font-display font-bold tracking-tight text-xl flex items-center gap-2 mb-8" href="#">
<div className="flex font-bold text-black bg-white w-8 h-8 items-center justify-center">MF</div>
                        MONEY FRONTIER
                    </a>
<div className="leading-relaxed text-base text-neutral-500 mb-6">
<span className="" data-lang="en">Bridging the gap between innovation and real users.<br/> </span>
<span data-lang="cn">弥合创新与真实用户之间的鸿沟。<br/> 中国香港 2026。</span>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 border border-white/10 flex items-center justify-center text-white hover:bg-cyber-purple hover:border-cyber-purple transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="flex items-center justify-center hover:bg-cyber-purple hover:border-cyber-purple transition-colors text-white w-10 h-10 border-white/10 border" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect className="" height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-16 lg:gap-24 w-full lg:w-auto">
<div className="">
<h4 className="text-white font-display font-bold uppercase tracking-widest mb-6 text-sm">
<span className="" data-lang="en">Agenda</span>
<span data-lang="cn">会议日程</span>
</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-medium tracking-wide">
<li className=""><a className="hover:text-cyber-green transition-colors" href="#"><span className="" data-lang="en">Experience</span><span data-lang="cn">参会体验</span></a></li>
<li className=""><a className="hover:text-cyber-green transition-colors" href="#"><span className="" data-lang="en">Agenda</span><span data-lang="cn">完整议程</span></a></li>
<li className=""><a className="hover:text-cyber-green transition-colors" href="#"><span className="" data-lang="en">Speakers</span><span data-lang="cn">演讲嘉宾</span></a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-display font-bold uppercase tracking-widest mb-6 text-sm">
<span className="" data-lang="en">Partners</span>
<span data-lang="cn">合作伙伴</span>
</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-medium tracking-wide">
<li className=""><a className="hover:text-cyber-green transition-colors" href="#"><span className="" data-lang="en">Sponsors List</span><span data-lang="cn">赞助商列表</span></a></li>
<li className=""><a className="hover:text-cyber-green transition-colors" href="#"><span className="" data-lang="en">Become a Sponsor</span><span data-lang="cn">成为赞助商</span></a></li>
<li className=""><a className="hover:text-cyber-green transition-colors" href="#"><span className="" data-lang="en">Media</span><span data-lang="cn">媒体合作</span></a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-display font-bold uppercase tracking-widest mb-6 text-sm">
<span data-lang="en">Guide</span>
<span data-lang="cn">参会指南</span>
</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-medium tracking-wide">
<li className=""><a className="hover:text-cyber-green transition-colors" href="#"><span className="" data-lang="en">Get Tickets</span><span data-lang="cn">立即购票</span></a></li>
<li className=""><a className="hover:text-cyber-green transition-colors" href="#"><span className="" data-lang="en">Travel Info</span><span data-lang="cn">差旅指南</span></a></li>
<li className=""><a className="hover:text-cyber-green transition-colors" href="#"><span className="" data-lang="en">FAQ</span><span data-lang="cn">常见问题</span></a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600 uppercase tracking-widest font-mono">
<div>
<span data-lang="en">© 2026 Benmo. All rights reserved.</span>
<span data-lang="cn">© 2026 Benmo. 版权所有.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#"><span data-lang="en">Privacy</span><span data-lang="cn">隐私政策</span></a>
<a className="hover:text-white transition-colors" href="#"><span data-lang="en">Terms</span><span data-lang="cn">服务条款</span></a>
<a className="hover:text-white transition-colors" href="#"><span data-lang="en">Code of Conduct</span><span data-lang="cn">行为准则</span></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
