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
      

<div className="fixed inset-0 z-0 pointer-events-none opacity-20" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, theme(\'colors.zinc.800\') 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>

<nav className="relative z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer">
<div className="w-6 h-6 rounded-md flex items-center justify-center" style={{backgroundColor: '#21D8CF'}}>
<iconify-icon className="text-zinc-950 text-base" icon="solar:infinity-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-white text-xl font-semibold tracking-tight">
            Genus
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#how-it-works">
            How It Works
          </a>
<a className="hover:text-white transition-colors" href="#science">
            The Science
          </a>
<a className="hover:text-white transition-colors" href="#organizations">
            For Organizations
          </a>
<a className="hover:text-white transition-colors" href="#signin">
            Sign In
          </a>
</div>
<a className="text-sm font-medium px-4 py-2 rounded-full text-zinc-950 transition-opacity hover:opacity-90" href="#start" style={{backgroundColor: '#21D8CF'}}>
          Get Started Free
        </a>
</div>
</nav>

<section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center text-center">
<div className="absolute inset-0 -z-10 flex flex-col items-center justify-start overflow-hidden pointer-events-none">
<div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-[#21D8CF]/10 to-transparent"></div>
<div className="w-[800px] h-[500px] bg-[#21D8CF] opacity-20 blur-[120px] rounded-full mix-blend-screen -translate-y-1/3"></div>
</div>

<div className="w-full max-w-4xl rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-md py-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 shadow-2xl relative overflow-hidden">
<span className="w-2 h-2 rounded-full bg-[#21D8CF] animate-pulse shadow-[0_0_8px_#21D8CF]"></span>
<span className="tracking-wide">Provably Stable Talent Allocation</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
        The Right Person.
        <br/>
<span className="text-zinc-500">The Right Role.</span>
<span className="" style={{color: '#21D8CF', textShadow: '0 0 40px rgba(33, 216, 207, 0.5)'}}>
          Provably.
        </span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-normal mb-10 leading-relaxed">
        Genus uses deferred acceptance algorithms to allocate talent across your
        organization — fairly, stably, and with zero blocking pairs guaranteed.
      </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full text-zinc-950 font-medium text-base transition-transform hover:scale-[1.02]" href="#start" style={{backgroundColor: '#21D8CF'}}>
          Get Started
        </a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-medium text-base border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center gap-2" href="#science">
          See How It Works
          <iconify-icon className="text-lg" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>

<div className="w-full max-w-4xl border-y border-white/5 bg-zinc-900/20 backdrop-blur-sm py-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
<div className="flex items-center gap-3 text-sm font-medium text-zinc-300">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" style={{color: '#21D8CF', strokeWidth: '1.5'}}></iconify-icon>
          0 Blocking Pairs Guaranteed
        </div>
<div className="hidden md:block w-px h-4 bg-white/10"></div>
<div className="flex items-center gap-3 text-sm font-medium text-zinc-300">
<iconify-icon className="text-xl animate-pulse" icon="solar:link-circle-linear" style={{color: '#21D8CF', strokeWidth: '1.5'}}></iconify-icon>
          100% Stable Matches
        </div>
<div className="hidden md:block w-px h-4 bg-white/10"></div>
<div className="flex items-center gap-3 text-sm font-medium text-zinc-300">
<iconify-icon className="text-xl" icon="solar:server-square-linear" style={{color: '#21D8CF', strokeWidth: '1.5'}}></iconify-icon>
          1000+ Simulations Run
        </div>
</div>
</section>

<section className="relative z-10 py-24 px-6 bg-zinc-950" id="how-it-works">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16 text-center">
          Ad-hoc talent decisions
          <span className="text-zinc-500">are costing you</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-zinc-950">
<iconify-icon className="text-2xl text-zinc-400" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
              Bias &amp; Politics
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
              The best candidate doesn't always win — the most visible one does.
              Manual allocation is inherently flawed by human bias.
            </p>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-zinc-950">
<iconify-icon className="text-2xl text-zinc-400" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
              Mismatches
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
              People end up in roles they didn't want and aren't suited for,
              leading to turnover, resentment, and lower overall productivity.
            </p>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-zinc-950">
<iconify-icon className="text-2xl text-zinc-400" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
              No Audit Trail
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed">
              Nobody can explain why someone got a role over someone else.
              Decisions lack mathematical backing or provable fairness.
            </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-y border-white/5 bg-zinc-900/10" id="science">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
            Not just software —
            <br/>
<span style={{color: '#21D8CF'}}>a mechanism</span>
</h2>
<div className="space-y-6 text-zinc-400 text-base leading-relaxed mb-10">
<p className="">
              Deferred Acceptance (Gale–Shapley) is a matching algorithm that
              produces
              <span className="text-zinc-200 font-medium">stable outcomes</span>
              — meaning no candidate and role would mutually prefer each other
              over their current assignment.
            </p>
<p className="">
              Genus proves this on every single run, turning organizational
              design from an art into a provable science.
            </p>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-zinc-900/30">
<iconify-icon className="text-xl mt-0.5" icon="solar:check-circle-linear" style={{color: '#21D8CF', strokeWidth: '1.5'}}></iconify-icon>
<div>
<span className="text-white text-sm font-medium block mb-1">
                  Blocking Pairs: 0
                </span>
<span className="text-zinc-500 text-xs">
                  Always, mathematically guaranteed by design.
                </span>
</div>
</div>
<div className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-zinc-900/30">
<iconify-icon className="text-xl mt-0.5" icon="solar:graph-up-linear" style={{color: '#21D8CF', strokeWidth: '1.5'}}></iconify-icon>
<div>
<span className="text-white text-sm font-medium block mb-1">
                  vs Random Assignment
                </span>
<span className="text-zinc-500 text-xs">
                  DA matches outperform random allocation by ~40% on overall
                  surplus.
                </span>
</div>
</div>
<div className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-zinc-900/30">
<iconify-icon className="text-xl mt-0.5" icon="solar:shield-user-linear" style={{color: '#21D8CF', strokeWidth: '1.5'}}></iconify-icon>
<div>
<span className="text-white text-sm font-medium block mb-1">
                  Algorithm Properties
                </span>
<span className="text-zinc-500 text-xs">
                  Candidate-proposing, worker-protective configuration.
                </span>
</div>
</div>
</div>
</div>

<div className="relative p-8 rounded-3xl border border-white/5 bg-zinc-950 shadow-2xl flex flex-col items-center justify-center min-h-[400px] overflow-hidden">

<div className="w-full max-w-sm flex justify-between relative mb-8">

<div className="flex flex-col gap-6 z-10">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-medium text-white shadow-lg">
                C1
              </div>
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-medium text-white shadow-lg">
                C2
              </div>
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-medium text-white shadow-lg">
                C3
              </div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-0 opacity-60">
<svg className="absolute inset-0" height="100%" width="100%">

<path d="M40 40 L 340 100" fill="none" stroke="#3f3f46" stroke-dasharray="4 4" strokeWidth="1"></path>
<path d="M40 100 L 340 40" fill="none" stroke="#3f3f46" stroke-dasharray="4 4" strokeWidth="1"></path>

<path className="animate-pulse" d="M40 40 L 340 40" fill="none" stroke="#21D8CF" strokeWidth="2" style={{opacity: '0.8'}}></path>
<path className="animate-pulse" d="M40 100 L 340 160" fill="none" stroke="#21D8CF" strokeWidth="2" style={{opacity: '0.8'}}></path>
<path className="animate-pulse" d="M40 160 L 340 100" fill="none" stroke="#21D8CF" strokeWidth="2" style={{opacity: '0.8'}}></path>
</svg>
</div>

<div className="flex flex-col gap-6 z-10">
<div className="w-10 h-10 rounded-md bg-zinc-900 border border-[#21D8CF]/50 flex items-center justify-center text-xs font-medium text-[#21D8CF] shadow-[0_0_15px_rgba(33,216,207,0.1)]">
                R1
              </div>
<div className="w-10 h-10 rounded-md bg-zinc-900 border border-[#21D8CF]/50 flex items-center justify-center text-xs font-medium text-[#21D8CF] shadow-[0_0_15px_rgba(33,216,207,0.1)]">
                R2
              </div>
<div className="w-10 h-10 rounded-md bg-zinc-900 border border-[#21D8CF]/50 flex items-center justify-center text-xs font-medium text-[#21D8CF] shadow-[0_0_15px_rgba(33,216,207,0.1)]">
                R3
              </div>
</div>
</div>

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
<span className="text-zinc-600 line-through">Round 1</span>
<iconify-icon className="text-zinc-600" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-zinc-600 line-through">Round 2</span>
<iconify-icon className="text-zinc-600" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-white font-medium flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: '#21D8CF'}}></span>
              Stable
            </span>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 bg-zinc-950" id="organizations">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16 text-center max-w-2xl mx-auto">
          Built for organizations that take
          <span className="text-zinc-500">allocation seriously</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">

