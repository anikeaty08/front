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
      

<header className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-xl z-50 border-b border-zinc-800">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="text-2xl font-bold tracking-widest text-zinc-50 uppercase font-playfair">
          BA LAW
        </div>
<div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
<a className="hover:text-[#C0EE3C] transition-colors" href="#solutions">
            Solutions
          </a>
<a className="hover:text-[#C0EE3C] transition-colors" href="#fit">
            Operational Fit
          </a>
<a className="hover:text-[#C0EE3C] transition-colors" href="#approach">
            Approach
          </a>
</div>
<a className="text-xs font-bold uppercase tracking-widest border border-[#C0EE3C] text-[#C0EE3C] px-6 py-2.5 rounded-full hover:bg-[#C0EE3C] hover:text-zinc-950 transition-all" href="#cta">
          Request Talent
        </a>
</div>
</header>
<main className="flex-grow pt-20">

<section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-50 tracking-tight leading-[1.05] mb-6 font-playfair">
            Paralegal Support Built for Modern Legal Workflows.
          </h1>
<p className="text-lg md:text-xl font-light text-zinc-300 mb-6 leading-relaxed border-l-2 border-[#C0EE3C] pl-6">
            BA Law provides scalable paralegal staffing solutions designed to
            strengthen legal operations, improve responsiveness, and support
            fast-moving legal environments.
          </p>
<p className="text-sm font-light text-zinc-500 mb-10 leading-relaxed max-w-lg">
            From litigation support to transactional coordination and intake
            management, our approach prioritizes organizational fit,
            communication, and long-term alignment.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-4 text-sm font-bold uppercase tracking-widest bg-[#C0EE3C] text-zinc-950 rounded-full hover:bg-[#A3D12A] transition-colors" href="#cta">
              Request Talent
            </a>
<a className="inline-flex justify-center items-center px-8 py-4 text-sm font-bold uppercase tracking-widest border border-zinc-700 text-zinc-300 rounded-full hover:bg-zinc-800 hover:text-zinc-50 transition-all" href="#">
              Speak With Our Team
            </a>
</div>
</div>
<div className="relative h-[400px] lg:h-[650px] rounded-[2rem] overflow-hidden bg-zinc-900 w-full">
<img alt="Modern Law Office" className="absolute inset-0 w-full h-full object-cover img-cinematic object-center" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/40 to-transparent mix-blend-overlay"></div>
</div>
</section>

<section className="border-y border-zinc-800 bg-zinc-900" id="solutions">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-5 h-[500px] rounded-[2rem] overflow-hidden relative">
<img alt="Legal Professionals" className="absolute inset-0 w-full h-full object-cover img-cinematic object-left" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="lg:col-span-7 lg:pl-8">
<span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C0EE3C] mb-6 block">
              Modern Paralegal Support
            </span>
<h2 className="text-4xl md:text-5xl font-bold text-zinc-50 tracking-tight mb-8 font-playfair">
              Staffing Solutions That Move With Your Practice.
            </h2>
<div className="space-y-6 text-base font-light text-zinc-400 leading-relaxed">
<p>
                Today’s legal environments require paralegal support that
                extends beyond administrative execution alone.
              </p>
<p>
                Legal teams increasingly depend on professionals capable of
                supporting:
              </p>
<ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mt-6">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C0EE3C] text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">Fast-moving workflows</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C0EE3C] text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">Client communication</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C0EE3C] text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">Document coordination</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C0EE3C] text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">Litigation preparation</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C0EE3C] text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">Transactional support</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C0EE3C] text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">Workflow continuity</span>
</li>
</ul>
<p className="pt-6 border-t border-zinc-800 mt-8 text-zinc-300 font-bold">
                BA Law helps firms build scalable paralegal staffing solutions
                aligned with the pace and complexity of modern legal operations.
              </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
