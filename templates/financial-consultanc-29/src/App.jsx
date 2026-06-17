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



        function switchPage(pageName) {
            const pages = document.querySelectorAll('.page-content');
            pages.forEach(page => {
                page.classList.remove('active');
            });

            const target = document.getElementById('page-' + pageName);
            if (target) {
                target.classList.add('active');
                window.scrollTo(0, 0);
            } else {
                console.error("Page not found:", pageName);
            }

            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                if(link.dataset.target === pageName) {
                    link.classList.add('active', 'text-[#0A1F44]');
                    link.classList.remove('text-slate-500');
                } else {
                    link.classList.remove('active', 'text-[#0A1F44]');
                    link.classList.add('text-slate-500');
                }
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
      

<nav className="fixed w-full z-50 bg-[#FAFAF8]/90 backdrop-blur-xl border-b border-[#0A1F44]/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-24">

<a className="flex items-center gap-3 group" href="#" onclick="switchPage('home'); return false;">
<div className="relative w-10 h-10 flex items-center justify-center bg-[#0A1F44] text-white overflow-hidden rounded-sm transition-transform duration-500 group-hover:bg-[#D4AF37] group-hover:text-[#0A1F44]">
<span className="font-serif text-2xl font-bold relative z-10 transition-colors">J</span>
</div>
<div className="flex flex-col">
<span className="font-serif text-2xl tracking-tight text-[#0A1F44] font-bold leading-none">JORELI</span>
<span className="text-[0.6rem] tracking-[0.25em] text-[#D4AF37] uppercase font-medium">Consultants</span>
</div>
</a>

<div className="hidden md:flex items-center gap-10">
<button className="nav-link text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-[#0A1F44] transition-colors relative py-1" data-target="home" onclick="switchPage('home')">Home</button>
<button className="nav-link text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-[#0A1F44] transition-colors relative py-1" data-target="services" onclick="switchPage('services')">Services</button>
<button className="nav-link text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-[#0A1F44] transition-colors relative py-1" data-target="case-studies" onclick="switchPage('case-studies')">Case Studies</button>
<button className="nav-link text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-[#0A1F44] transition-colors relative py-1" data-target="blog" onclick="switchPage('blog')">Insights</button>
</div>

<button className="hidden md:block px-6 py-2.5 bg-transparent border border-[#0A1F44] text-[#0A1F44] text-xs uppercase tracking-widest font-semibold hover:bg-[#0A1F44] hover:text-white transition-all duration-300 group" onclick="switchPage('contact')">
                    Contact Us <iconify-icon className="inline-block ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" icon="lucide:arrow-up-right"></iconify-icon>
</button>

<button className="md:hidden text-[#0A1F44]">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>



<main className="page-content active flex-grow" id="page-home">

<section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0A1F44]">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
<div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
<div className="absolute -left-20 bottom-0 w-[400px] h-[400px] bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
<div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-3 mb-8 border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full">
<span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
<span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em]">Elite Financial Advisory</span>
</div>
<h1 className="text-5xl lg:text-7xl font-serif font-extrabold text-white tracking-tight leading-[1.05] mb-8">
                        Financial Clarity for <br/>
<span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">Visionary Leaders.</span>
</h1>
<p className="text-lg text-slate-300 font-light max-w-lg leading-relaxed mb-12 border-l border-[#D4AF37] pl-6">
                        Joreli bridges the gap between complex regulation and strategic ambition. We build the financial infrastructure that sustains legacies.
                    </p>
<div className="flex flex-col sm:flex-row gap-5">
<button className="px-8 py-4 bg-[#D4AF37] text-[#0A1F44] text-xs font-bold tracking-widest uppercase transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]" onclick="switchPage('contact')">
                            Schedule Consultation
                        </button>
<button className="px-8 py-4 bg-transparent border border-white/20 text-white text-xs font-bold tracking-widest uppercase hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all flex items-center gap-2 group" onclick="switchPage('case-studies')">
                            View Case Studies <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>

