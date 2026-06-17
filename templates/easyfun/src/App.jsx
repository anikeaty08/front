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
sans: ["Inter", "sans-serif"],
serif: ["PT Serif", "serif"],
},
colors: {
brand: {
green: "#D6F866",
},
},
},
},
};



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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<img alt="Mossy nature background" className="w-full h-full object-cover opacity-30 object-top" src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&amp;w=3226&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-[#050806]/40 via-[#050806]/80 to-[#050806]"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(214,248,102,0.05)_0%,transparent_50%)]"></div>
</div>

<div className="relative z-10 flex flex-col items-center pb-24">

<nav className="w-full max-w-5xl mx-auto mt-6 px-4">
<div className="flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2.5">

<div className="flex items-center gap-2 pl-2 cursor-pointer">
<div className="text-brand-green">
<iconify-icon className="" height="24" icon="lucide:leaf" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<span className="font-semibold tracking-wide text-sm uppercase text-white/90">
              Verdant
            </span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#">
              Product
            </a>
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#">
              Solutions
            </a>
<a className="text-sm text-white/90 hover:text-white transition-colors relative flex flex-col items-center" href="#">
              Pricing
              <span className="absolute -bottom-2 w-1 h-1 bg-white rounded-full"></span>
</a>
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#">
              Resources
            </a>
<a className="text-sm text-white/60 hover:text-white transition-colors" href="#">
              Company
            </a>
</div>

<div className="flex items-center gap-3 pr-1">
<a className="text-sm text-white/80 hover:text-white px-4 py-2 transition-colors border border-transparent hover:border-white/10 rounded-full" href="#">
              Log in
            </a>
<button className="bg-brand-green hover:bg-[#c2e455] text-black text-sm font-medium px-5 py-2 rounded-full transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(214,248,102,0.2)]">
              Get Started
              <iconify-icon height="16" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="w-full max-w-4xl mx-auto mt-24 px-6 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors cursor-pointer">
<div className="w-2 h-2 rounded-full bg-brand-green shadow-[0_0_8px_rgba(214,248,102,0.6)]"></div>
<span className="text-xs text-white/80">Simple pricing</span>
<span className="text-xs text-white/60">
            Plans that scale with your team
          </span>
<iconify-icon className="text-white/40" height="14" icon="lucide:chevron-right" width="14"></iconify-icon>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05] mb-6">
          Choose the plan that
          <br/>
<span className="font-serif italic text-brand-green pr-2">grows</span>
          with you.
        </h1>
<p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
          Transparent pricing for teams moving from scattered data to trusted
          insights. Start free, then upgrade when you're ready.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="group bg-brand-green hover:bg-[#c2e455] text-black font-medium text-base px-8 py-3.5 rounded-full transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(214,248,102,0.25)] hover:shadow-[0_0_40px_rgba(214,248,102,0.4)]">
            Start Free Trial
            <iconify-icon className="transition-transform group-hover:translate-x-1" height="18" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<button className="text-white/80 hover:text-white font-medium text-base px-8 py-3.5 rounded-full transition-all border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 whitespace-nowrap">
            Compare Plans
          </button>
</div>
<div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-8">
<div className="flex items-center gap-2 text-sm text-white/50">
<iconify-icon className="text-white/40" height="16" icon="lucide:check-circle-2" width="16"></iconify-icon>
            No credit card
          </div>
<div className="flex items-center gap-2 text-sm text-white/50">
<iconify-icon className="text-white/40" height="16" icon="lucide:check-circle-2" width="16"></iconify-icon>
            14-day free trial
          </div>
<div className="flex items-center gap-2 text-sm text-white/50">
<iconify-icon className="text-white/40" height="16" icon="lucide:check-circle-2" width="16"></iconify-icon>
            Cancel anytime
          </div>
</div>
</main>

