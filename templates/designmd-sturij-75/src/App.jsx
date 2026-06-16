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
      

<nav className="w-full max-w-[1180px] mx-auto px-6 py-8 flex items-center justify-between">
<div className="font-sans font-medium tracking-tighter text-xl text-[#f7f0de]">sturij</div>
<div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.12em] text-[#f7f0de]/70">
<a className="hover:text-[#d4aa58] transition-colors" href="#wardrobes">Trade Supply</a>
<a className="hover:text-[#d4aa58] transition-colors" href="#pilot">TradeAI Pilot</a>
</div>
<a className="border border-[rgba(247,240,222,0.16)] bg-[rgba(255,255,255,0.035)] text-[#f7f0de] rounded-full px-4 py-2.5 text-xs font-mono uppercase tracking-[0.12em] hover:bg-[#d4aa58] hover:border-[#d4aa58] hover:text-[#07110f] transition-all backdrop-blur-sm" href="#pilot">
        Join Pilot
      </a>
</nav>
<main className="w-full max-w-[1180px] mx-auto px-6 pt-12 pb-24 space-y-32">

<section className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-end min-h-[60vh]">
<div className="max-w-2xl space-y-6">
<span className="block font-mono text-xs uppercase tracking-[0.12em] text-[#f1d28c] font-medium">Sturij Workshop &amp; Software</span>
<h1 className="leading-[0.85] lg:text-8xl md:text-6xl text-6xl font-normal text-[#f7f0de] tracking-tight font-serif">Manufactured proof.<br/>Intelligent process.</h1>
<p className="font-sans text-lg md:text-xl text-[#f7f0de]/75 leading-relaxed max-w-2xl pt-4">
            A dual capability for independent joiners. Install our bespoke fitted wardrobes with seasonal trade margins, while piloting our new AI cockpit to automate your quoting and material proof.
          </p>
<div className="flex flex-wrap gap-4 pt-6 gap-x-4 gap-y-4">
<a className="border border-[#d4aa58] bg-[#d4aa58] text-[#07110f] rounded-full px-5 py-3 text-xs font-mono uppercase tracking-[0.12em] font-medium hover:bg-[#f1d28c] hover:border-[#f1d28c] transition-colors" href="#wardrobes">
              Explore Trade Supply
            </a>
<a className="border border-[rgba(247,240,222,0.16)] bg-[rgba(255,255,255,0.025)] text-[#f7f0de] rounded-full px-5 py-3 text-xs font-mono uppercase tracking-[0.12em] hover:bg-[rgba(255,255,255,0.06)] transition-colors backdrop-blur-sm" href="#pilot">
              Apply for AI Pilot
            </a>
</div>
</div>

<aside className="rounded-[32px] p-8 border border-[rgba(247,240,222,0.16)] bg-gradient-to-br from-[rgba(255,255,255,0.085)] to-[rgba(255,255,255,0.025)] shadow-[0_32px_110px_rgba(0,0,0,0.42)] backdrop-blur-md min-h-[420px] flex flex-col justify-between">
<span className="block font-mono text-xs uppercase tracking-[0.12em] text-[#f1d28c] font-medium">Seasonal Offer Base</span>
<div className="">
<strong className="block font-serif font-normal text-6xl md:text-[6.8rem] leading-[0.78] tracking-tight text-[#f7f0de] mt-12 mb-4">-15%</strong>
<em className="block font-serif font-normal text-2xl md:text-3xl leading-[0.92] text-[#f1d28c] not-italic">on bespoke casework</em>
</div>
<p className="font-sans text-sm text-[#f7f0de]/75 leading-relaxed mt-8">
            Valid this season for self-employed joiners. Precision-manufactured boards, hardware, and handling supplied directly to site or workshop.
          </p>
</aside>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-12 border-t border-[rgba(247,240,222,0.16)] relative" id="wardrobes">
<div className="space-y-6">
<span className="block font-mono text-xs uppercase tracking-[0.12em] text-[#f1d28c] font-medium">Material Logic</span>
<h2 className="font-serif font-normal text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight text-[#f7f0de]">
            Bespoke wardrobes, supplied for the trade.
          </h2>
<p className="font-sans text-base text-[#f7f0de]/75 leading-relaxed max-w-md">
            Stop losing margin to national companies or spending days cutting sheets. We manufacture to your precise site dimensions, providing a complete install-ready package.
          </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-2xl p-6 border border-[rgba(247,240,222,0.16)] bg-[rgba(255,255,255,0.025)] backdrop-blur-sm">
<iconify-icon className="text-2xl text-[#d4aa58] mb-4" icon="solar:ruler-cross-pen-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="font-serif text-xl tracking-tight text-[#f7f0de] mb-2">Precision Sizing</h3>
<p className="font-sans text-sm text-[#f7f0de]/70 leading-relaxed">Manufactured to your exact mm constraints. No generic modules or difficult scribes.</p>
</div>
<div className="rounded-2xl p-6 border border-[rgba(247,240,222,0.16)] bg-[rgba(255,255,255,0.025)] backdrop-blur-sm">
<iconify-icon className="text-2xl text-[#d4aa58] mb-4" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="font-serif text-xl tracking-tight text-[#f7f0de] mb-2">Premium Finishes</h3>
<p className="font-sans text-sm text-[#f7f0de]/70 leading-relaxed">Access to high-end boards, sawn oak veneers, and architectural hardware.</p>
</div>
<div className="rounded-2xl p-6 border border-[rgba(247,240,222,0.16)] bg-[rgba(255,255,255,0.025)] backdrop-blur-sm">
<iconify-icon className="text-2xl text-[#d4aa58] mb-4" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="font-serif text-xl tracking-tight text-[#f7f0de] mb-2">Margin Protection</h3>
<p className="font-sans text-sm text-[#f7f0de]/70 leading-relaxed">Trade pricing that allows you to quote competitively while retaining excellent profit.</p>
</div>
<div className="rounded-2xl p-6 border border-[rgba(247,240,222,0.16)] bg-[rgba(255,255,255,0.025)] backdrop-blur-sm">
<iconify-icon className="text-2xl text-[#d4aa58] mb-4" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="font-serif text-xl tracking-tight text-[#f7f0de] mb-2">Workshop Handover</h3>
<p className="font-sans text-sm text-[#f7f0de]/70 leading-relaxed">Clearly labelled, protected components ready for fast, sequential site assembly.</p>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 border-t border-[rgba(247,240,222,0.16)] relative" id="pilot">
<div className="order-2 lg:order-1">

<article className="rounded-[28px] p-6 border border-[rgba(247,240,222,0.16)] bg-gradient-to-b from-[rgba(16,36,31,0.95)] to-[rgba(7,17,15,0.96)] shadow-[0_32px_110px_rgba(0,0,0,0.42)] backdrop-blur-md h-full flex flex-col">
<div className="flex items-center justify-between border-b border-[rgba(247,240,222,0.16)] pb-4 mb-6">
<span className="font-mono text-xs uppercase tracking-[0.12em] text-[#8ca58b] font-medium flex items-center gap-2">
<iconify-icon className="text-[#d8775f]" icon="solar:record-circle-linear"></iconify-icon>
                Site Washup Active
              </span>
<iconify-icon className="text-[#f7f0de]/50 text-lg" icon="solar:settings-linear"></iconify-icon>
</div>
<div className="flex-1 space-y-4">
<div className="w-[85%] border border-[rgba(247,240,222,0.16)] rounded-2xl p-4 bg-[rgba(255,255,255,0.045)]">
<span className="block font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[#f1d28c] font-medium mb-1.5">Joiner Voice Note</span>
<p className="font-sans text-sm text-[#f7f0de]/90 leading-relaxed">
                  "Just finished the Smith visit. They like the Sage Green finish but are worried the alcove is too damp for standard MDF. We need to specify MR board and ensure a 10mm breathing gap. Quote around £4.5k."
                </p>
</div>
<div className="w-[85%] ml-auto border border-[rgba(212,170,88,0.36)] rounded-2xl p-4 bg-[rgba(255,255,255,0.02)]">
<span className="block font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[#8ca58b] font-medium mb-1.5">TradeAI Assistant</span>
<p className="font-sans text-sm text-[#f7f0de]/90 leading-relaxed">
                  Got it. I've flagged the MR board requirement. I can generate a customer-safe recap explaining the moisture prevention, or structure the initial quote.
                </p>
</div>
</div>
<div className="flex flex-wrap gap-2.5 mt-8 pt-4 border-t border-[rgba(247,240,222,0.16)]">
<button className="border border-[#d4aa58] bg-[#d4aa58] text-[#07110f] rounded-full px-3.5 py-2 text-[0.65rem] font-mono uppercase tracking-[0.12em] font-medium flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:document-add-linear"></iconify-icon>
                Trigger Recap
              </button>
<button className="border border-[rgba(247,240,222,0.16)] bg-[rgba(255,255,255,0.035)] text-[#f7f0de] rounded-full px-3.5 py-2 text-[0.65rem] font-mono uppercase tracking-[0.12em] flex items-center gap-1.5">
                Quote Confidence
              </button>
<button className="border border-[rgba(247,240,222,0.16)] bg-[rgba(255,255,255,0.035)] text-[#f7f0de] rounded-full px-3.5 py-2 text-[0.65rem] font-mono uppercase tracking-[0.12em] flex items-center gap-1.5">
                Material Proof
              </button>
</div>
</article>
</div>
<div className="order-1 lg:order-2 space-y-6 lg:pl-8">
<span className="block font-mono text-xs uppercase tracking-[0.12em] text-[#f1d28c] font-medium">TradeAI Collaboration</span>
<h2 className="font-serif font-normal text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight text-[#f7f0de]">
            A chat-first cockpit for independent joiners.
          </h2>
<p className="font-sans text-base text-[#f7f0de]/75 leading-relaxed">
            We are opening a limited number of pilot spots for joiners using Sturij supply. Our platform acts as your operations intelligence—turning voice notes from site visits into polished customer recaps, accurate quotes, and governed material proofs.
          </p>
<p className="font-sans text-base text-[#f7f0de]/75 leading-relaxed">
            No generic AI noise. Just real software that handles the admin so you can stay on the tools and win better work.
          </p>

<div className="mt-8 rounded-2xl p-6 border border-[rgba(247,240,222,0.16)] bg-gradient-to-br from-[rgba(255,255,255,0.052)] to-[rgba(255,255,255,0.01)] backdrop-blur-sm">
<span className="block font-mono text-xs uppercase tracking-[0.12em] text-[#f1d28c] font-medium mb-4">Artefact Trust States</span>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-[rgba(247,240,222,0.16)]">
<th className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[#f1d28c] font-medium pb-3 font-normal">State</th>
<th className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[#f1d28c] font-medium pb-3 font-normal pl-4">System Behaviour</th>
</tr>
</thead>
<tbody className="font-sans text-sm text-[#f7f0de]/80">
<tr className="border-b border-[rgba(247,240,222,0.16)]">
<td className="py-3 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#8ca58b]"></span>
                      Confirmed
                    </td>
<td className="py-3 pl-4">Extracted as truth from customer conversation.</td>
</tr>
<tr className="border-b border-[rgba(247,240,222,0.16)]">
<td className="py-3 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#d4aa58]"></span>
                      Assumed
                    </td>
<td className="py-3 pl-4">AI assumption staged for human review.</td>
</tr>
<tr>
<td className="py-3 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#d8775f]"></span>
                      Blocked
                    </td>
<td className="py-3 pl-4">Waiting on dimension or material proof.</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto pt-16">
<div className="rounded-3xl p-8 md:p-12 border-l-4 border-[#d4aa58] border-y border-r border-[rgba(247,240,222,0.16)] bg-[rgba(255,255,255,0.025)] backdrop-blur-md relative overflow-hidden">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-[#d4aa58] opacity-[0.07] rounded-full blur-3xl pointer-events-none"></div>
<span className="block font-mono text-xs uppercase tracking-[0.12em] text-[#f1d28c] font-medium mb-4">Next Action</span>
<h2 className="font-serif font-normal text-3xl md:text-4xl tracking-tight text-[#f7f0de] mb-4">
            Request pricing or apply for the pilot.
          </h2>
<p className="font-sans text-sm text-[#f7f0de]/75 leading-relaxed mb-8 max-w-xl">
            We are currently restricting pilot access to self-employed joiners who are actively quoting for fitted furniture this season. Fill in your details to secure manufacturing pricing and register interest in TradeAI.
          </p>
<form __gcruniqueid="1" className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<input __gcruniqueid="2" className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(247,240,222,0.16)] rounded-lg px-4 py-3 font-sans text-sm text-[#f7f0de] placeholder:text-[#f7f0de]/40 focus:outline-none focus:border-[#d4aa58] focus:bg-[rgba(255,255,255,0.05)] transition-colors" placeholder="Full Name" type="text"/>
<input __gcruniqueid="3" className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(247,240,222,0.16)] rounded-lg px-4 py-3 font-sans text-sm text-[#f7f0de] placeholder:text-[#f7f0de]/40 focus:outline-none focus:border-[#d4aa58] focus:bg-[rgba(255,255,255,0.05)] transition-colors" placeholder="Email Address" type="email"/>
</div>

<div className="space-y-3 pt-2">
<label className="flex items-center gap-3 cursor-pointer group w-max">
<div className="relative flex items-center">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-5 h-5 rounded border border-[rgba(247,240,222,0.3)] bg-[rgba(255,255,255,0.02)] peer-checked:bg-[#d4aa58] peer-checked:border-[#d4aa58] flex items-center justify-center transition-all group-hover:border-[#d4aa58]">
<iconify-icon className="text-[#07110f] opacity-0 peer-checked:opacity-100 text-sm" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
</div>
<span className="font-sans text-sm text-[#f7f0de]/80 group-hover:text-[#f7f0de] transition-colors">I am an independent self-employed joiner</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group w-max">
<div className="relative flex items-center">
<input className="sr-only peer" type="checkbox"/>
<div className="w-5 h-5 rounded border border-[rgba(247,240,222,0.3)] bg-[rgba(255,255,255,0.02)] peer-checked:bg-[#d4aa58] peer-checked:border-[#d4aa58] flex items-center justify-center transition-all group-hover:border-[#d4aa58]">
<iconify-icon className="text-[#07110f] opacity-0 peer-checked:opacity-100 text-sm" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
</div>
<span className="font-sans text-sm text-[#f7f0de]/80 group-hover:text-[#f7f0de] transition-colors">I want to apply for the TradeAI software pilot</span>
</label>
</div>
<div className="pt-6">
<button className="border border-[#d4aa58] bg-[#d4aa58] text-[#07110f] rounded-full px-6 py-3 text-xs font-mono uppercase tracking-[0.12em] font-medium hover:bg-[#f1d28c] hover:border-[#f1d28c] transition-colors w-full sm:w-auto" type="submit">
                Submit Application
              </button>
</div>
</form>
</div>
</section>
</main>
<footer className="w-full border-t border-[rgba(247,240,222,0.08)] mt-12">
<div className="max-w-[1180px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="font-sans font-medium tracking-tighter text-lg text-[#f7f0de]/50">sturij.</div>
<p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[#f7f0de]/40">
          © 2026 Sturij Manufacturing &amp; Software
        </p>
</div>
</footer>

    </>
  );
}
