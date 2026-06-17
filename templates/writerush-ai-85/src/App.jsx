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



        // Initialize Lucide Icons with proper stroke width
        lucide.createIcons({
            strokeWidth: 1.5
        });

        // Current state tracker
        let isProState = false;

        // On load, trigger initial progress bar animation (0 width)
        setTimeout(() => {
            updateProgressBars();
        }, 300);

        function updateProgressBars() {
            document.querySelectorAll('.progress-fill').forEach(bar => {
                bar.style.width = isProState ? bar.dataset.pro : bar.dataset.free;
            });
        }

        function togglePlanState() {
            isProState = !isProState;
            const btn = document.getElementById('state-toggle-btn');
            btn.textContent = isProState ? "Switch to Free Plan" : "Switch to Pro Plan";

            // 1. Sidebar
            document.getElementById('sidebar-plan-text').textContent = isProState ? "Solo plan" : "Free plan";

            // 2. Notice Bar
            const noticeBar = document.getElementById('notice-bar');
            const noticeIcon = document.getElementById('notice-icon');
            const noticeText = document.getElementById('notice-text');
            
            if (isProState) {
                noticeBar.className = "w-full rounded-lg px-4 py-3.5 flex items-start sm:items-center gap-3 bg-[#F0EEFE] border border-[#6B5CE7]/20 text-[#6B5CE7] transition-colors duration-300";
                noticeIcon.setAttribute('data-lucide', 'info');
                noticeText.textContent = "Solo plan active. Your next billing date is April 29, 2027.";
            } else {
                noticeBar.className = "w-full rounded-lg px-4 py-3.5 flex items-start sm:items-center gap-3 bg-amber-50 border border-amber-200 text-amber-800 transition-colors duration-300";
                noticeIcon.setAttribute('data-lucide', 'alert-circle');
                noticeText.textContent = "You are on the Free plan. Download the plugin and generate your license to get started.";
            }

            // 3. Video Steps
            const vStep2 = document.getElementById('video-step-2');
            const vStep2Bg = document.getElementById('video-step-2-icon-bg');
            const vStep2Num = document.getElementById('video-step-2-num');
            const vStep2Check = document.getElementById('video-step-2-check');
            const vStep2Text = document.getElementById('video-step-2-text');

            const vStep3 = document.getElementById('video-step-3');
            const vStep3Bg = document.getElementById('video-step-3-icon-bg');
            const vStep3Num = document.getElementById('video-step-3-num');
            const vStep3Check = document.getElementById('video-step-3-check');
            const vStep3Text = document.getElementById('video-step-3-text');

            if (isProState) {
                vStep2.className = "flex items-center gap-2 bg-[#F0EEFE] border border-[#E0DCFC] rounded-full pl-1.5 pr-3 py-1.5 transition-colors";
                vStep2Bg.className = "w-5 h-5 rounded-full bg-[#6B5CE7] flex items-center justify-center shrink-0 transition-colors";
                vStep2Num.classList.add('hidden');
                vStep2Check.classList.remove('hidden');
                vStep2Text.className = "text-sm font-medium text-[#6B5CE7] transition-colors";

                vStep3.className = "flex items-center gap-2 bg-[#F0EEFE] border border-[#E0DCFC] rounded-full pl-1.5 pr-3 py-1.5 transition-colors";
                vStep3Bg.className = "w-5 h-5 rounded-full bg-[#6B5CE7] flex items-center justify-center shrink-0 transition-colors";
                vStep3Num.classList.add('hidden');
                vStep3Check.classList.remove('hidden');
                vStep3Text.className = "text-sm font-medium text-[#6B5CE7] transition-colors";
            } else {
                vStep2.className = "flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full pl-1.5 pr-3 py-1.5 transition-colors";
                vStep2Bg.className = "w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0 transition-colors";
                vStep2Num.classList.remove('hidden');
                vStep2Check.classList.add('hidden');
                vStep2Text.className = "text-sm font-medium text-slate-500 transition-colors";

                vStep3.className = "flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full pl-1.5 pr-3 py-1.5 transition-colors";
                vStep3Bg.className = "w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0 transition-colors";
                vStep3Num.classList.remove('hidden');
                vStep3Check.classList.add('hidden');
                vStep3Text.className = "text-sm font-medium text-slate-500 transition-colors";
            }

            // 4. Plan Card
            const planBadge = document.getElementById('plan-badge');
            const planPrice = document.getElementById('plan-price');
            const planBtn = document.getElementById('plan-btn');
            
            if (isProState) {
                planBadge.textContent = "Solo plan";
                planBadge.className = "px-3 py-1 rounded-full text-sm font-medium bg-[#F0EEFE] text-[#6B5CE7] transition-colors";
                planPrice.textContent = "$205";
                document.getElementById('plan-detail-free').classList.add('hidden');
                document.getElementById('plan-detail-pro-1').classList.remove('hidden');
                document.getElementById('plan-detail-pro-1').classList.add('flex');
                document.getElementById('plan-detail-pro-2').classList.remove('hidden');
                document.getElementById('plan-detail-pro-2').classList.add('flex');
                
                planBtn.textContent = "Cancel Subscription";
                planBtn.className = "w-full py-2.5 px-4 rounded-lg text-base font-medium bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors text-center shadow-sm";
            } else {
                planBadge.textContent = "Free plan";
                planBadge.className = "px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-600 transition-colors";
                planPrice.textContent = "$0";
                document.getElementById('plan-detail-free').classList.remove('hidden');
                document.getElementById('plan-detail-free').classList.add('flex');
                document.getElementById('plan-detail-pro-1').classList.add('hidden');
                document.getElementById('plan-detail-pro-1').classList.remove('flex');
                document.getElementById('plan-detail-pro-2').classList.add('hidden');
                document.getElementById('plan-detail-pro-2').classList.remove('flex');

                planBtn.textContent = "Upgrade Plan";
                planBtn.className = "w-full py-2.5 px-4 rounded-lg text-base font-medium bg-[#6B5CE7] hover:bg-[#5a4dd1] text-white transition-colors text-center";
            }

            // 5. Checklist Setup
            const cIcon2 = document.getElementById('check-icon-2');
            const cCheck2 = cIcon2.querySelector('i');
            const cText2 = document.getElementById('check-text-2');
            
            const cIcon3 = document.getElementById('check-icon-3');
            const cCheck3 = cIcon3.querySelector('i');
            const cText3 = document.getElementById('check-text-3');

            if (isProState) {
                cIcon2.className = "w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 transition-colors border-0";
                cCheck2.classList.remove('hidden');
                cText2.className = "text-base font-medium text-slate-700 transition-colors";

                cIcon3.className = "w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 transition-colors border-0";
                cCheck3.classList.remove('hidden');
                cText3.className = "text-base font-medium text-slate-700 transition-colors";
            } else {
                cIcon2.className = "w-5 h-5 rounded-full border-2 border-slate-200 flex items-center justify-center shrink-0 transition-colors";
                cCheck2.classList.add('hidden');
                cText2.className = "text-base font-medium text-slate-500 transition-colors";

                cIcon3.className = "w-5 h-5 rounded-full border-2 border-slate-200 flex items-center justify-center shrink-0 transition-colors";
                cCheck3.classList.add('hidden');
                cText3.className = "text-base font-medium text-slate-500 transition-colors";
            }

            // 6. Stats Area
            document.getElementById('stats-link').classList.toggle('hidden', !isProState);
            
            // Values updating
            document.getElementById('stat-val-blog').textContent = isProState ? "6 / 15" : "0 / 3";
            document.getElementById('stat-val-ai').textContent = isProState ? "25 / 100" : "0 / 25";
            document.getElementById('stat-val-image').textContent = isProState ? "2 / 12" : "0 / 2";
            document.getElementById('stat-val-post').textContent = isProState ? "1 / 10" : "0 / 5";
            document.getElementById('stat-val-keyword').textContent = isProState ? "8 / 10" : "0 / 10";

            // Unlock cards
            const brandContent = document.getElementById('stat-content-brand');
            const brandOverlay = document.getElementById('stat-overlay-brand');
            const brandVal = document.getElementById('stat-val-brand');
            
            const campContent = document.getElementById('stat-content-campaign');
            const campOverlay = document.getElementById('stat-overlay-campaign');
            const campVal = document.getElementById('stat-val-campaign');

            if (isProState) {
                brandContent.classList.remove('opacity-40');
                brandOverlay.classList.add('hidden');
                brandVal.textContent = "3 / 5";

                campContent.classList.remove('opacity-40');
                campOverlay.classList.add('hidden');
                campVal.textContent = "1 / 3";
            } else {
                brandContent.classList.add('opacity-40');
                brandOverlay.classList.remove('hidden');
                brandVal.textContent = "Locked";

                campContent.classList.add('opacity-40');
                campOverlay.classList.remove('hidden');
                campVal.textContent = "Locked";
            }

            // Re-render icons incase of dynamic replacement
            lucide.createIcons({ strokeWidth: 1.5 });
            
            // Trigger bar animation again
            updateProgressBars();
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
      

<div className="fixed bottom-6 right-6 z-50 bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
<span className="text-sm font-medium text-slate-600">View as:</span>
<button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-medium rounded-lg transition-colors" id="state-toggle-btn" onclick="togglePlanState()">
            Switch to Pro Plan
        </button>
</div>

<div className="flex min-h-screen">

<aside className="fixed top-0 left-0 h-screen w-[220px] bg-white border-r border-slate-200 flex flex-col justify-between z-20 hidden md:flex">
<div className="">

<div className="h-20 flex items-center px-6">
<div className="flex items-center gap-2 text-slate-900">
<i className="w-6 h-6 text-[#6B5CE7]" data-lucide="pen-tool"></i>
<span className="font-['Sora',sans-serif] text-xl font-semibold tracking-tight">WriteRush</span>
</div>
</div>

<nav className="flex flex-col mt-2">
<a className="flex items-center gap-3 px-3 py-2.5 mx-3 my-0.5 rounded-lg text-base font-medium bg-[#F0EEFE] text-[#6B5CE7]" href="#">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i> Dashboard
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 mx-3 my-0.5 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 transition-colors group" href="#">
<i className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" data-lucide="key"></i> License
                    </a>
<a className="flex items-center gap-3 hover:bg-slate-50 transition-colors group text-base font-medium text-slate-600 rounded-lg mt-0.5 mr-3 mb-0.5 ml-3 pt-2.5 pr-3 pb-2.5 pl-3" href="/download">
<i className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" data-lucide="download"></i> Downloads
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 mx-3 my-0.5 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 transition-colors group" href="#">
<i className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" data-lucide="credit-card"></i> Purchase
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 mx-3 my-0.5 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 transition-colors group" href="#">
<i className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" data-lucide="history"></i> Order History
                    </a>
<div className="my-3 border-t border-slate-100 mx-6"></div>
<a className="flex items-center gap-3 px-3 py-2.5 mx-3 my-0.5 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 transition-colors group" href="#">
<i className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" data-lucide="life-buoy"></i> Support
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 mx-3 my-0.5 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 transition-colors group" href="#">
<i className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" data-lucide="settings"></i> Settings
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 mx-3 my-0.5 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 transition-colors group" href="#">
<i className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" data-lucide="log-out"></i> Logout
                    </a>
</nav>
</div>

<div className="p-4 border-t border-slate-200">
<div className="flex items-center gap-3 rounded-lg hover:bg-slate-50 p-2 cursor-pointer transition-colors group">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-medium shrink-0">
                        ST
                    </div>
<div className="flex-grow overflow-hidden">
<div className="text-sm font-medium text-slate-900 truncate flex items-center gap-1">
                            Sadia Test <i className="w-3 h-3 text-amber-500" data-lucide="sparkles"></i>
</div>
<div className="text-xs text-slate-500 truncate" id="sidebar-plan-text">Free plan</div>
</div>
<i className="w-4 h-4 text-slate-400 group-hover:translate-x-[2px] transition-transform" data-lucide="chevron-right"></i>
</div>
</div>
</aside>

<main className="flex-1 md:ml-[220px] p-6 lg:p-10 max-w-6xl mx-auto w-full flex flex-col gap-8">

<div className="inline-flex items-center gap-2.5 bg-white border border-slate-200 shadow-sm rounded-full px-4 py-2 w-fit">
<span className="w-2.5 h-2.5 rounded-full bg-[#0073AA]"></span>
<span className="text-sm font-medium text-slate-700">WordPress plugin — install on your site to start</span>
</div>

<div className="flex flex-col gap-2">
<h1 className="text-3xl font-semibold font-['Sora',sans-serif] text-slate-900 tracking-tight">Hi, Sadia Test</h1>
<p className="text-base text-slate-500 max-w-2xl">WriteRush is a WordPress plugin. Get your plugin, manage your plan, and track usage here.</p>
</div>

<div className="w-full rounded-lg px-4 py-3.5 flex items-start sm:items-center gap-3 bg-amber-50 border border-amber-200 text-amber-800 transition-colors duration-300" id="notice-bar">
<i className="w-5 h-5 shrink-0 mt-0.5 sm:mt-0 text-amber-600" data-lucide="alert-circle" id="notice-icon"></i>
<span className="text-base font-medium" id="notice-text">You are on the Free plan. Download the plugin and generate your license to get started.</span>
</div>

<div className="bg-white border border-slate-200 rounded-lg flex flex-col md:flex-row overflow-hidden">

<div className="w-full md:w-[240px] h-48 md:h-auto bg-slate-900 relative shrink-0 flex items-center justify-center group cursor-pointer">
<img alt="WP dashboard blur" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity" src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="w-14 h-14 bg-[#6B5CE7] rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg">
<i className="w-6 h-6 text-white ml-1" data-lucide="play"></i>
</div>
<div className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded">3 min setup guide</div>
</div>

<div className="p-6 lg:p-8 flex flex-col justify-center flex-grow">
<h2 className="text-xl font-semibold font-['Sora',sans-serif] tracking-tight text-slate-900 mb-2">Get started: Install WriteRush on WordPress</h2>
<p className="text-base text-slate-500 mb-6 max-w-2xl">Watch how to download the plugin, activate your license, and publish your first AI blog post in under 3 minutes.</p>

<div className="flex flex-wrap items-center gap-2 sm:gap-3">

<div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full pl-1.5 pr-3 py-1.5">
<div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 text-white" data-lucide="check"></i>
</div>
<span className="text-sm font-medium text-emerald-700">Sign up</span>
</div>
<i className="w-4 h-4 text-slate-300" data-lucide="arrow-right"></i>

<div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full pl-1.5 pr-3 py-1.5 transition-colors" id="video-step-2">
<div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0 transition-colors" id="video-step-2-icon-bg">
<span className="text-xs font-semibold text-slate-500" id="video-step-2-num">2</span>
<i className="w-3.5 h-3.5 text-white hidden" data-lucide="check" id="video-step-2-check"></i>
</div>
<span className="text-sm font-medium text-slate-500 transition-colors" id="video-step-2-text">Download plugin</span>
</div>
<i className="w-4 h-4 text-slate-300" data-lucide="arrow-right"></i>

<div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full pl-1.5 pr-3 py-1.5 transition-colors" id="video-step-3">
<div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0 transition-colors" id="video-step-3-icon-bg">
<span className="text-xs font-semibold text-slate-500" id="video-step-3-num">3</span>
<i className="w-3.5 h-3.5 text-white hidden" data-lucide="check" id="video-step-3-check"></i>
</div>
<span className="text-sm font-medium text-slate-500 transition-colors" id="video-step-3-text">Activate license</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col h-full">
<div className="flex items-start justify-between mb-8">
<div className="px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-600 transition-colors" id="plan-badge">
                            Free plan
                        </div>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold font-['Sora',sans-serif] tracking-tight text-slate-900" id="plan-price">$0</span>
<span className="text-base text-slate-500 font-medium">USD</span>
</div>
</div>
<div className="flex-grow space-y-4 mb-8">

<div className="flex items-center gap-3 text-base text-slate-600" id="plan-detail-free">
<i className="w-5 h-5 text-slate-400" data-lucide="infinity"></i> Validity: Lifetime
                        </div>
<div className="hidden items-center gap-3 text-base text-slate-600" id="plan-detail-pro-1">
<i className="w-5 h-5 text-slate-400" data-lucide="calendar"></i> Next Billing Date: April 29, 2027
                        </div>
<div className="hidden items-center gap-3 text-base text-slate-600" id="plan-detail-pro-2">
<i className="w-5 h-5 text-slate-400" data-lucide="repeat"></i> Times Billed: 1
                        </div>
</div>
<button className="w-full py-2.5 px-4 rounded-lg text-base font-medium bg-[#6B5CE7] hover:bg-[#5a4dd1] text-white transition-colors text-center" id="plan-btn">
                        Upgrade Plan
                    </button>
</div>

<div className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col h-full">
<h3 className="text-lg font-semibold font-['Sora',sans-serif] text-slate-900 tracking-tight mb-5">WordPress setup checklist</h3>
<div className="flex flex-col">

<div className="flex items-center justify-between py-3.5 border-b border-slate-100">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
<i className="w-3 h-3 text-emerald-600" data-lucide="check"></i>
</div>
<span className="text-base font-medium text-slate-700">Account created</span>
</div>
</div>

<div className="flex items-center justify-between py-3.5 border-b border-slate-100">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-slate-200 flex items-center justify-center shrink-0 transition-colors" id="check-icon-2">
<i className="w-3 h-3 text-emerald-600 hidden" data-lucide="check"></i>
</div>
<span className="text-base font-medium text-slate-500 transition-colors" id="check-text-2">Download plugin</span>
</div>
<a className="text-sm font-medium text-[#6B5CE7] flex items-center gap-1 hover:underline group" href="#">
                                Downloads <i className="w-3.5 h-3.5 group-hover:translate-x-[2px] transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="flex items-center justify-between py-3.5">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-slate-200 flex items-center justify-center shrink-0 transition-colors" id="check-icon-3">
<i className="w-3 h-3 text-emerald-600 hidden" data-lucide="check"></i>
</div>
<span className="text-base font-medium text-slate-500 transition-colors" id="check-text-3">Generate license key</span>
</div>
<a className="text-sm font-medium text-[#6B5CE7] flex items-center gap-1 hover:underline group" href="#">
                                License <i className="w-3.5 h-3.5 group-hover:translate-x-[2px] transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-end justify-between mb-5 mt-2">
<h2 className="text-xl font-semibold font-['Sora',sans-serif] tracking-tight text-slate-900">Usage statistics</h2>
<a className="text-sm font-medium text-[#6B5CE7] flex items-center gap-1 hover:underline group hidden" href="#" id="stats-link">
                        Full statistics <i className="w-3.5 h-3.5 group-hover:translate-x-[2px] transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

<div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col gap-4 shadow-sm hover:shadow transition-shadow">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-purple-600" data-lucide="file-text"></i>
</div>
<span className="text-sm font-medium text-slate-500">Blog</span>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-end text-sm font-semibold text-slate-700" id="stat-val-blog">0 / 3</div>
<div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-[#6B5CE7] rounded-full progress-fill w-0" data-free="0%" data-pro="40%" id="stat-bar-blog" style={{width: '0%'}}></div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col gap-4 shadow-sm hover:shadow transition-shadow">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-blue-600" data-lucide="sparkles"></i>
</div>
<span className="text-sm font-medium text-slate-500">AI Credit</span>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-end text-sm font-semibold text-slate-700" id="stat-val-ai">0 / 25</div>
<div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-[#6B5CE7] rounded-full progress-fill w-0" data-free="0%" data-pro="25%" id="stat-bar-ai" style={{width: '0%'}}></div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col gap-4 shadow-sm hover:shadow transition-shadow">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-emerald-600" data-lucide="image"></i>
</div>
<span className="text-sm font-medium text-slate-500">Image</span>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-end text-sm font-semibold text-slate-700" id="stat-val-image">0 / 2</div>
<div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-[#6B5CE7] rounded-full progress-fill w-0" data-free="0%" data-pro="15%" id="stat-bar-image" style={{width: '0%'}}></div>
</div>
</div>
</div>

<div className="relative group bg-white border border-slate-200 rounded-lg p-5 shadow-sm overflow-hidden flex flex-col">

<div className="flex flex-col gap-4 opacity-40 transition-opacity duration-300" id="stat-content-brand">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-orange-600" data-lucide="mic"></i>
</div>
<span className="text-sm font-medium text-slate-500">Brand Voice</span>
</div>
<div className="flex flex-col gap-2 mt-auto">
<div className="flex justify-end text-sm font-semibold text-slate-700" id="stat-val-brand">Locked</div>
<div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-[#6B5CE7] rounded-full progress-fill w-0" data-free="0%" data-pro="60%" id="stat-bar-brand" style={{width: '0%'}}></div>
</div>
</div>
</div>

<div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-[1px] flex flex-col items-center justify-center transition-opacity" id="stat-overlay-brand">
<div className="w-10 h-10 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center mb-2 group-hover:scale-[1.1] transition-transform duration-200">
<i className="w-4 h-4 text-slate-500" data-lucide="lock"></i>
</div>
<span className="text-sm font-medium text-slate-800 mb-1">Pro feature</span>
<a className="text-sm font-medium text-[#6B5CE7] hover:underline flex items-center gap-1 group/link" href="#">
                                Upgrade <i className="w-3 h-3 group-hover/link:translate-x-[2px] transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col gap-4 shadow-sm hover:shadow transition-shadow">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-pink-600" data-lucide="twitter"></i>
</div>
<span className="text-sm font-medium text-slate-500">Social Media Post</span>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-end text-sm font-semibold text-slate-700" id="stat-val-post">0 / 5</div>
<div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-[#6B5CE7] rounded-full progress-fill w-0" data-free="0%" data-pro="10%" id="stat-bar-post" style={{width: '0%'}}></div>
</div>
</div>
</div>

<div className="relative group bg-white border border-slate-200 rounded-lg p-5 shadow-sm overflow-hidden flex flex-col">

<div className="flex flex-col gap-4 opacity-40 transition-opacity duration-300" id="stat-content-campaign">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-amber-600" data-lucide="megaphone"></i>
</div>
<span className="text-sm font-medium text-slate-500">Social Campaign</span>
</div>
<div className="flex flex-col gap-2 mt-auto">
<div className="flex justify-end text-sm font-semibold text-slate-700" id="stat-val-campaign">Locked</div>
<div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-[#6B5CE7] rounded-full progress-fill w-0" data-free="0%" data-pro="33%" id="stat-bar-campaign" style={{width: '0%'}}></div>
</div>
</div>
</div>

<div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-[1px] flex flex-col items-center justify-center transition-opacity" id="stat-overlay-campaign">
<div className="w-10 h-10 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center mb-2 group-hover:scale-[1.1] transition-transform duration-200">
<i className="w-4 h-4 text-slate-500" data-lucide="lock"></i>
</div>
<span className="text-sm font-medium text-slate-800 mb-1">Pro feature</span>
<a className="text-sm font-medium text-[#6B5CE7] hover:underline flex items-center gap-1 group/link" href="#">
                                Upgrade <i className="w-3 h-3 group-hover/link:translate-x-[2px] transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col gap-4 shadow-sm hover:shadow transition-shadow">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-teal-600" data-lucide="search"></i>
</div>
<span className="text-sm font-medium text-slate-500 truncate">Keyword Research</span>
</div>
<div className="flex flex-col gap-2 mt-auto">
<div className="flex justify-end text-sm font-semibold text-slate-700" id="stat-val-keyword">0 / 10</div>
<div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-[#6B5CE7] rounded-full progress-fill w-0" data-free="0%" data-pro="80%" id="stat-bar-keyword" style={{width: '0%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="h-12"></div>
</main>
</div>


    </>
  );
}
