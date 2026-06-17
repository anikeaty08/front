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
      
<div className="flex h-screen overflow-hidden">

<aside className="w-64 bg-white border-l border-slate-100 hidden md:flex flex-col justify-between shadow-sm z-20">
<div>

<div className="h-20 flex items-center px-8 border-b border-slate-50">
<div className="flex items-center gap-3 text-indigo-600">
<i className="h-8 w-8 fill-indigo-600/20 stroke-[1.5]" data-lucide="hexagon"></i>
<span className="text-xl font-semibold tracking-tight text-slate-900">نظام الموارد</span>
</div>
</div>

<nav className="p-4 space-y-2 mt-4">

<a className="flex items-center gap-4 px-4 py-3 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-200 transition-all group" href="#">
<i className="h-5 w-5 stroke-[1.5]" data-lucide="layout-grid"></i>
<span className="font-medium text-base">النظرة العامة</span>
</a>

<a className="flex items-center gap-4 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-colors group" href="#">
<i className="h-5 w-5 stroke-[1.5] group-hover:stroke-indigo-600" data-lucide="briefcase"></i>
<span className="font-medium text-base">الوظائف</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-colors group" href="#">
<i className="h-5 w-5 stroke-[1.5] group-hover:stroke-indigo-600" data-lucide="file-text"></i>
<span className="font-medium text-base">طلبات التوظيف</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-colors group" href="#">
<i className="h-5 w-5 stroke-[1.5] group-hover:stroke-indigo-600" data-lucide="users"></i>
<span className="font-medium text-base">الموظفين</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-colors group" href="#">
<i className="h-5 w-5 stroke-[1.5] group-hover:stroke-indigo-600" data-lucide="banknote"></i>
<span className="font-medium text-base">الرواتب</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-colors group" href="#">
<i className="h-5 w-5 stroke-[1.5] group-hover:stroke-indigo-600" data-lucide="pie-chart"></i>
<span className="font-medium text-base">المصاريف</span>
</a>
</nav>
</div>
<div className="p-4 border-t border-slate-50">
<a className="flex items-center gap-4 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-colors group" href="#">
<i className="h-5 w-5 stroke-[1.5] group-hover:stroke-indigo-600" data-lucide="settings"></i>
<span className="font-medium text-base">الإعدادات</span>
</a>
</div>
</aside>

<main className="flex-1 h-full overflow-y-auto bg-slate-50/50">

<header className="sticky top-0 z-10 bg-slate-50/90 backdrop-blur-md px-8 py-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">النظرة العامة</h1>
<p className="text-base text-slate-500 mt-1">ملخص شامل عن حالة التوظيف والموارد البشرية في الشركة</p>
</div>
<div className="flex items-center gap-3">
<button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 px-5 py-2.5 rounded-lg text-base font-medium transition-colors shadow-sm flex items-center gap-2">
<i className="h-4 w-4" data-lucide="bar-chart-2"></i>
                        عرض التقارير
                    </button>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-base font-medium shadow-md shadow-indigo-100 transition-all flex items-center gap-2">
<i className="h-4 w-4" data-lucide="plus"></i>
                        إنشاء وظيفة
                    </button>
</div>
</header>
<div className="p-8 space-y-8 max-w-7xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_-4px_rgba(6,81,237,0.1)] border border-slate-100/50 hover:shadow-lg transition-shadow duration-300">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
<i className="h-6 w-6 stroke-[1.5]" data-lucide="users"></i>
</div>
<span className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
<i className="h-3 w-3 me-1" data-lucide="arrow-up"></i>
                                12%
                            </span>
</div>
<h3 className="text-slate-500 text-base font-medium mb-1">عدد الموظفين</h3>
<p className="text-3xl font-semibold text-slate-900 tracking-tight">1,240</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_-4px_rgba(6,81,237,0.1)] border border-slate-100/50 hover:shadow-lg transition-shadow duration-300">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-orange-50 rounded-xl text-orange-500">
<i className="h-6 w-6 stroke-[1.5]" data-lucide="briefcase"></i>
</div>
</div>
<h3 className="text-slate-500 text-base font-medium mb-1">الوظائف النشطة</h3>
<p className="text-3xl font-semibold text-slate-900 tracking-tight">24</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-[0_2px_10px_-4px_rgba(6,81,237,0.1)] border border-slate-100/50 hover:shadow-lg transition-shadow duration-300">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-blue-50 rounded-xl text-blue-500">
<i className="h-6 w-6 stroke-[1.5]" data-lucide="file-input"></i>
</div>
<span className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
<i className="h-3 w-3 me-1" data-lucide="arrow-up"></i>
                                8%
                            </span>
</div>
<h3 className="text-slate-500 text-base font-medium mb-1">طلبات التوظيف</h3>
<p className="text-3xl font-semibold text-slate-900 tracking-tight">856</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
<div className="flex justify-between items-center mb-8">
<h3 className="text-lg font-semibold text-slate-800">طلبات التوظيف حسب الوظيفة</h3>
<button className="text-slate-400 hover:text-indigo-600 transition-colors">
<i className="h-5 w-5" data-lucide="more-horizontal"></i>
</button>
</div>

<div className="space-y-5">

