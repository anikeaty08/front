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
      

<nav className="absolute top-0 left-0 right-0 z-50 animate-fade-in">
<div className="w-full relative z-50 bg-[#050505]/70 backdrop-blur-xl border-b border-white/[0.04] transition-all duration-500">
<div className="lg:px-8 md:h-[88px] flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-3 group transition-all duration-300" href="/home">
<img alt="Binary Ideas AI" className="sm:h-14 group-hover:opacity-100 transition-opacity opacity-100 h-12 object-contain cursor-pointer" onclick="window.location.href='/home'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6cfce7de-8596-4baa-9aa3-865182f341e9_320w.png?w=800&amp;q=80"/>
</a>

<div className="hidden lg:flex items-center gap-2">
<a className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-full transition-all duration-300" href="/home">Home</a>

<div className="group/services relative py-6 -my-6">
<button className="px-4 py-2 flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-full transition-all duration-300">
                    Services
                    <svg className="w-3.5 h-3.5 text-slate-500 group-hover/services:text-white group-hover/services:-rotate-180 transition-transform duration-300 ease-out" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="absolute top-[88px] left-1/2 -translate-x-1/2 w-[880px] opacity-0 invisible group-hover/services:opacity-100 group-hover/services:visible transition-all duration-300 ease-out translate-y-3 group-hover/services:translate-y-0 before:absolute before:-top-6 before:left-0 before:w-full before:h-6">

<div className="relative bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-2 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.8)] shadow-blue-900/10 flex overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl">
<div className="absolute -top-[100px] -left-[100px] w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full">
</div>
</div>

<div className="relative w-[32%] bg-white/[0.02] border border-white/[0.04] rounded-xl p-6 flex flex-col justify-between overflow-hidden">

<div className="absolute inset-0 opacity-20 pointer-events-none">
<svg className="stroke-slate-500 fill-none" height="100%" viewbox="0 0 200 200" width="100%" xmlns="http://www.w3.org/2000/svg">
<circle cx="40" cy="40" r="2"></circle>
<circle cx="160" cy="60" r="2"></circle>
<circle cx="80" cy="150" r="2"></circle>
<circle cx="140" cy="140" r="2"></circle>
<line x1="40" x2="160" y1="40" y2="60"></line>
<line x1="40" x2="80" y1="40" y2="150"></line>
<line x1="160" x2="140" y1="60" y2="140"></line>
<line x1="80" x2="140" y1="150" y2="140"></line>
<path d="M40 40 Q100 100 160 60" stroke-dasharray="4 4"></path>
<path d="M80 150 Q110 100 140 140" stroke-dasharray="4 4"></path>
</svg>
</div>
<div className="relative z-10">
<div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center mb-6 shadow-inner shadow-blue-500/10">
<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83">
</path>
</svg>
</div>
<h3 className="text-base font-medium text-white tracking-tight mb-2">AI Services</h3>
<p className="text-sm text-slate-400 leading-relaxed font-normal">AI systems designed to automate operations,
                improve response times, and help businesses scale more efficiently.</p>
</div>
</div>

<div className="relative w-[68%] p-6 grid grid-cols-2 gap-x-10 gap-y-8">

<div className="flex flex-col gap-6">

<div>
<h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Automation</h4>
<div className="flex flex-col gap-1.5">
<a className="group/item flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-white/[0.04] hover:shadow-sm transition-all duration-300" href="/ai-consulting">
<div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-slate-400 group-hover/item:text-blue-400 group-hover/item:bg-blue-500/10 group-hover/item:border-blue-500/20 transition-all duration-300">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5 M9 18h6 M10 22h4">
</path>
</svg>
</div>
<div>
<div className="text-sm font-medium text-slate-200 group-hover/item:text-white transition-colors flex items-center gap-1.5">
                        AI Consulting
                      </div>
<p className="text-xs text-slate-500 mt-0.5 line-clamp-1 font-normal tracking-wide">Strategic
                        implementation and optimization.</p>
</div>
</a>
<a className="group/item flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-white/[0.04] hover:shadow-sm transition-all duration-300" href="/ai-email-marketing">
<div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-slate-400 group-hover/item:text-blue-400 group-hover/item:bg-blue-500/10 group-hover/item:border-blue-500/20 transition-all duration-300">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z"></path>
</svg>
</div>
<div>
<div className="text-sm font-medium text-slate-200 group-hover/item:text-white transition-colors flex items-center gap-1.5">
                        AI Email Marketing
                      </div>
<p className="text-xs text-slate-500 mt-0.5 line-clamp-1 font-normal tracking-wide">SDesign and execute email campaigns</p>
</div>
</a>
<a className="group/item flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-white/[0.04] hover:shadow-sm transition-all duration-300" href="/ai-voice">
<div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-slate-400 group-hover/item:text-blue-400 group-hover/item:bg-blue-500/10 group-hover/item:border-blue-500/20 transition-all duration-300">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="10" rx="2" width="18" x="3" y="11"></rect>
<circle cx="12" cy="5" r="2"></circle>
<path d="M12 7v4"></path>
<line x1="8" x2="8" y1="16" y2="16"></line>
<line x1="16" x2="16" y1="16" y2="16"></line>
</svg>
</div>
<div>
<div className="text-sm font-medium text-slate-200 group-hover/item:text-white transition-colors flex items-center gap-1.5">
                        AI Voice Agents
                      </div>
