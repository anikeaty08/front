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
      

<header className="fixed top-0 inset-x-0 h-14 border-b border-[#1f2025] bg-[#030407]/80 backdrop-blur-md z-50 flex items-center justify-center">
<div className="w-full max-w-[1100px] px-6 flex items-center justify-between z-10">
<a className="font-medium tracking-tighter text-sm flex items-center gap-2" href="#">
<span className="text-[#ffffff]">P V</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-[#b1b3b8]">
<a className="hover:text-[#ffffff] transition-colors" href="#">
            Platform
          </a>
<a className="hover:text-[#ffffff] transition-colors" href="#">
            Infrastructure
          </a>
<a className="hover:text-[#ffffff] transition-colors" href="#">Docs</a>
<a className="hover:text-[#ffffff] transition-colors" href="#">
            Enterprise
          </a>
</nav>
<div className="flex items-center gap-4">
<a className="text-sm text-[#b1b3b8] hover:text-[#ffffff] hidden sm:block transition-colors" href="#">
            Portal Login
          </a>
<a className="text-xs px-3 py-1.5 rounded-[8px] bg-[#ffffff] text-[#08090a] font-medium hover:bg-[#b1b3b8] transition-colors" href="#">
            Request Access
          </a>
</div>
</div>
</header>
<main className="flex-1 z-10 flex flex-col">

<section className="pt-32 pb-24 px-6 relative overflow-hidden flex flex-col items-center text-center">

<div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-[#00e5ff]/10 via-[#b400ff]/5 to-transparent pointer-events-none -z-10"></div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/5 text-xs text-[#00e5ff] mb-8 backdrop-blur-sm mt-12 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
<span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff] animate-pulse"></span>
          Enterprise Runtime v2.4
        </div>
<h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#8b93a1] max-w-[900px] leading-[1.05] mb-6">
          Decision Security Control Plane
          <br className="hidden sm:block"/>
          for AI Agents.
        </h1>
<p className="text-lg text-[#b1b3b8] max-w-[640px] leading-relaxed mb-10 font-normal">
          PrivateVault enforces deterministic runtime control for autonomous AI
          systems — preventing rogue execution, policy bypass, and adversarial
          drift in real time.
        </p>
<div className="flex items-center gap-4">
<a className="text-sm px-6 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="#">
            View Runtime
          </a>
<a className="text-sm px-6 py-2.5 rounded-full border border-[#1f2025] text-white hover:bg-[#111213] transition-colors flex items-center gap-2 bg-transparent" href="#">
            Simulate Attack
            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="mt-24 w-full max-w-[1100px] rounded-[12px] border border-[#2e2e32] bg-[#0a0a0c] shadow-[0_0_100px_-20px_rgba(0,229,255,0.15)] relative overflow-hidden text-left flex flex-col ring-1 ring-[#ffffff]/5">

<div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#ffffff]/20 to-transparent z-20"></div>

<div className="h-10 border-b border-[#2e2e32] flex items-center px-4 justify-between bg-[#08090a]/60 backdrop-blur-md z-10">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full border border-[#2e2e32]"></div>
<div className="w-2.5 h-2.5 rounded-full border border-[#2e2e32]"></div>
<div className="w-2.5 h-2.5 rounded-full border border-[#2e2e32]"></div>
</div>
<div className="text-xs text-[#8b93a1] font-mono flex items-center gap-2">
<iconify-icon icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
              runtimes/agent_consensus.rs
            </div>
<div className="w-10"></div>

</div>

<div className="flex flex-col md:flex-row h-[480px] bg-[#08090a]/40">

<div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-[#2e2e32] p-5 flex flex-col gap-4 bg-[#111213]/20">
<div className="flex items-center justify-between">
<div className="text-xs text-[#b1b3b8] font-medium uppercase tracking-widest">
                  Network Consensus
                </div>
<div className="w-2 h-2 rounded-full bg-[#27a644] shadow-[0_0_6px_#27a644]"></div>
</div>

<div className="flex-1 border border-[#2e2e32] rounded-[8px] bg-[#08090a] p-4 relative overflow-hidden flex flex-col gap-3">
<div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '12px 12px'}}></div>
<div className="flex items-center justify-between z-10 p-2.5 rounded-[4px] border border-[#2e2e32] bg-[#111213]">
<span className="text-xs font-mono text-[#8b93a1]">
                    Agent-Alpha
                  </span>
<span className="text-xs text-[#27a644] font-medium">
                    98% Trust
                  </span>
</div>
<div className="flex items-center justify-between z-10 p-2.5 rounded-[4px] border border-[#2e2e32] bg-[#111213]">
<span className="text-xs font-mono text-[#8b93a1]">
                    Agent-Beta
                  </span>
<span className="text-xs text-[#27a644] font-medium">
                    95% Trust
                  </span>
</div>
<div className="flex items-center justify-between z-10 p-2.5 rounded-[4px] border border-[#ff0055]/50 bg-[#ff0055]/10 shadow-[0_0_15px_rgba(255,0,85,0.2)] animate-pulse">
<span className="text-xs font-mono text-[#f34e52]">
                    Agent-Gamma
                  </span>
<span className="text-xs text-[#f34e52] font-medium">
                    42% Drift
                  </span>
</div>
<div className="mt-auto z-10 pt-4 border-t border-[#2e2e32]">
<div className="text-xs text-[#8b93a1] flex justify-between mb-2">
<span>Quorum Threshold</span>
<span className="text-[#ffffff]">2/3 Met</span>
</div>
<div className="relative h-1 w-full bg-[#1f2025] rounded-full">
<div className="absolute top-0 left-0 h-full bg-[#00e5ff] w-[66%] rounded-full shadow-[0_0_10px_#00e5ff]"></div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-2/3 p-5 flex flex-col">
<div className="flex items-center justify-between mb-4">
<div className="text-xs text-[#b1b3b8] font-medium uppercase tracking-widest">
                  Policy Enforcement Ledger
                </div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded-[4px] bg-[#27a644]/10 text-[#27a644] text-[0.65rem] font-mono border border-[#27a644]/20">
                    ALLOW
                  </span>
<span className="px-2 py-1 rounded-[4px] bg-[#f34e52]/10 text-[#f34e52] text-[0.65rem] font-mono border border-[#f34e52]/20">
                    BLOCK
                  </span>
</div>
</div>

<div className="flex-1 bg-[#08090a] rounded-[8px] border border-[#2e2e32] p-5 font-mono text-xs text-[#8b93a1] overflow-y-auto space-y-2.5 relative shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
<div className="flex gap-4">
<span className="text-[#2e2e32] w-4 text-right">01</span>
<span className="text-[#8fa6ff] w-10">INFO</span>
<span>Initiating transaction payload verification...</span>
</div>
<div className="flex gap-4">
<span className="text-[#2e2e32] w-4 text-right">02</span>
<span className="text-[#8fa6ff] w-10">INFO</span>
<span>
                    Policy
                    <span className="text-[#f79ce0]">FIN_04</span>
                    loaded. Parsing runtime constraints.
                  </span>
</div>
<div className="flex gap-4 bg-[#27a644]/5 -mx-5 px-5 py-1.5 border-l-[3px] border-[#27a644]">
<span className="text-[#2e2e32] w-4 text-right">03</span>
<span className="text-[#27a644] w-10">PASS</span>
<span className="text-[#ffffff]">
                    Constraint max_spend_limit validated.
                  </span>
</div>
<div className="flex gap-4">
<span className="text-[#2e2e32] w-4 text-right">04</span>
<span className="text-[#8fa6ff] w-10">INFO</span>
<span>
                    Querying consensus mesh for multi-agent validation...
                  </span>
</div>
<div className="flex gap-4">
<span className="text-[#2e2e32] w-4 text-right">05</span>
<span className="text-[#8fa6ff] w-10">INFO</span>
<span>
                    Agent-Alpha response:
                    <span className="text-[#27a644]">APPROVE</span>
                    (Weight: 1.2)
                  </span>
</div>
<div className="flex gap-4">
<span className="text-[#2e2e32] w-4 text-right">06</span>
<span className="text-[#8fa6ff] w-10">INFO</span>
<span>
                    Agent-Beta response:
                    <span className="text-[#27a644]">APPROVE</span>
                    (Weight: 1.0)
                  </span>
</div>
<div className="flex gap-4 bg-[#ff0055]/10 -mx-5 px-5 py-1.5 border-l-[3px] border-[#ff0055] shadow-[inset_10px_0_20px_-10px_rgba(255,0,85,0.2)]">
<span className="text-[#2e2e32] w-4 text-right">07</span>
<span className="text-[#ff0055] w-10">WARN</span>
<span className="text-[#ffffff]">
                    Agent-Gamma response:
                    <span className="text-[#ff0055]">REJECT</span>
                    (Drift threshold exceeded)
                  </span>
</div>
<div className="flex gap-4">
<span className="text-[#2e2e32] w-4 text-right">08</span>
<span className="text-[#8fa6ff] w-10">INFO</span>
<span>
                    Quorum met (2/3). Discarding outlier (Agent-Gamma).
                  </span>
</div>
<div className="flex gap-4 mt-5 pt-4 border-t border-[#2e2e32]">
<span className="text-[#2e2e32] w-4 text-right">09</span>
<span className="text-[#27a644] w-10">EXEC</span>
<span className="text-[#ffffff]">
                    Commit transaction to immutable ledger.
                  </span>
</div>
<div className="flex gap-4">
<span className="text-[#2e2e32] w-4 text-right">10</span>
<span className="text-[#8b93a1] w-10">HASH</span>
<span className="text-[#8b93a1]">
                    0x7f8a9b3e1c0d4a2f8b9c7d6e5f4a3b2c1d0e9f8a
                  </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-[#1f2025] bg-[#050608]/50 backdrop-blur-md z-10 relative">
<div className="max-w-[1100px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#2e2e32]/0 md:divide-[#2e2e32]">
<div className="flex flex-col items-center text-center px-4">
<span className="text-3xl font-mono text-[#00ffaa] drop-shadow-[0_0_10px_rgba(0,255,170,0.5)]">
              99.999%
            </span>
<span className="text-xs text-[#8b93a1] mt-2 uppercase tracking-widest">
              SLA UPTIME
            </span>
</div>
<div className="flex flex-col items-center text-center px-4 border-[#2e2e32] border-l md:border-l-0">
<span className="text-3xl font-mono text-[#00e5ff] drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">
              &lt;50ms
            </span>
<span className="text-xs text-[#8b93a1] mt-2 uppercase tracking-widest">
              ENFORCEMENT LATENCY
            </span>
</div>
<div className="flex flex-col items-center text-center px-4 border-[#2e2e32] border-t md:border-t-0 pt-8 md:pt-0">
<span className="text-3xl font-mono text-[#b400ff] drop-shadow-[0_0_10px_rgba(180,0,255,0.5)]">
              $100B+
            </span>
<span className="text-xs text-[#8b93a1] mt-2 uppercase tracking-widest">
              TRANSACTIONS SECURED
            </span>
</div>
<div className="flex flex-col items-center text-center px-4 border-[#2e2e32] border-l border-t md:border-t-0 pt-8 md:pt-0">
<span className="text-3xl font-mono text-[#ffffff] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              FIPS 140-3
            </span>
<span className="text-xs text-[#8b93a1] mt-2 uppercase tracking-widest">
              COMPLIANCE
            </span>
</div>
</div>
</section>

<section className="py-32 px-6 overflow-hidden z-10">
<div className="max-w-[1100px] mx-auto">
<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-16">
<h2 className="w-full md:w-1/2 text-3xl md:text-5xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#8b93a1] leading-[1.15]">
              Runtime Control Plane
              <br/>
              for Autonomous Systems.
            </h2>
<div className="w-full md:w-1/2 flex flex-col items-start gap-5">
<p className="text-base text-[#b1b3b8] leading-relaxed">
                Engineered for defense-grade reliability. PrivateVault evaluates
                multi-agent requests deterministically, isolating adversarial
                injections and hallucinations before they breach your core
                network.
              </p>
<a className="text-sm text-[#ffffff] font-medium flex items-center gap-1.5 hover:text-[#8fa6ff] transition-colors group" href="#">
                Explore the mesh network
                <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="w-full h-[360px] bg-[#050608] rounded-[12px] border border-[#1f2025] relative shadow-[0_0_60px_-15px_rgba(0,229,255,0.1)] flex items-center justify-center overflow-hidden ring-1 ring-white/5">
<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="flex items-center gap-4 md:gap-8 z-10 w-full overflow-x-auto px-8 no-scrollbar min-w-max md:justify-center">

<div className="flex-shrink-0 flex flex-col items-center gap-3">
<div className="w-16 h-16 rounded-[8px] border border-[#1f2025] bg-[#0a0a0c] flex items-center justify-center text-[#ffffff]">
<iconify-icon icon="solar:server-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs text-[#8b93a1] font-mono">
                  Agent Request
                </span>
</div>
<iconify-icon className="text-[#2e2e32]" icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>

<div className="flex-shrink-0 flex flex-col items-center gap-3">
<div className="w-24 h-24 rounded-[12px] border border-[#00e5ff]/40 bg-[#050608] flex items-center justify-center relative p-2 shadow-[0_0_40px_rgba(0,229,255,0.2)] ring-1 ring-[#00e5ff]/20">
<div className="grid grid-cols-2 gap-1.5 w-full h-full">
<div className="bg-[#111213] rounded-[4px] border border-[#2e2e32]"></div>
<div className="bg-[#111213] rounded-[4px] border border-[#2e2e32]"></div>
<div className="bg-[#111213] rounded-[4px] border border-[#2e2e32]"></div>
<div className="bg-[#111213] rounded-[4px] border border-[#2e2e32]"></div>
</div>
</div>
<span className="text-xs text-[#00e5ff] font-mono">
                  Consensus Mesh
                </span>
</div>
<iconify-icon className="text-[#2e2e32]" icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>

<div className="flex-shrink-0 flex flex-col items-center gap-3">
<div className="w-20 h-20 rounded-[8px] border border-[#b400ff]/40 bg-[#050608] flex items-center justify-center text-[#b400ff] shadow-[0_0_30px_rgba(180,0,255,0.2)]">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="text-xs text-[#b400ff] font-mono">
                  Policy Engine
                </span>
</div>

<div className="flex flex-col gap-6 ml-2 md:ml-4 relative">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#00ffaa]" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div className="flex-shrink-0 px-4 py-2 rounded-[8px] border border-[#00ffaa]/40 bg-[#00ffaa]/10 text-[#00ffaa] text-xs font-mono shadow-[0_0_15px_rgba(0,255,170,0.15)]">
                    EXECUTE
                  </div>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#ff0055]" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div className="flex-shrink-0 px-4 py-2 rounded-[8px] border border-[#ff0055]/40 bg-[#ff0055]/10 text-[#ff0055] text-xs font-mono shadow-[0_0_15px_rgba(255,0,85,0.15)]">
                    BLOCK
                  </div>
</div>
</div>
<iconify-icon className="text-[#2e2e32] ml-2 md:ml-4" icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>

<div className="flex-shrink-0 flex flex-col items-center gap-3">
<div className="w-16 h-16 rounded-[8px] border border-[#1f2025] bg-[#0a0a0c] flex items-center justify-center text-[#ffffff]">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs text-[#8b93a1] font-mono">
                  Replay Ledger
                </span>
</div>
</div>
</div>
<div className="mt-4 flex gap-4 text-xs font-mono text-[#8b93a1] uppercase tracking-widest">
<span>1.1 Architecture</span>
<span className="text-[#2e2e32]">|</span>
<span>Consensus Flow</span>
</div>
</div>
</section>

<section className="py-32 px-6 overflow-hidden bg-gradient-to-b from-[#030407] to-[#0a0a0c] border-t border-[#1f2025] z-10">
<div className="max-w-[1100px] mx-auto">
<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-16">
<h2 className="w-full md:w-1/2 text-3xl md:text-5xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#8b93a1] leading-[1.15]">
              Prevent Agents
              <br/>
              From Going Rogue.
            </h2>
<div className="w-full md:w-1/2 flex flex-col items-start gap-4">
<p className="text-base text-[#b1b3b8] leading-relaxed">
                Every agent action is cryptographically hashed to a tamper-proof
                ledger. Prove compliance to regulatory bodies with bit-for-bit
                event replays, satisfying SOC2, HIPAA, and DoD IL6 requirements.
              </p>
</div>
</div>

<div className="w-full rounded-[12px] border border-[#1f2025] bg-[#050608] overflow-hidden shadow-[0_0_50px_-10px_rgba(180,0,255,0.1)] relative ring-1 ring-[#ffffff]/5">
<div className="h-11 border-b border-[#1f2025] bg-[#030407] flex items-center px-5 gap-4 text-xs font-mono text-[#8b93a1]">
<span className="text-[#ffffff]">audit_log_v2.json</span>
<span className="text-[#2e2e32]">|</span>
<span>Timestamp: 1718294400</span>
<span className="text-[#2e2e32]">|</span>
<span>Node: PV-US-EAST-1</span>
</div>
<div className="p-5 font-mono text-xs text-[#b1b3b8] leading-[1.8] whitespace-pre overflow-x-auto">
<span className="text-[#2e2e32] mr-4 inline-block w-4 text-right">
                1
              </span>
              {
              <span className="text-[#2e2e32] mr-4 inline-block w-4 text-right">
                2
              </span>
              "event_id":
              <span className="text-[#f79ce0]">"ev_9a8b7c6d"</span>
              ,
              <span className="text-[#2e2e32] mr-4 inline-block w-4 text-right">
                3
              </span>
              "timestamp":
              <span className="text-[#8fa6ff]">1718294400</span>
              ,
              <span className="text-[#2e2e32] mr-4 inline-block w-4 text-right">
                4
              </span>
              "agent": {
              <span className="text-[#2e2e32] mr-4 inline-block w-4 text-right">
                5
              </span>
              "id":
              <span className="text-[#f79ce0]">"agt_alpha_01"</span>
              ,
              <span className="text-[#2e2e32] mr-4 inline-block w-4 text-right">
                6
              </span>
              "trust_score":
              <span className="text-[#8fa6ff]">0.982</span>
<span className="text-[#2e2e32] mr-4 inline-block w-4 text-right">
                7
              </span>
              },
              <div className="bg-[#f34e52]/10 -mx-5 px-5 border-l-[3px] border-[#f34e52]">
<span className="text-[#2e2e32] mr-4 inline-block w-4 text-right">
                  8
                </span>
<span className="text-[#f34e52] line-through">
                  "action": "execute_transfer",
                </span>
</div>
<div className="bg-[#27a644]/10 -mx-5 px-5 border-l-[3px] border-[#27a644]">
<span className="text-[#2e2e32] mr-4 inline-block w-4 text-right">
                  9
                </span>
<span className="text-[#27a644]">"action": "block_transfer",</span>
</div>
<span className="text-[#2e2e32] mr-4 inline-block w-4 text-right">
                10
              </span>
              "policy_evaluation": {
              <span className="text-[#2e2e32] mr-4 inline-block w-4 text-right">
                11
              </span>
              "matched_rule":
              <span className="text-[#f79ce0]">"fin_drift_threshold"</span>
              ,
              <span className="text-[#2e2e32] mr-4 inline-block w-4 text-right">
                12
              </span>
              "result":
              <span className="text-[#f34e52]">"DENY"</span>
<span className="text-[#2e2e32] mr-4 inline-block w-4 text-right">
                13
              </span>
              },
              <span className="text-[#2e2e32] mr-4 inline-block w-4 text-right">
                14
              </span>
              "state_hash":
              <span className="text-[#f79ce0]">"0x8f2d4e1a7b9c99b1"</span>
<span className="text-[#2e2e32] mr-4 inline-block w-4 text-right">
                15
              </span>
              }
            </div>
</div>
<div className="mt-4 flex gap-4 text-xs font-mono text-[#8b93a1] uppercase tracking-widest">
<span>1.2 Audit</span>
<span className="text-[#2e2e32]">|</span>
<span>Ledger Diff</span>
</div>
</div>
</section>

<section className="py-32 px-6 z-10">
<div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="rounded-[12px] border border-[#1f2025] bg-[#050608] p-10 relative overflow-hidden group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
<iconify-icon className="text-[#8fa6ff]" icon="solar:history-linear" strokeWidth="1.5" width="64"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-[8px] border border-[#2e2e32] bg-[#08090a] flex items-center justify-center text-[#8fa6ff] mb-6">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#ffffff] mb-3 tracking-tight">
              Replay Every Autonomous Decision
            </h3>
<p className="text-sm text-[#b1b3b8] leading-relaxed mb-8 max-w-[85%]">
              Rewind execution, inspect trust changes, and replay consensus
              decisions with distributed tracing. A black-box flight recorder
              for AI.
            </p>
<a className="text-xs text-[#ffffff] font-medium flex items-center gap-1.5 hover:text-[#8fa6ff] transition-colors" href="#">
              Security Architecture
              <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="rounded-[12px] border border-[#1f2025] bg-[#050608] p-10 relative overflow-hidden group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
<iconify-icon className="text-[#f34e52]" icon="solar:radar-linear" strokeWidth="1.5" width="64"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-[8px] border border-[#2e2e32] bg-[#08090a] flex items-center justify-center text-[#f34e52] mb-6">
<iconify-icon icon="solar:radar-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#ffffff] mb-3 tracking-tight">
              F1-Grade Observability
            </h3>
<p className="text-sm text-[#b1b3b8] leading-relaxed mb-8 max-w-[85%]">
              Monitor policy enforcement latency, trust drift, and runtime
              integrity scores in real time with mission-control telemetry.
            </p>
<a className="text-xs text-[#ffffff] font-medium flex items-center gap-1.5 hover:text-[#8fa6ff] transition-colors" href="#">
              Threat Mitigation
              <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#030407] z-10 border-t border-[#1f2025]">
<div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="rounded-[12px] bg-gradient-to-br from-[#0a0b10] to-[#030407] p-10 md:p-12 flex flex-col justify-between min-h-[360px] border border-[#1f2025] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-[#00e5ff]" icon="solar:buildings-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium text-[#8b93a1] tracking-tight uppercase">
                Global Tier-1 Bank
              </span>
</div>
<p className="text-2xl md:text-3xl font-medium text-[#ffffff] leading-[1.2] tracking-tighter">
              "PrivateVault provided the zero-trust guarantees we needed to
              confidently deploy LLM agents across our global algorithmic
              trading infrastructure."
            </p>
</div>

<div className="rounded-[12px] bg-gradient-to-br from-[#0a0b10] to-[#030407] p-10 md:p-12 flex flex-col justify-between min-h-[360px] border border-[#1f2025] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-[#00ffaa]" icon="solar:shield-network-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium text-[#8b93a1] tracking-tight uppercase">
                Defense Contractor
              </span>
</div>
<p className="text-2xl md:text-3xl font-medium text-[#ffffff] leading-[1.2] tracking-tighter">
              "Their hardened consensus engine and deterministic replay
              capabilities are foundational to our autonomous defense
              initiatives."
            </p>
</div>
</div>
</section>

<section className="py-40 px-6 text-center border-t border-[#1f2025] bg-[#050608] z-10 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00e5ff] opacity-[0.03] blur-[100px] pointer-events-none"></div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#8b93a1] mb-10">
          Secure your mission-critical AI today.
        </h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="text-sm px-6 py-3 rounded-[8px] bg-[#ffffff] text-[#08090a] font-medium hover:bg-[#b1b3b8] transition-colors w-full sm:w-auto" href="#">
            Request Access
          </a>
<a className="text-sm px-6 py-3 rounded-[8px] border border-[#2e2e32] text-[#ffffff] hover:bg-[#111213] transition-colors w-full sm:w-auto bg-transparent" href="#">
            Talk to Engineering
          </a>
</div>
</section>
</main>

<footer className="border-t border-[#1f2025] py-16 px-6 text-sm text-[#8b93a1] z-10 bg-[#030407]">
<div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
<div className="col-span-2 md:col-span-2">
<a className="font-medium tracking-tighter text-sm flex items-center gap-2 mb-4" href="#">
<span className="text-[#ffffff]">P V</span>
</a>
<p className="text-xs text-[#8b93a1] max-w-[240px] leading-relaxed">
            Deterministic governance and trust runtime for autonomous AI agents.
          </p>
</div>
<div>
<div className="font-medium text-[#ffffff] mb-4">Product</div>
<ul className="space-y-3">
<li>
<a className="hover:text-[#ffffff] transition-colors" href="#">
                Consensus Mesh
              </a>
</li>
<li>
<a className="hover:text-[#ffffff] transition-colors" href="#">
                Policy Engine
              </a>
</li>
<li>
<a className="hover:text-[#ffffff] transition-colors" href="#">
                Audit Ledger
              </a>
</li>
<li>
<a className="hover:text-[#ffffff] transition-colors" href="#">
                Enterprise
              </a>
</li>
</ul>
</div>
<div>
<div className="font-medium text-[#ffffff] mb-4">Developers</div>
<ul className="space-y-3">
<li>
<a className="hover:text-[#ffffff] transition-colors" href="#">
                Documentation
              </a>
</li>
<li>
<a className="hover:text-[#ffffff] transition-colors" href="#">
                API Reference
              </a>
</li>
<li>
<a className="hover:text-[#ffffff] transition-colors" href="#">
                GitHub
              </a>
</li>
<li>
<a className="hover:text-[#ffffff] transition-colors" href="#">
                Status
              </a>
</li>
</ul>
</div>
<div>
<div className="font-medium text-[#ffffff] mb-4">Company</div>
<ul className="space-y-3">
<li>
<a className="hover:text-[#ffffff] transition-colors" href="#">
                About
              </a>
</li>
<li>
<a className="hover:text-[#ffffff] transition-colors" href="#">
                Blog
              </a>
</li>
<li>
<a className="hover:text-[#ffffff] transition-colors" href="#">
                Careers
              </a>
</li>
<li>
<a className="hover:text-[#ffffff] transition-colors" href="#">
                Contact
              </a>
</li>
</ul>
</div>
</div>
<div className="max-w-[1100px] mx-auto mt-16 pt-8 border-t border-[#2e2e32] flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
<span>© 2024 PrivateVault Inc. All rights reserved.</span>
<div className="flex gap-6">
<a className="hover:text-[#ffffff] transition-colors" href="#">
            Privacy Policy
          </a>
<a className="hover:text-[#ffffff] transition-colors" href="#">
            Terms of Service
          </a>
</div>
</div>
</footer>

    </>
  );
}
