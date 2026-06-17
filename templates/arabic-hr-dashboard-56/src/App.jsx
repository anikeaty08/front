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
      

<aside className="w-64 bg-slate-900 h-full flex flex-col justify-between flex-shrink-0 hidden lg:flex border-l border-slate-800">
<div>

<div className="h-16 flex items-center px-6 border-b border-slate-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-slate-900">
<i className="w-5 h-5" data-lucide="command" strokeWidth="1.5"></i>
</div>
<span className="text-white text-lg font-medium tracking-tight">HR Space</span>
</div>
</div>

<nav className="p-4 space-y-1">

<a className="flex items-center gap-3 px-3 py-2.5 bg-slate-800 text-white rounded-lg transition-colors group" href="#">
<i className="w-5 h-5" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
<span className="text-base font-normal">النظرة العامة</span>
</a>

<a className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-white transition-colors" data-lucide="briefcase" strokeWidth="1.5"></i>
<span className="text-base font-normal">الوظائف</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-white transition-colors" data-lucide="file-text" strokeWidth="1.5"></i>
<span className="text-base font-normal">طلبات التوظيف</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-white transition-colors" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-base font-normal">الموظفين</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-white transition-colors" data-lucide="banknote" strokeWidth="1.5"></i>
<span className="text-base font-normal">الرواتب</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-white transition-colors" data-lucide="receipt" strokeWidth="1.5"></i>
<span className="text-base font-normal">المصاريف</span>
</a>
</nav>
</div>

<div className="p-4 border-t border-slate-800">
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors group" href="#">
<i className="w-5 h-5 group-hover:text-white transition-colors" data-lucide="settings" strokeWidth="1.5"></i>
<span className="text-base font-normal">الإعدادات</span>
</a>
<div className="mt-4 flex items-center gap-3 px-3">
<div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-medium">OA</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium">Odama Studio</span>
<span className="text-xs text-slate-500">Admin</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto">

<div className="lg:hidden h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sticky top-0 z-20">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-slate-700" data-lucide="menu" strokeWidth="1.5"></i>
<span className="font-semibold text-slate-900">HR Space</span>
</div>
<div className="w-8 h-8 rounded-full bg-indigo-500"></div>
</div>
<div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8">

<header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">النظرة العامة</h1>
<p className="text-slate-500 text-base mt-1">ملخص شامل عن حالة التوظيف والموارد البشرية</p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-base font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2 shadow-sm">
<i className="w-4 h-4" data-lucide="file-bar-chart" strokeWidth="1.5"></i>
                        عرض التقارير
                    </button>
<button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-base font-medium hover:bg-slate-800 transition-all shadow-md shadow-slate-900/10 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
                        إنشاء وظيفة
                    </button>
</div>
</header>

<section className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<span className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-sm font-medium">
<i className="w-3 h-3" data-lucide="arrow-up" strokeWidth="1.5"></i>
                            12%
                        </span>
</div>
<div>
<span className="block text-slate-500 text-base font-medium mb-1">عدد الموظفين</span>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">124</h3>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-50 rounded-lg text-blue-600">
<i className="w-6 h-6" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<span className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-sm font-medium">
<i className="w-3 h-3" data-lucide="arrow-up" strokeWidth="1.5"></i>
                            4%
                        </span>
</div>
<div>
<span className="block text-slate-500 text-base font-medium mb-1">الوظائف النشطة</span>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">18</h3>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-purple-50 rounded-lg text-purple-600">
<i className="w-6 h-6" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<span className="inline-flex items-center gap-1 text-rose-600 bg-rose-50 px-2 py-1 rounded-md text-sm font-medium">
<i className="w-3 h-3" data-lucide="arrow-down" strokeWidth="1.5"></i>
                            2%
                        </span>
</div>
<div>
<span className="block text-slate-500 text-base font-medium mb-1">طلبات التوظيف</span>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">842</h3>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold text-slate-900">طلبات التوظيف حسب الوظيفة</h3>
<div className="bg-slate-100 rounded-lg p-0.5 flex">
<button className="px-3 py-1 text-sm bg-white shadow-sm rounded-md text-slate-800 font-medium">أسبوعي</button>
<button className="px-3 py-1 text-sm text-slate-500 font-medium hover:text-slate-700">شهري</button>
</div>
</div>
<div className="space-y-5">