<section className="w-full max-w-6xl mx-auto mt-32 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="relative overflow-hidden group bg-[#111612]/60 backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-3xl p-8 flex flex-col min-h-[460px] transition-all duration-300">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-green/10 blur-[50px] rounded-full pointer-events-none transition-opacity opacity-40 group-hover:opacity-80"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-green mb-6">
<iconify-icon height="20" icon="lucide:sprout" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white/90 mb-2">
              Starter
            </h3>
<p className="text-base text-white/50 leading-relaxed mb-8">
              For small teams building their first shared source of truth.
            </p>
<div className="mb-8">
<span className="text-5xl font-semibold tracking-tight text-white">
                $19
              </span>
<span className="text-white/40">/seat/mo</span>
</div>
<button className="w-full bg-white/5 hover:bg-white/10 text-white font-medium text-base px-6 py-3 rounded-full transition-all border border-white/10 mb-8">
              Start trial
            </button>
<div className="space-y-4 text-sm text-white/55 mt-auto">
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-green" height="16" icon="lucide:check" width="16"></iconify-icon>
                Up to 5 data sources
              </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-green" height="16" icon="lucide:check" width="16"></iconify-icon>
                Weekly AI summaries
              </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-green" height="16" icon="lucide:check" width="16"></iconify-icon>
                Email support
              </div>
</div>
</div>
</div>
<div className="relative overflow-hidden group bg-[#111612]/80 backdrop-blur-xl border border-brand-green/30 hover:border-brand-green/50 rounded-3xl p-8 flex flex-col min-h-[460px] transition-all duration-300 shadow-[0_0_40px_rgba(214,248,102,0.08)]">
<div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-medium">
            Popular
          </div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-brand-green/20 blur-[60px] rounded-full pointer-events-none transition-opacity opacity-60 group-hover:opacity-100"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green mb-6">
<iconify-icon height="20" icon="lucide:leaf" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white/90 mb-2">
              Growth
            </h3>
<p className="text-base text-white/50 leading-relaxed mb-8">
              For scaling teams that need faster insights and more automation.
            </p>
<div className="mb-8">
<span className="text-5xl font-semibold tracking-tight text-white">
                $49
              </span>
<span className="text-white/40">/seat/mo</span>
</div>
<button className="w-full bg-brand-green hover:bg-[#c2e455] text-black font-medium text-base px-6 py-3 rounded-full transition-all shadow-[0_0_25px_rgba(214,248,102,0.2)] mb-8">
              Start trial
            </button>
<div className="space-y-4 text-sm text-white/55 mt-auto">
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-green" height="16" icon="lucide:check" width="16"></iconify-icon>
                Unlimited data sources
              </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-green" height="16" icon="lucide:check" width="16"></iconify-icon>
                Daily AI insights
              </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-green" height="16" icon="lucide:check" width="16"></iconify-icon>
                Workflow automations
              </div>
</div>
</div>
</div>
<div className="relative overflow-hidden group bg-[#111612]/60 backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-3xl p-8 flex flex-col min-h-[460px] transition-all duration-300">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-green/10 blur-[50px] rounded-full pointer-events-none transition-opacity opacity-40 group-hover:opacity-80"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-green mb-6">
<iconify-icon height="20" icon="lucide:shield-check" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white/90 mb-2">
              Enterprise
            </h3>
<p className="text-base text-white/50 leading-relaxed mb-8">
              Advanced governance, security, and support for larger
              organizations.
            </p>
<div className="mb-8">
<span className="text-5xl font-semibold tracking-tight text-white">
                Custom
              </span>
</div>
<button className="w-full bg-white/5 hover:bg-white/10 text-white font-medium text-base px-6 py-3 rounded-full transition-all border border-white/10 mb-8">
              Contact sales
            </button>
<div className="space-y-4 text-sm text-white/55 mt-auto">
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-green" height="16" icon="lucide:check" width="16"></iconify-icon>
                Dedicated success manager
              </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-green" height="16" icon="lucide:check" width="16"></iconify-icon>
                SSO and audit logs
              </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-green" height="16" icon="lucide:check" width="16"></iconify-icon>
                Custom data controls
              </div>
</div>
</div>
</div>
</section>
<section className="w-full max-w-6xl mx-auto mt-32 px-6">
<div className="flex flex-col items-center mb-16 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Compare every plan
          </h2>
<p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Start with the essentials, then add the automation, governance, and
            support your team needs as you scale.
          </p>
</div>
<div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111612]/60 backdrop-blur-xl">
<div className="overflow-x-auto">
<table className="w-full min-w-[720px] text-left">
<thead>
<tr className="border-b border-white/10">
<th className="p-5 text-sm font-medium text-white/50">Feature</th>
<th className="p-5 text-sm font-medium text-white/80">Starter</th>
<th className="p-5 text-sm font-medium text-brand-green">
                    Growth
                  </th>
<th className="p-5 text-sm font-medium text-white/80">
                    Enterprise
                  </th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr>
<td className="p-5 text-white/70">Data sources</td>
<td className="p-5 text-white/50">5</td>
<td className="p-5 text-white/80">Unlimited</td>
<td className="p-5 text-white/80">Unlimited</td>
</tr>
<tr>
<td className="p-5 text-white/70">AI insight cadence</td>
<td className="p-5 text-white/50">Weekly</td>
<td className="p-5 text-white/80">Daily</td>
<td className="p-5 text-white/80">Real-time</td>
</tr>
<tr>
<td className="p-5 text-white/70">Workflow automations</td>
<td className="p-5 text-white/50">—</td>
<td className="p-5 text-brand-green">
<iconify-icon height="18" icon="lucide:check" width="18"></iconify-icon>
</td>
<td className="p-5 text-brand-green">
<iconify-icon height="18" icon="lucide:check" width="18"></iconify-icon>
</td>
</tr>
<tr>
<td className="p-5 text-white/70">SSO and audit logs</td>
<td className="p-5 text-white/50">—</td>
<td className="p-5 text-white/50">Add-on</td>
<td className="p-5 text-brand-green">
<iconify-icon height="18" icon="lucide:check" width="18"></iconify-icon>
</td>
</tr>
<tr>
<td className="p-5 text-white/70">Support</td>
<td className="p-5 text-white/50">Email</td>
<td className="p-5 text-white/80">Priority</td>
<td className="p-5 text-white/80">Dedicated</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
<section className="w-full max-w-6xl mx-auto mt-32 px-6">
<div className="flex flex-col items-center mb-16 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Trusted by growing teams
          </h2>
