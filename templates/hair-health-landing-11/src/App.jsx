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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-slate-50/70 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-12">

<a className="text-lg font-medium tracking-tighter text-slate-900" href="#">ر و ی ش</a>

<div className="hidden md:flex gap-8 text-sm font-normal text-slate-500">
<a className="text-slate-900 transition-colors" href="#">تکنولوژی</a>
<a className="hover:text-slate-900 transition-colors" href="#">نتایج بالینی</a>
<a className="hover:text-slate-900 transition-colors" href="#">ترکیبات</a>
<a className="hover:text-slate-900 transition-colors" href="#">سوالات متداول</a>
</div>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#">ورود</a>
<button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-normal text-white hover:bg-slate-800 transition-all active:scale-95 shadow-sm">
                    شروع درمان
                </button>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">

<div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none">
<div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-100/60 to-slate-100/60 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="mb-8 flex">
<span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50/30 px-3 py-1 text-xs font-normal text-emerald-700 backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 relative">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
</span>
                            فرمولاسیون بهبود یافته ۲۰۲۴
                        </span>
</div>
<h1 className="text-4xl font-medium tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-tight">
                        توقف ریزش، <br/><span className="text-emerald-600 block mt-2">شروع رویش.</span>
</h1>
<p className="mt-8 text-lg leading-8 text-slate-500 max-w-xl font-light">
                        یک راهکار پیشرفته و مبتنی بر شواهد بالینی که فولیکول‌های مو را در سطح سلولی هدف قرار می‌دهد. فرموله شده برای افزایش ضخامت، تراکم و سلامت کلی پوست سر.
                    </p>
<div className="mt-10 flex flex-wrap items-center gap-6">
<a className="rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-normal text-white shadow-sm hover:bg-emerald-500 transition-all active:scale-95" href="#">
                            دریافت برنامه درمانی شخصی
                        </a>
<a className="group flex items-center gap-2 text-sm font-normal leading-6 text-slate-500 hover:text-slate-900 transition-colors" href="#">
                            نحوه عملکرد
                            <iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none mx-auto">
<div className="relative rounded-3xl bg-white/40 p-2 ring-1 ring-slate-200/50 backdrop-blur-xl shadow-2xl shadow-slate-200/50">
<img alt="سرم درمانی رویش" className="w-full rounded-2xl object-cover aspect-[4/5] lg:aspect-square" src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -right-6 lg:-left-6 lg:right-auto bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg ring-1 ring-slate-100 flex items-center gap-4 animate-bounce" style={{animationDuration: '4s'}}>
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
<iconify-icon className="text-2xl" icon="solar:dropper-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 font-light">جذب سلولی</p>
<p className="text-sm font-medium tracking-tight text-slate-800">تکنولوژی نانو</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200/60 bg-white py-24 sm:py-32 relative">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
<div>
<h2 className="text-sm font-normal leading-7 text-emerald-600">مکانیزم عملکرد</h2>
<p className="mt-2 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">علم پشت موهای متراکم‌تر</p>
<p className="mt-6 text-base leading-7 text-slate-500 font-light max-w-lg">
                        فرمولاسیون استثنایی ما با استفاده از عصاره‌های گیاهی خالص و تکنولوژی پیشرفته آزمایشگاهی، محیطی ایده‌آل برای رشد مجدد و پایدار موها فراهم می‌کند.
                    </p>
