import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Tajawal', 'sans-serif'],
},
colors: {
brand: {
lime: '#c1ff72',
dark: '#1a1a1a',
},
neutral: {
50: '#fafafa',
100: '#f5f5f5',
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#171717',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-neutral-50 border-l border-neutral-200 h-screen flex flex-col flex-shrink-0 z-20">

<div className="h-16 flex items-center px-6 border-b border-neutral-100">
<div className="flex items-center gap-2 text-xl font-bold tracking-tight text-neutral-900">
<div className="w-6 h-6 rounded bg-[#c1ff72] flex items-center justify-center text-neutral-900">
<iconify-icon icon="lucide:hexagon" width="16"></iconify-icon>
</div>
<span>HR<span className="text-neutral-400">System</span></span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">

<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg bg-[#c1ff72]/20 text-neutral-900 border border-[#c1ff72]/30 group transition-all" href="#">
<iconify-icon className="text-neutral-800" icon="lucide:layout-dashboard" width="18"></iconify-icon>
                النظرة العامة
            </a>

<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-all group" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-800 transition-colors" icon="lucide:briefcase" width="18"></iconify-icon>
                الوظائف
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-all group" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-800 transition-colors" icon="lucide:file-text" width="18"></iconify-icon>
                طلبات التوظيف
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-all group" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-800 transition-colors" icon="lucide:users" width="18"></iconify-icon>
                الموظفين
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-all group" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-800 transition-colors" icon="lucide:banknote" width="18"></iconify-icon>
                الرواتب
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-all group" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-800 transition-colors" icon="lucide:receipt" width="18"></iconify-icon>
                المصاريف
            </a>
<div className="pt-4 mt-4 border-t border-neutral-100">
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-all group" href="#">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-800 transition-colors" icon="lucide:settings" width="18"></iconify-icon>
                    الإعدادات
                </a>
</div>
</nav>

<div className="p-4 border-t border-neutral-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden border border-neutral-300">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=11"/>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-neutral-900">أحمد محمد</span>
<span className="text-[10px] text-neutral-500">مدير الموارد البشرية</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 h-screen overflow-y-auto relative">

<header className="sticky top-0 z-30 bg-[#fafafa]/80 backdrop-blur-md border-b border-neutral-200/60 px-8 py-5 flex items-center justify-between">
<div>
<h1 className="text-2xl font-bold text-neutral-900 tracking-tight mb-1">النظرة العامة</h1>
<p className="text-sm text-neutral-500 font-medium">ملخص شامل عن حالة التوظيف والموارد البشرية</p>
</div>
<div className="flex items-center gap-3">
<button className="bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-neutral-700 px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm flex items-center gap-2">
<iconify-icon icon="lucide:file-bar-chart" width="16"></iconify-icon>
                    عرض التقارير
                </button>
<button className="bg-[#c1ff72] hover:bg-[#b0f060] text-neutral-900 px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm flex items-center gap-2 group">
<iconify-icon className="group-hover:rotate-90 transition-transform" icon="lucide:plus" width="16"></iconify-icon>
                    إنشاء وظيفة
                </button>
</div>
</header>

<div className="p-8 max-w-[1600px] mx-auto space-y-8 pb-20">

<section className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow group animate-fade-in" style={{animationDelay: '0s'}}>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-500 group-hover:text-neutral-900 group-hover:border-neutral-300 transition-colors">
<iconify-icon icon="lucide:users" width="20"></iconify-icon>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-green-50 text-green-700 border border-green-100">
<iconify-icon icon="lucide:arrow-up" width="10"></iconify-icon> 12%
                        </span>
</div>
<div>
<span className="block text-3xl font-bold text-neutral-900 tracking-tight mb-1">142</span>
<span className="text-sm text-neutral-500 font-medium">إجمالي الموظفين</span>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow group animate-fade-in" style={{animationDelay: '0.1s'}}>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-500 group-hover:text-neutral-900 group-hover:border-neutral-300 transition-colors">
<iconify-icon icon="lucide:briefcase" width="20"></iconify-icon>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-neutral-100 text-neutral-600 border border-neutral-200">
                            نشط
                        </span>
</div>
<div>
<span className="block text-3xl font-bold text-neutral-900 tracking-tight mb-1">8</span>
<span className="text-sm text-neutral-500 font-medium">الوظائف المفتوحة</span>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow group animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-500 group-hover:text-neutral-900 group-hover:border-neutral-300 transition-colors">
<iconify-icon icon="lucide:file-text" width="20"></iconify-icon>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-green-50 text-green-700 border border-green-100">
<iconify-icon icon="lucide:arrow-up" width="10"></iconify-icon> 24%
                        </span>
</div>
<div>
<span className="block text-3xl font-bold text-neutral-900 tracking-tight mb-1">853</span>
<span className="text-sm text-neutral-500 font-medium">طلبات التوظيف</span>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm animate-fade-in" style={{animationDelay: '0.3s'}}>
<div className="flex items-center justify-between mb-6">
<h3 className="text-base font-semibold text-neutral-900">طلبات التوظيف حسب الوظيفة</h3>
<button className="text-neutral-400 hover:text-neutral-600"><iconify-icon icon="lucide:more-horizontal"></iconify-icon></button>
</div>
<div className="space-y-5">

<div>
<div className="flex justify-between text-xs font-medium mb-1.5 text-neutral-600">
<span>مصمم واجهة مستخدم (UI/UX)</span>
<span>142 طلب</span>
</div>
<div className="w-full bg-neutral-100 rounded-full h-2">
<div className="bg-neutral-800 h-2 rounded-full" style={{width: '75%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs font-medium mb-1.5 text-neutral-600">
<span>مطور واجهات أمامية (Frontend)</span>
<span>98 طلب</span>
</div>
<div className="w-full bg-neutral-100 rounded-full h-2">
<div className="bg-[#c1ff72] h-2 rounded-full" style={{width: '55%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs font-medium mb-1.5 text-neutral-600">
<span>مدير تسويق رقمي</span>
<span>65 طلب</span>
</div>
<div className="w-full bg-neutral-100 rounded-full h-2">
<div className="bg-neutral-400 h-2 rounded-full" style={{width: '35%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs font-medium mb-1.5 text-neutral-600">
<span>محاسب مالي</span>
<span>42 طلب</span>
</div>
<div className="w-full bg-neutral-100 rounded-full h-2">
<div className="bg-neutral-300 h-2 rounded-full" style={{width: '25%'}}></div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm animate-fade-in flex flex-col justify-between" style={{animationDelay: '0.4s'}}>
<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-semibold text-neutral-900">عدد طلبات التوظيف شهريًا</h3>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-[#c1ff72]"></span>
<span className="text-xs text-neutral-500">2024</span>
</div>
</div>

<div className="relative h-48 w-full flex items-end justify-between gap-1 pt-8">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="border-t border-dashed border-neutral-100 w-full h-px"></div>
<div className="border-t border-dashed border-neutral-100 w-full h-px"></div>
<div className="border-t border-dashed border-neutral-100 w-full h-px"></div>
<div className="border-t border-dashed border-neutral-100 w-full h-px"></div>
</div>

<svg className="absolute bottom-0 left-0 right-0 h-full w-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 50">
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#c1ff72', stopOpacity: '0.4'}}></stop>
<stop offset="100%" style={{stopColor: '#c1ff72', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path d="M0 45 C 10 40, 20 45, 30 35 C 40 25, 50 30, 60 20 C 70 15, 80 25, 90 10 L 90 50 L 0 50 Z" fill="url(#gradient)" stroke="none"></path>
<path className="chart-line" d="M0 45 C 10 40, 20 45, 30 35 C 40 25, 50 30, 60 20 C 70 15, 80 25, 90 10" fill="none" stroke="#9bc94d" strokeWidth="0.5"></path>
</svg>

<div className="w-full flex justify-between text-[10px] text-neutral-400 mt-2 absolute -bottom-5">
<span>يناير</span>
<span>فبراير</span>
<span>مارس</span>
<span>أبريل</span>
<span>مايو</span>
<span>يونيو</span>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white border border-neutral-200 rounded-xl p-6 shadow-sm animate-fade-in" style={{animationDelay: '0.5s'}}>
<div className="flex items-center justify-between mb-6">
<h3 className="text-base font-semibold text-neutral-900">آخر الأنشطة</h3>
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900" href="#">عرض الكل</a>
</div>
<div className="space-y-0">

<div className="flex gap-4 py-4 border-b border-neutral-100 last:border-0 hover:bg-neutral-50 -mx-4 px-4 transition-colors">
<div className="w-9 h-9 rounded-full bg-[#c1ff72]/20 text-neutral-800 flex items-center justify-center shrink-0 border border-[#c1ff72]/30">
<iconify-icon icon="lucide:user-plus" width="16"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900">متقدم جديد على وظيفة "مسوق الكتروني"</p>
<p className="text-xs text-neutral-500 mt-0.5">سارة أحمد قامت بإرسال سيرتها الذاتية</p>
</div>
<span className="text-xs text-neutral-400 whitespace-nowrap">منذ 5 د</span>
</div>

<div className="flex gap-4 py-4 border-b border-neutral-100 last:border-0 hover:bg-neutral-50 -mx-4 px-4 transition-colors">
<div className="w-9 h-9 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center shrink-0 border border-neutral-200">
<iconify-icon icon="lucide:briefcase" width="16"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900">إنشاء وظيفة جديدة</p>
<p className="text-xs text-neutral-500 mt-0.5">تم نشر وظيفة "مدير مبيعات" بنجاح</p>
</div>
<span className="text-xs text-neutral-400 whitespace-nowrap">منذ 2 س</span>
</div>

<div className="flex gap-4 py-4 border-b border-neutral-100 last:border-0 hover:bg-neutral-50 -mx-4 px-4 transition-colors">
<div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
<iconify-icon icon="lucide:check-circle" width="16"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-900">إضافة موظف جديد</p>
<p className="text-xs text-neutral-500 mt-0.5">تم استكمال أوراق تعيين "خالد عمر"</p>
</div>
<span className="text-xs text-neutral-400 whitespace-nowrap">اليوم</span>
</div>
</div>
</div>

<div className="bg-neutral-900 text-white rounded-xl p-6 shadow-md animate-fade-in flex flex-col justify-between relative overflow-hidden" style={{animationDelay: '0.6s'}}>

<div className="absolute top-0 right-0 w-32 h-32 bg-[#c1ff72] opacity-10 blur-[50px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-base font-semibold mb-6 flex items-center gap-2">
<iconify-icon className="text-[#c1ff72]" icon="lucide:sparkles"></iconify-icon>
                            رؤى سريعة
                        </h3>
<div className="space-y-6">
<div>
<p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">أعلى وظيفة طلبًا</p>
<p className="text-lg font-bold text-white">مصمم واجهة مستخدم</p>
<span className="text-xs text-[#c1ff72]">+15% هذا الشهر</span>
</div>
<div className="w-full h-px bg-neutral-800"></div>
<div>
<p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">آخر وظيفة تم نشرها</p>
<p className="text-lg font-bold text-white">مدير مبيعات</p>
<span className="text-xs text-neutral-500">منذ ساعتين</span>
</div>
<div className="w-full h-px bg-neutral-800"></div>
<div>
<p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">القسم الأكثر نشاطًا</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<p className="text-lg font-bold text-white">التقنية والتطوير</p>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
