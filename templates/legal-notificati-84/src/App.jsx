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



        lucide.createIcons();
    
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
      

<nav className="w-full bg-white border-b border-slate-200 h-16 flex items-center justify-center sticky top-0 z-50">
<div className="max-w-4xl w-full px-6 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-[#000E77] rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="scale"></i>
</div>
<span className="text-[#000E77] font-semibold text-lg tracking-tight">الراية</span>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200"></div>
</div>
</div>
</nav>

<main className="max-w-4xl mx-auto px-4 py-12">

<header className="mb-10">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="text-3xl font-semibold text-[#000E77] tracking-tight mb-2">الإشعارات</h1>
<p className="text-slate-500 text-lg font-light">تابع آخر التحديثات التشريعية والأحكام القضائية وتنبيهات المنصة.</p>
</div>

<button className="flex items-center gap-2 text-slate-500 hover:text-[#000E77] transition-colors text-base font-medium">
<i className="w-4 h-4" data-lucide="check-check"></i>
<span>تحديد الكل كمقروء</span>
</button>
</div>

<div className="flex items-center gap-1 mt-8 overflow-x-auto pb-2 no-scrollbar border-b border-slate-200/60">
<button className="px-4 py-2 text-base font-medium text-[#000E77] border-b-2 border-[#000E77] transition-all bg-slate-50">
                    الكل
                </button>
<button className="px-4 py-2 text-base font-medium text-slate-500 hover:text-slate-800 hover:bg-white rounded-t-lg transition-all">
                    التحديثات التشريعية
                </button>
<button className="px-4 py-2 text-base font-medium text-slate-500 hover:text-slate-800 hover:bg-white rounded-t-lg transition-all">
                    التنبيهات
                    <span className="bg-red-50 text-red-600 text-xs px-1.5 py-0.5 rounded-full mr-1">3</span>
</button>
<button className="px-4 py-2 text-base font-medium text-slate-500 hover:text-slate-800 hover:bg-white rounded-t-lg transition-all">
                    الفعاليات
                </button>
</div>
</header>

<div className="space-y-5">

<div className="group relative bg-white rounded-2xl p-6 md:p-7 border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,14,119,0.06)] hover:border-[#000E77]/20 transition-all duration-300">

<div className="absolute right-0 top-4 bottom-4 w-1 bg-[#D4AF37] rounded-l-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
<div className="flex flex-col gap-2">
<div className="flex flex-wrap items-center gap-3">
<h2 className="text-xl font-semibold text-slate-900 tracking-tight group-hover:text-[#000E77] transition-colors">
                                تعليق الجلسات القضائية مؤقتاً
                            </h2>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-50 text-red-700 border border-red-100 text-xs font-medium">
<i className="w-3.5 h-3.5" data-lucide="alert-circle"></i>
                                تنبيه عاجل
                            </span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200 text-xs font-medium">
                                المحاكم
                            </span>
</div>
</div>
<div className="flex items-center gap-1.5 text-slate-400 text-sm whitespace-nowrap pt-1">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>منذ 45 دقيقة</span>
</div>
</div>
<div className="flex gap-4">
<div className="flex-1">
<p className="text-base text-slate-600 leading-relaxed max-w-3xl">
                            نظراً للتحديثات التقنية الطارئة على بوابة "ناجز"، تم تعليق الجلسات المرئية المجدولة لهذا اليوم. سيتم إعادة جدولة جميع الجلسات المتأثرة تلقائياً وإشعار أطراف الدعوى بالموعد الجديد عبر الرسائل النصية.
                        </p>
</div>
</div>
</div>

<div className="group relative bg-white rounded-2xl p-6 md:p-7 border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,14,119,0.06)] hover:border-[#000E77]/20 transition-all duration-300">
<div className="absolute right-0 top-4 bottom-4 w-1 bg-[#000E77] rounded-l-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
<div className="flex flex-col gap-2">
<div className="flex flex-wrap items-center gap-3">
<h2 className="text-xl font-semibold text-slate-900 tracking-tight group-hover:text-[#000E77] transition-colors">
                                صدور اللائحة التنفيذية لنظام المعاملات المدنية
                            </h2>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#000E77]/10 text-[#000E77] border border-[#000E77]/10 text-xs font-medium">
<i className="w-3.5 h-3.5" data-lucide="scale"></i>
                                تحديث تشريعي
                            </span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100 text-xs font-medium">
                                معلومة
                            </span>
</div>
</div>
<div className="flex items-center gap-1.5 text-slate-400 text-sm whitespace-nowrap pt-1">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>منذ ساعتين</span>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="flex-1">
<p className="text-base text-slate-600 leading-relaxed max-w-3xl">
                            تم نشر اللائحة التنفيذية الجديدة في الجريدة الرسمية، وتتضمن تفاصيل تطبيق أحكام العقود والتعويضات. يمكنكم الآن الاطلاع على النص الكامل والمواد المرتبطة في قسم التشريعات.
                        </p>
