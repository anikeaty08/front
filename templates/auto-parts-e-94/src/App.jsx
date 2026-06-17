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
      

<div className="bg-slate-900 text-slate-300 py-2.5 px-6">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-light tracking-wide">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
            پشتیبانی همکاران: ۰۲۱-۸۸۷۷۶۶۵۵
          </span>
<span className="hidden sm:inline-block w-px h-3 bg-slate-700"></span>
<span className="hidden sm:flex items-center gap-1.5">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
            ارسال روزانه به سراسر کشور
          </span>
</div>
<div className="flex items-center gap-3 text-orange-400">
<iconify-icon icon="solar:tag-price-linear" strokeWidth="1.5"></iconify-icon>
          تخفیف ویژه سفارشات عمده (بالای ۵۰ میلیون)
        </div>
</div>
</div>

<nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/80 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">

<div className="flex items-center gap-8">
<a className="text-xl tracking-tighter font-medium text-slate-900 flex items-center gap-2" href="#">
<iconify-icon className="text-orange-500 text-2xl" icon="mdi:engine"></iconify-icon>
            OEM YADAK
          </a>
<div className="hidden md:flex items-center gap-6 text-sm font-light text-slate-600">
<a className="text-slate-900 font-normal" href="#">صفحه اصلی</a>
<a className="hover:text-slate-900 transition-colors flex items-center gap-1 group" href="#">
              دسته‌بندی قطعات
              <iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<a className="hover:text-slate-900 transition-colors" href="#">
              برندهای اصلی (OEM)
            </a>
<a className="hover:text-slate-900 transition-colors" href="#">
              لیست قیمت همکار
            </a>
</div>
</div>

<div className="hidden lg:flex flex-1 max-w-md relative group">
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400 group-focus-within:text-orange-500 transition-colors">
<iconify-icon className="text-lg" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full bg-gray-100/80 border border-transparent text-slate-900 text-sm font-light rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:bg-white block pr-10 pl-3 py-2 transition-all placeholder-slate-400 outline-none" placeholder="جستجو شماره قطعه (VIN)، نام یا برند..." type="text"/>
</div>

<div className="flex items-center gap-4 text-slate-600">
<button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors text-sm font-light">
<iconify-icon className="text-xl" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden sm:inline">ورود همکاران</span>
</button>
<div className="w-px h-5 bg-gray-200 hidden sm:block"></div>
<button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
<iconify-icon className="text-xl" icon="solar:cart-large-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full border border-white"></span>
</button>
</div>
</div>
</nav>

<header className="bg-white border-b border-gray-200/60 pb-16 pt-12 md:pt-20 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
<div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50"></div>
<div className="absolute top-1/2 left-1/4 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-70"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 flex flex-col gap-6">
<div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-600 text-xs font-normal px-3 py-1.5 rounded-full w-fit">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
            پلتفرم تخصصی تامین قطعات موتور و گیربکس
          </div>
<h1 className="text-3xl md:text-4xl tracking-tight font-medium text-slate-900 leading-tight">
            تامین تخصصی
            <span className="text-orange-500">قطعات موتور و گیربکس</span>
<br className="hidden md:block"/>
            ویژه تراشکاری‌ها و تعمیرگاه‌ها
          </h1>
<p className="text-base font-light text-slate-500 max-w-xl leading-relaxed">
            دسترسی سریع به کامل‌ترین سبد قطعات تخصصی موتور و گیربکس اورجینال از
            برندهای معتبر با تضمین اصالت کالا، بهترین قیمت همکاری و ارسال فوری
            به سراسر کشور.
          </p>

<div className="mt-4 bg-white border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-2 rounded-2xl flex flex-col sm:flex-row gap-2 w-full max-w-2xl">
<div className="flex-1 relative">
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" icon="solar:card-search-linear"></iconify-icon>
<input className="w-full bg-transparent border-none text-slate-900 text-sm font-light focus:ring-0 block pr-12 pl-3 py-3.5 outline-none placeholder-slate-400" placeholder="شماره شاسی (VIN) یا کد فنی قطعه را وارد کنید..." type="text"/>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl text-sm font-normal transition-colors whitespace-nowrap">
              استعلام موجودی
            </button>
</div>

<div className="flex items-center gap-8 mt-6">
<div className="flex flex-col gap-1">
<span className="text-xl tracking-tight font-medium text-slate-900">
                ۲,۵۰۰+
              </span>
<span className="text-xs font-light text-slate-500">همکار فعال</span>
</div>
<div className="w-px h-8 bg-gray-200"></div>
<div className="flex flex-col gap-1">
<span className="text-xl tracking-tight font-medium text-slate-900">
                ۵۰K+
              </span>