</div>
<div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
<img alt="عناصر گیاهی" className="object-cover w-full h-full opacity-90 transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1615397323282-e889d1d604b7?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-slate-900/10 rounded-3xl"></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50/50 p-8 transition-all hover:bg-white hover:shadow-lg hover:shadow-slate-200/40 hover:border-slate-200">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
<iconify-icon className="text-2xl text-emerald-600" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium tracking-tight text-slate-900">مسدودسازی آنزیم 5-AR</h3>
<p className="text-sm leading-6 text-slate-500 font-light">ترکیبات فعال ما با مهار تبدیل تستوسترون به DHT، عامل اصلی نازک شدن و ریزش مو را متوقف می‌کنند.</p>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50/50 p-8 transition-all hover:bg-white hover:shadow-lg hover:shadow-slate-200/40 hover:border-slate-200">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
<iconify-icon className="text-2xl text-emerald-600" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium tracking-tight text-slate-900">افزایش گردش خون میکرو</h3>
<p className="text-sm leading-6 text-slate-500 font-light">پمپاژ مواد مغذی ضروری و اکسیژن به فولیکول‌های خفته از طریق گشاد کردن عروق خونی در سطح پوست سر.</p>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50/50 p-8 transition-all hover:bg-white hover:shadow-lg hover:shadow-slate-200/40 hover:border-slate-200">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
<iconify-icon className="text-2xl text-emerald-600" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium tracking-tight text-slate-900">تحریک فاز آناژن</h3>
<p className="text-sm leading-6 text-slate-500 font-light">با طولانی کردن چرخه رشد طبیعی مو، تارهای مو ضخیم‌تر، مقاوم‌تر و با طول عمر بیشتری رشد می‌کنند.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200/60 bg-slate-50/50 py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900">تایید شده توسط داده‌های بالینی</h2>
<p className="mt-6 text-base leading-7 text-slate-500 font-light">در یک کارآزمایی بالینی مستقل ۱۶ هفته‌ای بر روی افراد مبتلا به آلوپسی آندروژنتیک، نتایج به طور مداوم نشان‌دهنده بهبود قابل توجهی بود.</p>
<div className="mt-10 border-t border-slate-200/60 pt-10">
<div className="grid grid-cols-2 gap-8">
<div>
<dt className="text-sm font-normal text-slate-500">افزایش تراکم در هر سانتی‌متر مربع</dt>
<dd className="mt-2 text-4xl font-medium tracking-tight text-emerald-600">+۳۸٪</dd>
</div>
<div>
<dt className="text-sm font-normal text-slate-500">کاهش نرخ ریزش روزانه</dt>
<dd className="mt-2 text-4xl font-medium tracking-tight text-emerald-600">-۶۴٪</dd>
</div>
</div>
</div>
</div>

<div className="relative rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/30 border border-slate-200/50 lg:p-8">
<div className="flex items-center justify-between mb-8">
<div>
<h4 className="text-sm font-medium text-slate-900">نمودار رشد تراکم</h4>
<p className="text-xs text-slate-400 mt-1 font-light">میانگین نتایج کاربران طی ۱۶ هفته</p>
</div>
<div className="flex items-center gap-2">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs text-slate-500 font-light">تراکم هدف</span>
</div>
</div>
<div className="relative h-56 w-full">

<div className="absolute inset-y-0 right-0 flex flex-col justify-between text-[10px] text-slate-400 pb-6 pr-1 font-light">
<span>۱۰۰٪</span>
<span>۷۵٪</span>
<span>۵۰٪</span>
<span>۲۵٪</span>
</div>

<div className="absolute inset-0 flex flex-col justify-between pb-6 pl-8">
<div className="w-full border-t border-slate-100 border-dashed"></div>
<div className="w-full border-t border-slate-100 border-dashed"></div>
<div className="w-full border-t border-slate-100 border-dashed"></div>
<div className="w-full border-t border-slate-100 border-dashed"></div>
</div>

<div className="absolute inset-0 flex items-end justify-between pb-6 pl-8 pr-2 gap-2 sm:gap-4">

<div className="relative w-full h-[15%] group">
<div className="absolute inset-x-0 bottom-0 bg-slate-100 rounded-t-lg h-full transition-all group-hover:bg-slate-200"></div>
</div>

<div className="relative w-full h-[30%] group">
<div className="absolute inset-x-0 bottom-0 bg-emerald-100/50 rounded-t-lg h-full transition-all group-hover:bg-emerald-200/50"></div>
</div>

<div className="relative w-full h-[55%] group">
<div className="absolute inset-x-0 bottom-0 bg-emerald-300 rounded-t-lg h-full transition-all group-hover:bg-emerald-400"></div>
</div>

<div className="relative w-full h-[75%] group">
<div className="absolute inset-x-0 bottom-0 bg-emerald-500 rounded-t-lg h-full transition-all group-hover:bg-emerald-600"></div>
</div>

<div className="relative w-full h-[95%] group">
<div className="absolute inset-x-0 bottom-0 bg-emerald-600 rounded-t-lg h-full shadow-[0_0_20px_rgba(5,150,105,0.2)] transition-all group-hover:bg-emerald-700"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] py-1.5 px-2.5 rounded-lg whitespace-nowrap z-10 font-light shadow-lg">
                                    حداکثر تراکم
                                </div>
