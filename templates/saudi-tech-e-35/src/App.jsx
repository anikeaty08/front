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



        function switchPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.add('hidden');
            });

            // Show target page
            const target = document.getElementById('page-' + pageId);
            if(target) {
                target.classList.remove('hidden');
                // Scroll to top
                window.scrollTo(0, 0);
            }

            // Update simple nav state (optional visual cue)
            const navLinks = document.querySelectorAll('.nav-link');
            // Reset active states logic could go here
        }

        function addToCart() {
            // Simulation
            const btn = event.currentTarget;
            const originalIcon = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="lucide:check" width="18" class="text-green-500"></iconify-icon>';
            setTimeout(() => {
                btn.innerHTML = originalIcon;
            }, 1000);
        }
    
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
      

<nav className="fixed top-0 w-full z-50 glass transition-all duration-300">

<div className="bg-indigo-600/10 border-b border-indigo-500/10 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between text-[10px] text-indigo-300">
<div className="flex gap-4">
<span>شحن مجاني للطلبات فوق 300 ر.س</span>
<span className="hidden sm:inline">|</span>
<span className="hidden sm:inline">ضمان ذهبي لمدة سنتين</span>
</div>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">تتبع الطلب</a>
<a className="hover:text-white transition-colors" href="#">المساعدة</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-3 cursor-pointer" onclick="switchPage('home')">
<div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
<iconify-icon icon="lucide:zap" strokeWidth="2" width="22"></iconify-icon>
</div>
<div>
<span className="text-xl font-bold tracking-tight text-white block leading-none">سعودي<span className="text-indigo-400">برو</span></span>
<span className="text-[10px] text-slate-400 font-medium tracking-wide">تجربة المستقبل</span>
</div>
</div>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
<button className="nav-link hover:text-white transition-colors relative group py-2 active text-white" onclick="switchPage('home')">
                        الرئيسية
                        <span className="absolute bottom-0 right-0 w-full h-0.5 bg-indigo-500 transition-all"></span>
</button>
<button className="nav-link hover:text-white transition-colors relative group py-2" onclick="switchPage('shop')">
                        المتجر
                        <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
</button>
<button className="nav-link hover:text-white transition-colors relative group py-2" onclick="switchPage('shop')">
                        أحدث العروض
                        <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
</button>
<button className="nav-link hover:text-white transition-colors relative group py-2">
                        المدونة
                        <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
</button>
</div>

<div className="flex items-center gap-3">
<button className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-800/50 rounded-full hover:bg-slate-800">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-slate-400 hover:text-white transition-colors p-2 relative bg-slate-800/50 rounded-full hover:bg-slate-800" onclick="switchPage('cart')">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-2.5 h-2.5 bg-indigo-500 rounded-full border-2 border-slate-950"></span>
</button>
<button className="hidden sm:flex bg-white text-slate-950 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-50 transition-all">
                        حسابي
                    </button>
</div>
</div>
</div>
</nav>

<main className="pt-28 flex-grow" id="app-content">

<div className="page-section" id="page-home">

<section className="relative pb-20 lg:pt-12 lg:pb-32 overflow-hidden bg-glow">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 text-center lg:text-right">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-bold uppercase tracking-wider shadow-xl animate-fade-in">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                                خصومات الصيف الكبرى
                            </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                                تقنية تصنع <br/>
<span className="text-gradient">المستحيل</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                اكتشف عالماً من الأجهزة الذكية التي تحاكي طموحك. جودة استثنائية، ضمان موثوق، وتوصيل بسرعة البرق.
                            </p>
<div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
<button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl text-sm font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2" onclick="switchPage('shop')">
                                    تصفح المتجر
                                    <iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon>
</button>
<button className="bg-slate-900 text-white border border-slate-800 px-8 py-4 rounded-2xl text-sm font-bold hover:bg-slate-800 transition-all">
                                    تعرف علينا
                                </button>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
