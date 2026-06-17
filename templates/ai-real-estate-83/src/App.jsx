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



            0
          


      document.querySelectorAll('.faq-btn').forEach(btn=>{
        btn.addEventListener('click',()=>{
          const content = btn.nextElementSibling;
          const icon = btn.querySelector('.faq-icon');
          const open = content.classList.contains('open');
          document.querySelectorAll('.faq-content').forEach(c=>c.classList.remove('open'));
          document.querySelectorAll('.faq-icon').forEach(i=>i.style.transform='rotate(0deg)');
          if(!open){ content.classList.add('open'); icon.style.transform='rotate(180deg)'; }
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
      

<nav className="sticky top-0 z-50 backdrop-blur-lg" style={{background: 'rgba(248,250,252,0.8)', borderBottom: '1px solid #E5E7EB'}}>
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="text-xl font-bold tracking-tight" style={{color: '#111827'}}>
          reelty
          <span style={{color: '#6366F1'}}>genie</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm" style={{color: '#6B7280'}}>
<a className="hover:text-gray-900 transition" href="#how">How it works</a>
<a className="hover:text-gray-900 transition" href="#showcase">
            Showcase
          </a>
<a className="hover:text-gray-900 transition" href="#benefits">
            Benefits
          </a>
<a className="hover:text-gray-900 transition" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:block text-sm font-medium px-4 py-2 rounded-xl transition" style={{color: '#111827'}}>
            Sign in
          </button>
<button className="text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition" style={{background: 'linear-gradient(135deg,#6366F1 0%,#8B5CF6 100%)'}}>
            Start Free Trial
          </button>
</div>
</div>
</nav>

<section className="relative overflow-hidden">
<div className="absolute inset-0 -z-10" style={{background: 'radial-gradient(ellipse at top,rgba(99,102,241,0.12),transparent 60%)', backgroundImage: 'linear-gradient(135deg,rgba(17,24,39,0.55),rgba(30,27,75,0.35)), url(\'https: //images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="fade-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-medium" style={{background: 'rgba(255, 255, 255, 0.92)', border: '1px solid rgba(255,255,255,0.6)', color: '#6366F1'}}>
<iconify-icon icon="solar:verified-check-linear" width="18"></iconify-icon>
              Trusted by Real Estate Professionals
            </div>
<h1 className="font-bold tracking-tight leading-tight" style={{fontSize: 'clamp(2.75rem, 5vw, 4.5rem)', color: '#FFFFFF', textShadow: '0 2px 12px rgba(0,0,0,0.4)'}}>
              Turn Every Property Listing Into a
              <span style={{background: 'linear-gradient(135deg, #A5B4FC 0%, #67E8F9 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', textShadow: '0 2px 12px rgba(0,0,0,0.4)'}}>
                Lead-Generating Video
              </span>
              in Minutes
            </h1>
<p className="mt-6 leading-relaxed" style={{fontSize: '1.125rem', color: '#F1F5F9', lineHeight: '1.7', textShadow: '0 1px 8px rgba(0,0,0,0.35)'}}>
              Create your AI real estate avatar once and automatically generate
              professional property videos that attract buyers, impress sellers,
              and generate more inquiries without recording new content every
              time.
            </p>
<div className="mt-8 flex flex-wrap gap-4">
<button className="px-7 py-3.5 rounded-xl text-white font-semibold transition flex items-center gap-2" style={{fontSize: '1rem', background: 'linear-gradient(135deg,#6366F1 0%,#8B5CF6 100%)'}}>
                Start Creating Listing Reels
                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="px-7 py-3.5 rounded-xl font-semibold transition flex items-center gap-2" style={{fontSize: '1rem', background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#111827'}}>
<iconify-icon icon="solar:play-circle-linear" style={{color: '#6366F1'}} width="20"></iconify-icon>
                Watch Demo
              </button>
</div>
<div className="mt-8 flex flex-wrap gap-6 text-sm" style={{color: '#E2E8F0'}}>
<span className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#06B6D4'}} width="18"></iconify-icon>
                One-Time Setup
              </span>
<span className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#06B6D4'}} width="18"></iconify-icon>
                Unlimited Listing Reels
              </span>
<span className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#06B6D4'}} width="18"></iconify-icon>
                Generate Videos in 24 Hours
              </span>
</div>
</div>

<div className="fade-up relative" style={{animationDelay: '0.3s'}}>
<div className="absolute -inset-6 -z-10 rounded-3xl blur-2xl opacity-40" style={{background: 'linear-gradient(135deg,#6366F1,#06B6D4)'}}></div>
<div className="rounded-3xl p-5 backdrop-blur-xl" style={{background: 'rgba(255, 255, 255, 0.7)', border: '1px solid #E5E7EB', boxShadow: '0 30px 60px -20px rgba(99,102,241,0.3)'}}>
<div className="rounded-2xl overflow-hidden" style={{background: '#111827'}}>
<div className="flex items-center gap-2 px-4 py-3" style={{borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
<span className="w-3 h-3 rounded-full" style={{background: '#ef4444'}}></span>
<span className="w-3 h-3 rounded-full" style={{background: '#f59e0b'}}></span>
<span className="w-3 h-3 rounded-full" style={{background: '#10b981'}}></span>
<span className="ml-3 text-xs" style={{color: '#6B7280'}}>
                    reeltygenie.app/studio
                  </span>
</div>
<div className="p-5 grid grid-cols-2 gap-3">
<div className="col-span-2 rounded-xl p-4" style={{background: 'rgba(99,102,241,0.15)'}}>
<p className="text-xs mb-1" style={{color: '#8B5CF6'}}>
                      PROPERTY LISTING
                    </p>
<p className="text-sm text-white">
                      123 Sunset Boulevard · 4BD · $1.2M
                    </p>
</div>
<div className="rounded-xl p-4 aspect-square flex flex-col items-center justify-center gap-2" style={{background: 'rgba(255,255,255,0.06)'}}>
<iconify-icon icon="solar:user-circle-linear" style={{color: '#6366F1'}} width="36"></iconify-icon>
<p className="text-xs" style={{color: '#9CA3AF'}}>AI Avatar</p>
</div>
<div className="rounded-xl p-4 aspect-square flex flex-col items-center justify-center gap-2" style={{background: 'rgba(255,255,255,0.06)'}}>
<iconify-icon icon="solar:videocamera-record-linear" style={{color: '#06B6D4'}} width="36"></iconify-icon>
<p className="text-xs" style={{color: '#9CA3AF'}}>Auto Reel</p>
</div>
<div className="col-span-2 rounded-xl p-4 flex items-center justify-between" style={{background: 'rgba(6,182,212,0.12)'}}>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:bell-linear" style={{color: '#06B6D4'}} width="20"></iconify-icon>
<p className="text-sm text-white">
                        New lead inquiry received
                      </p>
</div>
<span className="text-xs px-2 py-1 rounded-lg" style={{background: 'rgba(6,182,212,0.2)', color: '#06B6D4'}}>
                      +1
                    </span>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 rounded-2xl p-4 backdrop-blur-xl hidden sm:block" style={{background: 'rgba(255, 255, 255, 0.85)', border: '1px solid #E5E7EB', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.15)'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(135deg,#6366F1,#8B5CF6)'}}>
<iconify-icon icon="solar:share-linear" style={{color: 'white'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold">Published</p>
<p className="text-xs" style={{color: '#6B7280'}}>4 platforms</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20" style={{background: '#FFFFFF'}}>
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center font-bold tracking-tight mb-12 fade-up" style={{fontSize: 'clamp(2rem,4vw,2.75rem)'}}>
          Built for Modern Real Estate Professionals
        </h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-3xl p-8 transition hover:-translate-y-1 fade-up" style={{background: '#F8FAFC', border: '1px solid #E5E7EB'}}>
<p className="font-bold tracking-tight" style={{fontSize: '2.5rem', background: 'linear-gradient(135deg,#6366F1,#06B6D4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>
              10,000+
            </p>
<p className="mt-2" style={{color: '#6B7280'}}>Videos Generated</p>
</div>
<div className="rounded-3xl p-8 transition hover:-translate-y-1 fade-up" style={{background: '#F8FAFC', border: '1px solid #E5E7EB', animationDelay: '0.1s'}}>
<p className="font-bold tracking-tight" style={{fontSize: '2.5rem', background: 'linear-gradient(135deg,#6366F1,#06B6D4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>
              500+
            </p>
<p className="mt-2" style={{color: '#6B7280'}}>Properties Marketed</p>
</div>
<div className="rounded-3xl p-8 transition hover:-translate-y-1 fade-up" style={{background: '#F8FAFC', border: '1px solid #E5E7EB', animationDelay: '0.2s'}}>
<p className="font-bold tracking-tight" style={{fontSize: '2.5rem', background: 'linear-gradient(135deg,#6366F1,#06B6D4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>
              24 Hours
            </p>
<p className="mt-2" style={{color: '#6B7280'}}>Average Setup Time</p>
</div>
<div className="rounded-3xl p-8 transition hover:-translate-y-1 fade-up" style={{background: '#F8FAFC', border: '1px solid #E5E7EB', animationDelay: '0.3s'}}>
<p className="font-bold tracking-tight" style={{fontSize: '2.5rem', background: 'linear-gradient(135deg,#6366F1,#06B6D4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>
              Unlimited
            </p>
<p className="mt-2" style={{color: '#6B7280'}}>Reel Creation</p>
</div>
</div>
</div>
</section>

<section className="py-20" style={{background: '#F8FAFC'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12 fade-up">
<h2 className="font-bold tracking-tight" style={{fontSize: 'clamp(2rem,4vw,3rem)'}}>
            Most Realtors Don't Have a Lead Problem
          </h2>
<p className="mt-3 font-semibold" style={{fontSize: '1.5rem', background: 'linear-gradient(135deg,#6366F1,#8B5CF6)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>
            They Have a Content Problem
          </p>
</div>
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="space-y-4 fade-up">
<div className="flex items-center gap-3 p-5 rounded-2xl" style={{background: '#FFFFFF', border: '1px solid #E5E7EB'}}>
<iconify-icon icon="solar:close-circle-linear" style={{color: '#ef4444'}} width="24"></iconify-icon>
<span style={{color: '#111827'}}>No time to record videos</span>
</div>
<div className="flex items-center gap-3 p-5 rounded-2xl" style={{background: '#FFFFFF', border: '1px solid #E5E7EB'}}>
<iconify-icon icon="solar:close-circle-linear" style={{color: '#ef4444'}} width="24"></iconify-icon>
<span style={{color: '#111827'}}>
                Struggle creating listing content
              </span>
</div>
<div className="flex items-center gap-3 p-5 rounded-2xl" style={{background: '#FFFFFF', border: '1px solid #E5E7EB'}}>
<iconify-icon icon="solar:close-circle-linear" style={{color: '#ef4444'}} width="24"></iconify-icon>
<span style={{color: '#111827'}}>Inconsistent social posting</span>
</div>
<div className="flex items-center gap-3 p-5 rounded-2xl" style={{background: '#FFFFFF', border: '1px solid #E5E7EB'}}>
<iconify-icon icon="solar:close-circle-linear" style={{color: '#ef4444'}} width="24"></iconify-icon>
<span style={{color: '#111827'}}>
                Expensive editors and marketing teams
              </span>
</div>
<div className="flex items-center gap-3 p-5 rounded-2xl" style={{background: '#FFFFFF', border: '1px solid #E5E7EB'}}>
<iconify-icon icon="solar:close-circle-linear" style={{color: '#ef4444'}} width="24"></iconify-icon>
<span style={{color: '#111827'}}>
                Listings lose visibility after one post
              </span>
</div>
</div>
<div className="fade-up rounded-3xl p-10 flex items-center justify-center" style={{background: 'linear-gradient(135deg,rgba(99,102,241,0.08),rgba(6,182,212,0.08))', border: '1px solid #E5E7EB', animationDelay: '0.2s'}}>
<div className="relative">
<iconify-icon icon="solar:user-hands-linear" style={{color: '#6366F1'}} width="120"></iconify-icon>
<iconify-icon className="absolute -top-2 -right-6" icon="solar:videocamera-linear" style={{color: '#8B5CF6'}} width="40"></iconify-icon>
<iconify-icon className="absolute bottom-0 -left-8" icon="solar:document-text-linear" style={{color: '#06B6D4'}} width="36"></iconify-icon>
<iconify-icon className="absolute top-1/2 -right-10" icon="solar:gallery-linear" style={{color: '#8B5CF6'}} width="32"></iconify-icon>
</div>
</div>
</div>
<p className="mt-12 text-center max-w-3xl mx-auto fade-up" style={{fontSize: '1.25rem', color: '#6B7280', lineHeight: '1.7'}}>
          While you're busy selling homes, competitors are publishing content
          every day and staying top-of-mind with buyers and sellers.
        </p>
</div>
</section>

<section className="py-20" style={{background: '#FFFFFF'}}>
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center font-bold tracking-tight mb-12 fade-up" style={{fontSize: 'clamp(2rem,4vw,3rem)'}}>
          From Manual Marketing to Automated Growth
        </h2>
<div className="grid lg:grid-cols-2 gap-8">
<div className="rounded-3xl p-8 fade-up" style={{background: '#F8FAFC', border: '1px solid #E5E7EB'}}>
<p className="text-sm font-semibold mb-5" style={{color: '#6B7280'}}>
              BEFORE REELTYGENIE
            </p>
<ul className="space-y-4">
<li className="flex gap-3" style={{color: '#6B7280'}}>
<iconify-icon icon="solar:close-circle-linear" style={{color: '#ef4444'}} width="22"></iconify-icon>
                Recording every property manually
              </li>
<li className="flex gap-3" style={{color: '#6B7280'}}>
<iconify-icon icon="solar:close-circle-linear" style={{color: '#ef4444'}} width="22"></iconify-icon>
                Paying video editors
              </li>
<li className="flex gap-3" style={{color: '#6B7280'}}>
<iconify-icon icon="solar:close-circle-linear" style={{color: '#ef4444'}} width="22"></iconify-icon>
                Inconsistent posting schedule
              </li>
<li className="flex gap-3" style={{color: '#6B7280'}}>
<iconify-icon icon="solar:close-circle-linear" style={{color: '#ef4444'}} width="22"></iconify-icon>
                Hours spent creating content
              </li>
<li className="flex gap-3" style={{color: '#6B7280'}}>
<iconify-icon icon="solar:close-circle-linear" style={{color: '#ef4444'}} width="22"></iconify-icon>
                Limited marketing reach
              </li>
</ul>
</div>
<div className="rounded-3xl p-8 fade-up text-white" style={{background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', animationDelay: '0.2s', boxShadow: '0 30px 60px -20px rgba(99,102,241,0.5)'}}>
<p className="text-sm font-semibold mb-5" style={{color: 'rgba(255,255,255,0.8)'}}>
              AFTER REELTYGENIE
            </p>
<ul className="space-y-4">
<li className="flex gap-3">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#fff'}} width="22"></iconify-icon>
                AI avatar creates content automatically
              </li>
<li className="flex gap-3">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#fff'}} width="22"></iconify-icon>
                Unlimited listing videos
              </li>
<li className="flex gap-3">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#fff'}} width="22"></iconify-icon>
                Consistent professional branding
              </li>
<li className="flex gap-3">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#fff'}} width="22"></iconify-icon>
                Minutes instead of hours
              </li>
<li className="flex gap-3">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#fff'}} width="22"></iconify-icon>
                Multi-platform distribution
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20" id="how" style={{background: '#F8FAFC'}}>
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center font-bold tracking-tight mb-12 fade-up" style={{fontSize: 'clamp(2rem,4vw,3rem)'}}>
          Launch Your AI Real Estate Agent in 3 Simple Steps
        </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="rounded-3xl p-8 fade-up transition hover:-translate-y-1" style={{background: '#FFFFFF', border: '1px solid #E5E7EB'}}>
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{background: 'rgba(99,102,241,0.1)'}}>
<iconify-icon icon="solar:user-plus-linear" style={{color: '#6366F1'}} width="28"></iconify-icon>
</div>
<p className="text-sm font-semibold mb-2" style={{color: '#8B5CF6'}}>
              STEP 1
            </p>
<h3 className="text-xl font-semibold tracking-tight mb-2">
              Create Your AI Avatar
            </h3>
<p style={{color: '#6B7280'}}>
              Create a digital version of yourself once.
            </p>
</div>
<div className="rounded-3xl p-8 fade-up transition hover:-translate-y-1" style={{background: '#FFFFFF', border: '1px solid #E5E7EB', animationDelay: '0.15s'}}>
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{background: 'rgba(139,92,246,0.1)'}}>
<iconify-icon icon="solar:upload-linear" style={{color: '#8B5CF6'}} width="28"></iconify-icon>
</div>
<p className="text-sm font-semibold mb-2" style={{color: '#8B5CF6'}}>
              STEP 2
            </p>
<h3 className="text-xl font-semibold tracking-tight mb-2">
              Upload Property Details
            </h3>
<p style={{color: '#6B7280'}}>
              Paste listing information or property features.
            </p>
</div>
<div className="rounded-3xl p-8 fade-up transition hover:-translate-y-1" style={{background: '#FFFFFF', border: '1px solid #E5E7EB', animationDelay: '0.3s'}}>
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{background: 'rgba(6,182,212,0.1)'}}>
<iconify-icon icon="solar:videocamera-record-linear" style={{color: '#06B6D4'}} width="28"></iconify-icon>
</div>
<p className="text-sm font-semibold mb-2" style={{color: '#8B5CF6'}}>
              STEP 3
            </p>
<h3 className="text-xl font-semibold tracking-tight mb-2">
              Generate Unlimited Reels
            </h3>
<p style={{color: '#6B7280'}}>
              Automatically create professional videos ready for social media.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20" id="showcase" style={{background: '#FFFFFF'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12 fade-up">
<h2 className="font-bold tracking-tight" style={{fontSize: 'clamp(2rem,4vw,3rem)'}}>
            See ReeltyGenie In Action
          </h2>
<p className="mt-3" style={{fontSize: '1.25rem', color: '#6B7280'}}>
            Professional property videos generated automatically.
          </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">


<div className="group relative rounded-3xl overflow-hidden aspect-[4/5] fade-up cursor-pointer" style={{background: 'linear-gradient(160deg,#6366F1,#1e1b4b)'}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md transition group-hover:scale-110" style={{background: 'rgba(255,255,255,0.2)'}}>
<iconify-icon icon="solar:play-bold" style={{color: 'white'}} width="28"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-5" style={{background: 'linear-gradient(transparent,rgba(0,0,0,0.6))'}}>
<p className="text-white font-semibold">Luxury Home Listing</p>
</div>
</div>
<div className="group relative rounded-3xl overflow-hidden aspect-[4/5] fade-up cursor-pointer" style={{background: 'linear-gradient(160deg,#8B5CF6,#1e1b4b)', animationDelay: '0.1s'}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md transition group-hover:scale-110" style={{background: 'rgba(255,255,255,0.2)'}}>
<iconify-icon icon="solar:play-bold" style={{color: 'white'}} width="28"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-5" style={{background: 'linear-gradient(transparent,rgba(0,0,0,0.6))'}}>
<p className="text-white font-semibold">Family Home Listing</p>
</div>
</div>
<div className="group relative rounded-3xl overflow-hidden aspect-[4/5] fade-up cursor-pointer" style={{background: 'linear-gradient(160deg,#06B6D4,#0e7490)', animationDelay: '0.2s'}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md transition group-hover:scale-110" style={{background: 'rgba(255,255,255,0.2)'}}>
<iconify-icon icon="solar:play-bold" style={{color: 'white'}} width="28"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-5" style={{background: 'linear-gradient(transparent,rgba(0,0,0,0.6))'}}>
<p className="text-white font-semibold">Condo Listing</p>
</div>
</div>
<div className="group relative rounded-3xl overflow-hidden aspect-[4/5] fade-up cursor-pointer" style={{background: 'linear-gradient(160deg,#4f46e5,#06B6D4)', animationDelay: '0.1s'}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md transition group-hover:scale-110" style={{background: 'rgba(255,255,255,0.2)'}}>
<iconify-icon icon="solar:play-bold" style={{color: 'white'}} width="28"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-5" style={{background: 'linear-gradient(transparent,rgba(0,0,0,0.6))'}}>
<p className="text-white font-semibold">Commercial Property</p>
</div>
</div>
<div className="group relative rounded-3xl overflow-hidden aspect-[4/5] fade-up cursor-pointer" style={{background: 'linear-gradient(160deg,#7c3aed,#6366F1)', animationDelay: '0.2s'}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md transition group-hover:scale-110" style={{background: 'rgba(255,255,255,0.2)'}}>
<iconify-icon icon="solar:play-bold" style={{color: 'white'}} width="28"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-5" style={{background: 'linear-gradient(transparent,rgba(0,0,0,0.6))'}}>
<p className="text-white font-semibold">Open House Promotion</p>
</div>
</div>
<div className="group relative rounded-3xl overflow-hidden aspect-[4/5] fade-up cursor-pointer" style={{background: 'linear-gradient(160deg,#111827,#6366F1)', animationDelay: '0.3s'}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md transition group-hover:scale-110" style={{background: 'rgba(255,255,255,0.2)'}}>
<iconify-icon icon="solar:play-bold" style={{color: 'white'}} width="28"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-5" style={{background: 'linear-gradient(transparent,rgba(0,0,0,0.6))'}}>
<p className="text-white font-semibold">Market Update Reel</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20" id="benefits" style={{background: '#F8FAFC'}}>
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center font-bold tracking-tight mb-12 fade-up" style={{fontSize: 'clamp(2rem,4vw,3rem)'}}>
          Why Top-Producing Agents Use ReeltyGenie
        </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-3xl p-7 fade-up transition hover:-translate-y-1" style={{background: '#FFFFFF', border: '1px solid #E5E7EB'}}>
<iconify-icon icon="solar:eye-linear" style={{color: '#6366F1'}} width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mt-4">
              Stay Visible Without Constantly Recording Videos
            </h3>
</div>
<div className="rounded-3xl p-7 fade-up transition hover:-translate-y-1" style={{background: '#FFFFFF', border: '1px solid #E5E7EB', animationDelay: '0.1s'}}>
<iconify-icon icon="solar:clock-circle-linear" style={{color: '#06B6D4'}} width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mt-4">
              Generate New Listing Content in Minutes
            </h3>
</div>
<div className="rounded-3xl p-7 fade-up transition hover:-translate-y-1" style={{background: '#FFFFFF', border: '1px solid #E5E7EB', animationDelay: '0.2s'}}>
<iconify-icon icon="solar:global-linear" style={{color: '#6366F1'}} width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mt-4">
              Expand Reach Across Multiple Platforms
            </h3>
</div>
<div className="rounded-3xl p-7 fade-up transition hover:-translate-y-1" style={{background: '#FFFFFF', border: '1px solid #E5E7EB', animationDelay: '0.1s'}}>
<iconify-icon icon="solar:chart-2-linear" style={{color: '#06B6D4'}} width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mt-4">
              Convert More Listing Views Into Leads
            </h3>
</div>
<div className="rounded-3xl p-7 fade-up transition hover:-translate-y-1" style={{background: '#FFFFFF', border: '1px solid #E5E7EB', animationDelay: '0.2s'}}>
<iconify-icon icon="solar:crown-linear" style={{color: '#6366F1'}} width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mt-4">
              Maintain Consistent Personal Branding
            </h3>
</div>
<div className="rounded-3xl p-7 fade-up transition hover:-translate-y-1" style={{background: '#FFFFFF', border: '1px solid #E5E7EB', animationDelay: '0.3s'}}>
<iconify-icon icon="solar:rocket-linear" style={{color: '#06B6D4'}} width="32"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mt-4">
              Scale Marketing Without Hiring Staff
            </h3>
</div>
</div>
</div>
</section>

<section className="py-20" style={{background: '#FFFFFF'}}>
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center font-bold tracking-tight mb-12 fade-up" style={{fontSize: 'clamp(2rem,4vw,3rem)'}}>
          How Agents Are Winning More Listings With ReeltyGenie
        </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-3xl p-7 fade-up transition hover:-translate-y-1" style={{background: '#F8FAFC', border: '1px solid #E5E7EB'}}>
<p style={{color: '#111827', lineHeight: '1.7'}}>
              "I closed 3 extra listings last quarter just from staying
              consistent online. Game-changer."
            </p>
<div className="flex items-center gap-3 mt-5">
<div className="w-11 h-11 rounded-full" style={{background: 'linear-gradient(135deg,#6366F1,#8B5CF6)'}}></div>
<div>
<p className="font-semibold text-sm">Sarah Mitchell</p>
<p className="text-xs" style={{color: '#6B7280'}}>
                  Keller Williams · +3 listings
                </p>
</div>
</div>
</div>
<div className="rounded-3xl p-7 fade-up transition hover:-translate-y-1" style={{background: '#F8FAFC', border: '1px solid #E5E7EB', animationDelay: '0.1s'}}>
<p style={{color: '#111827', lineHeight: '1.7'}}>
              "Cut my content time from 6 hours a week to 20 minutes. Inquiries
              doubled."
            </p>
<div className="flex items-center gap-3 mt-5">
<div className="w-11 h-11 rounded-full" style={{background: 'linear-gradient(135deg,#8B5CF6,#06B6D4)'}}></div>
<div>
<p className="font-semibold text-sm">James Carter</p>
<p className="text-xs" style={{color: '#6B7280'}}>
                  RE/MAX · 2x inquiries
                </p>
</div>
</div>
</div>
<div className="rounded-3xl p-7 fade-up transition hover:-translate-y-1" style={{background: '#F8FAFC', border: '1px solid #E5E7EB', animationDelay: '0.2s'}}>
<p style={{color: '#111827', lineHeight: '1.7'}}>
              "My luxury listings finally get the cinematic treatment without
              the production cost."
            </p>
<div className="flex items-center gap-3 mt-5">
<div className="w-11 h-11 rounded-full" style={{background: 'linear-gradient(135deg,#06B6D4,#6366F1)'}}></div>
<div>
<p className="font-semibold text-sm">Olivia Reyes</p>
<p className="text-xs" style={{color: '#6B7280'}}>Compass · $4M sold</p>
</div>
</div>
</div>
<div className="rounded-3xl p-7 fade-up transition hover:-translate-y-1" style={{background: '#F8FAFC', border: '1px solid #E5E7EB', animationDelay: '0.1s'}}>
<p style={{color: '#111827', lineHeight: '1.7'}}>
              "The AI avatar looks just like me. Clients say my marketing feels
              next-level."
            </p>
<div className="flex items-center gap-3 mt-5">
<div className="w-11 h-11 rounded-full" style={{background: 'linear-gradient(135deg,#6366F1,#06B6D4)'}}></div>
<div>
<p className="font-semibold text-sm">David Chen</p>
<p className="text-xs" style={{color: '#6B7280'}}>
                  eXp Realty · 5⭐ reviews
                </p>
</div>
</div>
</div>
<div className="rounded-3xl p-7 fade-up transition hover:-translate-y-1" style={{background: '#F8FAFC', border: '1px solid #E5E7EB', animationDelay: '0.2s'}}>
<p style={{color: '#111827', lineHeight: '1.7'}}>
              "Posted every day for the first time ever. My seller appointments
              went up 30%."
            </p>
<div className="flex items-center gap-3 mt-5">
<div className="w-11 h-11 rounded-full" style={{background: 'linear-gradient(135deg,#8B5CF6,#6366F1)'}}></div>
<div>
<p className="font-semibold text-sm">Maria Lopez</p>
<p className="text-xs" style={{color: '#6B7280'}}>
                  Coldwell Banker · +30% appts
                </p>
</div>
</div>
</div>
<div className="rounded-3xl p-7 fade-up transition hover:-translate-y-1" style={{background: '#F8FAFC', border: '1px solid #E5E7EB', animationDelay: '0.3s'}}>
<p style={{color: '#111827', lineHeight: '1.7'}}>
              "Stopped paying my editor $2k/month. ReeltyGenie does it better
              and faster."
            </p>
<div className="flex items-center gap-3 mt-5">
<div className="w-11 h-11 rounded-full" style={{background: 'linear-gradient(135deg,#06B6D4,#8B5CF6)'}}></div>
<div>
<p className="font-semibold text-sm">Tom Walker</p>
<p className="text-xs" style={{color: '#6B7280'}}>
                  Sotheby's · saved $24k/yr
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20" style={{background: '#111827'}}>
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center font-bold tracking-tight mb-12 text-white fade-up" style={{fontSize: 'clamp(2rem,4vw,3rem)'}}>
          Real Business Impact
        </h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-3xl p-8 fade-up" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)'}}>
<p className="font-bold tracking-tight" style={{fontSize: '3rem', background: 'linear-gradient(135deg,#6366F1,#06B6D4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>
              300%
            </p>
<p className="mt-2 text-white">More Listing Visibility</p>
</div>
<div className="rounded-3xl p-8 fade-up" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', animationDelay: '0.1s'}}>
<p className="font-bold tracking-tight" style={{fontSize: '3rem', background: 'linear-gradient(135deg,#6366F1,#06B6D4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>
              40%
            </p>
<p className="mt-2 text-white">Faster Content Production</p>
</div>
<div className="rounded-3xl p-8 fade-up" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', animationDelay: '0.2s'}}>
<p className="font-bold tracking-tight" style={{fontSize: '3rem', background: 'linear-gradient(135deg,#6366F1,#06B6D4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>
              25%
            </p>
<p className="mt-2 text-white">More Qualified Inquiries</p>
</div>
<div className="rounded-3xl p-8 fade-up" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.1)', animationDelay: '0.3s'}}>
<p className="font-bold tracking-tight" style={{fontSize: '3rem', background: 'linear-gradient(135deg,#6366F1,#06B6D4)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>
              60%
            </p>
<p className="mt-2 text-white">Time Savings</p>
</div>
</div>
<p className="text-center text-xs mt-8" style={{color: '#6B7280'}}>
          Based on customer-reported performance improvements.
        </p>
</div>
</section>

<section className="py-20" style={{background: '#FFFFFF'}}>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="fade-up rounded-3xl aspect-square flex items-center justify-center" style={{background: 'linear-gradient(135deg,rgba(99,102,241,0.1),rgba(6,182,212,0.1))', border: '1px solid #E5E7EB'}}>
<iconify-icon icon="solar:user-rounded-linear" style={{color: '#6366F1'}} width="120"></iconify-icon>
</div>
<div className="fade-up" style={{animationDelay: '0.2s'}}>
<h2 className="font-bold tracking-tight mb-5" style={{fontSize: 'clamp(2rem,4vw,2.75rem)'}}>
            Built By People Who Understand Real Estate Marketing
          </h2>
<p style={{fontSize: '1.125rem', color: '#6B7280', lineHeight: '1.7'}}>
            Real estate professionals need consistent content but don't have
            time to become video marketers.
          </p>
<p className="mt-4" style={{fontSize: '1.125rem', color: '#6B7280', lineHeight: '1.7'}}>
            ReeltyGenie was built to solve that challenge using AI-powered
            automation — so agents can focus on closing deals while their
            marketing runs itself.
          </p>
<div className="mt-6 flex items-center gap-3">
<div className="w-12 h-12 rounded-full" style={{background: 'linear-gradient(135deg,#6366F1,#8B5CF6)'}}></div>
<div>
<p className="font-semibold">Alex Rivera</p>
<p className="text-sm" style={{color: '#6B7280'}}>
                Founder &amp; CEO, ReeltyGenie
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20" id="faq" style={{background: '#F8FAFC'}}>
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-center font-bold tracking-tight mb-12 fade-up" style={{fontSize: 'clamp(2rem,4vw,3rem)'}}>
          Frequently Asked Questions
        </h2>
<div className="space-y-4" id="faq-list">
<div className="rounded-2xl fade-up" style={{background: '#FFFFFF', border: '1px solid #E5E7EB'}}>
<button className="faq-btn w-full flex items-center justify-between p-5 text-left">
<span className="font-semibold">How long does setup take?</span>
<iconify-icon className="faq-icon transition" icon="solar:alt-arrow-down-linear" style={{color: '#6366F1'}} width="20"></iconify-icon>
</button>
<div className="faq-content px-5">
<p className="pb-5" style={{color: '#6B7280'}}>
                Most agents are fully set up within 24 hours of creating their
                AI avatar.
              </p>
</div>
</div>
<div className="rounded-2xl fade-up" style={{background: '#FFFFFF', border: '1px solid #E5E7EB'}}>
<button className="faq-btn w-full flex items-center justify-between p-5 text-left">
<span className="font-semibold">Can I edit generated videos?</span>
<iconify-icon className="faq-icon transition" icon="solar:alt-arrow-down-linear" style={{color: '#6366F1'}} width="20"></iconify-icon>
</button>
<div className="faq-content px-5">
<p className="pb-5" style={{color: '#6B7280'}}>
                Yes, you can customize captions, scenes, and branding before
                publishing.
              </p>
</div>
</div>
<div className="rounded-2xl fade-up" style={{background: '#FFFFFF', border: '1px solid #E5E7EB'}}>
<button className="faq-btn w-full flex items-center justify-between p-5 text-left">
<span className="font-semibold">Do I need video experience?</span>
<iconify-icon className="faq-icon transition" icon="solar:alt-arrow-down-linear" style={{color: '#6366F1'}} width="20"></iconify-icon>
</button>
<div className="faq-content px-5">
<p className="pb-5" style={{color: '#6B7280'}}>
                None at all. The AI handles everything from script to final
                render.
              </p>
</div>
</div>
<div className="rounded-2xl fade-up" style={{background: '#FFFFFF', border: '1px solid #E5E7EB'}}>
<button className="faq-btn w-full flex items-center justify-between p-5 text-left">
<span className="font-semibold">
                Can I use this for luxury listings?
              </span>
<iconify-icon className="faq-icon transition" icon="solar:alt-arrow-down-linear" style={{color: '#6366F1'}} width="20"></iconify-icon>
</button>
<div className="faq-content px-5">
<p className="pb-5" style={{color: '#6B7280'}}>
                Absolutely — our cinematic templates are perfect for high-end
                properties.
              </p>
</div>
</div>
<div className="rounded-2xl fade-up" style={{background: '#FFFFFF', border: '1px solid #E5E7EB'}}>
<button className="faq-btn w-full flex items-center justify-between p-5 text-left">
<span className="font-semibold">
                Which social platforms are supported?
              </span>
<iconify-icon className="faq-icon transition" icon="solar:alt-arrow-down-linear" style={{color: '#6366F1'}} width="20"></iconify-icon>
</button>
<div className="faq-content px-5">
<p className="pb-5" style={{color: '#6B7280'}}>
                Instagram, TikTok, YouTube Shorts, Facebook, and LinkedIn.
              </p>
</div>
</div>
<div className="rounded-2xl fade-up" style={{background: '#FFFFFF', border: '1px solid #E5E7EB'}}>
<button className="faq-btn w-full flex items-center justify-between p-5 text-left">
<span className="font-semibold">
                How quickly can I start generating content?
              </span>
<iconify-icon className="faq-icon transition" icon="solar:alt-arrow-down-linear" style={{color: '#6366F1'}} width="20"></iconify-icon>
</button>
<div className="faq-content px-5">
<p className="pb-5" style={{color: '#6B7280'}}>
                Once your avatar is ready, you can generate your first reel in
                minutes.
              </p>
</div>
</div>
<div className="rounded-2xl fade-up" style={{background: '#FFFFFF', border: '1px solid #E5E7EB'}}>
<button className="faq-btn w-full flex items-center justify-between p-5 text-left">
<span className="font-semibold">Is there a free trial?</span>
<iconify-icon className="faq-icon transition" icon="solar:alt-arrow-down-linear" style={{color: '#6366F1'}} width="20"></iconify-icon>
</button>
<div className="faq-content px-5">
<p className="pb-5" style={{color: '#6B7280'}}>
                Yes — start free with no credit card required.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" style={{background: '#111827'}}>
<div className="max-w-4xl mx-auto px-6 text-center fade-up">
<h2 className="font-bold tracking-tight text-white" style={{fontSize: 'clamp(2rem,4vw,3rem)'}}>
          Your Next Listing Deserves Better Marketing
        </h2>
<p className="mt-5 max-w-2xl mx-auto" style={{fontSize: '1.25rem', color: '#9CA3AF', lineHeight: '1.7'}}>
          Create professional property videos in minutes, stay visible online,
          and generate more buyer and seller inquiries automatically.
        </p>
<div className="mt-8 flex flex-wrap justify-center gap-4">
<button className="px-7 py-3.5 rounded-xl text-white font-semibold transition" style={{fontSize: '1rem', background: 'linear-gradient(135deg,#6366F1 0%,#8B5CF6 100%)'}}>
            Start Free Trial
          </button>
<button className="px-7 py-3.5 rounded-xl font-semibold text-white transition" style={{fontSize: '1rem', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255,255,255,0.15)'}}>
            Schedule Demo
          </button>
</div>
<p className="mt-6 text-sm" style={{color: '#6B7280'}}>
          No credit card required • Setup in 24 hours • Cancel anytime
        </p>
</div>
</section>

<footer className="py-16" style={{background: '#F8FAFC', borderTop: '1px solid #E5E7EB'}}>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
<div>
<div className="text-xl font-bold tracking-tight mb-3">
            reelty
            <span style={{color: '#6366F1'}}>genie</span>
</div>
<p className="text-sm" style={{color: '#6B7280'}}>
            AI-powered video marketing built for ambitious real estate
            professionals.
          </p>
</div>
<div>
<p className="font-semibold text-sm mb-4">Product</p>
<ul className="space-y-3 text-sm" style={{color: '#6B7280'}}>
<li><a className="hover:text-gray-900" href="#">Features</a></li>
<li><a className="hover:text-gray-900" href="#">Pricing</a></li>
<li><a className="hover:text-gray-900" href="#">Showcase</a></li>
</ul>
</div>
<div>
<p className="font-semibold text-sm mb-4">Support</p>
<ul className="space-y-3 text-sm" style={{color: '#6B7280'}}>
<li><a className="hover:text-gray-900" href="#">Help Center</a></li>
<li><a className="hover:text-gray-900" href="#">Contact</a></li>
</ul>
</div>
<div>
<p className="font-semibold text-sm mb-4">Legal</p>
<ul className="space-y-3 text-sm" style={{color: '#6B7280'}}>
<li><a className="hover:text-gray-900" href="#">Privacy Policy</a></li>
<li>
<a className="hover:text-gray-900" href="#">Terms of Service</a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-6 text-sm" style={{borderTop: '1px solid #E5E7EB', color: '#6B7280'}}>
        © 2024 ReeltyGenie. All rights reserved.
      </div>
</footer>


    </>
  );
}
