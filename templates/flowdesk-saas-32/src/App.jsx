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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="8dH3WnYdxsenOolYGHB0"></div>

</div></div>
<div className="relative" style={{background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.18), transparent)'}}>

<header className="relative z-20 max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{background: 'linear-gradient(135deg,#6366f1,#8b5cf6)'}}>
<iconify-icon icon="solar:water-linear" width="18"></iconify-icon>
</div>
<span className="text-white text-lg font-semibold tracking-tight" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>Flowdesk</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
<a className="hover:text-white transition" href="#features">Features</a>
<a className="hover:text-white transition" href="#product">Product</a>
<a className="hover:text-white transition" href="#pricing">Pricing</a>
<a className="hover:text-white transition" href="#">Docs</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:block text-sm text-slate-300 hover:text-white transition" href="#">Sign in</a>
<a className="text-sm text-white font-medium px-4 py-2 rounded-lg hover:opacity-90 transition" href="#" style={{background: 'linear-gradient(135deg,#6366f1,#8b5cf6)'}}>Get Started</a>
</div>
</header>

<section className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-24 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur text-xs text-slate-300">
<span className="w-1.5 h-1.5 rounded-full" style={{background: '#34d399'}}></span>
    Now with real-time AI summaries
  </div>
<h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05]" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>
    Work flows
    <span className="" style={{background: 'linear-gradient(135deg,#818cf8,#c084fc)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>here.</span>
</h1>
<p className="mt-6 text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">The smart workspace that helps remote teams organize tasks, track progress, and collaborate in real time all in one calm, focused place.</p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto text-white font-medium px-6 py-3 rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2" href="#" style={{background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 8px 30px rgba(99,102,241,0.35)'}}>
      Get Started Free
      <iconify-icon className="" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto text-white font-medium px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition flex items-center justify-center gap-2" href="#">
<iconify-icon className="" icon="solar:play-circle-linear" width="18"></iconify-icon>
      See how it works
    </a>
</div>
</section>

<section className="relative z-10 max-w-6xl mx-auto px-6 pb-16">
<p className="text-center text-xs uppercase tracking-widest text-slate-500 mb-8">Trusted by 10,000+ teams worldwide</p>
<div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
<span className="text-xl font-semibold tracking-tight text-slate-400" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>Northwind</span>
<span className="text-xl font-semibold tracking-tight text-slate-400" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>Lumio</span>
<span className="text-xl font-semibold tracking-tight text-slate-400" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>Pulse</span>
<span className="text-xl font-semibold tracking-tight text-slate-400" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>Vertex</span>
<span className="text-xl font-semibold tracking-tight text-slate-400" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>Cobalt</span>
</div>
</section>
</div>

<section className="max-w-6xl mx-auto px-6 py-24" id="features">
<div className="max-w-2xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>Everything your team needs</h2>
<p className="mt-4 text-slate-400">Three core capabilities that keep work moving without the noise.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-7 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur hover:bg-white/[0.06] transition">
<div className="w-11 h-11 rounded-xl flex items-center justify-center text-indigo-400 mb-5" style={{background: 'rgba(99,102,241,0.15)'}}>
<iconify-icon icon="solar:checklist-minimalistic-linear" width="22"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-lg tracking-tight mb-2">Organize tasks</h3>
<p className="text-sm text-slate-400 leading-relaxed">Plan sprints, assign owners, and break big goals into clear, shippable steps.</p>
</div>
<div className="p-7 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur hover:bg-white/[0.06] transition">
<div className="w-11 h-11 rounded-xl flex items-center justify-center text-violet-400 mb-5" style={{background: 'rgba(139,92,246,0.15)'}}>
<iconify-icon icon="solar:chart-2-linear" width="22"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-lg tracking-tight mb-2">Track progress</h3>
<p className="text-sm text-slate-400 leading-relaxed">Live dashboards surface velocity and blockers before they slow you down.</p>
</div>
<div className="p-7 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur hover:bg-white/[0.06] transition">
<div className="w-11 h-11 rounded-xl flex items-center justify-center text-emerald-400 mb-5" style={{background: 'rgba(52,211,153,0.15)'}}>
<iconify-icon icon="solar:users-group-rounded-linear" width="22"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-lg tracking-tight mb-2">Collaborate live</h3>
<p className="text-sm text-slate-400 leading-relaxed">Comment, mention, and co-edit in real time — no context switching required.</p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-12" id="product">
<div className="rounded-3xl p-1.5 border border-white/10" style={{background: 'radial-gradient(ellipse 60% 80% at 50% 0%, rgba(99,102,241,0.12), transparent)'}}>
<div className="rounded-[1.4rem] border border-white/5 overflow-hidden" style={{background: '#0a0c14'}}>

<div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/5">
<span className="w-3 h-3 rounded-full bg-red-500/70"></span>
<span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
<span className="w-3 h-3 rounded-full bg-green-500/70"></span>
<span className="ml-4 text-xs text-slate-500">flowdesk.app/workspace</span>
</div>
<div className="grid md:grid-cols-12">

<div className="hidden md:block md:col-span-3 border-r border-white/5 p-5 space-y-1">
<p className="text-xs uppercase tracking-widest text-slate-600 mb-3">Workspace</p>
<div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-indigo-300 text-sm" style={{background: 'rgba(99,102,241,0.12)'}}>
<iconify-icon icon="solar:home-smile-linear" width="16"></iconify-icon> Overview
          </div>
<div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-400 text-sm">
<iconify-icon icon="solar:clipboard-list-linear" width="16"></iconify-icon> Tasks
          </div>
<div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-400 text-sm">
<iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon> Calendar
          </div>
<div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-400 text-sm">
<iconify-icon icon="solar:chat-round-line-linear" width="16"></iconify-icon> Messages
          </div>
</div>

<div className="md:col-span-9 p-6">
<div className="flex items-center justify-between mb-6">
<div>
<h4 className="text-white font-semibold tracking-tight">Q3 Product Launch</h4>
<p className="text-xs text-slate-500">12 tasks · 4 in progress</p>
</div>
<span className="text-xs text-white px-3 py-1.5 rounded-lg" style={{background: 'linear-gradient(135deg,#6366f1,#8b5cf6)'}}>On track</span>
</div>
<div className="grid sm:grid-cols-3 gap-4 mb-6">
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<p className="text-xs text-slate-500 mb-1">Completed</p>
<p className="text-2xl text-white font-semibold tracking-tight">68%</p>
<div className="mt-2 h-1.5 rounded-full bg-white/5"><div className="h-full rounded-full" style={{width: '68%', background: 'linear-gradient(90deg,#6366f1,#8b5cf6)'}}></div></div>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<p className="text-xs text-slate-500 mb-1">Velocity</p>
<p className="text-2xl text-white font-semibold tracking-tight">+24%</p>
<div className="mt-2 h-1.5 rounded-full bg-white/5"><div className="h-full rounded-full" style={{width: '80%', background: '#34d399'}}></div></div>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<p className="text-xs text-slate-500 mb-1">Members</p>
<p className="text-2xl text-white font-semibold tracking-tight">8</p>
<div className="mt-2 flex -space-x-2">
<span className="w-5 h-5 rounded-full bg-indigo-500 border border-[#0a0c14]"></span>
<span className="w-5 h-5 rounded-full bg-violet-500 border border-[#0a0c14]"></span>
<span className="w-5 h-5 rounded-full bg-emerald-500 border border-[#0a0c14]"></span>
</div>
</div>
</div>
<div className="space-y-2.5">
<div className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02]">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span className="text-sm text-slate-400 line-through">Finalize design system</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02]">
<iconify-icon className="text-indigo-400" icon="solar:record-circle-linear" width="18"></iconify-icon>
<span className="text-sm text-slate-200">Build onboarding flow</span>
<span className="ml-auto text-xs text-slate-500">Today</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02]">
<iconify-icon className="text-slate-600" icon="solar:record-circle-linear" width="18"></iconify-icon>
<span className="text-sm text-slate-200">Write launch announcement</span>
<span className="ml-auto text-xs text-slate-500">Fri</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24" id="pricing">
<div className="max-w-2xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>Simple, scalable pricing</h2>
<p className="mt-4 text-slate-400">Start free. Upgrade as your team grows.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 items-start">
<div className="p-7 rounded-2xl border border-white/10 bg-white/[0.03]">
<h3 className="text-white font-semibold tracking-tight">Starter</h3>
<p className="text-sm text-slate-500 mt-1">For small teams getting started</p>
<p className="mt-5 text-4xl font-semibold text-white tracking-tight">$0<span className="text-base text-slate-500 font-normal">/mo</span></p>
<a className="mt-6 block text-center text-sm text-white font-medium py-2.5 rounded-lg border border-white/10 hover:bg-white/5 transition" href="#">Get Started</a>
<ul className="mt-6 space-y-3 text-sm text-slate-400">
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon>Up to 5 members</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon>Unlimited tasks</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon>Basic dashboards</li>
</ul>
</div>
<div className="p-7 rounded-2xl border border-indigo-500/40 relative" style={{background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.12), rgba(139, 92, 246, 0.04))', boxShadow: '0 12px 40px rgba(99,102,241,0.2)'}}>
<span className="absolute -top-3 left-7 text-xs text-white px-3 py-1 rounded-full" style={{background: 'linear-gradient(135deg,#6366f1,#8b5cf6)'}}>Most popular</span>
<h3 className="text-white font-semibold tracking-tight">Pro</h3>
<p className="text-sm text-slate-400 mt-1">For growing remote teams</p>
<p className="mt-5 text-4xl font-semibold text-white tracking-tight">$12<span className="text-base text-slate-400 font-normal">/mo</span></p>
<a className="mt-6 block text-center text-sm text-white font-medium py-2.5 rounded-lg hover:opacity-90 transition" href="#" style={{background: 'linear-gradient(135deg,#6366f1,#8b5cf6)'}}>Start Free Trial</a>
<ul className="mt-6 space-y-3 text-sm text-slate-300">
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon>Unlimited members</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon>Real-time collaboration</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon>Advanced analytics</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon>AI summaries</li>
</ul>
</div>
<div className="p-7 rounded-2xl border border-white/10 bg-white/[0.03]">
<h3 className="text-white font-semibold tracking-tight">Enterprise</h3>
<p className="text-sm text-slate-500 mt-1">For organizations at scale</p>
<p className="mt-5 text-4xl font-semibold text-white tracking-tight">Custom</p>
<a className="mt-6 block text-center text-sm text-white font-medium py-2.5 rounded-lg border border-white/10 hover:bg-white/5 transition" href="#">Contact Sales</a>
<ul className="mt-6 space-y-3 text-sm text-slate-400">
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon>SSO &amp; SCIM</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon>Dedicated support</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon>Custom SLAs</li>
</ul>
</div>
</div>
</section>

<footer className="border-t border-white/5">
<div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg flex items-center justify-center text-white" style={{background: 'linear-gradient(135deg,#6366f1,#8b5cf6)'}}>
<iconify-icon icon="solar:water-linear" width="16"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>Flowdesk</span>
</div>
<nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
<a className="hover:text-white transition" href="#features">Features</a>
<a className="hover:text-white transition" href="#pricing">Pricing</a>
<a className="hover:text-white transition" href="#">Docs</a>
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Contact</a>
</nav>
<p className="text-xs text-slate-600">© 2024 Flowdesk Inc.</p>
</div>
</footer>

    </>
  );
}