<div>
<div className="flex justify-between text-base mb-2">
<span className="text-slate-700 font-medium">مصمم منتجات</span>
<span className="text-slate-500">45%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5">
<div className="bg-slate-900 h-2.5 rounded-full" style={{width: '45%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-base mb-2">
<span className="text-slate-700 font-medium">مطور واجهات</span>
<span className="text-slate-500">32%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5">
<div className="bg-indigo-500 h-2.5 rounded-full" style={{width: '32%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-base mb-2">
<span className="text-slate-700 font-medium">مدير مشروع</span>
<span className="text-slate-500">23%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5">
<div className="bg-purple-400 h-2.5 rounded-full" style={{width: '23%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-base mb-2">
<span className="text-slate-700 font-medium">أخصائي تسويق</span>
<span className="text-slate-500">18%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5">
<div className="bg-slate-300 h-2.5 rounded-full" style={{width: '18%'}}></div>
</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold text-slate-900">عدد طلبات التوظيف شهريًا</h3>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="text-sm text-slate-500">2024</span>
</div>
</div>

<div className="flex-1 flex items-end justify-between gap-2 h-48 relative border-b border-dashed border-slate-200 pb-2">

<div className="absolute inset-0 w-full h-full flex flex-col justify-between pointer-events-none opacity-40">
<div className="border-t border-slate-100 w-full h-0"></div>
<div className="border-t border-slate-100 w-full h-0"></div>
<div className="border-t border-slate-100 w-full h-0"></div>
<div className="border-t border-slate-100 w-full h-0"></div>
</div>

<div className="w-full flex items-end justify-between h-full z-10 px-2">
<div className="w-8 bg-indigo-50 rounded-t-sm h-[30%] relative group">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded transition-opacity">30</div>
</div>
<div className="w-8 bg-indigo-100 rounded-t-sm h-[45%] relative group">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded transition-opacity">45</div>
</div>
<div className="w-8 bg-indigo-200 rounded-t-sm h-[35%] relative group">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded transition-opacity">35</div>
</div>
<div className="w-8 bg-indigo-300 rounded-t-sm h-[60%] relative group">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded transition-opacity">60</div>
</div>
<div className="w-8 bg-indigo-400 rounded-t-sm h-[75%] relative group">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded transition-opacity">75</div>
</div>
<div className="w-8 bg-indigo-500 rounded-t-sm h-[50%] relative group">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded transition-opacity">50</div>
</div>
<div className="w-8 bg-indigo-600 rounded-t-sm h-[85%] relative group">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded transition-opacity">85</div>
</div>
</div>
</div>

<div className="flex justify-between mt-2 text-sm text-slate-400 px-2">
<span>يناير</span>
<span>فبراير</span>
<span>مارس</span>
<span>أبريل</span>
<span>مايو</span>
<span>يونيو</span>
<span>يوليو</span>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-slate-900">آخر الأنشطة</h3>
<a className="text-indigo-600 text-sm font-medium hover:text-indigo-700" href="#">عرض الكل</a>
</div>
<div className="space-y-6">

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
<i className="w-5 h-5" data-lucide="user-plus" strokeWidth="1.5"></i>
</div>
<div className="flex-1 pt-1">
<div className="flex justify-between items-start">
<h4 className="text-base font-medium text-slate-900">متقدم جديد على وظيفة</h4>
<span className="text-sm text-slate-400">منذ 5 دقائق</span>
</div>
<p className="text-slate-500 text-sm mt-0.5">قام <span className="font-medium text-slate-700">أحمد محمد</span> بالتقديم على وظيفة مصمم منتجات.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
<i className="w-5 h-5" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<div className="flex-1 pt-1">
<div className="flex justify-between items-start">
<h4 className="text-base font-medium text-slate-900">إنشاء وظيفة جديدة</h4>
<span className="text-sm text-slate-400">منذ ساعتين</span>
</div>
<p className="text-slate-500 text-sm mt-0.5">تم نشر وظيفة <span className="font-medium text-slate-700">مدير مبيعات</span> بنجاح.</p>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div className="flex-1 pt-1">
<div className="flex justify-between items-start">
<h4 className="text-base font-medium text-slate-900">إضافة موظف جديد</h4>
<span className="text-sm text-slate-400">اليوم 09:30 ص</span>
</div>
<p className="text-slate-500 text-sm mt-0.5">تم انضمام <span className="font-medium text-slate-700">سارة علي</span> إلى فريق التطوير.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-900 text-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
<div>
<h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
<i className="w-5 h-5 text-yellow-400" data-lucide="sparkles" strokeWidth="1.5"></i>
                            رؤى سريعة
                        </h3>
<div className="space-y-6">
<div className="pb-4 border-b border-slate-700">
<span className="text-slate-400 text-sm block mb-1">أعلى وظيفة استقبالًا للطلبات</span>
<div className="flex items-center justify-between">
<span className="text-base font-medium">مطور واجهات</span>
<span className="px-2 py-0.5 bg-slate-800 rounded text-sm text-slate-300">124 طلب</span>
</div>
</div>
<div className="pb-4 border-b border-slate-700">
<span className="text-slate-400 text-sm block mb-1">آخر وظيفة تم نشرها</span>
<div className="flex items-center justify-between">
<span className="text-base font-medium">مدير تسويق</span>
<span className="px-2 py-0.5 bg-slate-800 rounded text-sm text-slate-300">نشط</span>
</div>
</div>
<div>
<span className="text-slate-400 text-sm block mb-1">أكثر قسم نشاطًا</span>
<div className="flex items-center justify-between">
<span className="text-base font-medium">التكنولوجيا والهندسة</span>
<i className="w-4 h-4 text-emerald-400" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-4 border-t border-slate-800">
<button className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors">عرض جميع التحليلات</button>
</div>
</div>
</section>
</div>
</main>


    </>
  );
}
