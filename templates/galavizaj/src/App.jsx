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



  window.addEventListener('load', () => {
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.remove('opacity-0', 'translate-y-4')
      el.classList.add('opacity-100', 'translate-y-0')
    })
  })



        // Modal Logic
        function toggleModal(show) {
            const modal = document.getElementById('booking-modal');
            if (show) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            } else {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        }

        // FAQ Accordion Logic
        function toggleFaq(button) {
            const item = button.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.faq-item').forEach(el => {
                el.classList.remove('active');
            });

            // If it wasn't active before, open it
            if (!isActive) {
                item.classList.add('active');
            }
        }

        // Initialize Lucide Icons
        if (window.lucide) {
            lucide.createIcons();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<nav className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-end">
<a className="text-xl font-semibold tracking-tight flex items-center gap-2" href="#">
</a>
<div className="hidden md:flex gap-6 text-sm font-medium text-neutral-400 items-center">
<a className="hover:text-white transition-colors" href="https://www.lyraun.com/digitalart">
  Digital Art
</a>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="https://www.lyraun.com/concepts">
  Proposals
</a>
<a className="hover:text-white transition-colors" href="https://www.lyraun.com/discover">
  Discover
</a>
<a className="hover:text-white transition-colors" href="https://www.lyraun.com/marketing">
  Marketing
</a>
</div>
</div>
<div className="flex gap-4 items-center">
<button className="hover:bg-neutral-200 transition-all flex text-sm font-medium text-black bg-white rounded-lg pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_0_15px_rgba(255,255,255,0.1)] gap-x-2 gap-y-2 items-center" onclick="toggleModal(true)">Contact Me</button>
</div>
</div>
</nav>

<main className="overflow-hidden pt-16 pb-24 relative">

<div className="-translate-x-1/2 blur-[120px] -z-10 pointer-events-none bg-[#3b82f6] opacity-10 w-[1000px] h-[500px] rounded-full absolute top-0 left-1/2">
</div>
<div className="z-10 text-center max-w-5xl mr-auto ml-auto pr-6 pb-0 pl-6 relative">
<div className="inline-flex gap-2 hover:border-[#3b82f6]/30 transition-colors cursor-default bg-neutral-900/50 border-white/10 border rounded-full mb-8 pt-1 pr-4 pb-1 pl-1 shadow-sm backdrop-blur-sm items-center">
<span className="text-[10px] flex items-center gap-1 font-semibold text-white bg-[#1d4ed8] rounded-full pt-0.5 pr-2 pb-0.5 pl-2 shadow-sm">Graphic Designer</span>
<span className="text-sm font-medium text-neutral-300">Arturo J. Galaviz III</span>
</div>
<h1 className="leading-[1.1] md:text-5xl text-5xl font-semibold text-white tracking-tight max-w-5xl mr-auto mb-6 ml-auto">
      Hi, welcome to my portfoilio <br className="hidden md:block"/>
<span className="font-normal text-[#3b82f6] font-serif-italic drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">My goal is to inspire</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-normal text-neutral-400 max-w-none mr-auto mb-10 ml-auto">I’m AJ
      Galaviz, a graphic designer driven by pure passion and an obsessive curiosity for how ideas take shape visually.
      Everything I know has been learned through hands-on experience through experimentation, long nights, failed
      attempts, refinement, and an unwillingness to settle for “good enough.” Design, for me, was never about checking a
      box or following a prescribed path. It was about the pull to create and the need to understand how visuals can
      communicate something deeper than words alone.</p>
<div className="z-10 animate-slide-up w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative top-10" style={{animationDelay: '0.2s'}}>
<div className="text-center mb-8">
<p className="uppercase text-xs font-semibold text-neutral-500 tracking-[0.2em]">Creative Partnerships &amp;
          Inspired Collaborations</p>
</div>

<div className="relative overflow-hidden w-full" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>

<div className="flex items-center gap-16 animate-ticker w-max">

<div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">
<span className="hover:text-white transition-colors duration-300 cursor-default text-2xl font-bold text-neutral-600 font-roboto">Univ. Michigan</span>
<span className="hover:text-white transition-colors duration-300 cursor-default text-2xl italic text-neutral-600 font-instrument-serif">THE WATERMARK GROUP</span>
<span className="hover:text-white transition-colors duration-300 cursor-default uppercase text-xl font-medium text-neutral-600 tracking-tight font-space-grotesk">Southwest Research Institute </span>
<span className="hover:text-white transition-colors duration-300 cursor-default text-2xl font-semibold italic text-neutral-600 font-playfair">FedEx</span>
<span className="hover:text-white transition-colors duration-300 cursor-default text-2xl font-bold text-neutral-600 tracking-tighter font-dm-sans">NASA</span>
<span className="hover:text-white transition-colors duration-300 cursor-default text-2xl font-extrabold text-neutral-600 font-manrope">HEB </span>
<span className="hover:text-white transition-colors duration-300 cursor-default text-2xl font-black italic text-neutral-600 font-roboto">UTSA</span>
</div>

<div className="flex items-center gap-16 shrink-0">
<span className="hover:text-white transition-colors duration-300 cursor-default text-2xl font-bold italic text-neutral-600 font-bricolage">APL</span>
<span className="hover:text-white transition-colors duration-300 cursor-default text-2xl italic text-neutral-600 font-instrument-serif">IMAGE 360</span>
<span className="hover:text-white transition-colors duration-300 cursor-default uppercase text-xl font-medium text-neutral-600 tracking-tight font-space-grotesk">Corporate Cup</span>
<span className="hover:text-white transition-colors duration-300 cursor-default text-2xl font-semibold italic text-neutral-600 font-playfair">LYRAUN</span>
<span className="hover:text-white transition-colors duration-300 cursor-default text-2xl font-bold text-neutral-600 tracking-tighter font-dm-sans">HEB</span>
<span className="text-2xl font-manrope font-extrabold text-neutral-600 hover:text-white transition-colors duration-300 cursor-default">BOLT</span>
<span className="text-2xl font-merriweather font-black italic text-neutral-600 hover:text-white transition-colors duration-300 cursor-default">Aura</span>
</div>

<div className="flex items-center gap-16 shrink-0">
<span className="text-2xl font-bricolage font-bold text-neutral-600 hover:text-white transition-colors duration-300 cursor-default">Nexus</span>
<span className="text-2xl font-instrument-serif italic text-neutral-600 hover:text-white transition-colors duration-300 cursor-default">Vantage</span>
<span className="text-xl font-space-grotesk font-medium text-neutral-600 hover:text-white transition-colors duration-300 cursor-default tracking-tight uppercase">Echo<span className="text-[#3b82f6]">.ai</span></span>
<span className="text-2xl font-playfair font-semibold italic text-neutral-600 hover:text-white transition-colors duration-300 cursor-default">Helix</span>
<span className="text-2xl font-dm-sans font-bold tracking-tighter text-neutral-600 hover:text-white transition-colors duration-300 cursor-default">Stratis</span>
<span className="text-2xl font-manrope font-extrabold text-neutral-600 hover:text-white transition-colors duration-300 cursor-default">BOLT</span>
<span className="text-2xl font-merriweather font-black italic text-neutral-600 hover:text-white transition-colors duration-300 cursor-default">Aura</span>
</div>
</div>
</div>
<style>
        @keyframes ticker-slide {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-ticker {
          animation: ticker-slide 40s linear infinite;
        }

        .animate-ticker:hover {
          animation-play-state: paused;
        }
      </style>
</div>

<div className="max-w-5xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-b from-[#3b82f6]/20 to-transparent rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity">
</div>
</div>
</div>
</main>

<section className="border-y bg-[#0a0a0a] border-white/5">
<div className="max-w-7xl mr-auto ml-auto">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
<div className="py-12 px-6 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
<div className="md:text-5xl group-hover:text-[#3b82f6] transition-colors text-4xl font-semibold text-white tracking-tight mb-2">Adobe Suite</div>
<div className="uppercase flex gap-2 text-sm font-medium text-neutral-500 tracking-wide gap-x-2 gap-y-2 items-center">PhotoShop / Ai / inDesign / After Effects</div>
</div>
<div className="flex flex-col group hover:bg-white/[0.02] transition-colors text-center pt-12 pr-6 pb-12 pl-6 items-center justify-center">
<div className="md:text-5xl group-hover:text-[#50C878] transition-colors text-4xl font-semibold text-white tracking-tight mb-2">
  CorelDraw</div>
<div className="uppercase flex gap-2 text-sm font-medium text-neutral-500 tracking-wide gap-x-2 gap-y-2 items-center">Preferred  Vector Program</div>
</div>
<div className="flex flex-col group hover:bg-white/[0.02] transition-colors text-center pt-12 pr-6 pb-12 pl-6 items-center justify-center">
<div className="md:text-5xl group-hover:text-[#ED5F5F] transition-colors text-4xl font-semibold text-white tracking-tight mb-2">
  Web Design</div>
<div className="uppercase flex text-sm font-medium text-neutral-500 tracking-wide gap-x-2 gap-y-2 items-center">Animation
    / 3D / UI / Marketing</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] border-white/5 border-b pt-32 pb-32 relative">
<div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center mb-20">
<h2 className="reveal md:text-6xl text-5xl leading-[1.1] font-semibold text-white tracking-tight transition-all duration-700 opacity-100 translate-y-0">
  sooo...
  <span className="font-normal font-serif italic">What do I do?</span>
</h2>
</div>

<div className="flex flex-wrap gap-6 mb-20 justify-center">

<div className="md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:bg-neutral-900 transition-colors duration-300 group hover:border-indigo-500/30 bg-neutral-900/50 w-full border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">My days consists of translating complex ideas
          into clear, engaging visuals that communicate purpose, emotion, and intent without over-explaining.</p>
</div>

<div className="md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:bg-neutral-900 transition-colors duration-300 group hover:border-zinc-500/30 bg-neutral-900/50 w-full border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="flex group-hover:scale-110 transition-transform duration-300 text-zinc-400 bg-zinc-700/10 w-12 h-12 border-zinc-700/20 border rounded-xl mb-6 items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-badge-check lucide-ghost w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="badge-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(161, 161, 170)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">Design logos, typography, and color that stay
          consistent, recognizable, and adaptable across platforms.</p>
</div>

<div className="md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:bg-neutral-900 transition-colors duration-300 group hover:border-red-900/30 bg-neutral-900/50 w-full border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="flex group-hover:scale-110 transition-transform duration-300 text-red-500 bg-red-500/10 w-12 h-12 border-red-500/20 border rounded-xl mb-6 items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">I help shape ideas early exploring direction,
          mood, and structure so the final design feels thoughtful, not forced.</p>
</div>

<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900 transition-colors duration-300 group hover:border-orange-900/30">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="lucide lucide-thumbs-up lucide-thumbs-down w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="thumbs-up" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(249, 115, 22)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path><path d="M7 10v12"></path></svg>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">I organize information through layout,
          hierarchy, and flow, making content easy to understand and visually compelling.</p>
</div>

<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900 transition-colors duration-300 group hover:border-yellow-900/30">
<div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">I work closely with clients to refine their
          vision and deliver polished, production-ready designs with intention.</p>
</div>
</div>

<div className="flex flex-col items-center text-center">
<button className="relative group" onclick="toggleModal(true)">
<div className="absolute -inset-1 bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
<a className="" href="https://www.lyraun.com/discover">
<div className="hover:from-[#2563eb] hover:to-[#3b82f6] flex gap-3 transition-all text-xl font-semibold text-white bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] border-white/10 border rounded-xl pt-5 pr-12 pb-5 pl-12 relative shadow-2xl gap-x-3 gap-y-3 items-center">
    Featured Work
  </div>
</a>
</button>
<div className="flex flex-col md:flex-row gap-3 text-sm text-neutral-400 mt-8 gap-x-3 gap-y-3 items-center">
<div className="flex items-center gap-2">
</div>
<span className="">*My work spans multiple design disciplines, each shaped by purpose and intent. Explore the tabs above to see how each area comes to life.</span>
</div>
<div className="mt-6 inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 border border-white/10 backdrop-blur-sm">
<div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
<span className="text-xs font-medium text-neutral-300">Updated January 2026</span>
</div>
</div>
</div>
</section>



<section className="overflow-hidden flex flex-col text-white bg-[#050505] w-full border-white/5 border-b pt-20 pb-40 relative items-center">
<div className="mask-radial pointer-events-none absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6] rounded-full blur-[150px] opacity-[0.05] pointer-events-none"></div>
<div className="z-10 text-center w-full max-w-4xl mb-2 pr-6 pl-6 relative">
<h2 className="reveal md:text-6xl text-4xl font-semibold tracking-tight mb-6 pb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 transition-all duration-700 opacity-100 translate-y-0">
    Creative Process
  </h2>
<p className="reveal leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mx-auto transition-all duration-700 delay-150 opacity-100 translate-y-0">
    Inspiration and problem-solving come from a mix of platforms and tools
  </p>
</div>
<div className="flex flex-col w-full max-w-[1400px] relative items-center">

<div className="relative w-[500px] h-[500px] flex items-center justify-center z-20 scale-75 md:scale-100 origin-bottom">
<div className="absolute inset-0 animate-spin-slow">
<svg className="absolute inset-0 w-full h-full text-white/5" viewbox="0 0 600 600">
<g className="stroke-current stroke-[1]">
<line className="animate-flow-in" x1="300" x2="300" y1="50" y2="220"></line>
<line className="animate-flow-in delay-1" x1="550" x2="380" y1="300" y2="300"></line>
<line className="animate-flow-in delay-2" x1="300" x2="300" y1="550" y2="380"></line>
<line className="animate-flow-in delay-3" x1="50" x2="220" y1="300" y2="300"></line>
<line className="animate-flow-in delay-1" x1="476" x2="356" y1="123" y2="243"></line>
<line className="animate-flow-in delay-2" x1="476" x2="356" y1="476" y2="356"></line>
<line className="animate-flow-in delay-3" x1="123" x2="243" y1="476" y2="356"></line>
<line className="animate-flow-in" x1="123" x2="243" y1="123" y2="243"></line>
</g>
</svg>

<div className="absolute top-[50px] left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="flex z-20 bg-center bg-neutral-900 w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/41740e06-4acf-426b-ae34-8ab70f73020c_320w.jpg)] bg-cover border-white/10 border rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] items-center justify-center"></div>
</div>
<div className="absolute top-[123px] right-[123px] translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="flex bg-center bg-neutral-900 w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f910c8c5-28c8-4c1d-a302-76d319187115_320w.png)] bg-cover border-white/10 border rounded-xl shadow-lg items-center justify-center"></div>
</div>
<div className="absolute top-1/2 right-[50px] translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="flex bg-neutral-900 w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/586107f6-37c2-4a42-8b97-0fc30fe826ed_320w.png)] bg-cover bg-center border-white/10 border rounded-xl shadow-lg items-center justify-center"></div>
</div>
<div className="absolute bottom-[123px] right-[123px] translate-x-1/2 translate-y-1/2 animate-spin-slow-reverse">
<div className="flex bg-center bg-neutral-900 w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/192aac9e-bae2-44ea-a68e-964e6063ceab_320w.png)] bg-cover border-white/10 border rounded-xl shadow-lg items-center justify-center"></div>
</div>
<div className="absolute bottom-[50px] left-1/2 -translate-x-1/2 translate-y-1/2 animate-spin-slow-reverse">
<div className="flex bg-neutral-900 w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d1e9816-733e-425a-a746-ad90e56d482d_320w.png)] bg-cover bg-center border-white/10 border rounded-xl shadow-lg items-center justify-center"></div>
</div>
<div className="absolute bottom-[123px] left-[123px] -translate-x-1/2 translate-y-1/2 animate-spin-slow-reverse">
<div className="flex bg-center bg-neutral-900 w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b573fd37-d3dd-4e18-bc4e-3501d000f48a_320w.webp)] bg-cover border-white/10 border rounded-xl shadow-lg items-center justify-center"></div>
</div>
<div className="absolute top-1/2 left-[50px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="flex bg-neutral-900 w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5018fedd-9ea6-425c-9073-ce5717a6155b_320w.png)] bg-cover bg-center border-white/10 border rounded-xl shadow-lg items-center justify-center"></div>
</div>
<div className="absolute top-[123px] left-[123px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="flex bg-neutral-900 w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fdb11206-ed8d-4b98-94b8-0a843ee74b3b_320w.png)] bg-cover border-white/10 border rounded-xl shadow-lg items-center justify-center"></div>
</div>
</div>
<div className="absolute z-30 flex items-center justify-center">
<div className="w-28 h-28 bg-[#0a0a0a] rounded-3xl border border-[#3b82f6]/30 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.2)] relative overflow-hidden ring-1 ring-white/10">
<div className="absolute inset-0 bg-[#3b82f6]/10 animate-pulse"></div>
<svg aria-hidden="true" className="lucide lucide-lightbulb lucide-layers z-10 relative w-[48px] h-[48px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="lightbulb" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '48px', height: '48px'}} viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
</div>
</div>

