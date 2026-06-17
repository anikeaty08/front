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



      // Initialize Lucide icons with custom stroke width
      lucide.createIcons({
          strokeWidth: 1.5
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
      

<aside className="w-64 bg-white border-l border-slate-200 flex flex-col flex-shrink-0 z-50 fixed inset-y-0 right-0 transform translate-x-full transition-transform duration-300 md:relative md:translate-x-0" id="mobile-sidebar">

<div className="p-6 border-b border-slate-100 flex flex-col items-center relative">
<button className="md:hidden absolute top-4 left-4 text-slate-400 hover:text-slate-600" onclick="document.getElementById('mobile-sidebar').classList.add('translate-x-full')">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div className="relative w-16 h-16 rounded-full overflow-hidden border border-slate-200 mb-3">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=11"/>
</div>
<h2 className="font-medium text-lg tracking-tight mb-1 text-slate-900">
          عباسعلی ملاحسینی
        </h2>
<p className="text-sm text-slate-500 mb-3 text-left w-full" dir="ltr">
          ۰۹۳۷۱۲۳۴۵۶۷
        </p>
<div className="flex items-center gap-1.5 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full text-sm font-medium">
<i className="w-4 h-4" data-lucide="gem"></i>
<span>۲۵۶ روز</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-teal-700 bg-teal-50 font-medium transition-colors" href="#">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
<span>صفحه اصلی</span>
</a>
<div className="flex flex-col">
<button className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors w-full">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-400" data-lucide="briefcase"></i>
<span className="font-medium">عملیات تجاری</span>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</button>
<div className="flex flex-col gap-1 pr-11 pl-2 pb-2 pt-1">
<a className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-sm transition-colors" href="#">
<i className="w-4 h-4 text-slate-400" data-lucide="file-text"></i>
              فاکتورهای فروش
            </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-sm transition-colors" href="#">
<i className="w-4 h-4 text-slate-400" data-lucide="file-box"></i>
              فاکتورهای خرید
            </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-sm transition-colors" href="#">
<i className="w-4 h-4 text-slate-400" data-lucide="credit-card"></i>
              دریافتی و پرداختی ها
            </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-sm transition-colors" href="#">
<i className="w-4 h-4 text-slate-400" data-lucide="file-signature"></i>
              اسناد دستی
            </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-sm transition-colors" href="#">
<i className="w-4 h-4 text-slate-400" data-lucide="package"></i>
              ورود و خروج کالا
            </a>
</div>
</div>
<button className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors w-full">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-400" data-lucide="folder"></i>
<span className="font-medium">اطلاعات پایه</span>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-left"></i>
</button>
<button className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors w-full">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-400" data-lucide="more-horizontal"></i>
<span className="font-medium">بیشتر</span>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-left"></i>
</button>
<button className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors w-full">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-400" data-lucide="pie-chart"></i>
<span className="font-medium">گزارش ها</span>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-left"></i>
</button>
<button className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors w-full">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-400" data-lucide="settings"></i>
<span className="font-medium">سیستم</span>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-left"></i>
</button>
</nav>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#f8fafc] relative">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0 z-10">

<div className="flex items-center gap-4">
<button className="text-slate-500 hover:text-slate-700 md:hidden" onclick="document.getElementById('mobile-sidebar').classList.toggle('translate-x-full')">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
<div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-semibold text-sm">
              ۰۱
            </div>
<span className="font-medium text-slate-700">
              سارینا (صاحب کسب و کار)
            </span>
<i className="w-4 h-4 text-slate-400 ml-1" data-lucide="chevron-down"></i>
</div>
</div>

<div className="flex-1 max-w-xl mx-8 relative">
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<i className="w-5 h-5 text-slate-400" data-lucide="search"></i>
</div>
<input className="w-full bg-slate-50 border border-slate-200 rounded-full py-2 pr-10 pl-4 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-shadow" placeholder="جستجو در فاکتورها، اشخاص و ..." type="text"/>
</div>

<div className="flex items-center gap-5 text-slate-500">
<button className="hover:text-indigo-600 transition-colors relative">
<i className="w-5 h-5" data-lucide="headphones"></i>
</button>
<button className="hover:text-indigo-600 transition-colors relative">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full transform translate-x-1/2 -translate-y-1/2 border border-white"></span>
</button>
<button className="hover:text-indigo-600 transition-colors">
<i className="w-5 h-5" data-lucide="help-circle"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">

<div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col justify-center relative overflow-hidden group hover:border-slate-200 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
<span className="text-sm text-slate-500">خرید این ماه</span>
</div>
<div className="flex justify-between items-end">
<span className="text-sm text-slate-400">خرید امسال</span>
<div className="text-left" dir="ltr">
<div className="text-xl font-semibold tracking-tight text-slate-800">
                  ۹,۵۵۰,۰۰۰
                </div>
<div className="text-sm text-slate-500 font-medium">
                  ۱۲۵,۰۰۰,۰۰۰
                </div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col justify-center relative overflow-hidden group hover:border-slate-200 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500">
<i className="w-4 h-4" data-lucide="arrow-down-right"></i>
</div>
<span className="text-sm text-slate-500">فروش این ماه</span>
</div>
<div className="flex justify-between items-end">
<span className="text-sm text-slate-400">فروش امسال</span>
<div className="text-left" dir="ltr">
<div className="text-xl font-semibold tracking-tight text-slate-800">
                  ۵۰۰,۰۰۰
                </div>
<div className="text-sm text-slate-500 font-medium">
                  ۱۲۵,۰۰۰,۰۰۰
                </div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col justify-center relative overflow-hidden group hover:border-slate-200 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
<i className="w-4 h-4" data-lucide="credit-card"></i>
</div>
<span className="text-sm text-slate-500">چک‌های در جریان</span>
</div>
<div className="flex justify-between items-end">
<span className="text-sm text-slate-400">موجودی حساب</span>
<div className="text-left" dir="ltr">
<div className="text-xl font-semibold tracking-tight text-slate-800">
                  ۲,۵۰۰,۰۰۰
                </div>
<div className="text-sm text-slate-500 font-medium">
                  ۱۱۰,۰۰۰,۰۰۰
                </div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col justify-center relative overflow-hidden group hover:border-slate-200 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-500">
<i className="w-4 h-4" data-lucide="users"></i>
</div>
<span className="text-sm text-slate-500">بدهکاری</span>
</div>
<div className="flex justify-between items-end">
<span className="text-sm text-slate-400">بستانکاری</span>
<div className="text-left" dir="ltr">
<div className="text-xl font-semibold tracking-tight text-slate-800">
                  ۱۰۲,۵۰۰,۰۰۰
                </div>
<div className="text-sm text-slate-500 font-medium">۰</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col justify-center relative overflow-hidden group hover:border-slate-200 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
<i className="w-4 h-4" data-lucide="calculator"></i>
</div>
<span className="text-sm text-slate-500">ارزش خرید انبار</span>
</div>
<div className="flex justify-between items-end">
<span className="text-sm text-slate-400">ارزش فروش انبار</span>
<div className="text-left" dir="ltr">
<div className="text-xl font-semibold tracking-tight text-slate-800">
                  ۲,۵۰۰,۰۰۰
                </div>
<div className="text-sm text-slate-500 font-medium">
                  ۱۲۵,۰۰۰,۰۰۰
                </div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

<div className="xl:col-span-7 flex flex-col gap-6">

<div className="rounded-2xl bg-gradient-to-l from-indigo-500 to-blue-600 p-4 flex items-center justify-between text-white shadow-sm overflow-hidden relative">
<div className="absolute inset-0 bg-white/5 opacity-50 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
<h3 className="text-lg font-medium tracking-tight relative z-10">
                پنل پیامک موج مجددا در دسترس قرار گرفت.
              </h3>
<div className="relative z-10 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">

<i className="w-6 h-6 text-white opacity-90" data-lucide="mail-check"></i>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex-1 flex flex-col">
<div className="p-5 border-b border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-slate-400" data-lucide="clock"></i>
<h3 className="text-lg font-medium tracking-tight text-slate-800">
                    آخرین فعالیت ها
                  </h3>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-1.5 text-sm font-medium text-indigo-700 bg-indigo-50 rounded-lg flex items-center gap-1 hover:bg-indigo-100 transition-colors border border-indigo-100">
                    همه
                    <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<button className="px-4 py-1.5 text-sm font-medium text-slate-600 bg-slate-50 rounded-lg flex items-center gap-1 hover:bg-slate-100 transition-colors border border-slate-200">
                    بیشتر
                    <i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
</div>
</div>

<div className="grid grid-cols-5 px-5 py-3 border-b border-slate-50 text-sm font-medium text-slate-500 bg-slate-50/50">
<div>تاریخ</div>
<div className="flex items-center gap-1">
                  شخص فعال
                  <i className="w-3 h-3" data-lucide="arrow-up"></i>
</div>
<div>دسته</div>
<div>طرف حساب</div>
<div className="text-left">مبلغ سند</div>
</div>

<div className="flex flex-col">

<div className="grid grid-cols-5 px-5 py-4 border-b border-slate-50 items-center hover:bg-slate-50/50 transition-colors">
<div className="text-sm text-slate-600">
<div className="text-right" dir="ltr">۱۴۰۲/۰۲/۲۲</div>
<div className="text-xs text-slate-400" dir="ltr">۱۰:۳۰</div>
</div>
<div className="flex items-center gap-2">
<img alt="" className="w-7 h-7 rounded-full object-cover" src="https://i.pravatar.cc/150?img=33"/>
<span className="text-sm font-medium text-slate-700">
                      حسن کمالی
                    </span>
</div>
<div>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-cyan-50 text-cyan-700 border border-cyan-100">
                      فاکتور فروش
                    </span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
<i className="w-3 h-3 text-slate-500" data-lucide="user"></i>
</div>
<span className="text-sm text-slate-600">مرضیه شاکر</span>
</div>
<div className="text-left font-semibold text-red-500 text-sm" dir="ltr">
                    -۶۵۰,۰۰۰,۰۰۰
                  </div>
</div>

<div className="grid grid-cols-5 px-5 py-4 border-b border-slate-50 items-center hover:bg-slate-50/50 transition-colors">
<div className="text-sm text-slate-600">
<div className="text-right" dir="ltr">۱۴۰۲/۰۲/۲۲</div>
</div>
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center">
<i className="w-4 h-4 text-slate-500" data-lucide="user"></i>
</div>
<span className="text-sm font-medium text-slate-700">
                      مرضیه شاکر
                    </span>
</div>
<div>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-teal-50 text-teal-700 border border-teal-100">
                      فاکتور خرید
                    </span>
</div>
<div className="flex items-center gap-2">
<img alt="" className="w-6 h-6 rounded-full object-cover" src="https://i.pravatar.cc/150?img=33"/>
<span className="text-sm text-slate-600">حسن کمالی</span>
</div>
<div className="text-left font-semibold text-slate-800 text-sm" dir="ltr">
                    ۶۵۰,۰۰۰,۰۰۰
                  </div>
</div>

<div className="grid grid-cols-5 px-5 py-4 border-b border-slate-50 items-center hover:bg-slate-50/50 transition-colors">
<div className="text-sm text-slate-600">
<div className="text-right" dir="ltr">۱۴۰۲/۰۲/۲۲</div>
</div>
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center">
<i className="w-4 h-4 text-slate-500" data-lucide="user"></i>
</div>
<span className="text-sm font-medium text-slate-700">
                      مرضیه شاکر
                    </span>
</div>
<div>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">
                      پیش ف. خرید
                    </span>
</div>
<div className="flex items-center gap-2">
<span className="text-sm text-slate-500">بدون طرف حساب</span>
</div>
<div className="text-left font-semibold text-slate-800 text-sm" dir="ltr">
                    ۶۰,۰۰۰,۰۰۰
                  </div>
</div>

<div className="grid grid-cols-5 px-5 py-4 border-b border-slate-50 items-center hover:bg-slate-50/50 transition-colors">
<div className="text-sm text-slate-600">
<div className="text-right" dir="ltr">۱۴۰۲/۰۲/۲۲</div>
</div>
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center">
<i className="w-4 h-4 text-slate-500" data-lucide="user"></i>
</div>
<span className="text-sm font-medium text-slate-700">
                      حسن عباسی
                    </span>
</div>
<div>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-100">
                      پرداختی نقد
                    </span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
<i className="w-3 h-3 text-slate-500" data-lucide="user"></i>
</div>
<span className="text-sm text-slate-500 leading-tight">
                      بدون طرف
                      <br/>
                      حساب
                    </span>
</div>
<div className="text-left font-semibold text-red-500 text-sm" dir="ltr">
                    -۱۰,۰۰۰,۰۰۰
                  </div>
</div>

<div className="grid grid-cols-5 px-5 py-4 border-b border-slate-50 items-center hover:bg-slate-50/50 transition-colors">
<div className="text-sm text-slate-600">
<div className="text-right" dir="ltr">۱۴۰۲/۰۲/۲۲</div>
</div>
<div className="flex items-center gap-2">
<img alt="" className="w-7 h-7 rounded-full object-cover" src="https://i.pravatar.cc/150?img=12"/>
<span className="text-sm font-medium text-slate-700 leading-tight">
                      مجتبی
                      <br/>
                      جعفری
                    </span>
</div>
<div>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
                      پیش ف. فروش
                    </span>
</div>
<div className="flex items-center gap-2">
<img alt="" className="w-6 h-6 rounded-full object-cover" src="https://i.pravatar.cc/150?img=12"/>
<span className="text-sm text-slate-600">مجتبی جعفری</span>
</div>
<div className="text-left font-semibold text-slate-800 text-sm" dir="ltr">
                    ۶۵۰,۰۰۰,۰۰۰
                  </div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-5 flex flex-col gap-6">

<div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex-shrink-0 h-[220px] flex flex-col justify-end relative">

<div className="w-full h-full relative">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 50">
<defs>
<lineargradient id="chart-gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#6366f1" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#6366f1" stop-opacity="0"></stop>
</lineargradient>
</defs>
<line stroke="#e2e8f0" strokeWidth="0.5" x1="0" x2="100" y1="50" y2="50"></line>
<line stroke="#cbd5e1" strokeWidth="1" x1="0" x2="0" y1="0" y2="50"></line>
<path d="M0 40 L15 48 L30 20 L45 45 L60 30 L75 42 L85 22 L95 32 L100 25 L100 50 L0 50 Z" fill="url(#chart-gradient)"></path>
<path d="M0 40 L15 48 L30 20 L45 45 L60 30 L75 42 L85 22 L95 32 L100 25" fill="none" stroke="#6366f1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<circle cx="0" cy="40" fill="white" r="2" stroke="#6366f1" strokeWidth="1.5"></circle>
<circle cx="15" cy="48" fill="white" r="2" stroke="#6366f1" strokeWidth="1.5"></circle>
<circle cx="30" cy="20" fill="white" r="2" stroke="#6366f1" strokeWidth="1.5"></circle>
<circle cx="45" cy="45" fill="white" r="2" stroke="#6366f1" strokeWidth="1.5"></circle>
<circle cx="60" cy="30" fill="white" r="2" stroke="#6366f1" strokeWidth="1.5"></circle>
<circle cx="75" cy="42" fill="white" r="2" stroke="#6366f1" strokeWidth="1.5"></circle>
<circle cx="85" cy="22" fill="white" r="2" stroke="#6366f1" strokeWidth="1.5"></circle>
<circle cx="95" cy="32" fill="white" r="2" stroke="#6366f1" strokeWidth="1.5"></circle>
</svg>

<div className="flex justify-between mt-2 text-xs text-teal-600 font-medium" dir="ltr">
<span>۱</span>
<span>۲</span>
<span>۳</span>
<span>۴</span>
<span>۵</span>
<span>۶</span>
<span>۷</span>
<span>۸</span>
<span>۹</span>
<span>۱۰</span>
<span>۱۱</span>
<span>۱۲</span>
<span>۱۳</span>
<span>۱۴</span>
<span>۱۵</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex justify-around items-center">
<button className="flex flex-col items-center gap-3 group">
<div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors border border-slate-100">
<i className="w-6 h-6 text-slate-500 group-hover:text-indigo-600" data-lucide="plus"></i>
</div>
<span className="text-sm font-medium text-slate-600">
                  میانبر جدید
                </span>
</button>
<button className="flex flex-col items-center gap-3 group">
<div className="w-14 h-14 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 transition-colors border border-cyan-100">
<i className="w-6 h-6" data-lucide="file-text"></i>
</div>
<span className="text-sm font-medium text-slate-600">
                  فاکتورهای فروش
                </span>
</button>
<button className="flex flex-col items-center gap-3 group">
<div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 transition-colors border border-indigo-100">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<span className="text-sm font-medium text-slate-600">
                  طرف‌حساب‌ها
                </span>
</button>
<button className="flex flex-col items-center gap-3 group">
<div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors border border-slate-100">
<i className="w-6 h-6 text-slate-500 group-hover:text-indigo-600" data-lucide="plus"></i>
</div>
<span className="text-sm font-medium text-slate-600">
                  میانبر جدید
                </span>
</button>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex-1 relative overflow-hidden">
<div className="flex items-center gap-2 mb-6">
<i className="w-5 h-5 text-teal-600" data-lucide="lightbulb"></i>
<h3 className="text-lg font-medium tracking-tight text-slate-800">
                  پیشنهاد موج
                </h3>
</div>
<div className="flex flex-col gap-5 relative z-10 pl-20">
<div className="flex items-start justify-end gap-3 text-right">
<p className="text-base text-slate-700">
                    بازگشت قرض علی شاکر به مبلغ
                    <span className="inline-block" dir="ltr">۵۰۰,۰۰۰</span>
</p>
<div className="mt-1">
<i className="w-5 h-5 text-slate-900" data-lucide="user"></i>
</div>
</div>
<div className="flex items-start justify-end gap-3 text-right">
<p className="text-base text-slate-700">
                    پاس کردن چک حسین کرمی به مبلغ
                    <span className="inline-block" dir="ltr">۴,۵۰۰,۰۰۰</span>
</p>
<div className="mt-1">
<i className="w-5 h-5 text-red-600" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="flex items-start justify-end gap-3 text-right">
<p className="text-base text-slate-700">
                    پرداخت قسط ۳ از وام مهربانی بابت خرید خانه
                  </p>
<div className="mt-1">
<i className="w-5 h-5 text-red-600" data-lucide="building-2"></i>
</div>
</div>
</div>

<div className="absolute bottom-4 left-4 flex items-end">
<div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-2xl rounded-bl-none text-sm font-medium mb-8 ml-2 relative z-10 border border-teal-200">
                  بیا موجی نشی... :)
                </div>
<img alt="Avatar" className="w-24 h-24 rounded-xl object-cover shadow-sm border border-slate-200 opacity-90 relative z-10" src="https://i.pravatar.cc/150?img=32"/>
</div>
</div>
</div>
</div>

<div className="flex justify-between items-center mt-8 text-xs text-slate-400 pb-4">
<div>امروز: ۱۴۰۲/۱۲/۲۳ نسخه: ۵.۶.۰ بازار</div>
<div className="flex gap-4">
<span>واحد ارز: ریال</span>
<span>سال مالی: ۱۴۰۴</span>
</div>
</div>
</div>

<button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-1/2 md:translate-x-1/2 xl:right-auto xl:left-8 xl:translate-x-0 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-6 py-3 rounded-2xl shadow-sm border border-indigo-200 flex items-center gap-2 font-medium transition-all hover:shadow-md z-30">
        سند جدید
        <i className="w-5 h-5" data-lucide="plus"></i>
</button>
</main>


    </>
  );
}