</div>
</div>

<div className="absolute bottom-0 inset-x-0 flex justify-between pl-8 pr-2 text-[10px] text-slate-400 font-light">
<span>شروع</span>
<span>هفته ۴</span>
<span>هفته ۸</span>
<span>هفته ۱۲</span>
<span className="text-emerald-600 font-normal">هفته ۱۶</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">سرمایه‌گذاری روی اعتماد به نفس</h2>
<p className="mt-4 text-base text-slate-500 font-light">برنامه‌ای را انتخاب کنید که با اهداف شما همخوانی دارد. لغو اشتراک در هر زمان امکان‌پذیر است.</p>
</div>

<div className="mt-12 flex justify-center items-center gap-x-4">
<span className="text-sm font-normal text-slate-500">خرید یک‌باره</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>

<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
</label>
<span className="text-sm font-normal text-slate-900 flex items-center gap-2">
                    اشتراک ماهانه
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">۲۰٪ تخفیف</span>
</span>
</div>
<div className="mx-auto mt-12 max-w-md rounded-[2rem] ring-1 ring-slate-200/60 bg-white shadow-xl shadow-slate-200/30 transition-all hover:shadow-2xl hover:shadow-slate-200/40 relative overflow-hidden flex flex-col">

<div className="h-40 w-full overflow-hidden relative">
<img alt="پکیج درمانی" className="object-cover w-full h-full opacity-90" src="https://images.unsplash.com/photo-1556228720-1c2ae6bae6e1?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
</div>
<div className="p-8 sm:p-10 pt-2 relative">
<div className="flex items-center justify-between gap-x-4">
<h3 className="text-lg font-medium tracking-tight text-slate-900">پکیج کامل درمانی</h3>
</div>
<p className="mt-2 text-sm leading-6 text-slate-500 font-light">مناسب برای شروع یک دوره کامل و مشاهده نتایج اولیه و پایدار.</p>
<div className="mt-6 flex items-baseline gap-x-1 border-b border-slate-100 pb-6">
<span className="text-4xl font-medium tracking-tight text-slate-900">۱,۸۵۰,۰۰۰</span>
<span className="text-sm font-normal text-slate-400">تومان / ماه</span>
</div>
<ul className="mt-6 space-y-4 text-sm leading-6 text-slate-600 font-light" role="list">
<li className="flex gap-x-3 items-center">
<iconify-icon className="text-emerald-500 text-lg flex-none" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            سرم موضعی ماینوکسیدیل پلاس (۲ عدد)
                        </li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="text-emerald-500 text-lg flex-none" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            شامپو تقویت کننده کافئین دار
                        </li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="text-emerald-500 text-lg flex-none" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            مکمل ویتامینه ۳۰ روزه
                        </li>
<li className="flex gap-x-3 items-center">
<iconify-icon className="text-emerald-500 text-lg flex-none" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            ارسال رایگان پستی
                        </li>
</ul>
<button className="mt-8 w-full rounded-full bg-slate-900 px-3 py-3.5 text-center text-sm font-normal text-white shadow-sm hover:bg-slate-800 transition-all active:scale-[0.98]">
                        شروع اشتراک
                    </button>
<p className="mt-4 text-center text-xs text-slate-400 font-light">بدون تعهد بلند مدت، امکان لغو در پنل کاربری.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200/60 bg-slate-50">
<div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
<div className="flex justify-center space-x-6 space-x-reverse md:order-2">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="sr-only">اینستاگرام</span>
<iconify-icon className="text-xl" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="sr-only">پشتیبانی تلگرام</span>
<iconify-icon className="text-xl" icon="solar:paperclip-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="sr-only">ایمیل</span>
<iconify-icon className="text-xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="mt-8 md:order-1 md:mt-0 flex flex-col md:flex-row items-center gap-4">
<div className="text-lg font-medium tracking-tighter text-slate-300">ر و ی ش</div>
<p className="text-center text-xs leading-5 text-slate-400 font-light">
                    © ۱۴۰۳ شرکت داروسازی رویش. طراحی شده بر پایه علم.
                </p>
<div className="flex gap-4 text-xs text-slate-400 mt-2 md:mt-0 font-light">
<a className="hover:text-slate-600" href="#">شرایط و قوانین</a>
<a className="hover:text-slate-600" href="#">حریم خصوصی</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
