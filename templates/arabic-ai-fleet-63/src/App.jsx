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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
black: '#0b0f19',
blue: '#0052ff',
darkblue: '#161b2c',
}
}
}
}
}



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
      

<div className="bg-blue-600 text-white text-sm py-2 px-4 text-center font-normal">
<span className="bg-white text-blue-600 text-xs px-1.5 py-0.5 rounded font-semibold ml-2">جديد</span>
        كاميرا ذكاء اصطناعي بلس: انظر المزيد. امنع المزيد من الحوادث. <a className="underline hover:text-blue-100 mr-1" href="#">استكشف هنا</a>
</div>

<nav className="sticky top-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-2xl font-semibold tracking-tighter text-white" href="#">motive</a>
<div className="hidden lg:flex items-center gap-6 text-base font-normal text-slate-300">
<a className="hover:text-white transition-colors" href="#">المنتجات</a>
<a className="hover:text-white transition-colors" href="#">الحلول</a>
<a className="hover:text-white transition-colors" href="#">المصادر</a>
<a className="hover:text-white transition-colors" href="#">الشركة</a>
</div>
</div>
<div className="hidden md:flex items-center gap-6 text-base font-normal">
<a className="flex items-center gap-2 hover:text-blue-400 text-slate-300" href="#">
<i className="w-4 h-4" data-lucide="phone"></i> اتصل بنا
                </a>
<a className="text-slate-300 hover:text-white" href="#">دخول</a>
<a className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-medium transition-colors text-sm" href="#">ابدأ الآن</a>
</div>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative pt-20 pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 z-10">
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-white">
                    الذكاء الاصطناعي الذي يجعل عملياتك <span className="text-slate-400">أكثر أماناً وكفاءة.</span>
</h1>
<p className="text-xl text-slate-400 max-w-lg font-light leading-relaxed">
                    منصة واحدة لتحسين <strong>السلامة</strong>، و<strong>الإنتاجية</strong>، و<strong>الربحية</strong> لعملياتك بشكل متكامل.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-medium transition-all text-base" href="#">ابدأ الآن</a>
<a className="border border-slate-600 hover:bg-slate-800 text-white px-8 py-3.5 rounded-full font-medium transition-all text-base flex items-center gap-2" href="#">
<i className="w-5 h-5" data-lucide="play-circle"></i> شاهد العرض
                    </a>
</div>
</div>

<div className="relative z-10">
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group">
<img alt="Dashboard View" className="w-full h-[500px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-xs px-3 py-1 rounded-md flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> رؤية ذكية
                    </div>

<div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-red-500/80 rounded bg-red-500/10">
<div className="absolute -top-6 left-0 bg-red-500 text-white text-[10px] px-1 py-0.5 rounded">مركبة قريبة</div>
</div>
<div className="absolute bottom-1/3 right-1/4 w-32 h-20 border-2 border-green-500/80 rounded bg-green-500/10"></div>
</div>

<div className="absolute -inset-10 bg-blue-500/20 blur-3xl -z-10 rounded-full"></div>
</div>
</div>
</section>

<div className="flex justify-center -mt-8 pb-20 px-4">
<a className="bg-white text-brand-black px-6 py-3 rounded-full text-sm font-medium flex items-center gap-3 shadow-lg hover:shadow-xl transition-shadow border border-slate-200" href="#">
<span>موتيف تفوز بالمركز الأول لأفضل برامج سلاسل التوريد والخدمات اللوجستية.</span>
<span className="underline underline-offset-4 decoration-slate-400">اقرأ المزيد</span>
</a>
</div>

<section className="py-24 bg-[#0F131F] relative overflow-hidden">
<div className="max-w-4xl mx-auto text-center px-6 mb-16 space-y-4">
<h6 className="text-blue-500 text-sm font-semibold tracking-widest uppercase">منصة عمليات متكاملة</h6>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight">
                منصة متكاملة تماماً،<br/>مدعومة بذكاء اصطناعي رائد.
            </h2>
