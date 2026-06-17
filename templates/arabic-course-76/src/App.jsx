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
      

<nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-600/20">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">نظمي</span>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex p-2 hover:bg-gray-50 rounded-full text-slate-500 transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<img alt="User" className="w-9 h-9 rounded-full border border-gray-200 bg-gray-50" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

<div className="flex items-center gap-2 text-sm text-slate-500 mb-8 overflow-x-auto no-scrollbar whitespace-nowrap">
<a className="hover:text-indigo-600 transition-colors" href="#">الرئيسية</a>
<i className="w-4 h-4 text-gray-300" data-lucide="chevron-left"></i>
<a className="hover:text-indigo-600 transition-colors" href="#">التسويق</a>
<i className="w-4 h-4 text-gray-300" data-lucide="chevron-left"></i>
<span className="text-slate-900 font-medium">صناعة المحتوى</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

<div className="lg:col-span-8 space-y-12">

<div className="space-y-6">
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100 flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="award"></i>
                            الأكثر مبيعاً
                        </span>
<span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-100 flex items-center gap-1">
<i className="w-3 h-3 fill-current" data-lucide="star"></i> 4.9 تقييم عام
                        </span>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900">
                        أسرار صناعة المحتوى: الخطة الكاملة للتسويق بالمحتوى
                    </h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                        تعلم كيف تبني استراتيجية محتوى متكاملة تجذب العملاء وتضاعف مبيعاتك، مع ورش عمل مباشرة وتطبيقات عملية على مشاريع حقيقية.
                    </p>

<div className="flex items-center gap-4 py-4 border-y border-gray-100/80">
<img alt="Instructor" className="w-12 h-12 rounded-full ring-2 ring-white shadow-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div>
<p className="text-xs text-slate-500 font-medium">مقدم الدورة</p>
<p className="text-base font-semibold text-slate-900">أحمد أبو مصطفي</p>
</div>
<div className="mr-auto hidden sm:flex gap-6 text-sm text-slate-500 border-r border-gray-200 pr-6">
<span className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-500" data-lucide="users"></i> +1200 طالب</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-500" data-lucide="clock"></i> 32 ساعة</span>
</div>
</div>
</div>

<div className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-indigo-900/10 aspect-video bg-slate-900">
<img alt="Course Preview" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<button className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20 shadow-xl">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play"></i>
</button>
</div>
<div className="absolute bottom-6 right-6 left-6 flex justify-between items-end">
<div className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg text-white text-xs font-medium border border-white/10 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            معاينة مجانية
                        </div>
</div>
</div>

<div className="sticky top-16 z-40 bg-gray-50/95 backdrop-blur-sm pt-2 pb-2">
<div className="flex items-center gap-1 overflow-x-auto no-scrollbar border-b border-gray-200">
<a className="px-4 py-3 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-600 whitespace-nowrap" href="#about">عن الدورة</a>
<a className="px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap" href="#curriculum">المنهج الدراسي</a>
<a className="px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap" href="#wins">قصص نجاح</a>
<a className="px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap" href="#certificate">الشهادة</a>
<a className="px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap" href="#instructor">المدرب</a>
<a className="px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap" href="#faq">الأسئلة</a>
</div>
</div>

<section className="scroll-mt-32" id="about">
<div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-32 h-32 bg-indigo-50 rounded-br-[100px] opacity-50"></div>
<h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2 relative z-10">
<span className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
<i className="w-4 h-4" data-lucide="zap"></i>
</span>
                            ماذا ستتعلم في هذه الدورة؟
                        </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 relative z-10">
