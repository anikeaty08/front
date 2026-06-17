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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
      

<aside className="hidden lg:flex flex-col w-72 bg-white border-l border-slate-100 h-full shadow-[0_0_40px_-10px_rgba(0,0,0,0.05)] z-20">
<div className="p-6 flex items-center gap-3">
<div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tight text-slate-900">موج پلاس</span>
</div>
<div className="px-6 mb-2">
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-200 group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:document-add-linear" width="20"></iconify-icon>
<span className="font-bold text-sm">سند جدید</span>
</button>
</div>
<nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
<p className="px-4 text-xs font-medium text-slate-400 mb-2 mt-2">منوی اصلی</p>
<a className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-xl transition-all font-medium" href="#">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="22"></iconify-icon>
                داشبورد
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-all group" href="#">
<iconify-icon className="group-hover:text-blue-600 transition-colors" icon="solar:wallet-money-linear" strokeWidth="1.5" width="22"></iconify-icon>
                حساب‌ها
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-all group" href="#">
<iconify-icon className="group-hover:text-blue-600 transition-colors" icon="solar:document-text-linear" strokeWidth="1.5" width="22"></iconify-icon>
                فاکتورها
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-all group" href="#">
<iconify-icon className="group-hover:text-blue-600 transition-colors" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="22"></iconify-icon>
                مشتریان
            </a>
<p className="px-4 text-xs font-medium text-slate-400 mb-2 mt-6">گزارشات</p>
<a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-all group" href="#">
<iconify-icon className="group-hover:text-blue-600 transition-colors" icon="solar:chart-square-linear" strokeWidth="1.5" width="22"></iconify-icon>
                ترازنامه
            </a>
</nav>
<div className="p-4 border-t border-slate-100">
<button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-slate-50 transition-colors text-right">
<div className="w-9 h-9 bg-gradient-to-tr from-slate-200 to-slate-100 rounded-full flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:user-rounded-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900">مدیر مالی</span>
<span className="text-xs text-slate-400">طرح حرفه‌ای</span>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 lg:h-20 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-100 lg:border-none">
<div className="flex items-center gap-3 lg:hidden">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:graph-up-linear" width="18"></iconify-icon>
</div>
<span className="text-lg font-bold text-slate-900">موج پلاس</span>
</div>
<div className="hidden lg:flex flex-col">
<h1 className="text-lg font-semibold text-slate-900">داشبورد مدیریتی</h1>
<p className="text-xs text-slate-500">خوش آمدید، امروز ۲۰ آبان ۱۴۰۳</p>
</div>
<div className="flex items-center gap-3">

<button className="lg:hidden h-9 px-3 bg-blue-600 text-white rounded-lg flex items-center gap-2 text-xs font-bold shadow-md shadow-blue-200">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                    سند جدید
                </button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<button className="lg:hidden w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 lg:p-8 pb-28 lg:pb-8">
<div className="max-w-6xl mx-auto space-y-6">

<div>
<h3 className="text-sm font-bold text-slate-800 mb-3 px-1">دسترسی سریع</h3>
<div className="grid grid-cols-3 md:grid-cols-6 gap-3">

<button className="bg-blue-50 border border-blue-100 rounded-xl p-3 flex flex-col items-center justify-center gap-2 hover:bg-blue-100 hover:border-blue-200 hover:shadow-md transition-all group h-24">
<div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
<iconify-icon icon="solar:document-add-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-bold text-blue-700">سند جدید</span>
</button>
<button className="bg-white border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-center gap-2 hover:border-blue-300 hover:shadow-md transition-all group h-24">
<div className="w-9 h-9 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bill-list-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-600">فاکتور فروش</span>
</button>
<button className="bg-white border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-center gap-2 hover:border-blue-300 hover:shadow-md transition-all group h-24">
<div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-600">فاکتور خرید</span>
</button>
<button className="bg-white border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-center gap-2 hover:border-blue-300 hover:shadow-md transition-all group h-24">
<div className="w-9 h-9 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-plus-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-600">مشتری جدید</span>
</button>
<button className="bg-white border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-center gap-2 hover:border-blue-300 hover:shadow-md transition-all group h-24">
<div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wad-of-money-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-600">ثبت چک</span>
</button>
<button className="bg-white border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-center gap-2 hover:border-blue-300 hover:shadow-md transition-all group h-24">
<div className="w-9 h-9 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:printer-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-600">گزارش‌گیری</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">

