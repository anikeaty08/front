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
      

<nav className="w-full py-6 flex justify-center items-center">
<div className="flex items-center gap-3 text-[#000E77]">
<iconify-icon icon="solar:scale-linear" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-lg font-bold tracking-tight">موسوعة الراية</span>
</div>
</nav>

<header className="text-center mb-10 px-4">
<h1 className="text-3xl md:text-4xl font-semibold text-[#000E77] tracking-tight mb-3">
            اشترك الآن في موسوعة الراية القانونية
        </h1>
<p className="text-slate-500 text-base md:text-lg font-light max-w-xl mx-auto">
            اختر خطتك المناسبة وأكمل الاشتراك بخطوات بسيطة وآمنة للوصول إلى أضخم مكتبة قانونية.
        </p>
</header>

<main className="max-w-4xl mx-auto px-4 md:px-6 relative">

<div className="sticky top-4 z-40 bg-white/80 backdrop-blur-md border border-white/20 shadow-sm rounded-2xl px-6 py-4 mb-8 flex items-center justify-between md:justify-center md:gap-12 transition-all duration-300">

<div className="flex items-center gap-2 text-[#000E77]">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#000E77]/10 text-[#000E77]">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium hidden md:inline">اختيار الخطة</span>
</div>
<div className="h-[1px] w-8 bg-slate-200 hidden md:block"></div>

<div className="flex items-center gap-2 text-[#000E77]">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#000E77] text-white shadow-lg shadow-[#000E77]/20">
<span className="text-xs font-bold">2</span>
</div>
<span className="text-sm font-semibold">الشروط والأحكام</span>
</div>
<div className="h-[1px] w-8 bg-slate-200 hidden md:block"></div>

<div className="flex items-center gap-2 text-slate-400">
<div className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-200">
<span className="text-xs font-medium">3</span>
</div>
<span className="text-sm font-light hidden md:inline">الدفع</span>
</div>
</div>
<form className="space-y-6" onsubmit="event.preventDefault();">

<section className="bg-white rounded-2xl border border-slate-200 shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
<div className="p-6 md:p-8">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<div className="bg-[#000E77]/5 p-2 rounded-lg text-[#000E77]">
<iconify-icon icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h2 className="text-xl font-semibold text-slate-800">تفاصيل الخطة</h2>
</div>
<span className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full font-medium border border-green-100">موصى به</span>
</div>

<div className="relative group cursor-pointer">