<p className="text-xs text-slate-500 mt-0.5 line-clamp-1 font-normal tracking-wide">Answer calls and interact with customers</p>
</div>
</a>
<a className="group/item flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-white/[0.04] hover:shadow-sm transition-all duration-300" href="/ai-training">
<div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-slate-400 group-hover/item:text-blue-400 group-hover/item:bg-blue-500/10 group-hover/item:border-blue-500/20 transition-all duration-300">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="10" rx="2" width="18" x="3" y="11"></rect>
<circle cx="12" cy="5" r="2"></circle>
<path d="M12 7v4"></path>
<line x1="8" x2="8" y1="16" y2="16"></line>
<line x1="16" x2="16" y1="16" y2="16"></line>
</svg>
</div>
<div>
<div className="text-sm font-medium text-slate-200 group-hover/item:text-white transition-colors flex items-center gap-1.5">
                        AI Training
                      </div>
<p className="text-xs text-slate-500 mt-0.5 line-clamp-1 font-normal tracking-wide">Guide your team through using our innovative tools with ease.</p>
</div>
</a>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div>
<h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Growth</h4>
<div className="flex flex-col gap-1.5">
<a className="group/item flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-white/[0.04] hover:shadow-sm transition-all duration-300" href="/lead-generation">
<div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-slate-400 group-hover/item:text-blue-400 group-hover/item:bg-blue-500/10 group-hover/item:border-blue-500/20 transition-all duration-300">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<div>
<div className="text-sm font-medium text-slate-200 group-hover/item:text-white transition-colors flex items-center gap-1.5">
                        Lead Generation
                      </div>
<p className="text-xs text-slate-500 mt-0.5 line-clamp-1 font-normal tracking-wide">AI-powered
                        prospecting at scale.</p>
</div>
</a>
<a className="group/item flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-white/[0.04] hover:shadow-sm transition-all duration-300" href="/ai-chatbot">
<div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-slate-400 group-hover/item:text-blue-400 group-hover/item:bg-blue-500/10 group-hover/item:border-blue-500/20 transition-all duration-300">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</div>
<div>
<div className="text-sm font-medium text-slate-200 group-hover/item:text-white transition-colors flex items-center gap-1.5">
                        AI Chatbots
                      </div>
<p className="text-xs text-slate-500 mt-0.5 line-clamp-1 font-normal tracking-wide">24/7
                        conversational support agents.</p>
</div>
</a>
<a className="group/item flex items-start gap-3.5 p-2.5 -mx-2.5 rounded-xl hover:bg-white/[0.04] hover:shadow-sm transition-all duration-300" href="ai-social-media">
<div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-slate-400 group-hover/item:text-blue-400 group-hover/item:bg-blue-500/10 group-hover/item:border-blue-500/20 transition-all duration-300">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
</div>
<div>
<div className="text-sm font-medium text-slate-200 group-hover/item:text-white transition-colors flex items-center gap-1.5">
                        Social Media AI
                      </div>
<p className="text-xs text-slate-500 mt-0.5 line-clamp-1 font-normal tracking-wide">Maintain a vibrant online presence with timely posts and updates.</p>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<a className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] rounded-full transition-all duration-300" href="/contact-us">Contact</a>
</div>

<div className="flex items-center gap-4 z-50">
<a className="hidden lg:inline-flex relative group/btn" href="/contact-us">
<div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-30 group-hover/btn:opacity-60 transition-opacity duration-500">
</div>
<div className="relative items-center justify-center px-7 py-2.5 text-sm font-medium text-white bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 border border-blue-400/30 rounded-full transition-all duration-300 shadow-[0_2px_10px_rgba(37,99,235,0.2)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.4)] flex gap-2">
        Book Strategy Call
      </div>
</a>

<button aria-label="Open menu" className="lg:hidden inline-flex items-center justify-center p-2 text-slate-300 hover:text-white transition-colors" onclick="(function(){
                var m=document.getElementById('mobile-menu');
                if(m){
                m.classList.remove('translate-x-full');
                m.classList.add('translate-x-0');
                document.body.style.overflow='hidden';
                }
            })();">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>
</div>
</nav>

<div className="fixed inset-0 z-[100] translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] bg-[#050505] overflow-y-auto flex flex-col lg:hidden" id="mobile-menu">
<div className="h-[80px] md:h-[88px] px-6 flex items-center justify-between border-b border-white/[0.04] shrink-0">
<a className="flex items-center gap-3" href="/home">
<img alt="Binary Ideas AI" className="w-auto h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6cfce7de-8596-4baa-9aa3-865182f341e9_320w.png?w=800&amp;q=80"/>
</a>
<button className="p-2 text-slate-400 hover:text-white transition-colors" onclick="document.getElementById('mobile-menu').classList.add('translate-x-full'); document.getElementById('mobile-menu').classList.remove('translate-x-0'); document.body.style.overflow='auto';">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</button>
</div>
<div className="p-8 flex flex-col gap-6">
<a className="text-2xl font-medium tracking-tight text-white hover:text-blue-400 transition-colors" href="/home">Home</a>
<div className="flex flex-col">
<button className="flex items-center justify-between text-2xl font-medium tracking-tight text-white w-full py-1" onclick="document.getElementById('mobile-services').classList.toggle('hidden'); document.getElementById('mobile-services-icon').classList.toggle('rotate-180');">
                    Services
                    <svg className="w-6 h-6 transition-transform duration-300 text-slate-500" fill="none" id="mobile-services-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden flex-col gap-5 pl-5 border-l border-white/10 mt-6 mb-2" id="mobile-services">
