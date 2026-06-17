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
      

<nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-center pointer-events-none">
<div className="font-normal tracking-tighter text-lg text-white pointer-events-auto">
            bgd.
        </div>
<div className="hidden md:flex gap-8 text-sm font-light tracking-wide text-zinc-400 pointer-events-auto">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
</div>
<div className="pointer-events-auto text-sm">
<a className="hover:text-zinc-300 transition-colors text-white font-normal" href="#contact">Let's Talk</a>
</div>
</nav>

<header className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
<div className="opacity-30 absolute top-0 right-0 bottom-0 left-0" style={{background: 'radial-gradient(circle at 50% 50%, rgba(50,50,70,0.5) 0%, rgba(5,5,5,1) 60%)'}}></div>
<div className="absolute z-10 w-full max-w-4xl px-6 flex justify-center items-center" style={{perspective: '1200px'}}>
<div className="w-full aspect-video border border-zinc-800/50 rounded-2xl bg-black/40 backdrop-blur-xl flex flex-col justify-between p-8 md:p-12 shadow-2xl relative overflow-hidden group" style={{animation: 'float 12s ease-in-out infinite', transformStyle: 'preserve-3d'}}>
<div className="-top-40 -right-40 filter blur-[100px] group-hover:opacity-60 group-hover:[transform:perspective(1000px)_rotateX(15deg)_rotateY(-15deg)_scale(1.2)_translateZ(50px)] transition-all duration-1000 ease-out bg-zinc-600 opacity-20 mix-blend-screen w-96 h-96 rounded-full absolute"></div>
<div className="flex justify-between items-start w-full relative z-20">
<iconify-icon className="text-white text-3xl" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-normal tracking-widest uppercase text-zinc-500 border border-zinc-800/50 rounded-full px-3 py-1 bg-black/50">Available for new projects</span>
</div>
<div className="relative z-20">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[0.9] mb-6">
                        Crafting<br/>Digital<br/><span className="text-zinc-500">Realities.</span>
</h1>
<p className="text-sm md:text-base font-light text-zinc-400 max-w-md leading-relaxed tracking-wide">
                        Specializing in high-converting SaaS &amp; FinTech interfaces. We merge aesthetic precision with modern engineering.
                    </p>
</div>
</div>
</div>

<div className="absolute bottom-32 z-10 w-full flex justify-center gap-8 md:gap-16 opacity-40 grayscale">
<div className="flex items-center gap-2 text-xs font-normal tracking-widest uppercase"><iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon> FinTech Ready</div>
<div className="flex items-center gap-2 text-xs font-normal tracking-widest uppercase"><iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon> High Conversion</div>
<div className="hidden md:flex items-center gap-2 text-xs font-normal tracking-widest uppercase"><iconify-icon icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon> Enterprise Grade</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-xs font-normal tracking-widest uppercase">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"></div>
</div>
</header>

<div className="w-full py-4 border-y border-zinc-900 bg-[#0a0a0a] overflow-hidden flex whitespace-nowrap relative">
<div className="flex items-center gap-8 text-xs font-normal tracking-widest uppercase text-zinc-600" style={{animation: 'marquee 20s linear infinite'}}>
<span>UI/UX Design</span><iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span>Web Architecture</span><iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span>FinTech Solutions</span><iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span>Design Systems</span><iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span>Brand Identity</span><iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>

<span>UI/UX Design</span><iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span>Web Architecture</span><iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span>FinTech Solutions</span><iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span>Design Systems</span><iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span>Brand Identity</span>
</div>
</div>

<section className="py-32 px-6 max-w-5xl mx-auto" id="about">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16">
<div className="md:col-span-5">
<h2 className="text-3xl font-medium tracking-tighter text-white mb-6">The Architect Behind the Screen.</h2>
<div className="flex gap-4 items-center">
<div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<iconify-icon className="text-2xl text-zinc-500" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white tracking-tight">BlackGDesigns</div>
<div className="text-xs text-zinc-500 font-light">Founder &amp; Lead Engineer</div>
</div>
</div>