<div className="relative w-full max-w-4xl h-32 -mt-20 z-10 px-4 hidden md:block">
<div className="absolute left-1/2 -translate-x-px top-0 w-[1px] h-[40%] bg-white/5 overflow-hidden">
<div className="w-full h-full bg-gradient-to-b from-transparent via-[#3b82f6] to-transparent absolute animate-pulse-main"></div>
</div>
<div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[50%] h-[1px] bg-white/5 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent animate-pulse-expand"></div>
</div>
<div className="absolute top-[40%] left-[25%] -translate-x-px w-[1px] h-[60%] bg-white/5 overflow-hidden">
<div className="w-full h-full bg-gradient-to-b from-transparent via-[#3b82f6] to-transparent absolute animate-pulse-feeder"></div>
</div>
<div className="absolute top-[40%] left-[75%] -translate-x-px w-[1px] h-[60%] bg-white/5 overflow-hidden">
<div className="w-full h-full bg-gradient-to-b from-transparent via-[#3b82f6] to-transparent absolute animate-pulse-feeder"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-20 md:mt-0 w-full max-w-4xl mt-4 pr-4 pl-4 relative gap-x-6 gap-y-6">
<div className="group relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all hover:border-[#3b82f6]/30 animate-float-card" style={{animationDelay: '0s'}}>
<div className="p-5 flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="flex text-[10px] font-bold text-black bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] w-7 h-7 rounded-full items-center justify-center">AJ</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-neutral-200">Photo Shop Project - xSTLR_01</span>
<span className="text-[10px] text-neutral-500">Last Updated: 12 hours ago</span>
</div>
<div className="ml-auto text-neutral-600"><svg aria-hidden="true" className="lucide lucide-reply w-3.5 h-3.5" data-lucide="reply" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 18v-2a4 4 0 0 0-4-4H4"></path><path d="m9 17-5-5 5-5"></path></svg></div>
</div>
<div className="aspect-video overflow-hidden flex bg-black/50 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a1b5401a-a838-4e32-8316-e1457582e7a5_800w.jpg)] bg-cover bg-center border-white/5 border rounded-lg mb-3 relative items-center justify-center">
<span className="text-xs text-neutral-500"></span>
</div>
</div>
</div>

