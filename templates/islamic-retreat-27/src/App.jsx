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
      
<div className="flex h-screen w-full">

<aside className="w-[260px] flex-shrink-0 border-l border-slate-800 bg-[#0f172a] hidden md:flex flex-col justify-between py-6 relative">

<div className="absolute top-0 right-0 w-full h-40 bg-teal-500/5 blur-3xl pointer-events-none"></div>
<div className="px-4 space-y-6 z-10">

<div className="px-2 flex items-center gap-3 text-slate-100 mb-8">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white shadow-[0_0_20px_rgba(20,184,166,0.2)]">
<span className="iconify" data-icon="lucide:landmark" data-strokeWidth="2" data-width="20"></span>
</div>
<div className="flex flex-col">
<span className="font-bold tracking-tight text-base text-teal-50">سامانه اعتکاف</span>
<span className="text-[10px] text-teal-500/80">مدیریت متمرکز مساجد</span>
</div>
</div>

<div className="space-y-1">
<p className="px-2 text-[10px] text-slate-500 font-medium uppercase tracking-wider mb-2">منوی اصلی</p>
<a className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20 transition-all" href="#">
<span className="iconify" data-icon="lucide:layout-dashboard" data-width="18"></span>
<span className="font-medium">داشبورد</span>
</a>
<a className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 transition-all group" href="#">
<span className="iconify group-hover:text-teal-400 transition-colors" data-icon="lucide:users" data-width="18"></span>
<span>معتکفین</span>
</a>
<a className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 transition-all group" href="#">
<span className="iconify group-hover:text-teal-400 transition-colors" data-icon="lucide:tent" data-width="18"></span>
<span>مدیریت مساجد</span>
</a>
<a className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 transition-all group" href="#">
<span className="iconify group-hover:text-teal-400 transition-colors" data-icon="lucide:receipt" data-width="18"></span>
<span>تراکنش‌های مالی</span>
</a>
<a className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 transition-all group" href="#">
<span className="iconify group-hover:text-teal-400 transition-colors" data-icon="lucide:scroll-text" data-width="18"></span>
<span>برنامه‌های فرهنگی</span>
</a>
</div>

<div className="space-y-3 mt-8 px-2">
<div className="flex items-center justify-between text-xs text-slate-400 mb-1">
<span>ظرفیت کل مساجد</span>
<span className="text-teal-400">۸۵٪</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-l from-teal-400 to-emerald-500 w-[85%] rounded-full shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
</div>
<p className="text-[10px] text-slate-500 leading-relaxed">ثبت‌نام تا ۳ روز دیگر ادامه دارد.</p>
</div>
</div>

<div className="px-4 pb-4">
<div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-teal-500/30 transition-all cursor-pointer">
<div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-xs text-slate-300 font-medium border border-slate-600 ring-2 ring-slate-800">ح</div>
<div className="flex flex-col overflow-hidden">
<span className="text-xs font-medium text-slate-200 truncate">حاج آقا حسینی</span>
<span className="text-[10px] text-slate-500 truncate">مدیر اجرایی</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto relative bg-pattern">

<header className="sticky top-0 z-30 border-b border-slate-700/50 glass px-8 h-20 flex items-center justify-between">
<div className="flex items-center gap-4">
<button className="md:hidden p-2 text-slate-400 hover:text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
<div>
<h1 className="text-lg font-semibold text-slate-100 tracking-tight">داشبورد وضعیت</h1>
<p className="text-xs text-slate-500 mt-0.5">آمار لحظه‌ای ایام اعتکاف ۱۴۰۳</p>
</div>
</div>
<div className="flex items-center gap-4">

