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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '-50px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Unobserve to fire only once as requested
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
            });
        });
    
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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E5E5]">
<div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-[#5C4CFF] flex items-center justify-center text-white">
<iconify-icon icon="solar:cpu-bolt-linear" style={{strokeWidth: '1.5'}} width="1.25rem"></iconify-icon>
</div>
<span className="font-display font-medium text-lg tracking-tighter text-[#171717]">AIBUDDY</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#525252] hover:text-[#171717] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-[#525252] hover:text-[#171717] transition-colors" href="#platform">Platform</a>
<a className="text-sm font-medium text-[#525252] hover:text-[#171717] transition-colors" href="#impact">Impact</a>
<a className="text-sm font-medium text-[#525252] hover:text-[#171717] transition-colors" href="#company">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-[#171717] hover:text-[#5C4CFF] transition-colors" href="#">Log in</a>
<a className="px-5 py-2.5 rounded-full bg-[#5C4CFF] text-white text-sm font-medium hover:bg-[#4a3ce0] transition-colors shadow-sm hover:shadow-md" href="#">Book Audit</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-[#FAFAFA] overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
<div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] bg-[#D280FF]/10 blur-3xl rounded-full"></div>
<div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] bg-[#5C4CFF]/10 blur-3xl rounded-full"></div>
<div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E5E5E5] mb-8 reveal">
<span className="flex h-2 w-2 rounded-full bg-[#00E5A8]"></span>
<span className="text-xs font-medium tracking-wider uppercase text-[#525252]">AI Strategy &amp; Implementation</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-[#171717] leading-[1.1] mb-6 reveal delay-100">
                Transform your business with <br className="hidden md:block"/>
<span className="text-gradient">intelligent systems</span>
</h1>
<p className="text-lg md:text-xl text-[#525252] max-w-2xl mx-auto mb-10 reveal delay-200 font-light leading-relaxed">
                We design and deploy autonomous AI agents and machine learning pipelines that scale your operations, cut costs, and unlock new revenue streams.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal delay-300">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#171717] text-white text-base font-medium hover:bg-neutral-800 transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5" href="#">
                    Start Your Transformation
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#171717] border border-[#E5E5E5] text-base font-medium hover:border-[#5C4CFF] hover:text-[#5C4CFF] transition-all shadow-sm hover:-translate-y-0.5 flex items-center justify-center gap-2" href="#">
<iconify-icon icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="1.25rem"></iconify-icon>
                    See How It Works
                </a>
</div>
</div>

<div className="max-w-[1200px] mx-auto px-6 mt-20 relative z-10 reveal delay-400">
<div className="rounded-xl border border-[#E5E5E5] bg-white/60 backdrop-blur-xl p-2 md:p-4 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5C4CFF] to-[#D280FF]"></div>
<div className="bg-[#FAFAFA] rounded-lg border border-[#E5E5E5] aspect-video flex flex-col p-6">

<div className="flex justify-between items-center border-b border-[#E5E5E5] pb-4 mb-6">
<div className="flex gap-4">
<div className="h-4 w-24 bg-[#E5E5E5] rounded-full"></div>
<div className="h-4 w-16 bg-[#E5E5E5] rounded-full"></div>
<div className="h-4 w-20 bg-[#E5E5E5] rounded-full"></div>
</div>
<div className="h-8 w-24 bg-[#5C4CFF]/10 rounded-full flex items-center justify-center">
<div className="h-2 w-12 bg-[#5C4CFF] rounded-full"></div>
</div>
</div>

<div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="col-span-2 flex flex-col gap-4">
<div className="h-32 bg-white rounded-xl border border-[#E5E5E5] p-4 flex items-end gap-2">

<div className="w-full bg-[#E5E5E5] rounded-t-sm h-[30%]"></div>
<div className="w-full bg-[#E5E5E5] rounded-t-sm h-[50%]"></div>
<div className="w-full bg-[#5C4CFF] rounded-t-sm h-[80%]"></div>
<div className="w-full bg-[#E5E5E5] rounded-t-sm h-[60%]"></div>
<div className="w-full bg-[#D280FF] rounded-t-sm h-[90%]"></div>
<div className="w-full bg-[#E5E5E5] rounded-t-sm h-[40%]"></div>
</div>
<div className="grid grid-cols-2 gap-4 flex-1">
<div className="bg-white rounded-xl border border-[#E5E5E5] p-4">
<div className="h-3 w-1/3 bg-[#E5E5E5] rounded-full mb-4"></div>
<div className="h-8 w-1/2 bg-[#171717] rounded-lg"></div>
</div>
<div className="bg-white rounded-xl border border-[#E5E5E5] p-4">
<div className="h-3 w-1/3 bg-[#E5E5E5] rounded-full mb-4"></div>
<div className="h-8 w-1/2 bg-[#171717] rounded-lg"></div>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-[#E5E5E5] p-4 flex flex-col gap-4">
<div className="h-3 w-1/2 bg-[#E5E5E5] rounded-full mb-2"></div>
<div className="h-10 bg-[#FAFAFA] rounded-lg border border-[#E5E5E5] w-full"></div>
<div className="h-10 bg-[#FAFAFA] rounded-lg border border-[#E5E5E5] w-full"></div>
<div className="h-10 bg-[#FAFAFA] rounded-lg border border-[#E5E5E5] w-full"></div>
<div className="h-10 bg-[#FAFAFA] rounded-lg border border-[#E5E5E5] w-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-[#E5E5E5] bg-white">
<div className="max-w-[1200px] mx-auto px-6 text-center reveal">
<p className="text-sm text-[#737373] mb-8 font-medium">Trusted by forward-thinking teams globally</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale">
<span className="font-display text-xl font-medium tracking-tight text-[#171717]">ACME CORP</span>
<span className="font-display text-xl font-medium tracking-tight text-[#171717]">GLOBEX</span>
<span className="font-display text-xl font-medium tracking-tight text-[#171717]">SOYUZ</span>
<span className="font-display text-xl font-medium tracking-tight text-[#171717]">INITRODE</span>
<span className="font-display text-xl font-medium tracking-tight text-[#171717]">UMBRELLA</span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-heading font-medium tracking-tight text-[#171717] mb-4">Comprehensive AI Strategy</h2>
<p className="text-base text-[#525252] font-light">From initial audit to full-scale deployment, we provide the architectural foundation and engineering muscle to make AI work for you.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 rounded-xl border border-[#E5E5E5] bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group reveal delay-100">
<div className="w-12 h-12 rounded-lg bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center mb-6 group-hover:bg-[#5C4CFF]/10 group-hover:border-[#5C4CFF]/20 transition-colors">
<iconify-icon className="text-[#171717] group-hover:text-[#5C4CFF] transition-colors" icon="solar:target-linear" style={{strokeWidth: '1.5'}} width="1.5rem"></iconify-icon>
</div>
<h3 className="text-xl font-heading font-medium tracking-tight text-[#171717] mb-3">Strategic Roadmapping</h3>
<p className="text-sm text-[#525252] font-light leading-relaxed">Identify high-impact use cases within your organization and develop a phased approach to AI integration that minimizes risk.</p>
</div>

<div className="p-8 rounded-xl border border-[#E5E5E5] bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group reveal delay-200">
<div className="w-12 h-12 rounded-lg bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center mb-6 group-hover:bg-[#5C4CFF]/10 group-hover:border-[#5C4CFF]/20 transition-colors">
<iconify-icon className="text-[#171717] group-hover:text-[#5C4CFF] transition-colors" icon="solar:cpu-bolt-linear" style={{strokeWidth: '1.5'}} width="1.5rem"></iconify-icon>
</div>
<h3 className="text-xl font-heading font-medium tracking-tight text-[#171717] mb-3">Custom LLM Solutions</h3>
<p className="text-sm text-[#525252] font-light leading-relaxed">Fine-tuning and deploying large language models tailored to your proprietary data and specific industry requirements.</p>
</div>

<div className="p-8 rounded-xl border border-[#E5E5E5] bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group reveal delay-300">
<div className="w-12 h-12 rounded-lg bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center mb-6 group-hover:bg-[#5C4CFF]/10 group-hover:border-[#5C4CFF]/20 transition-colors">
<iconify-icon className="text-[#171717] group-hover:text-[#5C4CFF] transition-colors" icon="solar:workflow-linear" style={{strokeWidth: '1.5'}} width="1.5rem"></iconify-icon>
</div>
<h3 className="text-xl font-heading font-medium tracking-tight text-[#171717] mb-3">Workflow Automation</h3>
<p className="text-sm text-[#525252] font-light leading-relaxed">Connect disparate systems with intelligent agents that handle repetitive tasks, data entry, and complex multi-step processes.</p>
</div>

<div className="p-8 rounded-xl border border-[#E5E5E5] bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group reveal delay-100">
<div className="w-12 h-12 rounded-lg bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center mb-6 group-hover:bg-[#5C4CFF]/10 group-hover:border-[#5C4CFF]/20 transition-colors">
<iconify-icon className="text-[#171717] group-hover:text-[#5C4CFF] transition-colors" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="1.5rem"></iconify-icon>
</div>
<h3 className="text-xl font-heading font-medium tracking-tight text-[#171717] mb-3">Governance &amp; Ethics</h3>
<p className="text-sm text-[#525252] font-light leading-relaxed">Implement robust frameworks to ensure your AI systems are fair, transparent, secure, and compliant with emerging regulations.</p>
</div>

<div className="p-8 rounded-xl border border-[#E5E5E5] bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group reveal delay-200">
<div className="w-12 h-12 rounded-lg bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center mb-6 group-hover:bg-[#5C4CFF]/10 group-hover:border-[#5C4CFF]/20 transition-colors">
<iconify-icon className="text-[#171717] group-hover:text-[#5C4CFF] transition-colors" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="1.5rem"></iconify-icon>
</div>
<h3 className="text-xl font-heading font-medium tracking-tight text-[#171717] mb-3">Predictive Analytics</h3>
<p className="text-sm text-[#525252] font-light leading-relaxed">Transform historical data into forward-looking insights to optimize inventory, forecast demand, and predict customer behavior.</p>
</div>

<div className="p-8 rounded-xl border border-[#E5E5E5] bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group reveal delay-300">
<div className="w-12 h-12 rounded-lg bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center mb-6 group-hover:bg-[#5C4CFF]/10 group-hover:border-[#5C4CFF]/20 transition-colors">
<iconify-icon className="text-[#171717] group-hover:text-[#5C4CFF] transition-colors" icon="solar:server-square-linear" style={{strokeWidth: '1.5'}} width="1.5rem"></iconify-icon>
</div>
<h3 className="text-xl font-heading font-medium tracking-tight text-[#171717] mb-3">Infrastructure Scaling</h3>
<p className="text-sm text-[#525252] font-light leading-relaxed">Design cloud architectures optimized for machine learning workloads, balancing performance requirements with cost efficiency.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#171717] relative overflow-hidden">

<div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#5C4CFF]/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#D280FF]/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white mb-6">Quantifiable impact at enterprise scale.</h2>
<p className="text-lg text-neutral-400 font-light mb-8">We don't just build technology; we engineer business outcomes. Our implementations are designed to deliver measurable ROI within the first quarter of deployment.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00E5A8] mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="1.5rem"></iconify-icon>
<span className="text-neutral-300 text-sm">Average deployment time reduced by 40%</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00E5A8] mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="1.5rem"></iconify-icon>
<span className="text-neutral-300 text-sm">SOC2 Type II compliant infrastructure standard</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#00E5A8] mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="1.5rem"></iconify-icon>
<span className="text-neutral-300 text-sm">Dedicated engineering pod for every enterprise client</span>
</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4 md:gap-8">
<div className="bg-neutral-800/50 border border-neutral-700 backdrop-blur-sm p-8 rounded-2xl reveal delay-100">
<div className="text-4xl md:text-5xl font-display font-medium text-white mb-2 tracking-tight">85<span className="text-[#D280FF]">%</span></div>
<div className="text-sm text-neutral-400 font-medium">Process Automation</div>
</div>
<div className="bg-neutral-800/50 border border-neutral-700 backdrop-blur-sm p-8 rounded-2xl reveal delay-200">
<div className="text-4xl md:text-5xl font-display font-medium text-white mb-2 tracking-tight">3.2<span className="text-[#5C4CFF]">x</span></div>
<div className="text-sm text-neutral-400 font-medium">ROI in Year One</div>
</div>
<div className="bg-neutral-800/50 border border-neutral-700 backdrop-blur-sm p-8 rounded-2xl reveal delay-300">
<div className="text-4xl md:text-5xl font-display font-medium text-white mb-2 tracking-tight">50<span className="text-[#00E5A8]">M+</span></div>
<div className="text-sm text-neutral-400 font-medium">API Calls Handled</div>
</div>
<div className="bg-neutral-800/50 border border-neutral-700 backdrop-blur-sm p-8 rounded-2xl reveal delay-400">
<div className="text-4xl md:text-5xl font-display font-medium text-white mb-2 tracking-tight">99.9<span className="text-[#13BDDA]">%</span></div>
<div className="text-sm text-neutral-400 font-medium">System Uptime</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<span className="text-xs font-medium tracking-wider uppercase text-[#5C4CFF] mb-2 block">Methodology</span>
<h2 className="text-3xl md:text-4xl font-heading font-medium tracking-tight text-[#171717] mb-4">A proven path to AI maturity</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-1/8 right-1/8 h-px bg-[#E5E5E5] z-0" style={{width: '75%', marginLeft: '12.5%'}}></div>
<div className="relative z-10 text-center reveal delay-100">
<div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-[#FAFAFA] shadow-sm flex items-center justify-center mb-6">
<span className="text-2xl font-display font-medium text-[#5C4CFF]">01</span>
</div>
<h3 className="text-lg font-heading font-medium tracking-tight text-[#171717] mb-2">Discovery Audit</h3>
<p className="text-sm text-[#737373] font-light">Deep dive into your current tech stack and operational bottlenecks.</p>
</div>
<div className="relative z-10 text-center reveal delay-200">
<div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-[#FAFAFA] shadow-sm flex items-center justify-center mb-6">
<span className="text-2xl font-display font-medium text-[#5C4CFF]">02</span>
</div>
<h3 className="text-lg font-heading font-medium tracking-tight text-[#171717] mb-2">Solution Design</h3>
<p className="text-sm text-[#737373] font-light">Architecting custom models and mapping integration pathways.</p>
</div>
<div className="relative z-10 text-center reveal delay-300">
<div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-[#FAFAFA] shadow-sm flex items-center justify-center mb-6">
<span className="text-2xl font-display font-medium text-[#5C4CFF]">03</span>
</div>
<h3 className="text-lg font-heading font-medium tracking-tight text-[#171717] mb-2">Development</h3>
<p className="text-sm text-[#737373] font-light">Agile implementation of agents, LLMs, and data pipelines.</p>
</div>
<div className="relative z-10 text-center reveal delay-400">
<div className="w-24 h-24 mx-auto bg-[#5C4CFF] text-white rounded-full border-4 border-[#FAFAFA] shadow-md flex items-center justify-center mb-6">
<span className="text-2xl font-display font-medium">04</span>
</div>
<h3 className="text-lg font-heading font-medium tracking-tight text-[#171717] mb-2">Deployment &amp; Scale</h3>
<p className="text-sm text-[#737373] font-light">Seamless rollout, monitoring, and iterative improvements.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-[#E5E5E5]">
<div className="max-w-[800px] mx-auto px-6 text-center reveal">
<iconify-icon className="text-[#E5E5E5] mb-6" icon="solar:quote-left-linear" style={{strokeWidth: '1.5'}} width="3rem"></iconify-icon>
<h3 className="text-2xl md:text-3xl font-heading font-medium tracking-tight text-[#171717] leading-relaxed mb-8">
                "AI Buddy didn't just sell us a tool; they re-architected our entire customer support flow. The custom LLM they deployed reduced our resolution time by 60% within a month."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center overflow-hidden">
<iconify-icon className="text-[#525252]" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}} width="1.5rem"></iconify-icon>
</div>
<div className="text-left">
<div className="text-sm font-medium text-[#171717]">Sarah Jenkins</div>
<div className="text-xs text-[#737373]">VP of Operations, TechFlow</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-24 bg-white">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6">
<div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#5C4CFF] to-[#D280FF] px-6 py-16 md:py-24 text-center reveal shadow-xl">

<div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white mb-6">Ready to build the future?</h2>
<p className="text-base md:text-lg text-white/80 font-light mb-10">Stop experimenting with AI and start deploying production-ready systems that drive real business value.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#171717] text-base font-medium hover:bg-neutral-50 transition-all shadow-sm hover:shadow-lg" href="#">
                            Schedule a Consultation
                        </a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent text-white border border-white/30 text-base font-medium hover:bg-white/10 transition-all" href="#">
                            View Documentation
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-[#E5E5E5] pt-16 pb-8">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-[#5C4CFF] flex items-center justify-center text-white">
<iconify-icon icon="solar:cpu-bolt-linear" style={{strokeWidth: '1.5'}} width="1rem"></iconify-icon>
</div>
<span className="font-display font-medium text-base tracking-tighter text-[#171717]">AIBUDDY</span>
</a>
<p className="text-sm text-[#737373] font-light max-w-xs mb-6">Architecting the next generation of intelligent enterprise software.</p>
<div className="flex gap-4">
<a className="text-[#737373] hover:text-[#5C4CFF] transition-colors" href="#">
<iconify-icon icon="solar:twitter-linear" style={{strokeWidth: '1.5'}} width="1.25rem"></iconify-icon>
</a>
<a className="text-[#737373] hover:text-[#5C4CFF] transition-colors" href="#">
<iconify-icon icon="solar:figma-linear" style={{strokeWidth: '1.5'}} width="1.25rem"></iconify-icon>
</a>
<a className="text-[#737373] hover:text-[#5C4CFF] transition-colors" href="#">
<iconify-icon icon="solar:github-linear" style={{strokeWidth: '1.5'}} width="1.25rem"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-[#171717] mb-4">Solutions</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#525252] font-light hover:text-[#5C4CFF] transition-colors" href="#">AI Strategy Audit</a></li>
<li><a className="text-sm text-[#525252] font-light hover:text-[#5C4CFF] transition-colors" href="#">Custom LLMs</a></li>
<li><a className="text-sm text-[#525252] font-light hover:text-[#5C4CFF] transition-colors" href="#">Process Automation</a></li>
<li><a className="text-sm text-[#525252] font-light hover:text-[#5C4CFF] transition-colors" href="#">Data Pipelines</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-[#171717] mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#525252] font-light hover:text-[#5C4CFF] transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-[#525252] font-light hover:text-[#5C4CFF] transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-[#525252] font-light hover:text-[#5C4CFF] transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-[#525252] font-light hover:text-[#5C4CFF] transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-[#171717] mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#525252] font-light hover:text-[#5C4CFF] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-[#525252] font-light hover:text-[#5C4CFF] transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-[#525252] font-light hover:text-[#5C4CFF] transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-[#E5E5E5] flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-[#737373] font-light">© 2024 AI Buddy Consulting. All rights reserved.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#00E5A8]"></div>
<span className="text-xs text-[#737373] font-light">All systems operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
