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
      

<div className="lg:hidden flex items-center justify-between p-4 bg-white shadow-sm sticky top-0 z-30">
<div className="flex items-center gap-3">
<button className="text-slate-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<span className="font-bold text-lg text-blue-600">HDM Panel</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="flex min-h-screen">

<aside className="hidden lg:flex w-[280px] bg-white border-l border-slate-100 flex-col fixed inset-y-0 right-0 z-20 shadow-[0_0_20px_rgba(0,0,0,0.02)]">

<div className="h-20 flex items-center px-8 border-b border-slate-50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
<iconify-icon className="" icon="solar:widget-5-bold" width="24"></iconify-icon>
</div>
<div className="">
<h1 className="leading-tight text-lg font-bold tracking-tight" style={{}}>آژانس Test</h1>
<p className="text-xs text-slate-400 font-light">پنل مدیریت تبلیغات</p>
</div>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-colors group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:widget-2-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">داشبورد</span>
</a>
<div className="pt-4 pb-2 px-4 text-xs font-bold text-slate-400">سرویس‌ها</div>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 text-blue-600 font-bold shadow-sm shadow-blue-100/50" href="#">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
<span className="text-sm">ساخت اکانت جدید</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-colors group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:bill-list-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">لیست سفارش‌ها</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-colors group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:wallet-money-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">امور مالی</span>
<span className="mr-auto bg-orange-100 text-orange-600 text-[10px] px-2 py-0.5 rounded-full font-bold">2</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-colors group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:chart-2-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">ابزارها</span>
</a>
</nav>

<div className="p-4 border-t border-slate-50 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 transition-colors" href="#">
<iconify-icon icon="solar:headphones-round-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">پشتیبانی</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors" href="#">
<iconify-icon icon="solar:logout-2-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">خروج</span>
</a>
</div>
</aside>

<div className="flex-1 lg:mr-[280px] flex flex-col min-w-0">

<header className="hidden lg:flex h-20 bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-100 px-8 items-center justify-between">

<div className="relative w-96 group">
<div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<input className="w-full bg-slate-50 border-none rounded-2xl py-3 pr-11 pl-4 text-sm text-slate-700 focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all placeholder:text-slate-400" placeholder="جستجو در سفارشات..." type="text"/>
</div>

<div className="flex items-center gap-6">
<button className="relative text-slate-500 hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:bell-linear" width="24"></iconify-icon>
<span className="absolute top-0 right-0 -mt-1 -mr-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<div className="h-8 w-px bg-slate-100"></div>
<div className="flex items-center gap-3 cursor-pointer">
<div className="text-left hidden xl:block">
<div className="text-sm font-bold text-slate-700">علی محمدی</div>
<div className="text-xs text-slate-400">مدیر مارکتینگ</div>
</div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:user-circle-bold" width="24"></iconify-icon>
</div>
</div>
</div>
</header>

<main className="flex-1 p-6 lg:p-10 max-w-[1600px] w-full mx-auto">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div className="">
<h2 className="text-2xl font-bold text-slate-800 tracking-tight mb-2">تبلیغات گوگل / ساخت اکانت جدید</h2>
<div className="flex items-center gap-2 text-sm text-slate-500">
<span>داشبورد</span>
<iconify-icon className="opacity-50" icon="solar:alt-arrow-left-linear" width="12"></iconify-icon>
<span className="text-blue-600">ساخت اکانت</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">

<div className="xl:col-span-8 flex flex-col gap-6">

<div className="bg-white p-1 rounded-2xl inline-flex shadow-sm w-full sm:w-auto">
<button className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
                                اکانت بدون مدیریت
                            </button>
<button className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-sm font-bold text-blue-600 bg-blue-50 shadow-sm border border-blue-100">
                                اکانت با مدیریت
                            </button>
</div>

<div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100 p-6 lg:p-8">
<form className="space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700">نام اکانت</label>
<div className="relative">
<input className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" placeholder="نام نمایشی اکانت" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700">آدرس وب سایت</label>
<div className="relative">
<input className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-sm text-right focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" dir="ltr" placeholder="www.example.com" type="text"/>
</div>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between items-center">
<label className="text-sm font-semibold text-slate-700">ایمیل برای دسترسی اکانت</label>
<button className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors" type="button">
<iconify-icon icon="solar:add-square-linear" width="14"></iconify-icon>
                                            افزودن ایمیل
                                        </button>