</div>
<div className="max-w-6xl mx-auto px-6">
<div className="relative bg-gradient-to-b from-slate-800/30 to-transparent rounded-3xl border border-white/5 p-8 md:p-12 overflow-hidden">

<div className="flex flex-col items-center justify-center min-h-[300px] relative z-10">
<div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/50 mb-8 z-20">
<span className="font-bold text-2xl">AI</span>
</div>

<div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
<div className="grid grid-cols-5 gap-4 md:gap-12 w-full mt-8">
<div className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
<div className="w-12 h-12 rounded-lg border border-slate-700 bg-slate-800/50 flex items-center justify-center"><i className="text-blue-400" data-lucide="shield"></i></div>
</div>
<div className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
<div className="w-12 h-12 rounded-lg border border-slate-700 bg-slate-800/50 flex items-center justify-center"><i className="text-blue-400" data-lucide="map-pin"></i></div>
</div>
<div className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
<div className="w-12 h-12 rounded-lg border border-slate-700 bg-slate-800/50 flex items-center justify-center"><i className="text-blue-400" data-lucide="truck"></i></div>
</div>
<div className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
<div className="w-12 h-12 rounded-lg border border-slate-700 bg-slate-800/50 flex items-center justify-center"><i className="text-blue-400" data-lucide="credit-card"></i></div>
</div>
<div className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
<div className="w-12 h-12 rounded-lg border border-slate-700 bg-slate-800/50 flex items-center justify-center"><i className="text-blue-400" data-lucide="users"></i></div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-white text-slate-900">

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="order-1 md:order-1 space-y-6">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-indigo-100 rounded-lg text-indigo-700">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">سلامة السائق</span>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 leading-tight">
                        استخدم الذكاء الاصطناعي الأكثر دقة في الصناعة لتقليل المخاطر على الطريق.
                    </h3>
<p className="text-lg text-slate-600 font-light leading-relaxed">
                        قم بحماية سائقيك من خلال قدرات الذكاء الاصطناعي وتنبيهات الكابينة التي تقلل الحوادث بنسبة تصل إلى 2-4 مرات أكثر من المنافسين.
                    </p>
<button className="mt-4 px-6 py-2.5 rounded-full border border-slate-300 hover:border-slate-800 transition-colors text-sm font-medium">
                        اعرف المزيد
                    </button>
</div>

<div className="order-2 md:order-2 rounded-2xl bg-slate-900 p-2 overflow-hidden shadow-2xl">
<img alt="Driver Safety" className="w-full h-auto rounded-xl object-cover opacity-90" src="https://images.unsplash.com/photo-1621955964441-c173e01c135b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<div className="bg-brand-black rounded-3xl p-8 md:p-16 relative overflow-hidden grid md:grid-cols-2 gap-12 items-center text-white">
<div className="relative z-10 space-y-6">
<div className="flex gap-3 items-center">
<span className="bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded">جديد</span>
<span className="text-xs font-medium tracking-widest text-slate-400 uppercase">كاميرا ذكاء اصطناعي بلس</span>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight">
                        انظر المزيد. تصرف بشكل أسرع.<br/>امنع المزيد من الحوادث.
                    </h3>
<p className="text-lg text-slate-400 font-light max-w-md">
                        احصل على قدرات ذكاء اصطناعي لا مثيل لها، وتنبيهات بدون استخدام اليدين، وموثوقية فائقة في جهاز واحد موحد.
                    </p>
<button className="px-6 py-2.5 rounded-full border border-slate-600 hover:bg-slate-800 hover:text-white transition-colors text-sm font-medium">
                        استكشف الكاميرا
                    </button>
</div>
<div className="relative z-10 flex justify-end">

<div className="w-full max-w-md aspect-[16/6] bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-2xl border border-gray-600 flex items-center justify-between px-6">
<div className="w-12 h-12 rounded-full bg-black border border-gray-600 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-500/30 rounded-full animate-pulse"></div>
</div> 
<span className="text-gray-400 text-sm font-semibold tracking-widest">motive</span>
<div className="h-8 w-1 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
</div>
</div>

