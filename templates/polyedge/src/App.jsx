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



!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1234567890123456');
fbq('track', 'PageView');



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



function setLang(lang){
  document.getElementById('btn-id').classList.toggle('bg-white/5', lang==='id');
  document.getElementById('btn-en').classList.toggle('bg-white/5', lang==='en');
  const t = {
    id: {
      hero_title: 'Pasar telah <span class="italic text-white/60">membohongimu.</span><br>Berikut matematikanya yang <span class="amber italic">membuktikannya.</span>',
      hero_sub: 'Kerangka ML hybrid yang diterbitkan secara peer-review untuk perdagangan sistematis. Live on-chain. Diverifikasi DOI. Tanpa kotak hitam, tanpa janji — hanya backtest walk-forward 2019 hingga 2024, dan dompet yang bisa kamu audit sebelum mendanainya.'
    },
    en: {
      hero_title: 'The market has been<br><span class="italic text-white/60">lying to you.</span><br>Here\'s the math that <span class="amber italic">proves it.</span>',
      hero_sub: "A peer-published hybrid ML framework for systematic trading. Live on-chain. DOI verified. No black box, no promises — just walk-forward backtests from 2019 to 2024, and a wallet you can audit before you fund it."
    }
  };
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.dataset.i18n;
    if(t[lang][k]) el.innerHTML = t[lang][k];
  });
  localStorage.setItem('lang', lang);
}
const saved = localStorage.getItem('lang') || 'en';
setLang(saved);

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50" style={{backgroundImage: 'url(\'data:image/svg+xml', svg xmlns=%22http: '//www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22&gt'}}></div>