<div className="flex gap-4">
<i className="w-5 h-5 text-emerald-500 mt-1 shrink-0 bg-emerald-50 rounded-full p-0.5" data-lucide="check"></i>
<div>
<h4 className="font-semibold text-slate-900 text-sm">بناء استراتيجية شاملة</h4>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">تعلم كيفية رسم خارطة طريق للمحتوى من الصفر وحتى النشر.</p>
</div>
</div>
<div className="flex gap-4">
<i className="w-5 h-5 text-emerald-500 mt-1 shrink-0 bg-emerald-50 rounded-full p-0.5" data-lucide="check"></i>
<div>
<h4 className="font-semibold text-slate-900 text-sm">إتقان الـ SEO</h4>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">تصدر نتائج البحث الأولى في جوجل ويوتيوب.</p>
</div>
</div>
<div className="flex gap-4">
<i className="w-5 h-5 text-emerald-500 mt-1 shrink-0 bg-emerald-50 rounded-full p-0.5" data-lucide="check"></i>
<div>
<h4 className="font-semibold text-slate-900 text-sm">تحليل الأداء (Analytics)</h4>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">قراءة الأرقام وتحويلها إلى قرارات تسويقية ذكية.</p>
</div>
</div>
<div className="flex gap-4">
<i className="w-5 h-5 text-emerald-500 mt-1 shrink-0 bg-emerald-50 rounded-full p-0.5" data-lucide="check"></i>
<div>
<h4 className="font-semibold text-slate-900 text-sm">التسويق عبر الفمع (Funnel)</h4>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">تحويل المتابع العادي إلى عميل دائم يشتري منك.</p>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-32" id="audience">
<h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
<i className="w-5 h-5 text-indigo-500" data-lucide="target"></i>
                        لمن هذه الدورة؟
                    </h3>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-indigo-100 transition-colors group">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="briefcase"></i>
</div>
<h4 className="font-bold text-slate-900 text-sm mb-2">أصحاب المشاريع</h4>
<p className="text-xs text-slate-500 leading-relaxed">للذين يرغبون في تسويق منتجاتهم بأنفسهم دون دفع مبالغ طائلة للوكالات.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-indigo-100 transition-colors group">
<div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="pen-tool"></i>
</div>
<h4 className="font-bold text-slate-900 text-sm mb-2">صناع المحتوى</h4>
<p className="text-xs text-slate-500 leading-relaxed">للمستقلين والمدونين الذين يريدون احتراف المجال والعمل كـ Freelancers.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-indigo-100 transition-colors group">
<div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<h4 className="font-bold text-slate-900 text-sm mb-2">مسوقو السوشيال ميديا</h4>
<p className="text-xs text-slate-500 leading-relaxed">الراغبون في تطوير مهاراتهم وإضافة خدمة "استراتيجية المحتوى" لخدماتهم.</p>
</div>
</div>
</section>

<section className="scroll-mt-32" id="curriculum">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold text-slate-900">المنهج الدراسي</h3>
<span className="text-xs text-slate-500 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm">
<span className="font-bold text-indigo-600">3</span> جلسات مباشرة • <span className="font-bold text-indigo-600">50+</span> درس مسجل
                        </span>
</div>
<div className="space-y-4">
<details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden" open="">
<summary className="flex items-center justify-between p-5 cursor-pointer bg-gray-50/50 hover:bg-gray-50 transition-colors select-none">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-white border border-gray-200 text-slate-500 flex items-center justify-center font-bold text-sm shadow-sm">01</div>
<div>
<h4 className="font-bold text-slate-900 text-sm">أساسيات عقلية المسوق</h4>
<p className="text-xs text-slate-400 font-medium mt-0.5">3 دروس • 25 دقيقة</p>
</div>
</div>
<i className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="p-2 space-y-1 bg-white border-t border-gray-100">
<div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group/item">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center">
<i className="w-3 h-3 text-indigo-600 fill-current" data-lucide="play"></i>
</div>
<span className="text-slate-700 text-sm font-medium">مقدمة: لماذا يفشل معظم صناع المحتوى؟</span>
</div>
<span className="text-xs text-slate-400 font-medium">08:00</span>
</div>
<div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group/item">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center">
<i className="w-3 h-3 text-gray-400" data-lucide="lock"></i>
</div>
<span className="text-slate-500 text-sm">تحديد الأهداف الذكية (SMART Goals)</span>
</div>
<span className="text-xs text-slate-400 font-medium">12:30</span>
</div>
</div>
</details>
<details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden" open="">
<summary className="flex items-center justify-between p-5 cursor-pointer bg-gray-50/50 hover:bg-gray-50 transition-colors select-none">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-white border border-gray-200 text-slate-500 flex items-center justify-center font-bold text-sm shadow-sm">02</div>
<div>
<h4 className="font-bold text-slate-900 text-sm">بناء خطة المحتوى (تطبيقي)</h4>
<p className="text-xs text-slate-400 font-medium mt-0.5">5 دروس • 1 ورشة عمل مباشرة</p>
</div>
</div>
<i className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="p-2 space-y-1 bg-white border-t border-gray-100">
<div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group/item">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center">
<i className="w-3 h-3 text-gray-400" data-lucide="lock"></i>
</div>
<span className="text-slate-500 text-sm">أنواع المحتوى الأربعة</span>
</div>
<span className="text-xs text-slate-400 font-medium">15:00</span>
</div>
<div className="m-2 p-4 bg-gradient-to-r from-indigo-50 to-white border border-indigo-100 rounded-xl relative overflow-hidden group/live hover:shadow-md transition-all">
<div className="absolute right-0 top-0 h-full w-1 bg-indigo-500"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex flex-col items-center justify-center text-xs font-bold shrink-0 border border-indigo-200">
<span>15</span>
<span className="text-[10px] font-normal uppercase">أكتوبر</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-600 text-white flex items-center gap-1">
<i className="w-3 h-3" data-lucide="video"></i> مباشر
                                                    </span>