<div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-slate-800/50 to-transparent pointer-events-none"></div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="rounded-2xl bg-brand-black p-1 shadow-2xl relative overflow-hidden h-80">
<img className="w-full h-full object-cover rounded-xl opacity-60" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
<div className="w-12 h-12 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white">
<i className="w-6 h-6 fill-current" data-lucide="navigation"></i>
</div>
</div>
</div>

<div className="space-y-6">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-blue-100 rounded-lg text-blue-700">
<i className="w-5 h-5" data-lucide="map"></i>
</div>
<span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">إدارة الأسطول</span>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 leading-tight">
                        وفر الوقت وقلل التكاليف بفضل رؤية لا مثيل لها لأسطولك.
                    </h3>
<p className="text-lg text-slate-600 font-light leading-relaxed">
                        قم بقيادة الكفاءة برؤى عميقة حول سلامة المركبات، والموقع، والاستخدام — كل ذلك أثناء أتمتة سير عمل إدارة الأسطول.
                    </p>
<button className="mt-4 px-6 py-2.5 rounded-full border border-slate-300 hover:border-slate-800 transition-colors text-sm font-medium">
                        اعرف المزيد
                    </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-100">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="space-y-6">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-orange-100 rounded-lg text-orange-700">
<i className="w-5 h-5" data-lucide="hard-hat"></i>
</div>
<span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">مراقبة المعدات</span>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 leading-tight">
                        حسّن الاستخدام وقلل التكاليف مع مراقبة آمنة ودقيقة.
                    </h3>
<p className="text-lg text-slate-600 font-light leading-relaxed">
                        قلل من أوقات تعطل المعدات بشكل استباقي، وامنع السرقة، وحقق أقصى استفادة من كل أصل بفضل قوة الذكاء الاصطناعي.
                    </p>
<button className="mt-4 px-6 py-2.5 rounded-full border border-slate-300 hover:border-slate-800 transition-colors text-sm font-medium">
                        اعرف المزيد
                    </button>
</div>

<div className="rounded-2xl bg-brand-black overflow-hidden shadow-2xl relative">
<img alt="Equipment" className="w-full h-auto opacity-70" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur p-3 rounded-lg border border-white/10 flex items-center gap-3">
<div className="w-2 h-10 bg-blue-500 rounded-full"></div>
<div className="text-white text-xs">
<div className="font-bold">حفارة CAT-20</div>
<div className="text-slate-400">نشط منذ 4 ساعات</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-100">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="relative flex justify-center items-center h-80 bg-slate-900 rounded-2xl overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800"></div>

<div className="w-64 h-40 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-white/10 shadow-2xl relative z-10 flex flex-col justify-between p-4 rotate-3 transform hover:rotate-0 transition-transform duration-500">
<div className="flex justify-between items-start">
<span className="text-white font-bold tracking-tighter">motive</span>
<i className="text-white w-4 h-4 rotate-90" data-lucide="wifi"></i>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-5 bg-yellow-600 rounded"></div>
</div>
<div className="text-xs text-slate-400 font-mono">**** **** **** 4291</div>
</div>

<div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>

<div className="space-y-6">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-blue-100 rounded-lg text-blue-700">
<i className="w-5 h-5" data-lucide="credit-card"></i>
</div>
<span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">إدارة النفقات</span>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 leading-tight">
                        عظّم المدخرات واقضِ على الاحتيال باستخدام بطاقة Motive.
                    </h3>
<p className="text-lg text-slate-600 font-light leading-relaxed">
                        اكتشف المدخرات الخفية وحسّن الربحية باستخدام بطاقة الوقود المدعومة بالذكاء الاصطناعي من Motive.
                    </p>
<button className="mt-4 px-6 py-2.5 rounded-full border border-slate-300 hover:border-slate-800 transition-colors text-sm font-medium">
                        اعرف المزيد
                    </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-100 mb-12">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="bg-brand-black rounded-2xl h-80 relative overflow-hidden flex items-center justify-center p-8">

