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
      

<div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(240,180,41,0.07),transparent)] z-0"></div>
<div className="z-10 max-w-[900px] mr-auto ml-auto pt-11 pr-5 pb-16 pl-5 relative">

<header className="text-center mb-12 [animation:up_.7s_ease_both]">
<div className="inline-flex items-center gap-2 bg-gradient-to-br from-[#f0b429] to-[#d49519] text-black text-xs font-semibold tracking-widest px-4 py-1.5 rounded-full mb-4 uppercase">
<iconify-icon className="text-base" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
        المراجعة الجهوية
      </div>
<h1 className="font-['Amiri'] text-3xl md:text-4xl text-white leading-snug tracking-tight font-medium mb-2.5">
        أولى باكالوريا<br/><em className="text-[#f0b429] not-italic">علوم رياضية</em>
</h1>
<p className="text-[#8898aa] text-sm font-normal">برنامج مكثف — 6 أسابيع — 4 مواد فقط</p>
</header>

<div className="flex items-start md:items-center gap-3.5 bg-[#f0b429]/10 border border-[#f0b429]/25 rounded-2xl p-4 md:p-5 mb-10 text-sm font-normal leading-relaxed [animation:up_.7s_.1s_ease_both]">
<iconify-icon className="text-2xl text-[#f0b429] shrink-0 mt-0.5 md:mt-0" icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
        الجهوي ديال علوم رياضية كادوز <strong className="text-[#f0b429] font-medium">فقط</strong> في:
        اللغة العربية، اللغة الفرنسية، الاجتماعيات (التاريخ والجغرافيا)، والتربية الإسلامية.
        ركز عليهم بالكامل!
      </div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-11 [animation:up_.7s_.15s_ease_both]">
<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-4 md:p-5 text-center transition-colors hover:border-white/10">
<div className="text-2xl md:text-3xl font-bold text-[#f0b429] leading-none tracking-tight">6</div>
<div className="text-xs text-[#8898aa] mt-1.5 font-normal">أسابيع</div>
</div>
<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-4 md:p-5 text-center transition-colors hover:border-white/10">
<div className="text-2xl md:text-3xl font-bold text-[#f0b429] leading-none tracking-tight">4</div>
<div className="text-xs text-[#8898aa] mt-1.5 font-normal">مواد</div>
</div>
<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-4 md:p-5 text-center transition-colors hover:border-white/10">
<div className="text-2xl md:text-3xl font-bold text-[#f0b429] leading-none tracking-tight">~5h</div>
<div className="text-xs text-[#8898aa] mt-1.5 font-normal">يومياً</div>
</div>
<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-4 md:p-5 text-center transition-colors hover:border-white/10">
<div className="text-2xl md:text-3xl font-bold text-[#f0b429] leading-none tracking-tight">100%</div>
<div className="text-xs text-[#8898aa] mt-1.5 font-normal">تركيز</div>
</div>
</div>

<div className="flex items-center gap-2.5 text-base md:text-lg font-semibold text-white mb-4 mt-10 tracking-tight">
<div className="w-1 h-5 rounded-full bg-[#f0b429]"></div>
      المواد الأربع وخطة المراجعة
    </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 [animation:up_.7s_.2s_ease_both]">