<div className="grid grid-cols-2 gap-6 mt-12 border-t border-zinc-900 pt-8">
<div>
<h4 className="text-3xl font-medium tracking-tighter text-white">6+</h4>
<p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest font-light">Years Exp.</p>
</div>
<div>
<h4 className="text-3xl font-medium tracking-tighter text-white">50+</h4>
<p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest font-light">Projects</p>
</div>
<div>
<h4 className="text-3xl font-medium tracking-tighter text-white">99%</h4>
<p className="text-xs text-zinc-500 mt-1 uppercase tracking-widest font-light">Client Success</p>
</div>
</div>
</div>
<div className="md:col-span-7 space-y-6 text-sm font-light text-zinc-400 leading-relaxed">
<p>
                    I started BlackGDesigns out of a frustration with the web's growing stagnation. Everything looked the same, felt the same, and performed averagely. With a background deeply rooted in both aesthetic design and hard-core programming, I saw an opportunity to bridge the gap between form and function.
                </p>
<p>
                    Over the past 6 years, my focus has sharpened towards complex problem-solving in the SaaS and FinTech sectors. I don't just create layouts; I engineer comprehensive digital experiences that prioritize user psychology, seamless micro-interactions, and scalable design systems.
                </p>
<p>
                    Whether building a high-frequency trading dashboard or an immersive brand storytelling site, my approach remains the same: obsessive attention to typography, relentless optimization for performance, and a deep understanding that the best interfaces are the ones you barely notice you're using.
                </p>

<div className="pt-8">
<h3 className="text-lg font-medium tracking-tight text-white mb-4">Design Philosophy</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:minimalistic-magnifer-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs">Clarity over cleverness.</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:stopwatch-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs">Performance is a design feature.</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:ruler-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs">Pixel-perfect precision.</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:accessibility-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs">Function dictates form.</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs">Motion brings meaning.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900" id="services">
<div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
<h3 className="text-2xl font-medium tracking-tighter text-white">Capabilities</h3>
<p className="max-w-md text-sm text-zinc-500 font-light leading-relaxed">
                Comprehensive solutions tailored for forward-thinking brands. We handle the entire lifecycle from conceptualization to deployment.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-gradient-to-b from-zinc-900/50 to-transparent border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white text-xl" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight text-white mb-2">UI/UX Design</h4>