<div className="relative hidden sm:block group">
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<span className="iconify text-slate-500 group-focus-within:text-teal-400 transition-colors" data-icon="lucide:search" data-width="16"></span>
</div>
<input className="block w-72 py-2.5 pr-10 pl-4 text-xs text-slate-200 border border-slate-700 rounded-xl bg-slate-800/50 focus:ring-1 focus:ring-teal-500/50 focus:border-teal-500/50 focus:bg-slate-800 transition-all placeholder-slate-600 outline-none" placeholder="جستجوی معتکف، کد ملی..." type="text"/>
</div>
<div className="h-8 w-px bg-slate-700 mx-1"></div>
<button className="relative p-2 text-slate-400 hover:text-teal-400 transition-colors">
<span className="iconify" data-icon="lucide:bell" data-width="20"></span>
<span className="absolute top-2 left-2 w-2 h-2 bg-amber-500 rounded-full border-2 border-[#0f172a]"></span>
</button>
<button className="bg-teal-600 hover:bg-teal-500 text-white text-xs font-medium px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 shadow-[0_4px_20px_rgba(13,148,136,0.2)]">
<span className="iconify" data-icon="lucide:user-plus" data-width="16"></span>
<span>ثبت نام جدید</span>
</button>
</div>
</header>
<div className="p-8 max-w-[1600px] mx-auto space-y-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="p-6 rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm hover:border-teal-500/30 transition-all group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-transparent opacity-50"></div>
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-teal-500/10 rounded-xl border border-teal-500/20 text-teal-400 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<span className="flex items-center gap-1 text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/10">
                                +۱۲ نفر امروز
                            </span>
</div>
<div className="space-y-1">
<h3 className="text-slate-500 text-xs font-medium">تعداد کل معتکفین</h3>
<p className="text-3xl font-bold text-slate-100 tracking-tight font-feature-settings-ss01">۱,۲۴۸ <span className="text-sm text-slate-500 font-normal mr-1">نفر</span></p>
</div>
</div>

<div className="p-6 rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm hover:border-amber-500/30 transition-all group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-transparent opacity-50"></div>
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:landmark" data-width="20"></span>
</div>
<span className="flex items-center gap-1 text-[10px] font-medium text-slate-400 bg-slate-700/50 px-2.5 py-1 rounded-full border border-slate-700">
                                فعال
                            </span>
</div>
<div className="space-y-1">
<h3 className="text-slate-500 text-xs font-medium">مساجد میزبان</h3>
<p className="text-3xl font-bold text-slate-100 tracking-tight font-feature-settings-ss01">۱۴ <span className="text-sm text-slate-500 font-normal mr-1">مسجد</span></p>
</div>
</div>

<div className="p-6 rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm hover:border-indigo-500/30 transition-all group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-transparent opacity-50"></div>
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:coins" data-width="20"></span>
</div>
<span className="flex items-center gap-1 text-[10px] font-medium text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/10">
                                +۸٪ رشد
                            </span>
</div>
<div className="space-y-1">
<h3 className="text-slate-500 text-xs font-medium">مجموع نذورات و پرداخت</h3>
<p className="text-3xl font-bold text-slate-100 tracking-tight font-feature-settings-ss01">۴۵۰ <span className="text-sm text-slate-500 font-normal mr-1">میلیون تومان</span></p>
</div>
</div>

<div className="p-6 rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm hover:border-rose-500/30 transition-all group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-transparent opacity-50"></div>
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-rose-500/10 rounded-xl border border-rose-500/20 text-rose-400 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:person-standing" data-width="20"></span>
</div>
<span className="flex items-center gap-1 text-[10px] font-medium text-slate-400">
                                میانگین سنی
                            </span>
</div>
<div className="space-y-1">
<h3 className="text-slate-500 text-xs font-medium">حضور جوانان</h3>
<p className="text-3xl font-bold text-slate-100 tracking-tight font-feature-settings-ss01">۲۴ <span className="text-sm text-slate-500 font-normal mr-1">سال</span></p>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm p-8 flex flex-col h-[420px]">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-slate-100 font-semibold text-base flex items-center gap-2">
<span className="w-1 h-5 bg-teal-500 rounded-full"></span>
                                    روند ثبت‌نام معتکفین
                                </h3>
<p className="text-xs text-slate-500 mt-2 pr-3">نمودار تعداد ثبت‌نام‌های قطعی در هفته گذشته</p>
</div>
<div className="flex bg-slate-900/50 rounded-lg p-1 border border-slate-700/50">
<button className="px-3 py-1.5 text-[11px] font-medium bg-slate-700 text-slate-100 rounded-md shadow-sm transition-all">روزانه</button>
<button className="px-3 py-1.5 text-[11px] font-medium text-slate-500 hover:text-slate-300 transition-colors">هفتگی</button>
</div>
</div>