<div>
<div className="flex justify-between text-base mb-2">
<span className="text-slate-600 font-medium">مهندس برمجيات واجهة أمامية</span>
<span className="text-slate-900 font-semibold">142</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-indigo-500 h-2.5 rounded-full" style={{width: '85%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-base mb-2">
<span className="text-slate-600 font-medium">مدير تسويق رقمي</span>
<span className="text-slate-900 font-semibold">98</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-indigo-400 h-2.5 rounded-full" style={{width: '65%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-base mb-2">
<span className="text-slate-600 font-medium">مصمم تجربة المستخدم</span>
<span className="text-slate-900 font-semibold">76</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-indigo-300 h-2.5 rounded-full" style={{width: '45%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-base mb-2">
<span className="text-slate-600 font-medium">محاسب مالي</span>
<span className="text-slate-900 font-semibold">45</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-indigo-200 h-2.5 rounded-full" style={{width: '30%'}}></div>
</div>
</div>
</div>
</div>

<div className="col-span-1 bg-white p-6 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden">
<div className="flex justify-between items-center mb-6 relative z-10">
<h3 className="text-lg font-semibold text-slate-800">التفاعل الشهري</h3>
<div className="bg-slate-50 text-slate-500 text-xs px-2 py-1 rounded-md border border-slate-200">شهري</div>
</div>
<div className="mt-8 relative h-48">

<svg className="w-full h-full drop-shadow-sm" preserveaspectratio="none" viewbox="0 0 200 100">
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#6366f1" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#6366f1" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M0,80 C30,75 50,40 70,50 C100,65 130,20 160,30 C180,35 190,10 200,5" fill="none" stroke="#6366f1" strokeLinecap="round" strokeWidth="3"></path>

<path d="M0,80 C30,75 50,40 70,50 C100,65 130,20 160,30 C180,35 190,10 200,5 V100 H0 Z" fill="url(#gradient)" style={{mixBlendMode: 'multiply'}}></path>
</svg>

<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded shadow-lg transform -translate-y-2">
                                80 طلب
                            </div>
</div>
<div className="flex justify-between text-xs text-slate-400 mt-2 px-1">
<span>يناير</span>
<span>أبريل</span>
<span>يوليو</span>
<span>أكتوبر</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-2xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold text-slate-800">آخر الأنشطة</h3>
<a className="text-sm font-medium text-indigo-600 hover:text-indigo-700" href="#">عرض الكل</a>
</div>
<div className="relative pl-4 space-y-6 before:absolute before:right-6 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">

<div className="relative flex gap-4 items-start">
<div className="absolute -right-[0.4rem] mt-1.5 h-3 w-3 rounded-full bg-white border-2 border-indigo-500 z-10"></div>
<div className="h-10 w-10 min-w-[2.5rem] rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<i className="h-5 w-5 stroke-[1.5]" data-lucide="user-plus"></i>
</div>
<div>
<p className="text-base font-medium text-slate-900">متقدم جديد: <span className="text-slate-600 font-normal">أحمد محمد لوظيفة "مصمم جرافيك"</span></p>
<span className="text-xs text-slate-400">منذ 5 دقائق</span>
</div>
</div>

<div className="relative flex gap-4 items-start">
<div className="absolute -right-[0.4rem] mt-1.5 h-3 w-3 rounded-full bg-slate-200 z-10"></div>
<div className="h-10 w-10 min-w-[2.5rem] rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
<i className="h-5 w-5 stroke-[1.5]" data-lucide="briefcase"></i>
</div>
<div>
<p className="text-base font-medium text-slate-900">وظيفة جديدة: <span className="text-slate-600 font-normal">تم نشر وظيفة "مدير مبيعات"</span></p>
<span className="text-xs text-slate-400">منذ ساعتين</span>
</div>
</div>

<div className="relative flex gap-4 items-start">
<div className="absolute -right-[0.4rem] mt-1.5 h-3 w-3 rounded-full bg-slate-200 z-10"></div>
<div className="h-10 w-10 min-w-[2.5rem] rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
<i className="h-5 w-5 stroke-[1.5]" data-lucide="check-circle"></i>
</div>
<div>
<p className="text-base font-medium text-slate-900">إضافة موظف: <span className="text-slate-600 font-normal">تم تعيين سارة علي في قسم IT</span></p>
<span className="text-xs text-slate-400">اليوم، 09:30 صباحًا</span>
</div>
</div>
</div>
</div>

<div className="col-span-1 flex flex-col gap-4">
<div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl shadow-lg text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
<h3 className="text-base font-medium text-slate-200 mb-4 flex items-center gap-2">
<i className="h-4 w-4 text-yellow-400" data-lucide="zap"></i>
                                رؤى سريعة
                            </h3>
<div className="space-y-4">
<div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/5">
<p className="text-xs text-slate-300 mb-1">أعلى وظيفة طلباً</p>
<p className="text-lg font-semibold">مهندس برمجيات</p>
<div className="text-xs text-emerald-300 mt-1 flex items-center">
<i className="h-3 w-3 me-1" data-lucide="trending-up"></i>
                                        +24 طلب هذا الأسبوع
                                    </div>
</div>
<div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/5">
<p className="text-xs text-slate-300 mb-1">أكثر الأقسام نشاطاً</p>
<p className="text-lg font-semibold">قسم التقنية</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