<p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-4">Intuitive interfaces</p>
<p className="text-sm text-zinc-400 font-light leading-relaxed flex-grow">Crafting immersive interfaces that guide users seamlessly. Focused on typography, spacing, and psychology.</p>
<ul className="text-xs text-zinc-500 mt-6 space-y-2 font-light border-t border-zinc-800/50 pt-4">
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> Wireframing &amp; Prototyping</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> User Journey Mapping</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> High-Fidelity Visuals</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-gradient-to-b from-zinc-900/50 to-transparent border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white text-xl" icon="solar:monitor-smartphone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight text-white mb-2">Web Architecture</h4>
<p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-4">Scalable front-ends</p>
<p className="text-sm text-zinc-400 font-light leading-relaxed flex-grow">Building robust, performant front-ends. Turning complex designs into fluid, responsive realities using modern stacks.</p>
<ul className="text-xs text-zinc-500 mt-6 space-y-2 font-light border-t border-zinc-800/50 pt-4">
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> React &amp; Next.js Ecosystem</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> Performance Optimization</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> API Integration</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-gradient-to-b from-zinc-900/50 to-transparent border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white text-xl" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight text-white mb-2">FinTech &amp; SaaS</h4>
<p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-4">Complex data visualization</p>
<p className="text-sm text-zinc-400 font-light leading-relaxed flex-grow">Specialized solutions for financial products and SaaS platforms requiring high security and dense data layouts.</p>
<ul className="text-xs text-zinc-500 mt-6 space-y-2 font-light border-t border-zinc-800/50 pt-4">
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> Financial Dashboards</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> Data Visualization</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> Secure Authentication Flows</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-gradient-to-b from-zinc-900/50 to-transparent border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white text-xl" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight text-white mb-2">Design Systems</h4>
<p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-4">Single source of truth</p>
<p className="text-sm text-zinc-400 font-light leading-relaxed flex-grow">Creating comprehensive, token-based design systems that ensure consistency across your entire product suite.</p>
<ul className="text-xs text-zinc-500 mt-6 space-y-2 font-light border-t border-zinc-800/50 pt-4">
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> Component Libraries</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> Design Tokens</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> Usage Guidelines</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-gradient-to-b from-zinc-900/50 to-transparent border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white text-xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight text-white mb-2">Vibe Coding</h4>
<p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-4">Experiential web</p>
<p className="text-sm text-zinc-400 font-light leading-relaxed flex-grow">Injecting soul into software. Custom shaders, spring animations, and 3D web elements that elevate the brand.</p>
<ul className="text-xs text-zinc-500 mt-6 space-y-2 font-light border-t border-zinc-800/50 pt-4">
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> Framer Motion Animations</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> Micro-interactions</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> Three.js &amp; WebGL</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-gradient-to-b from-zinc-900/50 to-transparent border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white text-xl" icon="solar:palette-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight text-white mb-2">Brand Identity</h4>
<p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-4">Visual storytelling</p>
<p className="text-sm text-zinc-400 font-light leading-relaxed flex-grow">Developing cohesive brand identities that resonate with your target audience and stand out in the digital landscape.</p>
<ul className="text-xs text-zinc-500 mt-6 space-y-2 font-light border-t border-zinc-800/50 pt-4">
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> Logo &amp; Iconography</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> Color &amp; Typography Strategy</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-zinc-600"></div> Brand Guidelines</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900" id="process">
<h3 className="text-2xl font-medium tracking-tighter text-white mb-16">The Process</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
<div className="relative pl-6 border-l border-zinc-800">
<span className="absolute -left-3 top-0 text-xs font-normal bg-zinc-900 text-zinc-400 px-2 py-1 rounded-full border border-zinc-800">01</span>
<h4 className="text-base font-medium tracking-tight text-white mb-2 pt-1">Discovery &amp; Strategy</h4>
<p className="text-sm text-zinc-500 font-light">Deep dive into business goals, user needs, and competitive landscape to define the project scope.</p>
</div>
<div className="relative pl-6 border-l border-zinc-800">
<span className="absolute -left-3 top-0 text-xs font-normal bg-zinc-900 text-zinc-400 px-2 py-1 rounded-full border border-zinc-800">02</span>
<h4 className="text-base font-medium tracking-tight text-white mb-2 pt-1">Wireframing</h4>
<p className="text-sm text-zinc-500 font-light">Establishing the structural foundation and user flow through low-fidelity architectural blueprints.</p>
</div>
<div className="relative pl-6 border-l border-zinc-800">
<span className="absolute -left-3 top-0 text-xs font-normal bg-zinc-900 text-zinc-400 px-2 py-1 rounded-full border border-zinc-800">03</span>
<h4 className="text-base font-medium tracking-tight text-white mb-2 pt-1">Visual Design</h4>
<p className="text-sm text-zinc-500 font-light">Applying the brand aesthetic, typography, and color theory to create high-fidelity, pixel-perfect interfaces.</p>
</div>
<div className="relative pl-6 border-l border-zinc-800">
<span className="absolute -left-3 top-0 text-xs font-normal bg-zinc-900 text-zinc-400 px-2 py-1 rounded-full border border-zinc-800">04</span>
<h4 className="text-base font-medium tracking-tight text-white mb-2 pt-1">Prototyping</h4>
<p className="text-sm text-zinc-500 font-light">Linking screens and defining micro-interactions to simulate the final product feel before coding begins.</p>
</div>
<div className="relative pl-6 border-l border-zinc-800">
<span className="absolute -left-3 top-0 text-xs font-normal bg-zinc-900 text-zinc-400 px-2 py-1 rounded-full border border-zinc-800">05</span>
<h4 className="text-base font-medium tracking-tight text-white mb-2 pt-1">Development</h4>
<p className="text-sm text-zinc-500 font-light">Translating the design into clean, component-driven, high-performance code using modern frameworks.</p>
</div>
<div className="relative pl-6 border-l border-zinc-800">
<span className="absolute -left-3 top-0 text-xs font-normal bg-zinc-900 text-zinc-400 px-2 py-1 rounded-full border border-zinc-800">06</span>
<h4 className="text-base font-medium tracking-tight text-white mb-2 pt-1">QA &amp; Launch</h4>
<p className="text-sm text-zinc-500 font-light">Rigorous testing across devices and browsers, optimizing performance, and deploying to production.</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900" id="work">
<h3 className="text-2xl font-medium text-white tracking-tighter mb-16">Selected Works</h3>

