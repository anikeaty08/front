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
      

<div className="w-full max-w-4xl bg-[#eff1f3] rounded-[2rem] shadow-2xl overflow-hidden relative border-[6px] border-gray-300">

<div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none mix-blend-multiply" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center bottom'}}>
</div>

<div className="relative z-10 p-5 sm:p-8">

<div className="border-[3px] border-[#cba660] bg-white/70 backdrop-blur-sm shadow-sm">

<div className="bg-[#2d3748] text-white py-5 px-6 flex flex-col md:flex-row justify-between items-center gap-3 border-b-[3px] border-[#cba660]">

<span className="text-xl sm:text-2xl font-semibold tracking-wide">FN2166206965</span>

<span className="text-xl sm:text-2xl font-semibold tracking-wide">80109</span>

<div className="text-lg sm:text-xl font-medium text-center md:text-left dir-ltr flex flex-col items-center md:items-start leading-snug text-gray-100">
<span>2025-10-07</span>
<span>13:36:38</span>
</div>
</div>

<div className="p-6 sm:p-10 space-y-8">

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">

<div className="flex justify-between items-center border-b border-gray-300/60 pb-1">
<span className="text-xl text-gray-500 font-medium">المصدر</span>
<span className="text-xl font-semibold text-gray-900 tracking-tight">316</span>
</div>
<div className="flex justify-between items-center border-b border-gray-300/60 pb-1">
<span className="text-xl text-gray-500 font-medium">الوجهة</span>
<span className="text-xl font-semibold text-gray-900 tracking-tight">3844 - ريف دمشق</span>
</div>

<div className="flex justify-between items-center border-b border-gray-300/60 pb-1">
<span className="text-xl text-gray-500 font-medium">المستفيد</span>
<span className="text-xl font-semibold text-gray-900 tracking-tight">منتهى احمد طيارة</span>
</div>
<div className="flex justify-between items-center border-b border-gray-300/60 pb-1">
<span className="text-xl text-gray-500 font-medium">الجوال</span>
<span className="text-xl font-semibold text-gray-900 tracking-tight">0</span>
</div>

<div className="flex justify-between items-center border-b border-gray-300/60 pb-1">
<span className="text-xl text-gray-500 font-medium">رقم الاشعار</span>
<span className="text-xl font-semibold text-gray-900 tracking-tight">FN2166206965</span>
</div>
<div className="flex justify-between items-center border-b border-gray-300/60 pb-1">
<span className="text-xl text-gray-500 font-medium">الرقم السري</span>
<span className="text-2xl font-bold text-[#dc2626] tracking-tight">80109</span>
</div>

<div className="flex justify-between items-center border-b border-gray-300/60 pb-1">
<span className="text-xl text-gray-500 font-medium">المبلغ</span>
<span className="text-xl font-bold text-[#1d4ed8] tracking-tight">97 دولار امريكي</span>
</div>
<div className="flex justify-center md:justify-end items-center border-b border-gray-300/60 pb-1 pt-2 md:pt-0">
<span className="text-lg font-medium text-gray-800 tracking-tight">سبعة وتسعون دولار امريكي</span>
</div>
</div>

<div className="pt-4">
<div className="text-xl text-gray-500 mb-2 font-medium">عنوان التسليم</div>
<div className="bg-gray-100/50 rounded-xl p-2">
<p className="text-lg md:text-xl font-semibold text-gray-900 leading-9 text-center tracking-tight">
                                ريف دمشق - القطيفة احمد قجة KN - الشارع العام - مقابل المحكمة القديمة - اكبر مبلغ تسليم 5000 $ - التواصل واتساب حصراً - <span className="font-bold" dir="ltr">00963996619076</span>
</p>
</div>
</div>
</div>
</div>

<div className="mt-8 pt-2 px-2">
<h3 className="text-lg font-semibold text-gray-500 mb-4 tracking-tight">ملاحظات مهمة</h3>
<ul className="space-y-3 text-base text-gray-800 font-medium">
<li className="flex items-start gap-3">
<span className="text-gray-900 font-bold text-lg">-</span>
<span>يتم تسليم الحوالة بيد المستلم حصراً بعد التأكد من الهوية الأصلية ولا تقبل الصورة</span>
</li>
<li className="flex items-start gap-3">
<span className="text-gray-900 font-bold text-lg">-</span>
<span>لا تشارك هذا الايصال الا مع المستلم حرصا على سلامة أموالك</span>
</li>
<li className="flex items-start gap-3">
<span className="text-gray-900 font-bold text-lg">-</span>
<span>تبادل الوثيقة الشخصية العائدة للمستفيد مع الجهة المحول اليها الحوالة يعتبر اقراراً من المستفيد باستلام قيمة الحوالة</span>
</li>
<li className="flex items-start gap-3">
<span className="text-gray-900 font-bold text-lg">-</span>
<span>لا تشارك وثيقتك الشخصية الا في حال تم استلام حوالتك</span>
</li>
</ul>
</div>
</div>
</div>


    </>
  );
}
