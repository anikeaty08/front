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



      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Sticky header: solid black, subtle divider on scroll
      const header = document.getElementById('siteHeader');
      function updateHeader() {
        if (window.scrollY > 24) {
          header.style.boxShadow = '0 1px 0 rgba(255,255,255,0.15)';
        } else {
          header.style.boxShadow = 'none';
        }
      }
      window.addEventListener('scroll', updateHeader, { passive: true });
      updateHeader();

      // FAQ accordion
      document.querySelectorAll('.faq-item').forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        const panel = item.querySelector('.faq-panel');
        const chevron = item.querySelector('.faq-chevron');
        trigger.addEventListener('click', () => {
          const isOpen = panel.style.maxHeight && panel.style.maxHeight !== '0px';
          document.querySelectorAll('.faq-panel').forEach(p => p.style.maxHeight = '0');
          document.querySelectorAll('.faq-chevron').forEach(c => c.style.transform = 'rotate(0deg)');
          if (!isOpen) {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            chevron.style.transform = 'rotate(180deg)';
          }
        });
      });

      // Copy-to-clipboard for code block
      const copyBtn = document.getElementById('copyBtn');
      const copyLabel = document.getElementById('copyLabel');
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(document.getElementById('codeBlock').innerText).then(() => {
          copyLabel.textContent = 'Copied!';
          setTimeout(() => copyLabel.textContent = 'Copy', 2000);
        });
      });

      if (reduceMotion) {
        document.querySelectorAll('[style*="transition"]').forEach(el => {
          el.style.transition = 'none';
        });
      }
    
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
      

<header className="fixed top-0 left-0 right-0 z-50" id="siteHeader" style={{backgroundColor: '#000000', transition: 'box-shadow 300ms ease'}}>
<div className="mx-auto flex items-center justify-between px-5 sm:px-8" style={{maxWidth: '1080px', height: '64px'}}>
<a className="flex items-center gap-2.5" href="#">
<img alt="QLAD HexLock" className="h-8 w-8" src="https://qlad.com/wp-content/uploads/2024/12/Solid_HexLock.svg" style={{filter: 'brightness(0) invert(1)'}}/>
<span className="text-lg font-semibold tracking-tight text-white" style={{fontFamily: '\'Inter Tight\', sans-serif', letterSpacing: '0.02em'}}>
            QLAD
          </span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium uppercase hover:text-white" href="#platform" style={{color: '#999999', letterSpacing: '0.08em', transition: 'color 300ms ease'}}>
            Why QLAD
          </a>
<a className="text-xs font-medium uppercase hover:text-white" href="#how" style={{color: '#999999', letterSpacing: '0.08em', transition: 'color 300ms ease'}}>
            How It Works
          </a>
<a className="text-xs font-medium uppercase hover:text-white" href="#action" style={{color: '#999999', letterSpacing: '0.08em', transition: 'color 300ms ease'}}>
            Example Use Case
          </a>
<a className="text-xs font-medium uppercase hover:text-white" href="#usecases" style={{color: '#999999', letterSpacing: '0.08em', transition: 'color 300ms ease'}}>
            Use Cases
          </a>
<a className="text-xs font-medium uppercase hover:text-white" href="#team" style={{color: '#999999', letterSpacing: '0.08em', transition: 'color 300ms ease'}}>
            Team
          </a>
<a className="text-xs font-medium uppercase hover:text-white" href="#faq" style={{color: '#999999', letterSpacing: '0.08em', transition: 'color 300ms ease'}}>
            FAQ
          </a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex text-xs font-medium uppercase items-center gap-1.5 hover:text-white" href="#" style={{color: '#999999', letterSpacing: '0.08em', transition: 'color 300ms ease'}}>
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="16"></iconify-icon>
            Docs
          </a>
<a className="inline-flex items-center text-xs font-semibold uppercase px-4 py-2 text-black bg-white hover:bg-[#E5E5E5]" href="#cta" style={{letterSpacing: '0.08em', transition: 'background-color 300ms ease'}}>
            Request Access
          </a>
</div>
</div>
</header>