<span className="text-[10px] text-slate-500">لمدة ساعتين</span>
</div>
<h5 className="text-slate-900 font-bold text-sm">ورشة عمل: بناء تقويم المحتوى الشهري</h5>
</div>
</div>
<div className="flex items-center gap-4 text-xs text-slate-600 bg-white/50 p-2 rounded-lg border border-indigo-50 sm:mr-auto">
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-indigo-500" data-lucide="clock"></i>
                                                08:00 م
                                            </div>
<div className="w-px h-3 bg-gray-300"></div>
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-indigo-500" data-lucide="globe"></i>
                                                توقيت مكة
                                            </div>
</div>
</div>
</div>
</div>
</details>
</div>
</section>

<section className="bg-gray-900 rounded-3xl p-8 relative overflow-hidden scroll-mt-32" id="wins">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-[80px] opacity-20"></div>
<div className="relative z-10 mb-8">
<h3 className="text-xl font-bold text-white flex items-center gap-2">
<i className="w-5 h-5 text-yellow-400" data-lucide="trophy"></i>
                            قصص نجاح من الواقع
                        </h3>
<p className="text-slate-400 text-sm mt-2">لا نبيع الكلام، هذه نتائج طلابنا الحقيقية بعد تطبيق استراتيجيات الدورة.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3 mb-4">
<img className="w-10 h-10 rounded-full bg-white/10 border border-white/10" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jack"/>
<div>
<h5 className="text-white font-bold text-sm">كريم محمد</h5>
<p className="text-slate-400 text-xs">صانع محتوى تقني</p>
</div>
<i className="w-4 h-4 text-blue-400 mr-auto" data-lucide="twitter"></i>
</div>
<p className="text-slate-200 text-xs leading-relaxed mb-4">
                                "طبقت استراتيجية الفيديوهات القصيرة من الموديول الثالث، وفي خلال شهر واحد زادت المشاهدات عندي بنسبة 300% والأرباح تضاعفت!"
                            </p>
<div className="rounded-lg bg-slate-800 p-3 border border-white/5">
<div className="flex items-end justify-between gap-1 h-16 opacity-80">
<div className="w-full bg-indigo-500/30 rounded-t h-[30%]"></div>
<div className="w-full bg-indigo-500/40 rounded-t h-[45%]"></div>
<div className="w-full bg-indigo-500/60 rounded-t h-[35%]"></div>
<div className="w-full bg-indigo-500/80 rounded-t h-[70%]"></div>
<div className="w-full bg-green-500 rounded-t h-[95%] relative group cursor-pointer">
<div className="absolute -top-6 right-0 bg-white text-slate-900 text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            $1,240
                                        </div>
</div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-slate-500">
<span>قبل الدورة</span>
<span className="text-green-400 font-bold">بعد الدورة 🚀</span>
</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3 mb-4">
<img className="w-10 h-10 rounded-full bg-white/10 border border-white/10" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sara"/>
<div>
<h5 className="text-white font-bold text-sm">سارة علي</h5>
<p className="text-slate-400 text-xs">متجر ملابس</p>
</div>
<i className="w-4 h-4 text-green-400 mr-auto" data-lucide="message-circle"></i>
</div>
<p className="text-slate-200 text-xs leading-relaxed mb-4">
                                "كنت أدفع ميزانية ضخمة للإعلانات بدون نتيجة. بعد ورشة العمل المباشرة، حسنت المحتوى المجاني وبدأت الطلبات تيجيني organic بدون دفع."
                            </p>