</div>

<div className="hidden md:flex bg-slate-50 p-2 rounded-lg border border-slate-100">
<i className="w-5 h-5 text-slate-400" data-lucide="book-open"></i>
</div>
</div>
</div>

<div className="group relative bg-white rounded-2xl p-6 md:p-7 border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,14,119,0.06)] hover:border-[#000E77]/20 transition-all duration-300">
<div className="absolute right-0 top-4 bottom-4 w-1 bg-[#D4AF37] rounded-l-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
<div className="flex flex-col gap-2">
<div className="flex flex-wrap items-center gap-3">
<h2 className="text-xl font-semibold text-slate-900 tracking-tight group-hover:text-[#000E77] transition-colors">
                                تم تجديد اشتراك الباقة المهنية بنجاح
                            </h2>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-medium">
<i className="w-3.5 h-3.5" data-lucide="credit-card"></i>
                                الفوترة
                            </span>
</div>
</div>
<div className="flex items-center gap-1.5 text-slate-400 text-sm whitespace-nowrap pt-1">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>أمس، 10:00 ص</span>
</div>
</div>
<div className="flex gap-4">
<div className="flex-1">
<p className="text-base text-slate-600 leading-relaxed max-w-3xl">
                            شكراً لاستمرارك معنا. تم تجديد اشتراكك السنوي في باقة "الراية بريميوم". يمكنك الوصول لكافة الأدوات القانونية المتقدمة ومحرك البحث الذكي حتى تاريخ 25/10/2025.
                        </p>
</div>
</div>
</div>

<div className="group relative bg-white rounded-2xl p-6 md:p-7 border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,14,119,0.06)] hover:border-[#000E77]/20 transition-all duration-300">
<div className="absolute right-0 top-4 bottom-4 w-1 bg-[#000E77] rounded-l-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
<div className="flex flex-col gap-2">
<div className="flex flex-wrap items-center gap-3">
<h2 className="text-xl font-semibold text-slate-900 tracking-tight group-hover:text-[#000E77] transition-colors">
                                ندوة: التحكيم التجاري الدولي وتحدياته
                            </h2>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 border border-purple-100 text-xs font-medium">
<i className="w-3.5 h-3.5" data-lucide="calendar"></i>
                                فعالية
                            </span>
</div>
</div>
<div className="flex items-center gap-1.5 text-slate-400 text-sm whitespace-nowrap pt-1">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>منذ يومين</span>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="flex-1">
<p className="text-base text-slate-600 leading-relaxed max-w-3xl">
                            انضم إلينا في ندوة حصرية بحضور نخبة من المحكمين الدوليين لمناقشة أحدث التطورات في نظام التحكيم السعودي. التسجيل متاح الآن للأعضاء.
                        </p>
<div className="mt-4 flex gap-3">
<button className="text-sm font-medium text-[#000E77] hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                                تفاصيل الندوة
                                <i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
</div>
</div>
</div>
</div>

<div className="group relative bg-white rounded-2xl p-6 md:p-7 border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,14,119,0.06)] hover:border-[#000E77]/20 transition-all duration-300">
<div className="absolute right-0 top-4 bottom-4 w-1 bg-[#D4AF37] rounded-l-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
<div className="flex flex-col gap-2">
<div className="flex flex-wrap items-center gap-3">
<h2 className="text-xl font-semibold text-slate-900 tracking-tight group-hover:text-[#000E77] transition-colors">
                                مبدأ قضائي جديد من المحكمة العليا
                            </h2>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-100 text-xs font-medium">
<i className="w-3.5 h-3.5" data-lucide="gavel"></i>
                                سابقة قضائية
                            </span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100 text-xs font-medium">
                                معلومة
                            </span>
</div>
</div>
<div className="flex items-center gap-1.5 text-slate-400 text-sm whitespace-nowrap pt-1">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>12 نوفمبر</span>
</div>
</div>
<div className="flex gap-4">
<div className="flex-1">
<p className="text-base text-slate-600 leading-relaxed max-w-3xl">
                            صدر مبدأ جديد يتعلق بتقدير أتعاب المحاماة في القضايا التجارية التي تنتهي بالصلح. تم إضافة النص الكامل للمبدأ في الموسوعة تحت قسم "المبادئ التجارية".
                        </p>
</div>
<div className="hidden md:flex bg-slate-50 p-2 rounded-lg border border-slate-100">
<i className="w-5 h-5 text-slate-400" data-lucide="file-text"></i>
</div>
</div>
</div>
</div>

<div className="mt-10 flex items-center justify-center gap-2">
<button className="px-4 py-2 text-sm text-slate-500 hover:text-[#000E77] font-medium transition-colors">تحميل المزيد</button>
</div>
</main>


    </>
  );
}
