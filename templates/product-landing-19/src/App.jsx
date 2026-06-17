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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<main className="max-w-[480px] mx-auto bg-white min-h-screen shadow-[0_0_40px_rgba(0,0,0,0.05)] relative overflow-hidden">

<div className="bg-[#0B3B33] text-[#FAF8F5] py-2 px-3 flex justify-center items-center flex-wrap gap-x-4 gap-y-1">
<div className="flex items-center gap-1.5 text-xs font-medium">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
<span>التوصيل مجاني لجميع المدن</span>
</div>
<div className="w-px h-3 bg-white/20 hidden sm:block"></div>
<div className="flex items-center gap-1.5 text-xs font-medium">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>24–48 ساعة</span>
</div>
<div className="w-px h-3 bg-white/20 hidden sm:block"></div>
<div className="flex items-center gap-1.5 text-xs font-medium">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
<span>الدفع عند الاستلام</span>
</div>
</div>

<section className="px-5 pt-8 pb-10 bg-[#FAF8F5]">
<h1 className="text-3xl font-semibold tracking-tight leading-[1.15] mb-4 text-[#0B3B33]">
                وداعاً للوبر… وخلي حوايجك تبان جديدة
            </h1>
<p className="text-base font-medium mb-6 leading-relaxed text-gray-600">
                كيحيد الوبر فثواني بلا ما يضر القماش
            </p>

<div className="flex items-end gap-3 mb-8">
<span className="text-4xl font-semibold tracking-tight text-[#0B3B33]">199 <span className="text-lg">درهم</span></span>
<span className="text-base text-gray-400 line-through mb-1">299 درهم</span>
</div>

<a className="flex items-center justify-center gap-2 w-full bg-[#0B3B33] text-white py-4 rounded-2xl font-semibold text-lg shadow-[0_8px_20px_rgba(11,59,51,0.25)] hover:bg-[#082a24] transition-colors mb-8 active:scale-[0.98]" href="#order-form">
                أكّد الطلب دابا
                <iconify-icon className="text-xl" icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</a>

<div className="w-full aspect-[4/5] bg-white rounded-3xl border border-gray-200/60 shadow-sm relative overflow-hidden flex flex-col items-center justify-center gap-3">
<iconify-icon className="text-4xl text-gray-300" icon="solar:gallery-wide-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs text-gray-400 font-medium tracking-wide">صورة المنتج</span>
</div>
</section>

<section className="px-5 py-10 bg-white">
<h2 className="text-xl font-semibold tracking-tight mb-6 text-center">المشاكل لي كيهنيك منها</h2>
<div className="flex flex-col gap-3">
<div className="bg-[#FAF8F5] p-4 rounded-2xl flex items-center gap-4 border border-gray-100">
<div className="bg-white p-2.5 rounded-xl shadow-sm text-[#0B3B33] shrink-0">
<iconify-icon className="text-xl" icon="solar:sad-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm font-medium leading-relaxed">الوبر كيخلي اللبسة تبان قديمة</p>
</div>
<div className="bg-[#FAF8F5] p-4 rounded-2xl flex items-center gap-4 border border-gray-100">
<div className="bg-white p-2.5 rounded-xl shadow-sm text-[#0B3B33] shrink-0">
<iconify-icon className="text-xl" icon="solar:t-shirt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm font-medium leading-relaxed">كيبان بزاف فالصوف والمعاطف</p>
</div>
<div className="bg-[#FAF8F5] p-4 rounded-2xl flex items-center gap-4 border border-gray-100">
<div className="bg-white p-2.5 rounded-xl shadow-sm text-[#0B3B33] shrink-0">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm font-medium leading-relaxed">كتصرف فلوس على حوايج جداد بلا سبب</p>
</div>
</div>
</section>