<div className="flex-1 w-full flex items-end justify-between px-2 gap-4 pb-2 border-b border-slate-700/50 relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10 pb-2">
<div className="w-full h-px bg-slate-400 border-t border-dashed"></div>
<div className="w-full h-px bg-slate-400 border-t border-dashed"></div>
<div className="w-full h-px bg-slate-400 border-t border-dashed"></div>
<div className="w-full h-px bg-slate-400 border-t border-dashed"></div>
</div>

<div className="contents">

<div className="flex flex-col items-center gap-3 h-full justify-end group cursor-pointer w-full">
<div className="w-full max-w-[40px] bg-slate-700/50 rounded-t-lg h-[30%] relative overflow-hidden group-hover:bg-slate-600 transition-all"></div>
<span className="text-[10px] text-slate-500">شنبه</span>
</div>
<div className="flex flex-col items-center gap-3 h-full justify-end group cursor-pointer w-full">
<div className="w-full max-w-[40px] bg-slate-700/50 rounded-t-lg h-[45%] relative overflow-hidden group-hover:bg-slate-600 transition-all"></div>
<span className="text-[10px] text-slate-500">یکشنبه</span>
</div>
<div className="flex flex-col items-center gap-3 h-full justify-end group cursor-pointer w-full">
<div className="w-full max-w-[40px] bg-slate-700/50 rounded-t-lg h-[35%] relative overflow-hidden group-hover:bg-slate-600 transition-all"></div>
<span className="text-[10px] text-slate-500">دوشنبه</span>
</div>
<div className="flex flex-col items-center gap-3 h-full justify-end group cursor-pointer w-full">
<div className="w-full max-w-[40px] bg-gradient-to-t from-teal-600 to-teal-400 rounded-t-lg h-[85%] relative overflow-hidden shadow-[0_0_20px_rgba(20,184,166,0.3)]">
<div className="absolute top-0 left-0 w-full h-full bg-white/10"></div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all mb-2">۲۴۰ نفر</div>
</div>
<span className="text-[10px] text-teal-400 font-bold">سه‌شنبه</span>
</div>
<div className="flex flex-col items-center gap-3 h-full justify-end group cursor-pointer w-full">
<div className="w-full max-w-[40px] bg-slate-700/50 rounded-t-lg h-[60%] relative overflow-hidden group-hover:bg-slate-600 transition-all"></div>
<span className="text-[10px] text-slate-500">چهارشنبه</span>
</div>
<div className="flex flex-col items-center gap-3 h-full justify-end group cursor-pointer w-full">
<div className="w-full max-w-[40px] bg-slate-700/50 rounded-t-lg h-[75%] relative overflow-hidden group-hover:bg-slate-600 transition-all"></div>
<span className="text-[10px] text-slate-500">پنجشنبه</span>
</div>
<div className="flex flex-col items-center gap-3 h-full justify-end group cursor-pointer w-full">
<div className="w-full max-w-[40px] bg-slate-700/50 rounded-t-lg h-[50%] relative overflow-hidden group-hover:bg-slate-600 transition-all"></div>
<span className="text-[10px] text-slate-500">جمعه</span>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm p-6 h-full">
<h3 className="text-slate-100 font-semibold text-base mb-6 flex items-center gap-2">
<span className="iconify text-amber-500" data-icon="lucide:building-2" data-width="18"></span>
                                وضعیت ظرفیت مساجد
                            </h3>
<div className="space-y-6">

<div>
<div className="flex justify-between items-end mb-2">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-200">مسجد جامع بازار</span>
<span className="text-[10px] text-slate-500 mt-0.5">ظرفیت کل: ۳۰۰ نفر</span>
</div>
<span className="text-xs font-bold text-rose-400">۹۸٪ پر</span>
</div>
<div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-l from-rose-500 to-rose-400 w-[98%] rounded-full shadow-[0_0_10px_rgba(244,63,94,0.4)]"></div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-2">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-200">مسجد امام حسن (ع)</span>
<span className="text-[10px] text-slate-500 mt-0.5">ظرفیت کل: ۱۵۰ نفر</span>
</div>
<span className="text-xs font-bold text-teal-400">۷۵٪ پر</span>
</div>
<div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-l from-teal-500 to-teal-400 w-[75%] rounded-full shadow-[0_0_10px_rgba(20,184,166,0.4)]"></div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-2">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-200">مسجد امیرالمومنین</span>
<span className="text-[10px] text-slate-500 mt-0.5">ظرفیت کل: ۲۵۰ نفر</span>
</div>
<span className="text-xs font-bold text-amber-400">۴۵٪ پر</span>
</div>
<div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-l from-amber-500 to-amber-400 w-[45%] rounded-full shadow-[0_0_10px_rgba(245,158,11,0.4)]"></div>
</div>
</div>