<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-10px_rgba(59,130,246,0.1)] flex flex-col justify-between h-40 relative overflow-hidden group">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-50 rounded-full opacity-50 transition-transform group-hover:scale-110"></div>
<div className="flex justify-between items-start relative z-10">
<div>
<p className="text-sm font-medium text-slate-500">فروش امروز</p>
<h2 className="text-3xl font-bold text-slate-900 mt-1 tracking-tight">۱۲,۵۰۰,۰۰۰ <span className="text-sm font-normal text-slate-400">تومان</span></h2>
</div>
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:tag-price-linear" width="18"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded-lg">
<iconify-icon icon="solar:trending-up-linear"></iconify-icon>
<span>۱۵٪ افزایش</span>
</div>
</div>

<div className="bg-slate-900 p-5 rounded-2xl shadow-[0_10px_30px_-10px_rgba(15,23,42,0.3)] flex flex-col justify-between h-40 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900"></div>
<div className="flex justify-between items-start relative z-10">
<div>
<p className="text-sm font-medium text-slate-400">مانده قابل برداشت</p>
<h2 className="text-3xl font-bold mt-1 tracking-tight">۸۵,۲۴۰,۰۰۰ <span className="text-sm font-normal text-slate-500">تومان</span></h2>
</div>
<div className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center border border-slate-700">
<iconify-icon icon="solar:card-linear" width="18"></iconify-icon>
</div>
</div>
<div className="relative z-10 flex gap-3 mt-auto">
<button className="flex-1 bg-white/10 hover:bg-white/20 text-xs py-2 rounded-lg transition-colors backdrop-blur-sm">انتقال</button>
<button className="flex-1 bg-blue-600 hover:bg-blue-500 text-xs py-2 rounded-lg transition-colors shadow-lg shadow-blue-900/20">افزایش موجودی</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
<div className="flex items-center justify-between mb-6">
<h3 className="font-bold text-slate-900 flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:chart-2-linear"></iconify-icon>
                                درآمد هفتگی
                            </h3>
<select className="bg-slate-50 border border-slate-200 text-xs rounded-lg px-2 py-1 outline-none focus:border-blue-500 text-slate-600">
<option>هفته جاری</option>
<option>ماه گذشته</option>
</select>
</div>

<div className="flex items-end justify-between h-48 gap-2 md:gap-4 px-2">

<div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
<div className="w-full bg-slate-100 rounded-t-lg relative h-full flex items-end overflow-hidden">
<div className="w-full bg-blue-500/80 group-hover:bg-blue-600 transition-all rounded-t-lg h-[45%] relative"></div>
</div>
<span className="text-xs text-slate-400">ش</span>
</div>

<div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
<div className="w-full bg-slate-100 rounded-t-lg relative h-full flex items-end overflow-hidden">
<div className="w-full bg-blue-500/80 group-hover:bg-blue-600 transition-all rounded-t-lg h-[65%]"></div>
</div>
<span className="text-xs text-slate-400">ی</span>
</div>

<div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
<div className="w-full bg-slate-100 rounded-t-lg relative h-full flex items-end overflow-hidden">
<div className="w-full bg-blue-500/80 group-hover:bg-blue-600 transition-all rounded-t-lg h-[30%]"></div>
</div>
<span className="text-xs text-slate-400">د</span>
</div>

<div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
<div className="w-full bg-slate-100 rounded-t-lg relative h-full flex items-end overflow-hidden">
<div className="w-full bg-blue-600 shadow-lg shadow-blue-200 group-hover:bg-blue-700 transition-all rounded-t-lg h-[85%]"></div>
</div>
<span className="text-xs font-bold text-blue-600">س</span>
</div>

<div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
<div className="w-full bg-slate-100 rounded-t-lg relative h-full flex items-end overflow-hidden">
<div className="w-full bg-blue-500/80 group-hover:bg-blue-600 transition-all rounded-t-lg h-[50%]"></div>
</div>
<span className="text-xs text-slate-400">چ</span>
</div>

<div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
<div className="w-full bg-slate-100 rounded-t-lg relative h-full flex items-end overflow-hidden">
<div className="w-full bg-blue-500/80 group-hover:bg-blue-600 transition-all rounded-t-lg h-[60%]"></div>
</div>
<span className="text-xs text-slate-400">پ</span>
</div>

