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
      

<aside className="flex-col hidden md:flex bg-white w-64 border-slate-200 border-l z-20 shadow-sm">
<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-3 text-indigo-600">
<div className="p-1.5 bg-indigo-50 rounded-lg">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h.01"></path><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path><path d="m20 7 2 .5-2 .5"></path><path d="M10 18v3"></path><path d="M14 17.75V21"></path><path d="M7 18a6 6 0 0 0 3.84-10.61"></path></svg>
</div>
<span className="font-bold tracking-tight text-lg text-slate-900">بيجون أوس</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto pt-6 px-4 space-y-1">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg group transition-all text-indigo-600 bg-indigo-50" id="nav-dashboard" onclick="switchTab('dashboard')">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
                لوحة القيادة
            </button>
<button className="nav-item flex gap-3 group transition-all hover:bg-slate-50 text-sm font-medium text-slate-600 w-full rounded-lg px-3 py-2.5 items-center" id="nav-inventory" onclick="switchTab('inventory')">
<svg className="w-5 h-5 text-slate-400 group-hover:text-slate-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h.01"></path><path d="M3 12h.01"></path><path d="M3 19h.01"></path><path d="M8 5h13"></path><path d="M8 12h13"></path><path d="M8 19h13"></path></svg>
                سجل الطيور
            </button>
<button className="nav-item flex gap-3 group transition-all hover:bg-slate-50 text-sm font-medium text-slate-600 w-full rounded-lg px-3 py-2.5 items-center" id="nav-lineage" onclick="switchTab('lineage')">
<svg className="w-5 h-5 text-slate-400 group-hover:text-slate-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path></svg>
                السلالات
            </button>
</nav>
<div className="p-4 border-t border-slate-100 bg-slate-50/50">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold bg-indigo-100 text-indigo-700 border border-indigo-200 shadow-sm">أ.م</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-800">أحمد محمد</span>
<span className="text-xs text-slate-500">مدير النظام</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden bg-slate-50/50">

<header className="h-16 border-b flex items-center justify-between px-4 md:hidden flex-shrink-0 bg-white border-slate-200 z-20">
<div className="flex items-center gap-2 text-indigo-600">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h.01"></path><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path><path d="m20 7 2 .5-2 .5"></path><path d="M10 18v3"></path><path d="M14 17.75V21"></path><path d="M7 18a6 6 0 0 0 3.84-10.61"></path></svg>
<span className="font-bold text-lg">بيجون أوس</span>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8">

<div className="view-section fade-in space-y-8 max-w-6xl mx-auto" id="view-dashboard">
<div className="flex flex-col gap-1">
<h1 className="text-2xl font-bold text-slate-900">نظرة عامة</h1>
<p className="text-slate-500">إحصائيات الإنتاج ومقاييس النمو الحالية.</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
<div className="p-5 rounded-xl border border-slate-200 bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-md transition-shadow">
<div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">إجمالي الطيور</div>
<div className="flex items-baseline gap-2">
<div className="text-3xl font-bold text-slate-900" id="stat-total">0</div>
<span className="text-xs text-green-600 font-medium bg-green-50 px-1.5 py-0.5 rounded-md">+12%</span>
</div>
</div>
<div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-blue-500 ring-4 ring-blue-50"></span>
<div className="text-xs font-semibold uppercase tracking-wider text-slate-500">الذكور</div>
</div>
<div className="text-3xl font-bold text-slate-900" id="stat-males">0</div>
</div>
<div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-pink-500 ring-4 ring-pink-50"></span>
<div className="text-xs font-semibold uppercase tracking-wider text-slate-500">الإناث</div>
</div>
<div className="text-3xl font-bold text-slate-900" id="stat-females">0</div>
</div>
<div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-yellow-500 ring-4 ring-yellow-50"></span>
<div className="text-xs font-semibold uppercase tracking-wider text-slate-500">الفراخ</div>
</div>
<div className="text-3xl font-bold text-slate-900" id="stat-chicks">0</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="font-bold text-slate-800">حسب السلالة</h3>
<button className="text-xs text-indigo-600 font-medium hover:text-indigo-800">عرض التفاصيل</button>
</div>
<div className="space-y-5" id="stats-lineage-list"></div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="font-bold text-slate-800">الإنتاج السنوي</h3>
<select className="text-xs border-none bg-slate-50 rounded text-slate-600 focus:ring-0 cursor-pointer"><option>آخر 5 سنوات</option></select>
</div>
<div className="space-y-5" id="stats-year-list"></div>
</div>
</div>
</div>

<div className="view-section hidden fade-in space-y-6 max-w-6xl mx-auto" id="view-inventory">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-bold text-slate-900">سجل الطيور</h1>
<p className="text-slate-500 mt-1">إدارة بيانات الحمام وتتبع النسب.</p>
</div>
<button className="inline-flex items-center justify-center gap-2 text-sm font-semibold h-10 px-5 rounded-lg transition-all shadow-sm bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-md hover:-translate-y-0.5" onclick="openModal()">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                        إضافة طائر جديد
                    </button>
</div>
<div className="flex flex-col md:flex-row gap-3 bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
<div className="relative flex-1">
<svg className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="w-full h-10 pr-10 pl-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all bg-slate-50 text-slate-900 placeholder-slate-400" id="search-input" placeholder="بحث برقم الحجل..." type="text"/>
</div>
<select className="h-10 px-4 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50 text-slate-700" id="filter-gender">
<option value="all">كل الأجناس</option>
<option value="Male">ذكر</option>
<option value="Female">أنثى</option>
<option value="Chick">فرخ</option>
</select>
</div>
<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-sm text-right">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-5 py-4 font-semibold text-slate-600 w-32">رقم الحجل</th>
<th className="px-5 py-4 font-semibold text-slate-600 w-24">الجنس</th>
<th className="px-5 py-4 font-semibold text-slate-600">السلالة</th>
<th className="px-5 py-4 font-semibold text-slate-600 w-24">السنة</th>
<th className="px-5 py-4 font-semibold text-slate-600">الأبوان (الأب / الأم)</th>
<th className="px-5 py-4 font-semibold text-slate-600 w-24 text-left">الإجراء</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100" id="inventory-table-body">

</tbody>
</table>
</div>
<div className="hidden py-12 px-6 text-center" id="empty-state">
<div className="mx-auto w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3">
<svg className="text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
<h3 className="text-slate-900 font-medium">لا توجد نتائج</h3>
<p className="text-sm text-slate-500 mt-1">حاول البحث برقم آخر أو تغيير الفلتر.</p>
</div>
</div>
</div>

<div className="view-section hidden fade-in space-y-6 max-w-6xl mx-auto" id="view-lineage">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-bold text-slate-900">إدارة السلالات</h1>
<p className="text-slate-500 mt-1">تعريف وتتبع خطوط الدم والعائلات.</p>
</div>
<button className="inline-flex items-center justify-center gap-2 border text-sm font-semibold h-10 px-5 rounded-lg transition-all shadow-sm bg-white border-slate-200 hover:bg-slate-50 text-slate-700 hover:border-slate-300" onclick="addLineage()">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                        سلالة جديدة
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="col-span-2 border border-slate-200 rounded-xl shadow-sm overflow-hidden bg-white">
<table className="w-full text-sm text-right">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-6 py-4 font-semibold text-slate-600">اسم السلالة</th>
<th className="px-6 py-4 font-semibold text-slate-600 w-32 text-left">عدد الطيور</th>
</tr></thead></table></div></div></div></div></main>
    </>
  );
}