<div className="group cursor-pointer mb-16 relative">
<div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden relative mb-6 bg-zinc-900 border border-zinc-800/50 flex flex-col md:flex-row">

<div className="w-full md:w-3/5 h-full relative overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-950 to-black p-8 flex items-center justify-center">
<div className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full border border-zinc-800/50 rounded-xl bg-[#0a0a0a] shadow-2xl relative overflow-hidden flex flex-col">

<div className="h-10 border-b border-zinc-800/50 flex items-center px-4 gap-4">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
</div>

<div className="flex-grow flex flex-col pt-6 pr-6 pb-6 pl-6 gap-x-4 gap-y-4">
<div className="flex justify-between items-end h-1/2">
<div className="w-1/6 bg-zinc-800/30 rounded-t-sm h-[30%]"></div>
<div className="w-1/6 bg-zinc-800/30 rounded-t-sm h-[70%]"></div>
<div className="w-1/6 bg-zinc-800/50 rounded-t-sm h-[50%]"></div>
<div className="w-1/6 bg-zinc-600/50 rounded-t-sm h-[90%]"></div>
<div className="w-1/6 bg-zinc-800/30 rounded-t-sm h-[40%]"></div>
</div>
<div className="h-[1px] bg-zinc-800/50 w-full"></div>
</div>
</div>
</div>

<div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-black border-l border-zinc-800/50">
<div className="inline-block px-3 py-1 bg-zinc-900 rounded-full text-xs font-normal text-zinc-400 border border-zinc-800 mb-6 self-start">Case Study • FinTech</div>
<h4 className="text-3xl font-medium tracking-tight text-white mb-2">FinFlow Dashboard</h4>
<p className="text-sm text-zinc-500 font-light mb-8">Redesigning the financial management experience for enterprise scale.</p>
<div className="space-y-4 mb-8">
<div className="">
<span className="text-xs text-white font-medium uppercase tracking-widest">Challenge</span>
<p className="text-xs text-zinc-400 font-light mt-1">Complex data sets were causing cognitive overload and user churn.</p>
</div>
<div className="">
<span className="text-xs text-white font-medium uppercase tracking-widest">Process</span>
<p className="text-xs text-zinc-400 font-light mt-1">Information architecture overhaul, simplified UI patterns, and custom data visualization components.</p>
</div>
</div>
<div className="grid grid-cols-2 gap-4 border-t border-zinc-900 pt-6">
<div className="">
<div className="text-xl font-medium text-white">+40%</div>
<div className="text-xs text-zinc-500 font-light">Conversion Rate</div>
</div>
<div>
<div className="text-xl font-medium text-white">-60%</div>
<div className="text-xs text-zinc-500 font-light">Task Completion Time</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative mb-6 bg-zinc-900 border border-zinc-800/50" style={{perspective: '1000px'}}>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-900 to-black group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
<div className="w-32 h-32 rounded-2xl bg-black/50 backdrop-blur-md border border-zinc-700 shadow-2xl flex items-center justify-center" style={{transform: 'rotateX(20deg) rotateY(-20deg)'}}>
<iconify-icon className="text-3xl text-zinc-600" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-normal text-white border border-white/10">SaaS Platform</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-lg font-medium tracking-tight text-white mb-1">Project Placeholder 01</h4>
<p className="text-sm text-zinc-500 font-light">Identity &amp; Access Management</p>
</div>
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors text-xl" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="group cursor-pointer md:mt-24">
<div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative mb-6 bg-zinc-900 border border-zinc-800/50" style={{perspective: '1000px'}}>
<div className="group-hover:scale-105 transition-transform duration-700 ease-out flex bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-black absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-48 h-12 rounded-full bg-black/50 backdrop-blur-md border border-zinc-700 shadow-2xl flex items-center justify-center" style={{transform: 'rotateX(-10deg) rotateY(30deg)'}}>
<div className="w-3/4 h-[2px] bg-zinc-600 rounded-full"></div>
</div>
</div>
<div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-normal text-white border border-white/10">Web3</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h4 className="text-lg font-medium tracking-tight text-white mb-1">Project Placeholder 02</h4>
<p className="text-sm text-zinc-500 font-light">DeFi Exchange Vibe</p>
</div>
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors text-xl" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 border border-zinc-800/50 rounded-2xl bg-[#0a0a0a] flex flex-col justify-between">
<div className="">
<iconify-icon className="text-2xl text-zinc-600 mb-6" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-8">"BlackGDesigns completely transformed our FinTech app. The new architecture is not only visually stunning but drastically improved our user retention metrics within the first month."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700"></div>
<div className="">
<div className="text-xs font-medium text-white">OLA MOSES</div>
<div className="text-[10px] uppercase text-zinc-500 tracking-widest mt-0.5">Product VP, SCIENTIA</div>
</div>
</div>
</div>
<div className="p-8 border border-zinc-800/50 rounded-2xl bg-[#0a0a0a] flex flex-col justify-between">
<div className="">
<iconify-icon className="text-2xl text-zinc-600 mb-6" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-8">"An absolute masterclass in UI engineering. The attention to detail in micro-interactions and performance optimization is something you rarely find in standard agencies."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700"></div>
<div className="">
<div className="text-xs font-medium text-white">EMMANUEL OKEREKE</div>
<div className="text-[10px] uppercase text-zinc-500 tracking-widest mt-0.5">Founder, TechSaaS</div>
</div>
</div>
</div>
<div className="p-8 border border-zinc-800/50 rounded-2xl bg-[#0a0a0a] flex flex-col justify-between">
<div className="">
<iconify-icon className="text-2xl text-zinc-600 mb-6" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="leading-relaxed text-sm font-light text-zinc-400 mb-8">"Working together was seamless. He understood our complex web3 requirements immediately and delivered a design system that our internal team now relies on daily."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700"></div>
<div className="">
<div className="text-xs font-medium text-white">Elena Rodriguez</div>
<div className="text-[10px] uppercase tracking-widest text-zinc-500 mt-0.5">Lead Design, Nexus</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900 relative" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="">
<h3 className="text-2xl font-medium tracking-tighter text-white mb-8">Frequent Questions</h3>
<div className="space-y-2">
<details className="group border-b border-zinc-800/50 pb-4">
<summary className="flex justify-between items-center font-normal text-sm cursor-pointer text-zinc-300 hover:text-white transition-colors">
                            What is your typical project timeline?
                            <iconify-icon className="group-open:rotate-180 transition-transform text-zinc-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<p className="text-sm text-zinc-500 font-light mt-4 leading-relaxed pr-8">Depending on the scope, a complete product design and development cycle typically ranges from 4 to 12 weeks. We map this out clearly during our discovery phase.</p>
</details>
<details className="group border-b border-zinc-800/50 py-4">
<summary className="flex justify-between items-center font-normal text-sm cursor-pointer text-zinc-300 hover:text-white transition-colors">
                            Do you work with existing engineering teams?
                            <iconify-icon className="group-open:rotate-180 transition-transform text-zinc-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<p className="text-sm text-zinc-500 font-light mt-4 leading-relaxed pr-8">Absolutely. We often act as a specialized UI/UX and front-end strike team, handing off clean, documented React components to your back-end engineers.</p>
</details>
<details className="group border-b border-zinc-800/50 py-4">
<summary className="flex justify-between items-center font-normal text-sm cursor-pointer text-zinc-300 hover:text-white transition-colors">
                            What is your pricing structure?
                            <iconify-icon className="group-open:rotate-180 transition-transform text-zinc-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<p className="text-sm text-zinc-500 font-light mt-4 leading-relaxed pr-8">We offer value-based flat-fee pricing for defined scopes, and a dedicated monthly retainer model for ongoing product iteration. Minimum engagement starts at $5k.</p>
</details>
<details className="group border-b border-zinc-800/50 py-4">
<summary className="flex justify-between items-center font-normal text-sm cursor-pointer text-zinc-300 hover:text-white transition-colors">
                            What stack do you build with?
                            <iconify-icon className="group-open:rotate-180 transition-transform text-zinc-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<p className="text-sm text-zinc-500 font-light mt-4 leading-relaxed pr-8">Our core stack is React, Next.js, Tailwind CSS, TypeScript, and Framer Motion. We adapt to your ecosystem but prefer modern, highly-performant tools.</p>
</details>
<details className="group border-b border-zinc-800/50 py-4">
<summary className="flex justify-between items-center font-normal text-sm cursor-pointer text-zinc-300 hover:text-white transition-colors">
                            Do you handle branding as well?
                            <iconify-icon className="group-open:rotate-180 transition-transform text-zinc-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<p className="text-sm text-zinc-500 font-light mt-4 leading-relaxed pr-8">Yes, we handle digital-first brand identity. We ensure your logo, typography, and visual language align perfectly with the user interface we are building.</p>
</details>
</div>
</div>

<div className="bg-[#0a0a0a] border border-zinc-800/50 rounded-2xl p-8">
<h3 className="text-2xl font-medium tracking-tighter text-white mb-2">Initiate Sequence</h3>
<p className="text-sm text-zinc-500 font-light mb-8">Tell us about your project, timeline, and goals.</p>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400">Name</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400">Email</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400">Project Details</label>
<textarea className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none" placeholder="Briefly describe what you're looking to build..." rows="4"></textarea>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400 mb-2 block">Budget Range</label>
<div className="relative">
<select className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-zinc-500 transition-colors cursor-pointer">
<option>$5k - $10k</option>
<option>$10k - $25k</option>
<option>$25k+</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<label className="flex items-center gap-3 cursor-pointer group mt-4">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded-[4px] border border-zinc-700 bg-zinc-900 peer-checked:bg-white peer-checked:border-white transition-colors flex items-center justify-center">
<iconify-icon className="text-black opacity-0 peer-checked:opacity-100 text-xs transition-opacity" icon="solar:check-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-xs text-zinc-500 font-light group-hover:text-zinc-400 transition-colors">I agree to the privacy policy and terms.</span>
</label>
<button className="w-full bg-white text-black hover:bg-zinc-200 transition-colors font-medium text-sm py-3 rounded-lg flex justify-center items-center gap-2 mt-4" type="button">
                        Book Consultation <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="pt-16 pb-12 px-6 max-w-7xl mx-auto border-t border-zinc-900 relative overflow-hidden">
<div className="flex flex-col items-center text-center mb-24">
<h2 className="md:text-6xl hover:text-zinc-300 transition-colors cursor-pointer text-4xl font-medium text-white tracking-tighter mb-8" onclick="window.location.href='/mailto:enwaeze69@gmail.com'" role="button">enwaeze69@gmail.com</h2>
<div className="flex gap-6 text-sm font-normal text-zinc-500">
<a className="hover:text-white transition-colors" href="#">X (Twitter)</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Dribbble</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
<div className="">
<p className="text-xs text-zinc-600 font-light">© 2024 BlackGDesigns. All rights reserved.</p>
<p className="text-xs text-zinc-600 font-light mt-1">Operating worldwide.</p>
</div>
<a className="text-xs font-normal tracking-widest uppercase text-white flex items-center gap-2 hover:opacity-70 transition-opacity" href="#">
                Back to top
                <iconify-icon icon="solar:arrow-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 text-[15vw] font-medium tracking-tighter text-zinc-900/40 whitespace-nowrap pointer-events-none select-none">
            blackgdesigns
        </div>
</footer>

    </>
  );
}