<div className="rounded-lg bg-slate-800 overflow-hidden border border-white/5 relative h-24 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img alt="screenshot" className="w-full h-full object-cover opacity-50 blur-[1px]" src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
<i className="w-3 h-3" data-lucide="check-circle"></i>
                                    +45 طلب جديد
                                </div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-32" id="certificate">
<div className="bg-indigo-900 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden group">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
<div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600 rounded-full blur-[100px] opacity-50"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/30 to-transparent"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-xl ring-4 ring-indigo-800/50">
<i className="w-7 h-7 text-white" data-lucide="award"></i>
</div>
<h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">شهادة إتمام معتمدة</h3>
<p className="text-indigo-200 max-w-lg mx-auto text-sm sm:text-base leading-relaxed mb-8">
                                عند إكمالك للدورة، ستحصل على شهادة موثقة برقم تسلسلي فريد، قابلة للمشاركة مباشرة على ملفك المهني في LinkedIn.
                            </p>

<div className="relative w-full max-w-sm mx-auto aspect-[1.414/1] bg-white rounded-xl shadow-2xl shadow-black/50 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500 border-4 border-white/20">
<div className="p-4 sm:p-6 h-full flex flex-col border-4 border-double border-slate-100 m-2 relative">
<div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
<div className="flex justify-between items-start mb-6 z-10">
<i className="w-6 h-6 text-slate-900 opacity-80" data-lucide="layers"></i>
<div className="text-[8px] font-mono text-slate-400">SERIAL: NZ-9823</div>
</div>
<div className="text-center mt-auto mb-auto z-10">
<div className="text-[8px] tracking-[0.2em] uppercase text-slate-400 mb-2 font-semibold">Certificate of Completion</div>
<div className="font-serif text-lg sm:text-xl text-slate-900 font-bold mb-1">أحمد أبو مصطفي</div>
<div className="text-[9px] text-slate-500 px-4">For successfully completing the Content Marketing Mastery Course</div>
</div>
<div className="flex justify-between items-end mt-auto pt-4 border-t border-slate-100 z-10">
<div className="flex flex-col gap-1">
<div className="w-12 h-6 bg-slate-100 rounded opacity-50 mix-blend-multiply"></div>
<span className="text-[6px] text-slate-300 uppercase">Instructor</span>
</div>
<div className="w-8 h-8 bg-indigo-600/10 rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-indigo-600 opacity-50" data-lucide="check-circle"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-32" id="instructor">
<div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
<div className="flex flex-col sm:flex-row gap-6">
<div className="shrink-0 flex flex-col items-center sm:items-start gap-4">
<img alt="Instructor" className="w-24 h-24 rounded-2xl object-cover shadow-md rotate-3" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="flex gap-2">
<a className="p-2 bg-gray-50 text-slate-500 rounded-full hover:bg-black hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="p-2 bg-gray-50 text-slate-500 rounded-full hover:bg-blue-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
<div className="space-y-3 text-center sm:text-right">
<div>
<h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">عن المدرب</h4>
<h3 className="text-xl font-bold text-slate-900">أحمد أبو مصطفي</h3>
<p className="text-sm text-slate-500 mt-1">خبير استراتيجيات المحتوى &amp; شريك مؤسس في وكالة "ScaleUp"</p>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                                    أعمل في مجال التسويق الرقمي منذ أكثر من 10 سنوات. قدت فرق تسويق في شركات ناشئة وكبيرة وساعدت أكثر من 50 علامة تجارية في بناء حضور قوي على الإنترنت.
                                </p>
<div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4">
<div className="px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-medium text-slate-600 border border-gray-100">سابقاً في Google</div>
<div className="px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-medium text-slate-600 border border-gray-100">مدرب معتمد</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-32" id="faq">
<h3 className="text-xl font-bold text-slate-900 mb-6">الأسئلة الشائعة</h3>
<div className="space-y-3">
<details className="group bg-white rounded-2xl border border-gray-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-slate-900 hover:text-indigo-600 transition-colors">
                                هل الشهادة معتمدة دولياً؟
                                <i className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform" data-lucide="plus"></i>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-500 leading-relaxed">
                                نعم، الشهادة معتمدة من منصة "نظمي" ويمكنك إضافتها مباشرة إلى حسابك في LinkedIn وتوثيقها برقم مرجعي فريد.
                            </div>