<span className="text-xs font-light text-slate-500">
                قطعه در انبار
              </span>
</div>
<div className="w-px h-8 bg-gray-200"></div>
<div className="flex flex-col gap-1">
<span className="text-xl tracking-tight font-medium text-slate-900">
                ۱۰۰٪
              </span>
<span className="text-xs font-light text-slate-500">تضمین اصالت</span>
</div>
</div>
</div>

<div className="lg:col-span-5 w-full">
<div className="bg-white border border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-2xl p-6">
<h3 className="text-lg tracking-tight font-medium text-slate-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="mdi:car-side"></iconify-icon>
              جستجوی دقیق بر اساس خودرو
            </h3>
<div className="flex flex-col gap-4">

<div className="relative group">
<label className="block text-xs font-light text-slate-500 mb-1.5">
                  برند خودرو
                </label>
<div className="relative">
<select className="w-full appearance-none bg-gray-50 border border-gray-200 text-slate-700 text-sm font-light rounded-xl focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 block px-4 py-3 outline-none cursor-pointer transition-all">
<option disabled="" selected="" value="">
                      انتخاب برند (مثال: ایران خودرو)
                    </option>
<option>ایران خودرو</option>
<option>سایپا</option>
<option>پژو</option>
<option>رنو</option>
<option>هیوندای</option>
</select>
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="relative group">
<label className="block text-xs font-light text-slate-500 mb-1.5">
                  مدل خودرو
                </label>
<div className="relative">
<select className="w-full appearance-none bg-gray-50 border border-gray-200 text-slate-700 text-sm font-light rounded-xl focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 block px-4 py-3 outline-none cursor-pointer transition-all opacity-50 cursor-not-allowed">
<option disabled="" selected="" value="">
                      ابتدا برند را انتخاب کنید
                    </option>
</select>
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="relative group mb-2">
<label className="block text-xs font-light text-slate-500 mb-1.5">
                  سال / نوع موتور (اختیاری)
                </label>
<div className="relative">
<select className="w-full appearance-none bg-gray-50 border border-gray-200 text-slate-700 text-sm font-light rounded-xl focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 block px-4 py-3 outline-none cursor-pointer transition-all opacity-50 cursor-not-allowed">
<option disabled="" selected="" value="">همه موارد</option>
</select>
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-3 text-sm font-normal transition-colors flex justify-center items-center gap-2">
<iconify-icon icon="solar:filters-linear"></iconify-icon>
                نمایش قطعات سازگار
              </button>
</div>
</div>
</div>
</div>
</header>
<main className="flex-1 max-w-7xl mx-auto w-full px-6 py-16 flex flex-col gap-20">

<section>
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl tracking-tight font-medium text-slate-900 mb-1">
              دسته‌بندی‌های پرمصرف
            </h2>
<p className="text-sm font-light text-slate-500">
              دسترسی سریع به قطعات تخصصی موتور و گیربکس
            </p>
</div>
<a className="hidden sm:flex items-center gap-1 text-sm font-light text-orange-500 hover:text-orange-600 transition-colors" href="#">
            مشاهده همه
            <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

<a className="group bg-white border border-gray-200/80 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:border-slate-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="mdi:engine"></iconify-icon>
</div>
<span className="text-sm font-normal text-slate-800">
              سرسیلندر و بلوک
            </span>
</a>

<a className="group bg-white border border-gray-200/80 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:border-slate-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="mdi:piston"></iconify-icon>
</div>
<span className="text-sm font-normal text-slate-800">
              پیستون و رینگ
            </span>
</a>

<a className="group bg-white border border-gray-200/80 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:border-slate-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="mdi:car-shift-pattern"></iconify-icon>
</div>
<span className="text-sm font-normal text-slate-800">
              یاتاقان و میل‌لنگ
            </span>
</a>

<a className="group bg-white border border-gray-200/80 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:border-slate-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:layers-linear"></iconify-icon>
</div>
<span className="text-sm font-normal text-slate-800">
              واشرجات موتوری
            </span>
</a>

<a className="group bg-white border border-gray-200/80 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:border-slate-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="mdi:car-cog"></iconify-icon>
</div>
<span className="text-sm font-normal text-slate-800">
              قطعات گیربکس دستی
            </span>
</a>

<a className="group bg-white border border-gray-200/80 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:border-slate-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="mdi:car-turbocharger"></iconify-icon>
</div>
<span className="text-sm font-normal text-slate-800">
              قطعات گیربکس اتومات
            </span>
</a>
</div>
</section>

<section>
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl tracking-tight font-medium text-slate-900 mb-1">
              پیشنهادات ویژه همکاران
            </h2>
