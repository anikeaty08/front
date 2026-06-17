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



      document.addEventListener('DOMContentLoaded', function() {
        if (typeof AOS !== 'undefined') {
          AOS.init({ once: true, duration: 800, offset: 50 });
        }
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
      

<nav className="sticky top-0 z-50 w-full bg-[#F8F6F2]/90 backdrop-blur-md border-b border-[#E8D9B5]/30">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-20">
<div className="flex items-center gap-2">
<a className="flex items-center hover:opacity-80 transition-opacity" href="#">
<img alt="Nature Nest Essentials" className="h-8 sm:h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0dd485f-b2b1-4dbc-9832-300ff89cdd9f_800w.png"/>
</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-[#2F5D50] transition-colors" href="#products">
            Products
          </a>
<a className="hover:text-[#2F5D50] transition-colors" href="#hampi">
            Brands
          </a>
<a className="hover:text-[#2F5D50] transition-colors" href="#about">
            Sourcing
          </a>
<a className="hover:text-[#2F5D50] transition-colors" href="#quality">
            Quality
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-[#1F2937] hover:text-[#2F5D50] transition-colors" href="#">
            Sign In
          </a>
<a className="bg-[#2F5D50] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#23473d] transition-all duration-200 shadow-sm" href="#">
            Become a Partner
          </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&amp', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
<div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
<div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center mt-16 md:mt-24 pb-16">
<div className="flex flex-col items-center w-full" data-aos="fade-up" data-aos-duration="1200">
<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-8 animate-glow">
<span className="w-2.5 h-2.5 rounded-full bg-[#E8D9B5] animate-pulse"></span>
<span className="text-xs font-bold text-[#E8D9B5] tracking-widest uppercase">
              Next-Gen Agriculture
            </span>
</div>
<h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6 drop-shadow-2xl">
            Sourcing the
            <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8D9B5] to-white italic font-light">
              exceptional.
            </span>
</h1>
<p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl font-light mx-auto">
            Redefining the global supply chain with ethically sourced, premium
            agricultural FMCG. Fully traceable from farm to port.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-6 justify-center mb-16 w-full">
<a className="w-full sm:w-auto bg-[#E8D9B5] text-[#2F5D50] text-sm font-bold px-8 py-4 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(232,217,181,0.3)]" href="#products">
              Explore Catalog
              <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto glass-card text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center" href="#contact">
              Partner With Us
            </a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
<div className="glass-card p-5 rounded-3xl flex items-center gap-4 hover:scale-105 transition-transform text-left bg-white/10 border border-white/20 backdrop-blur-md">
<div className="bg-[#2F5D50]/80 p-4 rounded-full shrink-0">
<iconify-icon className="text-[#E8D9B5]" icon="solar:global-bold-duotone" width="28"></iconify-icon>
</div>
<div>
<p className="text-base font-bold text-white">40+ Countries</p>
<p className="text-xs text-white/70 font-medium">
                  Global Export Network
                </p>
</div>
</div>
<div className="glass-card p-5 rounded-3xl flex items-center gap-4 hover:scale-105 transition-transform text-left bg-white/10 border border-white/20 backdrop-blur-md">
<div className="bg-[#E8D9B5]/80 p-4 rounded-full shrink-0">
<iconify-icon className="text-[#2F5D50]" icon="solar:shield-check-bold-duotone" width="28"></iconify-icon>
</div>
<div>
<p className="text-base font-bold text-white">100% Certified</p>
<p className="text-xs text-white/70 font-medium">
                  Export Grade Quality
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-8 bg-[#2F5D50] border-y border-[#E8D9B5]/20 overflow-hidden">
<div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] items-center gap-20 text-[#E8D9B5]">
<div className="flex items-center gap-20 text-lg font-heading tracking-widest uppercase">
<span className="flex items-center gap-3 font-semibold">
<iconify-icon icon="solar:shield-check-bold-duotone" width="28"></iconify-icon>
            100% Quality Assured
          </span>
<span className="flex items-center gap-3 font-semibold">
<iconify-icon icon="solar:leaf-bold-duotone" width="28"></iconify-icon>
            Zero Preservatives
          </span>
<span className="flex items-center gap-3 font-semibold">
<iconify-icon icon="solar:box-bold-duotone" width="28"></iconify-icon>
            Reliable Supply Chain
          </span>
<span className="flex items-center gap-3 font-semibold">
<iconify-icon icon="solar:global-bold-duotone" width="28"></iconify-icon>
            Export Ready
          </span>
</div>
<div aria-hidden="true" className="flex items-center gap-20 text-lg font-heading tracking-widest uppercase">
<span className="flex items-center gap-3 font-semibold">
<iconify-icon icon="solar:shield-check-bold-duotone" width="28"></iconify-icon>
            100% Quality Assured
          </span>
<span className="flex items-center gap-3 font-semibold">
<iconify-icon icon="solar:leaf-bold-duotone" width="28"></iconify-icon>
            Zero Preservatives
          </span>
<span className="flex items-center gap-3 font-semibold">
<iconify-icon icon="solar:box-bold-duotone" width="28"></iconify-icon>
            Reliable Supply Chain
          </span>
<span className="flex items-center gap-3 font-semibold">
<iconify-icon icon="solar:global-bold-duotone" width="28"></iconify-icon>
            Export Ready
          </span>
</div>
</div>
</section>

<section className="bg-[#1F2937] py-32 relative" id="about" style={{backgroundImage: 'radial-gradient(900px 420px at 20% 10%, rgba(47,93,80,0.25), transparent 60%), radial-gradient(800px 380px at 85% 35%, rgba(232,217,181,0.18), transparent 55%)'}}>
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20 text-center">
<h2 className="font-heading text-5xl font-semibold tracking-tight text-white mb-6">
          The Journey of
          <span className="italic text-[#E8D9B5] font-light">Quality</span>
</h2>
<p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          From ethical sourcing to global export, our process is structurally
          designed to deliver excellence at every step. Scroll to explore our
          workflow.
        </p>
</div>
<div className="max-w-4xl mx-auto relative px-6">
<div className="sticky top-32 pt-12 pb-48">
<div className="space-y-32">
<div className="flex flex-col md:flex-row items-center gap-10 bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] sticky top-32 shadow-2xl transition-all hover:bg-white/10">
<div className="w-20 h-20 shrink-0 bg-[#E8D9B5] rounded-full flex items-center justify-center text-[#2F5D50] shadow-lg">
<h3 className="text-3xl font-bold font-heading">01</h3>
</div>
<div>
<h4 className="text-3xl font-semibold text-white mb-3 font-heading tracking-tight">
                  Ethical Sourcing
                </h4>
<p className="text-gray-400 leading-relaxed font-light">
                  We partner directly with trusted farming communities, ensuring
                  fair trade and sustainable agricultural practices. Our deep
                  roots guarantee the authenticity of every grain.
                </p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center gap-10 bg-[#2F5D50] border border-[#3e7868] p-10 rounded-[2rem] sticky top-40 shadow-2xl transition-all">
<div className="w-20 h-20 shrink-0 bg-white rounded-full flex items-center justify-center text-[#2F5D50] shadow-lg">
<h3 className="text-3xl font-bold font-heading">02</h3>
</div>
<div>
<h4 className="text-3xl font-semibold text-white mb-3 font-heading tracking-tight">
                  Modern Refinement
                </h4>
<p className="text-white/80 leading-relaxed font-light">
                  Traditional values meet cutting-edge facilities. Our produce
                  undergoes meticulous double-polishing and sortex cleaning
                  without ever touching artificial preservatives.
                </p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center gap-10 bg-[#E8D9B5] border border-[#d4c194] p-10 rounded-[2rem] sticky top-48 shadow-2xl transition-all">
<div className="w-20 h-20 shrink-0 bg-[#2F5D50] rounded-full flex items-center justify-center text-white shadow-lg">
<h3 className="text-3xl font-bold font-heading">03</h3>
</div>
<div>
<h4 className="text-3xl font-semibold text-[#1F2937] mb-3 font-heading tracking-tight">
                  Global Export
                </h4>
<p className="text-[#1F2937]/80 leading-relaxed font-light">
                  Engineered for scale. We provide rigorous quality assurance,
                  comprehensive documentation, and reliable logistics to meet
                  international market demands flawlessly.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F8F6F2]" id="products">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F5D50]/10 mb-6">
<span className="text-xs font-bold text-[#2F5D50] tracking-widest uppercase">
                Catalog
              </span>
</div>
<h2 className="font-heading text-5xl font-semibold tracking-tight text-[#1F2937]">
              Our Core
              <span className="italic font-light">Commodities</span>
</h2>
</div>
<a className="group inline-flex items-center gap-2 text-[#2F5D50] font-semibold text-sm border-b-2 border-[#2F5D50] pb-1 hover:text-[#1F2937] hover:border-[#1F2937] transition-all" href="#">
            View full catalog
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<a className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] reveal-on-hover shadow-lg" href="#">
<img alt="Premium Rice" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-8">
<h3 className="font-heading text-3xl font-semibold text-white mb-2 tracking-tight">
                Premium Rice
              </h3>
<div className="reveal-content">
<p className="text-sm text-white/80 mb-5 font-light leading-relaxed">
                  Basmati and non-basmati varieties, meticulously milled and
                  aged for the perfect aroma.
                </p>
<span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-xs font-bold text-white hover:bg-white/30 transition-colors">
                  Explore range
                  <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] reveal-on-hover shadow-lg" href="#">
<img alt="Natural Sugar" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-8">
<h3 className="font-heading text-3xl font-semibold text-white mb-2 tracking-tight">
                Natural Sugar
              </h3>
<div className="reveal-content">
<p className="text-sm text-white/80 mb-5 font-light leading-relaxed">
                  Refined and unrefined cane sugar, featuring crystalline purity
                  for global retail demands.
                </p>
<span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-xs font-bold text-white hover:bg-white/30 transition-colors">
                  Explore range
                  <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] reveal-on-hover shadow-lg" href="#">
<img alt="Traditional Jaggery" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-8">
<h3 className="font-heading text-3xl font-semibold text-white mb-2 tracking-tight">
                Pure Jaggery
              </h3>
<div className="reveal-content">
<p className="text-sm text-white/80 mb-5 font-light leading-relaxed">
                  Chemical-free, rich artisanal jaggery blocks and powder
                  directly from traditional mills.
                </p>
<span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-xs font-bold text-white hover:bg-white/30 transition-colors">
                  Explore range
                  <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] reveal-on-hover shadow-lg" href="#">
<img alt="Dal &amp; Pulses" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-8">
<h3 className="font-heading text-3xl font-semibold text-white mb-2 tracking-tight">
                Dal &amp; Pulses
              </h3>
<div className="reveal-content">
<p className="text-sm text-white/80 mb-5 font-light leading-relaxed">
                  High-protein, unpolished lentils meticulously sorted for
                  uniform quality and sizing.
                </p>
<span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-xs font-bold text-white hover:bg-white/30 transition-colors">
                  Explore range
                  <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-[#111827]" id="hampi">
<div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&amp', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}></div>
<div className="absolute -left-1/4 top-0 w-1/2 h-full bg-gradient-to-r from-[#2F5D50] to-transparent blur-3xl opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div data-aos="fade-right">
<div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8">
<iconify-icon className="text-[#E8D9B5]" icon="solar:crown-star-bold-duotone" width="20"></iconify-icon>
<span className="text-xs font-bold text-[#E8D9B5] tracking-widest uppercase">
                Flagship Brand
              </span>
</div>
<h2 className="font-heading text-6xl sm:text-7xl font-semibold tracking-tighter text-white mb-6 leading-none">
              Hampi.
              <br/>
<span className="text-[#E8D9B5] italic font-light">
                The royal grain.
              </span>
</h2>
<p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg font-light">
              Bringing the authentic aroma and exceptional grain length of
              premium Indian basmati to tables worldwide. Aged to perfection,
              sorted with microscopic precision.
            </p>
<div className="grid grid-cols-2 gap-6 mb-12">
<div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
<iconify-icon className="text-[#E8D9B5] mb-4" icon="solar:ruler-bold-duotone" width="36"></iconify-icon>
<h4 className="text-lg text-white font-semibold mb-1">
                  Extra-Long
                </h4>
<p className="text-sm text-gray-400 font-light">
                  Premium grain variety
                </p>
</div>
<div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
<iconify-icon className="text-[#E8D9B5] mb-4" icon="solar:hourglass-bold-duotone" width="36"></iconify-icon>
<h4 className="text-lg text-white font-semibold mb-1">
                  Aged Perfectly
                </h4>
<p className="text-sm text-gray-400 font-light">
                  Enhanced flavor profile
                </p>
</div>
</div>
<a className="bg-[#E8D9B5] text-[#1F2937] text-base font-bold px-10 py-4 rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(232,217,181,0.3)] inline-flex items-center gap-2" href="#">
              Request Sample
              <iconify-icon icon="solar:box-bold-duotone" width="20"></iconify-icon>
</a>
</div>
<div className="relative flex justify-center" data-aos="zoom-in">
<div className="absolute inset-0 bg-[#E8D9B5] rounded-full blur-[120px] opacity-20"></div>
<div className="w-full max-w-sm relative group z-10 mx-auto">
<div className="transform rotate-3 group-hover:rotate-0 group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-700 ease-out animate-float rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/10 relative cursor-pointer">
<img alt="NatureNest Hampi Sona Masoori Rice" className="w-full h-auto object-cover scale-105 group-hover:scale-100 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71093d6f-1d64-4577-bdb2-18532f7e5892_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/20 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute inset-0 bg-[#E8D9B5] mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
</div>
<div className="absolute -inset-6 bg-gradient-to-br from-[#2F5D50] to-[#E8D9B5] opacity-0 group-hover:opacity-30 blur-3xl rounded-full transition-opacity duration-700 z-[-1]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-heading text-5xl font-semibold tracking-tight text-[#1F2937] mb-6">
            The Nature Nest
            <span className="text-[#2F5D50] italic font-light">Advantage</span>
</h2>
<p className="text-gray-500 text-xl font-light leading-relaxed">
            A modern supply partner for importers, distributors, and retail
            chains—built to deliver consistent quality, compliant paperwork, and
            reliable timelines.
          </p>
</div>
<div className="grid lg:grid-cols-12 gap-10 items-stretch">
<div className="lg:col-span-5">
<div className="relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-[#F8F6F2] p-10 shadow-sm h-full">
<div className="absolute -top-24 -right-24 w-72 h-72 bg-[#E8D9B5]/60 blur-3xl rounded-full"></div>
<div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#2F5D50]/10 blur-3xl rounded-full"></div>
<div className="relative">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-100 mb-8">
<iconify-icon className="text-[#2F5D50]" icon="solar:shield-check-bold-duotone" width="18"></iconify-icon>
<span className="text-xs font-semibold text-[#2F5D50] tracking-widest uppercase">
                    Built for buyers
                  </span>
</div>
<h3 className="font-heading text-3xl font-semibold tracking-tight text-[#1F2937] mb-4">
                  One partner for sourcing, processing, and export.
                </h3>
<p className="text-gray-600 font-light leading-relaxed mb-8">
                  From verified farming communities to export-ready packaging,
                  we keep your supply chain predictable—so you can scale with
                  confidence.
                </p>
<div className="space-y-4">
<div className="flex gap-4 rounded-2xl bg-white border border-gray-100 p-5">
<div className="w-11 h-11 rounded-xl bg-[#2F5D50]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#2F5D50]" icon="solar:document-text-bold-duotone" width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-[#1F2937]">
                        Documentation-ready exports
                      </p>
<p className="text-sm text-gray-500 font-light leading-relaxed">
                        Invoice, packing list, lab reports, and shipment support
                        aligned to your destination needs.
                      </p>
</div>
</div>
<div className="flex gap-4 rounded-2xl bg-white border border-gray-100 p-5">
<div className="w-11 h-11 rounded-xl bg-[#E8D9B5]/40 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#9C6B3F]" icon="solar:checklist-minimalistic-bold-duotone" width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-[#1F2937]">
                        Multi-stage QA &amp; grading
                      </p>
<p className="text-sm text-gray-500 font-light leading-relaxed">
                        Standardized checks for physical parameters and
                        consistent batch-to-batch results.
                      </p>
</div>
</div>
<div className="flex gap-4 rounded-2xl bg-white border border-gray-100 p-5">
<div className="w-11 h-11 rounded-xl bg-[#2F5D50]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#2F5D50]" icon="solar:global-bold-duotone" width="22"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-[#1F2937]">
                        Logistics you can count on
                      </p>
<p className="text-sm text-gray-500 font-light leading-relaxed">
                        Reliable timelines via domestic hubs and international
                        ports for smooth restocking cycles.
                      </p>
</div>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row gap-4">
<a className="bg-[#2F5D50] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#23473d] transition-colors inline-flex items-center justify-center gap-2 shadow-sm" href="#contact">
                    Talk to Sales
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="bg-white text-[#1F2937] text-sm font-semibold px-7 py-3.5 rounded-full border border-gray-100 hover:border-gray-200 transition-colors inline-flex items-center justify-center gap-2" href="#products">
                    View Catalog
                    <iconify-icon icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid sm:grid-cols-2 gap-6">
<div className="rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm bg-white">
<div className="relative">
<img alt="Modern processing" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute left-6 bottom-6 right-6">
<p className="text-white font-heading text-lg font-semibold tracking-tight">
                      Modern processing
                    </p>
<p className="text-white/80 text-sm font-light leading-relaxed">
                      Cleaning, grading, and packing designed for repeatable
                      export outcomes.
                    </p>
</div>
</div>
</div>
<div className="rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm bg-white">
<div className="relative">
<img alt="Quality control" className="w-full h-56 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute left-6 bottom-6 right-6">
<p className="text-white font-heading text-lg font-semibold tracking-tight">
                      Batch-level QA
                    </p>
<p className="text-white/80 text-sm font-light leading-relaxed">
                      Defined checks with documentation support for smoother
                      buyer approvals.
                    </p>
</div>
</div>
</div>
<div className="sm:col-span-2 rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm bg-[#F8F6F2]">
<div className="grid md:grid-cols-2">
<div className="p-10">
<p className="text-xs font-semibold tracking-widest uppercase text-[#2F5D50]">
                      What you get
                    </p>
<h4 className="font-heading text-3xl font-semibold tracking-tight text-[#1F2937] mt-3">
                      Predictable supply, less back-and-forth.
                    </h4>
<p className="text-gray-600 font-light leading-relaxed mt-4">
                      We’re set up to reduce friction for buyers: clear specs,
                      consistent batches, and a process you can trust.
                    </p>
<ul className="mt-6 space-y-3 text-sm text-gray-600 font-light">
<li className="flex gap-2">
<span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#2F5D50] shrink-0"></span>
<span>Defined specs and grading standards</span>
</li>
<li className="flex gap-2">
<span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#2F5D50] shrink-0"></span>
<span>Export documentation support</span>
</li>
<li className="flex gap-2">
<span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#2F5D50] shrink-0"></span>
<span>Reliable dispatch and timelines</span>
</li>
</ul>
</div>
<div className="relative">
<img alt="Export packaging" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#F8F6F2] via-[#F8F6F2]/30 to-transparent"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#E8D9B5] overflow-hidden relative">
<div className="absolute inset-0 bg-[#2F5D50]/5 pattern-dots bg-[length:24px_24px]"></div>
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
<div className="grid md:grid-cols-2 gap-20 items-center">
<div data-aos="fade-right">
<div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/50 backdrop-blur-md mb-8">
<span className="text-xs font-bold text-[#2F5D50] tracking-widest uppercase">
                Testimonials
              </span>
</div>
<h2 className="font-heading text-5xl sm:text-6xl font-bold tracking-tight text-[#1F2937] mb-6 leading-[1.1]">
              Global Impact,
              <br/>
<span className="italic font-light">Local Roots.</span>
</h2>
<p className="text-[#1F2937]/70 text-xl mb-10 font-light leading-relaxed">
              Don't just take our word for it. Hear from the visionary partners
              who have transformed their supply chains with our premium
              agricultural exports.
            </p>
<div className="flex gap-4">
<button className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
<iconify-icon className="text-[#2F5D50]" icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="w-14 h-14 rounded-full bg-[#2F5D50] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
<iconify-icon className="text-white" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>
<div className="bg-white rounded-[2.5rem] p-10 sm:p-14 shadow-2xl relative" data-aos="fade-left">
<iconify-icon className="text-[#E8D9B5]/30 absolute top-10 right-10" icon="solar:quote-right-bold-duotone" width="80"></iconify-icon>
<div className="flex gap-1.5 mb-8 text-[#9C6B3F]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-2xl sm:text-3xl font-heading font-medium text-[#1F2937] mb-10 leading-snug tracking-tight">
              "Nature Nest Essentials has completely elevated our grain imports.
              Their Hampi basmati line is unmatched in consistency, and their
              export documentation is flawless. A truly reliable B2B partner."
            </p>
<div className="flex items-center gap-5">
<div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden shadow-inner">
<img alt="Client" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
</div>
<div>
<h4 className="font-bold text-lg text-[#1F2937]">David Reynolds</h4>
<p className="text-sm text-gray-500 font-medium">
                  Procurement Director, EuroFoods
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-12 border-y border-[#E8D9B5]/40 bg-white/50" id="quality">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#2F5D50]" icon="solar:verified-check-linear" width="32"></iconify-icon>
<span className="font-heading text-lg font-medium text-[#1F2937]">
            ISO 9001:2015
          </span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#2F5D50]" icon="solar:diploma-verified-linear" width="32"></iconify-icon>
<span className="font-heading text-lg font-medium text-[#1F2937]">
            FSSAI Certified
          </span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#2F5D50]" icon="solar:globe-linear" width="32"></iconify-icon>
<span className="font-heading text-lg font-medium text-[#1F2937]">
            Export Quality
          </span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="lead-magnet">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F5D50]/10 mb-6">
<iconify-icon className="text-[#2F5D50]" icon="solar:download-bold-duotone" width="18"></iconify-icon>
<span className="text-xs font-semibold text-[#2F5D50] tracking-widest uppercase">
                Lead Magnet
              </span>
</div>
<h2 className="font-heading text-4xl sm:text-5xl font-semibold tracking-tight text-[#1F2937]">
              Get our Buyer Specs Sheet for export-ready commodities.
            </h2>
<p className="text-gray-600 text-lg font-light leading-relaxed mt-5 max-w-xl">
              A simple PDF that helps procurement teams compare grades,
              packaging options, shelf-life, and recommended documentation.
            </p>
<ul className="mt-8 space-y-3 text-sm text-gray-600 font-light">
<li className="flex gap-3">
<iconify-icon className="text-[#2F5D50] mt-0.5" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span>Packaging &amp; labeling checklist</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-[#2F5D50] mt-0.5" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span>Specs overview for rice, sugar, jaggery, pulses</span>
</li>
<li className="flex gap-3">
<iconify-icon className="text-[#2F5D50] mt-0.5" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span>Documentation guidance for smoother clearance</span>
</li>
</ul>
</div>
<div className="lg:col-span-6">
<div className="rounded-[2.5rem] border border-gray-100 bg-[#F8F6F2] p-8 sm:p-10 shadow-sm">
<h3 className="font-heading text-2xl font-semibold tracking-tight text-[#1F2937]">
                Send me the PDF
              </h3>
<p className="text-sm text-gray-600 font-light leading-relaxed mt-2">
                We’ll email it instantly. No spam.
              </p>
<form className="mt-8 grid sm:grid-cols-2 gap-4">
<div className="sm:col-span-2">
<label className="text-xs font-semibold tracking-tight text-[#1F2937]" htmlFor="lmEmail">
                    Work email
                  </label>
<input className="mt-2 w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F5D50]/30" id="lmEmail" placeholder="name@company.com" type="email"/>
</div>
<div>
<label className="text-xs font-semibold tracking-tight text-[#1F2937]" htmlFor="lmName">
                    Full name
                  </label>
<input className="mt-2 w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F5D50]/30" id="lmName" placeholder="Your name" type="text"/>
</div>
<div>
<label className="text-xs font-semibold tracking-tight text-[#1F2937]" htmlFor="lmRole">
                    Role
                  </label>
<input className="mt-2 w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F5D50]/30" id="lmRole" placeholder="Procurement / Imports" type="text"/>
</div>
<div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
<p className="text-xs text-gray-500 font-light">
                    By submitting, you agree to be contacted about your request.
                  </p>
<button className="bg-[#2F5D50] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#23473d] transition-colors shadow-sm inline-flex items-center gap-2" type="button">
                    Get the PDF
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 bg-[#1F2937]" id="cta-banner">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
<div className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-br from-[#2F5D50] via-[#1F2937] to-[#111827] p-10 sm:p-12 relative">
<div className="absolute -top-24 -right-24 w-72 h-72 bg-[#E8D9B5]/25 blur-3xl rounded-full"></div>
<div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
<div className="relative grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-8">
<h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Need a dependable export partner for consistent reorders?
              </h2>
<p className="text-white/70 text-lg font-light leading-relaxed mt-4 max-w-2xl">
                Share your destination market, packaging preference, and
                estimated volume—we’ll respond with specs, pricing bands, and
                lead times.
              </p>
</div>
<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
<a className="bg-[#E8D9B5] text-[#2F5D50] text-sm font-semibold px-8 py-4 rounded-full hover:bg-white transition-colors inline-flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(232,217,181,0.25)]" href="#contact">
                Get a Quote
                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="glass-card text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-white/15 transition-colors inline-flex items-center justify-center gap-2" href="#products">
                Browse Products
                <iconify-icon icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white" id="video">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-12">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F5D50]/10 mb-6">
<iconify-icon className="text-[#2F5D50]" icon="solar:play-bold-duotone" width="18"></iconify-icon>
<span className="text-xs font-semibold text-[#2F5D50] tracking-widest uppercase">
              Video
            </span>
</div>
<h2 className="font-heading text-4xl sm:text-5xl font-semibold tracking-tight text-[#1F2937]">
            A quick look at how we deliver export-grade quality.
          </h2>
<p className="text-gray-600 text-lg font-light leading-relaxed mt-4">
            Replace this embed with your factory walkthrough, sourcing story, or
            packaging line tour.
          </p>
</div>
<div className="max-w-5xl mx-auto">
<div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 bg-black shadow-sm aspect-video">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/ysz5S6PUM-U" title="Nature Nest Essentials video"></iframe>
</div>
<p className="text-center text-xs text-gray-500 font-light mt-4">
            Tip: Use a 16:9 video. Keep it under 90 seconds for best
            conversions.
          </p>
</div>
</div>
</section>
<section className="py-24 bg-[#F8F6F2]" id="recent-blogs">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F5D50]/10 mb-6">
<iconify-icon className="text-[#2F5D50]" icon="solar:book-2-bold-duotone" width="18"></iconify-icon>
<span className="text-xs font-semibold text-[#2F5D50] tracking-widest uppercase">
                Recent Blogs
              </span>
</div>
<h2 className="font-heading text-4xl sm:text-5xl font-semibold tracking-tight text-[#1F2937]">
              Insights for importers &amp; procurement teams
            </h2>
<p className="text-gray-600 text-lg font-light leading-relaxed mt-4">
              Short, practical posts to help you evaluate suppliers, specs, and
              export readiness.
            </p>
</div>
<a className="group inline-flex items-center gap-2 text-[#2F5D50] font-semibold text-sm border-b-2 border-[#2F5D50] pb-1 hover:text-[#1F2937] hover:border-[#1F2937] transition-all" href="#">
            View all posts
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<a className="group rounded-[2rem] overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow" href="#">
<div className="relative">
<img alt="How to evaluate basmati suppliers" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
</div>
<div className="p-8">
<p className="text-xs font-semibold tracking-widest uppercase text-[#2F5D50]">
                Procurement
              </p>
<h3 className="font-heading text-xl font-semibold tracking-tight text-[#1F2937] mt-3">
                How to evaluate a basmati supplier (without surprises)
              </h3>
<p className="text-sm text-gray-600 font-light leading-relaxed mt-3">
                Key checks for specs, documentation, and consistency across
                reorders.
              </p>
<div className="mt-6 text-sm font-semibold text-[#2F5D50] inline-flex items-center gap-2">
                Read more
                <iconify-icon icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</a>
<a className="group rounded-[2rem] overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow" href="#">
<div className="relative">
<img alt="Documentation checklist" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
</div>
<div className="p-8">
<p className="text-xs font-semibold tracking-widest uppercase text-[#2F5D50]">
                Exports
              </p>
<h3 className="font-heading text-xl font-semibold tracking-tight text-[#1F2937] mt-3">
                A simple export documentation checklist for buyers
              </h3>
<p className="text-sm text-gray-600 font-light leading-relaxed mt-3">
                What to request early to prevent shipment delays at clearance.
              </p>
<div className="mt-6 text-sm font-semibold text-[#2F5D50] inline-flex items-center gap-2">
                Read more
                <iconify-icon icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</a>
<a className="group rounded-[2rem] overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow" href="#">
<div className="relative">
<img alt="Packaging and labeling" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
</div>
<div className="p-8">
<p className="text-xs font-semibold tracking-widest uppercase text-[#2F5D50]">
                Packaging
              </p>
<h3 className="font-heading text-xl font-semibold tracking-tight text-[#1F2937] mt-3">
                Packaging options that reduce damage and claims
              </h3>
<p className="text-sm text-gray-600 font-light leading-relaxed mt-3">
                Inner liners, stitching, palletization, and export markings that
                help.
              </p>
<div className="mt-6 text-sm font-semibold text-[#2F5D50] inline-flex items-center gap-2">
                Read more
                <iconify-icon icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</a>
</div>
</div>
</section>
<section className="py-24 bg-white" id="contact-form">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
<div className="grid lg:grid-cols-12 gap-10 items-start">
<div className="lg:col-span-5">
<div className="sticky top-28">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F5D50]/10 mb-6">
<iconify-icon className="text-[#2F5D50]" icon="solar:chat-round-dots-bold-duotone" width="18"></iconify-icon>
<span className="text-xs font-semibold text-[#2F5D50] tracking-widest uppercase">
                  Contact
                </span>
</div>
<h2 className="font-heading text-4xl sm:text-5xl font-semibold tracking-tight text-[#1F2937]">
                Tell us what you need—get a response within 24 hours.
              </h2>
<p className="text-gray-600 text-lg font-light leading-relaxed mt-5">
                We’ll confirm specs, packing options, and lead times based on
                your destination market.
              </p>
<div className="mt-10 space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-[#2F5D50] mt-0.5" icon="solar:letter-bold-duotone" width="18"></iconify-icon>
<div>
<p className="text-sm font-semibold text-[#1F2937]">Email</p>
<p className="text-sm text-gray-600 font-light">
                      export@naturenest.in
                    </p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#9C6B3F] mt-0.5" icon="solar:map-point-bold-duotone" width="18"></iconify-icon>
<div>
<p className="text-sm font-semibold text-[#1F2937]">Office</p>
<p className="text-sm text-gray-600 font-light">
                      Mumbai, Maharashtra, India
                    </p>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<form className="bg-[#F8F6F2] border border-gray-100 rounded-[2.5rem] p-8 sm:p-10 shadow-sm">
<div className="grid sm:grid-cols-2 gap-5">
<div>
<label className="text-xs font-semibold text-[#1F2937] tracking-tight" htmlFor="cfName">
                    Full name
                  </label>
<input className="mt-2 w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F5D50]/30" id="cfName" placeholder="Your name" type="text"/>
</div>
<div>
<label className="text-xs font-semibold text-[#1F2937] tracking-tight" htmlFor="cfEmail">
                    Work email
                  </label>
<input className="mt-2 w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F5D50]/30" id="cfEmail" placeholder="name@company.com" type="email"/>
</div>
<div>
<label className="text-xs font-semibold text-[#1F2937] tracking-tight" htmlFor="cfCompany">
                    Company
                  </label>
<input className="mt-2 w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F5D50]/30" id="cfCompany" placeholder="Company name" type="text"/>
</div>
<div>
<label className="text-xs font-semibold text-[#1F2937] tracking-tight" htmlFor="cfProduct">
                    Product
                  </label>
<select className="mt-2 w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F5D50]/30" id="cfProduct">
<option>Premium Rice</option>
<option>Natural Sugar</option>
<option>Pure Jaggery</option>
<option>Dal &amp; Pulses</option>
<option>Other</option>
</select>
</div>
<div>
<label className="text-xs font-semibold text-[#1F2937] tracking-tight" htmlFor="cfMarket">
                    Destination market
                  </label>
<input className="mt-2 w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F5D50]/30" id="cfMarket" placeholder="Country / Region" type="text"/>
</div>
<div>
<label className="text-xs font-semibold text-[#1F2937] tracking-tight" htmlFor="cfVolume">
                    Estimated volume
                  </label>
<input className="mt-2 w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F5D50]/30" id="cfVolume" placeholder="e.g., 1 container / month" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs font-semibold text-[#1F2937] tracking-tight" htmlFor="cfMessage">
                    Message
                  </label>
<textarea className="mt-2 w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F5D50]/30" id="cfMessage" placeholder="Share preferred specs, packaging, and timelines..." rows="5"></textarea>
</div>
</div>
<div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<p className="text-xs text-gray-500 font-light">
                  By submitting, you agree to be contacted regarding your
                  inquiry.
                </p>
<button className="bg-[#2F5D50] text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-[#23473d] transition-colors shadow-sm inline-flex items-center gap-2" type="button">
                  Send inquiry
                  <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</section>
<section className="py-32 relative overflow-hidden bg-[#2F5D50]" id="contact">
<div className="absolute inset-0 bg-black/50 mix-blend-overlay z-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1527847263472-aa5338d178b8?ixlib=rb-4.0.3&amp', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#2F5D50] via-[#2F5D50]/80 to-transparent z-0"></div>
<div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10" data-aos="zoom-in">
<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-bounce">
<iconify-icon className="text-[#E8D9B5]" icon="solar:rocket-bold-duotone" width="20"></iconify-icon>
<span className="text-xs font-bold text-[#E8D9B5] tracking-widest uppercase">
            Let's Grow Together
          </span>
</div>
<h2 className="font-heading text-5xl sm:text-7xl font-bold tracking-tight text-white mb-8 drop-shadow-lg leading-[1.1]">
          Ready to scale your
          <span className="text-[#E8D9B5] italic font-light">supply chain?</span>
</h2>
<p className="text-gray-200 text-xl font-light mb-12 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
          Partner with Nature Nest Essentials for consistent quality,
          competitive volume pricing, and guaranteed rapid delivery across
          international borders.
        </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6">
<a className="w-full sm:w-auto bg-[#E8D9B5] text-[#2F5D50] text-lg font-bold px-10 py-5 rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_40px_rgba(232,217,181,0.4)] flex items-center justify-center gap-3" href="#">
            Inquire for Bulk Orders
            <iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</a>
<a className="w-full sm:w-auto glass-card text-white border border-white/30 text-lg font-semibold px-10 py-5 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-3" href="#">
            Request Samples
            <iconify-icon icon="solar:box-bold-duotone" width="24"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="block mb-6 hover:opacity-80 transition-opacity" href="#">
<img alt="Nature Nest Essentials" className="h-12 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0dd485f-b2b1-4dbc-9832-300ff89cdd9f_800w.png"/>
</a>
<p className="text-xs text-gray-500 leading-relaxed font-light mb-6 pr-4">
              Premium B2B FMCG suppliers connecting authentic Indian agriculture
              with global markets.
            </p>
<div className="flex items-center gap-4 text-gray-400">
<a className="hover:text-[#2F5D50] transition-colors" href="#">
<iconify-icon icon="solar:minimalistic-linkedin-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-[#2F5D50] transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-[#2F5D50] transition-colors" href="#">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-heading text-sm font-semibold text-[#1F2937] mb-4 tracking-tight">
              Products
            </h4>
<ul className="space-y-3">
<li>
<a className="text-xs text-gray-500 hover:text-[#2F5D50] transition-colors" href="#">
                  Premium Rice
                </a>
</li>
<li>
<a className="text-xs text-gray-500 hover:text-[#2F5D50] transition-colors" href="#">
                  Hampi Brand
                </a>
</li>
<li>
<a className="text-xs text-gray-500 hover:text-[#2F5D50] transition-colors" href="#">
                  Natural Sugar
                </a>
</li>
<li>
<a className="text-xs text-gray-500 hover:text-[#2F5D50] transition-colors" href="#">
                  Traditional Jaggery
                </a>
</li>
<li>
<a className="text-xs text-gray-500 hover:text-[#2F5D50] transition-colors" href="#">
                  Dal &amp; Pulses
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-heading text-sm font-semibold text-[#1F2937] mb-4 tracking-tight">
              Company
            </h4>
<ul className="space-y-3">
<li>
<a className="text-xs text-gray-500 hover:text-[#2F5D50] transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="text-xs text-gray-500 hover:text-[#2F5D50] transition-colors" href="#">
                  Sourcing Practices
                </a>
</li>
<li>
<a className="text-xs text-gray-500 hover:text-[#2F5D50] transition-colors" href="#">
                  Quality Assurance
                </a>
</li>
<li>
<a className="text-xs text-gray-500 hover:text-[#2F5D50] transition-colors" href="#">
                  Export Details
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-heading text-sm font-semibold text-[#1F2937] mb-4 tracking-tight">
              Contact
            </h4>
<ul className="space-y-3">
<li className="flex gap-2 text-xs text-gray-500">
<iconify-icon className="shrink-0 text-[#9C6B3F]" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>
                  Plot 42, Agro Industrial Park,
                  <br/>
                  Mumbai, Maharashtra, India
                </span>
</li>
<li className="flex gap-2 text-xs text-gray-500">
<iconify-icon className="shrink-0 text-[#9C6B3F]" icon="solar:letter-linear" width="16"></iconify-icon>
<a className="hover:text-[#2F5D50] transition-colors" href="mailto:export@naturenest.in">
                  export@naturenest.in
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400 font-light">
            © 2024 Nature Nest Essentials. All rights reserved.
          </p>
<div className="flex gap-6">
<a className="text-xs text-gray-400 hover:text-[#2F5D50] transition-colors" href="#">
              Privacy Policy
            </a>
<a className="text-xs text-gray-400 hover:text-[#2F5D50] transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
