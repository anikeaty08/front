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



                !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            


        function toggleChat() {
            const chatWindow = document.getElementById('ai-chat-window');
            const toggleBtn = document.getElementById('chat-toggle-btn');
            
            if (chatWindow.classList.contains('hidden')) {
                chatWindow.classList.remove('hidden');
                chatWindow.classList.add('chat-open');
                // Hide typing indicator after 2s for effect
                setTimeout(() => {
                    document.getElementById('typing-indicator').style.display = 'none';
                }, 2000);
            } else {
                chatWindow.classList.add('hidden');
                chatWindow.classList.remove('chat-open');
            }
        }

        function toggleVoiceMode() {
            const overlay = document.getElementById('voice-overlay');
            if (overlay.classList.contains('hidden')) {
                overlay.classList.remove('hidden');
            } else {
                overlay.classList.add('hidden');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-card border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="relative w-10 h-10 flex items-center justify-center logo-pulse bg-gradient-to-tr from-[#3B82F6] to-[#60A5FA] rounded-lg text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]">
<iconify-icon className="" icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex flex-col justify-center">
<div className="text-xl font-bold tracking-tight text-white leading-none">
                        Tensor<span className="text-[#60A5FA] drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">Lock</span>
</div>
<div className="text-[0.6rem] font-semibold tracking-[0.25em] text-[#94A3B8] mt-1 uppercase">Agentic FIDDA Shield Provider</div>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-400">
<a className="transition-colors hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" href="#how-it-works">How It Works</a>
<a className="transition-colors hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" href="#agents">The Agents</a>
<a className="transition-colors hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" href="#deliverables">What You Get</a>
<a className="transition-colors hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" href="#pricing">Pricing</a>
<a className="transition-colors hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" href="#faq">FAQ</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-[#0B1120] px-4 py-2 text-xs font-semibold tracking-wide transition-all rounded-sm hover:bg-[#F1F5F9] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] border border-white/20" href="#contact">
                START ENGAGEMENT
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-36 pr-6 pb-20 pl-6 relative">

<div className="aura-background-component top-0 w-full -z-10 absolute h-full pointer-events-none opacity-80 mix-blend-screen">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yWZ2Tbe094Fsjgy9NRnD"></div>

</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="flex flex-col items-center justify-center gap-4 mb-8">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 backdrop-blur-sm border text-xs text-[#60A5FA] tracking-wide border-[#3B82F6]/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#60A5FA]"></span>
</span>
                    ADVERSARIAL VETTING PROTOCOL
                </div>

<div className="flex flex-wrap justify-center items-center gap-3 text-[10px] md:text-xs font-medium text-slate-400 tracking-widest uppercase">
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-white/10 bg-[#1E293B]/40 backdrop-blur-md">
<iconify-icon className="text-[#60A5FA]" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                        NSPM-33 Compliant
                    </div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-white/10 bg-[#1E293B]/40 backdrop-blur-md">
<iconify-icon className="text-[#60A5FA]" icon="solar:file-check-linear" strokeWidth="1.5"></iconify-icon>
                        INNOVATE Act 2025
                    </div>
</div>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-white text-glow">Don’t Let a <span className="text-white/30">Silent Rejection</span><br/> Kill Your Research Contract.</h1>
<div className="md:text-xl text-lg italic text-white mb-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">Identify disqualifying findings before the Government does — not after</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3 bg-[#3B82F6] text-white text-sm font-semibold tracking-wide hover:bg-[#2563EB] transition-all rounded-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] border border-[#3B82F6]" href="#contact">
                    START YOUR ENGAGEMENT
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full md:w-auto px-8 py-3 glass-card text-sm font-medium tracking-wide transition-all rounded-sm border text-white hover:bg-white/10 border-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#how-it-works">
                    SEE HOW IT WORKS
                </a>
</div>
<p className="mt-6 text-xs text-slate-500">Most engagements deliver within our 14 business-day target window.</p>
</div>
</section>

<section className="border-y bg-[#0B1120] border-white/5 pt-20 pb-20 relative shadow-inner">
<div className="absolute inset-0 bg-gradient-to-b from-[#3B82F6]/5 to-transparent pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="flex gap-2 uppercase text-xs font-bold text-[#F87171] tracking-widest mb-4 gap-x-2 gap-y-2 items-center drop-shadow-md">
<iconify-icon icon="solar:danger-triangle-linear" width="16"></iconify-icon>
                The Problem
            </div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-8 text-white">
                The Silent Rejection: No letter. No explanation. Just silence.
            </h2>
<div className="space-y-6 font-light text-lg leading-relaxed text-slate-400">
<p className="">
                    You’ve spent years building breakthrough technology. You’ve won your Phase II SBIR. Production is within reach. Then silence. Just a contract that never materializes.
                </p>
<p className="">
                    This happens when hidden Foreign Ownership, Control, or Influence (FOCI) surfaces during the DoD’s vetting. A key researcher's past undisclosed affiliation with the <span className="text-white font-medium">Thousand Talents Plan</span> or <span className="text-white font-medium">Changjiang Scholars Program</span>. An investor three layers deep with ties to a sanctioned entity.
                </p>
<p className="">
                    Under the <span className="text-white font-medium">INNOVATE Act</span>, true "transition readiness" is no longer just about Technology Readiness Levels (TRL). The statutory definition now demands an entity be demonstrably free of malign foreign talent recruitment programs and complex FOCI vulnerabilities before production funds can be legally obligated.
                </p>
<p className="border-l-2 border-[#3B82F6] pl-4 italic text-white bg-gradient-to-r from-[#3B82F6]/10 to-transparent py-2 rounded-r-sm">
                    By the time you find out, it’s too late. The DoD doesn’t tell you what they found. They just move on.
                </p>
</div>
</div>
</section>

<section className="py-10 border-b bg-[#1E293B]/20 border-white/5 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 items-start justify-center opacity-70">
<div className="flex flex-col items-center gap-3 text-center group hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#60A5FA]" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="text-xs tracking-wide text-white leading-tight">ITAR/EAR Compliant</span>
</div>
<div className="flex flex-col items-center gap-3 text-center group hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#60A5FA]" icon="solar:lock-password-linear" width="24"></iconify-icon>
<span className="text-xs tracking-wide text-white leading-tight">Immutable Audit Trail</span>
</div>
<div className="flex flex-col items-center gap-3 text-center group hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#60A5FA]" icon="solar:user-check-linear" width="24"></iconify-icon>
<span className="text-xs tracking-wide text-white leading-tight">Human Review on All Moderate-Confidence Findings</span>
</div>
<div className="flex flex-col items-center gap-3 text-center group hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#60A5FA]" icon="solar:file-check-linear" width="24"></iconify-icon>
<span className="text-xs tracking-wide text-white leading-tight">NSPM-33 / INNOVATE Act Rubric</span>
</div>
<div className="flex flex-col items-center gap-3 text-center group cursor-help relative hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#60A5FA]" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<span className="text-xs tracking-wide text-white border-b border-dashed border-slate-500 leading-tight">14-Day Target SLA*</span>
</div>
<div className="flex flex-col items-center gap-3 text-center group hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#60A5FA]" icon="solar:trash-bin-trash-linear" width="24"></iconify-icon>
<span className="text-xs tracking-wide text-white leading-tight">7-Day Data Purge</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="how-it-works">
<div className="mb-12 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">Adversarial Vetting. Not a Checkbox.</h2>
<p className="font-light text-slate-400">
                Our protocol systematically interrogates every layer of your personnel and ownership structure using the same databases the government uses.
            </p>
<p className="text-[10px] mt-4 uppercase tracking-widest text-slate-600">
                *Timeline targets shown. SLA clock pauses during documented third-party service outages.
            </p>
</div>

<div className="w-full overflow-hidden relative py-5 mb-16 border-y border-white/5 bg-gradient-to-r from-transparent via-[#1E293B]/20 to-transparent">

<div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0B1120] to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#0B1120] to-transparent z-10 pointer-events-none"></div>
<div className="animate-ticker flex items-center gap-12 text-xs font-medium uppercase tracking-widest text-slate-500">

<div className="flex items-center gap-2 shrink-0"><iconify-icon className="text-[#3B82F6]" icon="solar:database-linear" width="16"></iconify-icon>Sayari Graph</div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon className="text-[#3B82F6]" icon="solar:global-linear" width="16"></iconify-icon>OpenSanctions</div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon className="text-[#3B82F6]" icon="solar:shield-warning-linear" width="16"></iconify-icon>OFAC SDN</div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon className="text-[#3B82F6]" icon="solar:graph-up-linear" width="16"></iconify-icon>Dimensions</div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon className="text-[#3B82F6]" icon="solar:document-text-linear" width="16"></iconify-icon>WIPO PatentScope</div>

<div className="flex items-center gap-2 shrink-0"><iconify-icon className="text-[#3B82F6]" icon="solar:database-linear" width="16"></iconify-icon>Sayari Graph</div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon className="text-[#3B82F6]" icon="solar:global-linear" width="16"></iconify-icon>OpenSanctions</div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon className="text-[#3B82F6]" icon="solar:shield-warning-linear" width="16"></iconify-icon>OFAC SDN</div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon className="text-[#3B82F6]" icon="solar:graph-up-linear" width="16"></iconify-icon>Dimensions</div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon className="text-[#3B82F6]" icon="solar:document-text-linear" width="16"></iconify-icon>WIPO PatentScope</div>

<div className="flex items-center gap-2 shrink-0"><iconify-icon className="text-[#3B82F6]" icon="solar:database-linear" width="16"></iconify-icon>Sayari Graph</div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon className="text-[#3B82F6]" icon="solar:global-linear" width="16"></iconify-icon>OpenSanctions</div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon className="text-[#3B82F6]" icon="solar:shield-warning-linear" width="16"></iconify-icon>OFAC SDN</div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon className="text-[#3B82F6]" icon="solar:graph-up-linear" width="16"></iconify-icon>Dimensions</div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon className="text-[#3B82F6]" icon="solar:document-text-linear" width="16"></iconify-icon>WIPO PatentScope</div>
</div>
</div>
<div className="space-y-4">

<div className="glass-card p-8 rounded-sm border-l-4 border-l-[#3B82F6] blue-glow">
<div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
<div>
<div className="text-[#60A5FA] text-xs font-bold uppercase tracking-widest mb-1 drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]">Phase 1 (Days 1–5)</div>
<h3 className="text-xl font-medium text-white">Parallel Discovery</h3>
</div>
<p className="text-sm text-slate-400 max-w-md">Three specialized AI agents work simultaneously to build an independent picture of your risk exposure.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#1E293B]/60 p-5 rounded-sm border border-white/5 hover:border-[#3B82F6]/50 transition-colors group">
<div className="flex items-center gap-3 mb-3 text-white">
<iconify-icon className="text-slate-400 group-hover:text-[#60A5FA] transition-colors" icon="solar:user-id-linear" width="20"></iconify-icon>
<span className="font-medium text-sm">The Inquisitor</span>
</div>
<p className="text-xs leading-relaxed text-slate-400">Scans personnel against research databases and co-authorship networks. Checks SciENcv disclosures against reality.</p>
</div>

<div className="bg-[#1E293B]/60 p-5 rounded-sm border border-white/5 hover:border-[#3B82F6]/50 transition-colors group">
<div className="flex items-center gap-3 mb-3 text-white">
<iconify-icon className="text-slate-400 group-hover:text-[#60A5FA] transition-colors" icon="solar:graph-up-linear" width="20"></iconify-icon>
<span className="font-medium text-sm">The Genealogist</span>
</div>
<p className="text-xs leading-relaxed text-slate-400">Traces ownership layer by layer, identifying shell entities and beneficial owners. Doesn't stop at layer one.</p>
</div>

<div className="bg-[#1E293B]/60 p-5 rounded-sm border border-white/5 hover:border-[#3B82F6]/50 transition-colors group">
<div className="flex items-center gap-3 mb-3 text-white">
<iconify-icon className="text-slate-400 group-hover:text-[#60A5FA] transition-colors" icon="solar:document-text-linear" width="20"></iconify-icon>
<span className="font-medium text-sm">The Auditor</span>
</div>
<p className="text-xs leading-relaxed text-slate-400">Builds an independent evidentiary baseline from WIPO patent filings and a secondary parse of your SciENcv — before it receives findings from other agents.</p>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/5 text-center">
<a className="text-[#60A5FA] text-xs font-medium tracking-wide hover:text-white transition-colors flex items-center justify-center gap-1 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]" href="#agents">
                        Meet all five agents
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="grid md:grid-cols-2 gap-4">

<div className="glass-card p-8 rounded-sm border-l-4 border-l-white/10 hover:border-l-[#60A5FA]/50 transition-colors">
<div className="mb-6">
<div className="text-xs font-medium uppercase tracking-widest mb-1 text-slate-500">Phase 2 (Days 6–9)</div>
<h3 className="text-xl font-medium mb-2 text-white">Cross-Validation</h3>
<p className="text-sm text-slate-400 mb-4">
<strong>The Auditor</strong> becomes the triangulation engine, cross-referencing personnel and ownership risks to surface six categories of COI. <strong>The Sentinel</strong> validates findings against global sanctions.
                        </p>
</div>
<div className="bg-[#1E293B]/40 p-4 rounded-sm border flex items-start gap-3 border-white/5">
<iconify-icon className="text-[#60A5FA] mt-1 shrink-0" icon="solar:user-check-linear"></iconify-icon>
<p className="text-xs text-slate-400">Human analysts review all moderate-confidence findings.</p>
</div>
</div>

<div className="glass-card p-8 rounded-sm border-l-4 border-l-white/10 hover:border-l-[#60A5FA]/50 transition-colors">
<div className="mb-6">
<div className="text-xs font-medium uppercase tracking-widest mb-1 text-slate-500">Phase 3 (Days 10–14)</div>
<h3 className="text-xl font-medium mb-2 text-white">Vetting Pack Delivery</h3>
<p className="text-sm text-slate-400 mb-3">
<strong>The Architect</strong> compiles validated findings to produce the <strong>Transition Readiness Score (TRS)</strong> (0–100 scored dashboard), trigger <strong>Adverse Finding Briefings</strong> if critical risks surface, and build the <strong>Merkle-chained audit log</strong>. Senior analyst sign-off before delivery.
                        </p>
<p className="text-[10px] text-slate-500 italic border-l pl-2 border-white/10">
                            Phase timelines are targets based on typical engagement complexity. The protocol depends on third-party federal databases.
                        </p>
</div>
<div className="bg-[#1E293B]/40 p-4 rounded-sm border flex items-start gap-3 border-white/5">
<iconify-icon className="text-[#60A5FA] mt-1 shrink-0" icon="solar:file-check-linear"></iconify-icon>
<p className="text-xs text-slate-400">Your final deliverable proves defensible diligence for DoD transitions.</p>
</div>
</div>
</div>

<div className="glass-card p-6 md:p-8 rounded-sm border border-white/5 border-l-4 border-l-[#F87171] bg-gradient-to-r from-[#F87171]/5 to-transparent relative overflow-hidden group hover:border-[#F87171]/30 transition-colors">
<div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
<div className="w-12 h-12 rounded-sm bg-[#1E293B] border border-[#F87171]/20 flex items-center justify-center text-[#F87171] shrink-0 shadow-[0_0_15px_rgba(248,113,113,0.15)] group-hover:bg-[#F87171] group-hover:text-white transition-all">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Automatic Escalation: Adverse Finding Briefing</h4>
<p className="text-sm text-slate-400 leading-relaxed max-w-4xl">
                            If disqualifying findings are detected during discovery or cross-validation, the protocol automatically halts and triggers an immediate <span className="text-white font-medium">Adverse Finding Briefing</span>. We don’t wait until Day 14 to deliver critical news—you receive actionable intelligence the moment it is verified by an analyst.
                        </p>
</div>
</div>

<div className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-[#F87171]/10 rounded-full blur-[40px] pointer-events-none"></div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B1120] border-y border-white/5 relative" id="agents">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 md:text-center max-w-4xl mx-auto">
<div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#60A5FA] mb-4 drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]">
<iconify-icon icon="solar:layers-minimalistic-linear"></iconify-icon>
                    The Protocol Architecture
                </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">Five Agents. Five Domains. One Adversarial Protocol.</h2>
<p className="font-light text-slate-400 leading-relaxed">
                    Each agent operates independently within its own data silo. No single agent sees the full picture. That’s by design — the same compartmentalization principle the government uses, built into the architecture of the protocol itself.
                </p>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-sm border border-white/10 group hover:border-[#3B82F6]/50 transition-colors hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-[#1E293B] rounded-sm flex items-center justify-center text-[#60A5FA] group-hover:text-white group-hover:bg-[#3B82F6] transition-all">
<iconify-icon icon="solar:user-id-linear" width="22"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded-sm text-slate-400">Phase 1</span>
</div>
<h3 className="text-lg font-medium text-white mb-1">The Inquisitor</h3>
<p className="text-xs text-[#60A5FA] mb-4 uppercase tracking-wide">Personnel Vetting</p>
<p className="text-sm text-slate-400 mb-6 min-h-[40px]">Finds what your researchers didn’t disclose. Resolves key personnel to their canonical research identity.</p>
<div className="space-y-3 pt-4 border-t border-white/5">
<div className="flex items-start gap-2 text-xs text-slate-500">
<iconify-icon className="shrink-0 mt-0.5 text-[#3B82F6]" icon="solar:check-circle-linear"></iconify-icon>
<span>Co-authorship patterns with DoD 1286 institutions</span>
</div>
<div className="flex items-start gap-2 text-xs text-slate-500">
<iconify-icon className="shrink-0 mt-0.5 text-[#3B82F6]" icon="solar:check-circle-linear"></iconify-icon>
<span>Pattern omissions in SciENcv</span>
</div>
<div className="flex items-start gap-2 text-xs text-slate-500">
<iconify-icon className="shrink-0 mt-0.5 text-[#3B82F6]" icon="solar:check-circle-linear"></iconify-icon>
<span>Tools: Dimensions, ORCID, SciENcv Parser</span>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-sm border border-white/10 group hover:border-[#3B82F6]/50 transition-colors hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-[#1E293B] rounded-sm flex items-center justify-center text-[#60A5FA] group-hover:text-white group-hover:bg-[#3B82F6] transition-all">
<iconify-icon icon="solar:graph-up-linear" width="22"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded-sm text-slate-400">Phase 1</span>
</div>
<h3 className="text-lg font-medium text-white mb-1">The Genealogist</h3>
<p className="text-xs text-[#60A5FA] mb-4 uppercase tracking-wide">FOCI &amp; Corporate Governance</p>
<p className="text-sm text-slate-400 mb-6 min-h-[40px]">Traces who really owns your company — past the cap table your lawyer gave you.</p>
<div className="space-y-3 pt-4 border-t border-white/5">
<div className="flex items-start gap-2 text-xs text-slate-500">
<iconify-icon className="shrink-0 mt-0.5 text-[#3B82F6]" icon="solar:check-circle-linear"></iconify-icon>
<span>Shell entities in secrecy jurisdictions</span>
</div>
<div className="flex items-start gap-2 text-xs text-slate-500">
<iconify-icon className="shrink-0 mt-0.5 text-[#3B82F6]" icon="solar:check-circle-linear"></iconify-icon>
<span>Nominee look-through protocol</span>
</div>
<div className="flex items-start gap-2 text-xs text-slate-500">
<iconify-icon className="shrink-0 mt-0.5 text-[#3B82F6]" icon="solar:check-circle-linear"></iconify-icon>
<span>Tools: Sayari Graph, Middesk, Kharon</span>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-sm border border-white/10 group hover:border-[#3B82F6]/50 transition-colors hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-[#1E293B] rounded-sm flex items-center justify-center text-[#60A5FA] group-hover:text-white group-hover:bg-[#3B82F6] transition-all">
<iconify-icon icon="solar:document-text-linear" width="22"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded-sm text-slate-400">Phase 1 &amp; 2</span>
</div>
<h3 className="text-lg font-medium text-white mb-1">The Auditor</h3>
<p className="text-xs text-[#60A5FA] mb-4 uppercase tracking-wide">Discrepancy Analysis</p>
<p className="text-sm text-slate-400 mb-6 min-h-[40px]">The only agent that works both shifts. Catches what falls between the cracks of personnel and ownership.</p>
<div className="space-y-3 pt-4 border-t border-white/5">
<div className="flex items-start gap-2 text-xs text-slate-500">
<iconify-icon className="shrink-0 mt-0.5 text-[#3B82F6]" icon="solar:check-circle-linear"></iconify-icon>
<span>Independent WIPO patent baseline</span>
</div>
<div className="flex items-start gap-2 text-xs text-slate-500">
<iconify-icon className="shrink-0 mt-0.5 text-[#3B82F6]" icon="solar:check-circle-linear"></iconify-icon>
<span>Cross-references Personnel vs. Ownership</span>
</div>
<div className="flex items-start gap-2 text-xs text-slate-500">
<iconify-icon className="shrink-0 mt-0.5 text-[#3B82F6]" icon="solar:check-circle-linear"></iconify-icon>
<span>Produces: The Gap Analysis Report</span>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-sm border border-white/10 group hover:border-[#3B82F6]/50 transition-colors lg:col-start-1 lg:col-span-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-[#1E293B] rounded-sm flex items-center justify-center text-[#60A5FA] group-hover:text-white group-hover:bg-[#3B82F6] transition-all">
<iconify-icon icon="solar:shield-warning-linear" width="22"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded-sm text-slate-400">Phase 2</span>
</div>
<h3 className="text-lg font-medium text-white mb-1">The Sentinel</h3>
<p className="text-xs text-[#60A5FA] mb-4 uppercase tracking-wide">Sanctions Validation</p>
<p className="text-sm text-slate-400 mb-6">The last checkpoint. Multi-list amplification surfaces risks that single-database checks miss.</p>
<div className="space-y-3 pt-4 border-t border-white/5">
<div className="flex items-start gap-2 text-xs text-slate-500">
<iconify-icon className="shrink-0 mt-0.5 text-[#3B82F6]" icon="solar:check-circle-linear"></iconify-icon>
<span>Tools: OFAC SDN, FinCEN, Visual Compliance</span>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-sm border border-white/10 group hover:border-[#3B82F6]/50 transition-colors lg:col-span-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-[#1E293B] rounded-sm flex items-center justify-center text-[#60A5FA] group-hover:text-white group-hover:bg-[#3B82F6] transition-all">
<iconify-icon icon="solar:layers-minimalistic-linear" width="22"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded-sm text-slate-400">All Phases</span>
</div>
<h3 className="text-lg font-medium text-white mb-1">The Architect</h3>
<p className="text-xs text-[#60A5FA] mb-4 uppercase tracking-wide">Orchestration &amp; Compilation</p>
<p className="text-sm text-slate-400 mb-6">The agent that never investigates — but controls everything. It routes data between agents, manages the phase gate state machine, and compiles the final Vetting Pack. It creates the Merkle-chained audit log that proves your diligence.</p>
<div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-white/5">
<div className="space-y-2">
<div className="flex items-start gap-2 text-xs text-slate-500">
<iconify-icon className="shrink-0 mt-0.5 text-[#3B82F6]" icon="solar:check-circle-linear"></iconify-icon>
<span>Manages inter-agent routing (no direct comms)</span>
</div>
<div className="flex items-start gap-2 text-xs text-slate-500">
<iconify-icon className="shrink-0 mt-0.5 text-[#3B82F6]" icon="solar:check-circle-linear"></iconify-icon>
<span>Triggers Adverse Finding Protocols</span>
</div>
</div>
<div className="space-y-2">
<div className="flex items-start gap-2 text-xs text-slate-500">
<iconify-icon className="shrink-0 mt-0.5 text-[#3B82F6]" icon="solar:check-circle-linear"></iconify-icon>
<span>Produces: Transition Readiness Score</span>
</div>
<div className="flex items-start gap-2 text-xs text-slate-500">
<iconify-icon className="shrink-0 mt-0.5 text-[#3B82F6]" icon="solar:check-circle-linear"></iconify-icon>
<span>Produces: Mitigation Memos &amp; Audit Log</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 bg-[#1E293B]/40 border border-white/5 rounded-sm p-8">
<h4 className="text-lg font-medium text-white mb-6">What Each Agent Can and Cannot See</h4>
<div className="overflow-x-auto">
<table className="w-full text-left text-xs border-collapse">
<thead className="text-slate-500 border-b border-white/10 uppercase tracking-wider">
<tr>
<th className="pb-3 pl-2 font-medium">Agent</th>
<th className="pb-3 font-medium text-white">Can See (Tier 1)</th>
<th className="pb-3 font-medium text-slate-600">Cannot See</th>
</tr>
</thead>
<tbody className="text-slate-400 divide-y divide-white/5">
<tr>
<td className="py-3 pl-2 font-medium text-[#60A5FA]">The Inquisitor</td>
<td className="py-3 pr-4">Raw publication data, co-authorship networks, SciENcv</td>
<td className="py-3 text-slate-600">Cap-tables, ownership, sanctions results</td>
</tr>
<tr>
<td className="py-3 pl-2 font-medium text-[#60A5FA]">The Genealogist</td>
<td className="py-3 pr-4">Cap-table data, beneficial ownership, financials</td>
<td className="py-3 text-slate-600">Publication data, researcher PII, patents</td>
</tr>
<tr>
<td className="py-3 pl-2 font-medium text-[#60A5FA]">The Auditor</td>
<td className="py-3 pr-4">SciENcv (secondary parse), WIPO patent records</td>
<td className="py-3 text-slate-600">Raw cap-tables, raw publication data</td>
</tr>
<tr>
<td className="py-3 pl-2 font-medium text-[#60A5FA]">The Architect</td>
<td className="py-3 pr-4 italic text-slate-500">Tier 2 Metadata &amp; Signals only</td>
<td className="py-3 text-[#F87171] font-medium">All Tier 1 Raw Data (Blind by design)</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1E293B]/20 border-y border-white/5" id="deliverables">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">A Complete Security Posture Assessment.</h2>
<p className="font-light text-slate-400">
                        Not a slide deck. Your Vetting Pack is the deliverable the DoD wishes every contractor brought to the table.
                    </p>
</div>
<a className="text-[#60A5FA] text-sm transition-colors flex items-center gap-2 hover:text-white drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]" href="#pricing">
                    View Pricing <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#0B1120] p-6 rounded-sm border hover:border-[#3B82F6]/50 transition-colors group border-white/5 flex flex-col hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]">
<div className="w-10 h-10 bg-[#1E293B] rounded-sm flex items-center justify-center text-[#60A5FA] mb-6 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium mb-1 text-white">Transition Readiness Score</h3>
<p className="text-[10px] text-slate-500 uppercase tracking-wider mb-3">Produced by The Architect</p>
<p className="text-sm text-slate-500 leading-relaxed flex-1 group-hover:text-slate-400 transition-colors">
                        Dashboard presenting overall security posture across Personnel Risk, FOCI Exposure, Sanctions, and Disclosure Integrity.
                    </p>
</div>

<div className="bg-[#0B1120] p-6 rounded-sm border hover:border-[#3B82F6]/50 transition-colors group border-white/5 flex flex-col hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]">
<div className="w-10 h-10 bg-[#1E293B] rounded-sm flex items-center justify-center text-[#60A5FA] mb-6 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
<iconify-icon icon="solar:sort-by-time-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium mb-1 text-white">Gap Analysis Report</h3>
<p className="text-[10px] text-slate-500 uppercase tracking-wider mb-3">Produced by The Auditor</p>
<p className="text-sm text-slate-500 leading-relaxed flex-1 group-hover:text-slate-400 transition-colors">
                        Organized into <strong>Missing Content</strong> (COI 1-3), <strong>Strategic Blindspots</strong> (COI 4 &amp; 6), and <strong>Data Deficiencies</strong>. It surfaces conflicts at the intersection of people, entities, and disclosures.
                    </p>
</div>

<div className="bg-[#0B1120] p-6 rounded-sm border hover:border-[#3B82F6]/50 transition-colors group border-white/5 flex flex-col hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]">
<div className="w-10 h-10 bg-[#1E293B] rounded-sm flex items-center justify-center text-[#60A5FA] mb-6 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
<iconify-icon icon="solar:document-add-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium mb-1 text-white">Mitigation Memos</h3>
<p className="text-[10px] text-slate-500 uppercase tracking-wider mb-3">Produced by The Architect</p>
<p className="text-sm text-slate-500 leading-relaxed flex-1 group-hover:text-slate-400 transition-colors">
                        Ready-to-file Proxy Agreements and Firewall Protocols, pre-populated with your specific findings from all agents. Not templates.
                    </p>
</div>

<div className="bg-[#0B1120] p-6 rounded-sm border hover:border-[#3B82F6]/50 transition-colors group border-white/5 flex flex-col hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]">
<div className="w-10 h-10 bg-[#1E293B] rounded-sm flex items-center justify-center text-[#60A5FA] mb-6 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-keyhole-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium mb-1 text-white">Tamper-Evident Log</h3>
<p className="text-[10px] text-slate-500 uppercase tracking-wider mb-3">Produced by The Architect</p>
<p className="text-sm text-slate-500 leading-relaxed flex-1 group-hover:text-slate-400 transition-colors">
                        Timestamped, hash-chained record of every data query and analytical decision across all phases. Your defensible answer to investigators.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="pricing">

<div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">One Engagement. One Price.</h2>
<p className="font-light text-slate-400">No hourly billing. No scope creep. Know exactly what you’re investing.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 items-stretch mb-10">

<div className="bg-[#0B1120]/80 rounded-sm border border-[#3B82F6] p-10 relative overflow-hidden flex flex-col shadow-[0_0_40px_rgba(59,130,246,0.1)]">
<div className="absolute top-0 right-0 bg-[#3B82F6] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider shadow-[0_0_10px_rgba(59,130,246,0.5)]">Most Common</div>
<h3 className="font-medium text-lg mb-2 text-white">Standard Engagement</h3>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-4xl font-medium text-white text-glow">$15,000</span>
<span className="text-sm text-slate-400">Flat Investment</span>
</div>
<p className="text-sm mb-8 pb-8 border-b text-slate-400 border-white/10">
                        For organizations targeting a specific production contract or DD-254 submission.
                    </p>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-[#3B82F6] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Up to 5 key personnel
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-[#3B82F6] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Up to 3 corporate ownership layers
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-[#3B82F6] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>14 business-day target SLA <span className="text-xs text-slate-500 block">(not a guaranteed delivery date — see Service Level &amp; Dependencies)</span></span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-[#3B82F6] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Full Vetting Pack delivery
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-[#3B82F6] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            ITAR/EAR-compliant infrastructure
                        </li>
</ul>
<a className="w-full py-4 bg-[#3B82F6] text-white text-center font-medium text-sm tracking-wide rounded-sm hover:bg-[#2563EB] transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]" href="#contact">
                        START ENGAGEMENT
                    </a>
</div>

<div className="glass-card rounded-sm p-10 flex flex-col hover:border-white/20 transition-colors">
<h3 className="font-medium text-lg mb-2 text-white">Complex / Extended</h3>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-4xl font-medium text-white">Custom</span>
<span className="text-sm text-slate-400">Scoped Separately</span>
</div>
<p className="text-sm mb-8 pb-8 border-b text-slate-400 border-white/10">
                        For multinational holding structures or organizations with complex personnel footprints.
                    </p>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-slate-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            &gt; 5 key personnel
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-slate-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Deep ownership (&gt; 3 layers)
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-slate-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Multinational holding structures
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-slate-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Specialized ITAR routing
                        </li>
</ul>
<a className="w-full py-4 glass-card border text-center font-medium text-sm tracking-wide rounded-sm transition-colors border-white/20 text-white hover:bg-white/5 hover:text-[#60A5FA]" href="#contact">
                        CONTACT FOR SCOPING
                    </a>
</div>
</div>

<div className="bg-[#1E293B]/30 border p-6 rounded-sm text-xs leading-relaxed max-w-4xl mx-auto border-white/10 text-slate-500 text-center">
                The 14 business-day timeline is a target, not a guarantee. The FIDDA Shield protocol depends on third-party federal databases and commercial APIs that TensorLock does not own, operate, or control. Service disruptions, rate limits, or access changes by third-party providers may affect engagement timelines. TensorLock will notify you of any SLA-affecting events within 2 hours of detection.
            </div>
</div>
</section>

<section className="py-24 bg-[#0B1120] border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight mb-8 text-white text-center">Protocol FAQ</h2>
<div className="space-y-4">
<details className="group bg-[#1E293B]/20 border border-white/5 rounded-sm open:border-[#3B82F6]/50 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-sm font-medium text-white select-none hover:text-[#60A5FA] transition-colors">
                        What does The Auditor do that the other agents don’t?
                        <iconify-icon className="text-slate-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 font-light leading-relaxed">
                        The Auditor is the only agent that operates in both Phase 1 and Phase 2. In Phase 1, it builds an independent baseline from patent filings and your SciENcv disclosures — before it knows what any other agent has found. In Phase 2, it receives anonymized findings from The Inquisitor and The Genealogist and cross-references all three sources to detect conflicts of interest, specifically personnel–entity conflicts.
                    </div>
</details>
<details className="group bg-[#1E293B]/20 border border-white/5 rounded-sm open:border-[#3B82F6]/50 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-sm font-medium text-white select-none hover:text-[#60A5FA] transition-colors">
                        Can one agent see another agent’s data?
                        <iconify-icon className="text-slate-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 font-light leading-relaxed">
                        No. Each agent has exclusive access to its own raw data, enforced architecturally. The Inquisitor cannot see cap-table data. The Genealogist cannot see publication records. All data flows route through The Architect, which itself is prohibited from accessing any agent’s raw data.
                    </div>
</details>
<details className="group bg-[#1E293B]/20 border border-white/5 rounded-sm open:border-[#3B82F6]/50 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-sm font-medium text-white select-none hover:text-[#60A5FA] transition-colors">
                        What happens when two agents disagree?
                        <iconify-icon className="text-slate-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 font-light leading-relaxed">
                        The protocol has a built-in reversal mechanism. If a downstream agent’s analysis contradicts an upstream finding, the contradiction is escalated to The Architect, which initiates a targeted re-query. The finding is never silently resolved — the discrepancy and its resolution appear in your Vetting Pack.
                    </div>
</details>
<details className="group bg-[#1E293B]/20 border border-white/5 rounded-sm open:border-[#3B82F6]/50 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-sm font-medium text-white select-none hover:text-[#60A5FA] transition-colors">
                        Why five agents instead of one?
                        <iconify-icon className="text-slate-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 font-light leading-relaxed">
                        A single system creates a single point of failure and bias. Five independent agents with compartmentalized access means that when findings from multiple agents converge, it is the strongest possible signal. The architecture is adversarial by design: each agent challenges the others through independent analysis.
                    </div>
</details>

<details className="group bg-[#1E293B]/20 border border-white/5 rounded-sm open:border-[#3B82F6]/50 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-sm font-medium text-white select-none hover:text-[#60A5FA] transition-colors">
                        Where exactly do humans get involved, and what decisions do they make?
                        <iconify-icon className="text-slate-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 font-light leading-relaxed">
<p className="mb-4">Every engagement includes three mandatory human review checkpoints — no exceptions, no automated overrides.</p>
<ul className="space-y-4 list-none">
<li className="pl-4 border-l-2 border-[#3B82F6]/30">
<strong className="text-white">Checkpoint 1 (Intake):</strong> Before any agent begins work, a human analyst reviews your engagement package — confirming entity identification, ITAR/EAR classification, personnel roster completeness, and SciENcv file integrity. If something is wrong at this stage, the engagement halts until it's corrected. This prevents a misidentified entity from cascading through all five agents.
                            </li>
<li className="pl-4 border-l-2 border-[#3B82F6]/30">
<strong className="text-white">Checkpoint 2 (Flag Review):</strong> After Phase 1 discovery completes, all findings in the moderate-confidence range (0.60–0.74) are queued for human review. These are findings where the data is suggestive but not definitive — exactly the kind of call that requires human judgment, not an algorithm. The analyst reviews the evidence and issues a verdict: approved, rejected with a stated reason, or modified with specific changes. Findings above 0.75 propagate automatically because the evidence is strong enough to stand on its own. Findings below 0.60 require corroboration from a second agent or data source before they go anywhere.
                            </li>
<li className="pl-4 border-l-2 border-[#3B82F6]/30">
<strong className="text-white">Checkpoint 3 (Vetting Pack Sign-Off):</strong> A senior analyst reviews and signs off on the final Vetting Pack before it reaches you. They check for false positive artifacts, verify that the narrative is coherent across all agent findings, and confirm that every mitigation memo recommendation is actionable — not generic boilerplate. No Vetting Pack is delivered without this sign-off.
                            </li>
</ul>
<p className="mt-4 pt-4 border-t border-white/5 italic text-slate-500">Additionally, any time two agents produce conflicting results — for example, The Auditor and The Inquisitor parsing the same SciENcv field differently — the discrepancy is routed to a human analyst for resolution, not silently resolved by the system.</p>
</div>
</details>

<details className="group bg-[#1E293B]/20 border border-white/5 rounded-sm open:border-[#3B82F6]/50 transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer text-sm font-medium text-white select-none hover:text-[#60A5FA] transition-colors">
                        Who is responsible if the Vetting Pack misses something — TensorLock or the AI?
                        <iconify-icon className="text-slate-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 font-light leading-relaxed space-y-4">
<p><strong className="text-white">TensorLock.</strong> The AI agents are tools that execute the protocol. They do not bear responsibility. TensorLock designs the protocol, selects the data sources, defines the analytical logic, employs the human analysts who review findings, and delivers the Vetting Pack under our name.</p>
<p>That said, the Vetting Pack is a risk assessment based on the data available through authorized third-party sources at the time of the engagement — it is not a guarantee of clearance and not a legal opinion. If a data source was unavailable during your engagement, that gap is explicitly documented in the Gap Analysis Report so you know where your coverage ends.</p>
<p>If a finding was below the confidence threshold and didn't propagate to the Vetting Pack, that decision is recorded in the audit trail with the specific score and the threshold that excluded it. TensorLock takes responsibility for executing the protocol with commercially reasonable diligence, maintaining the integrity of the human review checkpoints, and delivering findings transparently — including findings we couldn't make because a data source was inaccessible.</p>
<p className="text-xs text-slate-500 italic border-l-2 border-white/10 pl-3">What we do not take responsibility for is the accuracy or completeness of data maintained by third-party federal databases and commercial API providers that TensorLock does not own or control, or decisions made by the DoD or DCSA independently of the Vetting Pack.</p>
</div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-[#0B1120] border-t border-white/5" id="about">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight mb-8 text-white">Why We Built This</h2>
<div className="space-y-6 leading-relaxed font-light text-slate-400">
<p>
                    We watched deep-tech companies with genuinely transformative technology get stopped cold at the Production transition—not because their tech wasn’t ready, but because their security posture wasn’t.
                </p>
<p className="">
                    The tools available to founders were manual, fragmented, and reactive. Cap-table reviews that missed the third layer. Compliance consultants who checked boxes but didn’t interrogate the data.
                </p>
<p className="">
                    We built FIDDA Shield to close that gap. We created an adversarial vetting system that runs the investigation the DoD will run—before they run it—so founders have time to understand, mitigate, and document their posture.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8 mt-16">
<div>
<h4 className="font-medium mb-2 flex items-center gap-2 text-white">
<iconify-icon className="text-[#60A5FA]" icon="solar:database-linear"></iconify-icon>
                        Data Hygiene by Design
                    </h4>
<p className="text-sm text-slate-500">Raw data is purged within 7 business days of engagement acceptance. We don’t accumulate your sensitive information.</p>
</div>
<div>
<h4 className="font-medium mb-2 flex items-center gap-2 text-white">
<iconify-icon className="text-[#60A5FA]" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
                        Compartmentalization
                    </h4>
<p className="text-sm text-slate-500">No single agent or person sees everything. Our protocol uses a tiered data compartmentalization model.</p>
</div>
<div>
<h4 className="font-medium mb-2 flex items-center gap-2 text-white">
<iconify-icon className="text-[#60A5FA]" icon="solar:diagram-arrow-up-linear"></iconify-icon>
                        Dual-Phase Triangulation
                    </h4>
<p className="text-sm text-slate-500">The Auditor works blindly in Phase 1, then cross-references in Phase 2. Conflicts at the intersection of personnel and ownership are surfaced by architecture, not luck.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="contact">
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-xl mx-auto relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight mb-2 text-white">Let’s Find Out Where You Stand.</h2>
<p className="font-light text-sm text-slate-400">Schedule a scoping conversation within 48 hours.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-slate-500 uppercase tracking-wider font-medium">Company Name</label>
<input className="w-full bg-[#1E293B]/50 border rounded-sm p-3 focus:outline-none focus:border-[#3B82F6] focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all border-white/10 text-white placeholder-slate-600" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-500 uppercase tracking-wider font-medium">Your Name</label>
<input className="w-full bg-[#1E293B]/50 border rounded-sm p-3 focus:outline-none focus:border-[#3B82F6] focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all border-white/10 text-white placeholder-slate-600" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-slate-500 uppercase tracking-wider font-medium">Email Address</label>
<input className="w-full bg-[#1E293B]/50 border rounded-sm p-3 focus:outline-none focus:border-[#3B82F6] focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all border-white/10 text-white placeholder-slate-600" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-500 uppercase tracking-wider font-medium">Phone</label>
<input className="w-full bg-[#1E293B]/50 border rounded-sm p-3 focus:outline-none focus:border-[#3B82F6] focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all border-white/10 text-white placeholder-slate-600" type="tel"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-slate-500 uppercase tracking-wider font-medium">Key Personnel Count</label>
<div className="relative">
<select className="w-full bg-[#1E293B]/50 border rounded-sm p-3 focus:outline-none focus:border-[#3B82F6] appearance-none cursor-pointer border-white/10 text-white">
<option>1–5</option>
<option>6–10</option>
<option>10+</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-500 uppercase tracking-wider font-medium">ITAR/EAR Technology?</label>
<div className="relative">
<select className="w-full bg-[#1E293B]/50 border rounded-sm p-3 focus:outline-none focus:border-[#3B82F6] appearance-none cursor-pointer border-white/10 text-white">
<option>Yes</option>
<option>No</option>
<option>Unsure</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-500 uppercase tracking-wider font-medium">Target Timeline</label>
<div className="relative">
<select className="w-full bg-[#1E293B]/50 border rounded-sm p-3 focus:outline-none focus:border-[#3B82F6] appearance-none cursor-pointer border-white/10 text-white">
<option>Urgent — under 30 days</option>
<option>Standard — 1–3 months</option>
<option>Planning — 3+ months</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-500 uppercase tracking-wider font-medium">Additional Info</label>
<textarea className="w-full bg-[#1E293B]/50 border rounded-sm p-3 focus:outline-none focus:border-[#3B82F6] focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all h-24 border-white/10 text-white"></textarea>
</div>

<label className="flex items-start gap-3 cursor-pointer group custom-checkbox">
<div className="relative">
<input className="peer sr-only" required="" type="checkbox"/>
<div className="w-5 h-5 border bg-[#1E293B]/50 rounded-sm transition-all peer-checked:bg-[#3B82F6] peer-checked:border-[#3B82F6] flex items-center justify-center border-white/20">
<iconify-icon className="text-white hidden" icon="solar:check-linear" width="14"></iconify-icon>
</div>
</div>
<span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors pt-0.5">
                        I understand that the 14 business-day timeline is a target, not a guarantee, and that TensorLock does not control the availability of the third-party databases used during vetting.
                    </span>
</label>
<button className="w-full py-4 bg-[#3B82F6] text-white font-medium tracking-wide rounded-sm hover:bg-[#2563EB] transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]" type="button">
                    SUBMIT INQUIRY
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-[#0B1120] border-t pt-16 pr-6 pb-8 pl-6 border-white/10">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 text-sm font-semibold tracking-tighter mb-4 text-white" href="#">FIDDA SHIELD</a>
<p className="text-xs text-slate-500 leading-relaxed">
                        Adversarial Vetting for Deep-Tech Production Transitions. Secure your posture before the DoD defines it for you.
                    </p>
</div>
<div className="">
<h5 className="text-sm font-medium mb-4 text-white">Engagement</h5>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-[#60A5FA]" href="#how-it-works">How It Works</a></li>
<li><a className="hover:text-[#60A5FA]" href="#agents">The Agents</a></li>
<li><a className="hover:text-[#60A5FA]" href="#deliverables">What You Get</a></li>
<li><a className="hover:text-[#60A5FA]" href="#pricing">Pricing</a></li>
</ul>
</div>
<div className="">
<h5 className="text-sm font-medium mb-4 text-white">Resources</h5>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-[#60A5FA]" href="#">Case Studies</a></li>
<li><a className="hover:text-[#60A5FA]" href="#faq">FAQ</a></li>
<li><a className="hover:text-[#60A5FA]" href="#">Blog</a></li>
</ul>
</div>
<div className="">
<h5 className="text-sm font-medium mb-4 text-white">Legal &amp; Security</h5>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-[#60A5FA]" href="#">Data Security</a></li>
<li><a className="hover:text-[#60A5FA]" href="#service-level">Service Level &amp; Dependencies</a></li>
<li><a className="hover:text-[#60A5FA]" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#60A5FA]" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 border-white/5">
<p className="text-[10px] text-slate-600">© 2026 TensorLock. All rights reserved.</p>
<div className="flex items-center gap-1 text-[10px] text-slate-600">
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

<div className="hidden mb-4 w-[90vw] md:w-[380px] h-[550px] glass-card rounded-lg flex flex-col overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0B1120]/95 chat-enter relative" id="ai-chat-window">

<div className="absolute inset-0 bg-[#0B1120] z-20 flex flex-col items-center justify-center hidden" id="voice-overlay">
<button className="absolute top-4 right-4 text-slate-400 hover:text-white" onclick="toggleVoiceMode()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="relative w-32 h-32 flex items-center justify-center mb-8">
<div className="ring-pulse"></div>
<div className="ring-pulse"></div>
<div className="ring-pulse"></div>
<div className="w-16 h-16 bg-[#3B82F6] rounded-full flex items-center justify-center text-white shadow-[0_0_30px_#3B82F6] relative z-10">
<iconify-icon icon="solar:microphone-bold" width="32"></iconify-icon>
</div>
</div>
<h3 className="text-white font-medium text-lg mb-2">Listening...</h3>
<p className="text-slate-500 text-sm">Ask about FOCI risks or protocols</p>
<div className="mt-8 flex gap-1 h-6 items-center">
<div className="voice-wave"></div>
<div className="voice-wave"></div>
<div className="voice-wave"></div>
<div className="voice-wave"></div>
<div className="voice-wave"></div>
</div>
</div>

<div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#1E293B]/50 backdrop-blur-md">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></div>
<span className="text-xs font-semibold text-white tracking-wide">Alex</span>
</div>
<button className="text-slate-400 hover:text-white transition-colors" onclick="toggleChat()">
<iconify-icon icon="solar:minimize-square-linear" width="20"></iconify-icon>
</button>
</div>

<div className="flex-1 p-4 overflow-y-auto space-y-4">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-sm bg-[#3B82F6] flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="solar:shield-star-linear" width="18"></iconify-icon>
</div>
<div className="bg-[#1E293B]/60 p-3 rounded-sm border border-white/5 text-xs text-slate-300 leading-relaxed">
<p className="mb-2">Hello. I am the TensorLock Protocol Assistant.</p>
<p>I can answer questions about adversarial vetting, FOCI risks, or the 14-day SLA. Would you like to check your entity's preliminary risk status?</p>
</div>
</div>

<div className="flex gap-2 ml-11 opacity-50" id="typing-indicator">
<div className="w-1.5 h-1.5 bg-[#60A5FA] rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-[#60A5FA] rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-[#60A5FA] rounded-full typing-dot"></div>
</div>
</div>

<div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
<button className="whitespace-nowrap px-3 py-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/5 text-[10px] text-[#60A5FA] hover:bg-[#3B82F6]/10 transition-colors">What is FOCI?</button>
<button className="whitespace-nowrap px-3 py-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/5 text-[10px] text-[#60A5FA] hover:bg-[#3B82F6]/10 transition-colors">Pricing model</button>
<button className="whitespace-nowrap px-3 py-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/5 text-[10px] text-[#60A5FA] hover:bg-[#3B82F6]/10 transition-colors">Security</button>
</div>

<div className="p-4 border-t border-white/10 bg-[#0B1120]">
<div className="relative flex items-center">
<input className="w-full bg-[#1E293B] border border-white/10 rounded-sm py-3 pl-4 pr-24 text-xs text-white focus:outline-none focus:border-[#3B82F6] transition-colors placeholder-slate-600" placeholder="Ask a question..." type="text"/>
<div className="absolute right-1.5 flex items-center gap-1">
<button className="p-1.5 text-slate-400 hover:text-white transition-colors" onclick="toggleVoiceMode()" title="Voice Mode">
<iconify-icon icon="solar:microphone-linear" width="18"></iconify-icon>
</button>
<button className="p-1.5 bg-[#3B82F6] text-white rounded-sm hover:bg-[#2563EB] transition-colors flex items-center justify-center shadow-lg shadow-blue-500/20">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<button className="w-14 h-14 rounded-full bg-[#3B82F6] text-white flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-[#2563EB] hover:scale-105 transition-all group border border-white/20" id="chat-toggle-btn" onclick="toggleChat()">
<iconify-icon className="group-hover:rotate-12 transition-transform" icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
</button>
</div>


    </>
  );
}