<p className="text-sm font-light text-slate-500">
              پرفروش‌ترین قطعات با بالاترین حاشیه سود
            </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white border border-gray-200/80 rounded-2xl p-4 flex flex-col group relative hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-shadow">
<div className="absolute top-6 left-6 z-10 bg-green-50 text-green-600 text-xs font-normal px-2 py-1 rounded-md">
              موجود: +۱۰۰
            </div>
<div className="w-full aspect-square bg-gray-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden relative">
<img alt="رینگ پیستون پژو" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1635774855536-9728f2610245?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-100/30 to-transparent"></div>
</div>
<div className="flex flex-col flex-1">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-normal px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  NE
                </span>
<span className="text-[10px] font-mono text-slate-400">
                  OEM: 16100-342
                </span>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1 leading-snug line-clamp-2">
                رینگ پیستون پژو ۲۰۶ تیپ ۵ (موتور TU5)
              </h3>
<p className="text-xs font-light text-slate-500 mb-4">
                سایز استاندارد، دست کامل
              </p>
<div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] font-light text-slate-400 line-through">
                    ۲,۲۰۰,۰۰۰ تومان
                  </span>
<span className="text-sm font-medium text-slate-900">
                    ۱,۹۵۰,۰۰۰
                    <span className="text-xs font-light">تومان</span>
</span>
</div>
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white border border-gray-200/80 rounded-2xl p-4 flex flex-col group relative hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-shadow">
<div className="absolute top-6 left-6 z-10 bg-green-50 text-green-600 text-xs font-normal px-2 py-1 rounded-md">
              موجود: ۴۵
            </div>
<div className="w-full aspect-square bg-gray-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden relative">
<img alt="سوپاپ موتور پژو" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-100/30 to-transparent"></div>
</div>
<div className="flex flex-col flex-1">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-normal px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  ساوه
                </span>
<span className="text-[10px] font-mono text-slate-400">
                  SKU: FR7DC+
                </span>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1 leading-snug line-clamp-2">
                مجموعه سوپاپ دود و هوا پژو ۴۰۵ (موتور XU7)
              </h3>
<p className="text-xs font-light text-slate-500 mb-4">
                ساوه اصلی (۸ عدد)
              </p>
<div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] font-light text-slate-400 line-through">
                    ۱,۱۰۰,۰۰۰ تومان
                  </span>
<span className="text-sm font-medium text-slate-900">
                    ۹۸۰,۰۰۰
                    <span className="text-xs font-light">تومان</span>
</span>
</div>
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white border border-gray-200/80 rounded-2xl p-4 flex flex-col group relative hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-shadow">
<div className="absolute top-6 left-6 z-10 bg-yellow-50 text-yellow-600 text-xs font-normal px-2 py-1 rounded-md">
              موجودی محدود
            </div>
<div className="w-full aspect-square bg-gray-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden relative">
<img alt="کیت کلاچ پژو" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1599256871679-6e26e2eb9e2a?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-100/30 to-transparent"></div>
</div>
<div className="flex flex-col flex-1">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-normal px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  والئو (Valeo)
                </span>
<span className="text-[10px] font-mono text-slate-400">
                  OEM: 826315
                </span>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1 leading-snug line-clamp-2">
                کیت کلاچ (دیسک و صفحه) پژو ۲۰۶ تیپ ۲
              </h3>
<p className="text-xs font-light text-slate-500 mb-4">
                مناسب: پژو ۲۰۶ موتور TU3
              </p>
<div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] font-light text-slate-400">
                    تماس بگیرید
                  </span>
<span className="text-sm font-medium text-slate-900">
                    ۳,۴۵۰,۰۰۰
                    <span className="text-xs font-light">تومان</span>
</span>
</div>
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white border border-gray-200/80 rounded-2xl p-4 flex flex-col group relative hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-shadow">
<div className="absolute top-6 left-6 z-10 bg-green-50 text-green-600 text-xs font-normal px-2 py-1 rounded-md">
              موجود: +۲۰۰
            </div>
<div className="w-full aspect-square bg-gray-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden relative">
<img alt="واشر سرسیلندر" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1605152276897-4f618f831968?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-100/30 to-transparent"></div>
</div>
<div className="flex flex-col flex-1">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-normal px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  اورجینال
                </span>
<span className="text-[10px] font-mono text-slate-400">
                  SKU: SF-4412
                </span>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1 leading-snug line-clamp-2">
                واشر سرسیلندر اورجینال پژو، سمند، پارس
              </h3>
<p className="text-xs font-light text-slate-500 mb-4">
                ضخامت استاندارد (موتور XU7)
              </p>
<div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] font-light text-slate-400 line-through">
                    ۴۵۰,۰۰۰ تومان
                  </span>
