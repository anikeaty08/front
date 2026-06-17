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
      

<header className="relative bg-[#1a237e] text-white overflow-hidden pb-32">

<nav className="relative z-50 px-6 py-6 max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
<i className="text-[#1a237e] w-5 h-5" data-lucide="heart-handshake" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight">بصمة خير</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors" href="#about">عن بصمة خير</a>
<a className="hover:text-white transition-colors" href="#achievements">إنجازاتنا</a>
<a className="hover:text-white transition-colors" href="#universities">الجامعات</a>
<a className="hover:text-white transition-colors" href="#team">المنسقين</a>
</div>
<a className="bg-white text-[#1a237e] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors shadow-lg shadow-blue-900/20" href="#donate">
                تسجيل الدخول
            </a>
</nav>

<div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<h1 className="text-4xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-white">
                    ساهم في منح الأمل <br/>
<span className="relative inline-block mt-2">
<span className="absolute inset-0 bg-green-500/20 rounded-lg transform -rotate-1 scale-105"></span>
<span className="relative text-green-400">لأيتام العراق</span>
</span>
                    وبناء مستقبلهم.
                </h1>
<p className="text-lg text-slate-300 leading-relaxed max-w-lg font-light">
                    حملة "بصمة خير" من مؤسسة العين تهدف لتوفير الرعاية الشاملة للأيتام. مساهمتك البسيطة تصنع فارقاً كبيراً في حياة الآلاف من العوائل المحتاجة.
                </p>
<div className="flex flex-wrap items-center gap-4">
<a className="bg-white text-[#1a237e] px-8 py-3.5 rounded-full font-medium hover:bg-slate-100 transition-transform hover:-translate-y-0.5 shadow-xl shadow-blue-900/20" href="#donate">
                        تبرع الآن
                    </a>
<a className="border border-slate-500/50 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/5 transition-colors flex items-center gap-2" href="#about">
                        اقرأ المزيد
                    </a>