<div className="grid grid-cols-6 gap-4 opacity-30">
<div className="w-2 h-2 bg-white rounded-full"></div><div className="w-2 h-2 bg-white rounded-full"></div><div className="w-2 h-2 bg-white rounded-full"></div><div className="w-2 h-2 bg-white rounded-full"></div>
<div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div><div className="w-2 h-2 bg-white rounded-full"></div><div className="w-2 h-2 bg-white rounded-full"></div><div className="w-2 h-2 bg-white rounded-full"></div>
<div className="w-2 h-2 bg-white rounded-full"></div><div className="w-2 h-2 bg-white rounded-full"></div><div className="w-2 h-2 bg-white rounded-full"></div><div className="w-2 h-2 bg-white rounded-full"></div>
</div>
</div>

<div className="space-y-6">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-cyan-100 rounded-lg text-cyan-700">
<i className="w-5 h-5" data-lucide="eye"></i>
</div>
<span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">رؤية الذكاء الاصطناعي</span>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 leading-tight">
                        احصل على رؤية كاملة مع نماذج الذكاء الاصطناعي المخصصة.
                    </h3>
<p className="text-lg text-slate-600 font-light leading-relaxed">
                        من الإنشاء إلى نقل الركاب، توفر AI Vision حلولاً دقيقة لكل الاحتياجات التشغيلية الفريدة للصناعة.
                    </p>
<button className="mt-4 px-6 py-2.5 rounded-full border border-slate-300 hover:border-slate-800 transition-colors text-sm font-medium">
                        اعرف المزيد
                    </button>
</div>
</div>
</section>
</div>

<section className="relative h-[600px] w-full bg-slate-900 overflow-hidden">
<div className="absolute inset-0">
<img className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
<span className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-4">عملاؤنا</span>
<h2 className="text-5xl md:text-6xl font-medium text-white max-w-3xl leading-tight tracking-tight mb-8">
                أكثر العمليات تعقيداً في العالم تثق في موتيف.
            </h2>
<div className="flex gap-6 text-white text-sm font-medium">
<a className="flex items-center gap-2 hover:underline" href="#">
                     استكشف قصص النجاح <i className="w-4 h-4" data-lucide="arrow-left"></i>
</a>
<a className="flex items-center gap-2 hover:underline opacity-80" href="#">
<i className="w-4 h-4" data-lucide="play-circle"></i> استمع إلى عملائنا
               </a>
</div>
</div>

<div className="absolute bottom-10 w-full border-t border-white/20 pt-8">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-12 items-center opacity-70 grayscale">

<span className="text-2xl font-bold font-serif text-white">STEP</span>
<span className="text-2xl font-bold font-sans text-white">KONE</span>
<span className="text-2xl font-bold font-mono text-white">CARVANA</span>
<span className="text-2xl font-bold font-serif text-white">vestis</span>
<span className="text-2xl font-bold font-sans text-white">CINTAS</span>
</div>
</div>
</section>

<section className="bg-white py-24 text-slate-900">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl font-medium tracking-tight">اكتشف ما هو جديد مع موتيف.</h2>
<a className="hidden md:inline-flex px-5 py-2 border border-slate-300 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors" href="#">عرض جميع المصادر</a>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="space-y-4 group cursor-pointer">
<div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl aspect-video overflow-hidden relative border border-slate-100">
<div className="absolute inset-0 flex items-center justify-center">
<h3 className="text-4xl font-bold text-brand-black tracking-tighter">motive <br/> <span className="text-blue-600 font-light">Vision 25</span>+</h3>
</div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] text-slate-500 uppercase tracking-widest">
<span>April 21-23, 2025</span>
<span>Fairmont Austin</span>
<span>Austin, TX</span>
</div>
</div>
<div>
<div className="text-xs font-bold text-slate-500 uppercase mb-2">تحديثات المنتج</div>
<h3 className="text-2xl font-medium mb-2 group-hover:text-blue-600 transition-colors">تم الإعلان في Vision 25</h3>
<p className="text-slate-600 font-light leading-relaxed mb-3">
                            تم الكشف عن قدرات الذكاء الاصطناعي على مستوى الأسطول، وإدارة الإنفاق، والتحول الكامل في منصة واحدة متصلة.
                        </p>