<div className="hidden lg:block relative">
<div className="relative z-10 grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="bg-white/5 backdrop-blur-md p-6 border border-white/10 rounded-sm">
<iconify-icon className="text-[#D4AF37] mb-3" icon="lucide:trending-up" width="24"></iconify-icon>
<div className="text-2xl text-white font-serif font-bold mb-1">+40%</div>
<div className="text-xs text-slate-400 uppercase tracking-wider">Avg. ROI Increase</div>
</div>
<img className="w-full h-48 object-cover opacity-80 rounded-sm border border-white/10" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-4">
<img className="w-full h-48 object-cover opacity-80 rounded-sm border border-white/10" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="bg-[#D4AF37] p-6 rounded-sm shadow-2xl">
<iconify-icon className="text-[#0A1F44] mb-3" icon="lucide:shield-check" width="24"></iconify-icon>
<div className="text-2xl text-[#0A1F44] font-serif font-bold mb-1">100%</div>
<div className="text-xs text-[#0A1F44]/70 uppercase tracking-wider font-bold">Compliance Rate</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8 mb-6 flex justify-between items-end">
<p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Trusted by industry leaders</p>
<div className="w-24 h-[1px] bg-slate-200"></div>
</div>
<div className="marquee-container overflow-hidden whitespace-nowrap relative opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="marquee-content inline-flex items-center gap-24 py-4">
<span className="text-2xl font-serif font-bold text-[#0A1F44]">STRATTON</span>
<span className="text-xl font-bold tracking-tight text-[#0A1F44]">NEXUS<span className="font-light">CORP</span></span>
<span className="text-2xl font-serif italic text-[#0A1F44]">Velara</span>
<span className="text-xl font-bold tracking-widest text-[#0A1F44]">FORTIS</span>
<span className="text-2xl font-serif font-bold text-[#0A1F44]">MERIDIAN</span>
<span className="text-xl font-bold text-[#0A1F44]">APEX GROUP</span>