<section className="px-5 py-10 bg-[#FAF8F5]">
<h2 className="text-xl font-semibold tracking-tight mb-6 text-center">النتيجة فالبلاصة</h2>
<div className="grid grid-cols-2 gap-3">
<div className="aspect-square bg-white rounded-2xl border border-gray-200/60 shadow-sm flex flex-col items-center justify-center relative">
<span className="absolute top-2 right-2 bg-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded-md font-semibold">قبل</span>
<iconify-icon className="text-2xl text-gray-300 mb-1" icon="solar:gallery-minimalistic-linear"></iconify-icon>
<span className="text-[10px] text-gray-400">صورة قبل</span>
</div>
<div className="aspect-square bg-white rounded-2xl border-2 border-[#0B3B33]/20 shadow-sm flex flex-col items-center justify-center relative">
<span className="absolute top-2 right-2 bg-[#0B3B33] text-white text-[10px] px-2 py-1 rounded-md font-semibold">بعد</span>
<iconify-icon className="text-2xl text-[#0B3B33]/40 mb-1" icon="solar:gallery-minimalistic-linear"></iconify-icon>
<span className="text-[10px] text-[#0B3B33]/60">صورة بعد</span>
</div>
</div>
</section>

<section className="px-5 py-10 bg-white">
<h2 className="text-xl font-semibold tracking-tight mb-6 text-center">المميزات ديالها</h2>
<ul className="space-y-4 bg-[#0B3B33] text-[#FAF8F5] p-6 rounded-[2rem] shadow-lg">
<li className="flex items-center gap-3">
<div className="bg-white/10 p-2 rounded-lg text-[#F59E0B]">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium">شبكة فولاذية آمنة على القماش</span>
</li>
<li className="flex items-center gap-3">
<div className="bg-white/10 p-2 rounded-lg text-[#F59E0B]">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium">كينقي بسرعة</span>
</li>
<li className="flex items-center gap-3">
<div className="bg-white/10 p-2 rounded-lg text-[#F59E0B]">
<iconify-icon icon="solar:usb-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium">كيتشحن بـ USB</span>
</li>
<li className="flex items-center gap-3">
<div className="bg-white/10 p-2 rounded-lg text-[#F59E0B]">
<iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium">خزان الوبر ساهل يتفرّغ</span>
</li>
<li className="flex items-center gap-3">
<div className="bg-white/10 p-2 rounded-lg text-[#F59E0B]">
<iconify-icon icon="solar:sofa-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium">صالح للملابس، الكوفيرات، الكنب</span>
</li>
</ul>
</section>

<section className="px-5 py-10 bg-[#FAF8F5]">
<h2 className="text-xl font-semibold tracking-tight mb-10 text-center">كيفاش كتستعملو؟</h2>
<div className="flex justify-between items-start relative px-2">

<div className="absolute top-6 left-[10%] right-[10%] h-px bg-gray-200 -z-10"></div>
<div className="flex flex-col items-center gap-3 w-1/3">
<div className="w-12 h-12 bg-white border border-gray-200 shadow-sm rounded-2xl flex items-center justify-center text-[#0B3B33]">
<iconify-icon className="text-2xl" icon="solar:power-button-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-semibold">كتشلّو</span>
</div>
<div className="flex flex-col items-center gap-3 w-1/3">
<div className="w-12 h-12 bg-[#0B3B33] shadow-md shadow-teal-900/20 rounded-2xl flex items-center justify-center text-white">
<iconify-icon className="text-2xl" icon="solar:hand-swipe-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-semibold text-[#0B3B33]">كتمرّرو</span>
</div>
<div className="flex flex-col items-center gap-3 w-1/3">
<div className="w-12 h-12 bg-white border border-gray-200 shadow-sm rounded-2xl flex items-center justify-center text-[#0B3B33]">
<iconify-icon className="text-2xl" icon="solar:trash-bin-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-semibold">كتبرّز الوبر</span>
</div>
</div>
</section>

<section className="py-10 bg-white overflow-hidden">
<h2 className="text-xl font-semibold tracking-tight mb-6 px-5 text-center">شنو قالو الكليان</h2>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-5 pb-6 hide-scrollbar">

