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



        // Init Icons
        lucide.createIcons();

        // Chart.js for the "Savings" Sparkline
        const ctx = document.getElementById('savingsChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4', '5', '6', '7'],
                datasets: [{
                    data: [10, 25, 20, 45, 30, 55, 40],
                    borderColor: '#14b8a6', // Teal
                    borderWidth: 2,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false }, tooltip: { enabled: false } },
                scales: {
                    x: { display: false },
                    y: { display: false, min: 0 }
                }
            }
        });
    
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
      

<aside className="w-[280px] bg-white flex flex-col h-full fixed right-0 top-0 z-30 py-8 pr-8 pl-4 transition-all duration-300">

<div className="h-12 flex items-center gap-3 mb-10 px-2">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white shadow-teal-200 shadow-lg">
<svg className="w-6 h-6 stroke-[2.5]" data-lucide="hexagon" fill="none"></svg>
</div>
<span className="font-bold text-2xl text-slate-900 tracking-tight">نكسوس</span>
</div>

<div className="flex-1 overflow-y-auto space-y-8">
<div>
<p className="px-2 text-xs font-medium text-slate-400 mb-4 tracking-wider">القائمة الرئيسية</p>
<nav className="space-y-1">

<a className="group flex items-center px-4 py-3.5 text-sm font-medium rounded-2xl bg-slate-100 text-slate-900 transition-all duration-200" href="#">
<svg className="ml-3 h-5 w-5 text-slate-900" data-lucide="layout-grid"></svg>
                        لوحة التحكم
                    </a>
<a className="group flex items-center px-4 py-3.5 text-sm font-medium rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200" href="#">
<svg className="ml-3 h-5 w-5 text-slate-400 group-hover:text-slate-600" data-lucide="users"></svg>
                        الموظفين
                    </a>
<a className="group flex items-center px-4 py-3.5 text-sm font-medium rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200" href="#">
<svg className="ml-3 h-5 w-5 text-slate-400 group-hover:text-slate-600" data-lucide="wallet"></svg>
                        الرواتب
                    </a>
<a className="group flex items-center px-4 py-3.5 text-sm font-medium rounded-2xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200" href="#">
<svg className="ml-3 h-5 w-5 text-slate-400 group-hover:text-slate-600" data-lucide="bar-chart-2"></svg>
                        الإحصائيات
                    </a>
</nav>
</div>

<div>
<p className="px-2 text-xs font-medium text-slate-400 mb-4 tracking-wider">الأقسام</p>
<nav className="space-y-2">
<a className="flex items-center px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">
<span className="w-2 h-2 rounded-full bg-orange-400 ml-3"></span>
                        التسويق
                    </a>
<a className="flex items-center px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">
<span className="w-2 h-2 rounded-full bg-indigo-400 ml-3"></span>
                        التطوير التقني
                    </a>
<a className="flex items-center px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">
<span className="w-2 h-2 rounded-full bg-teal-400 ml-3"></span>
                        الموارد البشرية
                    </a>
</nav>
</div>
</div>

<div className="mt-auto pt-6 space-y-2">
<a className="group flex items-center px-4 py-3 text-sm font-medium rounded-2xl text-slate-500 hover:text-slate-900 transition-all duration-200" href="#">
<svg className="ml-3 h-5 w-5 text-slate-400 group-hover:text-slate-600" data-lucide="settings"></svg>
                الإعدادات
            </a>
<a className="group flex items-center px-4 py-3 text-sm font-medium rounded-2xl text-slate-500 hover:text-red-600 transition-all duration-200" href="#">
<svg className="ml-3 h-5 w-5 text-slate-400 group-hover:text-red-500" data-lucide="log-out"></svg>
                تسجيل خروج
            </a>
</div>
</aside>

<main className="flex-1 mr-[280px] h-full overflow-y-auto bg-[#F8F9FB] p-8 md:p-10">
<div className="max-w-[1400px] mx-auto animate-enter">

<header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
<h1 className="text-3xl font-bold text-slate-900">التحليلات</h1>

<div className="bg-[#EAECEF] p-1 rounded-full flex items-center self-start md:self-center">
<button className="px-6 py-2 rounded-full bg-white text-slate-900 text-xs font-semibold shadow-sm transition-all">الاحصائيات الكاملة</button>
<button className="px-6 py-2 rounded-full text-slate-500 hover:text-slate-700 text-xs font-medium transition-all">ملخص النتائج</button>
</div>

<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors shadow-sm">
<svg className="w-5 h-5" data-lucide="plus"></svg>
</button>
<div className="relative">
<img alt="User" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm cursor-pointer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6653564f-d2bb-4c35-8fef-be58ac89ffe0_320w.jpg"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
</div>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