<div className="bg-zinc-950 p-10 flex flex-col">
<iconify-icon className="text-3xl mb-6" icon="solar:shield-keyhole-linear" style={{color: '#21D8CF', strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
              OrgAdmin
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed flex-1">
              Set up your talent pool, run matching rounds, review and confirm
              assignments — all from one comprehensive, auditable dashboard.
            </p>
</div>

<div className="bg-zinc-950 p-10 flex flex-col">
<iconify-icon className="text-3xl mb-6" icon="solar:clipboard-check-linear" style={{color: '#21D8CF', strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
              HR / Evaluator
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed flex-1">
              Score candidates against vacancies with a structured fit-score
              system. Replace gut-feel rankings with standardized data inputs.
            </p>
</div>

<div className="bg-zinc-950 p-10 flex flex-col">
<iconify-icon className="text-3xl mb-6" icon="solar:user-hand-up-linear" style={{color: '#21D8CF', strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
              Candidate
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed flex-1">
              Rank your preferred roles using an intuitive drag-and-drop
              interface. Your preferences are taken seriously — the algorithm
              protects them.
            </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-zinc-900/10">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16 text-center">
          Everything you need.
          <br/>
<span className="text-zinc-500">Nothing you don't.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">

<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-xl text-zinc-500" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">
                Multi-tenant orgs
              </h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                Each organization has its own isolated data environment and
                independent matching pool.
              </p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-xl text-zinc-500" icon="solar:reorder-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-medium text-white mb-1">
                Drag-to-rank preferences
              </h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                Candidates rank available vacancies with a clean, frictionless
                drag-and-drop interface.
              </p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-xl text-zinc-500" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">
                Stability metrics
              </h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                Every matching run reports critical economics metrics: blocking
                pairs, surplus, and assortativeness.
              </p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-xl text-zinc-500" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-medium text-white mb-1">
                Human oversight
              </h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                Admins maintain the power to confirm or override algorithm
                suggestions — with every decision securely logged.
              </p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-xl text-zinc-500" icon="solar:lock-keyhole-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">
                Role-gated access
              </h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                Strict RBAC ensures OrgAdmin, Employer, Evaluator, and Candidate
                each sees only what they need.
              </p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-xl text-zinc-500" icon="solar:test-tube-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-medium text-white mb-1">
                Simulation Lab
              </h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                Reproduce theoretical academic results directly in-app with
                highly configurable parameters.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 bg-zinc-950 border-t border-white/5 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-10" style={{backgroundColor: '#21D8CF'}}></div>
<div className="relative max-w-3xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          Ready to match with confidence?
        </h2>
<p className="text-lg text-zinc-400 mb-10">
          Create your organization in minutes. Run your first provably stable
          match today.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full text-zinc-950 font-medium text-base transition-opacity hover:opacity-90" href="#start" style={{backgroundColor: '#21D8CF'}}>
            Get Started Free
          </a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-medium text-base hover:text-zinc-300 transition-colors" href="#contact">
            Talk to us
          </a>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/5 bg-zinc-950 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded flex items-center justify-center" style={{backgroundColor: '#21D8CF'}}>
<iconify-icon className="text-zinc-950 text-xs" icon="solar:infinity-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm text-zinc-500 font-medium tracking-tight">
            Genus © 2026
          </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-medium text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#how-it-works">
            How It Works
          </a>
<a className="hover:text-zinc-300 transition-colors" href="#science">
            The Science
          </a>
<a className="hover:text-zinc-300 transition-colors" href="#signin">
            Sign In
          </a>
<a className="hover:text-zinc-300 transition-colors" href="#privacy">
            Privacy
          </a>
<a className="hover:text-zinc-300 transition-colors" href="#terms">
            Terms
          </a>
</div>
<div className="text-xs text-zinc-600 font-medium">
          Stable matches. Auditable decisions. Real economics.
        </div>
</div>
</footer>

    </>
  );
}