<a className="text-xl text-slate-400 hover:text-white transition-colors" href="/ai-consulting">AI Consulting</a><br/>
<a className="text-xl text-slate-400 hover:text-white transition-colors" href="/ai-voice">AI Voice Agents</a><br/>
<a className="text-xl text-slate-400 hover:text-white transition-colors" href="/ai-lead-generation">Lead Gen AI Agents</a><br/>
<a className="text-xl text-slate-400 hover:text-white transition-colors" href="/ai-chatbot">Chatbot AI Agents</a><br/>
<a className="text-xl text-slate-400 hover:text-white transition-colors" href="/ai-social-media">Social Media AI Agents</a><br/>
<a className="text-xl text-slate-400 hover:text-white transition-colors" href="/ai-email-marketing">Email Marketing AI</a><br/>
<a className="text-xl text-slate-400 hover:text-white transition-colors" href="/ai-training">Training AI Agents</a>
</div>
</div>
<a className="text-2xl font-medium tracking-tight text-white hover:text-blue-400 transition-colors" href="/contact-us">Contact</a>
<a className="mt-8 relative flex items-center justify-center w-full px-8 py-4 text-lg font-medium text-white bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 border border-blue-400/30 rounded-2xl transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.3)]" href="/contact-us">
                Book Strategy Call
            </a>
</div>
</div>

<header className="overflow-hidden bg-center lg:bg-bottom lg:pt-48 lg:pb-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e59dc7c-5388-4968-94a4-6aab4bfed933_3840w.png?w=800&amp;q=80)] bg-cover pt-48 pb-10 relative">

<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none">
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8 animate-fade-up">
<iconify-icon className="" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Premium AI Lead Automation
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white leading-[1.1] mb-6 animate-fade-up delay-100">
                    Stop Losing Leads <br/>
<span className="text-slate-400">While Your Team Sleeps.</span>
</h1>
<p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl animate-fade-up delay-200">
                    We build AI systems that instantly respond to leads, book appointments, follow up automatically, and
                    handle repetitive customer conversations for local service businesses.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-300">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(59,130,246,0.3)]" href="#book">
                        Book Your Free AI Demo
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 backdrop-blur-sm" href="#how-it-works">
                        See How It Works
                    </a>
</div>

<div className="grid grid-cols-2 animate-fade-up delay-300 text-sm text-slate-400 bg-gray-950/40 rounded-md pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4">
<div className="flex text-slate-300 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        24/7 Lead Response
                    </div>
<div className="flex gap-2 text-slate-300 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Done-For-You Setup
                    </div>
<div className="flex gap-2 text-slate-300 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Custom-Trained AI
                    </div>
<div className="flex text-slate-300 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Local Business Focus
                    </div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in delay-200">

<div className="relative z-10 w-full max-w-md bg-[#0F172A]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 animate-float">
<div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:robot-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-semibold text-white tracking-tight">AI Assistant</div>
<div className="text-xs text-blue-400 flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                                    Online
                                </div>
</div>
</div>
<iconify-icon className="text-slate-400" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div className="space-y-4 mb-6">

<div className="flex justify-start">
<div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-300 max-w-[85%]">
                                Hi, do you have any availability for a consultation tomorrow afternoon?
                            </div>
</div>

<div className="flex justify-end">
<div className="shadow-blue-500/20 text-sm text-white bg-blue-500 max-w-[85%] rounded-2xl pt-3 pr-4 pb-3 pl-4 shadow-lg">
                                Hi there! 👋 Yes, I can help with that. We have openings at 2:00 PM or 4:00 PM tomorrow.
                                Which time works better for you?
                            </div>
</div>

<div className="flex justify-start">
<div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-300 max-w-[85%]">
                                2:00 PM would be great.
                            </div>
</div>

<div className="flex justify-end">
<div className="bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm max-w-[85%] shadow-lg shadow-blue-500/20">
                                Perfect. I've locked in 2:00 PM for you. You'll receive a calendar invite shortly! 📅
                            </div>
</div>
</div>
<div className="h-10 bg-white/5 rounded-xl border border-white/10 flex items-center px-4 text-xs text-slate-500">
                        AI is typing...
                    </div>
</div>


<div className="absolute -right-8 top-12 z-20 bg-white rounded-xl shadow-xl p-4 border border-slate-100 flex items-center gap-4 animate-float-delayed hidden md:flex">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon className="" icon="solar:bell-bing-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="">
<div className="text-xs text-slate-500 font-medium">New Lead via Google</div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Responded in 2s</div>
</div>
</div>

<div className="absolute -left-12 bottom-20 z-20 bg-white rounded-xl shadow-xl p-5 border border-slate-100 w-56 animate-float hidden md:block" style={{animationDelay: '2s'}}>
<div className="flex items-center gap-2 mb-3 text-sm font-semibold text-slate-900 tracking-tight">
<iconify-icon className="text-blue-500" icon="solar:calendar-linear"></iconify-icon>
                        Appointment Booked
                    </div>