<h2 className="text-4xl md:text-5xl font-bold text-zinc-50 tracking-tight text-center mb-16 font-playfair">
          Areas of Paralegal Support.
        </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 rounded-[2rem] bg-zinc-950 border border-zinc-800 hover:border-[#C0EE3C] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
<div className="h-14 w-14 rounded-full bg-zinc-900 flex items-center justify-center mb-6 text-zinc-400 group-hover:bg-[#C0EE3C] group-hover:text-zinc-950 transition-colors">
<iconify-icon className="text-xl" icon="solar:documents-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-zinc-50 mb-3 tracking-tight font-playfair">
              Litigation Paralegal Support
            </h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed flex-grow">
              Support for case preparation, document organization, filings,
              discovery coordination, and litigation workflows.
            </p>
</div>

<div className="p-8 rounded-[2rem] bg-zinc-950 border border-zinc-800 hover:border-[#C0EE3C] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
<div className="h-14 w-14 rounded-full bg-zinc-900 flex items-center justify-center mb-6 text-zinc-400 group-hover:bg-[#C0EE3C] group-hover:text-zinc-950 transition-colors">
<iconify-icon className="text-xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-zinc-50 mb-3 tracking-tight font-playfair">
              Real Estate Paralegal Support
            </h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed flex-grow">
              Operational support for transactional environments requiring
              speed, organization, and coordination.
            </p>
</div>

<div className="p-8 rounded-[2rem] bg-zinc-950 border border-zinc-800 hover:border-[#C0EE3C] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
<div className="h-14 w-14 rounded-full bg-zinc-900 flex items-center justify-center mb-6 text-zinc-400 group-hover:bg-[#C0EE3C] group-hover:text-zinc-950 transition-colors">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-zinc-50 mb-3 tracking-tight font-playfair">
              Intake &amp; Case Coordination
            </h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed flex-grow">
              Professionals positioned to support client intake, communication
              flow, and case organization.
            </p>
</div>

<div className="p-8 rounded-[2rem] bg-zinc-950 border border-zinc-800 hover:border-[#C0EE3C] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
<div className="h-14 w-14 rounded-full bg-zinc-900 flex items-center justify-center mb-6 text-zinc-400 group-hover:bg-[#C0EE3C] group-hover:text-zinc-950 transition-colors">
<iconify-icon className="text-xl" icon="solar:notebook-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-zinc-50 mb-3 tracking-tight font-playfair">
              Administrative Legal Coordination
            </h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed flex-grow">
              Support for scheduling, documentation, workflow management, and
              internal legal operations.
            </p>
</div>
</div>
</section>

<section className="bg-[#C0EE3C] text-zinc-900 py-24 lg:py-32 relative overflow-hidden" id="fit">
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<h2 className="text-4xl md:text-5xl font-bold text-zinc-950 tracking-tight mb-8 font-playfair">
              Built Around Workflow Alignment.
            </h2>
<div className="space-y-6 text-base font-light leading-relaxed max-w-lg">
<p>
                Strong legal staffing solutions depend on more than technical
                qualifications. They depend on organizational fit.
              </p>
<p>BA Law approaches paralegal staffing with a focus on:</p>
<ul className="space-y-3 mt-4 mb-8">
<li className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-zinc-950"></div>
<span className="text-sm">Communication standards</span>
</li>
<li className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-zinc-950"></div>
<span className="text-sm">Responsiveness expectations</span>
</li>
<li className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-zinc-950"></div>
<span className="text-sm">Workflow alignment</span>
</li>
<li className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-zinc-950"></div>
<span className="text-sm">Organizational alignment</span>
</li>
<li className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-zinc-950"></div>
<span className="text-sm">Long-term support continuity</span>
</li>
</ul>
<p className="text-zinc-800 text-sm font-medium">
                Our objective is to help firms build staffing solutions that
                strengthen day-to-day execution and operational efficiency.
              </p>
</div>
</div>
<div className="relative h-[400px] lg:h-[650px] rounded-l-[4rem] rounded-tr-[4rem] overflow-hidden">
<img alt="Legal Strategy Meeting" className="absolute inset-0 w-full h-full object-cover img-dark-cinematic" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
<h2 className="text-4xl md:text-5xl font-bold text-zinc-50 tracking-tight mb-16 max-w-2xl font-playfair">
          Why Firms Prioritize Integrated Paralegal Support.
        </h2>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-16">

<div className="flex gap-6">
<div className="flex-shrink-0 mt-1 text-slate-900">
<iconify-icon className="text-3xl text-[#C0EE3C]" icon="solar:bolt-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold text-zinc-50 mb-2 tracking-tight font-playfair">
                Improved Responsiveness
              </h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">
                Integrated staffing solutions help firms move more efficiently
                across active matters and client communication.
              </p>
</div>
</div>

<div className="flex gap-6">
<div className="flex-shrink-0 mt-1 text-slate-900">
<iconify-icon className="text-3xl text-[#C0EE3C]" icon="solar:infinity-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold text-zinc-50 mb-2 tracking-tight font-playfair">
                Operational Continuity
              </h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">
                Long-term support alignment strengthens consistency across
                workflows and internal coordination.
              </p>
</div>
</div>

<div className="flex gap-6">
<div className="flex-shrink-0 mt-1 text-slate-900">
<iconify-icon className="text-3xl text-[#C0EE3C]" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold text-zinc-50 mb-2 tracking-tight font-playfair">
                Scalable Support
              </h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">
                Support structures can evolve alongside growing workloads and
                organizational complexity.
              </p>
</div>
</div>

<div className="flex gap-6">
<div className="flex-shrink-0 mt-1 text-slate-900">
<iconify-icon className="text-3xl text-[#C0EE3C]" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold text-zinc-50 mb-2 tracking-tight font-playfair">
                Workflow Efficiency
              </h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">
                Professionals aligned with internal systems improve execution
                quality and communication flow.
              </p>
</div>
</div>
</div>

<div className="mt-24 h-[300px] md:h-[450px] w-full rounded-[2rem] overflow-hidden relative border border-zinc-800">
<img alt="Abstract Architectural Workflows" className="absolute inset-0 w-full h-full object-cover img-cinematic object-center" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="border-y border-zinc-800 bg-zinc-900" id="approach">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 flex flex-col md:flex-row gap-16 justify-between">
<div className="md:w-1/3">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-50 tracking-tight sticky top-32 font-playfair leading-tight">
              Designed for Modern Legal Teams.
            </h2>
</div>
<div className="md:w-1/2 space-y-8 text-base font-light text-zinc-400 leading-relaxed">
<p>
              BA Law’s paralegal support model is designed around the hiring
              realities of modern legal practice.
            </p>
<div className="p-10 bg-zinc-950 border border-zinc-800 rounded-[2rem] text-zinc-300">
<p className="mb-6 font-bold text-zinc-50 text-sm uppercase tracking-widest">
                Our focus is on helping firms create staffing solutions that:
              </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 border-b border-zinc-800 pb-4">
<iconify-icon className="text-[#C0EE3C] text-xl mt-0.5" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-sm">Improve operational efficiency</span>
</li>
<li className="flex items-start gap-3 border-b border-zinc-800 pb-4">
<iconify-icon className="text-[#C0EE3C] text-xl mt-0.5" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-sm">Strengthen communication flow</span>
</li>
<li className="flex items-start gap-3 border-b border-zinc-800 pb-4">
<iconify-icon className="text-[#C0EE3C] text-xl mt-0.5" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-sm">Support evolving workloads</span>
</li>
<li className="flex items-start gap-3 border-b border-zinc-800 pb-4">
<iconify-icon className="text-[#C0EE3C] text-xl mt-0.5" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-sm">
                    Align effectively into existing teams
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C0EE3C] text-xl mt-0.5" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-sm">Maintain long-term continuity</span>
</li>
</ul>
</div>
<p className="text-lg text-zinc-300 font-bold tracking-tight">
              We believe scalable legal support starts with organizational
              alignment.
            </p>