<div className="mt-6 p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 flex gap-3">
<span className="iconify text-amber-500 flex-shrink-0 mt-0.5" data-icon="lucide:alert-triangle" data-width="16"></span>
<p className="text-xs text-slate-400 leading-relaxed">
                                        ظرفیت بخش خواهران در مسجد جامع رو به اتمام است. لطفا ثبت‌نام‌های جدید را به مسجد امام حسن هدایت کنید.
                                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm overflow-hidden">
<div className="px-8 py-6 border-b border-slate-700/50 flex items-center justify-between">
<div>
<h3 className="text-slate-100 font-semibold text-base">آخرین ثبت‌نام‌ها</h3>
<p className="text-xs text-slate-500 mt-1">لیست ۱۰ معتکف ثبت‌نام شده اخیر</p>
</div>
<button className="text-xs font-medium text-teal-400 hover:text-teal-300 transition-colors border border-teal-500/20 bg-teal-500/5 px-4 py-2 rounded-lg">مشاهده لیست کامل</button>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead className="bg-slate-900/30 text-xs text-slate-500 border-b border-slate-700/50">
<tr>
<th className="px-8 py-4 font-medium text-right">نام و نام خانوادگی</th>
<th className="px-8 py-4 font-medium text-right">کد ملی</th>
<th className="px-8 py-4 font-medium text-right">مسجد انتخابی</th>
<th className="px-8 py-4 font-medium text-right">تاریخ ثبت</th>
<th className="px-8 py-4 font-medium text-right">وضعیت پرداخت</th>
<th className="px-8 py-4 font-medium text-left">مبلغ (تومان)</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-700/50 text-sm">
<tr className="group hover:bg-slate-700/20 transition-colors">
<td className="px-8 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-slate-300 font-medium">م</div>
<span className="text-slate-200 font-medium">محمد حسین‌زاده</span>
</div>
</td>
<td className="px-8 py-4 text-slate-400 text-xs font-mono tracking-wider">002****145</td>
<td className="px-8 py-4 text-slate-400 text-xs">مسجد جامع بازار</td>
<td className="px-8 py-4 text-slate-500 text-xs font-mono">۱۴۰۳/۱۰/۱۵</td>
<td className="px-8 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            موفق
                                        </span>
</td>
<td className="px-8 py-4 text-left font-medium text-slate-200 dir-ltr">۳۵۰,۰۰۰</td>
</tr>
<tr className="group hover:bg-slate-700/20 transition-colors">
<td className="px-8 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-slate-300 font-medium">ع</div>
<span className="text-slate-200 font-medium">علی رضاپور</span>
</div>
</td>
<td className="px-8 py-4 text-slate-400 text-xs font-mono tracking-wider">128****890</td>
<td className="px-8 py-4 text-slate-400 text-xs">مسجد امام حسن</td>
<td className="px-8 py-4 text-slate-500 text-xs font-mono">۱۴۰۳/۱۰/۱۵</td>
<td className="px-8 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/10">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                            در انتظار تایید
                                        </span>
</td>
<td className="px-8 py-4 text-left font-medium text-slate-200 dir-ltr">۳۵۰,۰۰۰</td>
</tr>
<tr className="group hover:bg-slate-700/20 transition-colors">
<td className="px-8 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-slate-300 font-medium">ف</div>
<span className="text-slate-200 font-medium">فاطمه حسینی</span>
</div>
</td>
<td className="px-8 py-4 text-slate-400 text-xs font-mono tracking-wider">045****221</td>
<td className="px-8 py-4 text-slate-400 text-xs">مسجد امیرالمومنین</td>
<td className="px-8 py-4 text-slate-500 text-xs font-mono">۱۴۰۳/۱۰/۱۴</td>
<td className="px-8 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            موفق
                                        </span>
</td>
<td className="px-8 py-4 text-left font-medium text-slate-200 dir-ltr">۳۵۰,۰۰۰</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
