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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Newsreader', 'serif'],
},
colors: {
neutral: {
925: '#0a0a0a',
950: '#050505',
}
},
letterSpacing: {
tighter: '-0.04em',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'beam': 'beam 8s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
beam: {
'0%': { top: '-200px', opacity: '0' },
'10%': { opacity: '1' },
'90%': { opacity: '1' },
'100%': { top: '100%', opacity: '0' },
}
}
}
}
}



/*
Sequence animation on scroll when visible.
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


      const body = document.getElementById('main-body');
      const spotlightGroups = document.querySelectorAll('.spotlight-group');

      document.addEventListener('mousemove', (e) => {
          const x = e.clientX;
          const y = e.clientY;

          body.style.setProperty('--mouse-x', `${x}px`);
          body.style.setProperty('--mouse-y', `${y}px`);

          spotlightGroups.forEach(group => {
              const rect = group.getBoundingClientRect();
              const relX = x - rect.left;
              const relY = y - rect.top;

              group.style.setProperty('--mouse-x-rel', `${relX}px`);
              group.style.setProperty('--mouse-y-rel', `${relY}px`);
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="UtvhDctN8AjL6tvf1yKd"></div>

</div>
</div>

<div className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300" style={{background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34,211,238,0.04), transparent 40%)'}}></div>

<div className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 z-50 opacity-60"></div>

<div className="fixed inset-0 pointer-events-none z-0 grid grid-cols-6 md:grid-cols-12 max-w-7xl mx-auto border-x border-white/5 h-full">

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.1s'}}>
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-beam" style={{animationDuration: '7s', animationDelay: '1.5s'}}></div>
</div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.3s'}}></div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.15s'}}>
<div className="absolute -top-52 -right-[1px] w-[1px] h-52 bg-gradient-to-b from-transparent via-sky-500 to-transparent animate-beam" style={{animationDuration: '11s', animationDelay: '4s'}}></div>
</div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.4s'}}></div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.25s'}}>
<div className="absolute -top-32 -right-[1px] w-[1px] h-32 bg-gradient-to-b from-transparent via-cyan-300 to-transparent animate-beam" style={{animationDuration: '6s', animationDelay: '0.5s'}}></div>
</div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.1s'}}></div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.35s'}}>
<div className="absolute -top-64 -right-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-beam" style={{animationDuration: '9s', animationDelay: '2.5s'}}></div>
</div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.2s'}}></div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.45s'}}>
<div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-beam" style={{animationDuration: '8s', animationDelay: '5s'}}></div>
</div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.15s'}}></div>

<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden" style={{animationDelay: '0.3s'}}></div>
</div>

<nav className="sticky top-0 z-40 w-full border-b border-white/5 bg-black/60 backdrop-blur-md shrink-0">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-cyan-400 text-2xl" icon="solar:plain-2-linear"></iconify-icon>
            iCrowdNewswire
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#why-choose-us">
            Why Choose Us
          </a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#process-and-plans">
            Workflow &amp; Products
          </a>
<a className="text-sm font-normal text-gray-400 hover:text-white transition-colors" href="#booking">
            Book a Demo
          </a>
</div>
<div className="flex items-center gap-6">
<a className="relative rounded-full bg-white/5 border border-white/10 px-5 py-2 text-xs font-semibold tracking-wide text-white hover:bg-white/10 transition-all duration-300 overflow-hidden group" href="#booking">
<span className="relative z-10 uppercase">Request Quote</span>
</a>
</div>
</div>
</nav>

<main className="relative pt-12">

<section className="flex flex-col items-center text-center w-full max-w-4xl mx-auto z-10 mt-16 mb-12 px-6 relative [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate" id="hero">
<div className="text-cyan-500 font-mono text-xs mb-4 uppercase tracking-widest">
          iCrowdNewswire — Press Release Distribution
        </div>
<h1 className="text-4xl font-serif text-white tracking-tight leading-tight mb-6 font-semibold md:text-5xl lg:text-7xl">Your Press Release Deserves Readers. Not Just a Reach Number You Can't Prove.</h1>
<p className="leading-relaxed md:text-xl text-base font-light text-gray-400 max-w-screen-lg mr-auto mb-8 ml-auto">iCrowdNewswire puts paid media behind every release so it reaches real, targeted audiences. Distributed in 9 languages, across 26 countries, with numbers you can actually audit.</p>
<div className="w-full max-w-3xl aspect-video bg-[#1a1a1a] rounded-xl border border-white/10 shadow-2xl mb-8 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm font-mono">[ VSL Video Placeholder Hector's Founder Overview ]</div>
</div>
<a className="group/btn rounded-full relative inline-block" href="#booking">
<div className="absolute -inset-1 group-hover/btn:opacity-75 transition duration-500 bg-cyan-500/40 opacity-40 rounded-full blur"></div>
<div className="flex gap-3 active:translate-y-[2px] transition-all duration-150 text-cyan-950 bg-gradient-to-b from-cyan-200 via-cyan-300 to-cyan-500 h-14 rounded-full px-8 relative items-center justify-center shadow-lg">
<span className="text-lg font-semibold tracking-tight">
              Book a Demo
            </span>
<iconify-icon className="text-cyan-950 text-xl" icon="solar:calendar-date-linear"></iconify-icon>
</div>
</a>
</section>

<section className="flex flex-col w-full max-w-7xl mx-auto px-6 relative items-center mb-32" id="pain-points">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2 block">
            The Problem
          </span>
<h2 className="text-3xl md:text-4xl font-serif italic text-white tracking-tight">
            Why Traditional Wires Fail Your Message
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
<div className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between h-full">
<div className="absolute left-0 top-8 w-0.5 h-10 bg-gradient-to-b from-cyan-500 to-sky-600 rounded-r-full"></div>
<div className="">
<iconify-icon className="text-cyan-400 text-3xl mb-6" icon="solar:eye-closed-linear"></iconify-icon>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">
                "Potential reach" isn't proof anyone read it.
              </h3>
<p className="text-sm text-gray-400 leading-relaxed font-light">Traditional wires hand you a big number and no way to show a client that real people actually saw the release.</p>
</div>
</div>
<div className="group hover:bg-white/[0.04] transition-all duration-300 flex flex-col h-full border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="absolute left-0 top-8 w-0.5 h-10 bg-gradient-to-b from-cyan-500 to-sky-600 rounded-r-full"></div>
<div className="">
<iconify-icon className="text-cyan-400 text-3xl mb-6" icon="solar:bill-list-linear"></iconify-icon>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">
                Per-word fees and contracts punish you for communicating.
              </h3>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                Overage charges and annual lock-ins make every release a budget
                negotiation instead of a quick send.
              </p>
</div>
</div>
<div className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between h-full">
<div className="absolute left-0 top-8 w-0.5 h-10 bg-gradient-to-b from-cyan-500 to-sky-600 rounded-r-full"></div>
<div className="">
<iconify-icon className="text-cyan-400 text-3xl mb-6" icon="solar:globus-linear"></iconify-icon>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">
                One language, one market, one missed audience.
              </h3>
<p className="text-sm text-gray-400 leading-relaxed font-light">Half the world searches in languages other than English an English-only release leaves most of your audience unreached.</p>
</div>
</div>
</div>
</section>
<section className="flex flex-col w-full max-w-7xl mx-auto px-6 relative mb-32" id="why-choose-us">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
<div className="lg:col-span-7 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:star-circle-linear"></iconify-icon>
<span className="text-xs font-mono tracking-widest uppercase text-cyan-400">
                The Mechanism
              </span>
</div>
<h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight mb-6">
              Active Marketing,
              <span className="italic text-gray-500 font-light">
                Not Passive Publishing
              </span>
</h2>
<div className="text-base text-gray-400 font-light leading-relaxed space-y-4 mb-8">
<p className="">iCrowdNewswire doesn't stop at putting your release on the wire it puts paid media advertising behind it on Google, Facebook, and social, so the release is actively marketed to the exact audience you choose.</p>
<p className="">
                You target by geography, industry, age, and interest, and every
                release goes out in 9 languages to reach audiences English-only
                distribution misses.
              </p>
<p className="">Because views are driven by paid campaigns, the audience is high-value and the figures are auditable not random clicks.</p>
<p className="">
                And it's self-service and pay-as-you-go: no membership fees, no
                word overages, no contract.
              </p>
</div>
</div>
<div className="lg:col-span-5 flex flex-col gap-8 bg-white/[0.01] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
<h3 className="text-sm font-mono uppercase tracking-wider text-gray-500">
              Built on the networks the industry trusts
            </h3>
<div className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs text-gray-400">
<div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded border border-white/5 font-semibold">
                GlobeNewswire
              </div>
<div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded border border-white/5 font-semibold">
                Nexis Newswire
              </div>
<div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded border border-white/5 font-semibold">
                MediaNet
              </div>
<div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded border border-white/5 font-semibold">
                PA Media
              </div>
<div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded border border-white/5 font-semibold">
                NewsVoir
              </div>
<div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded border border-white/5 font-semibold">
                MSIN / Media Connect
              </div>
</div>
<p className="text-xs text-gray-500 font-light">Published into <strong className="text-gray-300">
                Dow Jones Factiva, LexisNexis, Thomson Reuters
              </strong> and more and crawled by 50+ news aggregators.</p>
<div className="border-t border-white/5 pt-6 flex flex-wrap gap-4 items-center justify-between">
<span className="text-xs font-mono text-cyan-400">
                G2 Leader · Trustpilot
              </span>
<div className="h-6 w-px bg-white/10"></div>
<span className="text-[11px] text-gray-500 font-light">[placeholder Hector to supply client quote + name]</span>
</div>
</div>
</div>
</section>
<section className="flex flex-col w-full max-w-7xl mx-auto px-6 relative mb-32" id="process-and-plans">
<div className="mb-24">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2 block">
              Our Workflow
            </span>
<h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight">
              5 Steps to Verifiable Distribution
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
<div className="relative bg-[#0A0A0A]/60 border border-white/5 p-6 rounded-xl flex flex-col gap-3">
<span className="text-3xl font-serif italic text-cyan-500/50 font-bold">
                01
              </span>
<p className="text-sm text-gray-300 font-light leading-relaxed">Upload your release or hand it to our full-service team to format for you.</p>
</div>
<div className="relative bg-[#0A0A0A]/60 border border-white/5 p-6 rounded-xl flex flex-col gap-3">
<span className="text-3xl font-serif italic text-cyan-500/50 font-bold">
                02
              </span>
<p className="text-sm text-gray-300 font-light leading-relaxed">Choose your targets geography, industry, audience, and which of 9 languages.</p>
</div>
<div className="relative bg-[#0A0A0A]/60 border border-white/5 p-6 rounded-xl flex flex-col gap-3">
<span className="text-3xl font-serif italic text-cyan-500/50 font-bold">
                03
              </span>
<p className="text-sm text-gray-300 font-light leading-relaxed">
                We distribute across 3,700+ sites and put paid media behind it.
              </p>
</div>
<div className="relative bg-[#0A0A0A]/60 border border-white/5 p-6 rounded-xl flex flex-col gap-3">
<span className="text-3xl font-serif italic text-cyan-500/50 font-bold">
                04
              </span>
<p className="text-sm text-gray-300 font-light leading-relaxed">Your release runs unlimited campaigns Wall Street, Silicon Valley, London, all at once.</p>
</div>
<div className="relative bg-[#0A0A0A]/60 border border-white/5 p-6 rounded-xl flex flex-col gap-3">
<span className="text-3xl font-serif italic text-cyan-500/50 font-bold">
                05
              </span>
<p className="text-sm text-gray-300 font-light leading-relaxed">Get an auditable report placements, impressions, clicks, and keyword analytics.</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" id="products">
<div className="bg-[#0A0A0A] border border-cyan-500/30 rounded-2xl p-8 flex flex-col justify-between shadow-[0_-10px_40px_-10px_rgba(34,211,238,0.15)]">
<div className="">
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-cyan-400"></div>
<span className="text-lg font-serif text-white font-medium">
                  Paid Media Release℠
                </span>
</div>
<ul className="space-y-3 mb-8 text-sm text-gray-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
                  Wire distribution + paid Google &amp; Facebook ads
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
                  Pinpoint geographic &amp; demographic targeting
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
                  9-language distribution on every release
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
                  Voice/VDA reach + guaranteed Apple News inclusion
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-bold"></iconify-icon>
                  Auditable analytics &amp; placement reporting
                </li>
</ul>
</div>
<div className="border-t border-white/5 pt-6">
<div className="text-xs text-gray-500 font-mono uppercase mb-4">
                Pricing
              </div>
<div className="text-2xl font-serif text-white mb-2 font-medium">
                Pay-as-you-go, no contract
              </div>
<p className="text-xs text-gray-400 mb-6">
                Quoted customized on your strategy call
              </p>
</div>
</div>
<div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 flex flex-col justify-between">
<div className="">
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-gray-500"></div>
<span className="text-lg font-serif text-white font-medium">
                  Ad Boost (Industry-Exclusive)
                </span>
</div>
<ul className="space-y-3 mb-8 text-sm text-gray-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-gray-500" icon="solar:check-circle-bold"></iconify-icon>
                  Targets premium media &amp; hard-to-reach niche publications
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-gray-500" icon="solar:check-circle-bold"></iconify-icon>
                  Pushes your release onto key social platforms
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-gray-500" icon="solar:check-circle-bold"></iconify-icon>
                  Real-time delivery where your audience already is
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-gray-500" icon="solar:check-circle-bold"></iconify-icon>
                  Layers on top of standard distribution for extra reach
                </li>
</ul>
</div>
<div className="border-t border-white/5 pt-6">
<div className="text-xs text-gray-500 font-mono uppercase mb-4">
                Pricing
              </div>
<div className="text-2xl font-serif text-white mb-2 font-medium">
                Add-on premium service
              </div>
<p className="text-xs text-gray-400 mb-6">
                Quoted customized on your strategy call
              </p>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="hover:bg-white/5 transition-all inline-flex h-14 text-sm font-medium text-gray-200 bg-white/[0.03] rounded-full px-8 items-center justify-center group relative overflow-hidden" href="#booking" style={{-BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))', -BorderRadiusBefore: '9999px'}}>
<span className="text-base font-medium text-gray-300 tracking-tight group-hover:text-white transition-colors">
              See the Real Numbers Behind Your Next Release — Request a Quote
            </span>
<iconify-icon className="ml-2 text-gray-400 group-hover:text-white transition-colors group-hover:translate-x-0.5 duration-200" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>
<section className="w-full relative py-20 overflow-hidden border-t border-white/10 bg-black" id="metrics-about-faq">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 text-center">
<div className="border-r border-white/5 last:border-0">
<div className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white mb-2 tracking-tight">
                361,419+
              </div>
<div className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                Press releases distributed
              </div>
</div>
<div className="border-r border-white/5 last:border-0">
<div className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white mb-2 tracking-tight">
                9
              </div>
<div className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                Languages, every release
              </div>
</div>
<div className="border-r border-white/5 last:border-0">
<div className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white mb-2 tracking-tight">
                6,974
              </div>
<div className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                Registered communicators
              </div>
</div>
<div>
<div className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white mb-2 tracking-tight">
                50%
              </div>
<div className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                Of searches aren't English
              </div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 border-t border-white/5 pt-20">
<div className="lg:col-span-8 flex flex-col gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:user-circle-linear"></iconify-icon>
<span className="text-xs font-mono tracking-widest uppercase text-cyan-400">
                  Founder Story
                </span>
</div>
<h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight">
                Hector Botero,
                <span className="italic text-gray-500 font-light">
                  Founder &amp; CEO
                </span>
</h2>
<p className="text-base text-gray-400 font-light leading-relaxed">Hector Botero has spent more than two decades building, acquiring, and merging news and media-distribution companies across the Americas and Asia including leadership roles at Business Wire and Marketwire before founding iCrowdNewswire in 2014. He built it to fix what he saw the wires getting wrong: distribution that reports "reach" but never proves readership. iCrowdNewswire's answer was to put paid media behind every release and make the results auditable distribution measured by who actually saw it, not who theoretically could have.</p>
</div>
<div className="lg:col-span-4 bg-white/[0.02] border border-white/5 rounded-xl p-6 text-xs font-mono space-y-4">
<div className="text-gray-500 uppercase tracking-widest">
                Contact details
              </div>
<div>
<div className="text-gray-400">Phone</div>
<div className="text-white font-medium">+1-786-628-7980</div>
</div>
<div>
<div className="text-gray-400">Website</div>
<div className="text-white font-medium">
<a className="hover:text-cyan-400 transition-colors" href="https://icrowdnewswire.com" target="_blank">
                    icrowdnewswire.com
                  </a>
</div>
</div>
<div>
<div className="text-gray-400">Location</div>
<div className="text-white font-medium">
                  Miami, Florida (11630 SW 97 Street, Miami, FL 33176)
                </div>
</div>
</div>
</div>
<div className="max-w-3xl mx-auto mb-24 border-t border-white/5 pt-20">
<div className="text-center mb-12">
<span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2 block">
                Common Questions
              </span>
<h2 className="text-3xl font-serif text-white tracking-tight">
                Doubt Removal
              </h2>
</div>
<div className="space-y-6">
<div className="bg-white/[0.01] border border-white/5 rounded-lg p-5">
<h3 className="text-base font-medium text-white mb-2">
                  How is this different from a normal press release wire?
                </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">A standard wire publishes your release and reports potential reach. We add paid media advertising on top, actively driving real, targeted audiences to it and the viewership is auditable, not estimated.</p>
</div>
<div className="bg-white/[0.01] border border-white/5 rounded-lg p-5">
<h3 className="text-base font-medium text-white mb-2">
                  Do I have to sign a contract or pay membership fees?
                </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">No. It's pay-as-you-go with no contract, no membership fees, and no word-overage charges you pay per release.</p>
</div>
<div className="border-white/5 border rounded-lg pt-5 pr-5 pb-5 pl-5">
<h3 className="text-base font-medium text-white mb-2">
                  What if I don't have time to format the release?
                </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">Use the full-service option upload what you have and the team formats and distributes it for you, including rush service.</p>
</div>
<div className="bg-white/[0.01] border border-white/5 rounded-lg p-5">
<h3 className="text-base font-medium text-white mb-2">
                  Can my release actually reach non-English audiences?
                </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">
                  Yes. Every release is distributed in 9 languages, which
                  matters because about half of global digital searches happen
                  in languages other than English.
                </p>
</div>
<div className="bg-white/[0.01] border border-white/5 rounded-lg p-5">
<h3 className="text-base font-medium text-white mb-2">
                  What do I actually get to show for it?
                </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">A detailed report with web placements, social impressions and clicks, and keyword analytics the kind of auditable proof you can hand a client or executive.</p>
</div>
</div>
</div>
<div className="max-w-4xl mx-auto border-t border-cyan-500/30 pt-20 pb-10 text-center" id="booking">
<span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2 block">
              Secure Your Strategy
            </span>
<h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight mb-4">
              Book a demo or request a quote.
            </h2>
<p className="text-sm text-gray-400 font-light mb-8 max-w-lg mx-auto">
              Talk to the iCrowdNewswire team directly. Get a custom walkthrough
              and quote based on your target geographic &amp; language needs.
            </p>
<div className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl p-8 min-h-[500px] flex flex-col items-center justify-center">
<iconify-icon className="text-cyan-400 text-5xl mb-4" icon="solar:calendar-mark-linear"></iconify-icon>
<p className="text-gray-400 text-sm font-mono mb-4">[ Calendly Scheduler Widget Placeholder Hector to supply Calendly scheduling link ]</p>
<div className="text-xs text-gray-500">
                Normally embeds in full-width below
              </div>
</div>
</div>
</div>
</section>
<footer className="w-full border-t border-white/10 bg-black pt-20 pb-12 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
<div className="col-span-1 md:col-span-6 flex flex-col gap-6">
<div className="flex items-center gap-2 text-white">
<span className="text-lg font-semibold tracking-tight text-cyan-400">
                  iCrowdNewswire
                </span>
</div>
<p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                The press release distribution and marketing-technology company
                delivering paid media advertising and auditable results. Founded
                in 2014, Miami, FL.
              </p>
</div>
<div className="col-span-1 md:col-span-6 flex flex-col md:items-end justify-center text-sm text-gray-500 gap-2">
<div>Founder: Hector Botero</div>
<div>Phone: +1-786-628-7980</div>
<div>
                Website:
                <a className="hover:text-cyan-400" href="https://icrowdnewswire.com">
                  icrowdnewswire.com
                </a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-gray-600 font-mono">
              © 2024 iCrowdNewswire LLC. All rights reserved.
            </div>
</div>
</div>
</footer>
</main>

<div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none z-20"></div>


    </>
  );
}