</div>
</div>
</section>

<section className="relative py-32 lg:py-48 overflow-hidden bg-zinc-950 text-center flex flex-col items-center justify-center" id="cta">

<img alt="Nighttime Legal Office Tower" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay grayscale" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
<h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-50 tracking-tighter mb-8 leading-none font-playfair">
            Strengthen Your Legal Staffing Infrastructure.
          </h2>
<p className="text-lg md:text-xl font-light text-white/90 mb-12 max-w-2xl leading-relaxed">
            BA Law helps legal organizations build scalable paralegal staffing
            solutions aligned with the pace and complexity of modern legal
            environments.
          </p>
<a className="inline-flex justify-center items-center px-10 py-5 text-sm font-bold uppercase tracking-widest bg-[#C0EE3C] text-zinc-950 rounded-full hover:bg-[#A3D12A] transition-colors" href="#">
            Request Talent
          </a>
</div>
</section>
</main>

<footer className="bg-zinc-950 text-zinc-500 py-12 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-2xl font-bold tracking-widest text-zinc-50 uppercase font-playfair">
          BA LAW
        </div>
<div className="text-xs font-light text-stone-500">
          © 2024 BA Law Paralegal Solutions. All rights reserved.
        </div>
</div>
</footer>

    </>
  );
}