<span className="text-2xl font-serif font-bold text-[#0A1F44]">STRATTON</span>
<span className="text-xl font-bold tracking-tight text-[#0A1F44]">NEXUS<span className="font-light">CORP</span></span>
<span className="text-2xl font-serif italic text-[#0A1F44]">Velara</span>
<span className="text-xl font-bold tracking-widest text-[#0A1F44]">FORTIS</span>
<span className="text-2xl font-serif font-bold text-[#0A1F44]">MERIDIAN</span>
<span className="text-xl font-bold text-[#0A1F44]">APEX GROUP</span>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAF8] relative">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#0A1F44] mb-4">Holistic Financial Solutions</h2>
<p className="text-slate-500 max-w-lg font-light">Customized strategies designed for growth, compliance, and capital efficiency.</p>
</div>
<button className="text-[#D4AF37] font-medium border-b border-[#D4AF37] hover:text-[#b8952b] transition-colors pb-1 text-xs uppercase tracking-widest" onclick="switchPage('services')">
                        View All Services
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-transparent hover:border-[#D4AF37]/30 relative overflow-hidden" onclick="switchPage('service-detail')">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-slate-50 rounded-full transition-transform group-hover:scale-150 duration-700"></div>
<iconify-icon className="text-[#0A1F44] mb-8 group-hover:text-[#D4AF37] transition-colors relative z-10" icon="lucide:pie-chart" strokeWidth="1.5" width="40"></iconify-icon>
<h3 className="text-xl font-serif font-semibold text-[#0A1F44] mb-4 relative z-10">Corporate Advisory</h3>
<p className="text-slate-500 font-light leading-relaxed mb-8 relative z-10">Strategic guidance for mergers, acquisitions, and cash flow optimization.</p>
<span className="relative z-10 text-xs font-bold text-[#0A1F44] uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">Explore <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon></span>
</div>

<div className="group bg-[#0A1F44] p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden" onclick="switchPage('service-detail')">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<iconify-icon className="text-[#D4AF37] mb-8 relative z-10" icon="lucide:calculator" strokeWidth="1.5" width="40"></iconify-icon>
<h3 className="text-xl font-serif font-semibold text-white mb-4 relative z-10">Tax Planning</h3>
<p className="text-slate-300 font-light leading-relaxed mb-8 relative z-10">Proactive liability minimization compliant with evolving regulations.</p>
<span className="relative z-10 text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">Explore <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon></span>
</div>

<div className="group bg-white p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-transparent hover:border-[#D4AF37]/30 relative overflow-hidden" onclick="switchPage('service-detail')">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-slate-50 rounded-full transition-transform group-hover:scale-150 duration-700"></div>
<iconify-icon className="text-[#0A1F44] mb-8 group-hover:text-[#D4AF37] transition-colors relative z-10" icon="lucide:scale" strokeWidth="1.5" width="40"></iconify-icon>
<h3 className="text-xl font-serif font-semibold text-[#0A1F44] mb-4 relative z-10">Audit &amp; Assurance</h3>
<p className="text-slate-500 font-light leading-relaxed mb-8 relative z-10">Rigorous internal and external audits to ensure complete transparency.</p>
<span className="relative z-10 text-xs font-bold text-[#0A1F44] uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">Explore <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon></span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-4xl mx-auto text-center px-6 relative z-10">
<h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">Ready to secure your legacy?</h2>
<p className="text-[#0A1F44] text-lg font-medium mb-10 max-w-2xl mx-auto">
                     Join the 500+ enterprises that trust Joreli for precision, strategy, and growth.
                 </p>
<button className="px-10 py-5 bg-[#0A1F44] text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#0A1F44] transition-all shadow-xl hover:shadow-2xl" onclick="switchPage('contact')">
                     Start the Conversation
                 </button>
</div>
</section>
</main>



<main className="page-content flex-grow" id="page-services">
<section className="bg-[#0A1F44] pt-40 pb-20 px-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37] rounded-full filter blur-[150px] opacity-10"></div>
<div className="max-w-7xl mx-auto text-center relative z-10">
<span className="text-[#D4AF37] font-semibold text-xs tracking-[0.2em] uppercase mb-4 block">Our Expertise</span>
<h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">Comprehensive Financial Architecture</h1>
<p className="text-slate-300 max-w-2xl mx-auto font-light text-lg">
                    We offer a full suite of services designed to cover every aspect of your financial life, from daily operations to long-term generational wealth.
                </p>
</div>
</section>
<section className="py-24 bg-[#FAFAF8]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 border-t-4 border-[#D4AF37] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group" onclick="switchPage('service-detail')">
<div className="w-12 h-12 bg-[#FAFAF8] rounded-full flex items-center justify-center text-[#0A1F44] mb-6 group-hover:bg-[#0A1F44] group-hover:text-[#D4AF37] transition-colors">
<iconify-icon icon="lucide:bar-chart-3" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-bold text-[#0A1F44] mb-3">Accounting &amp; Reporting</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Accurate bookkeeping and real-time financial reporting tailored to your industry KPIs.</p>
<span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wide flex items-center gap-2">Learn More <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon></span>
</div>


<div className="bg-white p-8 border-t-4 border-[#0A1F44] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group" onclick="switchPage('service-detail')">
<div className="w-12 h-12 bg-[#FAFAF8] rounded-full flex items-center justify-center text-[#0A1F44] mb-6 group-hover:bg-[#0A1F44] group-hover:text-[#D4AF37] transition-colors">
<iconify-icon icon="lucide:calculator" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-bold text-[#0A1F44] mb-3">Tax Strategy</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Navigating complex tax codes to ensure compliance while maximizing retention.</p>
<span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wide flex items-center gap-2">Learn More <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon></span>
</div>
<div className="bg-white p-8 border-t-4 border-[#D4AF37] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group" onclick="switchPage('service-detail')">
<div className="w-12 h-12 bg-[#FAFAF8] rounded-full flex items-center justify-center text-[#0A1F44] mb-6 group-hover:bg-[#0A1F44] group-hover:text-[#D4AF37] transition-colors">
<iconify-icon icon="lucide:briefcase" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-bold text-[#0A1F44] mb-3">Corporate Advisory</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Expert guidance on M&amp;A, restructuring, and capital raising initiatives.</p>
<span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wide flex items-center gap-2">Learn More <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon></span>
</div>
</div>
</div>
</section>
</main>



<main className="page-content flex-grow" id="page-service-detail">
<section className="relative pt-40 pb-20 bg-[#0A1F44] overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<button className="text-[#D4AF37] text-xs uppercase tracking-widest mb-6 flex items-center gap-2 hover:text-white transition-colors" onclick="switchPage('services')">
<iconify-icon icon="lucide:arrow-left" width="14"></iconify-icon> Back to Services
                </button>
<h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">Corporate Advisory</h1>
<p className="text-xl text-slate-300 font-light max-w-2xl">Strategic insights to navigate mergers, restructuring, and sustainable growth.</p>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
<div className="lg:col-span-2">
<h2 className="text-2xl font-serif font-bold text-[#0A1F44] mb-6">Service Overview</h2>
<p className="text-slate-600 leading-loose mb-8 font-light">
                            In today's volatile market, making the right strategic move requires more than gut instinct—it requires rigorous analysis and financial foresight. Our Corporate Advisory division specializes in guiding established enterprises through their most critical transitions.
                        </p>

<div className="bg-slate-50 p-8 mb-10 border border-slate-100 rounded-sm">
<h4 className="font-serif font-bold text-[#0A1F44] mb-4">Our Approach</h4>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="text-center">
<div className="w-10 h-10 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center text-[#D4AF37] mb-3">1</div>
<p className="text-sm font-semibold text-[#0A1F44]">Analyze</p>
</div>
<div className="hidden md:block h-[1px] bg-slate-200 mt-5"></div>
<div className="text-center">
<div className="w-10 h-10 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center text-[#D4AF37] mb-3">2</div>
<p className="text-sm font-semibold text-[#0A1F44]">Strategize</p>
</div>
<div className="hidden md:block h-[1px] bg-slate-200 mt-5"></div>
<div className="text-center">
<div className="w-10 h-10 mx-auto bg-[#0A1F44] rounded-full shadow-sm flex items-center justify-center text-white mb-3">3</div>
<p className="text-sm font-semibold text-[#0A1F44]">Execute</p>
</div>
</div>
</div>
<h3 className="text-xl font-serif font-bold text-[#0A1F44] mb-6">Key Capabilities</h3>
<ul className="space-y-4 mb-12">
<li className="flex items-start gap-4">
<iconify-icon className="text-[#D4AF37] mt-1 flex-shrink-0" icon="lucide:check-circle" width="20"></iconify-icon>
<span className="text-slate-600">Mergers &amp; Acquisitions (M&amp;A) Due Diligence</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#D4AF37] mt-1 flex-shrink-0" icon="lucide:check-circle" width="20"></iconify-icon>
<span className="text-slate-600">Business Valuation &amp; Financial Modeling</span>
</li>
</ul>
</div>
<div className="space-y-8">
<div className="bg-[#FAFAF8] p-8 border border-slate-100 shadow-lg">
<h4 className="font-serif font-bold text-[#0A1F44] mb-4">Get Started</h4>
<p className="text-sm text-slate-500 mb-6">Discuss your specific needs with our advisory team.</p>
<button className="w-full py-3 bg-[#0A1F44] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#0A1F44] transition-colors" onclick="switchPage('contact')">
                                Book Consultation
                            </button>
</div>
</div>
</div>
</div>
</section>
</main>



<main className="page-content flex-grow" id="page-case-studies">
<section className="bg-[#FAFAF8] pt-40 pb-20 px-6 border-b border-slate-200">
<div className="max-w-7xl mx-auto">
<span className="text-[#D4AF37] font-semibold text-xs tracking-[0.2em] uppercase mb-4 block">Proven Results</span>
<h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#0A1F44] mb-6">Impact Stories</h1>
<p className="text-slate-500 max-w-2xl font-light text-lg">
                    Real world examples of how Joreli transforms financial challenges into competitive advantages.
                </p>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="group cursor-pointer" onclick="switchPage('case-study-detail')">
<div className="relative overflow-hidden mb-8 shadow-lg">
<div className="absolute inset-0 bg-[#0A1F44]/20 group-hover:bg-transparent transition-colors z-10"></div>
<img className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 bg-white p-6 w-10/12 z-20">
<div className="text-[#D4AF37] text-4xl font-serif font-bold mb-1">+245%</div>
<div className="text-xs text-slate-400 uppercase tracking-widest">Growth in 18 Months</div>
</div>
</div>
<h2 className="text-2xl font-serif font-bold text-[#0A1F44] mb-3 group-hover:text-[#D4AF37] transition-colors">Scaling Nexus Corp for Global IPO</h2>
<p className="text-slate-500 font-light leading-relaxed mb-4">Restructuring debt and optimizing cash flow to meet international listing requirements.</p>
<span className="text-xs font-bold text-[#0A1F44] uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">Read Story <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon></span>
</div>

<div className="group cursor-pointer" onclick="switchPage('case-study-detail')">
<div className="relative overflow-hidden mb-8 shadow-lg">
<div className="absolute inset-0 bg-[#0A1F44]/20 group-hover:bg-transparent transition-colors z-10"></div>
<img className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2032&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 bg-white p-6 w-10/12 z-20">
<div className="text-[#D4AF37] text-4xl font-serif font-bold mb-1">$4.2M</div>
<div className="text-xs text-slate-400 uppercase tracking-widest">Tax Liability Saved</div>
</div>
</div>
<h2 className="text-2xl font-serif font-bold text-[#0A1F44] mb-3 group-hover:text-[#D4AF37] transition-colors">Estate Planning for the Velara Family</h2>
<p className="text-slate-500 font-light leading-relaxed mb-4">Creating a multi-generational wealth preservation vehicle amidst changing tax laws.</p>
<span className="text-xs font-bold text-[#0A1F44] uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">Read Story <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon></span>
</div>
</div>
</div>
</section>
</main>



<main className="page-content flex-grow" id="page-case-study-detail">
<section className="pt-40 pb-20 bg-[#FAFAF8] px-6">
<div className="max-w-4xl mx-auto">
<button className="text-[#D4AF37] text-xs uppercase tracking-widest mb-8 flex items-center gap-2 hover:text-[#0A1F44] transition-colors" onclick="switchPage('case-studies')">
<iconify-icon icon="lucide:arrow-left" width="14"></iconify-icon> All Case Studies
                </button>
<div className="flex flex-col md:flex-row gap-4 md:items-center mb-6">
<span className="bg-[#0A1F44] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">Corporate Advisory</span>
<span className="text-slate-400 text-sm">Client: Nexus Corp</span>
</div>
<h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0A1F44] leading-tight mb-8">Scaling Nexus Corp for a Global IPO</h1>
</div>
<div className="max-w-6xl mx-auto mt-12">
<img className="w-full h-[500px] object-cover rounded-sm shadow-2xl" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</section>
<section className="py-20 bg-white">
<div className="max-w-4xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
<div className="text-center p-6 bg-[#FAFAF8] border border-slate-100">
<iconify-icon className="text-[#D4AF37] mb-3" icon="lucide:trending-up" width="30"></iconify-icon>
<h3 className="text-3xl font-serif font-bold text-[#0A1F44] mb-1">245%</h3>
<p className="text-xs text-slate-500 uppercase tracking-widest">Revenue Growth</p>
</div>
<div className="text-center p-6 bg-[#FAFAF8] border border-slate-100">
<iconify-icon className="text-[#D4AF37] mb-3" icon="lucide:clock" width="30"></iconify-icon>
<h3 className="text-3xl font-serif font-bold text-[#0A1F44] mb-1">18 Mo</h3>
<p className="text-xs text-slate-500 uppercase tracking-widest">Turnaround Time</p>
</div>
<div className="text-center p-6 bg-[#FAFAF8] border border-slate-100">
<iconify-icon className="text-[#D4AF37] mb-3" icon="lucide:globe" width="30"></iconify-icon>
<h3 className="text-3xl font-serif font-bold text-[#0A1F44] mb-1">3</h3>
<p className="text-xs text-slate-500 uppercase tracking-widest">New Markets</p>
</div>
</div>
<div className="prose prose-lg prose-slate prose-headings:font-serif prose-headings:text-[#0A1F44] font-light mx-auto">
<h3>The Challenge</h3>
<p>
                        Nexus Corp, a leading logistics technology provider, had reached a saturation point in their domestic market. While their revenue was stable, their operational costs were bloating, and their debt structure was preventing them from raising the capital needed for international expansion.
                    </p>
<h3>The Solution</h3>
<p>
                        Joreli implemented a three-phase restructuring plan. 
                    </p>
<ol>
<li><strong>Audit &amp; Cleanup:</strong> We conducted a forensic audit to identify inefficiencies in the supply chain.</li>
<li><strong>Debt Restructuring:</strong> We negotiated with lenders to consolidate high-interest loans into manageable long-term instruments.</li>
<li><strong>Strategic Roadmap:</strong> We built a 5-year financial model that aligned with the requirements of the London Stock Exchange.</li>
</ol>
<h3>The Result</h3>
<p>
                        Within 18 months, Nexus Corp not only stabilized their balance sheet but freed up enough free cash flow to acquire a smaller competitor in the European market, positioning them perfectly for their upcoming IPO.
                    </p>
</div>
</div>
</section>
</main>



<main className="page-content flex-grow" id="page-blog">
<section className="bg-[#FAFAF8] pt-40 pb-20 px-6 border-b border-slate-200">
<div className="max-w-7xl mx-auto">
<h1 className="text-4xl lg:text-6xl font-serif font-bold text-[#0A1F44] mb-6">Market Insights</h1>
<p className="text-slate-500 max-w-2xl font-light text-lg">
                    Expert analysis on regulatory changes, economic trends, and financial strategy.
                </p>
</div>
</section>
<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<article className="group cursor-pointer" onclick="switchPage('blog-detail')">
<div className="aspect-[16/9] bg-slate-100 mb-6 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2015&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">Taxation</span>
<span className="text-xs text-slate-400">Oct 12, 2023</span>
</div>
<h2 className="text-2xl font-serif font-bold text-[#0A1F44] mb-3 group-hover:text-[#D4AF37] transition-colors">Navigating the New 2024 Fiscal Policy Changes</h2>
</article>

</div>
</div>
</section>
</main>

<main className="page-content flex-grow" id="page-blog-detail">

<section className="pt-40 pb-12 max-w-3xl mx-auto px-6">
<button className="text-[#D4AF37] text-sm mb-8 flex items-center gap-2 hover:text-[#0A1F44] transition-colors" onclick="switchPage('blog')">
<iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon> Back to Insights
            </button>
<h1 className="text-3xl md:text-5xl font-serif font-bold text-[#0A1F44] leading-tight mb-8">Navigating the New 2024 Fiscal Policy Changes</h1>
<div className="prose prose-lg prose-slate prose-headings:font-serif prose-headings:text-[#0A1F44] prose-a:text-[#D4AF37] font-light">
<p>Content regarding tax policy...</p>
</div>
</section>
</main>



<main className="page-content flex-grow" id="page-contact">
<section className="min-h-screen bg-[#0A1F44] flex items-center pt-24 pb-12 relative overflow-hidden">
<div className="absolute right-0 top-0 w-2/3 h-full bg-[#FAFAF8] opacity-5 -skew-x-12 translate-x-1/3"></div>
<div className="max-w-7xl w-full mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div className="flex flex-col justify-center">
<span className="text-[#D4AF37] font-semibold text-xs tracking-[0.2em] uppercase mb-4 block">Get in touch</span>
<h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-8">Let's discuss your financial future.</h1>
<div className="space-y-8">
<div className="flex gap-6 group">
<div className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-white font-serif font-medium text-lg">Headquarters</h3>
<p className="text-slate-400 font-light">1200 Financial District Blvd,<br/>Suite 400, New York, NY</p>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 lg:p-12 rounded-sm shadow-2xl relative">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#C9A961]"></div>
<h3 className="text-2xl font-serif font-bold text-[#0A1F44] mb-6">Send a Message</h3>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<input className="w-full bg-[#FAFAF8] border-b border-slate-200 p-3 text-[#0A1F44] focus:outline-none focus:border-[#D4AF37]" placeholder="Name" type="text"/>
<input className="w-full bg-[#FAFAF8] border-b border-slate-200 p-3 text-[#0A1F44] focus:outline-none focus:border-[#D4AF37]" placeholder="Email" type="email"/>
</div>
<textarea className="w-full bg-[#FAFAF8] border-b border-slate-200 p-3 text-[#0A1F44] focus:outline-none focus:border-[#D4AF37]" placeholder="Message" rows="4"></textarea>
<button className="w-full bg-[#0A1F44] text-white font-bold uppercase tracking-widest py-4 hover:bg-[#152c57] transition-all shadow-lg flex justify-center items-center gap-2" type="button">
                                Send Message <iconify-icon icon="lucide:send" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#0A1F44] text-white pt-24 pb-12 border-t border-[#D4AF37]/20 relative overflow-hidden">

<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37] rounded-full filter blur-[150px] opacity-5"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

<div className="space-y-6">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm text-[#0A1F44]">
<span className="font-serif text-2xl font-bold">J</span>
</div>
<span className="font-serif text-2xl tracking-tight font-bold">JORELI</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed font-light">
                        Building the financial infrastructure that sustains legacies. Precision, integrity, and foresight.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0A1F44] transition-all duration-300" href="#">
<iconify-icon icon="ri:facebook-fill" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0A1F44] transition-all duration-300" href="#">
<iconify-icon icon="ri:instagram-line" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0A1F44] transition-all duration-300" href="#">
<iconify-icon icon="ri:linkedin-fill" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0A1F44] transition-all duration-300" href="#">
<iconify-icon icon="ri:twitter-x-line" width="18"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-lg font-serif font-bold text-white mb-6">Company</h4>
<ul className="space-y-4 text-sm text-slate-400 font-medium">
<li><button className="hover:text-[#D4AF37] transition-colors flex items-center gap-2 group" onclick="switchPage('home')"><span className="w-0 group-hover:w-2 h-[1px] bg-[#D4AF37] transition-all"></span> Home</button></li>
<li><button className="hover:text-[#D4AF37] transition-colors flex items-center gap-2 group" onclick="switchPage('services')"><span className="w-0 group-hover:w-2 h-[1px] bg-[#D4AF37] transition-all"></span> Services</button></li>
<li><button className="hover:text-[#D4AF37] transition-colors flex items-center gap-2 group" onclick="switchPage('case-studies')"><span className="w-0 group-hover:w-2 h-[1px] bg-[#D4AF37] transition-all"></span> Case Studies</button></li>
<li><button className="hover:text-[#D4AF37] transition-colors flex items-center gap-2 group" onclick="switchPage('blog')"><span className="w-0 group-hover:w-2 h-[1px] bg-[#D4AF37] transition-all"></span> Insights</button></li>
<li><button className="hover:text-[#D4AF37] transition-colors flex items-center gap-2 group" onclick="switchPage('contact')"><span className="w-0 group-hover:w-2 h-[1px] bg-[#D4AF37] transition-all"></span> Careers</button></li>
</ul>
</div>

<div>
<h4 className="text-lg font-serif font-bold text-white mb-6">Expertise</h4>
<ul className="space-y-4 text-sm text-slate-400 font-medium">
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Corporate Advisory</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Tax Strategy</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Audit &amp; Assurance</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Private Wealth</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Risk Management</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-serif font-bold text-white mb-6">Stay Informed</h4>
<p className="text-slate-400 text-sm mb-4 font-light">Get the latest financial insights delivered to your inbox.</p>
<div className="flex gap-2 border-b border-slate-700 pb-2 mb-8">
<input className="bg-transparent border-none text-white text-sm focus:outline-none w-full placeholder-slate-600" placeholder="Email Address" type="email"/>
<button className="text-[#D4AF37] uppercase text-xs font-bold tracking-widest hover:text-white transition-colors">Join</button>
</div>
<div className="text-slate-500 text-xs">
<p>New York • London • Singapore</p>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-xs text-slate-500 font-light">
<p>© 2024 Joreli Financial Consultants. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