<div className="group relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all hover:border-[#3b82f6]/30 animate-float-card" style={{animationDelay: '0.5s'}}>
<div className="p-5 flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="flex text-[10px] font-bold text-white bg-gradient-to-br from-purple-400 to-purple-600 w-7 h-7 rounded-full items-center justify-center">AJ</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-neutral-200">Website - Buy &amp; Sell Merch Shop (LYRAUN)</span>
<span className="text-[10px] text-neutral-500">Last Updated: 2025</span>
</div>
<div className="ml-auto text-neutral-600"><svg aria-hidden="true" className="lucide lucide-reply w-3.5 h-3.5" data-lucide="reply" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 18v-2a4 4 0 0 0-4-4H4"></path><path d="m9 17-5-5 5-5"></path></svg></div>
</div>
<div className="aspect-video overflow-hidden flex bg-black/50 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4ba8b85-a8cd-4e3b-b207-38181cc99a95_800w.jpg)] bg-cover bg-center border-white/5 border rounded-lg mb-3 relative items-center justify-center">
<span className="text-xs text-neutral-500"></span>
</div>
<div className="mt-auto pt-2 flex items-center gap-1.5 border-t border-white/5">
</div>
</div>
</div>

<div className="group relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all hover:border-[#3b82f6]/30 animate-float-card" style={{animationDelay: '1s'}}>
<div className="p-5 flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="flex text-[10px] font-bold text-white bg-gradient-to-br from-orange-400 to-red-600 w-7 h-7 rounded-full items-center justify-center">AJ</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-neutral-200">ProCreate Project: Mysterious Beings</span>
<span className="text-[10px] text-neutral-500">Finalized: Dec. 07 2025</span>
</div>
<div className="ml-auto text-neutral-600"><svg aria-hidden="true" className="lucide lucide-reply w-3.5 h-3.5" data-lucide="reply" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 18v-2a4 4 0 0 0-4-4H4"></path><path d="m9 17-5-5 5-5"></path></svg></div>
</div>
<div className="aspect-video overflow-hidden flex bg-black/50 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc44da1f-68f1-45e8-9248-1fba39287694_800w.jpg)] bg-cover bg-center border-white/5 border rounded-lg mb-3 relative items-center justify-center">
<span className="text-xs text-neutral-500"></span>
</div>
</div>
</div>