</div>
</div>
<div className="relative group">
<div className="absolute inset-0 bg-blue-600/20 rounded-[2rem] transform rotate-3 scale-105 blur-xl"></div>
<div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/20 aspect-square lg:aspect-[4/3]">
<img alt="Charity" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
<button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center hover:scale-110 transition-transform group-hover:bg-white text-[#1a237e]">
<i className="w-6 h-6 ml-1 fill-current" data-lucide="play" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
</header>

<section className="px-6 relative z-30 -mt-24 mb-24">
<div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 lg:p-12">
<div className="grid lg:grid-cols-2 gap-12 items-center mb-10 border-b border-slate-100 pb-10">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">نحمل الأمل لمستقبل مشرق</h2>
</div>
<div>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                        مهمتنا في مؤسسة العين هي ضمان حياة كريمة للأيتام، وتوفير الدعم المادي والمعنوي والصحي والتعليمي. نحن بحاجة لدعمكم لنستمر في هذه الرسالة الإنسانية.
                    </p>
</div>
</div>
<div className="flex flex-wrap gap-4 lg:gap-8 justify-between lg:justify-start">
<div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
<div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
<i className="w-3.5 h-3.5" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-sm font-medium text-slate-700">موثوقية عالية</span>
</div>
<div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
<div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
<i className="w-3.5 h-3.5" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-sm font-medium text-slate-700">شفافية في التوثيق</span>
</div>
<div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
<div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
<i className="w-3.5 h-3.5" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-sm font-medium text-slate-700">مؤسسة غير ربحية</span>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white relative overflow-hidden" id="about">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="max-w-3xl mb-16">
<span className="text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full text-xs tracking-wide">القصة والهدف</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mt-6 tracking-tight">عن بصمة خير</h2>
<p className="text-lg text-slate-500 mt-6 font-light leading-relaxed">
                    انطلقت مبادرة "بصمة خير" استجابة للحاجة المتزايدة لرعاية الأيتام في العراق. نحن نعمل كحلقة وصل موثوقة بين المتبرعين الكرام والأيتام المحتاجين، لنضمن لهم تعليماً جيداً، ورعاية صحية متكاملة، وسكناً لائقاً.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-600 text-2xl" icon="solar:shield-star-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">الشرعية والقانونية</h3>
<p className="text-slate-500 font-light leading-relaxed text-sm">
                        المؤسسة حاصلة على المأذونية الشرعية ومسجلة رسمياً لدى دائرة المنظمات غير الحكومية، مما يضمن سلامة وصحة تبرعاتكم.
                    </p>
</div>
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-600 text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">شمولية الرعاية</h3>
<p className="text-slate-500 font-light leading-relaxed text-sm">
                        لا تقتصر كفالتنا على المال فقط، بل تشمل برامج الدعم النفسي، والتمكين الدراسي، والرعاية الصحية المتقدمة.
                    </p>
</div>
<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-600 text-2xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">أثر مستدام</h3>
<p className="text-slate-500 font-light leading-relaxed text-sm">
                        نعمل على مشاريع صدقة جارية ومشاريع تنموية تهدف لنقل العوائل من دائرة الاحتياج إلى دائرة الاكتفاء والإنتاج.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-slate-50 border-t border-slate-200" id="achievements">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">مسيرة العطاء</h2>
<p className="text-slate-500 mt-4">إنجازاتنا تتحدث بلغة الأرقام والأثر.</p>
</div>
<div className="relative space-y-12">

<div className="absolute right-6 top-2 bottom-2 w-0.5 bg-slate-200 hidden md:block"></div>

<div className="relative flex flex-col md:flex-row gap-8 items-start group">
<div className="hidden md:flex flex-col items-center absolute right-0 translate-x-1/2">
<div className="w-12 h-12 rounded-full bg-white border-4 border-blue-50 text-blue-600 flex items-center justify-center shadow-sm z-10 font-bold text-sm">2023</div>
</div>
<div className="md:mr-20 w-full">
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
<div className="flex items-center gap-3 mb-4">
<span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold md:hidden">2023</span>
<h3 className="text-xl font-semibold text-slate-800">عام التوسع والتمكين</h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-3 bg-slate-50 rounded-xl">
<div className="text-2xl font-bold text-slate-900 mb-1">15,400</div>
<div className="text-xs text-slate-500">يتيم مكفول</div>
</div>
<div className="p-3 bg-slate-50 rounded-xl">
<div className="text-2xl font-bold text-slate-900 mb-1">82</div>
<div className="text-xs text-slate-500">منزل تم بناؤه</div>
</div>
<div className="p-3 bg-slate-50 rounded-xl">
<div className="text-2xl font-bold text-slate-900 mb-1">5,000+</div>
<div className="text-xs text-slate-500">سلة غذائية</div>
</div>
<div className="p-3 bg-slate-50 rounded-xl">
<div className="text-2xl font-bold text-slate-900 mb-1">12</div>
<div className="text-xs text-slate-500">مركز صحي</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-start group">
<div className="hidden md:flex flex-col items-center absolute right-0 translate-x-1/2">
<div className="w-3 h-3 rounded-full bg-slate-300 ring-4 ring-white z-10 mt-6 group-hover:bg-blue-400 transition-colors"></div>
</div>
<div className="md:mr-20 w-full">
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all opacity-80 hover:opacity-100">
<div className="flex items-center gap-3 mb-4">
<span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">2022</span>
<h3 className="text-lg font-semibold text-slate-800">إطلاق مشاريع الإسكان</h3>
</div>
<p className="text-slate-500 text-sm leading-relaxed mb-4">
                                تميز هذا العام بإطلاق أكبر حملة لبناء المجمعات السكنية للأيتام في بغداد والمحافظات الجنوبية، بالإضافة لتوزيع آلاف الكسوات المدرسية.
                            </p>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-start group">
<div className="hidden md:flex flex-col items-center absolute right-0 translate-x-1/2">
<div className="w-3 h-3 rounded-full bg-slate-300 ring-4 ring-white z-10 mt-6 group-hover:bg-blue-400 transition-colors"></div>
</div>
<div className="md:mr-20 w-full">
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all opacity-70 hover:opacity-100">
<div className="flex items-center gap-3 mb-4">
<span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">2021</span>
<h3 className="text-lg font-semibold text-slate-800">التأسيس والانطلاق</h3>
</div>
<p className="text-slate-500 text-sm leading-relaxed">
                                بداية الحملات الجامعية وتشكيل فرق المنسقين في الجامعات العراقية، وتوزيع المنح المالية الأولى للعوائل المتعففة.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-b border-slate-100" id="universities">
<div className="max-w-7xl mx-auto text-center">
<h2 className="text-2xl font-semibold text-slate-900 mb-2">شركاؤنا في المعرفة والعطاء</h2>
<p className="text-slate-500 mb-12 font-light">نفخر بتعاوننا مع الجامعات العراقية الرائدة لنشر ثقافة التكافل.</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

<div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all group cursor-default">
<iconify-icon className="text-slate-400 group-hover:text-[#1a237e] text-4xl mb-3 transition-colors" icon="solar:square-academic-cap-linear"></iconify-icon>
<span className="text-sm font-semibold text-slate-700 group-hover:text-[#1a237e]">جامعة بغداد</span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all group cursor-default">
<iconify-icon className="text-slate-400 group-hover:text-[#1a237e] text-4xl mb-3 transition-colors" icon="solar:diploma-verified-linear"></iconify-icon>
<span className="text-sm font-semibold text-slate-700 group-hover:text-[#1a237e]">الجامعة المستنصرية</span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all group cursor-default">
<iconify-icon className="text-slate-400 group-hover:text-[#1a237e] text-4xl mb-3 transition-colors" icon="solar:book-bookmark-linear"></iconify-icon>
<span className="text-sm font-semibold text-slate-700 group-hover:text-[#1a237e]">الجامعة التكنولوجية</span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all group cursor-default">
<iconify-icon className="text-slate-400 group-hover:text-[#1a237e] text-4xl mb-3 transition-colors" icon="solar:buildings-linear"></iconify-icon>
<span className="text-sm font-semibold text-slate-700 group-hover:text-[#1a237e]">جامعة النهرين</span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all group cursor-default">
<iconify-icon className="text-slate-400 group-hover:text-[#1a237e] text-4xl mb-3 transition-colors" icon="solar:atom-linear"></iconify-icon>
<span className="text-sm font-semibold text-slate-700 group-hover:text-[#1a237e]">جامعة بابل</span>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto" id="donate">
<div className="text-center mb-16">
<span className="text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full text-xs tracking-wide">كيف تتبرع</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mt-4 tracking-tight">خطوات بسيطة لصناعة الفارق</h2>
<p className="text-lg text-slate-500 mt-4 font-light">لدينا عدة طرق سهلة وميسرة لتتمكن من إيصال تبرعك.</p>
</div>
<div className="flex justify-center mb-16">
<div className="inline-flex bg-slate-100 p-1 rounded-full">
<button className="flex items-center gap-2 px-6 py-2.5 bg-white shadow-sm rounded-full text-blue-700 text-sm font-medium transition-all">
<iconify-icon className="text-lg" icon="solar:wallet-linear"></iconify-icon>
                    تحديد المبلغ
                </button>
<button className="flex items-center gap-2 px-6 py-2.5 text-slate-500 text-sm font-medium hover:text-slate-700 transition-all">
<iconify-icon className="text-lg" icon="solar:card-linear"></iconify-icon>
                    طريقة الدفع
                </button>
<button className="flex items-center gap-2 px-6 py-2.5 text-slate-500 text-sm font-medium hover:text-slate-700 transition-all">
<iconify-icon className="text-lg" icon="solar:user-check-linear"></iconify-icon>
                    تأكيد الهوية
                </button>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h3 className="text-2xl font-semibold text-slate-900">يمكنك اختيار أو إدخال المبلغ يدوياً.</h3>
<p className="text-lg text-slate-500 font-light leading-relaxed">
                    حدد أي مبلغ تود التبرع به لحملة "بصمة خير" بخطوات سهلة. نظامنا الآمن يضمن وصول تبرعك بالكامل لمستحقيه. كل دينار يساهم في تغيير حياة يتيم.
                </p>
<div className="pt-4">
<button className="bg-[#1a237e] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-900 transition-colors shadow-lg shadow-blue-900/10">
                        تبرع الآن
                    </button>
<button className="mr-4 text-slate-600 text-sm font-medium hover:text-slate-900 transition-colors">
                        معرفة المزيد
                    </button>
</div>
</div>

<div className="bg-white p-2 rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 transform rotate-1">
<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
<div className="flex items-center justify-between mb-6">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="text-xs font-medium text-slate-400">نافذة التبرع الآمن</div>
</div>
<div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
<div className="flex bg-slate-100 p-1 rounded-lg mb-6 text-sm font-medium text-center">
<div className="flex-1 bg-white py-1.5 rounded shadow-sm text-slate-800">مرة واحدة</div>
<div className="flex-1 py-1.5 text-slate-400 cursor-pointer">شهرياً</div>
</div>
<div className="grid grid-cols-3 gap-3 mb-6">
<button className="border border-slate-200 py-3 rounded-lg text-slate-600 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all font-medium text-sm">10,000</button>
<button className="border border-slate-200 py-3 rounded-lg text-slate-600 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all font-medium text-sm">25,000</button>
<button className="border border-slate-200 py-3 rounded-lg text-slate-600 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all font-medium text-sm">50,000</button>
<button className="border border-slate-200 py-3 rounded-lg text-slate-600 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all font-medium text-sm">100,000</button>
<button className="border border-blue-600 bg-blue-50 text-blue-700 py-3 rounded-lg font-medium text-sm ring-2 ring-blue-600/20">250,000</button>
<button className="border border-slate-200 py-3 rounded-lg text-slate-600 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all font-medium text-sm">مبلغ آخر</button>
</div>
<button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                            متابعة التبرع
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white" id="team">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-blue-600 font-medium text-sm uppercase tracking-wider">الأبطال الحقيقيون</span>
<h2 className="text-3xl font-semibold text-slate-900 mt-2 tracking-tight">المنسقين والمساهمين</h2>
<p className="text-slate-500 mt-2 font-light max-w-xl">فريقنا المتميز من المنسقين في الجامعات والمساهمين الذين يعملون بلا كلل لضمان نجاح الحملة.</p>
</div>
<a className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1 text-sm" href="#">
                    انضم لفريقنا <iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl hover:shadow-blue-900/5">
<div className="flex items-center gap-4">
<img alt="Coordinator" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-slate-900">أحمد محمد</h4>
<p className="text-xs text-blue-600 font-medium mt-0.5">منسق جامعة بغداد</p>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-200/50 flex items-center justify-between">
<div className="text-xs text-slate-500">نشط منذ 2021</div>
<div className="flex gap-2 text-slate-400">
<iconify-icon className="hover:text-blue-600 cursor-pointer text-lg" icon="solar:link-circle-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl hover:shadow-blue-900/5">
<div className="flex items-center gap-4">
<img alt="Coordinator" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-slate-900">سارة علي</h4>
<p className="text-xs text-blue-600 font-medium mt-0.5">منسقة المستنصرية</p>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-200/50 flex items-center justify-between">
<div className="text-xs text-slate-500">نشطة منذ 2022</div>
<div className="flex gap-2 text-slate-400">
<iconify-icon className="hover:text-blue-600 cursor-pointer text-lg" icon="solar:link-circle-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl hover:shadow-blue-900/5">
<div className="flex items-center gap-4">
<img alt="Coordinator" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-slate-900">عمر حسين</h4>
<p className="text-xs text-blue-600 font-medium mt-0.5">متطوع متميز</p>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-200/50 flex items-center justify-between">
<div className="text-xs text-slate-500">نشط منذ 2023</div>
<div className="flex gap-2 text-slate-400">
<iconify-icon className="hover:text-blue-600 cursor-pointer text-lg" icon="solar:link-circle-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl p-6 border-2 border-dashed border-slate-200 hover:border-blue-300 transition-all flex flex-col items-center justify-center text-center h-full min-h-[140px]">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:add-linear"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 text-sm">كن أنت التالي</h4>
<p className="text-xs text-slate-400 mt-1">ساهم في نشر الخير</p>
</div>
</div>
</div>
</section>

<section className="relative h-[500px] flex items-center justify-center overflow-hidden my-20">
<img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/60"></div>
<div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6">كفلاؤنا هم شركاؤنا في بناء الأمل وإنهاء معاناة اليتم.</h2>
<button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-medium transition-colors shadow-lg">
                انضم إلينا الآن
            </button>
</div>
</section>

<section className="py-20 px-6 max-w-3xl mx-auto">
<div className="mb-12">
<span className="text-slate-400 text-xs font-semibold uppercase tracking-wider bg-slate-100 px-2 py-1 rounded">الأسئلة الشائعة</span>
<h2 className="text-3xl font-semibold text-slate-900 mt-4 tracking-tight">هل واجهت مشكلة؟</h2>
</div>
<div className="space-y-4">

<details className="group border-b border-slate-100 pb-4" open="">
<summary className="flex justify-between items-center cursor-pointer list-none py-4 text-slate-800 font-medium hover:text-blue-700 transition-colors">
<span>ما هي خدمات مؤسسة العين؟</span>
<span className="transition group-open:rotate-45">
<i className="w-5 h-5 text-slate-400" data-lucide="plus" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-slate-500 text-lg font-light leading-relaxed mt-2 px-2">
                    تقدم المؤسسة الرعاية الصحية، التعليمية، السكنية، والمادية للأيتام وعوائلهم المسجلين لديها في عموم العراق.
                </div>
</details>

<details className="group border-b border-slate-100 pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none py-4 text-slate-800 font-medium hover:text-blue-700 transition-colors">
<span>ما هي الفوائد التي نحصل عليها عند الانضمام؟</span>
<span className="transition group-open:rotate-45">
<i className="w-5 h-5 text-slate-400" data-lucide="plus" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-slate-500 text-lg font-light leading-relaxed mt-2 px-2">
                    بالإضافة إلى الأجر والثواب، ستتلقى تقارير دورية عن تأثير تبرعاتك وكيف ساهمت في تغيير حياة الأيتام.
                </div>
</details>

<details className="group border-b border-slate-100 pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none py-4 text-slate-800 font-medium hover:text-blue-700 transition-colors">
<span>كيف يمكنني الاحتفال بذكرى سنوية من خلال التبرع؟</span>
<span className="transition group-open:rotate-45">
<i className="w-5 h-5 text-slate-400" data-lucide="plus" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-slate-500 text-lg font-light leading-relaxed mt-2 px-2">
                    يمكنك إنشاء حملة تبرع خاصة باسمك أو باسم من تحب في المناسبات الخاصة وتوجيه التبرعات للمشروع.
                </div>
</details>

<details className="group border-b border-slate-100 pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none py-4 text-slate-800 font-medium hover:text-blue-700 transition-colors">
<span>هل توفرون تقارير مالية؟</span>
<span className="transition group-open:rotate-45">
<i className="w-5 h-5 text-slate-400" data-lucide="plus" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-slate-500 text-lg font-light leading-relaxed mt-2 px-2">
                    نعم، نلتزم بأعلى معايير الشفافية وننشر تقارير مالية سنوية مدققة توضح مصارف الأموال.
                </div>
</details>
</div>
</section>

<footer className="bg-[#0f172a] pt-24 pb-12 px-6">
<div className="max-w-7xl mx-auto">

<div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 lg:p-16 text-center mb-24 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<span className="text-blue-200 text-sm font-medium tracking-wide bg-white/10 px-3 py-1 rounded-full border border-white/10">ابقَ على اطلاع</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-white mt-6 mb-8 tracking-tight">
                        أضف أثراً طيباً إلى بريدك الوارد
                    </h2>
<div className="flex flex-col sm:flex-row gap-4 bg-white/10 p-2 rounded-2xl border border-white/10 backdrop-blur-sm">
<input className="flex-1 bg-transparent border-none text-white placeholder-blue-200 px-4 py-3 focus:ring-0 outline-none w-full" placeholder="بريدك الإلكتروني" type="email"/>
<button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                            اشترك الآن
                        </button>
</div>
<p className="text-blue-200 text-xs mt-4 opacity-70">عند الاشتراك، أنت توافق على استلام رسائل من مؤسسة العين.</p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 border-b border-slate-800 pb-12 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
<i className="text-[#0f172a] w-3.5 h-3.5" data-lucide="heart-handshake" strokeWidth="2"></i>
</div>
<span className="text-lg font-semibold text-white">بصمة خير</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed max-w-xs font-light">
                        مبادرة إنسانية تهدف لرفع المعاناة عن الأيتام وتوفير حياة كريمة لهم. مرخصة رسمياً وتعمل تحت غطاء قانوني وشرعي.
                    </p>
</div>
<div className="space-y-4">
<h4 className="text-white font-medium">تعرف علينا</h4>
<ul className="space-y-3 text-sm text-slate-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">من نحن</a></li>
<li><a className="hover:text-white transition-colors" href="#">التقارير المالية</a></li>
<li><a className="hover:text-white transition-colors" href="#">الوظائف</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-white font-medium">تواصل</h4>
<ul className="space-y-3 text-sm text-slate-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">اتصل بنا</a></li>
<li><a className="hover:text-white transition-colors" href="#">مركز المساعدة</a></li>
<li><a className="hover:text-white transition-colors" href="#">طلب متحدث</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-white font-medium">تبرع</h4>
<ul className="space-y-3 text-sm text-slate-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">اكفل يتيماً</a></li>
<li><a className="hover:text-white transition-colors" href="#">الصدقات الجارية</a></li>
<li><a className="hover:text-white transition-colors" href="#">كفارة</a></li>
<li><a className="hover:text-white transition-colors" href="#">دعم المشاريع</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
<div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
<div className="w-4 h-4 bg-slate-400 rounded-full overflow-hidden relative">
<div className="absolute inset-0 bg-red-600 top-0 h-1/3"></div>
<div className="absolute inset-0 bg-white top-1/3 h-1/3"></div>
<div className="absolute inset-0 bg-black top-2/3 h-1/3"></div>
</div>
<span className="text-slate-300 text-xs font-medium">Iraqi Dinar (IQD)</span>
<i className="w-3 h-3 text-slate-400" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