<div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl overflow-hidden min-h-[450px] flex items-center justify-center">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
<div className="relative w-full h-full flex flex-col items-center justify-center">
<div className="relative z-10 transition-transform duration-500 hover:scale-105">
<iconify-icon className="text-white drop-shadow-[0_20px_50px_rgba(99,102,241,0.5)]" icon="lucide:gamepad-2" width="180"></iconify-icon>
</div>
<div className="absolute bottom-10 left-10 bg-slate-800/90 backdrop-blur border border-slate-700 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '4s'}}>
<div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
<iconify-icon icon="lucide:check" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400">حالة المنتج</p>
<p className="font-bold text-white text-sm">متوفر في المخزون</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-800/50 bg-slate-950/50 py-10 overflow-hidden">
<div className="flex gap-16 items-center animate-scroll whitespace-nowrap min-w-full justify-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="mx-6" icon="lucide:apple" width="40"></iconify-icon>
<iconify-icon className="mx-6" icon="lucide:smartphone" width="40"></iconify-icon>
<iconify-icon className="mx-6" icon="lucide:watch" width="40"></iconify-icon>
<iconify-icon className="mx-6" icon="lucide:headphones" width="40"></iconify-icon>
<iconify-icon className="mx-6" icon="lucide:wifi" width="40"></iconify-icon>
<iconify-icon className="mx-6" icon="lucide:bluetooth" width="40"></iconify-icon>
<iconify-icon className="mx-6" icon="lucide:cpu" width="40"></iconify-icon>
<iconify-icon className="mx-6" icon="lucide:laptop" width="40"></iconify-icon>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-bold text-white mb-2">تصفح الأقسام</h2>
<p className="text-slate-400">كل ما تحتاجه في مكان واحد</p>
</div>
<button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-1" onclick="switchPage('shop')">عرض الكل <iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon></button>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

<div className="cursor-pointer group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all hover:-translate-y-1" onclick="switchPage('shop')">
<div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
<iconify-icon className="text-slate-300 group-hover:text-white" icon="lucide:smartphone" width="24"></iconify-icon>
</div>
<h3 className="font-bold text-slate-200">الجوالات</h3>
</div>
<div className="cursor-pointer group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all hover:-translate-y-1" onclick="switchPage('shop')">
<div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-600 transition-colors">
<iconify-icon className="text-slate-300 group-hover:text-white" icon="lucide:monitor" width="24"></iconify-icon>
</div>
<h3 className="font-bold text-slate-200">الكمبيوتر</h3>
</div>
<div className="cursor-pointer group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all hover:-translate-y-1" onclick="switchPage('shop')">
<div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-600 transition-colors">
<iconify-icon className="text-slate-300 group-hover:text-white" icon="lucide:watch" width="24"></iconify-icon>
</div>
<h3 className="font-bold text-slate-200">الساعات</h3>
</div>
<div className="cursor-pointer group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all hover:-translate-y-1" onclick="switchPage('shop')">
<div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
<iconify-icon className="text-slate-300 group-hover:text-white" icon="lucide:gamepad-2" width="24"></iconify-icon>
</div>
<h3 className="font-bold text-slate-200">الألعاب</h3>
</div>
<div className="cursor-pointer group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all hover:-translate-y-1" onclick="switchPage('shop')">
<div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
<iconify-icon className="text-slate-300 group-hover:text-white" icon="lucide:camera" width="24"></iconify-icon>
</div>
<h3 className="font-bold text-slate-200">التصوير</h3>
</div>
<div className="cursor-pointer group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all hover:-translate-y-1" onclick="switchPage('shop')">
<div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
<iconify-icon className="text-slate-300 group-hover:text-white" icon="lucide:speaker" width="24"></iconify-icon>
</div>
<h3 className="font-bold text-slate-200">الصوتيات</h3>
</div>
</div>
</div>
</section>