<div className="bg-white rounded-[2rem] p-6 border-2 border-dashed border-slate-200 relative group hover:border-teal-200 transition-colors h-[220px] flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<h3 className="font-bold text-lg text-slate-900">رواتب الفريق</h3>
<div className="flex items-center gap-2 mt-2">
<span className="bg-indigo-100 text-indigo-600 p-1 rounded-md text-[10px] font-bold">14</span>
<span className="text-xs text-slate-500">موافقة ديسمبر</span>
</div>
</div>
<svg className="w-5 h-5 text-slate-400 fill-slate-100" data-lucide="bell"></svg>
</div>
<div className="flex items-center -space-x-3 space-x-reverse">
<img alt="" className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-xs font-bold text-slate-600">25+</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-6 border-2 border-dashed border-slate-200 relative group hover:border-teal-200 transition-colors h-[220px] flex flex-col justify-between">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
<svg className="w-4 h-4" data-lucide="pie-chart"></svg>
</div>
<h3 className="font-bold text-lg text-slate-900">الميزانية</h3>
</div>
</div>

<div className="h-16 w-full relative">
<canvas id="savingsChart"></canvas>
</div>
<div className="flex items-end justify-between mt-2">
<div>
<span className="text-2xl font-bold text-slate-900 block tracking-tight">$5,839</span>
<span className="text-[10px] text-red-500 flex items-center font-medium mt-1">
<svg className="w-3 h-3 ml-1" data-lucide="trending-down"></svg>
                                11% الأسبوع الماضي
                            </span>
</div>
<button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform">
<svg className="w-5 h-5" data-lucide="arrow-left"></svg>
</button>
</div>
</div>

<div className="bg-white rounded-[2rem] p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] h-[220px] flex flex-col">
<div className="flex justify-between items-start mb-6">
<h3 className="font-bold text-lg text-slate-900 leading-tight">إحصائيات<br/>التوظيف</h3>
<span className="bg-teal-50 text-teal-600 px-2 py-1 rounded-lg text-xs font-semibold">+8%</span>
</div>
<div className="flex items-end justify-between flex-1 gap-3 px-2">