<div className="absolute -inset-[1px] bg-[#000E77] rounded-xl opacity-100 transition-opacity"></div>
<div className="relative bg-white p-5 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<h3 className="text-lg font-bold text-slate-900 mb-1">الخطة الأساسية الشاملة</h3>
<p className="text-slate-500 text-sm font-light">وصول كامل لجميع المراجع والأحكام القضائية</p>
</div>
<div className="text-left md:text-right">
<div className="flex items-baseline gap-1 md:justify-end">
<span className="text-2xl font-bold text-[#000E77] tracking-tight">3000</span>
<span className="text-sm text-slate-500 font-medium">ج.م / سنوياً</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-[#000E77]" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="text-sm text-slate-600">وصول غير محدود للأحكام</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-[#000E77]" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="text-sm text-slate-600">تحميل المستندات بصيغة PDF</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-[#000E77]" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="text-sm text-slate-600">دعم فني متخصص 24/7</span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-[#000E77]" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span className="text-sm text-slate-600">تحديثات يومية للقوانين</span>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-2xl border border-slate-200 shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 md:p-8">
<div className="flex items-center gap-3 mb-4">
<div className="bg-slate-100 p-2 rounded-lg text-slate-600">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h2 className="text-xl font-semibold text-slate-800">شروط وأحكام الاشتراك</h2>
</div>
<div className="bg-slate-50 border border-slate-100 rounded-xl p-4 h-40 overflow-y-auto custom-scrollbar mb-5 text-sm leading-relaxed text-slate-600 font-light text-justify">
<p className="mb-3">
                        أهلاً بكم في موسوعة الراية القانونية. باشتراكك في هذه الخدمة، فإنك توافق على الالتزام بجميع الشروط والأحكام الواردة أدناه. يرجى قراءة هذه الشروط بعناية قبل إتمام عملية الدفع.
                    </p>
<p className="mb-3">
                        1. حقوق الملكية الفكرية: جميع المحتويات المتاحة في الموسوعة محمية بموجب قوانين حقوق النشر. يمنع نسخ أو إعادة توزيع المحتوى دون إذن كتابي مسبق.
                    </p>
<p className="mb-3">
                        2. سياسة الاستخدام: الحساب مخصص للاستخدام الشخصي أو المؤسسي المحدد في نوع الاشتراك. يحظر مشاركة بيانات الدخول مع أطراف ثالثة، ويحق لإدارة الموسوعة تعليق الحساب في حال رصد دخول مشبوه.
                    </p>
<p className="mb-3">
                        3. سياسة الاسترجاع: يمكن استرداد المبلغ المدفوع خلال 7 أيام من تاريخ الاشتراك في حال وجود مشاكل تقنية جوهرية تمنع الوصول للخدمة، ولا يشمل ذلك عدم الرضا الشخصي عن المحتوى.
                    </p>
<p>
                        4. التجديد التلقائي: يتم تجديد الاشتراك سنوياً بشكل تلقائي ما لم يتم إلغاء التفعيل من إعدادات الحساب قبل موعد التجديد بـ 24 ساعة على الأقل.
                    </p>
</div>
<label className="flex items-start gap-3 cursor-pointer group select-none">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-slate-300 rounded-md peer-checked:bg-[#000E77] peer-checked:border-[#000E77] transition-all duration-200"></div>
<iconify-icon className="absolute inset-0 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transform scale-50 peer-checked:scale-100 transition-all duration-200" icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">
                        لقد قرأت وأوافق على <span className="text-[#000E77] underline underline-offset-4">الشروط والأحكام</span> وسياسة الخصوصية.
                    </span>
</label>
</section>

<section className="bg-white rounded-2xl border border-slate-200 shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 md:p-8">
<div className="flex items-center gap-3 mb-6">
<div className="bg-slate-100 p-2 rounded-lg text-slate-600">
<iconify-icon icon="solar:card-linear" width="24"></iconify-icon>
</div>
<h2 className="text-xl font-semibold text-slate-800">بيانات الدفع</h2>
</div>

<div className="flex gap-3 mb-6">
<button className="flex-1 py-3 px-4 border-2 border-[#000E77] bg-[#000E77]/5 rounded-xl flex items-center justify-center gap-2 transition-all" type="button">
<iconify-icon className="text-[#000E77]" icon="solar:card-linear"></iconify-icon>
<span className="text-sm font-semibold text-[#000E77]">بطاقة ائتمان</span>
</button>
<button className="flex-1 py-3 px-4 border border-slate-200 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-all opacity-60" type="button">
<iconify-icon icon="logos:paypal" width="16"></iconify-icon>
<span className="text-sm font-medium text-slate-600">PayPal</span>
</button>
</div>
<div className="space-y-5">

<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 tracking-wide">رقم البطاقة</label>
<div className="relative">
<input className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-lg focus:ring-2 focus:ring-[#000E77] focus:border-transparent focus:bg-white p-3 pr-10 outline-none transition-all placeholder:text-slate-300 font-mono text-left" dir="ltr" placeholder="0000 0000 0000 0000" type="text"/>
<div className="absolute right-3 top-3 text-slate-400">
<iconify-icon icon="solar:card-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-5">

<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 tracking-wide">تاريخ الانتهاء</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-lg focus:ring-2 focus:ring-[#000E77] focus:border-transparent focus:bg-white p-3 outline-none transition-all placeholder:text-slate-300 font-mono text-center" dir="ltr" placeholder="MM / YY" type="text"/>
</div>

<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 tracking-wide flex justify-between">
                                رمز الأمان (CVC)
                                <iconify-icon className="text-slate-400 cursor-help" icon="solar:info-circle-linear"></iconify-icon>
</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-lg focus:ring-2 focus:ring-[#000E77] focus:border-transparent focus:bg-white p-3 outline-none transition-all placeholder:text-slate-300 font-mono text-center" dir="ltr" placeholder="123" type="text"/>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 tracking-wide">اسم حامل البطاقة</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-lg focus:ring-2 focus:ring-[#000E77] focus:border-transparent focus:bg-white p-3 outline-none transition-all placeholder:text-slate-400" placeholder="الاسم كما يظهر على البطاقة" type="text"/>
</div>
</div>

<div className="mt-6 flex justify-center items-center gap-2 text-slate-400">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
<span className="text-xs">عملية دفع مشفرة ومحمية 100% بنظام SSL</span>
</div>
</section>

<div className="pt-4 sticky bottom-4 z-30">
<button className="w-full bg-[#000E77] text-white py-4 rounded-xl shadow-lg shadow-[#000E77]/20 hover:shadow-[#000E77]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-3 group" type="submit">
<span className="text-lg font-semibold">إتمام الدفع</span>
<span className="bg-white/10 px-2 py-0.5 rounded text-sm font-medium group-hover:bg-white/20 transition-colors">3000 ج.م</span>
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
</div>
</form>
</main>

<footer className="mt-16 border-t border-slate-200 py-8 text-center">
<div className="flex justify-center gap-6 mb-4 grayscale opacity-40">
<iconify-icon icon="logos:visa" width="36"></iconify-icon>
<iconify-icon icon="logos:mastercard" width="28"></iconify-icon>
<iconify-icon icon="logos:stripe" width="36"></iconify-icon>
</div>
<p className="text-xs text-slate-400 font-light">© 2023 موسوعة الراية القانونية. جميع الحقوق محفوظة.</p>
</footer>

    </>
  );
}