<section className="py-12 bg-slate-900 border-y border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400">
<iconify-icon icon="lucide:truck" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold mb-1">شحن سريع</h4>
<p className="text-xs text-slate-400">توصيل خلال 24 ساعة للرياض</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400">
<iconify-icon icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold mb-1">ضمان شامل</h4>
<p className="text-xs text-slate-400">سنتين ضمان على كافة الأجهزة</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400">
<iconify-icon icon="lucide:rotate-ccw" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold mb-1">استرجاع سهل</h4>
<p className="text-xs text-slate-400">14 يوم سياسة استبدال مرنة</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400">
<iconify-icon icon="lucide:headset" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold mb-1">دعم فني</h4>
<p className="text-xs text-slate-400">خدمة عملاء على مدار الساعة</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold text-white mb-10 text-center">الأكثر مبيعاً هذا الأسبوع</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group bg-slate-900 border border-slate-800 rounded-3xl p-4 hover:border-indigo-500/30 transition-all duration-500 relative">
<div className="absolute top-6 right-6 z-10 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full">جديد</div>
<div className="aspect-square rounded-2xl bg-slate-800/50 mb-4 flex items-center justify-center relative overflow-hidden cursor-pointer" onclick="switchPage('product')">
<iconify-icon className="text-slate-600 group-hover:scale-110 transition-transform duration-500" icon="lucide:gamepad" width="60"></iconify-icon>
</div>
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-slate-100 truncate">وحدة تحكم برو</h3>
<div className="flex gap-0.5 text-yellow-500">
<iconify-icon icon="lucide:star" width="12"></iconify-icon>
<span className="text-xs text-slate-500 mr-1">4.8</span>
</div>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-1">لاسلكية فائقة الدقة</p>
<div className="flex items-center justify-between">
<span className="text-lg font-bold text-white">299 ر.س</span>
<button className="w-8 h-8 rounded-full bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors" onclick="addToCart()">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-slate-900 border border-slate-800 rounded-3xl p-4 hover:border-indigo-500/30 transition-all duration-500 relative">
<div className="aspect-square rounded-2xl bg-slate-800/50 mb-4 flex items-center justify-center relative overflow-hidden cursor-pointer" onclick="switchPage('product')">
<iconify-icon className="text-slate-600 group-hover:scale-110 transition-transform duration-500" icon="lucide:headphones" width="60"></iconify-icon>
</div>
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-slate-100 truncate">سماعات رأس سوني</h3>
<div className="flex gap-0.5 text-yellow-500">
<iconify-icon icon="lucide:star" width="12"></iconify-icon>
<span className="text-xs text-slate-500 mr-1">4.9</span>
</div>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-1">عزل ضوضاء محيطي</p>
<div className="flex items-center justify-between">
<span className="text-lg font-bold text-white">1,200 ر.س</span>
<button className="w-8 h-8 rounded-full bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors" onclick="addToCart()">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-slate-900 border border-slate-800 rounded-3xl p-4 hover:border-indigo-500/30 transition-all duration-500 relative">
<div className="absolute top-6 right-6 z-10 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">-15%</div>
<div className="aspect-square rounded-2xl bg-slate-800/50 mb-4 flex items-center justify-center relative overflow-hidden cursor-pointer" onclick="switchPage('product')">
<iconify-icon className="text-slate-600 group-hover:scale-110 transition-transform duration-500" icon="lucide:watch" width="60"></iconify-icon>
</div>
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-slate-100 truncate">ساعة ذكية ألترا</h3>
<div className="flex gap-0.5 text-yellow-500">
<iconify-icon icon="lucide:star" width="12"></iconify-icon>
<span className="text-xs text-slate-500 mr-1">4.5</span>
</div>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-1">بطارية تدوم 7 أيام</p>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-lg font-bold text-white">850 ر.س</span>
<span className="text-[10px] text-slate-500 line-through">1000 ر.س</span>
</div>
<button className="w-8 h-8 rounded-full bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors" onclick="addToCart()">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-slate-900 border border-slate-800 rounded-3xl p-4 hover:border-indigo-500/30 transition-all duration-500 relative">
<div className="aspect-square rounded-2xl bg-slate-800/50 mb-4 flex items-center justify-center relative overflow-hidden cursor-pointer" onclick="switchPage('product')">
<iconify-icon className="text-slate-600 group-hover:scale-110 transition-transform duration-500" icon="lucide:laptop" width="60"></iconify-icon>
</div>
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-slate-100 truncate">لابتوب ماك بوك</h3>
<div className="flex gap-0.5 text-yellow-500">
<iconify-icon icon="lucide:star" width="12"></iconify-icon>
<span className="text-xs text-slate-500 mr-1">5.0</span>
</div>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-1">شريحة M3 المتطورة</p>
<div className="flex items-center justify-between">
<span className="text-lg font-bold text-white">5,400 ر.س</span>
<button className="w-8 h-8 rounded-full bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors" onclick="addToCart()">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold text-white mb-10">جديد التقنية</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="group cursor-pointer">
<div className="h-48 bg-slate-800 rounded-2xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors"></div>
<div className="w-full h-full flex items-center justify-center text-slate-700">
<iconify-icon icon="lucide:image" width="48"></iconify-icon>
</div>
</div>
<span className="text-xs font-bold text-indigo-400 mb-2 block">مراجعات</span>
<h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">مقارنة شاملة بين عمالقة الهواتف 2024</h3>
<p className="text-slate-400 text-sm line-clamp-2">تعرف على الفروقات الجوهرية بين أحدث إصدارات سامسونج وأبل في هذا التقرير المفصل.</p>
</div>
<div className="group cursor-pointer">
<div className="h-48 bg-slate-800 rounded-2xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors"></div>
<div className="w-full h-full flex items-center justify-center text-slate-700">
<iconify-icon icon="lucide:image" width="48"></iconify-icon>
</div>
</div>
<span className="text-xs font-bold text-indigo-400 mb-2 block">أخبار</span>
<h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">إطلاق الجيل الجديد من المعالجات</h3>
<p className="text-slate-400 text-sm line-clamp-2">ثورة في عالم الذكاء الاصطناعي مع الرقائق الجديدة التي تعد بأداء مضاعف.</p>
</div>
<div className="group cursor-pointer">
<div className="h-48 bg-slate-800 rounded-2xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors"></div>
<div className="w-full h-full flex items-center justify-center text-slate-700">
<iconify-icon icon="lucide:image" width="48"></iconify-icon>
</div>
</div>
<span className="text-xs font-bold text-indigo-400 mb-2 block">نصائح</span>
<h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">كيف تحافظ على بطارية جهازك؟</h3>
<p className="text-slate-400 text-sm line-clamp-2">5 خطوات بسيطة ستطيل عمر بطارية هاتفك وحاسوبك بشكل ملحوظ.</p>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="page-shop">
<div className="bg-slate-900 border-b border-slate-800 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-4xl font-bold text-white mb-4">المتجر</h1>
<div className="flex items-center gap-2 text-sm text-slate-400">
<span className="cursor-pointer hover:text-white" onclick="switchPage('home')">الرئيسية</span>
<iconify-icon icon="lucide:chevron-left" width="14"></iconify-icon>
<span className="text-indigo-400">جميع المنتجات</span>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex flex-col lg:flex-row gap-8">