<div className="space-y-2">
<div className="h-14 rounded-lg bg-slate-50 border border-slate-100 p-2 flex flex-col justify-center">
<div className="text-xs font-semibold text-slate-900">Consultation Call</div>
<div className="text-xs text-slate-500">Tomorrow, 2:00 PM</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:px-8 max-w-7xl mt-24 mr-auto ml-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100 gap-x-8 gap-y-8">
<div className="flex flex-col items-center justify-center text-center px-4">
<iconify-icon className="text-2xl text-blue-500 mb-2" height="48" icon="solar:stopwatch-linear" style={{strokeWidth: '1.5', color: 'rgb(59, 130, 246)'}} width="48"></iconify-icon>
<span className="text-lg font-normal text-slate-50 tracking-tight">Responds in Seconds</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<iconify-icon className="text-2xl text-blue-500 mb-2" height="48" icon="solar:moon-sleep-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
<span className="text-lg font-normal text-slate-50 tracking-tight">Works 24/7</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<iconify-icon className="text-2xl text-blue-500 mb-2" height="48" icon="solar:target-linear" style={{strokeWidth: '1.5', color: 'rgb(59, 130, 246)'}} width="48"></iconify-icon>
<span className="text-lg font-normal text-slate-50 tracking-tight">Never Misses a Lead</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<iconify-icon className="text-2xl text-blue-500 mb-2" height="48" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5', color: 'rgb(59, 130, 246)'}} width="48"></iconify-icon>
<span className="text-lg font-normal text-slate-50 tracking-tight">Automates Tasks</span>
</div>
</div>
</div>
</header>


<section className="py-24 lg:py-32 bg-[#F8F7F4]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                    Most Businesses Don't Have a Lead Problem.<br/>
<span className="text-blue-600">They Have a Follow-Up Problem.</span>
</h2>
<div className="space-y-6 text-slate-600 text-base leading-relaxed">
<p className="">
                        You spend thousands on marketing to generate calls and form fills. But when a lead reaches out
                        after hours, or when your front desk is busy with another customer, what happens?
                    </p>
<p className="">
<span className="font-semibold text-slate-900">The lead goes cold.</span> They call your competitor
                        who picks up the phone.
                    </p>
<ul className="space-y-4 mt-6">
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-red-500 text-sm" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="">
<div className="font-semibold text-slate-900 text-sm">Missed Calls = Lost Revenue</div>
<div className="text-sm">Every ignored inquiry is a potential customer handed to a
                                    competitor.</div>
</div>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-red-500 text-sm" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div className="">
<div className="font-semibold text-slate-900 text-sm">Overwhelmed Staff</div>
<div className="text-sm">Your team is stuck answering repetitive questions instead of
                                    serving clients.</div>
</div>
</li>
</ul>
</div>
</div>

<div className="bg-white border-slate-200/60 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-xl">
<div className="uppercase text-xs font-semibold text-slate-700 tracking-widest mb-6">The Old Way vs New Way
                </div>

<div className="flex opacity-100 mb-8 items-center justify-between">
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon className="" icon="solar:user-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-800">New Lead</span>
</div>
<div className="flex-1 h-px bg-slate-200 mx-4 relative">
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-[10px] uppercase font-medium text-slate-600 bg-white px-2">2 Hour Delay</span>
</div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
<iconify-icon icon="solar:ghost-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-red-500">Lost to Competitor</span>
</div>
</div>
<div className="h-px w-full bg-slate-100 mb-8"></div>

<div className="flex items-center justify-between">
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
<iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-900">New Lead</span>
</div>
<div className="flex-1 h-0.5 bg-blue-100 mx-4 relative">
<div className="absolute inset-y-0 left-0 bg-blue-500 w-full animate-[pulseGlow_3s_infinite]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="bg-white px-2 text-[10px] font-semibold text-blue-600 uppercase border border-blue-100 rounded-full">Instant AI Reply</span>
</div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
<iconify-icon className="" icon="solar:calendar-add-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-semibold text-blue-600">Appointment Booked</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white border-y border-slate-200/60" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                    Your AI Employee Handles The Busy Work Automatically
                </h2>
<p className="text-slate-500 text-base">
                    A seamless, invisible workflow that operates in the background, ensuring no opportunity slips through the cracks.
                </p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-100">
<div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"></div>
</div>
<div className="grid md:grid-cols-4 gap-8 relative z-10">

<div className="group relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:shadow-lg transition-all duration-300 relative z-10">
<iconify-icon className="text-3xl text-slate-700 group-hover:text-blue-500 transition-colors" icon="solar:incoming-call-linear"></iconify-icon>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-semibold flex items-center justify-center border-4 border-white">1</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Lead Comes In</h3>
<p className="text-sm text-slate-500">A prospect calls, texts, or fills out a form on your website.</p>
</div>

<div className="group relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:shadow-lg transition-all duration-300 relative z-10">
<iconify-icon className="text-3xl text-slate-700 group-hover:text-blue-500 transition-colors" icon="solar:bolt-linear"></iconify-icon>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-semibold flex items-center justify-center border-4 border-white">2</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">AI Responds Instantly</h3>
<p className="text-sm text-slate-500">Within seconds, our AI initiates a natural, human-like conversation.</p>
</div>

<div className="group relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:shadow-lg transition-all duration-300 relative z-10">
<iconify-icon className="text-3xl text-slate-700 group-hover:text-blue-500 transition-colors" icon="solar:clipboard-check-linear"></iconify-icon>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-semibold flex items-center justify-center border-4 border-white">3</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">AI Qualifies The Lead</h3>
<p className="text-sm text-slate-500">It asks the right questions to ensure they are a fit for your services.</p>
</div>