<p className="text-lg text-white/50 max-w-xl leading-relaxed">
            Teams choose Verdant pricing because it stays predictable as their
            data, workflows, and decisions grow.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-[#111612]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 hover:border-white/10 transition-colors duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-[40px] rounded-full pointer-events-none group-hover:bg-brand-green/10 transition-colors"></div>
<div className="flex gap-1 text-brand-green mb-8">
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 font-medium">
              "The Growth plan paid for itself in the first month. We connected
              every data source, automated our weekly reporting, and finally
              gave leadership one trusted view."
            </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden border border-white/10">
<img alt="Sarah J." className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-white/90 font-medium tracking-tight">
                  Sarah Jenkins
                </h4>
<p className="text-sm text-white/40">VP of Data, TechCorp</p>
</div>
</div>
</div>
<div className="bg-[#111612]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 hover:border-white/10 transition-colors duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-[40px] rounded-full pointer-events-none group-hover:bg-brand-green/10 transition-colors"></div>
<div className="flex gap-1 text-brand-green mb-8">
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" height="16" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 font-medium">
              "Verdant gave us enterprise-grade governance without slowing the
              team down. The pricing was clear, and onboarding was refreshingly
              fast."
            </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden border border-white/10">
<img alt="Marcus T." className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-white/90 font-medium tracking-tight">
                  Marcus Thompson
                </h4>
<p className="text-sm text-white/40">CEO, Lumen Innovations</p>
</div>
</div>
</div>
</div>
</section>
<section className="w-full max-w-4xl mx-auto mt-32 px-6 relative mb-12">
<div className="absolute inset-0 bg-brand-green/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 bg-[#111612]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-12 md:p-20 flex flex-col items-center text-center overflow-hidden">
<div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-brand-green/50 to-transparent"></div>
<div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-green mb-8 shadow-[0_0_30px_rgba(214,248,102,0.1)]">
<iconify-icon height="28" icon="lucide:leaf" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
            Ready to pick your
            <span className="font-serif italic text-brand-green pr-2">plan</span>
            ?
          </h2>
<p className="text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            Start with a 14-day free trial, invite your team, and upgrade only
            when Verdant is delivering value.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-brand-green hover:bg-[#c2e455] text-black font-medium text-base px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(214,248,102,0.25)] hover:shadow-[0_0_40px_rgba(214,248,102,0.4)] whitespace-nowrap">
              Start Free Trial
              <iconify-icon height="18" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto text-white/80 hover:text-white font-medium text-base px-8 py-3.5 rounded-full transition-all border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 whitespace-nowrap">
              Talk to Sales
            </button>
</div>
</div>
</section>

<section className="w-full max-w-4xl mx-auto mt-32 px-6 border-t border-white/5 pt-12">
<h4 className="text-xs font-semibold tracking-[0.2em] text-white/30 text-center uppercase mb-10">
          Frequently asked questions
        </h4>
<div className="space-y-4">
<details className="group bg-[#111612]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 open:border-white/10 transition-colors">
<summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold tracking-tight text-white/90">
              Can I try Verdant before paying?
              <iconify-icon className="text-white/40 group-open:rotate-45 transition-transform" height="20" icon="lucide:plus" width="20"></iconify-icon>
</summary>
<p className="mt-4 text-white/50 leading-relaxed">
              Yes. Every paid plan starts with a 14-day free trial and no credit
              card is required.
            </p>
</details>
<details className="group bg-[#111612]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 open:border-white/10 transition-colors">
<summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold tracking-tight text-white/90">
              Can I change plans later?
              <iconify-icon className="text-white/40 group-open:rotate-45 transition-transform" height="20" icon="lucide:plus" width="20"></iconify-icon>
</summary>
<p className="mt-4 text-white/50 leading-relaxed">
              You can upgrade, downgrade, or cancel anytime. Changes apply at
              the start of your next billing cycle.
            </p>
</details>
<details className="group bg-[#111612]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 open:border-white/10 transition-colors">
<summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold tracking-tight text-white/90">
              What counts as a data source?
              <iconify-icon className="text-white/40 group-open:rotate-45 transition-transform" height="20" icon="lucide:plus" width="20"></iconify-icon>
</summary>
<p className="mt-4 text-white/50 leading-relaxed">
              A data source is any connected warehouse, SaaS tool, database,
              sheet, or API endpoint that Verdant syncs from.
            </p>
</details>
<details className="group bg-[#111612]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 open:border-white/10 transition-colors">
<summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold tracking-tight text-white/90">
              Do you offer annual billing?
              <iconify-icon className="text-white/40 group-open:rotate-45 transition-transform" height="20" icon="lucide:plus" width="20"></iconify-icon>
</summary>
<p className="mt-4 text-white/50 leading-relaxed">
              Yes. Annual plans include preferred pricing. Enterprise contracts
              can be tailored to procurement and security needs.
            </p>
</details>
</div>
</section>
</div>

    </>
  );
}