<div className="w-full lg:w-64 flex-shrink-0 space-y-8">

<div>
<h3 className="font-bold text-white mb-4">الأقسام</h3>
<div className="space-y-2">
<label className="flex items-center gap-2 text-slate-400 hover:text-white cursor-pointer">
<input className="w-4 h-4 rounded border-slate-700 bg-slate-900 custom-checkbox appearance-none border transition-colors" type="checkbox"/>
<span className="text-sm">الجوالات (45)</span>
</label>
<label className="flex items-center gap-2 text-slate-400 hover:text-white cursor-pointer">
<input className="w-4 h-4 rounded border-slate-700 bg-slate-900 custom-checkbox appearance-none border transition-colors" type="checkbox"/>
<span className="text-sm">لابتوب (20)</span>
</label>
<label className="flex items-center gap-2 text-slate-400 hover:text-white cursor-pointer">
<input className="w-4 h-4 rounded border-slate-700 bg-slate-900 custom-checkbox appearance-none border transition-colors" type="checkbox"/>
<span className="text-sm">اكسسوارات (150)</span>
</label>
</div>
</div>

<div>
<h3 className="font-bold text-white mb-4">السعر</h3>
<div className="h-1 bg-slate-800 rounded-full mb-4 relative">
<div className="absolute right-0 w-1/2 h-full bg-indigo-500 rounded-full"></div>
<div className="absolute right-[50%] -top-1.5 w-4 h-4 bg-white rounded-full shadow cursor-pointer"></div>
</div>
<div className="flex justify-between text-xs text-slate-400">
<span>0 ر.س</span>
<span>5000 ر.س</span>
</div>
</div>