<div className="border-b border-white/5 bg-black overflow-hidden" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<div className="flex items-center gap-8 py-2 px-6 text-xs whitespace-nowrap" style={{animation: 'ticker 60s linear infinite'}}>
<span style={{color: '#f5a524'}}>● LIVE</span>
<span className="text-white/40">AUM $5,250.00</span>
<span className="text-white/20">/</span>
<span className="text-white/40">BATCH 05 — 88% ALLOCATED</span>
<span className="text-white/20">/</span>
<span className="text-white/40">WIN RATE TARGET 67.9%</span>
<span className="text-white/20">/</span>
<span className="text-white/40">DOI 10.5281/zenodo.16966978</span>
<span className="text-white/20">/</span>
<span style={{color: '#f5a524'}}>● POLYGON // POLYMARKET // CLAUDE-OPUS</span>
<span className="text-white/20">/</span>
<span className="text-white/40">ON-CHAIN VERIFIED</span>
<span className="text-white/20">/</span>
<span className="text-white/40">PEER-PUBLISHED RESEARCH</span>
</div>
</div>
<style>
@keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
@keyframes pulse-amber { 0%,100%{opacity:1} 50%{opacity:0.4} }
@keyframes scan { 0%{transform:translateY(-100%)} 100%{transform:translateY(100%)} }
.amber-pulse { animation: pulse-amber 2s ease-in-out infinite; }
.serif { font-family: 'Instrument Serif', serif; font-weight: 400; }
.mono { font-family: 'JetBrains Mono', monospace; }
.grid-bg { background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 60px 60px; }
.amber { color: #f5a524; }
.bg-amber { background: #f5a524; }
.border-amber { border-color: #f5a524; }
</style>

<nav className="sticky top-0 z-40 backdrop-blur-xl bg-black/70 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-7 h-7 border border-amber flex items-center justify-center" style={{color: '#f5a524'}}>
<span className="serif text-base">∞</span>
</div>
<span className="mono text-xs tracking-widest">IZZUDDIN<span className="text-white/30">/RESEARCH</span></span>
</div>
<div className="hidden md:flex items-center gap-8 mono text-xs text-white/50">
<a className="hover:text-white transition" href="#problem">01 / PROBLEM</a>
<a className="hover:text-white transition" href="#paper">02 / PAPER</a>
<a className="hover:text-white transition" href="#mechanism">03 / MECHANISM</a>
<a className="hover:text-white transition" href="#numbers">04 / NUMBERS</a>
<a className="hover:text-white transition" href="#allocate">05 / ALLOCATE</a>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex mono text-xs border border-white/10 rounded-sm overflow-hidden">
<button className="px-2.5 py-1 hover:bg-white/5" id="btn-id" onclick="setLang('id')">ID</button>
<button className="px-2.5 py-1 bg-white/5" id="btn-en" onclick="setLang('en')">EN</button>
</div>
<a className="mono text-xs px-3 py-1.5 bg-amber text-black hover:bg-white transition" href="#allocate">APPLY →</a>
</div>
</div>
</nav>

<section className="relative min-h-screen grid-bg border-b border-white/5 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
<div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-amber/40 via-amber/10 to-transparent" style={{background: 'linear-gradient(180deg,rgba(245,165,36,0.4),transparent)'}}></div>
<div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32">
<div className="flex items-center gap-3 mb-12 mono text-xs">
<span className="w-1.5 h-1.5 bg-amber rounded-full amber-pulse"></span>
<span className="text-white/50">BATCH 05 / OPEN</span>
<span className="text-white/20">·</span>
<span className="text-white/50">88% ALLOCATED</span>
<span className="text-white/20">·</span>
<span style={{color: '#f5a524'}}>12 SLOTS REMAINING</span>
</div>
<h1 className="serif tracking-tight leading-[0.95] mb-8" data-i18n="hero_title" style={{fontSize: 'clamp(2.75rem, 8vw, 7rem)'}}>
      The market has been<br/>
<span className="italic text-white/60">lying to you.</span><br/>
      Here's the math that <span className="amber italic">proves it.</span>
</h1>
<p className="text-base md:text-lg text-white/60 max-w-2xl mb-12 leading-relaxed" data-i18n="hero_sub">
      A peer-published hybrid ML framework for systematic trading. Live on-chain. DOI verified. No black box, no promises — just walk-forward backtests from 2019 to 2024, and a wallet you can audit before you fund it.
    </p>
<div className="flex flex-col sm:flex-row gap-3 mb-20">
<a className="group flex items-center justify-between gap-6 px-6 py-4 bg-amber text-black hover:bg-white transition" href="#allocate">
<span className="mono text-xs tracking-widest">APPLY FOR ALLOCATION</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="group flex items-center justify-between gap-6 px-6 py-4 border border-white/15 hover:border-white/40 transition" href="https://zenodo.org/records/16966978" target="_blank">
<span className="mono text-xs tracking-widest text-white/80">READ THE PAPER</span>
<iconify-icon className="text-white/60" icon="solar:document-text-linear" width="18"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
<div className="bg-black p-5">
<div className="mono text-xs text-white/40 mb-2">LIVE AUM</div>
<div className="serif text-3xl tracking-tight">$5,250<span className="amber">.</span></div>
</div>
<div className="bg-black p-5">
<div className="mono text-xs text-white/40 mb-2">WIN RATE TARGET</div>
<div className="serif text-3xl tracking-tight">67.9<span className="text-white/40 text-xl">%</span></div>
</div>
<div className="bg-black p-5">
<div className="mono text-xs text-white/40 mb-2">BACKTEST WINDOW</div>
<div className="serif text-3xl tracking-tight">2019–24</div>
</div>
<div className="bg-black p-5">
<div className="mono text-xs text-white/40 mb-2">EXECUTION</div>
<div className="serif text-3xl tracking-tight">24<span className="amber">/</span>7</div>
</div>
</div>
</div>

<div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block mono text-xs text-white/30 -rotate-90 origin-left">
    POLYGON · POLYMARKET · CLAUDE-OPUS
  </div>
</section>

<section className="border-b border-white/5 py-28" id="problem">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16">
<div className="lg:col-span-3">
<div className="mono text-xs text-white/40 mb-2">01 / THE PROBLEM</div>
<div className="amber mono text-xs">────────</div>
</div>
<div className="lg:col-span-9">
<h2 className="serif tracking-tight leading-tight mb-10" style={{fontSize: 'clamp(2rem,5vw,4rem)'}}>
          Every trader you know loses to the same three enemies.<br/>
<span className="text-white/40 italic">Fear. Greed. Sleep.</span>
</h2>
<div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-10">
<div className="bg-black p-8">
<div className="amber mono text-xs mb-4">I.</div>
<h3 className="serif text-2xl tracking-tight mb-3">Emotion taxes the math.</h3>
<p className="text-sm text-white/50 leading-relaxed">Studies show retail traders cut winners 2.3x faster than losers. The edge dies at the trigger finger.</p>
</div>
<div className="bg-black p-8">
<div className="amber mono text-xs mb-4">II.</div>
<h3 className="serif text-2xl tracking-tight mb-3">Sentiment moves before price.</h3>
<p className="text-sm text-white/50 leading-relaxed">By the time a chart confirms, 1,000 wallets have already rotated. Humans read news. Machines read intent.</p>
</div>
<div className="bg-black p-8">
<div className="amber mono text-xs mb-4">III.</div>
<h3 className="serif text-2xl tracking-tight mb-3">Markets don't sleep. You do.</h3>
<p className="text-sm text-white/50 leading-relaxed">Alpha is not extracted in business hours. It is harvested at 03:14 AM Sunday, when liquidity thins and conviction divides.</p>
</div>
</div>
<p className="serif italic text-2xl md:text-3xl tracking-tight text-white/70 max-w-3xl">
          "What if the trader was never the bottleneck — only the human inside it?"
        </p>
</div>
</div>
</div>
</section>

<section className="relative border-b border-white/5 py-28 overflow-hidden">
<div className="absolute inset-0 grid-bg opacity-30"></div>
<div className="relative max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16">
<div className="lg:col-span-3">
<div className="mono text-xs text-white/40 mb-2">02 / THE BREAKTHROUGH</div>
<div className="amber mono text-xs">────────</div>
</div>
<div className="lg:col-span-9">
<div className="mono text-xs amber mb-6 tracking-widest">ONE MORE THING —</div>
<h2 className="serif tracking-tight leading-[0.95] mb-10" style={{fontSize: 'clamp(2.5rem,7vw,5.5rem)'}}>
          A trading engine that doesn't<br/>
<span className="italic">flinch</span>, doesn't <span className="italic">hope</span>,<br/>
          and doesn't <span className="amber italic">sleep.</span>
</h2>
<p className="text-lg text-white/60 max-w-2xl leading-relaxed mb-12">
          Four models, one consensus. LightGBM reads structure. LSTM reads memory. Transformers read attention. An LLM reads the world. They vote. The capital moves. You sleep.
        </p>
<div className="border border-white/10 p-6 max-w-2xl">
<div className="mono text-xs text-white/40 mb-4">// SYSTEM SIGNATURE</div>
<pre className="mono text-xs text-white/70 leading-relaxed overflow-x-auto">engine.signal = consensus(
  lgbm(ohlcv + microstructure),
  lstm(temporal_memory),
  transformer(cross_asset_attention),
  llm(global_sentiment_parse)
) → regime_switch → execute</pre>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 py-28 bg-gradient-to-b from-black to-[#0d0a05]" id="paper">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16">
<div className="lg:col-span-3">
<div className="mono text-xs text-white/40 mb-2">03 / THE PROOF</div>
<div className="amber mono text-xs">────────</div>
<p className="mono text-xs text-white/40 mt-4 leading-relaxed">Entered into evidence. Public record. Permanent.</p>
</div>
<div className="lg:col-span-9">
<h2 className="serif tracking-tight leading-tight mb-10" style={{fontSize: 'clamp(2rem,5vw,4rem)'}}>
          This is not a pitch deck.<br/>
<span className="text-white/40">This is a published paper.</span>
</h2>
<a className="block border border-white/10 hover:border-amber transition group" href="https://zenodo.org/records/16966978" target="_blank">
<div className="grid md:grid-cols-3">
<div className="md:col-span-2 p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="amber" icon="solar:document-text-linear" width="20"></iconify-icon>
<span className="mono text-xs tracking-widest text-white/50">PEER PUBLICATION · ZENODO</span>
</div>
<h3 className="serif tracking-tight leading-tight mb-6" style={{fontSize: 'clamp(1.5rem,3vw,2.25rem)'}}>
                A Hybrid Machine Learning Framework for Systematic Trading in Cryptocurrency and FX Markets
              </h3>
<div className="mono text-xs text-white/50 mb-6">Izzuddin, Muchammad Fikri · 2024</div>
<div className="flex flex-wrap gap-2">
<span className="mono text-xs px-2 py-1 border border-white/10">LightGBM</span>
<span className="mono text-xs px-2 py-1 border border-white/10">LSTM</span>
<span className="mono text-xs px-2 py-1 border border-white/10">Transformer</span>
<span className="mono text-xs px-2 py-1 border border-white/10">LLM Sentiment</span>
<span className="mono text-xs px-2 py-1 border border-white/10">Regime-Switching</span>
<span className="mono text-xs px-2 py-1 border border-white/10">Stacking Ensemble</span>
</div>
</div>
<div className="p-8 md:p-10 flex flex-col justify-between">
<div>
<div className="mono text-xs text-white/40 mb-2">DOI</div>
<div className="mono text-xs amber mb-6 break-all">10.5281/zenodo.<br/>16966978</div>
</div>
<div className="flex items-center gap-2 text-white/60 group-hover:text-amber transition mono text-xs">
                READ FULL PAPER <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</a>
<div className="grid md:grid-cols-2 gap-px bg-white/5 mt-8 border border-white/5">
<div className="bg-black p-6">
<iconify-icon className="amber mb-3" icon="solar:chart-2-linear" width="22"></iconify-icon>
<div className="text-sm text-white/80 leading-relaxed">Integrates OHLCV + order book microstructure + LLM-driven global sentiment.</div>
</div>
<div className="bg-black p-6">
<iconify-icon className="amber mb-3" icon="solar:layers-linear" width="22"></iconify-icon>
<div className="text-sm text-white/80 leading-relaxed">Stacking ensemble across LightGBM, LSTM, Transformer with regime-switching.</div>
</div>
<div className="bg-black p-6">
<iconify-icon className="amber mb-3" icon="solar:graph-up-linear" width="22"></iconify-icon>
<div className="text-sm text-white/80 leading-relaxed">Backtested 2019–2024: improved Sharpe, reduced drawdown, higher profit factor.</div>
</div>
<div className="bg-black p-6">
<iconify-icon className="amber mb-3" icon="solar:shield-check-linear" width="22"></iconify-icon>
<div className="text-sm text-white/80 leading-relaxed">Walk-forward validation. Realistic slippage modeling. No look-ahead bias.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 py-28" id="mechanism">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16">
<div className="lg:col-span-3">
<div className="mono text-xs text-white/40 mb-2">04 / THE MECHANISM</div>
<div className="amber mono text-xs">────────</div>
</div>
<div className="lg:col-span-9">
<h2 className="serif tracking-tight leading-tight mb-16" style={{fontSize: 'clamp(2rem,5vw,4rem)'}}>
          Four signals.<br/>One decision.<br/><span className="text-white/40 italic">Zero hesitation.</span>
</h2>
<div className="space-y-px">
<div className="grid md:grid-cols-12 gap-6 py-8 border-t border-white/10 hover:bg-white/[0.02] transition px-2">
<div className="md:col-span-1 mono text-xs amber">L1</div>
<div className="md:col-span-3"><h3 className="serif text-2xl tracking-tight">LightGBM</h3><div className="mono text-xs text-white/40 mt-1">STRUCTURE</div></div>
<div className="md:col-span-8 text-sm text-white/60 leading-relaxed">Gradient-boosted trees over engineered OHLCV + order book microstructure features. Reads the skeleton of price.</div>
</div>
<div className="grid md:grid-cols-12 gap-6 py-8 border-t border-white/10 hover:bg-white/[0.02] transition px-2">
<div className="md:col-span-1 mono text-xs amber">L2</div>
<div className="md:col-span-3"><h3 className="serif text-2xl tracking-tight">LSTM</h3><div className="mono text-xs text-white/40 mt-1">MEMORY</div></div>
<div className="md:col-span-8 text-sm text-white/60 leading-relaxed">Recurrent network for temporal dependency. Recognizes patterns the moment they begin to rhyme with history.</div>
</div>
<div className="grid md:grid-cols-12 gap-6 py-8 border-t border-white/10 hover:bg-white/[0.02] transition px-2">
<div className="md:col-span-1 mono text-xs amber">L3</div>
<div className="md:col-span-3"><h3 className="serif text-2xl tracking-tight">Transformer</h3><div className="mono text-xs text-white/40 mt-1">ATTENTION</div></div>
<div className="md:col-span-8 text-sm text-white/60 leading-relaxed">Multi-head attention across cross-asset signals. Sees the correlation before it materializes.</div>
</div>
<div className="grid md:grid-cols-12 gap-6 py-8 border-t border-b border-white/10 hover:bg-white/[0.02] transition px-2">
<div className="md:col-span-1 mono text-xs amber">L4</div>
<div className="md:col-span-3"><h3 className="serif text-2xl tracking-tight">LLM Sentiment</h3><div className="mono text-xs text-white/40 mt-1">INTENT</div></div>
<div className="md:col-span-8 text-sm text-white/60 leading-relaxed">Claude-Opus parses news, social, and on-chain top-1% wallet flow in real time. Measurable, statistically significant edge.</div>
</div>
</div>
<div className="mt-16 grid md:grid-cols-2 gap-6">
<a className="border border-white/10 p-6 hover:border-amber transition group" href="https://github.com/oyi77/1ai-poly-trader" target="_blank">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="amber" icon="solar:code-square-linear" width="24"></iconify-icon>
<iconify-icon className="text-white/40 group-hover:text-amber transition" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
<div className="mono text-xs text-white/40 mb-2">RESEARCH ENGINE / GITHUB</div>
<div className="serif text-xl tracking-tight">oyi77 / 1ai-poly-trader</div>
</a>
<a className="border border-white/10 p-6 hover:border-amber transition group" href="https://zapper.xyz/id/account/0xad85c2f3942561afa448cbbd5811a5f7e2e3c6bd" target="_blank">
<div className="flex items-center justify-between mb-4">
<iconify-icon className="amber" icon="solar:link-linear" width="24"></iconify-icon>
<iconify-icon className="text-white/40 group-hover:text-amber transition" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
<div className="mono text-xs text-white/40 mb-2">ON-CHAIN AUDIT / ZAPPER</div>
<div className="serif text-xl tracking-tight">0xad85…c6bd</div>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-b border-white/5 py-28 overflow-hidden bg-[#0d0a05]" id="numbers">
<div className="absolute inset-0 grid-bg opacity-20"></div>
<div className="relative max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16 mb-16">
<div className="lg:col-span-3">
<div className="mono text-xs text-white/40 mb-2">05 / THE NUMBERS</div>
<div className="amber mono text-xs">────────</div>
</div>
<div className="lg:col-span-9">
<h2 className="serif tracking-tight leading-tight" style={{fontSize: 'clamp(2rem,5vw,4rem)'}}>
          Backtested. Walk-forward. <span className="text-white/40 italic">Slippage-modeled.</span>
</h2>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
<div className="bg-black p-8">
<div className="mono text-xs text-white/40 mb-4">SHARPE Δ</div>
<div className="serif tracking-tight" style={{fontSize: 'clamp(2rem,4vw,3.5rem)'}}>+2.14<span className="amber">×</span></div>
<div className="mono text-xs text-white/30 mt-2">vs. baseline</div>
</div>
<div className="bg-black p-8">
<div className="mono text-xs text-white/40 mb-4">MAX DD ↓</div>
<div className="serif tracking-tight" style={{fontSize: 'clamp(2rem,4vw,3.5rem)'}}>−47<span className="amber">%</span></div>
<div className="mono text-xs text-white/30 mt-2">drawdown reduction</div>
</div>
<div className="bg-black p-8">
<div className="mono text-xs text-white/40 mb-4">PROFIT FACTOR</div>
<div className="serif tracking-tight" style={{fontSize: 'clamp(2rem,4vw,3.5rem)'}}>1.89</div>
<div className="mono text-xs text-white/30 mt-2">net of costs</div>
</div>
<div className="bg-black p-8">
<div className="mono text-xs text-white/40 mb-4">WALK-FORWARD</div>
<div className="serif tracking-tight" style={{fontSize: 'clamp(2rem,4vw,3.5rem)'}}>2019<span className="amber">–</span>24</div>
<div className="mono text-xs text-white/30 mt-2">5-yr validation</div>
</div>
</div>
<p className="serif italic text-xl md:text-2xl tracking-tight text-white/60 max-w-3xl mt-16">
      Numbers reported in the published paper. Reproducible. Falsifiable. <span className="amber">Read it yourself.</span>
</p>
</div>
</section>

<section className="border-b border-white/5 py-28">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16">
<div className="lg:col-span-3">
<div className="mono text-xs text-white/40 mb-2">06 / THE ALLIANCE</div>
<div className="amber mono text-xs">────────</div>
</div>
<div className="lg:col-span-9">
<h2 className="serif tracking-tight leading-[0.95] mb-10" style={{fontSize: 'clamp(2.25rem,6vw,5rem)'}}>
          No profit. No fee.<br/>
<span className="amber italic">We bleed together.</span>
</h2>
<p className="text-lg text-white/60 max-w-2xl leading-relaxed mb-12">
          High-water mark performance model. The engine eats only after you do. Your downside is our downside. Skin in the game is not optional — it is the architecture.
        </p>
<div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
<div className="bg-black p-6">
<div className="serif text-3xl tracking-tight mb-2 amber">0%</div>
<div className="mono text-xs text-white/50">MGMT FEE BELOW HIGH-WATER MARK</div>
</div>
<div className="bg-black p-6">
<div className="serif text-3xl tracking-tight mb-2 amber">100%</div>
<div className="mono text-xs text-white/50">ON-CHAIN TRANSPARENCY</div>
</div>
<div className="bg-black p-6">
<div className="serif text-3xl tracking-tight mb-2 amber">∞</div>
<div className="mono text-xs text-white/50">AUDIT WINDOW · ANY TIME</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-b border-white/5 py-28 overflow-hidden" id="allocate">
<div className="absolute inset-0 grid-bg opacity-30"></div>
<div className="relative max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16 mb-12">
<div className="lg:col-span-3">
<div className="mono text-xs text-white/40 mb-2">07 / THE POOL</div>
<div className="amber mono text-xs">────────</div>
</div>
<div className="lg:col-span-9">
<div className="mono text-xs amber tracking-widest mb-4 amber-pulse">● BATCH 05 — OPEN</div>
<h2 className="serif tracking-tight leading-tight mb-10" style={{fontSize: 'clamp(2rem,5vw,4rem)'}}>
          This batch closes.<br/>
<span className="text-white/40 italic">The next one might not open.</span>
</h2>
</div>
</div>

<div className="border border-white/10 p-8 md:p-10 bg-black/60 backdrop-blur">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
<div>
<div className="mono text-xs text-white/40 mb-2">BATCH 05 / CAPACITY</div>
<div className="serif text-4xl md:text-5xl tracking-tight">88<span className="amber">%</span> <span className="text-white/40">ALLOCATED</span></div>
</div>
<div className="text-left md:text-right">
<div className="mono text-xs text-white/40 mb-2">SLOTS REMAINING</div>
<div className="serif text-4xl md:text-5xl tracking-tight amber">12<span className="text-white/40">/100</span></div>
</div>
</div>
<div className="h-2 bg-white/5 overflow-hidden mb-6 relative">
<div className="h-full bg-amber relative" style={{width: '88%'}}>
<div className="absolute inset-0" style={{background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)', animation: 'scan 2s linear infinite'}}></div>
</div>
</div>
<div className="flex flex-wrap gap-x-6 gap-y-2 mono text-xs text-white/40">
<span>BATCH 01 ✓ FILLED</span>
<span>BATCH 02 ✓ FILLED</span>
<span>BATCH 03 ✓ FILLED</span>
<span>BATCH 04 ✓ FILLED</span>
<span className="amber">BATCH 05 ● OPEN</span>
<span className="text-white/20">BATCH 06 — TBD</span>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6 mt-12">

<div className="border border-white/10 p-8 hover:border-white/30 transition flex flex-col">
<div className="mono text-xs text-white/40 mb-6">TIER I</div>
<h3 className="serif text-3xl tracking-tight mb-2">The Believer</h3>
<p className="text-sm text-white/50 mb-6 leading-relaxed">Any amount. Immediate. You believe in the work and you say so with capital, not words.</p>
<div className="serif text-2xl tracking-tight mb-6 text-white/70">tip.md</div>
<div className="flex-1"></div>
<a className="flex items-center justify-between border border-white/15 px-4 py-3 hover:bg-white/5 transition mono text-xs" href="https://www.tip.md/oyi77" target="_blank">
          SEND A TIP <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</a>
</div>

<div className="border border-white/10 p-8 hover:border-white/30 transition flex flex-col">
<div className="mono text-xs text-white/40 mb-6">TIER II</div>
<h3 className="serif text-3xl tracking-tight mb-2">The Partner</h3>
<p className="text-sm text-white/50 mb-6 leading-relaxed">Acquire a product or service. Indirect funding through real value exchange. Get something. Build something.</p>
<div className="serif text-2xl tracking-tight mb-6 text-white/70">lynk.id/letscorp</div>
<div className="flex-1"></div>
<a className="flex items-center justify-between border border-white/15 px-4 py-3 hover:bg-white/5 transition mono text-xs" href="https://lynk.id/letscorp" target="_blank">
          BROWSE PRODUCTS <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</a>
</div>

<div className="border border-amber p-8 bg-amber/[0.04] flex flex-col relative">
<div className="absolute top-4 right-4 mono text-xs amber amber-pulse">● PRIMARY</div>
<div className="mono text-xs amber mb-6">TIER III</div>
<h3 className="serif text-3xl tracking-tight mb-2">The Allocator</h3>
<p className="text-sm text-white/70 mb-6 leading-relaxed">Serious capital. Vetted via Telegram lobby. High-water mark partnership. Pool allocation in active batch.</p>
<div className="serif text-2xl tracking-tight mb-6 amber">Pool · Batch 05</div>
<div className="flex-1"></div>
<a className="flex items-center justify-between bg-amber text-black px-4 py-3 hover:bg-white transition mono text-xs" href="https://t.me/" target="_blank">
          SUBMIT APPLICATION <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5 mt-12">
<a className="bg-black p-6 flex items-center justify-between hover:bg-white/[0.02] transition group" href="https://t.me/" target="_blank">
<div>
<div className="mono text-xs text-white/40 mb-2">JOIN BETA BOT TEST</div>
<div className="serif text-xl tracking-tight">Telegram Lobby</div>
</div>
<iconify-icon className="amber" icon="solar:bot-linear" width="28"></iconify-icon>
</a>
<a className="bg-black p-6 flex items-center justify-between hover:bg-white/[0.02] transition" href="https://wa.me/" target="_blank">
<div>
<div className="mono text-xs text-white/40 mb-2">DIRECT CONTACT</div>
<div className="serif text-xl tracking-tight">WhatsApp</div>
</div>
<iconify-icon className="amber" icon="solar:chat-round-line-linear" width="28"></iconify-icon>
</a>
<a className="bg-black p-6 flex items-center justify-between hover:bg-white/[0.02] transition" href="https://t.me/" target="_blank">
<div>
<div className="mono text-xs text-white/40 mb-2">DIRECT CONTACT</div>
<div className="serif text-xl tracking-tight">Telegram</div>
</div>
<iconify-icon className="amber" icon="solar:plain-linear" width="28"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden border-b border-white/5">
<div className="absolute inset-0 grid-bg opacity-40"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full" style={{background: 'radial-gradient(circle,rgba(245,165,36,0.08),transparent 70%)'}}></div>
<div className="relative max-w-5xl mx-auto px-6 text-center">
<div className="mono text-xs amber tracking-widest mb-8">08 / THE CALL</div>
<h2 className="serif tracking-tight leading-[0.95] mb-10" style={{fontSize: 'clamp(2.5rem,9vw,7rem)'}}>
      The math is <span className="italic">public.</span><br/>
      The wallet is <span className="italic">public.</span><br/>
      The decision is <span className="amber italic">yours.</span>
</h2>
<p className="text-lg text-white/60 max-w-xl mx-auto mb-12 leading-relaxed">
      Twelve slots remain in Batch 05. Read the paper. Audit the wallet. Then decide.
    </p>
<div className="flex flex-col sm:flex-row gap-3 justify-center">
<a className="px-8 py-4 bg-amber text-black hover:bg-white transition mono text-xs tracking-widest" href="#allocate">APPLY FOR ALLOCATION →</a>
<a className="px-8 py-4 border border-white/15 hover:border-white/40 transition mono text-xs tracking-widest text-white/80" href="https://polymarket.com/@berkah-karya" target="_blank">VIEW LIVE PORTFOLIO ↗</a>
</div>
</div>
</section>

<footer className="py-16 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-10 mb-12">
<div className="md:col-span-2">
<div className="flex items-center gap-3 mb-4">
<div className="w-7 h-7 border border-amber flex items-center justify-center amber serif text-base">∞</div>
<span className="mono text-xs tracking-widest">IZZUDDIN<span className="text-white/30">/RESEARCH</span></span>
</div>
<p className="text-sm text-white/50 max-w-md leading-relaxed">
          Independent quantitative research. Hybrid ML systematic trading. Peer-published. On-chain verifiable. <span className="amber">Built in Indonesia.</span>
</p>
</div>
<div>
<div className="mono text-xs text-white/40 mb-4">RESEARCH</div>
<ul className="space-y-2 text-sm text-white/70">
<li><a className="hover:amber" href="https://zenodo.org/records/16966978" target="_blank">Published Paper</a></li>
<li><a className="hover:amber" href="https://github.com/oyi77/1ai-poly-trader" target="_blank">GitHub Engine</a></li>
<li><a className="hover:amber" href="https://polymarket.com/@berkah-karya" target="_blank">Live Portfolio</a></li>
<li><a className="hover:amber" href="https://zapper.xyz/id/account/0xad85c2f3942561afa448cbbd5811a5f7e2e3c6bd" target="_blank">On-Chain Audit</a></li>
</ul>
</div>
<div>
<div className="mono text-xs text-white/40 mb-4">SUPPORT</div>
<ul className="space-y-2 text-sm text-white/70">
<li><a className="hover:amber" href="https://www.tip.md/oyi77" target="_blank">tip.md/oyi77</a></li>
<li><a className="hover:amber" href="https://lynk.id/letscorp" target="_blank">lynk.id/letscorp</a></li>
<li><a className="hover:amber" href="#allocate">Pool Allocation</a></li>
<li><a className="hover:amber" href="https://t.me/" target="_blank">Telegram Lobby</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 mono text-xs text-white/40">
<div>© 2024 Muchammad Fikri Izzuddin · @oyi77</div>
<div>DOI 10.5281/zenodo.16966978 · Polygon · Polymarket · Claude-Opus</div>
</div>
</div>
</footer>


    </>
  );
}