<div className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
<div className="w-full bg-slate-100 rounded-t-lg relative h-full flex items-end overflow-hidden">
<div className="w-full bg-slate-200 group-hover:bg-slate-300 transition-all rounded-t-lg h-[20%]"></div>
</div>
<span className="text-xs text-slate-400">ج</span>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 flex flex-col">
<h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:pie-chart-2-linear"></iconify-icon>
                            هزینه‌ها
                        </h3>
<div className="flex-1 flex flex-col items-center justify-center relative my-2">

<div className="w-32 h-32 rounded-full relative" style={{background: 'conic-gradient(#3b82f6 0% 45%, #f59e0b 45% 70%, #ef4444 70% 85%, #e2e8f0 85% 100%)'}}>
<div className="absolute inset-4 bg-white rounded-full flex items-center justify-center flex-col">
<span className="text-xs text-slate-400">کل هزینه</span>
<span className="text-sm font-bold text-slate-800">۴.۲ م</span>
</div>
</div>
</div>
<div className="space-y-3 mt-4">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span className="text-slate-600">حقوق و دستمزد</span>
</div>
<span className="font-bold text-slate-800">۴۵٪</span>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
<span className="text-slate-600">اجاره محل</span>
</div>
<span className="font-bold text-slate-800">۲۵٪</span>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
<span className="text-slate-600">قبوض و انرژی</span>
</div>
<span className="font-bold text-slate-800">۱۵٪</span>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl shadow-sm">
<div className="p-5 border-b border-slate-100 flex justify-between items-center">
<h3 className="font-bold text-slate-900 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:history-linear"></iconify-icon>
                            تراکنش‌های اخیر
                        </h3>
<button className="text-xs font-medium text-blue-600 hover:text-blue-700">مشاهده همه</button>
</div>
<div className="divide-y divide-slate-50">

<div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-white group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:bag-3-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">فروشگاه زنجیره‌ای افق</p>
<p className="text-xs text-slate-400 mt-0.5">فاکتور فروش #۱۲۰۵</p>
</div>
</div>
<div className="text-left">
<p className="text-sm font-bold text-slate-900">+ ۴,۲۵۰,۰۰۰</p>
<p className="text-xs text-slate-400 mt-0.5">۱۴:۳۰ امروز</p>
</div>
</div>

<div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-white group-hover:border-red-200 group-hover:text-red-500 transition-colors">
<iconify-icon icon="solar:bill-check-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">پرداخت قبض برق</p>
<p className="text-xs text-slate-400 mt-0.5">هزینه‌های جاری</p>
</div>
</div>
<div className="text-left">
<p className="text-sm font-bold text-slate-900">- ۳۴۰,۰۰۰</p>
<p className="text-xs text-slate-400 mt-0.5">۱۰:۱۵ امروز</p>
</div>
</div>

<div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-white group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:user-hand-up-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">علی محمدی</p>
<p className="text-xs text-slate-400 mt-0.5">واریز بدهی قبلی</p>
</div>
</div>
<div className="text-left">
<p className="text-sm font-bold text-emerald-600">+ ۱,۵۰۰,۰۰۰</p>
<p className="text-xs text-slate-400 mt-0.5">دیروز</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<nav className="lg:hidden fixed bottom-0 left-0 w-full glass-nav z-30 pb-safe">
<div className="flex items-center justify-between px-6 h-[70px] relative">
<a className="flex flex-col items-center gap-1 text-blue-600 w-12" href="#">
<iconify-icon icon="solar:home-smile-bold" width="24"></iconify-icon>
<span className="text-[10px] font-medium">خانه</span>
</a>
<a className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 w-12 transition-colors" href="#">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">گزارش</span>
</a>

<div className="relative -top-6">
<button className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30 transform transition-transform active:scale-95 border-4 border-white">
<iconify-icon icon="solar:add-linear" strokeWidth="2" width="32"></iconify-icon>
</button>
</div>
<a className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 w-12 transition-colors" href="#">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">کیف پول</span>
</a>
<a className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 w-12 transition-colors" href="#">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">تنظیمات</span>
</a>
</div>
</nav>

    </>
  );
}