<section className="relative overflow-hidden" style={{backgroundColor: '#000000', paddingTop: '140px', paddingBottom: '64px'}}>
<div className="absolute pointer-events-none select-none" style={{right: '-120px', top: '60px', opacity: '0.06'}}>
<img alt="" src="https://qlad.com/wp-content/uploads/2024/12/Solid_HexLock.svg" style={{width: '560px', height: '560px', filter: 'brightness(0) invert(1)'}}/>
</div>
<div className="relative mx-auto px-5 sm:px-8" style={{maxWidth: '1080px'}}>
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7">
<span className="inline-flex items-center gap-2 text-xs font-medium uppercase px-3 py-1.5" style={{border: '1px solid #444444', color: '#BBBBBB', letterSpacing: '0.12em', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
              Now in Private Preview
            </span>
<h1 className="mt-6 font-semibold tracking-tight text-white" style={{fontFamily: '\'Inter Tight\', sans-serif', fontSize: 'clamp(2rem,5vw,3.375rem)', lineHeight: '1.12'}}>
              Your encryption has
              <br/>
              an expiry date.
              <br/>
<span style={{color: '#888888'}}>Your trust shouldn't.</span>
</h1>
<p className="mt-6 max-w-xl" style={{fontSize: '1.125rem', lineHeight: '1.6', color: '#999999'}}>
              QLAD is a trust orchestrator built on confidential computing —
              your containerized environments stay encrypted no matter what,
              protected by quantum-safe encryption across every cloud you run.
            </p>
<div className="mt-8 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-2 text-sm font-semibold uppercase px-6 py-3 text-black bg-white hover:bg-[#E5E5E5]" href="#cta" style={{letterSpacing: '0.06em', transition: 'background-color 300ms ease'}}>
                Request Early Access
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 text-sm font-semibold uppercase px-6 py-3 text-white hover:bg-white hover:text-black" href="#how" style={{border: '1px solid #FFFFFF', letterSpacing: '0.06em', transition: 'background-color 300ms ease, color 300ms ease'}}>
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                See How It Works
              </a>
</div>
<div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
<span className="flex items-center gap-2 text-sm" style={{color: '#999999'}}>
<iconify-icon icon="solar:cpu-bolt-linear" strokeWidth="1.5" style={{color: '#FFFFFF'}} width="18"></iconify-icon>
                Set up in under an hour
              </span>
<span className="flex items-center gap-2 text-sm" style={{color: '#999999'}}>
<iconify-icon icon="solar:key-minimalistic-square-3-linear" strokeWidth="1.5" style={{color: '#FFFFFF'}} width="18"></iconify-icon>
                Future-proof encryption
              </span>
<span className="flex items-center gap-2 text-sm" style={{color: '#999999'}}>
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" style={{color: '#FFFFFF'}} width="18"></iconify-icon>
                No disruption to your teams
              </span>
</div>
</div>
<div className="lg:col-span-5">
<div style={{backgroundColor: '#0A0A0A', border: '1px solid #333333'}}>
<div className="flex items-center justify-between px-5 py-3" style={{borderBottom: '1px solid #222222'}}>
<span className="flex items-center gap-2 text-xs font-medium uppercase" style={{color: '#777777', letterSpacing: '0.08em', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="16"></iconify-icon>
                  Live trust status
                </span>
<button className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 hover:text-white" id="copyBtn" style={{color: '#999999', border: '1px solid #444444', transition: 'color 300ms ease'}}>
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span id="copyLabel">Copy</span>
</button>
</div>
<pre className="px-5 py-4 text-xs overflow-x-auto" id="codeBlock" style={{fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', lineHeight: '1.7', color: '#E5E5E5'}}><span style={{color: '#555555'}}># Quantum Readiness Report</span>

<span style={{color: '#777777'}}>Encryption</span>       <span style={{color: '#FFFFFF'}}>Quantum-safe ✓</span>
<span style={{color: '#777777'}}>Connections</span>      <span style={{color: '#FFFFFF'}}>1,284 protected</span>
<span style={{color: '#777777'}}>Keys</span>             <span style={{color: '#FFFFFF'}}>Refreshed 2h ago</span>
<span style={{color: '#777777'}}>Data at risk</span>     <span style={{color: '#FFFFFF'}}>0</span>
<span style={{color: '#777777'}}>Audit evidence</span>   <span style={{color: '#FFFFFF'}}>Ready to export</span>
<span style={{color: '#777777'}}>Action needed</span>    <span style={{color: '#FFFFFF'}}>None</span></pre>
</div>
<p className="mt-4 text-xs text-center" style={{color: '#777777'}}>
              Your entire security posture, verified — at a glance.
            </p>
</div>
</div>
</div>
</section>


<section id="platform" style={{padding: '56px 0'}}>
<div className="mx-auto px-5 sm:px-8" style={{maxWidth: '1080px'}}>
<div className="max-w-2xl">
<span className="inline-flex items-center gap-2 text-xs font-medium uppercase px-3 py-1.5" style={{border: '1px solid #000000', color: '#000000', letterSpacing: '0.12em', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
            Why QLAD
          </span>
<h2 className="mt-5 font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', lineHeight: '1.2', color: '#000000'}}>
            The quantum threat isn't coming.
            <span style={{color: '#888888'}}>It's already here.</span>
</h2>
<p className="mt-4" style={{fontSize: '1.125rem', lineHeight: '1.6', color: '#666666'}}>
            Attackers are harvesting encrypted data today, waiting to unlock it
            tomorrow. QLAD makes sure that day never comes — by making
            quantum-safe trust your default state, not a someday project.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]" style={{marginTop: '60px'}}>
<div className="p-[30px] hover:-translate-y-0.5" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6', transition: 'transform 300ms ease'}}>
<span className="inline-flex items-center justify-center w-11 h-11" style={{border: '1px solid #000000', color: '#000000'}}>
<iconify-icon icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="22"></iconify-icon>
</span>
<h3 className="mt-5 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Quantum-Safe by Default
            </h3>
<p className="mt-2.5 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
              QLAD upgrades every connection and credential to the new global
              encryption standards — no migration project, no disruption, no
              specialist expertise required.
            </p>
</div>
<div className="p-[30px] hover:-translate-y-0.5" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6', transition: 'transform 300ms ease'}}>
<span className="inline-flex items-center justify-center w-11 h-11" style={{border: '1px solid #000000', color: '#000000'}}>
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5" width="22"></iconify-icon>
</span>
<h3 className="mt-5 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Nothing Trusted Until Proven
            </h3>
<p className="mt-2.5 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
              Every system has to prove it is genuine and untampered before it
              touches your data — and it keeps proving it, continuously.
            </p>
</div>
<div className="p-[30px] hover:-translate-y-0.5" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6', transition: 'transform 300ms ease'}}>
<span className="inline-flex items-center justify-center w-11 h-11" style={{border: '1px solid #000000', color: '#000000'}}>
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5" width="22"></iconify-icon>
</span>
<h3 className="mt-5 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Security on Autopilot
            </h3>
<p className="mt-2.5 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
              Set your protection level once. QLAD enforces it everywhere,
              around the clock — renewing, rotating, and revoking without a
              single ticket filed.
            </p>
</div>
<div className="p-[30px] hover:-translate-y-0.5" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6', transition: 'transform 300ms ease'}}>
<span className="inline-flex items-center justify-center w-11 h-11" style={{border: '1px solid #000000', color: '#000000'}}>
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="22"></iconify-icon>
</span>
<h3 className="mt-5 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Works With What You Have
            </h3>
<p className="mt-2.5 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
              No rip-and-replace. QLAD layers onto your existing cloud and
              tools, and is up and running in under an hour.
            </p>
</div>
<div className="p-[30px] hover:-translate-y-0.5" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6', transition: 'transform 300ms ease'}}>
<span className="inline-flex items-center justify-center w-11 h-11" style={{border: '1px solid #000000', color: '#000000'}}>
<iconify-icon icon="solar:eye-scan-linear" strokeWidth="1.5" width="22"></iconify-icon>
</span>
<h3 className="mt-5 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Catches Problems Instantly
            </h3>
<p className="mt-2.5 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
              The moment anything changes or looks wrong, access is cut off
              automatically — and only restored once trust is re-proven.
            </p>
</div>
<div className="p-[30px] hover:-translate-y-0.5" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6', transition: 'transform 300ms ease'}}>
<span className="inline-flex items-center justify-center w-11 h-11" style={{border: '1px solid #000000', color: '#000000'}}>
<iconify-icon icon="solar:clipboard-check-linear" strokeWidth="1.5" width="22"></iconify-icon>
</span>
<h3 className="mt-5 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Audit-Ready, Always
            </h3>
<p className="mt-2.5 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
              Regulators are already asking about quantum readiness. QLAD
              generates the proof for NIS2, DORA, and beyond — ready to hand to
              any auditor.
            </p>
</div>
</div>
</div>
</section>

<div className="mx-auto flex items-center gap-5 px-5 sm:px-8" style={{maxWidth: '1080px'}}>
<div className="flex-1" style={{height: '1px', backgroundColor: '#E6E6E6'}}></div>
<iconify-icon icon="solar:hexagon-lock-linear" strokeWidth="1.5" style={{color: '#999999'}} width="26"></iconify-icon>
<div className="flex-1" style={{height: '1px', backgroundColor: '#E6E6E6'}}></div>
</div>

<section id="how" style={{padding: '56px 0', backgroundColor: '#F7F7F7', marginTop: '60px'}}>
<div className="mx-auto px-5 sm:px-8" style={{maxWidth: '1080px'}}>
<div className="text-center max-w-2xl mx-auto">
<span className="inline-flex items-center gap-2 text-xs font-medium uppercase px-3 py-1.5" style={{border: '1px solid #000000', color: '#000000', letterSpacing: '0.12em', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
            How It Works
          </span>
<h2 className="mt-5 font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', lineHeight: '1.2', color: '#000000'}}>
            From exposed to
            <span style={{color: '#888888'}}>effortlessly protected</span>
</h2>
</div>
<div className="grid md:grid-cols-3 gap-[30px]" style={{marginTop: '60px'}}>
<div className="text-center px-4">
<span className="inline-flex items-center justify-center w-12 h-12 text-base font-semibold text-white" style={{backgroundColor: '#000000', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
              1
            </span>
<h3 className="mt-5 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Deploy to Your Cluster
            </h3>
<p className="mt-2.5 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
              A single Helm install drops the QLAD operator into your Kubernetes
              cluster. It auto-discovers every workload, service, and ingress —
              no re-architecture, no downtime, no new workflows.
            </p>
</div>
<div className="text-center px-4">
<span className="inline-flex items-center justify-center w-12 h-12 text-base font-semibold text-white" style={{backgroundColor: '#000000', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
              2
            </span>
<h3 className="mt-5 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Attest &amp; Issue
            </h3>
<p className="mt-2.5 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
              Every pod and node must cryptographically prove it's genuine
              before QLAD issues it a post-quantum certificate built on the new
              NIST standards (ML-KEM, ML-DSA). Quantum-safe mTLS, everywhere, by
              default.
            </p>
</div>
<div className="text-center px-4">
<span className="inline-flex items-center justify-center w-12 h-12 text-base font-semibold text-white" style={{backgroundColor: '#000000', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
              3
            </span>
<h3 className="mt-5 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Rotate &amp; Enforce
            </h3>
<p className="mt-2.5 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
              Short-lived certificates rotate themselves automatically. Drift or
              tampering triggers instant revocation, and audit-ready evidence
              exports itself — no tickets, no toil.
            </p>
</div>
</div>
<div className="mt-14 text-center">
<div className="inline-flex items-center gap-3 px-6 py-4 text-xs sm:text-sm" style={{backgroundColor: '#000000', color: '#E5E5E5', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
<span style={{color: '#777777'}}>$</span>
<span>helm install qlad qlad/operator -n qlad-system</span>
</div>
<p className="mt-4 text-xs" style={{color: '#999999'}}>
            One command. Every workload in your cluster becomes quantum-safe.
          </p>
</div>
</div>
</section>

<section id="confidential" style={{padding: '56px 0', backgroundColor: '#000000', marginTop: '60px'}}>
<div className="mx-auto px-5 sm:px-8" style={{maxWidth: '1080px'}}>
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7">
<span className="inline-flex items-center gap-2 text-xs font-medium uppercase px-3 py-1.5" style={{border: '1px solid #444444', color: '#BBBBBB', letterSpacing: '0.12em', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
              The Breakthrough
            </span>
<h2 className="mt-5 font-semibold tracking-tight text-white" style={{fontFamily: '\'Inter Tight\', sans-serif', fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', lineHeight: '1.2'}}>
              Trust orchestration,
              <span style={{color: '#888888'}}>quantum-secured</span>
</h2>
<p className="mt-4 max-w-xl" style={{fontSize: '1.125rem', lineHeight: '1.6', color: '#999999'}}>
              QLAD orchestrates trust across your containerized workloads:
              hardware-secured enclaves keep data encrypted even while it's
              being processed, while post-quantum encryption protects it at rest
              and in transit — no matter which cloud it runs on.
            </p>
<p className="mt-4 max-w-xl text-sm" style={{lineHeight: '1.6', color: '#999999'}}>
              Until now, that meant rare specialist expertise and months of
              engineering. QLAD turns it into a default — enclaves, attestation,
              and quantum-safe key release orchestrated automatically across
              AWS, Azure, GCP, and on-prem.
            </p>
<div className="mt-8 space-y-3">
<span className="flex items-center gap-2 text-sm" style={{color: '#999999'}}>
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#FFFFFF'}} width="18"></iconify-icon>
                No enclave expertise required
              </span>
<span className="flex items-center gap-2 text-sm" style={{color: '#999999'}}>
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#FFFFFF'}} width="18"></iconify-icon>
                Attestation and key release fully automated
              </span>
<span className="flex items-center gap-2 text-sm" style={{color: '#999999'}}>
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#FFFFFF'}} width="18"></iconify-icon>
                Runs on standard cloud hardware (Intel TDX, AMD SEV-SNP)
              </span>
<span className="flex items-center gap-2 text-sm" style={{color: '#999999'}}>
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" style={{color: '#FFFFFF'}} width="18"></iconify-icon>
                One consistent trust layer across multiple clouds
              </span>
</div>
</div>
<div className="lg:col-span-5">
<div style={{backgroundColor: '#0A0A0A', border: '1px solid #333333'}}>
<div className="flex items-center justify-between px-5 py-3" style={{borderBottom: '1px solid #222222'}}>
<span className="flex items-center gap-2 text-xs font-medium uppercase" style={{color: '#777777', letterSpacing: '0.08em', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
<iconify-icon icon="solar:lock-keyhole-linear" strokeWidth="1.5" width="16"></iconify-icon>
                  Data protection coverage
                </span>
</div>
<div className="flex items-center justify-between px-5 py-4 text-xs" style={{borderBottom: '1px solid #222222', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
<span style={{color: '#777777'}}>Data at rest</span>
<span style={{color: '#FFFFFF'}}>Encrypted ✓</span>
</div>
<div className="flex items-center justify-between px-5 py-4 text-xs" style={{borderBottom: '1px solid #222222', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
<span style={{color: '#777777'}}>Data in transit</span>
<span style={{color: '#FFFFFF'}}>Quantum-safe ✓</span>
</div>
<div className="flex items-center justify-between px-5 py-4 text-xs" style={{fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
<span style={{color: '#777777'}}>Data in use</span>
<span style={{color: '#FFFFFF'}}>Enclave-protected ✓</span>
</div>
</div>
<p className="mt-4 text-xs text-center" style={{color: '#777777'}}>
              The last gap in encryption — closed by default.
            </p>
</div>
</div>
</div>
</section>

<section id="usecases" style={{padding: '56px 0', marginTop: '60px'}}>
<div className="mx-auto px-5 sm:px-8" style={{maxWidth: '1080px'}}>
<div className="text-center max-w-2xl mx-auto">
<span className="inline-flex items-center gap-2 text-xs font-medium uppercase px-3 py-1.5" style={{border: '1px solid #000000', color: '#000000', letterSpacing: '0.12em', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
            Use Cases
          </span>
<h2 className="mt-5 font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', lineHeight: '1.2', color: '#000000'}}>
            Built for data
            <span style={{color: '#888888'}}>that can't afford to leak</span>
</h2>
<p className="mt-4" style={{fontSize: '1.125rem', lineHeight: '1.6', color: '#666666'}}>
            If your data still matters in five years, it needs quantum-safe
            protection today. QLAD is built for the organizations where that
            stakes the most.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]" style={{marginTop: '60px'}}>
<div className="p-[30px] hover:-translate-y-0.5" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6', transition: 'transform 300ms ease'}}>
<span className="inline-flex items-center justify-center w-11 h-11" style={{border: '1px solid #000000', color: '#000000'}}>
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="22"></iconify-icon>
</span>
<h3 className="mt-5 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Financial Services
            </h3>
<p className="mt-2.5 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
              Transactions and customer records are prime targets for
              harvest-now-decrypt-later attacks. QLAD makes them quantum-safe
              and generates DORA-ready evidence automatically.
            </p>
</div>
<div className="p-[30px] hover:-translate-y-0.5" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6', transition: 'transform 300ms ease'}}>
<span className="inline-flex items-center justify-center w-11 h-11" style={{border: '1px solid #000000', color: '#000000'}}>
<iconify-icon icon="solar:health-linear" strokeWidth="1.5" width="22"></iconify-icon>
</span>
<h3 className="mt-5 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Healthcare &amp; Life Sciences
            </h3>
<p className="mt-2.5 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
              Patient records stay sensitive for decades — far past the quantum
              horizon. QLAD protects them at rest, in transit, and in use,
              without slowing down care.
            </p>
</div>
<div className="p-[30px] hover:-translate-y-0.5" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6', transition: 'transform 300ms ease'}}>
<span className="inline-flex items-center justify-center w-11 h-11" style={{border: '1px solid #000000', color: '#000000'}}>
<iconify-icon icon="solar:shield-star-linear" strokeWidth="1.5" width="22"></iconify-icon>
</span>
<h3 className="mt-5 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Government &amp; Defense
            </h3>
<p className="mt-2.5 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
              Classified and sovereign workloads demand provable trust at every
              layer. QLAD enforces hardware-attested, quantum-safe security
              across the entire stack.
            </p>
</div>
<div className="p-[30px] hover:-translate-y-0.5" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6', transition: 'transform 300ms ease'}}>
<span className="inline-flex items-center justify-center w-11 h-11" style={{border: '1px solid #000000', color: '#000000'}}>
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="22"></iconify-icon>
</span>
<h3 className="mt-5 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Critical Infrastructure
            </h3>
<p className="mt-2.5 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
              Energy, telecom, and utilities face NIS2 obligations and
              nation-state attackers. QLAD locks down operational systems
              without touching uptime.
            </p>
</div>
<div className="p-[30px] hover:-translate-y-0.5" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6', transition: 'transform 300ms ease'}}>
<span className="inline-flex items-center justify-center w-11 h-11" style={{border: '1px solid #000000', color: '#000000'}}>
<iconify-icon icon="solar:cpu-bolt-linear" strokeWidth="1.5" width="22"></iconify-icon>
</span>
<h3 className="mt-5 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              AI &amp; Model Protection
            </h3>
<p className="mt-2.5 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
              Your models and training data are crown jewels. QLAD keeps them
              encrypted even while inference runs — protecting IP from cloud
              providers and insiders alike.
            </p>
</div>
<div className="p-[30px] hover:-translate-y-0.5" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6', transition: 'transform 300ms ease'}}>
<span className="inline-flex items-center justify-center w-11 h-11" style={{border: '1px solid #000000', color: '#000000'}}>
<iconify-icon icon="solar:cloud-linear" strokeWidth="1.5" width="22"></iconify-icon>
</span>
<h3 className="mt-5 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Multi-Tenant SaaS
            </h3>
<p className="mt-2.5 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
              Prove tenant isolation cryptographically, not contractually. QLAD
              gives every customer verifiable, quantum-safe separation — a sales
              asset, not a cost center.
            </p>
</div>
</div>
</div>
</section>
<section id="action" style={{padding: '56px 0', backgroundColor: '#F7F7F7', marginTop: '60px'}}>
<div className="mx-auto px-5 sm:px-8" style={{maxWidth: '1080px'}}>
<div className="text-center max-w-2xl mx-auto">
<span className="inline-flex items-center gap-2 text-xs font-medium uppercase px-3 py-1.5" style={{border: '1px solid #000000', color: '#000000', letterSpacing: '0.12em', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
            Example Use Case
          </span>
<h2 className="mt-5 font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', lineHeight: '1.2', color: '#000000'}}>
            Route every prompt
            <span style={{color: '#888888'}}>to the right model, safely</span>
</h2>
<p className="mt-4" style={{fontSize: '1.125rem', lineHeight: '1.6', color: '#666666'}}>
            The QLAD Router classifies each request in real time. Complex
            reasoning goes to a premium frontier model. Everything else runs on
            open-source models like DeepSeek V4 — deployed in your own
            Kubernetes cluster inside a QLAD-secured enclave, so your data is
            never exposed.
          </p>
</div>
<div className="mt-12 p-4 sm:p-8" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6'}}>
<svg aria-label="Animated diagram: a user request flows into the QLAD Router, which sends complex requests to a frontier model and standard requests to a DeepSeek V4 deployment running in a Kubernetes cluster, secured by a QLAD enclave." className="w-full" role="img" viewbox="0 0 900 460">
<path d="M190 230 L314 230" fill="none" stroke="#CCCCCC" stroke-dasharray="5 5" strokeWidth="1.5"></path>
<path d="M528 230 C600 230 595 105 650 105" fill="none" stroke="#CCCCCC" stroke-dasharray="5 5" strokeWidth="1.5"></path>
<path d="M528 230 C580 230 575 324 620 324" fill="none" stroke="#CCCCCC" stroke-dasharray="5 5" strokeWidth="1.5"></path>
<circle fill="#000000" r="5">
<animatemotion dur="3.6s" path="M190 230 L528 230 C600 230 595 105 650 105" repeatcount="indefinite"></animatemotion>
</circle>
<circle fill="#000000" opacity="0" r="5">
<animate attributename="opacity" begin="1.8s" dur="0.01s" fill="freeze" values="0;1"></animate>
<animatemotion begin="1.8s" dur="3.6s" path="M190 230 L528 230 C580 230 575 324 620 324" repeatcount="indefinite"></animatemotion>
</circle>
<text fill="#999999" fontSize="10" style={{fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', letterSpacing: '0.08em'}} text-anchor="middle" x="592" y="150">
              COMPLEX REASONING
            </text>
<text fill="#999999" fontSize="10" style={{fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', letterSpacing: '0.08em'}} text-anchor="middle" x="572" y="296">
              STANDARD REQUEST
            </text>
<rect fill="#FFFFFF" height="60" stroke="#000000" strokeWidth="1.5" width="170" x="20" y="200"></rect>
<text fill="#000000" fontSize="14" font-weight="600" style={{fontFamily: '\'Inter Tight\', sans-serif'}} text-anchor="middle" x="105" y="226">
              User Request
            </text>
<text fill="#999999" fontSize="10" style={{fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}} text-anchor="middle" x="105" y="245">
              prompt → api
            </text>
<rect fill="none" height="96" stroke="#000000" stroke-opacity="0.35" width="222" x="314" y="182">
<animate attributename="stroke-opacity" dur="2.4s" repeatcount="indefinite" values="0.35;0;0.35"></animate>
</rect>
<rect fill="#000000" height="80" width="206" x="322" y="190"></rect>
<image height="36" href="https://qlad.com/wp-content/uploads/2024/12/Solid_HexLock.svg" style={{filter: 'brightness(0) invert(1)'}} width="36" x="338" y="212"/>
<text fill="#FFFFFF" fontSize="14" font-weight="600" style={{fontFamily: '\'Inter Tight\', sans-serif'}} x="386" y="226">
              QLAD Router
            </text>
<text fill="#888888" fontSize="9" style={{fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}} x="386" y="246">
              classify · route · attest
            </text>
<rect fill="#FFFFFF" height="70" stroke="#000000" strokeWidth="1.5" width="200" x="650" y="70"></rect>
<text fill="#000000" fontSize="14" font-weight="600" style={{fontFamily: '\'Inter Tight\', sans-serif'}} text-anchor="middle" x="750" y="100">
              Frontier Model
            </text>
<text fill="#999999" fontSize="10" style={{fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}} text-anchor="middle" x="750" y="119">
              fable-5 · premium · $$$
            </text>
<rect fill="#FAFAFA" height="200" stroke="#999999" stroke-dasharray="6 4" strokeWidth="1" width="262" x="620" y="240"></rect>
<text fill="#777777" fontSize="9" style={{fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', letterSpacing: '0.06em'}} x="636" y="263">
              ⎈ KUBERNETES CLUSTER · ns: qlad-system
            </text>
<rect fill="#FFFFFF" height="98" stroke="#000000" strokeWidth="1.5" width="222" x="640" y="278"></rect>
<text fill="#000000" fontSize="14" font-weight="600" style={{fontFamily: '\'Inter Tight\', sans-serif'}} text-anchor="middle" x="751" y="302">
              DeepSeek V4
            </text>
<text fill="#999999" fontSize="9" style={{fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}} text-anchor="middle" x="751" y="320">
              deployment · 3/3 replicas ready
            </text>
<rect fill="#000000" height="16" width="22" x="710" y="332"></rect>
<text fill="#FFFFFF" fontSize="9" text-anchor="middle" x="721" y="344">
              ✓
            </text>
<rect fill="#000000" height="16" width="22" x="740" y="332"></rect>
<text fill="#FFFFFF" fontSize="9" text-anchor="middle" x="751" y="344">
              ✓
            </text>
<rect fill="#000000" height="16" width="22" x="770" y="332"></rect>
<text fill="#FFFFFF" fontSize="9" text-anchor="middle" x="781" y="344">
              ✓
            </text>
<text fill="#999999" fontSize="8" style={{fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}} text-anchor="middle" x="751" y="364">
              qlad.io/enclave: required
            </text>
<rect fill="#000000" height="28" width="178" x="662" y="394"></rect>
<text fill="#FFFFFF" fontSize="9" style={{fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', letterSpacing: '0.04em'}} text-anchor="middle" x="751" y="412">
              ⬡ QLAD ENCLAVE · ATTESTED ✓
            </text>
</svg>
</div>
<div className="grid md:grid-cols-2 gap-[30px] mt-[30px]">
<div className="p-[30px]" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6'}}>
<span className="inline-flex items-center justify-center w-11 h-11" style={{border: '1px solid #000000', color: '#000000'}}>
<iconify-icon icon="solar:cpu-bolt-linear" strokeWidth="1.5" width="22"></iconify-icon>
</span>
<h3 className="mt-5 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Intelligence when it's worth it
            </h3>
<p className="mt-2.5 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
              Requests that genuinely need frontier-grade reasoning are routed
              to premium models — so you only pay top-tier prices for top-tier
              problems.
            </p>
</div>
<div className="p-[30px]" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6'}}>
<span className="inline-flex items-center justify-center w-11 h-11" style={{border: '1px solid #000000', color: '#000000'}}>
<iconify-icon icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="22"></iconify-icon>
</span>
<h3 className="mt-5 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Open source, provably secure
            </h3>
<p className="mt-2.5 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
              Everything else runs on open-source models like DeepSeek V4,
              deployed as a standard Kubernetes deployment inside QLAD-secured
              confidential containers. The model's origin no longer matters —
              your prompts and data stay encrypted, even while inference runs.
            </p>
</div>
</div>
</div>
</section>

<section id="team" style={{padding: '56px 0', backgroundColor: '#F7F7F7', marginTop: '60px'}}>
<div className="mx-auto px-5 sm:px-8" style={{maxWidth: '1080px'}}>
<div className="text-center max-w-2xl mx-auto">
<span className="inline-flex items-center gap-2 text-xs font-medium uppercase px-3 py-1.5" style={{border: '1px solid #000000', color: '#000000', letterSpacing: '0.12em', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
            The Team
          </span>
<h2 className="mt-5 font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', lineHeight: '1.2', color: '#000000'}}>
            Built by people who've
            <span style={{color: '#888888'}}>defended the hardest targets</span>
</h2>
<p className="mt-4" style={{fontSize: '1.125rem', lineHeight: '1.6', color: '#666666'}}>
            QLAD's team brings together engineers and operators from the world's
            most demanding security environments — planetary-scale platforms,
            intelligence agencies, and special operations.
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[30px]" style={{marginTop: '60px'}}>
<div className="text-center p-[24px]" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6'}}>
<span className="flex items-center justify-center h-8" style={{color: '#000000'}}>
<iconify-icon icon="simple-icons:meta" width="32"></iconify-icon>
</span>
<p className="mt-3 text-base font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Meta
            </p>
<p className="mt-1.5 text-xs" style={{lineHeight: '1.5', color: '#999999'}}>
              Security at planetary scale
            </p>
</div>
<div className="text-center p-[24px]" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6'}}>
<span className="flex items-center justify-center h-8" style={{color: '#000000'}}>
<iconify-icon icon="simple-icons:sony" width="56"></iconify-icon>
</span>
<p className="mt-3 text-base font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Sony
            </p>
<p className="mt-1.5 text-xs" style={{lineHeight: '1.5', color: '#999999'}}>
              Hardened global platforms
            </p>
</div>
<div className="text-center p-[24px]" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6'}}>
<span className="flex items-center justify-center h-8" style={{color: '#000000'}}>
<iconify-icon icon="solar:eye-scan-linear" strokeWidth="1.5" width="30"></iconify-icon>
</span>
<p className="mt-3 text-base font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Five Eyes
            </p>
<p className="mt-1.5 text-xs" style={{lineHeight: '1.5', color: '#999999'}}>
              Signals intelligence
            </p>
</div>
<div className="text-center p-[24px]" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6'}}>
<span className="flex items-center justify-center h-8" style={{color: '#000000'}}>
<iconify-icon icon="game-icons:trident" width="30"></iconify-icon>
</span>
<p className="mt-3 text-base font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Navy SEALs
            </p>
<p className="mt-1.5 text-xs" style={{lineHeight: '1.5', color: '#999999'}}>
              Special operations discipline
            </p>
</div>
<div className="text-center p-[24px]" style={{backgroundColor: '#FFFFFF', border: '1px solid #E6E6E6'}}>
<span className="flex items-center justify-center h-8" style={{color: '#000000'}}>
<iconify-icon icon="simple-icons:palantir" width="28"></iconify-icon>
</span>
<p className="mt-3 text-base font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
              Palantir
            </p>
<p className="mt-1.5 text-xs" style={{lineHeight: '1.5', color: '#999999'}}>
              Mission-critical data systems
            </p>
</div>
</div>
</div>
</section>



<section id="faq" style={{padding: '56px 0', marginTop: '60px'}}>
<div className="mx-auto px-5 sm:px-8" style={{maxWidth: '760px'}}>
<div className="text-center">
<span className="inline-flex items-center gap-2 text-xs font-medium uppercase px-3 py-1.5" style={{border: '1px solid #000000', color: '#000000', letterSpacing: '0.12em', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
            FAQ
          </span>
<h2 className="mt-5 font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', lineHeight: '1.2', color: '#000000'}}>
            Common questions
          </h2>
</div>
<div className="mt-12 divide-y" style={{borderTop: '1px solid #E6E6E6', borderBottom: '1px solid #E6E6E6'}}>
<div className="faq-item" style={{borderColor: '#E6E6E6'}}>
<button className="faq-trigger w-full flex items-center justify-between gap-4 text-left py-5 hover:text-[#666666]" style={{color: '#000000', transition: 'color 300ms ease'}}>
<span className="text-base font-semibold" style={{fontFamily: '\'Inter Tight\', sans-serif'}}>
                What does QLAD actually do?
              </span>
<iconify-icon className="faq-chevron shrink-0" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{transition: 'transform 300ms ease'}} width="20"></iconify-icon>
</button>
<div className="faq-panel overflow-hidden" style={{maxHeight: '0', transition: 'max-height 300ms ease'}}>
<p className="pb-6 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
                Quantum computers will soon be able to break the encryption that
                protects almost everything online. QLAD upgrades your
                organization to quantum-safe security and keeps it that way
                automatically — verifying, renewing, and enforcing protection
                across all your systems without your team lifting a finger.
              </p>
</div>
</div>
<div className="faq-item" style={{borderColor: '#E6E6E6'}}>
<button className="faq-trigger w-full flex items-center justify-between gap-4 text-left py-5 hover:text-[#666666]" style={{color: '#000000', transition: 'color 300ms ease'}}>
<span className="text-base font-semibold" style={{fontFamily: '\'Inter Tight\', sans-serif'}}>
                Why should we care about quantum now?
              </span>
<iconify-icon className="faq-chevron shrink-0" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{transition: 'transform 300ms ease'}} width="20"></iconify-icon>
</button>
<div className="faq-panel overflow-hidden" style={{maxHeight: '0', transition: 'max-height 300ms ease'}}>
<p className="pb-6 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
                Attackers are already capturing encrypted data today to decrypt
                it once quantum computers arrive — a strategy known as "harvest
                now, decrypt later." Any data that still matters in five years —
                financial, health, legal, strategic — needs quantum-safe
                protection now, not at some future deadline.
              </p>
</div>
</div>
<div className="faq-item" style={{borderColor: '#E6E6E6'}}>
<button className="faq-trigger w-full flex items-center justify-between gap-4 text-left py-5 hover:text-[#666666]" style={{color: '#000000', transition: 'color 300ms ease'}}>
<span className="text-base font-semibold" style={{fontFamily: '\'Inter Tight\', sans-serif'}}>
                Do we have to replace our existing tools?
              </span>
<iconify-icon className="faq-chevron shrink-0" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{transition: 'transform 300ms ease'}} width="20"></iconify-icon>
</button>
<div className="faq-panel overflow-hidden" style={{maxHeight: '0', transition: 'max-height 300ms ease'}}>
<p className="pb-6 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
                No. QLAD layers on top of what you already have — your cloud,
                your infrastructure, your security tools. Nothing is ripped out,
                and your teams keep working exactly as they do today; everything
                underneath simply becomes quantum-safe.
              </p>
</div>
</div>
<div className="faq-item" style={{borderColor: '#E6E6E6'}}>
<button className="faq-trigger w-full flex items-center justify-between gap-4 text-left py-5 hover:text-[#666666]" style={{color: '#000000', transition: 'color 300ms ease'}}>
<span className="text-base font-semibold" style={{fontFamily: '\'Inter Tight\', sans-serif'}}>
                How long does it take to get started?
              </span>
<iconify-icon className="faq-chevron shrink-0" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{transition: 'transform 300ms ease'}} width="20"></iconify-icon>
</button>
<div className="faq-panel overflow-hidden" style={{maxHeight: '0', transition: 'max-height 300ms ease'}}>
<p className="pb-6 text-sm" style={{lineHeight: '1.6', color: '#666666'}}>
                Most organizations are fully protected in under an hour. There's
                no migration project, no downtime, and no specialist hires —
                QLAD handles the complexity so you don't have to.
              </p>
</div>
</div>
</div>
</div>
</section>

<section id="cta" style={{padding: '56px 0', marginTop: '60px'}}>
<div className="mx-auto px-5 sm:px-8" style={{maxWidth: '1080px'}}>
<div className="text-center px-6 py-14 sm:py-16" style={{backgroundColor: '#000000'}}>
<img alt="" className="mx-auto h-14 w-14" src="https://qlad.com/wp-content/uploads/2024/12/Solid_HexLock.svg" style={{filter: 'brightness(0) invert(1)'}}/>
<h2 className="mt-6 font-semibold tracking-tight text-white" style={{fontFamily: '\'Inter Tight\', sans-serif', fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', lineHeight: '1.2'}}>
            Be ready
            <span style={{color: '#888888'}}>before it matters</span>
</h2>
<p className="mt-4 max-w-xl mx-auto" style={{fontSize: '1.125rem', lineHeight: '1.6', color: '#999999'}}>
            Join the private preview and make your organization quantum-secure
            in under an hour — no migration project, no new headcount.
          </p>
<div className="mt-8 flex flex-wrap justify-center gap-4">
<a className="inline-flex items-center gap-2 text-sm font-semibold uppercase px-6 py-3 text-black bg-white hover:bg-[#E5E5E5]" href="#" style={{letterSpacing: '0.06em', transition: 'background-color 300ms ease'}}>
              Request Early Access
              <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 text-sm font-semibold uppercase px-6 py-3 text-white hover:bg-white hover:text-black" href="https://qlad-seed.vercel.app" style={{border: '1px solid #FFFFFF', letterSpacing: '0.06em', transition: 'background-color 300ms ease, color 300ms ease'}}>
<iconify-icon icon="solar:square-top-down-linear" strokeWidth="1.5" width="18"></iconify-icon>
              View the Preview Site
            </a>
</div>
</div>
</div>
</section>

<footer style={{marginTop: '60px', borderTop: '1px solid #E6E6E6', padding: '56px 0 32px'}}>
<div className="mx-auto px-5 sm:px-8" style={{maxWidth: '1080px'}}>
<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-[30px]">
<div className="lg:col-span-2">
<a className="flex items-center gap-2.5" href="#">
<img alt="QLAD HexLock" className="h-8 w-8" src="https://qlad.com/wp-content/uploads/2024/12/Solid_HexLock.svg" style={{filter: 'brightness(0)'}}/>
<span className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Inter Tight\', sans-serif', color: '#000000'}}>
                QLAD
              </span>
</a>
<p className="mt-4 text-sm max-w-xs" style={{lineHeight: '1.6', color: '#666666'}}>
              QLAD keeps your organization's trust unbreakable — automatically,
              continuously, and without disruption.
            </p>
<div className="mt-5 flex items-center gap-3">
<a aria-label="GitHub" className="flex items-center justify-center w-9 h-9 hover:bg-black hover:text-white" href="#" style={{border: '1px solid #000000', color: '#000000', transition: 'background-color 300ms ease, color 300ms ease'}}>
<iconify-icon icon="solar:code-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="flex items-center justify-center w-9 h-9 hover:bg-black hover:text-white" href="#" style={{border: '1px solid #000000', color: '#000000', transition: 'background-color 300ms ease, color 300ms ease'}}>
<iconify-icon icon="solar:case-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a aria-label="X" className="flex items-center justify-center w-9 h-9 hover:bg-black hover:text-white" href="#" style={{border: '1px solid #000000', color: '#000000', transition: 'background-color 300ms ease, color 300ms ease'}}>
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
<div>
<p className="text-xs font-medium uppercase" style={{color: '#999999', letterSpacing: '0.12em', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
              Product
            </p>
<ul className="mt-4 space-y-2.5">
<li>
<a className="text-sm hover:text-black" href="#platform" style={{color: '#666666', transition: 'color 300ms ease'}}>
                  Platform
                </a>
</li>
<li>
<a className="text-sm hover:text-black" href="#how" style={{color: '#666666', transition: 'color 300ms ease'}}>
                  How It Works
                </a>
</li>
<li>
<a className="text-sm hover:text-black" href="https://qlad-seed.vercel.app" style={{color: '#666666', transition: 'color 300ms ease'}}>
                  Preview Site
                </a>
</li>
<li>
<a className="text-sm hover:text-black" href="#" style={{color: '#666666', transition: 'color 300ms ease'}}>
                  Changelog
                </a>
</li>
</ul>
</div>
<div>
<p className="text-xs font-medium uppercase" style={{color: '#999999', letterSpacing: '0.12em', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
              Resources
            </p>
<ul className="mt-4 space-y-2.5">
<li>
<a className="text-sm hover:text-black" href="#" style={{color: '#666666', transition: 'color 300ms ease'}}>
                  Documentation
                </a>
</li>
<li>
<a className="text-sm hover:text-black" href="#" style={{color: '#666666', transition: 'color 300ms ease'}}>
                  PQC Migration Guide
                </a>
</li>
<li>
<a className="text-sm hover:text-black" href="#" style={{color: '#666666', transition: 'color 300ms ease'}}>
                  Whitepaper
                </a>
</li>
<li>
<a className="text-sm hover:text-black" href="#faq" style={{color: '#666666', transition: 'color 300ms ease'}}>
                  FAQ
                </a>
</li>
</ul>
</div>
<div>
<p className="text-xs font-medium uppercase" style={{color: '#999999', letterSpacing: '0.12em', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'}}>
              Company
            </p>
<ul className="mt-4 space-y-2.5">
<li>
<a className="text-sm hover:text-black" href="#" style={{color: '#666666', transition: 'color 300ms ease'}}>
                  About
                </a>
</li>
<li>
<a className="text-sm hover:text-black" href="#" style={{color: '#666666', transition: 'color 300ms ease'}}>
                  Contact
                </a>
</li>
<li>
<a className="text-sm hover:text-black" href="mailto:hello@qlad.com" style={{color: '#666666', transition: 'color 300ms ease'}}>
                  hello@qlad.com
                </a>
</li>
<li>
<a className="text-sm hover:text-black" href="#" style={{color: '#666666', transition: 'color 300ms ease'}}>
                  Security Disclosure
                </a>
</li>
</ul>
</div>
</div>
<div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{borderTop: '1px solid #E6E6E6'}}>
<p className="text-xs" style={{color: '#999999'}}>
            © 2025 QLAD. All rights reserved.
          </p>
<div className="flex items-center gap-6">
<a className="text-xs hover:text-black" href="#" style={{color: '#999999', transition: 'color 300ms ease'}}>
              Privacy Policy
            </a>
<a className="text-xs hover:text-black" href="#" style={{color: '#999999', transition: 'color 300ms ease'}}>
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