<div className="group relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all hover:border-[#3b82f6]/30 animate-float-card" style={{animationDelay: '1.5s'}}>
<div className="p-5 flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="flex text-[10px] font-bold text-white bg-gradient-to-br from-teal-400 to-teal-600 w-7 h-7 rounded-full items-center justify-center">AJ</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-neutral-200">CorelDraw Project - MDMS (System Interface)</span>
<span className="text-[10px] text-neutral-500">Last Updated: Oct. 10 2025</span>
</div>
<div className="ml-auto text-neutral-600"><svg aria-hidden="true" className="lucide lucide-reply w-3.5 h-3.5" data-lucide="reply" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 18v-2a4 4 0 0 0-4-4H4"></path><path d="m9 17-5-5 5-5"></path></svg></div>
</div>
<div className="aspect-video overflow-hidden flex bg-black/50 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f63c8644-8a34-405d-84a9-2650d486681e_800w.jpg)] bg-cover bg-center border-white/5 border rounded-lg mb-3 relative items-center justify-center">
<span className="text-xs text-neutral-500"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] pt-24 pb-24 relative" id="playbook">
<div className="absolute inset-0 bg-gradient-to-b from-[#1d4ed8]/20 via-[#050505] to-[#1d4ed8]/20 opacity-20 pointer-events-none">
</div>
<div className="max-w-5xl z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center mb-24">
<div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
<span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse"></span>
<span className="uppercase text-xs font-medium text-white tracking-wide">VISION</span>
</div>
<h2 className="reveal md:text-6xl text-4xl leading-[1.1] font-semibold text-white tracking-tight drop-shadow-sm transition-all duration-700 opacity-100 translate-y-0">
        How Can I Help?
      </h2>