<span className="text-sm font-medium text-slate-900">
                    ۳۸۰,۰۰۰
                    <span className="text-xs font-light">تومان</span>
</span>
</div>
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-slate-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-12">

<div className="absolute -right-24 -bottom-24 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
<div className="flex-1 relative z-10">
<h2 className="text-3xl tracking-tight font-medium mb-4">
            شبکه هوشمند تامین قطعات
          </h2>
<p className="text-slate-400 font-light text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            با ادغام شبکه‌ی تامین‌کنندگان دست اول و سیستم لجستیک پیشرفته، موجودی
            و قیمت قطعات در پلتفرم OEM Yadak به صورت لحظه‌ای بروزرسانی می‌شود.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 backdrop-blur-sm">
<iconify-icon className="text-orange-400 text-2xl mb-3" icon="solar:chart-line-up-linear"></iconify-icon>
<h4 className="text-base font-medium mb-1">تضمین پایین‌ترین قیمت</h4>
<p className="text-xs font-light text-slate-400">
                حذف واسطه‌ها و خرید مستقیم از تامین‌کننده اصلی
              </p>
</div>
<div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 backdrop-blur-sm">
<iconify-icon className="text-orange-400 text-2xl mb-3" icon="solar:box-minimalistic-linear"></iconify-icon>
<h4 className="text-base font-medium mb-1">یکپارچگی موجودی</h4>
<p className="text-xs font-light text-slate-400">
                اتصال مستقیم به انبار مرکزی برندهای معتبر
              </p>
</div>
</div>
</div>
<div className="w-full md:w-1/3 relative z-10 flex flex-col gap-4">

<div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 flex items-center gap-4 mr-8 opacity-90">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 shrink-0">
<iconify-icon icon="solar:server-square-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-light text-slate-400 mb-0.5">
                سیستم یکپارچه
              </div>
<div className="text-sm font-medium">بروزرسانی زنده API</div>
</div>
</div>
<div className="bg-orange-500 border border-orange-400 rounded-2xl p-4 flex items-center gap-4 relative z-20 shadow-[0_0_30px_rgba(249,115,22,0.3)]">
<div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="mdi:engine"></iconify-icon>
</div>
<div>
<div className="text-xs font-light text-orange-200 mb-0.5">
                هسته پردازش
              </div>
<div className="text-sm font-medium">پلتفرم OEM Yadak</div>
</div>
</div>
<div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 flex items-center gap-4 mr-8 opacity-90">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 shrink-0">
<iconify-icon icon="solar:routing-2-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-light text-slate-400 mb-0.5">
                لجستیک هوشمند
              </div>
<div className="text-sm font-medium">مسیریابی ارسال بارهای حجیم</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-200 mt-auto pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="text-xl tracking-tighter font-medium text-slate-900 flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-orange-500 text-2xl" icon="mdi:engine"></iconify-icon>
            OEM YADAK
          </a>
<p className="text-sm font-light text-slate-500 leading-relaxed max-w-sm mb-6">
            بزرگترین پلتفرم B2B تامین تخصصی قطعات موتور و گیربکس در ایران. مرجع
            تخصصی استعلام، مقایسه و خرید عمده لوازم یدکی موتوری برای تراشکاری‌ها
            و تعمیرگاه‌های سراسر کشور.
          </p>
<div className="flex items-center gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</a>
<a className="hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</a>
<a className="hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">خدمات مشتریان</h4>
<ul className="flex flex-col gap-3 text-sm font-light text-slate-500">
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                شرایط بازگشت کالا
              </a>
</li>
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                پیگیری سفارشات
              </a>
</li>
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                تضمین اصالت قطعات
              </a>
</li>
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                سوالات متداول
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">
            همکاران و تامین‌کنندگان
          </h4>
<ul className="flex flex-col gap-3 text-sm font-light text-slate-500">
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                ثبت‌نام تعمیرگاه‌ها
              </a>
</li>
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                درخواست نمایندگی فروش
              </a>
</li>
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                پنل تامین‌کنندگان قطعات
              </a>
</li>
<li>
<a className="hover:text-orange-500 transition-colors" href="#">
                لیست قیمت روزانه (API)
              </a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-slate-400">
<p>کلیه حقوق مادی و معنوی برای پلتفرم OEM Yadak محفوظ است. © ۲۰۲۴</p>
<div className="flex gap-4">
<a className="hover:text-slate-600 transition-colors" href="#">
            حریم خصوصی
          </a>
<a className="hover:text-slate-600 transition-colors" href="#">
            شرایط استفاده
          </a>
</div>
</div>
</footer>

    </>
  );
}