<div className="w-full flex flex-col items-center gap-2">
<div className="w-full bg-teal-100 rounded-t-lg h-8 relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">15%</div>
</div>
</div>
<div className="w-full flex flex-col items-center gap-2">
<div className="w-full bg-purple-100 rounded-t-lg h-14 relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">21%</div>
</div>
</div>
<div className="w-full flex flex-col items-center gap-2">
<div className="w-full bg-orange-400 rounded-t-lg h-24 relative shadow-orange-200 shadow-lg group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-600 font-bold">32%</div>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-[#2dd4bf] to-[#0d9488] rounded-[2rem] p-6 text-white relative overflow-hidden h-[220px] flex flex-col justify-between shadow-lg shadow-teal-100">
<div className="absolute top-0 left-0 w-full h-full opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '8px 8px'}}></div>
<svg className="w-6 h-6 text-white absolute top-6 left-6 opacity-80" data-lucide="sparkles"></svg>
<div className="relative z-10 mt-2">
<h3 className="text-3xl font-bold tracking-tight mb-1">$95.9</h3>
<p className="text-teal-50 text-xs font-medium">شهرياً</p>
</div>
<div className="relative z-10">
<p className="text-sm font-medium mb-4 leading-relaxed opacity-90">احصل على الخطة الأنسب لفريقك!</p>
<div className="flex gap-2">
<button className="flex-1 bg-black text-white text-xs font-semibold py-2.5 rounded-full hover:bg-slate-900 transition-colors">ترقية</button>
<button className="px-4 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold py-2.5 rounded-full hover:bg-white/30 transition-colors">تفاصيل</button>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h2 className="text-xl font-bold text-slate-900 mb-6">أحدث الرواتب</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white rounded-[2rem] p-5 flex items-center justify-between shadow-sm border border-slate-50 hover:shadow-md transition-shadow">
<div className="flex items-center gap-4">
<img alt="Emma" className="w-12 h-12 rounded-2xl object-cover bg-slate-100" src="https://i.pravatar.cc/150?u=emma"/>
<div>
<h4 className="font-bold text-slate-900 text-sm">سارة أحمد</h4>
<p className="text-xs text-slate-400 mt-0.5">9 مارس 2024</p>
</div>
</div>
<div className="font-bold text-slate-900 text-sm">$4,823</div>
<span className="px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold">مكتمل</span>
<button className="text-slate-300 hover:text-slate-600"><svg className="w-5 h-5" data-lucide="more-horizontal"></svg></button>
</div>

<div className="bg-white rounded-[2rem] p-5 flex items-center justify-between shadow-sm border border-slate-50 hover:shadow-md transition-shadow">
<div className="flex items-center gap-4">
<img alt="Justin" className="w-12 h-12 rounded-2xl object-cover bg-slate-100" src="https://i.pravatar.cc/150?u=justin"/>
<div>
<h4 className="font-bold text-slate-900 text-sm">عمر يوسف</h4>
<p className="text-xs text-slate-400 mt-0.5">2 مارس 2024</p>
</div>
</div>
<div className="font-bold text-slate-900 text-sm">$3,937</div>
<span className="px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold">قيد المعالجة</span>
<button className="text-slate-300 hover:text-slate-600"><svg className="w-5 h-5" data-lucide="more-horizontal"></svg></button>
</div>
</div>
</div>

<div className="bg-white rounded-[2.5rem] p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]">
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
<h2 className="text-xl font-bold text-slate-900">المعاملات المالية</h2>
<div className="relative">
<svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" data-lucide="search"></svg>
<input className="pr-9 pl-4 py-2.5 bg-[#F8F9FB] rounded-xl text-sm outline-none focus:ring-2 focus:ring-teal-500/20 w-full sm:w-64 transition-shadow" placeholder="بحث..." type="text"/>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="text-right text-xs text-slate-400 font-medium border-b border-slate-100">
<th className="pb-4 pr-2 font-normal w-10">
<input className="custom-checkbox w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-0" type="checkbox"/>
</th>
<th className="pb-4 pr-4 font-normal">المستلم</th>
<th className="pb-4 font-normal">النوع</th>
<th className="pb-4 font-normal">الحالة</th>
<th className="pb-4 font-normal">التاريخ</th>
<th className="pb-4 font-normal">المبلغ</th>
<th className="pb-4 pl-4 font-normal text-left">إجراء</th>
</tr>
</thead>
<tbody className="text-sm">

<tr className="group hover:bg-slate-50/50 transition-colors">
<td className="py-4 pr-2 border-b border-slate-50">
<input className="custom-checkbox w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-0" type="checkbox"/>
</td>
<td className="py-4 pr-4 border-b border-slate-50">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-xl object-cover" src="https://i.pravatar.cc/150?u=emma"/>
<span className="font-semibold text-slate-800">سارة أحمد</span>
</div>
</td>
<td className="py-4 border-b border-slate-50 text-slate-500">راتب شهري</td>
<td className="py-4 border-b border-slate-50">
<span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold">قيد الانتظار</span>
</td>
<td className="py-4 border-b border-slate-50 text-slate-500 font-medium">19 فبراير 2023</td>
<td className="py-4 border-b border-slate-50 font-bold text-slate-900">$3,892</td>
<td className="py-4 border-b border-slate-50 pl-4 text-left">
<button className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-500 hover:bg-white hover:border-slate-300 transition-colors bg-transparent">تفاصيل</button>
</td>
</tr>

<tr className="group hover:bg-slate-50/50 transition-colors">
<td className="py-4 pr-2 border-b border-slate-50">
<input className="custom-checkbox w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-0" type="checkbox"/>
</td>
<td className="py-4 pr-4 border-b border-slate-50">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-xl object-cover" src="https://i.pravatar.cc/150?u=adrian"/>
<span className="font-semibold text-slate-800">أدريان درين</span>
</div>
</td>
<td className="py-4 border-b border-slate-50 text-slate-500">مكافأة سنوية</td>
<td className="py-4 border-b border-slate-50">
<span className="px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-semibold">مكتمل</span>
</td>
<td className="py-4 border-b border-slate-50 text-slate-500 font-medium">18 فبراير 2023</td>
<td className="py-4 border-b border-slate-50 font-bold text-slate-900">$1,073</td>
<td className="py-4 border-b border-slate-50 pl-4 text-left">
<button className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-500 hover:bg-white hover:border-slate-300 transition-colors bg-transparent">تفاصيل</button>
</td>
</tr>

<tr className="group hover:bg-slate-50/50 transition-colors">
<td className="py-4 pr-2 border-b border-transparent">
<input className="custom-checkbox w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-0" type="checkbox"/>
</td>
<td className="py-4 pr-4 border-b border-transparent">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-xl object-cover" src="https://i.pravatar.cc/150?u=roxanne"/>
<span className="font-semibold text-slate-800">روكسان هيلز</span>
</div>
</td>
<td className="py-4 border-b border-transparent text-slate-500">راتب شهري</td>
<td className="py-4 border-b border-transparent">
<span className="px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-semibold">مكتمل</span>
</td>
<td className="py-4 border-b border-transparent text-slate-500 font-medium">16 أبريل 2023</td>
<td className="py-4 border-b border-transparent font-bold text-slate-900">$2,790</td>
<td className="py-4 border-b border-transparent pl-4 text-left">
<button className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-500 hover:bg-white hover:border-slate-300 transition-colors bg-transparent">تفاصيل</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>


    </>
  );
}