</div>

<div className="relative w-full">

<div className="sticky top-24 z-10 mb-12">
<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden min-h-[500px] border border-white/5">
<div className="md:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<div className="bg-[#3b82f6]/10 text-[#3b82f6] p-2 rounded-lg border border-[#3b82f6]/20"><svg aria-hidden="true" className="lucide lucide-search w-6 h-6" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg></div>
<span className="uppercase text-sm font-semibold text-[#3b82f6] tracking-wide">Step 1</span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Understanding First</h3>
<p className="leading-relaxed text-neutral-400 mb-8">Before starting a project I like to take time to understand
              client goals, constraints, and vision before design begins. Clarity at the start leads to stronger
              results.</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#2563eb]/20 p-1 rounded-full"><svg aria-hidden="true" className="lucide lucide-check w-3 h-3 text-[#3b82f6]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm font-medium text-neutral-300">Clarify goals, constraints, and expectations</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#2563eb]/20 p-1 rounded-full"><svg aria-hidden="true" className="lucide lucide-check w-3 h-3 text-[#3b82f6]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm font-medium text-neutral-300">Identify what success should look like</span>
</div>
</div>
</div>
<div className="md:w-1/2 overflow-hidden flex flex-col bg-center bg-black/40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1627df90-8f5b-4fc5-962e-fedbe1654e30_1600w.jpg)] bg-cover border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative justify-center">
</div>
</div>
</div>

<div className="sticky top-28 z-20 mb-12">
<div className="md:p-12 flex flex-col md:flex-row gap-12 overflow-hidden min-h-[500px] bg-neutral-900 border-white/5 border ring-white/5 ring-1 rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 relative shadow-2xl gap-x-12 gap-y-12">
<div className="md:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<div className="bg-purple-900/30 text-purple-400 p-2 rounded-lg border border-purple-500/20"><svg aria-hidden="true" className="lucide lucide-network w-6 h-6" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg></div>
<span className="uppercase text-sm font-semibold text-purple-400 tracking-wide">Step 2</span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Strategic Direction</h3>
<p className="leading-relaxed text-neutral-400 mb-8">I help define a clear visual direction so decisions feel
              intentional, not reactive.
              This keeps the work focused and aligned.</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#2563eb]/20 p-1 rounded-full"><svg aria-hidden="true" className="lucide lucide-check w-3 h-3 text-[#3b82f6]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm font-medium text-neutral-300">Establish visual direction and tone</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#2563eb]/20 p-1 rounded-full"><svg aria-hidden="true" className="lucide lucide-check w-3 h-3 text-[#3b82f6]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm font-medium text-neutral-300">Align design decisions with the bigger picture</span>
</div>
</div>
</div>
<div className="md:w-1/2 overflow-hidden flex flex-col bg-center font-mono bg-black bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6be3d26a-9c4d-4d72-9846-be700d9fdf2e_1600w.jpg)] bg-cover border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative justify-center">
</div>
</div>
</div>

<div className="sticky top-32 z-30 mb-12">
<div className="md:p-12 flex flex-col md:flex-row gap-12 overflow-hidden min-h-[500px] bg-neutral-900 border-white/5 border ring-white/5 ring-1 rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 relative shadow-2xl gap-x-12 gap-y-12">
<div className="md:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<div className="bg-blue-900/30 text-blue-400 p-2 rounded-lg border border-blue-500/20"><svg aria-hidden="true" className="lucide lucide-expand lucide-send w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="expand" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(96, 165, 250)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 15 6 6"></path><path d="m15 9 6-6"></path><path d="M21 16v5h-5"></path><path d="M21 8V3h-5"></path><path d="M3 16v5h5"></path><path d="m3 21 6-6"></path><path d="M3 8V3h5"></path><path d="M9 9 3 3"></path></svg></div>
<span className="uppercase text-sm font-semibold text-blue-400 tracking-wide">Step 3</span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Collaborative Refinement</h3>
<p className="leading-relaxed text-neutral-400 mb-8">Feedback is part of the process, not an afterthought.
              We refine together until the vision feels right.</p>
<div className="space-y-4">
<div className="flex gap-3 gap-x-3 gap-y-3 items-start">
<div className="mt-1 bg-[#2563eb]/20 p-1 rounded-full"><svg aria-hidden="true" className="lucide lucide-check w-3 h-3 text-[#3b82f6]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm font-medium text-neutral-300">Review, adjust, and refine through feedback</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#2563eb]/20 p-1 rounded-full"><svg aria-hidden="true" className="lucide lucide-check w-3 h-3 text-[#3b82f6]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm font-medium text-neutral-300">Strengthen the work without losing the vision</span>
</div>
</div>
</div>
<div className="md:w-1/2 overflow-hidden flex flex-col bg-center bg-black/40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/74132569-e7ca-4f54-b265-ee46862e394d_1600w.jpg)] bg-cover border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative justify-center">
</div>
</div>
</div>

<div className="sticky top-36 z-40 mb-12">
<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden min-h-[500px] border border-white/5">
<div className="md:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<div className="bg-teal-900/30 text-teal-400 p-2 rounded-lg border border-teal-500/20"><svg aria-hidden="true" className="lucide lucide-calendar-check w-6 h-6" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg></div>
<span className="uppercase text-sm font-semibold text-teal-400 tracking-wide">Step 4</span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Finished With Intent</h3>
<p className="leading-relaxed text-neutral-400 mb-8">The final result is polished, usable, and built to last.
              Design that serves its purpose beyond delivery.</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#2563eb]/20 p-1 rounded-full"><svg aria-hidden="true" className="lucide lucide-check w-3 h-3 text-[#3b82f6]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm font-medium text-neutral-300">Deliver polished, ready-to-use design</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#2563eb]/20 p-1 rounded-full"><svg aria-hidden="true" className="lucide lucide-check w-3 h-3 text-[#3b82f6]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm font-medium text-neutral-300">Ensure the final result serves its purpose</span>
</div>
</div>
</div>
<div className="md:w-1/2 overflow-hidden flex flex-col bg-black/40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9df310ce-a18e-4cd0-ba39-ee83941ce321_1600w.png)] bg-cover bg-center border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">
</div>
</div>
</div>
</div>
</div>
</section>


<section className="py-32 relative overflow-hidden flex items-center justify-center">
<div className="bg-[#3b82f6]/5 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6] rounded-full blur-[200px] opacity-20 pointer-events-none"></div>
<div className="relative z-10 text-center max-w-2xl px-6">
<h2 className="text-5xl font-bold text-white tracking-tight mb-6">Let's bring your Vision to Life!</h2>
<p className="text-xl text-neutral-400 mb-10">Contact me Today!</p>
<a className="" href="mailto:Galavizaj@icloud.com">
<button className="btn-glow hover:scale-105 transition-transform text-lg font-semibold text-white bg-[#3b82f6] rounded-full pt-4 pr-10 pb-4 pl-10 shadow-lg">galavizaj@icloud.com</button>
</a>
<p className="text-sm text-neutral-500 mt-6">For Freelance: Every project is unique. Final pricing is determined by the scope, complexity, timeline, and creative direction required. Before any work begins, a clear estimate is provided so there are no surprises.</p>
</div>
</section>

<footer className="bg-black border-white/10 border-t pt-16 pb-8">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="block text-xl font-bold text-white tracking-tight mb-6" href="#">Arturo J Galaviz III</a>
<p className="leading-relaxed text-sm text-neutral-500">Design isn’t just what I do—it’s how I think, how I solve
          problems, and how I help ideas move forward.</p>
</div>
<div className="">
<h4 className="font-medium text-white mb-4">Education</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className=""><a className="hover:text-[#3b82f6] transition-colors" href="#">High School Diploma</a></li>
<li className=""><a className="hover:text-[#3b82f6] transition-colors" href="#">Currently Enrolled with Penn
              Foster</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-white mb-4">Company </h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className=""><a className="hover:text-[#3b82f6] transition-colors" href="#">Southwest Research Institute
              (current)</a></li>
<li className=""><a className="hover:text-[#3b82f6] transition-colors" href="#">HEB 2019 - 2022</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-white mb-4">Web Design</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className=""><a className="hover:text-[#3b82f6] transition-colors" href="#">Aura.Build / Square Space</a></li>
<li className=""><a className="hover:text-[#3b82f6] transition-colors" href="#">Spline.Design</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">© 2026 </p>
<div className="flex gap-6">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-badge-check lucide-linkedin w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="badge-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg></a>
</div>
</div>
</div>
</footer>


<div className="fixed z-[100] hidden top-0 right-0 bottom-0 left-0" id="booking-modal">

<div className="bg-black/80 absolute inset-0 backdrop-blur-sm" onclick="toggleModal(false)">
</div>

<div className="-translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] w-full max-w-md border border-white/10 rounded-2xl p-8 absolute top-1/2 left-1/2 shadow-2xl">

<button className="absolute top-4 right-4 text-neutral-500 hover:text-white transition" onclick="toggleModal(false)">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>

<div className="text-center space-y-6">
<div>
<h3 className="text-2xl font-semibold text-white mb-2">
            Contact Me
          </h3>
<p className="text-sm text-neutral-400">
            Direct contact — no forms, no friction.
          </p>
</div>
<div className="space-y-3 text-sm">
<p className="text-white">
<span className="text-neutral-400">Phone:</span>
<a className="ml-1 hover:text-[#3b82f6] transition-colors" href="tel:12103895779">
              210.389.5779
            </a>
</p>
<p className="text-white">
<span className="text-neutral-400">Email:</span>
<a className="ml-1 hover:text-[#3b82f6] transition-colors" href="mailto:galavizaj@icloud.com">
              galavizaj@icloud.com
            </a>
</p>
</div>
<button className="mt-4 w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium py-3 rounded-lg transition-colors" onclick="toggleModal(false)">
          Close
        </button>
</div>
</div>
</div>



    </>
  );
}