</details>
<details className="group bg-white rounded-2xl border border-gray-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-slate-900 hover:text-indigo-600 transition-colors">
                                ماذا لو لم أتمكن من حضور الجلسة المباشرة؟
                                <i className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform" data-lucide="plus"></i>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-500 leading-relaxed">
                                لا تقلق! جميع الجلسات المباشرة يتم تسجيلها ورفعها على المنصة في اليوم التالي بجودة عالية، ويمكنك مشاهدتها في أي وقت.
                            </div>
</details>
</div>
</section>
</div>

<div className="lg:col-span-4 relative">
<div className="sticky top-24 space-y-6">

<div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-xl shadow-gray-200/50 relative overflow-hidden">

<div className="absolute top-0 left-0 bg-rose-500 text-white text-xs font-bold px-4 py-1.5 rounded-br-2xl shadow-sm">
                            خصم 50% لفترة محدودة
                        </div>
<div className="mt-8 mb-6">

<div className="mb-5 bg-rose-50 border border-rose-100 rounded-xl p-3">
<div className="flex justify-between items-end mb-2">
<span className="text-[11px] font-bold text-rose-600 flex items-center gap-1.5 uppercase tracking-wide">
<i className="w-3 h-3" data-lucide="timer"></i> ينتهي العرض خلال
                                    </span>
<span className="text-xs font-mono font-bold text-rose-700 tracking-wider">04:12:30</span>
</div>
<div className="w-full bg-rose-200 rounded-full h-1.5 overflow-hidden">
<div className="bg-rose-500 h-1.5 rounded-full w-[75%] shadow-[0_0_10px_rgba(244,63,94,0.5)]" style={{animation: 'pulse-bar 2s infinite ease-in-out'}}></div>
</div>
</div>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-extrabold text-slate-900 tracking-tight">3,200</span>
<span className="text-xl text-slate-900 font-bold">ج.م</span>
</div>
<div className="flex items-center gap-2 mt-2 text-slate-400 line-through text-sm">
<span>6,400 ج.م</span>
<span className="text-rose-500 no-underline font-medium bg-rose-50 px-2 py-0.5 rounded-full text-xs">وفر 3,200 ج.م</span>
</div>
</div>

<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg py-4 rounded-full shadow-lg shadow-slate-900/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group ring-4 ring-slate-100">
                            اشترك الآن
                            <i className="w-5 h-5 group-hover:-translate-x-1 transition-transform" data-lucide="arrow-left"></i>
</button>
<div className="flex justify-center items-center gap-2 mt-4 text-xs text-slate-500">
<i className="w-4 h-4 text-emerald-500" data-lucide="shield-check"></i>
<span>ضمان استرداد الأموال لمدة 14 يوم</span>
</div>
<div className="my-6 border-t border-gray-100"></div>

<h4 className="font-bold text-slate-900 mb-4 text-sm">ماذا يشمل الاشتراك؟</h4>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5" data-lucide="video"></i>
</div>
<span className="flex-1">3 ورش عمل تفاعلية مباشرة</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5" data-lucide="infinity"></i>
</div>
<span className="flex-1">وصول مدى الحياة للمحتوى</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i>
</div>
<span className="flex-1">نماذج خطط محتوى جاهزة (Excel)</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5" data-lucide="award"></i>
</div>
<span className="flex-1">شهادة إتمام معتمدة</span>
</li>
</ul>
</div>

<div className="bg-white rounded-3xl p-5 border border-gray-200 flex items-center justify-between shadow-sm">
<div className="text-sm">
<p className="font-bold text-slate-900">متردد في الشراء؟</p>
<p className="text-slate-500 text-xs mt-1">تحدث مع مستشار تعليمي الآن</p>
</div>
<button className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center hover:bg-green-100 transition-colors border border-green-100">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</button>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-50 flex items-center justify-between shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
<div>
<span className="text-lg font-bold text-slate-900 block">3,200 ج.م</span>
<span className="text-xs text-slate-500 line-through">6,400 ج.م</span>
</div>
<button className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-slate-900/20">
            اشترك الآن
        </button>
</div>


    </>
  );
}