<div className="group relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:shadow-lg transition-all duration-300 relative z-10">
<iconify-icon className="text-3xl text-slate-700 group-hover:text-blue-500 transition-colors" icon="solar:calendar-mark-linear"></iconify-icon>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-semibold flex items-center justify-center border-4 border-white">4</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Appointment Booked</h3>
<p className="text-sm text-slate-500">The lead is scheduled directly into your calendar without human effort.</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden flex flex-col min-h-[90vh] lg:py-32 bg-gradient-to-t from-[#16356a] to-[#07162f] py-24 relative justify-center" id="use-cases">

<div className="w-full relative z-10 flex-grow flex items-center pt-12 lg:pt-0">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full gap-x-12 gap-y-12 items-center">

<div className="flex flex-col lg:col-span-4 lg:pl-12 lg:pr-0 xl:col-span-4 xl:pl-24 xl:pr-8 pr-6 pl-6 justify-center">
<h2 className="md:text-6xl lg:text-7xl leading-[1.05] text-5xl font-thin text-slate-50 tracking-tight mb-8">Built for <br className="hidden lg:block"/> Local Service <br className="hidden lg:block"/> Businesses</h2>
<p className="md:text-2xl leading-relaxed text-xl text-slate-200 max-w-md mb-10 font-thin">Custom-trained AI agents designed to handle the specific workflows, vocabulary, and operational needs of your industry.</p>
<div className="">
<button className="hover:scale-105 transition-transform shadow-rose-500/25 text-lg font-thin text-white bg-blue-500 rounded-full pt-3.5 pr-8 pb-3.5 pl-8">Explore</button>
</div>
</div>

<div className="lg:col-span-8 xl:col-span-8 pl-6 lg:pl-0 w-full overflow-hidden">
<div className="flex overflow-x-auto snap-x snap-mandatory lg:pr-24 [&amp;::-webkit-scrollbar]:hidden pt-8 pr-6 pb-12 gap-x-6 gap-y-6 items-center" id="slider-aura-emp71xwcx4o80hc3b" onscroll="document.getElementById('slide-counter-aura-emp71xwcx4o80hc3b').innerText = '0' + Math.min(6, Math.max(1, Math.round(this.scrollLeft / (this.children[0].offsetWidth + 24)) + 1))" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<div className="group relative bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 w-72 md:w-80 h-[36rem] md:h-[40rem] shrink-0 snap-start flex flex-col overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
</div>

<div className="relative w-full h-48 md:h-52 shrink-0 z-10 overflow-hidden bg-slate-100 border-b border-slate-100">
<img alt="Dental Clinics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
</div>

<div className="relative p-6 md:p-8 flex flex-col flex-grow z-10">
<div className="absolute -top-8 left-6 md:left-8 w-16 h-16 rounded-2xl bg-white p-1.5 shadow-sm z-20">
<div className="w-full h-full rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 transition-transform group-hover:scale-110 duration-500">
<svg className="lucide lucide-activity" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5.5c-.667 -1.667 -2 -2.5 -4 -2.5c-2.761 0 -5 2.239 -5 5c0 3.5 2.5 5.5 3 9c.428 2.99 2.5 3 3 3c2 0 3 -1 3 -3c0 -1 1 -2 2 -2s2 1 2 2c0 2 1 3 3 3c.5 0 2.572 -.01 3 -3c.5 -3.5 3 -5.5 3 -9c0 -2.761 -2.239 -5 -5 -5c-2 0 -3.333 .833 -4 2.5z">
</path>
</svg>
</div>
</div>
<div className="mt-6 flex flex-col h-full">
<h3 className="text-2xl md:text-3xl font-thin tracking-tight text-slate-900 mb-5 group-hover:text-blue-600 transition-colors duration-300">
          Dental Clinics</h3>
<div className="border-slate-100 border-t pt-5 space-y-4">
<div className="">
<span className="text-sm font-thin text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> Pain Point
                                        </span>
<p className="text-lg leading-relaxed text-slate-600 font-thin">High volume of missed calls during procedures.
            </p>
</div>
<div className="">
<span className="text-sm font-thin text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Outcome
                                        </span>
<p className="text-lg leading-relaxed text-slate-900 font-thin">Automatically answer FAQS and book cleanings
              24/7.</p>
</div>
</div>
</div>
</div>
</div>

<div className="group relative bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 w-72 md:w-80 h-[36rem] md:h-[40rem] shrink-0 snap-start flex flex-col overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
</div>
<div className="relative w-full h-48 md:h-52 shrink-0 z-10 overflow-hidden bg-slate-100 border-b border-slate-100">
<img alt="HVAC &amp; Plumbing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1651474738521-efacfb201039?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="relative p-6 md:p-8 flex flex-col flex-grow z-10">
<div className="absolute -top-8 left-6 md:left-8 w-16 h-16 rounded-2xl bg-white p-1.5 shadow-sm z-20">
<div className="w-full h-full rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 transition-transform group-hover:scale-110 duration-500">
<svg className="lucide lucide-flame" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z">
</path>
</svg>
</div>
</div>
<div className="mt-6 flex flex-col h-full">
<h3 className="text-2xl md:text-3xl font-thin tracking-tight text-slate-900 mb-5 group-hover:text-orange-500 transition-colors duration-300">
          HVAC &amp; Plumbing</h3>
<div className="border-slate-100 border-t pt-5 space-y-4">
<div className="">
<span className="text-sm font-thin text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> Pain Point
                                        </span>
<p className="text-lg leading-relaxed text-slate-600 font-thin">Emergency calls missed after normal hours.</p>
</div>
<div className="">
<span className="text-sm font-thin text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Outcome
                                        </span>
<p className="text-lg leading-relaxed text-slate-900 font-thin">Dispatch triage &amp; instant emergency
              scheduling.</p>
</div>
</div>
</div>
</div>
</div>

<div className="group relative bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 w-72 md:w-80 h-[36rem] md:h-[40rem] shrink-0 snap-start flex flex-col overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
</div>
<div className="relative w-full h-48 md:h-52 shrink-0 z-10 overflow-hidden bg-slate-100 border-b border-slate-100">
<img alt="Real Estate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="relative p-6 md:p-8 flex flex-col flex-grow z-10">
<div className="absolute -top-8 left-6 md:left-8 w-16 h-16 rounded-2xl bg-white p-1.5 shadow-sm z-20">
<div className="w-full h-full rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500 transition-transform group-hover:scale-110 duration-500">
<svg className="lucide lucide-home" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
</div>
</div>
<div className="mt-6 flex flex-col h-full">
<h3 className="text-2xl md:text-3xl font-thin tracking-tight text-slate-900 mb-5 group-hover:text-indigo-500 transition-colors duration-300">
          Real Estate</h3>
<div className="border-slate-100 border-t pt-5 space-y-4">
<div className="">
<span className="text-sm font-thin text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> Pain Point
                                        </span>
<p className="text-lg leading-relaxed text-slate-600 font-thin">Slow response time to Zillow/online leads.</p>
</div>
<div className="">
<span className="text-sm font-thin text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Outcome
                                        </span>
<p className="text-lg leading-relaxed text-slate-900 font-thin">Speed-to-lead under 5 seconds &amp; showing
              booked.</p>
</div>
</div>
</div>
</div>
</div>

<div className="group relative bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 w-72 md:w-80 h-[36rem] md:h-[40rem] shrink-0 snap-start flex flex-col overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-pink-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
</div>
<div className="relative w-full h-48 md:h-52 shrink-0 z-10 overflow-hidden bg-slate-100 border-b border-slate-100">
<img alt="Med Spas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="relative p-6 md:p-8 flex flex-col flex-grow z-10">
<div className="absolute -top-8 left-6 md:left-8 w-16 h-16 rounded-2xl bg-white p-1.5 shadow-sm z-20">
<div className="w-full h-full rounded-xl bg-pink-50 flex items-center justify-center text-pink-500 transition-transform group-hover:scale-110 duration-500">
<svg className="lucide lucide-sparkles" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z">
</path>
</svg>
</div>
</div>
<div className="mt-6 flex flex-col h-full">
<h3 className="text-2xl md:text-3xl font-thin tracking-tight text-slate-900 mb-5 group-hover:text-pink-500 transition-colors duration-300">
          Med Spas</h3>
<div className="border-slate-100 border-t pt-5 space-y-4">
<div className="">
<span className="text-sm font-thin text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> Pain Point
                                        </span>
<p className="text-lg leading-relaxed text-slate-600 font-thin">Front desk overwhelmed with pricing questions.
            </p>
</div>
<div className="">
<span className="text-sm font-thin text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Outcome
                                        </span>
<p className="text-lg leading-relaxed text-slate-900 font-thin">AI handles pricing queries and books
              consultations.</p>
</div>
</div>
</div>
</div>
</div>

<div className="group relative bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 w-72 md:w-80 h-[36rem] md:h-[40rem] shrink-0 snap-start flex flex-col overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
</div>
<div className="relative w-full h-48 md:h-52 shrink-0 z-10 overflow-hidden bg-slate-100 border-b border-slate-100">
<img alt="Cleaning Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="relative p-6 md:p-8 flex flex-col flex-grow z-10">
<div className="absolute -top-8 left-6 md:left-8 w-16 h-16 rounded-2xl bg-white p-1.5 shadow-sm z-20">
<div className="w-full h-full rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 transition-transform group-hover:scale-110 duration-500">
<svg className="lucide lucide-brush" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"></path>
<path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z">
</path>
</svg>
</div>
</div>
<div className="mt-6 flex flex-col h-full">
<h3 className="text-2xl md:text-3xl font-thin tracking-tight text-slate-900 mb-5 group-hover:text-emerald-500 transition-colors duration-300">
          Cleaning Services</h3>
<div className="space-y-4 pt-5 border-t border-slate-100">
<div>
<span className="text-sm font-thin text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> Pain Point
                                        </span>
<p className="text-lg leading-relaxed text-slate-600 font-thin">Complex quoting process slowing down sales.</p>
</div>
<div>
<span className="text-sm font-thin text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Outcome
                                        </span>
<p className="text-lg leading-relaxed text-slate-900 font-thin">Automated estimation based on square footage
              &amp; booking.</p>
</div>
</div>
</div>
</div>
</div>

<div className="group relative bg-white rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 w-72 md:w-80 h-[36rem] md:h-[40rem] shrink-0 snap-start flex flex-col overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
</div>
<div className="relative w-full h-48 md:h-52 shrink-0 z-10 overflow-hidden bg-slate-100 border-b border-slate-100">
<img alt="Contractors" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="relative p-6 md:p-8 flex flex-col flex-grow z-10">
<div className="absolute -top-8 left-6 md:left-8 w-16 h-16 rounded-2xl bg-white p-1.5 shadow-sm z-20">
<div className="w-full h-full rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 transition-transform group-hover:scale-110 duration-500">
<svg className="lucide lucide-pen-tool" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19 7-7 3 3-7 7-3-3z"></path>
<path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
<path d="m2 2 7.586 7.586"></path>
<circle cx="11" cy="11" r="2"></circle>
</svg>
</div>
</div>
<div className="mt-6 flex flex-col h-full">
<h3 className="text-2xl md:text-3xl font-thin tracking-tight text-slate-900 mb-5 group-hover:text-amber-500 transition-colors duration-300">
          Contractors</h3>
<div className="space-y-4 pt-5 border-t border-slate-100">
<div>
<span className="text-sm font-thin text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> Pain Point
                                        </span>
<p className="text-lg leading-relaxed text-slate-600 font-thin">Chasing unqualified leads on job sites.</p>
</div>
<div>
<span className="text-sm font-thin text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Outcome
                                        </span>
<p className="text-lg leading-relaxed text-slate-900 font-thin">Pre-qualification of budget and scope before
              human contact.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full mt-4 lg:mt-8 pb-4 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full gap-x-12 gap-y-12 items-center">

<div className="hidden lg:block lg:col-span-4 xl:col-span-4"></div>
<div className="col-span-1 lg:col-span-8 xl:col-span-8 pl-6 lg:pl-0 flex justify-between items-center pr-6 lg:pr-24">

<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white backdrop-blur-sm" onclick="document.getElementById('slider-aura-emp71xwcx4o80hc3b').scrollBy({ left: -320, behavior: 'smooth' })">
<svg className="lucide lucide-chevron-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white backdrop-blur-sm" onclick="document.getElementById('slider-aura-emp71xwcx4o80hc3b').scrollBy({ left: 320, behavior: 'smooth' })">
<svg className="lucide lucide-chevron-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="flex items-center gap-4 text-sm font-thin tracking-[0.2em] text-slate-400 uppercase">
<span className="text-white" id="slide-counter-aura-emp71xwcx4o80hc3b">01</span>
<div className="w-16 md:w-32 h-[1px] bg-slate-500/50"></div>
<span>06</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="results">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                    Businesses Are Winning More Leads Without Hiring More Staff
                </h2>
<p className="text-slate-500 text-base">Real outcomes from local businesses leveraging our AI infrastructure.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="space-y-6">

<div className="bg-[#07162F] rounded-2xl p-8 text-white">
<div className="text-4xl font-semibold tracking-tighter mb-2">+42%</div>
<div className="text-sm text-blue-300 font-medium mb-4">Increase in booked jobs</div>
<p className="text-sm text-slate-400 leading-relaxed">"We used to miss 3-4 calls a day while on the roof. Now the AI books them before we even climb down."</p>
<div className="mt-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs">MR</div>
<div className="text-xs">
<div className="font-semibold">Mike R.</div>
<div className="text-slate-400">Roofing Contractor</div>
</div>
</div>
</div>

<div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-green-500" icon="solar:graph-up-linear"></iconify-icon>
<span className="text-sm font-semibold text-slate-900 tracking-tight">After-Hours Conversion</span>
</div>
<div className="space-y-3">
<div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm flex justify-between items-center">
<span className="text-xs text-slate-500">8:30 PM Inquiry</span>
<span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">Responded</span>
</div>
<div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm flex justify-between items-center">
<span className="text-xs text-slate-500">11:15 PM Inquiry</span>
<span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">Booked</span>
</div>
<div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm flex justify-between items-center">
<span className="text-xs text-slate-500">6:00 AM Inquiry</span>
<span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">Booked</span>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white border border-slate-200/60 shadow-sm rounded-2xl p-8 h-full flex flex-col justify-between">
<div className="">
<div className="flex gap-1 text-yellow-400 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 text-base leading-relaxed mb-8">
                                "Implementation was seamless. Binary Ideas mapped out our exact sales flow, and within a week, the AI was handling our overflow calls and website chats. It feels like we hired a front-desk manager who never sleeps. It paid for itself in the first weekend."
                            </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-slate-100">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-sm">SL</div>
<div className="">
<div className="text-sm font-semibold text-slate-900">Sarah Jenkins</div>
<div className="text-xs text-slate-500">Owner, Elite Dental Spa</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-blue-500 rounded-2xl p-8 text-white relative overflow-hidden">
<div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
<iconify-icon className="" icon="solar:clock-circle-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="text-4xl font-semibold tracking-tighter mb-2">15+ Hrs</div>
<div className="text-sm text-blue-100 font-medium mb-4">Saved per week on admin</div>
<p className="text-sm text-blue-50 leading-relaxed">By automating follow-ups, qualification, and scheduling, businesses win back nearly two full working days.</p>
</div>
</div>

<div className="bg-white border border-slate-200/60 shadow-sm rounded-2xl p-6">
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                            "The speed to lead is insane. We beat every other plumber to the punch because the AI texts back within 2 seconds."
                        </p>
<div className="flex items-center gap-2">
<div className="text-xs font-semibold text-slate-900">David T.</div>
<div className="w-1 h-1 bg-slate-300 rounded-full"></div>
<div className="text-xs text-slate-500">Plumbing Services</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 overflow-hidden bg-[#F8F7F4] border-t pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-thin tracking-tight text-slate-900 mb-6">
                Why Businesses Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 font-extralight">Binary Ideas AI</span>
</h2>
<p className="text-slate-500 text-lg md:text-xl">We don't just sell software; we build operational infrastructure.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 gap-x-6 gap-y-6">

<div className="group relative bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 ease-out overflow-hidden z-10 flex flex-col h-full">
<div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors duration-500 pointer-events-none"></div>
<div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-slate-100 to-slate-200 group-hover:from-blue-500 group-hover:to-indigo-500 transition-colors duration-500"></div>
<div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-xl font-extralight tracking-tight text-slate-900 mb-3 relative z-10 group-hover:text-blue-600 transition-colors duration-300">Done-For-You Setup</h3>
<p className="text-sm md:text-base text-slate-500 leading-relaxed relative z-10">No learning curve. We build, train, and deploy the entire system into your existing tech stack.</p>
</div>

<div className="group relative bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 ease-out overflow-hidden z-10 flex flex-col h-full">
<div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors duration-500 pointer-events-none"></div>
<div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-slate-100 to-slate-200 group-hover:from-blue-500 group-hover:to-indigo-500 transition-colors duration-500"></div>
<div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
<h3 className="text-xl font-extralight tracking-tight text-slate-900 mb-3 relative z-10 group-hover:text-blue-600 transition-colors duration-300">Custom AI Training</h3>
<p className="text-sm md:text-base text-slate-500 leading-relaxed relative z-10">Your AI knows your pricing, your services, and speaks in your brand's unique tone of voice.</p>
</div>

<div className="group relative bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 ease-out overflow-hidden z-10 flex flex-col h-full">
<div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors duration-500 pointer-events-none"></div>
<div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-slate-100 to-slate-200 group-hover:from-blue-500 group-hover:to-indigo-500 transition-colors duration-500"></div>
<div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<h3 className="text-xl font-extralight tracking-tight text-slate-900 mb-3 relative z-10 group-hover:text-blue-600 transition-colors duration-300">Fast Deployment</h3>
<p className="text-sm md:text-base text-slate-500 leading-relaxed relative z-10">Go live in days, not months. Start capturing missed revenue almost immediately after onboarding.</p>
</div>

<div className="group relative bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 ease-out overflow-hidden z-10 flex flex-col h-full">
<div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors duration-500 pointer-events-none"></div>
<div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-slate-100 to-slate-200 group-hover:from-blue-500 group-hover:to-indigo-500 transition-colors duration-500"></div>
<div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="text-xl font-extralight tracking-tight text-slate-900 mb-3 relative z-10 group-hover:text-blue-600 transition-colors duration-300">Human-Centered Flow</h3>
<p className="text-sm md:text-base text-slate-500 leading-relaxed relative z-10">The AI knows when to handle it, and exactly when to pass complex issues to a real human.</p>
</div>

<div className="group relative bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 ease-out overflow-hidden z-10 flex flex-col h-full">
<div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors duration-500 pointer-events-none"></div>
<div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-slate-100 to-slate-200 group-hover:from-blue-500 group-hover:to-indigo-500 transition-colors duration-500"></div>
<div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="text-xl font-extralight tracking-tight text-slate-900 mb-3 relative z-10 group-hover:text-blue-600 transition-colors duration-300">Local Business Experts</h3>
<p className="text-sm md:text-base text-slate-500 leading-relaxed relative z-10">We specialize exclusively in service businesses. We understand the nuances of local lead generation.</p>
</div>

<div className="group relative bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 ease-out overflow-hidden z-10 flex flex-col h-full">
<div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors duration-500 pointer-events-none"></div>
<div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-slate-100 to-slate-200 group-hover:from-blue-500 group-hover:to-indigo-500 transition-colors duration-500"></div>
<div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
<h3 className="text-xl font-extralight tracking-tight text-slate-900 mb-3 relative z-10 group-hover:text-blue-600 transition-colors duration-300">Ongoing Optimization</h3>
<p className="text-sm md:text-base text-slate-500 leading-relaxed relative z-10">We actively monitor transcripts and refine the AI to continuously improve conversion rates.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#07162F] relative overflow-hidden" id="book">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] opacity-60"></div>
</div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                Every Missed Lead Is Revenue Walking Away.
            </h2>
<p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                See how AI automation can help your business respond faster, book more appointments, and save your team hours every week.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(59,130,246,0.3)]" href="/contact-us">
                    Book Your Free AI Strategy Call
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 backdrop-blur-sm" href="#">
                    See Demo
                </a>
</div>
</div>
</section>

<footer className="bg-white py-12 border-t border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<div className="uppercase flex gap-2 text-lg font-medium text-[#0F172A] tracking-tighter gap-x-2 gap-y-2 items-center">
<img alt="Brand Logo" className="w-auto h-12 object-contain rounded" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7b058cde-ed7e-4af9-9015-d13508f44a29_320w.png?w=800&amp;q=80"/>
</div>
<p className="text-xs text-slate-500">Premium AI Automation for Local Businesses.</p>
</div>
<div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
<a className="hover:text-blue-500 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-blue-500 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-blue-500 transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-4 text-slate-400">
<a className="hover:text-blue-500 transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
<a className="hover:text-blue-500 transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