<a className="text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#">اعرف المزيد <i className="w-3 h-3" data-lucide="arrow-left"></i></a>
</div>
</div>

<div className="grid gap-8">

<div className="flex gap-6 group cursor-pointer">
<div className="w-40 h-28 bg-brand-black rounded-lg overflow-hidden shrink-0 relative">
<img className="opacity-60 object-cover w-full h-full" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div>
<div className="text-[10px] font-bold text-slate-500 uppercase mb-1">عند الطلب</div>
<h4 className="text-lg font-medium leading-snug mb-1 group-hover:text-blue-600 transition-colors">نصيحة الخبراء: كيفية تعظيم سلامة الأسطول</h4>
</div>
</div>

<div className="flex gap-6 group cursor-pointer">
<div className="w-40 h-28 bg-brand-black rounded-lg overflow-hidden shrink-0 relative">
<img className="opacity-60 object-cover w-full h-full" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div>
<div className="text-[10px] font-bold text-slate-500 uppercase mb-1">ندوة عبر الإنترنت</div>
<h4 className="text-lg font-medium leading-snug mb-1 group-hover:text-blue-600 transition-colors">سد الفجوة: ربط السائقين ومديري الأساطيل لزيادة الإنتاجية</h4>
</div>
</div>

<div className="flex gap-6 group cursor-pointer">
<div className="w-40 h-28 bg-brand-black rounded-lg overflow-hidden shrink-0 relative">
<img className="opacity-60 object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<div className="text-[10px] font-bold text-slate-500 uppercase mb-1">أخبار الصناعة</div>
<h4 className="text-lg font-medium leading-snug mb-1 group-hover:text-blue-600 transition-colors">تسمية موتيف في المركز الأول في إدارة الأسطول عبر كل قطاع.</h4>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-brand-black text-white pt-24 pb-12 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 mb-20">

<div className="space-y-8">
<h6 className="text-xs font-bold tracking-widest text-slate-500 uppercase">تواصل معنا</h6>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                        نود أن نطلعك على ما حولك.
                    </h2>
<div className="space-y-4 text-slate-400 font-light text-lg">
<p>مع موتيف يمكنك:</p>
<ul className="space-y-3">
<li className="flex items-center gap-3"><i className="text-blue-500 w-5 h-5" data-lucide="check-circle"></i> الامتثال للقواعد واللوائح.</li>
<li className="flex items-center gap-3"><i className="text-blue-500 w-5 h-5" data-lucide="check-circle"></i> تحديد المخاطر وأتمتة تدريب السائقين.</li>
<li className="flex items-center gap-3"><i className="text-blue-500 w-5 h-5" data-lucide="check-circle"></i> تحسين الرؤية في منصة واحدة موحدة.</li>
</ul>
</div>
<div className="pt-8 space-y-4">
<p className="text-sm font-semibold">تم التصويت كأفضل فئة في جميع المجالات</p>
<div className="flex gap-4 opacity-90">

