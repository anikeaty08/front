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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};

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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:activity" data-strokeWidth="1.5"></span>
</div>
<span className="text-white font-semibold tracking-tight text-lg">تکنو حساب</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#">خدمات</a>
<a className="hover:text-white transition-colors" href="#">تعرفه</a>
<a className="hover:text-white transition-colors" href="#">درباره ما</a>
<a className="hover:text-white transition-colors" href="#">بلاگ</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-white hidden sm:block" href="#">ورود</a>
<a className="bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors" href="#">
                    مشاوره رایگان
                </a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">

<div className="blob w-96 h-96 bg-emerald-500/20 rounded-full top-0 left-1/4 -translate-x-1/2"></div>
<div className="blob w-80 h-80 bg-blue-500/20 rounded-full top-20 right-1/4 translate-x-1/2"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-emerald-400 mb-8 hover:bg-white/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                فصل مالیاتی جدید آغاز شد
            </div>
<h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.15]">
                آرامش مالیاتی با <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">دقت تکنولوژی</span>
</h1>
<p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                تکنو حساب، پلتفرم هوشمند مدیریت امور مالی و مالیاتی. ما پیچیدگی‌های قوانین مالیاتی را برای کسب‌وکارهای مدرن ساده می‌کنیم.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group">
                    شروع کنید
                    <span className="iconify group-hover:-translate-x-1 transition-transform" data-icon="lucide:arrow-left" data-strokeWidth="1.5"></span>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 glass-card text-white rounded-full font-medium hover:bg-white/10 transition-all">
                    تماس با کارشناس
                </button>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto px-4 perspective-[2000px]">