<div>
<h3 className="font-bold text-white mb-4">الماركة</h3>
<div className="space-y-2">
<label className="flex items-center gap-2 text-slate-400 hover:text-white cursor-pointer">
<input className="w-4 h-4 rounded border-slate-700 bg-slate-900 custom-checkbox appearance-none border transition-colors" type="checkbox"/>
<span className="text-sm">Apple</span>
</label>
<label className="flex items-center gap-2 text-slate-400 hover:text-white cursor-pointer">
<input className="w-4 h-4 rounded border-slate-700 bg-slate-900 custom-checkbox appearance-none border transition-colors" type="checkbox"/>
<span className="text-sm">Samsung</span>
</label>
<label className="flex items-center gap-2 text-slate-400 hover:text-white cursor-pointer">
<input className="w-4 h-4 rounded border-slate-700 bg-slate-900 custom-checkbox appearance-none border transition-colors" type="checkbox"/>
<span className="text-sm">Sony</span>
</label>
</div>
</div>
</div>

<div className="flex-1">
<div className="flex justify-between items-center mb-6">
<span className="text-slate-400 text-sm">عرض 1-9 من أصل 120 منتج</span>
<select className="bg-slate-900 border border-slate-800 text-white text-sm rounded-lg p-2.5 focus:border-indigo-500 focus:outline-none">
<option>الأحدث</option>
<option>الأقل سعراً</option>
<option>الأعلى سعراً</option>
</select>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 hover:border-indigo-500/50 transition-all group">
<div className="aspect-[4/3] bg-slate-950 rounded-xl mb-4 flex items-center justify-center relative cursor-pointer" onclick="switchPage('product')">
<iconify-icon className="text-slate-600 group-hover:scale-105 transition-transform" icon="lucide:monitor" width="64"></iconify-icon>
</div>
<h3 className="font-bold text-white mb-1">شاشة ألعاب منحنية</h3>
<p className="text-slate-500 text-xs mb-3">دقة 4K مع معدل تحديث 144Hz</p>
<div className="flex justify-between items-center">
<span className="font-bold text-indigo-400">1,499 ر.س</span>
<button className="p-2 bg-slate-800 rounded-lg hover:bg-white hover:text-slate-950 transition-colors">
<iconify-icon icon="lucide:shopping-cart" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 hover:border-indigo-500/50 transition-all group">
<div className="aspect-[4/3] bg-slate-950 rounded-xl mb-4 flex items-center justify-center relative cursor-pointer" onclick="switchPage('product')">
<iconify-icon className="text-slate-600 group-hover:scale-105 transition-transform" icon="lucide:keyboard" width="64"></iconify-icon>
</div>
<h3 className="font-bold text-white mb-1">كيبورد ميكانيكي</h3>
<p className="text-slate-500 text-xs mb-3">إضاءة RGB قابلة للتخصيص</p>
<div className="flex justify-between items-center">
<span className="font-bold text-indigo-400">450 ر.س</span>
<button className="p-2 bg-slate-800 rounded-lg hover:bg-white hover:text-slate-950 transition-colors">
<iconify-icon icon="lucide:shopping-cart" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 hover:border-indigo-500/50 transition-all group">
<div className="aspect-[4/3] bg-slate-950 rounded-xl mb-4 flex items-center justify-center relative cursor-pointer" onclick="switchPage('product')">
<iconify-icon className="text-slate-600 group-hover:scale-105 transition-transform" icon="lucide:mouse" width="64"></iconify-icon>
</div>
<h3 className="font-bold text-white mb-1">ماوس احترافي</h3>
<p className="text-slate-500 text-xs mb-3">حساسية عالية 25K DPI</p>
<div className="flex justify-between items-center">
<span className="font-bold text-indigo-400">299 ر.س</span>
<button className="p-2 bg-slate-800 rounded-lg hover:bg-white hover:text-slate-950 transition-colors">
<iconify-icon icon="lucide:shopping-cart" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex justify-center mt-12 gap-2">
<button className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center"><iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon></button>
<button className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">1</button>
<button className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center font-bold">2</button>
<button className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center font-bold">3</button>
<button className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center"><iconify-icon icon="lucide:chevron-left" width="16"></iconify-icon></button>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="page-product">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
<span className="cursor-pointer hover:text-white" onclick="switchPage('home')">الرئيسية</span>
<iconify-icon icon="lucide:chevron-left" width="14"></iconify-icon>
<span className="cursor-pointer hover:text-white" onclick="switchPage('shop')">المتجر</span>
<iconify-icon icon="lucide:chevron-left" width="14"></iconify-icon>
<span className="text-indigo-400">سماعات رأس سوني WH-1000XM5</span>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<div className="space-y-4">
<div className="aspect-square bg-slate-900 rounded-3xl flex items-center justify-center border border-slate-800">
<iconify-icon className="text-slate-500" icon="lucide:headphones" width="200"></iconify-icon>
</div>
<div className="grid grid-cols-4 gap-4">
<div className="aspect-square bg-slate-900 rounded-xl flex items-center justify-center border border-indigo-500 cursor-pointer">
<iconify-icon className="text-slate-500" icon="lucide:headphones" width="32"></iconify-icon>
</div>
<div className="aspect-square bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800 cursor-pointer hover:border-slate-600">
<iconify-icon className="text-slate-500 rotate-90" icon="lucide:headphones" width="32"></iconify-icon>
</div>
<div className="aspect-square bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800 cursor-pointer hover:border-slate-600">
<iconify-icon className="text-slate-500 -rotate-90" icon="lucide:headphones" width="32"></iconify-icon>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-start">
<div>
<h1 className="text-3xl font-bold text-white mb-2">سماعات رأس سوني مانعة للضوضاء</h1>
<div className="flex items-center gap-4 mb-4">
<div className="flex text-yellow-500 text-sm">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star-half" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-500">(125 تقييم)</span>
</div>
</div>
<button className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-red-500 flex items-center justify-center transition-colors">
<iconify-icon icon="lucide:heart" width="20"></iconify-icon>
</button>
</div>
<div className="text-3xl font-bold text-white mb-6">1,200 ر.س</div>
<p className="text-slate-400 leading-relaxed mb-8">
                            استمتع بتجربة صوتية لا مثيل لها مع تقنية عزل الضوضاء الرائدة في الصناعة. تصميم مريح وخفيف الوزن يتيح لك الاستماع لفترات طويلة دون تعب.
                        </p>