<div className="w-12 h-16 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-sm flex flex-col items-center justify-center text-[8px] font-bold text-black shadow-lg">Leader<br/>2024</div>
<div className="w-12 h-16 bg-gradient-to-b from-slate-200 to-slate-400 rounded-sm flex flex-col items-center justify-center text-[8px] font-bold text-black shadow-lg">Best<br/>Support</div>
<div className="w-12 h-16 bg-gradient-to-b from-orange-400 to-orange-600 rounded-sm flex flex-col items-center justify-center text-[8px] font-bold text-black shadow-lg">Top<br/>Fleet</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl p-8 text-slate-900">
<h3 className="text-xl font-semibold mb-6">جدولة جولة</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="sr-only">الاسم الأول</label>
<input className="w-full px-4 py-3 rounded-md border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-slate-50 text-sm" placeholder="الاسم الأول" type="text"/>
</div>
<div>
<label className="sr-only">اسم العائلة</label>
<input className="w-full px-4 py-3 rounded-md border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-slate-50 text-sm" placeholder="اسم العائلة" type="text"/>
</div>
</div>
<div>
<label className="sr-only">رقم الهاتف</label>
<input className="w-full px-4 py-3 rounded-md border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-slate-50 text-sm" placeholder="رقم الهاتف" type="tel"/>
</div>
<div>
<label className="sr-only">البريد الإلكتروني للشركة</label>
<input className="w-full px-4 py-3 rounded-md border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-slate-50 text-sm" placeholder="البريد الإلكتروني للشركة" type="email"/>
</div>
<div>
<label className="sr-only">اسم الشركة</label>
<input className="w-full px-4 py-3 rounded-md border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-slate-50 text-sm" placeholder="اسم الشركة" type="text"/>
</div>
<div>
<select className="w-full px-4 py-3 rounded-md border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all bg-slate-50 text-sm text-slate-500">
<option>حجم الأسطول</option>
<option>1-10</option>
<option>11-50</option>
<option>50+</option>
</select>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-full transition-colors mt-2" type="submit">الحصول على جولة</button>
<p className="text-[10px] text-slate-500 text-center leading-tight pt-2">
                             بالنقر على "الحصول على جولة"، أقر باستلام سياسة الخصوصية الخاصة بـ Motive.
                        </p>
</form>
</div>
</div>
<div className="border-t border-white/10 pt-12 grid md:grid-cols-4 gap-8 text-sm">
<div className="space-y-6">
<span className="text-2xl font-bold tracking-tighter">motive</span>
<div className="flex gap-4">
<a className="hover:text-blue-400" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="hover:text-blue-400" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="hover:text-blue-400" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-blue-400" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-blue-400" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
</div>
<div className="space-y-4">
<h5 className="font-bold text-white">المنتجات</h5>
<ul className="space-y-2 text-slate-400 font-light">
<li><a className="hover:text-white" href="#">نظرة عامة على المنصة</a></li>
<li><a className="hover:text-white" href="#">سلامة السائق</a></li>
<li><a className="hover:text-white" href="#">إدارة الأسطول</a></li>
<li><a className="hover:text-white" href="#">مراقبة المعدات</a></li>
<li><a className="hover:text-white" href="#">إدارة النفقات</a></li>
</ul>
</div>
<div className="space-y-4">
<h5 className="font-bold text-white">من نخدم</h5>
<ul className="space-y-2 text-slate-400 font-light">
<li><a className="hover:text-white" href="#">البناء</a></li>
<li><a className="hover:text-white" href="#">النفط والغاز</a></li>
<li><a className="hover:text-white" href="#">القطاع العام</a></li>
<li><a className="hover:text-white" href="#">الخدمات الميدانية</a></li>
<li><a className="hover:text-white" href="#">النقل واللوجستيات</a></li>
</ul>
</div>
<div className="space-y-4">
<h5 className="font-bold text-white">الشركة</h5>
<ul className="space-y-2 text-slate-400 font-light">
<li><a className="hover:text-white" href="#">القيادة</a></li>
<li><a className="hover:text-white" href="#">الوظائف</a></li>
<li><a className="hover:text-white" href="#">غرفة الأخبار</a></li>
<li><a className="hover:text-white" href="#">الشركاء</a></li>
<li><a className="hover:text-white" href="#">اتصل بنا</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-light">
<p>© 2026 Motive Technologies, Inc.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">شروط الخدمة</a>
<a className="hover:text-white" href="#">سياسة الخصوصية</a>
<a className="hover:text-white" href="#">إعدادات الخصوصية</a>
<a className="hover:text-white" href="#">عدم البيع</a>
</div>
</div>
</div>
</footer>

<button className="fixed bottom-6 left-6 bg-blue-600 text-white rounded-full px-4 py-3 flex items-center gap-2 shadow-xl hover:bg-blue-500 transition-colors z-50 text-sm font-medium">
<i className="w-5 h-5" data-lucide="message-circle"></i> اسأل موتيف
    </button>


    </>
  );
}
