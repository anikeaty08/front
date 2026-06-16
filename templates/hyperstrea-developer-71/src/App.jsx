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



        // Typewriter Effect
        const words = ["THOUGHT", "LIGHT", "CODE"];
        const el = document.getElementById("typewriter");
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                el.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                el.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

            const speed = isDeleting ? 50 : 150;
            setTimeout(type, speed);
        }
        type();

        // Spotlight Effect
        document.getElementById("cards").onmousemove = e => {
            for(const card of document.getElementsByClassName("spotlight-card")) {
                const rect = card.getBoundingClientRect(),
                      x = e.clientX - rect.left,
                      y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            };
        };

        // Copy Command
        function copyCommand() {
            const text = "npm install hyperstream";
            navigator.clipboard.writeText(text);
            const toast = document.getElementById("copy-toast");
            toast.style.opacity = "1";
            setTimeout(() => toast.style.opacity = "0", 2000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#8A2BE2] rounded-full mix-blend-screen opacity-[0.03] blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00F0FF] rounded-full mix-blend-screen opacity-[0.03] blur-[120px]"></div>
</div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
<div className="group relative flex items-center justify-between px-2 py-2 rounded-full border border-white/10 bg-[#050505]/60 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-all hover:border-white/20">

<div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
<div className="flex items-center gap-1 pl-4">
<span className="font-bold tracking-tighter text-lg mr-4">HYPERSTREAM</span>
<div className="hidden md:flex items-center gap-1">
<a className="px-3 py-1.5 text-xs text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5" href="#">Docs</a>
<a className="px-3 py-1.5 text-xs text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5" href="#">API</a>
<a className="px-3 py-1.5 text-xs text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5" href="#">Pricing</a>
<a className="px-3 py-1.5 text-xs text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5" href="#">Changelog</a>
</div>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-medium transition-all group-hover:shadow-[0_0_15px_rgba(138,43,226,0.3)]">
<span className="text-[#8A2BE2]"><span className="iconify" data-icon="lucide:terminal-square" data-width="14"></span></span>
                Deploy
                <kbd className="hidden sm:inline-block font-mono bg-black/50 px-1.5 py-0.5 rounded border border-white/10 text-[10px] text-gray-400">⌘+D</kbd>
</button>
</div>
</nav>
<main className="w-full max-w-7xl mx-auto px-6 pt-32 md:pt-48 pb-20">

<section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
<div className="space-y-8 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A2BE2]/10 border border-[#8A2BE2]/20 text-[#8A2BE2] text-xs font-mono">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8A2BE2] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#8A2BE2]"></span>
</span>
                    v2.4.0 is live
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500">
                    INFRASTRUCTURE<br/>
                    AT THE SPEED OF<br/>
<span className="text-white" id="typewriter"></span><span className="cursor-blink text-[#8A2BE2]">_</span>
</h1>
<p className="text-lg text-gray-400 max-w-md leading-relaxed">
                    Hyperstream eliminates DevOps friction. Provision, scale, and monitor your backend with a single CLI command.
                </p>
<div className="group relative inline-flex items-center">
<div className="absolute -inset-0.5 bg-gradient-to-r from-[#8A2BE2] to-[#00F0FF] rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-200"></div>
<button className="relative flex items-center gap-4 bg-[#0A0A0A] border border-white/10 px-6 py-4 rounded-lg font-mono text-sm hover:bg-[#0f0f0f] transition-colors w-full sm:w-auto" onclick="copyCommand()">
<span className="text-[#00F0FF]">$</span>
<span className="text-gray-300">npm install hyperstream</span>
<span className="ml-4 text-gray-500 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:copy" data-width="16"></span>
</span>
</button>
<div className="absolute left-full ml-4 px-3 py-1 bg-white text-black text-xs font-medium rounded opacity-0 transition-opacity" id="copy-toast">Copied!</div>
</div>
</div>

<div className="editor-container hidden lg:block relative h-[500px]">
<div className="editor-window absolute inset-0 bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl overflow-hidden beam-border">

<div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs text-gray-500 font-mono">deploy.config.ts</div>
<div className="w-10"></div>
</div>

<div className="p-6 font-mono text-sm leading-relaxed overflow-hidden">
<div className="flex gap-4 group/code">
<div className="flex flex-col text-right text-gray-600 select-none">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span>
</div>
<div className="flex flex-col text-gray-400">
<span className="text-[#8A2BE2]">import</span> { Stream } <span className="text-[#8A2BE2]">from</span> <span className="text-[#00F0FF]">'@hyperstream/core'</span>;
                                <span> </span>
<span className="text-gray-500">// Initialize instant cluster</span>
<span><span className="text-[#8A2BE2]">const</span> <span className="text-yellow-200">app</span> = <span className="text-[#8A2BE2]">new</span> Stream({</span>
<span className="pl-4 group-hover/code:text-[#00F0FF] transition-colors duration-300">region: <span className="text-[#00F0FF]">'us-east-1'</span>,</span>
<span className="pl-4 group-hover/code:text-[#00F0FF] transition-colors duration-300">scaling: <span className="text-[#8A2BE2]">true</span>,</span>
<span className="pl-4 group-hover/code:text-[#00F0FF] transition-colors duration-300">security: <span className="text-[#00F0FF]">'strict'</span></span>
<span>});</span>
<span> </span>
<span>app.<span className="text-blue-400">deploy</span>(() =&gt; {</span>
<span className="pl-4">console.<span className="text-yellow-200">log</span>(<span className="text-[#00F0FF]">'System Operational'</span>);</span>
<span>});</span>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-[#8A2BE2] opacity-20 blur-[100px] z-[-1] rounded-full"></div>
</div>
</section>

<section className="mb-32 border-y border-white/5 bg-white/[0.01]">
<div className="py-8 overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
<div className="text-center mb-6">
<span className="text-xs font-mono text-gray-500 tracking-widest uppercase">Powering Next-Gen Stacks</span>
</div>
<div className="flex gap-12 justify-center flex-wrap items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 group cursor-default">
<span className="iconify text-3xl group-hover:text-white transition-colors" data-icon="lucide:box"></span>
<span className="font-bold tracking-tight text-xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-600 group-hover:from-white group-hover:to-gray-200">ACME</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<span className="iconify text-3xl group-hover:text-blue-400 transition-colors" data-icon="lucide:hexagon"></span>
<span className="font-bold tracking-tight text-xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-600 group-hover:from-blue-400 group-hover:to-blue-200">NEXUS</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<span className="iconify text-3xl group-hover:text-emerald-400 transition-colors" data-icon="lucide:triangle"></span>
<span className="font-bold tracking-tight text-xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-600 group-hover:from-emerald-400 group-hover:to-emerald-200">VERTEX</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<span className="iconify text-3xl group-hover:text-purple-400 transition-colors" data-icon="lucide:circle-dashed"></span>
<span className="font-bold tracking-tight text-xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-600 group-hover:from-purple-400 group-hover:to-purple-200">ORBIT</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<span className="iconify text-3xl group-hover:text-orange-400 transition-colors" data-icon="lucide:zap"></span>
<span className="font-bold tracking-tight text-xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-600 group-hover:from-orange-400 group-hover:to-orange-200">BOLT</span>
</div>
</div>
</div>
</section>

<section className="mb-32 relative">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4">Zero-Config Deployments.</h2>
<p className="text-gray-400 max-w-2xl mx-auto">Stop wrestling with YAML files. Push to git, and we handle the containerization, load balancing, and SSL automagically.</p>
</div>
<div className="relative max-w-4xl mx-auto">

<div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px pipeline-line -translate-x-1/2 z-0"></div>

<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
<div className="md:text-right md:pr-12 order-2 md:order-1">
<h3 className="text-xl font-semibold text-white mb-2">Build</h3>
<p className="text-gray-400 text-sm">Automatic detection of Node, Go, Rust, or Python environments. We construct the container image in &lt; 500ms.</p>
</div>
<div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center text-[#8A2BE2] shadow-[0_0_20px_rgba(138,43,226,0.2)]">
<span className="iconify" data-icon="lucide:package"></span>
</div>
<div className="pl-12 md:pl-0 order-3 md:order-2 md:hidden"></div>
</div>

<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
<div className="hidden md:block order-1"></div>
<div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center text-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.2)]">
<span className="iconify" data-icon="lucide:upload-cloud"></span>
</div>
<div className="pl-12 md:pl-12 order-2">
<h3 className="text-xl font-semibold text-white mb-2">Ship</h3>
<p className="text-gray-400 text-sm">Global propagation to 35 edge locations. Zero-downtime rollouts with instant rollback capability.</p>
</div>
</div>

<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="md:text-right md:pr-12 order-2 md:order-1">
<h3 className="text-xl font-semibold text-white mb-2">Scale</h3>
<p className="text-gray-400 text-sm">Predictive autoscaling based on request velocity. Scale to zero when idle, scale to infinity during spikes.</p>
</div>
<div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.2)]">
<span className="iconify" data-icon="lucide:bar-chart-2"></span>
</div>
<div className="pl-12 md:pl-0 order-3 md:order-2 md:hidden"></div>
</div>
</div>
</section>