<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)] group">
<div className="absolute top-0 inset-x-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#f0b429] to-[#f87171] opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between mb-3.5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#f0b429]/10 text-[#f0b429] flex items-center justify-center text-xl">
<iconify-icon icon="solar:book-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-sm font-semibold text-white">اللغة العربية</div>
</div>
<div className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-[#8898aa]">معامل 2</div>
</div>
<div className="text-2xl font-bold text-white mb-1.5 tracking-tight">28 ساعة <span className="text-sm font-normal text-[#8898aa]">/ 6 أسابيع</span></div>
<div className="flex flex-wrap gap-1.5 my-3">
<span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#f87171]/[0.15] text-[#f87171]">أولوية قصوى</span>
<span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#f0b429]/[0.15] text-[#f0b429]">معامل متوسط</span>
</div>
<ul className="list-none border-t border-white/[0.07] pt-3.5 mt-3.5 space-y-2">
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#f0b429] rotate-45 shrink-0"></div> النصوص الأدبية وتحليلها</li>
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#f0b429] rotate-45 shrink-0"></div> التعبير والإنشاء (المقالة الأدبية)</li>
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#f0b429] rotate-45 shrink-0"></div> الدراسة اللغوية والنحو</li>
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#f0b429] rotate-45 shrink-0"></div> المحفوظات والشعر</li>
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#f0b429] rotate-45 shrink-0"></div> حل امتحانات جهوية سابقة</li>
</ul>
</div>

<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)] group">
<div className="absolute top-0 inset-x-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#c084fc] to-[#38bdf8] opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between mb-3.5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#c084fc]/10 text-[#c084fc] flex items-center justify-center text-xl">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-sm font-semibold text-white">اللغة الفرنسية</div>
</div>
<div className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-[#8898aa]">معامل 4</div>
</div>
<div className="text-2xl font-bold text-white mb-1.5 tracking-tight">56 ساعة <span className="text-sm font-normal text-[#8898aa]">/ 6 أسابيع</span></div>
<div className="flex flex-wrap gap-1.5 my-3">
<span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#f87171]/[0.15] text-[#f87171]">أولوية قصوى</span>
<span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#c084fc]/[0.15] text-[#c084fc]">معامل عالي جداً</span>
</div>
<ul className="list-none border-t border-white/[0.07] pt-3.5 mt-3.5 space-y-2">
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#c084fc] rotate-45 shrink-0"></div> Texte argumentatif — تحليل ونقد</li>
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#c084fc] rotate-45 shrink-0"></div> Rédaction — الكتابة الإبداعية</li>
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#c084fc] rotate-45 shrink-0"></div> Grammaire &amp; Conjugaison</li>
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#c084fc] rotate-45 shrink-0"></div> Vocabulaire &amp; Expressions</li>
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#c084fc] rotate-45 shrink-0"></div> Examens régionaux précédents</li>
</ul>
</div>

<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)] group">
<div className="absolute top-0 inset-x-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#4ade80] to-[#38bdf8] opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between mb-3.5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#4ade80]/10 text-[#4ade80] flex items-center justify-center text-xl">
<iconify-icon icon="solar:moon-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-sm font-semibold text-white">التربية الإسلامية</div>
</div>
<div className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-[#8898aa]">معامل 2</div>
</div>
<div className="text-2xl font-bold text-white mb-1.5 tracking-tight">28 ساعة <span className="text-sm font-normal text-[#8898aa]">/ 6 أسابيع</span></div>
<div className="flex flex-wrap gap-1.5 my-3">
<span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#f0b429]/[0.15] text-[#f0b429]">مهمة</span>
<span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#4ade80]/[0.15] text-[#4ade80]">قابلة للحفظ</span>
</div>
<ul className="list-none border-t border-white/[0.07] pt-3.5 mt-3.5 space-y-2">
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#4ade80] rotate-45 shrink-0"></div> تلاوة القرآن الكريم وتجويده</li>
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#4ade80] rotate-45 shrink-0"></div> الفقه وأحكامه</li>
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#4ade80] rotate-45 shrink-0"></div> العقيدة الإسلامية</li>
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#4ade80] rotate-45 shrink-0"></div> السيرة النبوية والتاريخ الإسلامي</li>
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#4ade80] rotate-45 shrink-0"></div> القيم والأخلاق الإسلامية</li>
</ul>
</div>

<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)] group">
<div className="absolute top-0 inset-x-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#f87171] to-[#fb923c] opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between mb-3.5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-[#f87171]/10 text-[#f87171] flex items-center justify-center text-xl">
<iconify-icon icon="solar:map-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-sm font-semibold text-white">الاجتماعيات</div>
</div>
<div className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-[#8898aa]">معامل 2</div>
</div>
<div className="text-2xl font-bold text-white mb-1.5 tracking-tight">28 ساعة <span className="text-sm font-normal text-[#8898aa]">/ 6 أسابيع</span></div>
<div className="flex flex-wrap gap-1.5 my-3">
<span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#f0b429]/[0.15] text-[#f0b429]">مهمة</span>
<span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#4ade80]/[0.15] text-[#4ade80]">فهم + حفظ</span>
</div>
<ul className="list-none border-t border-white/[0.07] pt-3.5 mt-3.5 space-y-2">
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#f87171] rotate-45 shrink-0"></div> التاريخ: الأحداث الكبرى والوثائق</li>
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#f87171] rotate-45 shrink-0"></div> الجغرافيا: الخرائط والتحليل</li>
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#f87171] rotate-45 shrink-0"></div> التربية على المواطنة</li>
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#f87171] rotate-45 shrink-0"></div> تحليل وثائق تاريخية وجغرافية</li>
<li className="text-xs text-[#8898aa] flex items-center gap-2 font-normal"><div className="w-1 h-1 rounded-sm bg-[#f87171] rotate-45 shrink-0"></div> امتحانات جهوية سابقة</li>
</ul>
</div>
</div>

<div className="flex items-center gap-2.5 text-base md:text-lg font-semibold text-white mb-4 mt-10 tracking-tight">
<div className="w-1 h-5 rounded-full bg-[#f0b429]"></div>
      البرنامج الأسبوعي المفصل
    </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 [animation:up_.7s_.3s_ease_both]">
<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-5 md:p-6 transition-transform duration-300 hover:-translate-y-0.5 hover:border-white/10">
<div className="flex items-center justify-between mb-4">
<div className="text-xs font-semibold text-[#f0b429] bg-[#f0b429]/10 px-3.5 py-1 rounded-full">الأسبوع 1</div>
</div>
<div className="text-sm font-medium text-white mb-3.5 flex items-center gap-2">
<iconify-icon className="text-lg text-[#8898aa]" icon="solar:notebook-square-linear" strokeWidth="1.5"></iconify-icon>
          تقييم وتأسيس
        </div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الاثنين</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">عربية: مراجعة النصوص الأدبية</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الثلاثاء</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">فرنسية: تحليل النصوص الحجاجية</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الأربعاء</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">تربية إسلامية: العقيدة والفقه</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الخميس</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">اجتماعيات: التاريخ — الأحداث الكبرى</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الجمعة</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">عربية: الدراسة اللغوية والنحو</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">السبت</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">فرنسية: قواعد وتمارين Grammaire</div>
</div>
</div>
<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-5 md:p-6 transition-transform duration-300 hover:-translate-y-0.5 hover:border-white/10">
<div className="flex items-center justify-between mb-4">
<div className="text-xs font-semibold text-[#f0b429] bg-[#f0b429]/10 px-3.5 py-1 rounded-full">الأسبوع 2</div>
</div>
<div className="text-sm font-medium text-white mb-3.5 flex items-center gap-2">
<iconify-icon className="text-lg text-[#8898aa]" icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon>
          التعمق والتدريب
        </div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الاثنين</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">عربية: الإنشاء والمقالة الأدبية</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الثلاثاء</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">فرنسية: Rédaction — التعبير الكتابي</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الأربعاء</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">اجتماعيات: الجغرافيا والخرائط</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الخميس</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">تربية إسلامية: السيرة النبوية</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الجمعة</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">عربية: محفوظات وشعر</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">السبت</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed flex items-center gap-1.5">امتحان تجريبي: عربية كامل <iconify-icon className="text-sm text-[#f0b429]" icon="solar:stopwatch-linear"></iconify-icon></div>
</div>
</div>
<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-5 md:p-6 transition-transform duration-300 hover:-translate-y-0.5 hover:border-white/10">
<div className="flex items-center justify-between mb-4">
<div className="text-xs font-semibold text-[#f0b429] bg-[#f0b429]/10 px-3.5 py-1 rounded-full">الأسبوع 3</div>
</div>
<div className="text-sm font-medium text-white mb-3.5 flex items-center gap-2">
<iconify-icon className="text-lg text-[#8898aa]" icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
          التكثيف والتطبيق
        </div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الاثنين</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">فرنسية: نصوص + كتابة إبداعية</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الثلاثاء</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">اجتماعيات: تحليل وثائق تاريخية</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الأربعاء</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">تربية إسلامية: الفقه والأحكام</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الخميس</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">عربية: مراجعة شاملة + تصحيح</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الجمعة</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">اجتماعيات: التربية على المواطنة</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">السبت</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed flex items-center gap-1.5">امتحان تجريبي: فرنسية كامل <iconify-icon className="text-sm text-[#f0b429]" icon="solar:stopwatch-linear"></iconify-icon></div>
</div>
</div>
<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-5 md:p-6 transition-transform duration-300 hover:-translate-y-0.5 hover:border-white/10">
<div className="flex items-center justify-between mb-4">
<div className="text-xs font-semibold text-[#f0b429] bg-[#f0b429]/10 px-3.5 py-1 rounded-full">الأسبوع 4</div>
</div>
<div className="text-sm font-medium text-white mb-3.5 flex items-center gap-2">
<iconify-icon className="text-lg text-[#8898aa]" icon="solar:clipboard-text-linear" strokeWidth="1.5"></iconify-icon>
          نصف المسافة — تقييم
        </div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الاثنين</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">عربية: تعبير كتابي كامل ومصحح</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الثلاثاء</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">فرنسية: امتحانات جهوية سابقة</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الأربعاء</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">تربية إسلامية: مراجعة شاملة</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الخميس</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">اجتماعيات: خرائط + وثائق جغرافية</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الجمعة</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">عربية + فرنسية: تصحيح نقاط الضعف</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">السبت</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed flex items-center gap-1.5">امتحان تجريبي: اجتماعيات <iconify-icon className="text-sm text-[#f0b429]" icon="solar:stopwatch-linear"></iconify-icon></div>
</div>
</div>
<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-5 md:p-6 transition-transform duration-300 hover:-translate-y-0.5 hover:border-white/10">
<div className="flex items-center justify-between mb-4">
<div className="text-xs font-semibold text-[#f0b429] bg-[#f0b429]/10 px-3.5 py-1 rounded-full">الأسبوع 5</div>
</div>
<div className="text-sm font-medium text-white mb-3.5 flex items-center gap-2">
<iconify-icon className="text-lg text-[#8898aa]" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
          الضغط الأخير
        </div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الاثنين</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">عربية: امتحانات جهوية سابقة (2022-2024)</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الثلاثاء</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">فرنسية: تقوية الكتابة والتعبير</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الأربعاء</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">اجتماعيات + تربية: مراجعة مكثفة</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الخميس</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">تصحيح نقاط الضعف في كل المواد</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الجمعة</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">فرنسية: امتحانات جهوية سابقة</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">السبت</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed flex items-center gap-1.5">امتحان تجريبي: تربية إسلامية <iconify-icon className="text-sm text-[#f0b429]" icon="solar:stopwatch-linear"></iconify-icon></div>
</div>
</div>
<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-5 md:p-6 transition-transform duration-300 hover:-translate-y-0.5 hover:border-white/10">
<div className="flex items-center justify-between mb-4">
<div className="text-xs font-semibold text-[#f0b429] bg-[#f0b429]/10 px-3.5 py-1 rounded-full">الأسبوع 6</div>
</div>
<div className="text-sm font-medium text-white mb-3.5 flex items-center gap-2">
<iconify-icon className="text-lg text-[#8898aa]" icon="solar:flag-linear" strokeWidth="1.5"></iconify-icon>
          التثبيت والراحة
        </div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الاثنين</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">مراجعة خفيفة: عربية + فرنسية</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الثلاثاء</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">مراجعة خفيفة: اجتماعيات + تربية</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الأربعاء</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">قراءة الملخصات فقط — لا مجهود كبير</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الخميس</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">راحة نفسية + نوم مبكر</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">الجمعة</div>
<div className="text-[#e2e8f0] font-normal leading-relaxed">استعداد: تجهيز الأدوات + نوم 8h</div>
</div>
<div className="flex gap-3 py-2 border-b border-white/[0.07] last:border-0 text-xs">
<div className="text-[#8898aa] min-w-[50px] font-medium shrink-0">السبت</div>
<div className="text-[#f0b429] font-medium leading-relaxed flex items-center gap-1.5"><iconify-icon className="text-base" icon="solar:target-linear"></iconify-icon> الامتحانات الجهوية</div>
</div>
</div>
</div>

<div className="flex items-center gap-2.5 text-base md:text-lg font-semibold text-white mb-4 mt-10 tracking-tight">
<div className="w-1 h-5 rounded-full bg-[#f0b429]"></div>
      التوزيع اليومي المقترح
    </div>
<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-6 md:p-7 [animation:up_.7s_.4s_ease_both]">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
<div className="flex items-center gap-3.5 bg-white/[0.02] border border-white/[0.05] rounded-xl p-3.5 hover:bg-white/[0.04] transition-colors">
<div className="w-2 h-2 rounded-full shrink-0 bg-[#f0b429]"></div>
<div>
<div className="text-xs text-[#8898aa] font-normal mb-0.5">08:00 — 10:00</div>
<div className="text-sm font-medium text-white flex items-center gap-1.5"><iconify-icon className="text-base text-[#8898aa]" icon="solar:book-linear" strokeWidth="1.5"></iconify-icon> عربية أو فرنسية</div>
</div>
</div>
<div className="flex items-center gap-3.5 bg-white/[0.02] border border-white/[0.05] rounded-xl p-3.5 hover:bg-white/[0.04] transition-colors">
<div className="w-2 h-2 rounded-full shrink-0 bg-[#c084fc]"></div>
<div>
<div className="text-xs text-[#8898aa] font-normal mb-0.5">10:30 — 12:00</div>
<div className="text-sm font-medium text-white flex items-center gap-1.5"><iconify-icon className="text-base text-[#8898aa]" icon="solar:moon-linear" strokeWidth="1.5"></iconify-icon> تربية إسلامية</div>
</div>
</div>
<div className="flex items-center gap-3.5 bg-white/[0.02] border border-white/[0.05] rounded-xl p-3.5 hover:bg-white/[0.04] transition-colors">
<div className="w-2 h-2 rounded-full shrink-0 bg-[#8898aa]"></div>
<div>
<div className="text-xs text-[#8898aa] font-normal mb-0.5">12:00 — 14:30</div>
<div className="text-sm font-medium text-white flex items-center gap-1.5"><iconify-icon className="text-base text-[#8898aa]" icon="solar:cup-hot-linear" strokeWidth="1.5"></iconify-icon> استراحة ووجبة</div>
</div>
</div>
<div className="flex items-center gap-3.5 bg-white/[0.02] border border-white/[0.05] rounded-xl p-3.5 hover:bg-white/[0.04] transition-colors">
<div className="w-2 h-2 rounded-full shrink-0 bg-[#f87171]"></div>
<div>
<div className="text-xs text-[#8898aa] font-normal mb-0.5">14:30 — 16:30</div>
<div className="text-sm font-medium text-white flex items-center gap-1.5"><iconify-icon className="text-base text-[#8898aa]" icon="solar:map-linear" strokeWidth="1.5"></iconify-icon> اجتماعيات</div>
</div>
</div>
<div className="flex items-center gap-3.5 bg-white/[0.02] border border-white/[0.05] rounded-xl p-3.5 hover:bg-white/[0.04] transition-colors">
<div className="w-2 h-2 rounded-full shrink-0 bg-[#38bdf8]"></div>
<div>
<div className="text-xs text-[#8898aa] font-normal mb-0.5">17:00 — 18:30</div>
<div className="text-sm font-medium text-white flex items-center gap-1.5"><iconify-icon className="text-base text-[#8898aa]" icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon> تمارين وكتابة</div>
</div>
</div>
<div className="flex items-center gap-3.5 bg-white/[0.02] border border-white/[0.05] rounded-xl p-3.5 hover:bg-white/[0.04] transition-colors">
<div className="w-2 h-2 rounded-full shrink-0 bg-[#4ade80]"></div>
<div>
<div className="text-xs text-[#8898aa] font-normal mb-0.5">20:00 — 21:30</div>
<div className="text-sm font-medium text-white flex items-center gap-1.5"><iconify-icon className="text-base text-[#8898aa]" icon="solar:document-linear" strokeWidth="1.5"></iconify-icon> مراجعة خفيفة</div>
</div>
</div>
</div>
</div>

<div className="flex gap-2.5 md:text-lg text-base font-semibold text-white tracking-tight mt-10 mb-4 gap-x-2.5 gap-y-2.5 items-center">
<div className="w-1 h-5 rounded-full bg-[#f0b429]"></div>
      نصائح للنجاح
    </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 [animation:up_.7s_.5s_ease_both]">
<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-5 group hover:border-white/10 transition-colors">
<iconify-icon className="text-[1.75rem] text-[#f0b429] mb-3 opacity-80 group-hover:opacity-100 transition-opacity" icon="solar:documents-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-sm font-semibold text-white mb-2 tracking-tight">امتحانات سابقة</div>
<div className="text-xs text-[#8898aa] leading-relaxed font-normal">حل امتحانات جهوية من 2020 إلى 2024 — هذا أهم شيء، تعرف النمط المتكرر.</div>
</div>
<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-5 group hover:border-white/10 transition-colors">
<iconify-icon className="text-[1.75rem] text-[#f0b429] mb-3 opacity-80 group-hover:opacity-100 transition-opacity" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-sm font-semibold text-white mb-2 tracking-tight">اكتب لا تقرأ فقط</div>
<div className="text-xs text-[#8898aa] leading-relaxed font-normal">كتابة الملخصات والمقالات بيدك يثبت المعلومة 3 مرات أكثر من القراءة.</div>
</div>
<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-5 group hover:border-white/10 transition-colors">
<iconify-icon className="text-[1.75rem] text-[#f0b429] mb-3 opacity-80 group-hover:opacity-100 transition-opacity" icon="solar:stopwatch-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-sm font-semibold text-white mb-2 tracking-tight">احترم الوقت</div>
<div className="text-xs text-[#8898aa] leading-relaxed font-normal">حل الامتحانات التجريبية في الوقت المحدد بالضبط — تعود على الضغط.</div>
</div>
<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-5 group hover:border-white/10 transition-colors">
<iconify-icon className="text-[1.75rem] text-[#f0b429] mb-3 opacity-80 group-hover:opacity-100 transition-opacity" icon="solar:moon-sleep-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-sm font-semibold text-white mb-2 tracking-tight">نم كفاية</div>
<div className="text-xs text-[#8898aa] leading-relaxed font-normal">7 إلى 8 ساعات ليلاً ضرورية — الدماغ يراجع ويثبت المعلومات أثناء النوم.</div>
</div>
<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-5 group hover:border-white/10 transition-colors">
<iconify-icon className="text-[1.75rem] text-[#f0b429] mb-3 opacity-80 group-hover:opacity-100 transition-opacity" icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-sm font-semibold text-white mb-2 tracking-tight">بعيد عن الهاتف</div>
<div className="text-xs text-[#8898aa] leading-relaxed font-normal">ضع الهاتف في مكان آخر وقت الدراسة. 25 دقيقة تركيز تساوي ساعتين مشتتة.</div>
</div>
<div className="bg-[#181d2a] border border-white/[0.07] rounded-2xl p-5 group hover:border-white/10 transition-colors">
<iconify-icon className="text-[1.75rem] text-[#f0b429] mb-3 opacity-80 group-hover:opacity-100 transition-opacity" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-sm font-semibold text-white mb-2 tracking-tight">لا تحفظ يوم الامتحان</div>
<div className="text-xs text-[#8898aa] leading-relaxed font-normal">الليلة قبل الامتحان: راجع ملخصاتك فقط، نم بكري، وكل وجبة كاملة الصباح.</div>
</div>
</div>

<footer className="border-white/[0.07] md:p-9 [animation:up_.7s_.6s_ease_both] text-center bg-[#181d2a] border rounded-2xl mt-11 pt-7 pr-7 pb-7 pl-7">
<div className="font-['Amiri'] text-xl md:text-2xl text-[#f0b429] mb-2 tracking-tight font-medium">« مَن جَدَّ وَجَد »</div><p className="text-xs font-normal text-[#8898aa]">ربي يوفقك ويسهل عليك — المجهود الصح كيجيب النتائج {iconify-icon}</p>
</footer>
</div>

    </>
  );
}