<div className="space-y-6 mb-8">

<div>
<label className="block text-sm font-bold text-white mb-3">اللون</label>
<div className="flex gap-3">
<button className="w-8 h-8 rounded-full bg-slate-200 border-2 border-transparent ring-2 ring-indigo-500"></button>
<button className="w-8 h-8 rounded-full bg-slate-900 border border-slate-600 hover:border-indigo-500"></button>
<button className="w-8 h-8 rounded-full bg-blue-900 border border-slate-600 hover:border-indigo-500"></button>
</div>
</div>
</div>
<div className="flex gap-4 mb-8">
<div className="w-32 flex items-center justify-between bg-slate-900 border border-slate-800 rounded-xl px-4 py-3">
<button className="text-slate-400 hover:text-white"><iconify-icon icon="lucide:minus" width="16"></iconify-icon></button>
<span className="font-bold">1</span>
<button className="text-slate-400 hover:text-white"><iconify-icon icon="lucide:plus" width="16"></iconify-icon></button>
</div>
<button className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl py-3 flex items-center justify-center gap-2 transition-colors" onclick="addToCart(); switchPage('cart')">
<iconify-icon icon="lucide:shopping-bag" width="18"></iconify-icon>
                                إضافة للسلة
                            </button>
</div>
<div className="grid grid-cols-2 gap-4 text-xs text-slate-400 border-t border-slate-800 pt-6">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:truck" width="16"></iconify-icon>
                                شحن مجاني للرياض
                            </div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:shield-check" width="16"></iconify-icon>
                                ضمان سنتين الوكيل
                            </div>