<div className="min-w-[85%] snap-center bg-[#FAF8F5] p-5 rounded-2xl border border-gray-100">
<div className="flex text-[#F59E0B] text-sm mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-medium leading-relaxed mb-4 text-gray-700">"صراحة نفعتني بزاف، رجعات ليا الجاكيتات ديالي بحال يالاه شريتهم. التوصيل كان سريع."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-[#0B3B33]/10 rounded-full flex items-center justify-center text-[#0B3B33] font-semibold text-xs">ي</div>
<div>
<div className="text-xs font-semibold">ياسين</div>
<div className="text-[10px] text-gray-500">الدار البيضاء</div>
</div>
</div>
</div>

<div className="min-w-[85%] snap-center bg-[#FAF8F5] p-5 rounded-2xl border border-gray-100">
<div className="flex text-[#F59E0B] text-sm mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-medium leading-relaxed mb-4 text-gray-700">"زوينة ومكتقطعش الحوايج. خديت العرض ديال جوج، وحدة ليا ووحدة لماما وعجباتها."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-[#0B3B33]/10 rounded-full flex items-center justify-center text-[#0B3B33] font-semibold text-xs">ف</div>
<div>
<div className="text-xs font-semibold">فاطمة الزهراء</div>
<div className="text-[10px] text-gray-500">الرباط</div>
</div>
</div>
</div>

<div className="min-w-[85%] snap-center bg-[#FAF8F5] p-5 rounded-2xl border border-gray-100">
<div className="flex text-[#F59E0B] text-sm mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone"></iconify-icon>
</div>
<p className="text-sm font-medium leading-relaxed mb-4 text-gray-700">"ثمن مناسب ومقارنة مع داكشي لي كدير تستاهل. شكرا على التوصيل المجاني."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-[#0B3B33]/10 rounded-full flex items-center justify-center text-[#0B3B33] font-semibold text-xs">ك</div>
<div>
<div className="text-xs font-semibold">كريم</div>
<div className="text-[10px] text-gray-500">طنجة</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-5 py-10 bg-[#FAF8F5]">
<h2 className="text-xl font-semibold tracking-tight mb-6 text-center">أسئلة شائعة</h2>
<div className="space-y-3">
<details className="group bg-white rounded-2xl border border-gray-200/60 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 font-semibold text-sm cursor-pointer select-none">
                        واش الدفع عند الاستلام؟
                        <iconify-icon className="text-gray-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                        آه، متخلص والو حتى توصلك الأمانة ديالك ليديك.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-gray-200/60 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 font-semibold text-sm cursor-pointer select-none">
                        شحال كيدير التوصيل؟
                        <iconify-icon className="text-gray-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                        التوصيل فابور لجميع المدن، وكياخد 24 تال 48 ساعة.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-gray-200/60 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 font-semibold text-sm cursor-pointer select-none">
                        واش كييضر القماش؟
                        <iconify-icon className="text-gray-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                        لا، مصممة بشبكة معدنية خاصة كتحمي القماش وكتحيد غير الوبر الزايد.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-gray-200/60 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 font-semibold text-sm cursor-pointer select-none">
                        واش كيخدم على جميع الأنواع؟
                        <iconify-icon className="text-gray-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                        آه، صالح للملابس، الكوفيرات، والكنب (الصالونات).
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-gray-200/60 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 font-semibold text-sm cursor-pointer select-none">
                        كيفاش كيتشحن؟
                        <iconify-icon className="text-gray-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                        كيتشحن بكابل USB عادي لي كيجي معاه، بحال التليفون.
                    </div>
</details>
</div>
</section>

<section className="px-5 py-10 bg-white shadow-[0_-10px_30px_rgba(0,0,0,0.02)] relative z-10" id="order-form">
<div className="text-center mb-6">
<h2 className="text-2xl font-semibold tracking-tight mb-2">أكّد الطلب ديالك دابا</h2>
</div>
<form action="#" className="space-y-4" method="POST">

<div className="space-y-3 mb-4">

<label className="relative flex items-center p-4 cursor-pointer rounded-2xl border border-gray-200 bg-[#FAF8F5] hover:border-[#0B3B33]/30 transition-colors">
<input className="peer sr-only" name="variant" type="radio" value="1"/>
<div className="w-5 h-5 rounded-full border border-gray-300 peer-checked:border-[#0B3B33] peer-checked:border-[6px] ml-3 transition-all bg-white"></div>
<div className="flex-1">
<div className="font-semibold text-sm">قطعة وحدة</div>
</div>
<div className="font-semibold text-[#0B3B33] text-base">199 درهم</div>
</label>

<label className="relative flex items-center p-4 cursor-pointer rounded-2xl border-2 border-[#0B3B33] bg-[#0B3B33]/[0.02] transition-colors shadow-sm">
<input checked="" className="peer sr-only" name="variant" type="radio" value="2"/>

<div className="absolute -top-3 left-4 bg-[#F59E0B] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide shadow-sm flex items-center gap-1">
<iconify-icon icon="solar:fire-bold"></iconify-icon>
                            الأكثر طلباً
                        </div>
<div className="w-5 h-5 rounded-full border border-gray-300 peer-checked:border-[#0B3B33] peer-checked:border-[6px] ml-3 transition-all bg-white"></div>
<div className="flex-1">
<div className="font-semibold text-sm">جوج قطع</div>
</div>
<div className="font-semibold text-[#0B3B33] text-base">299 درهم</div>
</label>
</div>

<div className="flex items-center justify-center gap-2 text-[11px] font-medium text-gray-500 mb-6 pb-2 border-b border-gray-100">
<span className="flex items-center gap-1"><iconify-icon icon="solar:routing-2-linear"></iconify-icon> توصيل مجاني</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:wallet-money-linear"></iconify-icon> الدفع عند الاستلام</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 24-48 ساعة</span>
</div>

<div>
<input className="w-full bg-[#FAF8F5] border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-[#0B3B33] focus:ring-1 focus:ring-[#0B3B33] transition-all placeholder-gray-400" name="name" placeholder="الاسم الكامل" required="" type="text"/>
</div>
<div>
<input className="w-full bg-[#FAF8F5] border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-[#0B3B33] focus:ring-1 focus:ring-[#0B3B33] transition-all placeholder-gray-400 text-right" dir="ltr" name="phone" placeholder="رقم الهاتف" required="" type="tel"/>
</div>
<div>
<input className="w-full bg-[#FAF8F5] border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium focus:outline-none focus:border-[#0B3B33] focus:ring-1 focus:ring-[#0B3B33] transition-all placeholder-gray-400" name="city" placeholder="المدينة" required="" type="text"/>
</div>
<button className="w-full bg-[#0B3B33] text-white py-4 rounded-xl font-semibold text-lg shadow-[0_8px_20px_rgba(11,59,51,0.25)] hover:bg-[#082a24] transition-all mt-4 active:scale-[0.98]" type="submit">
                    أكّد الطلب دابا
                </button>
<p className="text-center text-xs text-gray-500 font-medium mt-3 leading-relaxed">
                    غادي نعيطو ليك فالأقرب باش نأكدّو الطلب وناخدو العنوان
                </p>
</form>
</section>
</main>

<div className="fixed bottom-0 left-0 right-0 p-3 bg-white/90 backdrop-blur-md border-t border-gray-200 lg:hidden z-50">
<a className="flex items-center justify-center gap-2 w-full max-w-md mx-auto bg-[#0B3B33] text-white py-3.5 rounded-xl font-semibold text-base shadow-lg active:scale-[0.98] transition-transform" href="#order-form">
            أكّد الطلب دابا
        </a>
</div>

    </>
  );
}
