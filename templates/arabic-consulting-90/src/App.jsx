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



        // Simple script to handle header transparency on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm');
                nav.classList.replace('bg-transparent', 'glass');
            } else {
                nav.classList.remove('shadow-sm');
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
      

<div className="bg-noise"></div>

<div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-200/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-zinc-200/40 rounded-full blur-[120px] mix-blend-multiply"></div>
</div>

<nav className="fixed top-0 inset-x-0 z-50 glass">
<div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2.5 group relative" href="#">
<div className="w-9 h-9 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-bold text-sm shadow-xl group-hover:rotate-6 transition-transform duration-300">
<span className="scale-110">U</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-bold tracking-tight text-zinc-900 leading-none">UniStep</span>
<span className="text-[10px] text-zinc-400 font-medium tracking-wide leading-none mt-0.5">EST. 2019</span>
</div>
</a>

<div className="hidden md:flex items-center gap-1 bg-zinc-100/80 p-1.5 rounded-full border border-zinc-200/60 shadow-inner">
<a className="px-4 py-1.5 text-xs font-semibold text-zinc-900 bg-white rounded-full shadow-sm border border-black/5" href="#">الرئيسية</a>
<a className="px-4 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50/50 rounded-full transition-all" href="#about">من نحن</a>
<a className="px-4 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50/50 rounded-full transition-all" href="#services">الخدمات</a>
<a className="px-4 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50/50 rounded-full transition-all" href="#knowledge">المعرفة</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-full shadow-lg shadow-zinc-200/50 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-95" href="#contact">
<span>ابدأ مشروعك</span>
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</a>
<button className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-100 text-zinc-600">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">

<div className="animate-fade-up opacity-0 [animation-delay:100ms] inline-flex items-center gap-2 pl-4 pr-2 py-1 rounded-full bg-white/50 border border-zinc-200/80 backdrop-blur-sm shadow-sm mb-8 hover:bg-white hover:border-amber-200 transition-colors cursor-default select-none">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-600">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</span>
<span className="text-xs font-semibold text-zinc-600 tracking-wide">الخيار الأول للتحول المؤسسي</span>
</div>

<h1 className="animate-fade-up opacity-0 [animation-delay:300ms] text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-zinc-900 tracking-tight leading-[1] mb-8">
                نصمم المستقبل، <br/>
<span className="relative inline-block">
<span className="relative z-10 text-gradient">بذكاء استراتيجي.</span>
<svg className="absolute -bottom-2 right-0 w-full h-3 text-amber-300/50 -z-10" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path></svg>
</span>
</h1>

<p className="animate-fade-up opacity-0 [animation-delay:500ms] text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
                في <span className="text-zinc-900 font-semibold">UniStep</span>، ندمج الاستشارات الإدارية العميقة مع الحلول الرقمية المتقدمة لتمكين المنظمات من تجاوز التوقعات.
            </p>

<div className="animate-fade-up opacity-0 [animation-delay:700ms] flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white text-sm font-semibold rounded-2xl hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200/50 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]" href="#contact">
                    اطلب استشارة مجانية
                    <iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear"></iconify-icon>
</a>
<a className="group w-full sm:w-auto px-8 py-4 bg-white border border-zinc-200/80 text-zinc-600 text-sm font-semibold rounded-2xl hover:bg-zinc-50 hover:text-zinc-900 hover:border-zinc-300 transition-all shadow-sm flex items-center justify-center gap-2" href="#services">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                    شاهد العرض التعريفي
                </a>
</div>

<div className="mt-20 pt-10 border-t border-zinc-200/50 relative overflow-hidden mask-linear-fade">
<p className="text-xs font-semibold text-zinc-400 mb-6 uppercase tracking-widest">يثق بنا قادة القطاع</p>
<div className="relative w-full overflow-hidden">
<div className="flex whitespace-nowrap animate-scroll hover:[animation-play-state:paused]">

<div className="flex items-center gap-16 mx-8 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<iconify-icon icon="solar:box-bold-duotone" width="32"></iconify-icon>
<span className="text-xl font-bold tracking-tighter">Stripe</span>
</div>
<div className="flex items-center gap-16 mx-8 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<iconify-icon icon="solar:layers-minimalistic-bold-duotone" width="32"></iconify-icon>
<span className="text-xl font-bold tracking-tighter">Acme</span>
</div>
<div className="flex items-center gap-16 mx-8 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<iconify-icon icon="solar:crown-bold-duotone" width="32"></iconify-icon>
<span className="text-xl font-bold tracking-tighter">Crown</span>
</div>
<div className="flex items-center gap-16 mx-8 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<iconify-icon icon="solar:globus-bold-duotone" width="32"></iconify-icon>
<span className="text-xl font-bold tracking-tighter">Global</span>
</div>
<div className="flex items-center gap-16 mx-8 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<iconify-icon icon="solar:briefcase-bold-duotone" width="32"></iconify-icon>
<span className="text-xl font-bold tracking-tighter">Corp</span>
</div>

<div className="flex items-center gap-16 mx-8 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<iconify-icon icon="solar:box-bold-duotone" width="32"></iconify-icon>
<span className="text-xl font-bold tracking-tighter">Stripe</span>
</div>
<div className="flex items-center gap-16 mx-8 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<iconify-icon icon="solar:layers-minimalistic-bold-duotone" width="32"></iconify-icon>
<span className="text-xl font-bold tracking-tighter">Acme</span>
</div>
<div className="flex items-center gap-16 mx-8 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<iconify-icon icon="solar:crown-bold-duotone" width="32"></iconify-icon>
<span className="text-xl font-bold tracking-tighter">Crown</span>
</div>
<div className="flex items-center gap-16 mx-8 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<iconify-icon icon="solar:globus-bold-duotone" width="32"></iconify-icon>
<span className="text-xl font-bold tracking-tighter">Global</span>
</div>
<div className="flex items-center gap-16 mx-8 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<iconify-icon icon="solar:briefcase-bold-duotone" width="32"></iconify-icon>
<span className="text-xl font-bold tracking-tighter">Corp</span>
</div>
</div>

<div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[var(--bg-color)] to-transparent z-10"></div>
<div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[var(--bg-color)] to-transparent z-10"></div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="services">
<div className="max-w-screen-xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">منظومة حلول ذكية</h2>
<p className="mt-4 text-zinc-500 text-lg leading-relaxed">نصمم خدماتنا لتكون حلقات مترابطة تخدم أهدافك الاستراتيجية الكبرى.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-amber-600 transition-colors" href="#">
                    عرض جميع الخدمات
                    <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">

<div className="md:col-span-2 card-hover relative group bg-white rounded-[2rem] p-10 border border-zinc-200/60 overflow-hidden shadow-sm">

<div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-14 h-14 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-center text-zinc-900 shadow-sm group-hover:scale-110 group-hover:bg-amber-50 group-hover:text-amber-600 transition-all duration-500">
<iconify-icon icon="solar:chart-square-bold-duotone" width="28"></iconify-icon>
</div>
<span className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:border-zinc-900 group-hover:text-white transition-all duration-300">
<iconify-icon className="rotate-45" icon="solar:arrow-up-left-linear"></iconify-icon>
</span>
</div>
<div>
<h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-amber-600 transition-colors">الاستراتيجية وإدارة الأداء</h3>
<p className="text-zinc-500 font-medium leading-relaxed max-w-lg">بناء خطط استراتيجية مرنة وربطها بمؤشرات أداء (KPIs) دقيقة، لضمان تحويل الرؤية إلى واقع ملموس.</p>
</div>
</div>

<div className="absolute right-[-20px] bottom-[-20px] w-64 h-64 bg-gradient-to-br from-zinc-100 to-amber-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>

<div className="md:row-span-2 card-hover relative group bg-zinc-900 rounded-[2rem] p-10 border border-zinc-800 overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-800/20 to-zinc-950"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-14 h-14 bg-zinc-800 rounded-2xl border border-zinc-700 flex items-center justify-center text-amber-500 shadow-sm mb-8 group-hover:rotate-12 transition-transform duration-500">
<iconify-icon icon="solar:laptop-minimalistic-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-4">التحول الرقمي</h3>
<p className="text-zinc-400 font-medium leading-relaxed mb-auto">قيادة الابتكار من خلال تبني تقنيات الذكاء الاصطناعي والأتمتة لتحسين الكفاءة.</p>

<div className="mt-8 p-5 rounded-2xl bg-zinc-800/40 border border-zinc-700/50 backdrop-blur-md group-hover:border-amber-500/30 transition-colors">
<div className="flex justify-between items-center mb-4">
<span className="text-[10px] font-mono text-zinc-400 uppercase">System Load</span>
<span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
</div>
<div className="space-y-3">
<div className="h-1.5 w-full bg-zinc-700/50 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 w-[75%] shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
</div>
<div className="h-1.5 w-full bg-zinc-700/50 rounded-full overflow-hidden">
<div className="h-full bg-zinc-500 w-[45%]"></div>
</div>
<div className="h-1.5 w-full bg-zinc-700/50 rounded-full overflow-hidden">
<div className="h-full bg-zinc-600 w-[60%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="card-hover relative group bg-white rounded-[2rem] p-10 border border-zinc-200/60 overflow-hidden shadow-sm">
<div className="relative z-10">
<div className="w-14 h-14 bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-center text-blue-600 mb-6">
<iconify-icon icon="solar:shield-check-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-zinc-900 mb-3">الحوكمة والالتزام</h3>
<p className="text-sm text-zinc-500 font-medium leading-relaxed">تطوير أطر تنظيمية تضمن الشفافية وتحمي مصالح المنظمة.</p>
</div>
</div>

<div className="card-hover relative group bg-white rounded-[2rem] p-10 border border-zinc-200/60 overflow-hidden shadow-sm">
<div className="relative z-10">
<div className="w-14 h-14 bg-rose-50 rounded-2xl border border-rose-100 flex items-center justify-center text-rose-600 mb-6">
<iconify-icon icon="solar:users-group-rounded-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-zinc-900 mb-3">رأس المال البشري</h3>
<p className="text-sm text-zinc-500 font-medium leading-relaxed">تصميم هياكل تنظيمية وبرامج تطوير قدرات تطلق العنان للمواهب.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100 overflow-hidden">
<div className="max-w-screen-xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 relative">

<div className="relative aspect-square max-w-md mx-auto">

<div className="absolute inset-0 bg-gradient-to-tr from-amber-100 to-zinc-100 rounded-[3rem] rotate-3 opacity-60"></div>
<div className="relative z-10 h-full w-full bg-white rounded-[2.5rem] border border-zinc-200 shadow-2xl p-8 flex flex-col">
<div className="flex items-center justify-between mb-8 border-b border-zinc-100 pb-4">
<span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">نمو الأداء السنوي</span>
<div className="px-2 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-bold flex items-center gap-1">
                                    +24%
                                    <iconify-icon icon="solar:graph-up-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 flex items-end justify-between gap-4 px-2">
<div className="w-full bg-zinc-100 rounded-t-xl h-[40%] transition-all hover:bg-amber-100 hover:h-[45%] duration-300"></div>
<div className="w-full bg-zinc-100 rounded-t-xl h-[60%] transition-all hover:bg-amber-100 hover:h-[65%] duration-300"></div>
<div className="w-full bg-zinc-100 rounded-t-xl h-[50%] transition-all hover:bg-amber-100 hover:h-[55%] duration-300"></div>
<div className="w-full bg-zinc-900 rounded-t-xl h-[85%] relative shadow-lg shadow-zinc-900/20 group cursor-pointer">
<div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0">
                                        المستهدف
                                        <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 rotate-45"></div>
</div>
</div>
<div className="w-full bg-zinc-100 rounded-t-xl h-[70%] transition-all hover:bg-amber-100 hover:h-[75%] duration-300"></div>
</div>
</div>

<div className="absolute bottom-10 -right-8 bg-white px-6 py-4 rounded-2xl border border-zinc-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] flex items-center gap-4 animate-[bounce_3s_infinite]">
<div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
<iconify-icon icon="solar:check-circle-bold" width="24"></iconify-icon>
</div>
<div>
<div className="text-[11px] text-zinc-400 font-semibold uppercase">مشاريع منجزة</div>
<div className="text-2xl font-bold text-zinc-900">250+</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8">
<div className="inline-block px-3 py-1 bg-zinc-100 rounded-full text-xs font-semibold text-zinc-600 mb-2">لماذا UniStep؟</div>
<h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.2]">
                        منهجية علمية، <br/>