</div>
</div>
</div>

<div className="mt-20">
<div className="border-b border-slate-800 flex gap-8">
<button className="pb-4 border-b-2 border-indigo-500 text-white font-bold text-sm">الوصف</button>
<button className="pb-4 border-b-2 border-transparent text-slate-400 hover:text-white font-bold text-sm transition-colors">المواصفات</button>
<button className="pb-4 border-b-2 border-transparent text-slate-400 hover:text-white font-bold text-sm transition-colors">التقييمات</button>
</div>
<div className="py-8 text-slate-400 leading-relaxed text-sm">
<p>تتميز سماعات WH-1000XM5 بإلغاء ضوضاء رائد في الصناعة بفضل 8 ميكروفونات ومعالج Auto NC Optimizer. توفر وحدة السائق مقاس 30 مم المصممة خصيصًا جودة صوت فائقة لجميع احتياجات الترفيه الخاصة بك. مكالمات خالية من الضوضاء الرائدة في الصناعة مع 4 ميكروفونات بتكوين شعاعي.</p>
<ul className="list-disc list-inside mt-4 space-y-2">
<li>بطارية تدوم حتى 30 ساعة مع الشحن السريع.</li>
<li>تصميم خفيف الوزن ومريح للغاية وجلد ناعم الملمس.</li>
<li>اتصال متعدد النقاط يسمح لك بالاقتران بجهازين في نفس الوقت.</li>
</ul>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="page-cart">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<h1 className="text-3xl font-bold text-white mb-8">سلة المشتريات</h1>
<div className="flex flex-col lg:flex-row gap-12">

<div className="flex-1 space-y-6">

<div className="flex gap-6 items-center bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
<div className="w-24 h-24 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-slate-500" icon="lucide:headphones" width="40"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="font-bold text-white mb-1">سماعات سوني WH-1000XM5</h3>
<p className="text-xs text-slate-500 mb-3">اللون: أسود</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-lg px-2 py-1">
<button className="text-slate-400 hover:text-white px-1">-</button>
<span className="text-sm font-bold text-white">1</span>
<button className="text-slate-400 hover:text-white px-1">+</button>
</div>
<span className="font-bold text-indigo-400">1,200 ر.س</span>
</div>
</div>
<button className="text-slate-500 hover:text-red-500 p-2"><iconify-icon icon="lucide:trash-2" width="20"></iconify-icon></button>
</div>

<div className="flex gap-6 items-center bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
<div className="w-24 h-24 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-slate-500" icon="lucide:smartphone" width="40"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="font-bold text-white mb-1">غطاء حماية آيفون 15</h3>
<p className="text-xs text-slate-500 mb-3">اللون: شفاف</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-lg px-2 py-1">
<button className="text-slate-400 hover:text-white px-1">-</button>
<span className="text-sm font-bold text-white">2</span>
<button className="text-slate-400 hover:text-white px-1">+</button>
</div>
<span className="font-bold text-indigo-400">90 ر.س</span>
</div>
</div>
<button className="text-slate-500 hover:text-red-500 p-2"><iconify-icon icon="lucide:trash-2" width="20"></iconify-icon></button>
</div>
</div>

<div className="w-full lg:w-96 bg-slate-900 p-8 rounded-3xl border border-slate-800 h-fit">
<h3 className="font-bold text-white text-lg mb-6">ملخص الطلب</h3>
<div className="space-y-4 mb-8">
<div className="flex justify-between text-slate-400 text-sm">
<span>المجموع الفرعي</span>
<span className="text-white">1,290 ر.س</span>
</div>
<div className="flex justify-between text-slate-400 text-sm">
<span>الضريبة (15%)</span>
<span className="text-white">193.5 ر.س</span>
</div>
<div className="flex justify-between text-slate-400 text-sm">
<span>الشحن</span>
<span className="text-green-500 font-medium">مجاني</span>
</div>
<div className="border-t border-slate-800 pt-4 flex justify-between font-bold text-lg text-white">
<span>الإجمالي</span>
<span>1,483.5 ر.س</span>
</div>
</div>
<button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-colors mb-4" onclick="switchPage('checkout')">إتمام الشراء</button>
<div className="flex justify-center gap-2 opacity-50">
<iconify-icon icon="lucide:credit-card" width="24"></iconify-icon>
<iconify-icon icon="lucide:wallet" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="page-checkout">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="text-center mb-10">
<h1 className="text-3xl font-bold text-white mb-2">إتمام الطلب</h1>
<p className="text-slate-400">أدخل بيانات الشحن والدفع</p>
</div>
<div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-8">
<h3 className="font-bold text-white mb-6 flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-xs">1</span>
                        عنوان الشحن
                    </h3>