</div>
<div className="relative">
<input className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-sm text-right focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" dir="ltr" placeholder="example@gmail.com" type="email"/>
<div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400" icon="solar:letter-linear" width="18"></iconify-icon>
</div>
</div>
<p className="text-xs text-slate-500 pr-1">حتما Gmail یا Outlook وارد نمایید.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700">نوع ارز و مقدار شارژ</label>
<div className="relative flex h-12 bg-slate-50 border border-slate-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all">
<div className="flex items-center gap-2 px-3 border-l border-slate-200 bg-slate-100/50">
<div className="w-5 h-5 rounded-full overflow-hidden shadow-sm">

<img alt="TR" className="w-full h-full object-cover" src="https://flagcdn.com/tr.svg"/>
</div>
<span className="text-sm font-bold text-slate-600">لیر</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
<input className="flex-1 bg-transparent border-none px-4 text-sm outline-none font-medium h-full" placeholder="0" type="number"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700">معادل به تومان</label>
<div className="relative h-12 bg-blue-50/50 border border-blue-100 rounded-xl flex items-center justify-between px-4 text-sm text-slate-600">
<span className="font-bold text-blue-600 text-lg">0</span>
<span className="text-xs font-medium text-slate-400">تومان</span>
</div>
</div>
</div>

<div className="pt-6 border-t border-slate-50 flex items-center justify-between">
<div className="text-xs text-slate-400 font-medium">
                                        * با زدن دکمه ثبت، قوانین را می‌پذیرید.
                                    </div>
<button className="bg-[#FFC107] hover:bg-[#FFCA2C] text-slate-900 px-8 py-3 rounded-xl font-bold text-sm shadow-sm shadow-orange-200 transition-all active:scale-95 flex items-center gap-2" type="button">
<span>ثبت نهایی سفارش</span>
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
</button>
</div>
</form>
</div>
</div>

<div className="xl:col-span-4 space-y-6">

<div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden relative group">

<div className="h-32 bg-gradient-to-r from-blue-600 to-blue-400 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
<div className="absolute top-4 right-4 z-10">
<div className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">نکات مهم</div>
</div>
</div>

<div className="p-6 relative">
<div className="w-16 h-16 bg-white rounded-2xl shadow-lg -mt-14 mb-4 flex items-center justify-center relative z-10">
<iconify-icon className="text-amber-500 text-3xl" icon="solar:shield-warning-bold-duotone"></iconify-icon>
</div>
<h3 className="font-bold text-lg text-slate-800 mb-2">شرایط و توضیحات</h3>
<p className="text-xs text-slate-400 mb-4 font-light">لطفا قبل از ثبت سفارش مطالعه کنید</p>
<div className="space-y-3 text-sm text-slate-600 leading-7 text-justify">
<div className="flex gap-2">
<span className="text-blue-500 font-bold">۱.</span>
<p>اگر قبلاً روی همین دامنه تبلیغ کرده‌اید، اکانت قبلی را کنسل و کمپین‌ها را پاز کنید و مطمئن شوید بدهی نداشته باشد تا ریسک ساسپند کاهش یابد.</p>
</div>
<div className="flex gap-2">
<span className="text-blue-500 font-bold">۲.</span>
<p>تبلیغ در موضوعات ممنوعه باعث ساسپند شدن اکانت می‌شود. <a className="text-blue-600 underline decoration-blue-200 decoration-1 underline-offset-2" href="#">لیست ممنوعه</a></p>
</div>
<div className="flex gap-2">
<span className="text-blue-500 font-bold">۳.</span>
<p>برای کاهش ریسک بلوکه شدن، ابتدا فقط ۱۵ تا ۳۰ لیر شارژ می‌شود؛ پس از فعال شدن کمپین و دریافت کلیک، برای شارژ کامل تیکت بزنید.</p>
</div>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer">
<img alt="Visa Payment" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
<h4 className="text-white font-bold text-lg mb-1">پرداخت هزینه ویزا و سفارت</h4>
<p className="text-slate-300 text-xs">خدمات ارزی سریع و مطمئن با HDM</p>
</div>
</div>
</div>
</div>
</main>
</div>
</div>

    </>
  );
}