<section className="mb-32 max-w-3xl mx-auto">
<h3 className="text-2xl font-semibold tracking-tight mb-8 flex items-center gap-3">
<span className="iconify" data-icon="lucide:git-commit-horizontal"></span>
                Shipping Daily
            </h3>
<div className="relative border-l border-white/10 ml-3 space-y-8 pl-8">

<div className="group">
<div className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full border border-[#050505] bg-gray-600 group-hover:bg-[#8A2BE2] transition-colors"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-2">
<span className="font-mono text-sm text-[#8A2BE2]">v2.4.0</span>
<span className="text-xs text-gray-500">Oct 24, 2023</span>
<span className="text-[10px] uppercase tracking-wider font-semibold bg-[#8A2BE2]/10 text-[#8A2BE2] px-2 py-0.5 rounded border border-[#8A2BE2]/20">Feature</span>
</div>
<p className="text-gray-300 text-sm group-hover:text-white transition-colors">Reduced cold-start latency by 40% using new V8 isolate snapshots.</p>
</div>

<div className="group">
<div className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full border border-[#050505] bg-gray-600 group-hover:bg-[#00F0FF] transition-colors"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-2">
<span className="font-mono text-sm text-gray-400">v2.3.9</span>
<span className="text-xs text-gray-500">Oct 22, 2023</span>
<span className="text-[10px] uppercase tracking-wider font-semibold bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">Fix</span>
</div>
<p className="text-gray-300 text-sm group-hover:text-white transition-colors">Patched SSL handshake timeout on Asia-Pacific edge nodes.</p>
</div>

<div className="group">
<div className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full border border-[#050505] bg-gray-600 group-hover:bg-orange-400 transition-colors"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-2">
<span className="font-mono text-sm text-gray-400">v2.3.8</span>
<span className="text-xs text-gray-500">Oct 20, 2023</span>
<span className="text-[10px] uppercase tracking-wider font-semibold bg-gray-100/10 text-gray-300 px-2 py-0.5 rounded border border-white/10">Improvement</span>
</div>
<p className="text-gray-300 text-sm group-hover:text-white transition-colors">CLI build output is now 3x faster and supports localized caching.</p>
</div>
</div>
</section>

<section className="mb-32">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter">Predictable compute pricing.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto" id="cards">

<div className="spotlight-card group rounded-2xl bg-[#0A0A0A] border border-white/10 p-1">
<div className="spotlight-card-border rounded-2xl"></div>
<div className="relative h-full bg-[#0A0A0A] rounded-xl p-8 flex flex-col z-10">
<h3 className="text-lg font-medium text-gray-200">Hobby</h3>
<div className="mt-4 mb-6">
<span className="text-3xl font-bold text-white">$0</span>
<span className="text-gray-500">/mo</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-400">
<span className="iconify text-gray-600" data-icon="lucide:check"></span> 100GB Bandwidth
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-400">
<span className="iconify text-gray-600" data-icon="lucide:check"></span> 1 Project
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-400">
<span className="iconify text-gray-600" data-icon="lucide:check"></span> Community Support
                            </li>
</ul>
<button className="w-full py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors">Start Instance</button>
</div>
</div>

<div className="spotlight-card group rounded-2xl bg-[#0A0A0A] border border-[#8A2BE2]/50 p-1 shadow-[0_0_40px_rgba(138,43,226,0.1)]">
<div className="spotlight-card-border rounded-2xl"></div>
<div className="relative h-full bg-[#0A0A0A] rounded-xl p-8 flex flex-col z-10">
<div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
<span className="inline-flex items-center gap-1 bg-[#8A2BE2] text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-wider">
<span className="iconify" data-icon="lucide:git-branch" data-width="10"></span> Popular
                             </span>
</div>
<h3 className="text-lg font-medium text-[#E0E6ED]">Pro</h3>
<div className="mt-4 mb-6">
<span className="text-3xl font-bold text-white">$29</span>
<span className="text-gray-500">/seat/mo</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300">
<span className="iconify text-[#8A2BE2]" data-icon="lucide:check"></span> 1TB Bandwidth
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<span className="iconify text-[#8A2BE2]" data-icon="lucide:check"></span> Unlimited Projects
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<span className="iconify text-[#8A2BE2]" data-icon="lucide:check"></span> Edge Functions
                            </li>
</ul>
<button className="w-full py-2 rounded-lg bg-[#8A2BE2] text-white text-sm font-semibold hover:bg-[#7a22cc] transition-colors shadow-lg shadow-[#8A2BE2]/25">Start Instance</button>
</div>
</div>

<div className="spotlight-card group rounded-2xl bg-[#0A0A0A] border border-white/10 p-1">
<div className="spotlight-card-border rounded-2xl"></div>
<div className="relative h-full bg-[#0A0A0A] rounded-xl p-8 flex flex-col z-10">
<h3 className="text-lg font-medium text-gray-200">Enterprise</h3>
<div className="mt-4 mb-6">
<span className="text-3xl font-bold text-white">Custom</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-400">
<span className="iconify text-gray-600" data-icon="lucide:check"></span> Unlimited Bandwidth
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-400">
<span className="iconify text-gray-600" data-icon="lucide:check"></span> SSO &amp; SAML
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-400">
<span className="iconify text-gray-600" data-icon="lucide:check"></span> Dedicated Support
                            </li>
</ul>
<button className="w-full py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="mb-32 max-w-2xl mx-auto font-mono">
<h3 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">System Queries</h3>
<div className="space-y-4">
<details className="group bg-[#0A0A0A] border border-white/10 rounded-lg open:border-[#00F0FF]/30 transition-colors">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none text-sm text-gray-300 hover:text-white">
<span><span className="text-gray-600 mr-2">&gt;</span> Is there an on-premise option?</span>
<span className="iconify transform group-open:rotate-180 transition-transform text-gray-500" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-4 pb-4 pt-0 text-xs text-gray-400 leading-relaxed">
<span className="text-[#00F0FF]">root@hyperstream:~$</span> Enterprise plans support VPC peering and self-hosted runners. Contact sales for the Docker image.<span className="cursor-blink">_</span>
</div>
</details>
<details className="group bg-[#0A0A0A] border border-white/10 rounded-lg open:border-[#00F0FF]/30 transition-colors">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none text-sm text-gray-300 hover:text-white">
<span><span className="text-gray-600 mr-2">&gt;</span> Does it support Deno?</span>
<span className="iconify transform group-open:rotate-180 transition-transform text-gray-500" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-4 pb-4 pt-0 text-xs text-gray-400 leading-relaxed">
<span className="text-[#00F0FF]">root@hyperstream:~$</span> Yes. Runtime detection is automatic. Just include your deno.json config file.<span className="cursor-blink">_</span>
</div>
</details>
<details className="group bg-[#0A0A0A] border border-white/10 rounded-lg open:border-[#00F0FF]/30 transition-colors">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none text-sm text-gray-300 hover:text-white">
<span><span className="text-gray-600 mr-2">&gt;</span> How do you handle DDoS?</span>
<span className="iconify transform group-open:rotate-180 transition-transform text-gray-500" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-4 pb-4 pt-0 text-xs text-gray-400 leading-relaxed">
<span className="text-[#00F0FF]">root@hyperstream:~$</span> Layer 3/4 and Layer 7 mitigation is active by default on all edges. No extra config required.<span className="cursor-blink">_</span>
</div>
</details>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-[#050505] relative z-20">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
<div>
<h2 className="text-2xl font-semibold tracking-tight mb-2">Ready to upgrade your workflow?</h2>
<p className="text-gray-500 text-sm">Join 10,000+ developers shipping better software.</p>
</div>
<div className="flex gap-2 w-full md:max-w-md">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#8A2BE2] transition-colors" placeholder="dev@company.com" type="email"/>
<button className="px-6 py-2 bg-white text-black font-semibold text-sm rounded-lg hover:bg-gray-200 transition-colors">Initialize</button>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-mono text-green-500">All Systems Operational</span>
</div>
<div className="flex gap-6 text-xs text-gray-600">
<a className="hover:text-gray-400 transition-colors" href="#">Terms</a>
<a className="hover:text-gray-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-gray-400 transition-colors" href="#">Security</a>
<span className="text-gray-700">© 2023 Hyperstream Inc.</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