<span className="text-zinc-400">ونتائج واقعية.</span>
</h2>
<p className="text-lg text-zinc-500 font-medium leading-relaxed max-w-lg">
                        نحن لا نؤمن بالحلول الجاهزة. منهجيتنا تعتمد على الغوص العميق في بياناتك وتحدياتك لاستخراج الفرص الكامنة.
                    </p>
<div className="space-y-6 pt-4">
<div className="group flex gap-5">
<div className="mt-1 w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shrink-0 shadow-sm group-hover:scale-110 group-hover:border-amber-300 transition-all">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-zinc-900 group-hover:text-amber-600 transition-colors">رؤية محلية، معايير عالمية</h4>
<p className="text-zinc-500 text-sm mt-1 leading-relaxed">فهم عميق للسوق السعودي مع تطبيق أفضل ممارسات الـ Big 4.</p>
</div>
</div>
<div className="group flex gap-5">
<div className="mt-1 w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shrink-0 shadow-sm group-hover:scale-110 group-hover:border-amber-300 transition-all">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-zinc-900 group-hover:text-amber-600 transition-colors">الابتكار بالتصميم</h4>
<p className="text-zinc-500 text-sm mt-1 leading-relaxed">نستخدم التفكير التصميمي لحل المشكلات المعقدة بطرق إبداعية.</p>
</div>
</div>
<div className="group flex gap-5">
<div className="mt-1 w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shrink-0 shadow-sm group-hover:scale-110 group-hover:border-amber-300 transition-all">
<iconify-icon icon="solar:database-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-zinc-900 group-hover:text-amber-600 transition-colors">القرار المبني على البيانات</h4>
<p className="text-zinc-500 text-sm mt-1 leading-relaxed">نحول الأرقام المجردة إلى رؤى استراتيجية تقود القرار.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-screen-xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">خبراء القطاع</h2>
<p className="text-zinc-500 font-medium">نخبة من المستشارين ذوي الخبرات المتراكمة.</p>
</div>
<div className="flex gap-2 mt-4 md:mt-0">
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-colors"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-colors"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-[1.5rem] mb-5 bg-zinc-200 aspect-[3/4]">
<img alt="Member" className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-zinc-900"><iconify-icon icon="solar:link-minimalistic-2-bold"></iconify-icon></span>
</div>
</div>
<h3 className="text-xl font-bold text-zinc-900">د. عبدالواحد الزبيدي</h3>
<p className="text-sm text-zinc-500 mt-1">شريك مؤسس، الاستراتيجية</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-[1.5rem] mb-5 bg-zinc-200 aspect-[3/4]">
<img alt="Member" className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-zinc-900"><iconify-icon icon="solar:link-minimalistic-2-bold"></iconify-icon></span>
</div>
</div>
<h3 className="text-xl font-bold text-zinc-900">عادل محمد الربيع</h3>
<p className="text-sm text-zinc-500 mt-1">مستشار التحول الرقمي</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-[1.5rem] mb-5 bg-zinc-200 aspect-[3/4]">
<img alt="Member" className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-zinc-900"><iconify-icon icon="solar:link-minimalistic-2-bold"></iconify-icon></span>
</div>
</div>
<h3 className="text-xl font-bold text-zinc-900">د. عماد نجم</h3>
<p className="text-sm text-zinc-500 mt-1">مستشار رأس المال البشري</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="contact">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-zinc-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none"></div>
<div className="relative z-10 text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">هل أنت مستعد للخطوة التالية؟</h2>
<p className="text-zinc-400">اترك بياناتك وسنتواصل معك خلال 24 ساعة لمناقشة تطلعاتك.</p>
</div>
<form className="relative z-10 space-y-4 max-w-lg mx-auto">
<div className="grid grid-cols-2 gap-4">
<input className="w-full h-14 px-5 bg-zinc-800/50 border border-zinc-700/50 rounded-2xl text-white placeholder:text-zinc-500 focus:outline-none focus:bg-zinc-800 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-600/20 transition-all text-sm" placeholder="الاسم" type="text"/>
<input className="w-full h-14 px-5 bg-zinc-800/50 border border-zinc-700/50 rounded-2xl text-white placeholder:text-zinc-500 focus:outline-none focus:bg-zinc-800 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-600/20 transition-all text-sm" placeholder="البريد الإلكتروني" type="email"/>
</div>
<input className="w-full h-14 px-5 bg-zinc-800/50 border border-zinc-700/50 rounded-2xl text-white placeholder:text-zinc-500 focus:outline-none focus:bg-zinc-800 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-600/20 transition-all text-sm" placeholder="الشركة / الجهة" type="text"/>
<textarea className="w-full p-5 bg-zinc-800/50 border border-zinc-700/50 rounded-2xl text-white placeholder:text-zinc-500 focus:outline-none focus:bg-zinc-800 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-600/20 transition-all text-sm resize-none" placeholder="كيف يمكننا مساعدتك؟" rows="4"></textarea>
<button className="w-full h-14 bg-white text-zinc-900 text-sm font-bold rounded-2xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group mt-4" type="button">
<span>إرسال الطلب</span>
<iconify-icon className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-3-bold"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 pt-20 pb-10">
<div className="max-w-screen-xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-bold text-sm">U</div>
<span className="text-xl font-bold text-zinc-900 tracking-tight">UniStep</span>
</div>
<p className="text-zinc-500 text-sm leading-relaxed mb-6">شريكك الاستراتيجي في رحلة التحول المؤسسي، من التخطيط إلى الأثر.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full md:w-auto">
<div>
<h4 className="text-zinc-900 font-bold text-sm mb-4">الشركة</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">من نحن</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">العملاء</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">الوظائف</a></li>
</ul>
</div>
<div>
<h4 className="text-zinc-900 font-bold text-sm mb-4">الخدمات</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">الاستراتيجية</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">التحول الرقمي</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">الحوكمة</a></li>
</ul>
</div>
<div>
<h4 className="text-zinc-900 font-bold text-sm mb-4">تواصل</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li>Linked In</li>
<li>Twitter X</li>
<li>Instagram</li>
</ul>
</div>
<div>
<h4 className="text-zinc-900 font-bold text-sm mb-4">قانوني</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">الخصوصية</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">الشروط</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400 font-medium">
<p>© 2024 شركة الخطوة النوعية للاستشارات.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
                    جميع الأنظمة تعمل بكفاءة
                </div>
</div>
</div>
</footer>

<a className="group fixed bottom-8 right-8 w-14 h-14 bg-zinc-900 text-white rounded-2xl shadow-2xl flex items-center justify-center transition-all hover:scale-110 hover:rotate-3 z-50" href="#">
<iconify-icon icon="solar:chat-round-dots-bold" width="24"></iconify-icon>
<span className="absolute right-full mr-4 bg-white text-zinc-900 px-3 py-1 rounded-lg text-xs font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none">تواصل معنا</span>
</a>


    </>
  );
}