<div className="grid md:grid-cols-2 gap-6 mb-4">
<div className="space-y-2">
<label className="text-xs text-slate-400">الاسم الأول</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400">اسم العائلة</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500" type="text"/>
</div>
</div>
<div className="space-y-2 mb-4">
<label className="text-xs text-slate-400">المدينة</label>
<select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500">
<option>الرياض</option>
<option>جدة</option>
<option>الدمام</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400">العنوان بالتفصيل</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500" type="text"/>
</div>
</div>
<div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-8">
<h3 className="font-bold text-white mb-6 flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-xs">2</span>
                        طريقة الدفع
                    </h3>
<div className="grid grid-cols-3 gap-4 mb-6">
<button className="bg-slate-950 border border-indigo-500 p-4 rounded-xl flex flex-col items-center justify-center gap-2 text-indigo-400">
<iconify-icon icon="lucide:credit-card" width="24"></iconify-icon>
<span className="text-xs font-bold">بطاقة ائتمان</span>
</button>
<button className="bg-slate-950 border border-slate-800 p-4 rounded-xl flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-slate-600">
<iconify-icon icon="lucide:smartphone" width="24"></iconify-icon>
<span className="text-xs font-bold">أبل باي</span>
</button>
<button className="bg-slate-950 border border-slate-800 p-4 rounded-xl flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-slate-600">
<iconify-icon icon="lucide:truck" width="24"></iconify-icon>
<span className="text-xs font-bold">عند الاستلام</span>
</button>
</div>
<div className="space-y-4">
<div className="space-y-2">
<label className="text-xs text-slate-400">رقم البطاقة</label>
<div className="relative">
<input className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 text-left" dir="ltr" placeholder="0000 0000 0000 0000" type="text"/>
<iconify-icon className="absolute right-4 top-3.5 text-slate-500" icon="lucide:lock"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-slate-400">تاريخ الانتهاء</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 text-center" dir="ltr" placeholder="MM/YY" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-400">CVC</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 text-center" dir="ltr" placeholder="123" type="text"/>
</div>
</div>
</div>
</div>
<button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-500/20 text-lg">
                    دفع 1,483.5 ر.س
                </button>
</div>
</div>
</main>

<footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-indigo-500" icon="lucide:zap" width="24"></iconify-icon>
<span className="text-xl font-bold text-white">سعودي<span className="text-indigo-500">برو</span></span>
</div>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        وجهتكم الأولى للتسوق التقني العصري في المملكة. نجمع بين الجودة، السرعة، والخدمة المميزة.
                    </p>
</div>
<div>
<h4 className="font-bold text-white mb-6">روابط سريعة</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">عن المتجر</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">سياسة الخصوصية</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">الشروط والأحكام</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-white mb-6">الأقسام</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#" onclick="switchPage('shop')">الجوالات</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#" onclick="switchPage('shop')">اللابتوب</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#" onclick="switchPage('shop')">الاكسسوارات</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-white mb-6">تواصل معنا</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-500" icon="lucide:mail"></iconify-icon> help@saudipro.sa</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-500" icon="lucide:phone"></iconify-icon> 920000000</li>
</ul>
</div>
</div>
<div className="border-t border-slate-900 pt-8 text-center md:text-right">
<p className="text-xs text-slate-600">© 2024 سعودي برو. جميع الحقوق محفوظة.</p>
</div>
</div>
</footer>



    </>
  );
}