<div className="glass-card rounded-xl border border-white/10 p-2 transform rotate-x-12 shadow-2xl shadow-emerald-900/20 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="bg-[#09090b] rounded-lg overflow-hidden border border-white/5">

<div className="h-12 border-b border-white/5 flex items-center px-4 justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs text-zinc-600 font-mono">dashboard.technohessab.ir</div>
</div>

<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-zinc-900/50 rounded-lg p-4 border border-white/5">
<div className="text-xs text-zinc-500 mb-2">مالیات بر ارزش افزوده</div>
<div className="text-2xl text-white font-mono dir-ltr text-right">24,500,000 ریال</div>
<div className="mt-4 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[70%] rounded-full"></div>
</div>
</div>
<div className="bg-zinc-900/50 rounded-lg p-4 border border-white/5">
<div className="text-xs text-zinc-500 mb-2">وضعیت اظهارنامه</div>
<div className="flex items-center gap-2 text-emerald-400 text-sm mt-1">
<span className="iconify" data-icon="lucide:check-circle-2" data-strokeWidth="1.5"></span>
                                تایید شده
                            </div>
</div>
<div className="bg-zinc-900/50 rounded-lg p-4 border border-white/5 flex items-center justify-between">
<div>
<div className="text-xs text-zinc-500 mb-1">سررسید بعدی</div>
<div className="text-sm text-white">15 آبان 1403</div>
</div>
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
<span className="iconify" data-icon="lucide:calendar-clock" data-strokeWidth="1.5"></span>
</div>
</div>

<div className="col-span-1 md:col-span-3 h-48 bg-zinc-900/30 rounded-lg border border-white/5 flex items-end justify-between px-4 pb-4 gap-2">
<div className="w-full bg-zinc-800/50 h-[40%] rounded-sm hover:bg-emerald-500/50 transition-colors"></div>
<div className="w-full bg-zinc-800/50 h-[60%] rounded-sm hover:bg-emerald-500/50 transition-colors"></div>
<div className="w-full bg-zinc-800/50 h-[30%] rounded-sm hover:bg-emerald-500/50 transition-colors"></div>
<div className="w-full bg-zinc-800/50 h-[80%] rounded-sm hover:bg-emerald-500/50 transition-colors"></div>
<div className="w-full bg-zinc-800/50 h-[55%] rounded-sm hover:bg-emerald-500/50 transition-colors"></div>
<div className="w-full bg-emerald-500 h-[90%] rounded-sm shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-black/50 py-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-zinc-500 mb-8 font-medium">مورد اعتماد بیش از ۵۰۰ کسب‌وکار پیشرو</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-xl font-bold text-white tracking-tighter">
<span className="iconify text-emerald-500" data-icon="lucide:hexagon" data-strokeWidth="2"></span> ACME
                </div>
<div className="flex items-center gap-2 text-xl font-bold text-white tracking-tighter">
<span className="iconify text-emerald-500" data-icon="lucide:triangle" data-strokeWidth="2"></span> VERTEX
                </div>
<div className="flex items-center gap-2 text-xl font-bold text-white tracking-tighter">
<span className="iconify text-emerald-500" data-icon="lucide:circle-dashed" data-strokeWidth="2"></span> ORBIT
                </div>
<div className="flex items-center gap-2 text-xl font-bold text-white tracking-tighter">
<span className="iconify text-emerald-500" data-icon="lucide:box" data-strokeWidth="2"></span> CUBE
                </div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">خدمات جامع مالیاتی</h2>
<p className="text-zinc-400 max-w-xl text-lg font-light">
                ما تمام جنبه‌های مالیاتی کسب‌وکار شما را پوشش می‌دهیم تا شما فقط روی رشد تمرکز کنید.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
<span className="iconify w-6 h-6" data-icon="lucide:file-spreadsheet" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">تهیه اظهارنامه</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    تنظیم دقیق اظهارنامه‌های عملکرد و ارزش افزوده با رعایت آخرین قوانین بخشنامه‌های مالیاتی کشور.
                </p>
</div>

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
<span className="iconify w-6 h-6" data-icon="lucide:shield-check" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">دادرسی مالیاتی</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    دفاع تخصصی از پرونده‌های مالیاتی شما در هیئت‌های حل اختلاف و کاهش جرایم مالیاتی.
                </p>
</div>

<div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
<span className="iconify w-6 h-6" data-icon="lucide:pie-chart" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">مشاوره استراتژیک</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    تحلیل ساختار مالی شرکت و ارائه راهکارهای قانونی برای بهینه‌سازی پرداخت‌های مالیاتی.
                </p>
</div>

<div className="md:col-span-2 glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="relative z-10 max-w-md">
<div className="w-12 h-12 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center mb-6 text-emerald-400">
<span className="iconify w-6 h-6" data-icon="lucide:zap" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">سیستم حسابداری ابری</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                        دسترسی ۲۴ ساعته به اسناد و گزارشات مالی خود از طریق پنل اختصاصی تکنو حساب. امنیت بالا، سرعت بی‌نظیر و گزارش‌گیری آنی.
                    </p>
<a className="inline-flex items-center text-emerald-400 text-sm hover:text-emerald-300 transition-colors" href="#">
                        مشاهده دمو
                        <span className="iconify mr-2" data-icon="lucide:arrow-left" data-strokeWidth="1.5"></span>
</a>
</div>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

<div className="absolute -bottom-10 -left-10 w-64 h-64 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center opacity-50">
<div className="w-48 h-48 border border-white/5 rounded-full"></div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col justify-between hover:bg-white/5 transition-colors">
<div>
<h3 className="text-xl font-medium text-white mb-2">لیست بیمه و حقوق</h3>
<p className="text-sm text-zinc-400">محاسبه دقیق و ارسال لیست‌ها.</p>
</div>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
<span className="text-xs text-zinc-500">دقت ۱۰۰٪</span>
<span className="iconify text-emerald-400 w-5 h-5" data-icon="lucide:users" data-strokeWidth="1.5"></span>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-[#080808]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
<div className="md:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">چرا تکنو حساب؟</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-6 h-6 mt-1 flex-shrink-0 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="2" data-width="14"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">تیم متخصص و رسمی</h4>
<p className="text-sm text-zinc-500 font-light">عضو جامعه حسابداران رسمی ایران با بیش از ۱۰ سال تجربه.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 mt-1 flex-shrink-0 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="2" data-width="14"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">امنیت داده‌ها</h4>
<p className="text-sm text-zinc-500 font-light">استفاده از پروتکل‌های رمزنگاری پیشرفته برای حفاظت از اطلاعات مالی شما.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 mt-1 flex-shrink-0 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="2" data-width="14"></span>
</div>
<div>
<h4 className="text-white font-medium mb-1">پشتیبانی اختصاصی</h4>
<p className="text-sm text-zinc-500 font-light">یک حسابدار اختصاصی برای پاسخگویی به سوالات شما در هر زمان.</p>
</div>
</div>
</div>
</div>
<div className="md:w-1/2 w-full">

<div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 bg-black/40">
<h3 className="text-lg text-white font-medium mb-4">درخواست مشاوره رایگان</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" placeholder="نام" type="text"/>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" placeholder="شماره تماس" type="text"/>
</div>
<select className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-all appearance-none cursor-pointer">
<option>انتخاب خدمت مورد نظر</option>
<option>خدمات مالیاتی</option>
<option>حسابداری</option>
<option>بیمه</option>
</select>

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-zinc-600 rounded bg-zinc-900/50 peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-all"></div>
<span className="iconify absolute top-0.5 left-0.5 text-black opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" data-icon="lucide:check" data-width="16"></span>
</div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">قوانین و مقررات را می‌پذیرم</span>
</label>
<button className="w-full bg-white text-black font-semibold rounded-lg py-3 hover:bg-zinc-200 transition-colors text-sm" type="button">
                            ارسال درخواست
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 bg-[#020202]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-emerald-600 flex items-center justify-center text-white text-xs">
<span className="iconify" data-icon="lucide:activity" data-strokeWidth="2"></span>
</div>
<span className="text-white font-semibold tracking-tight">تکنو حساب</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
                        ارائه دهنده خدمات نوین مالی و مالیاتی با تکیه بر تکنولوژی روز و دانش متخصصین خبره.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">دسترسی سریع</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">صفحه اصلی</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">خدمات ما</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">بلاگ آموزشی</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">تعرفه‌ها</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">خدمات</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">اظهارنامه مالیاتی</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">تحریر دفاتر قانونی</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">مشاوره ارزش افزوده</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">کدینگ حسابداری</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">ارتباط با ما</h4>
<ul className="space-y-3 text-xs text-zinc-500">
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:map-pin" data-width="14"></span>
                            تهران، خیابان ولیعصر، برج فناوری
                        </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
                            ۰۲۱-۸۸۸۸۰۰۰۰
                        </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
                            info@technohessab.ir
                        </li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600">© ۱۴۰۳ تکنو حساب. تمامی حقوق محفوظ است.</p>
<div className="flex gap-4">
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="16"></span></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
