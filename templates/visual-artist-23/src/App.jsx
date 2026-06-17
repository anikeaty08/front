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
      

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-40 right-[-10%] w-[480px] h-[480px] rounded-full bg-fuchsia-500/20 blur-3xl mix-blend-screen"></div>
<div className="absolute top-1/3 left-[-15%] w-[520px] h-[520px] rounded-full bg-sky-500/25 blur-3xl mix-blend-screen"></div>
<div className="absolute bottom-[-20%] right-1/4 w-[520px] h-[520px] rounded-full bg-emerald-500/25 blur-3xl mix-blend-screen"></div>
<div className="absolute inset-0 opacity-[0.12] mix-blend-soft-light" style={{backgroundImage: 'radial-gradient(circle at 10% 20%, #f97316 0, transparent 55%), radial-gradient(circle at 80% 0%, #22d3ee 0, transparent 55%), radial-gradient(circle at 10% 80%, #a855f7 0, transparent 55%), radial-gradient(circle at 80% 80%, #22c55e 0, transparent 55%)'}}></div>
<div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute inset-0 opacity-[0.12]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
</div>

<div className="relative flex-1 flex flex-col">

<div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.07]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&amp', backgroundSize: 'cover'}}></div>

<header className="w-full border-b border-white/10 backdrop-blur-xl bg-slate-950/60 sticky top-0 z-40">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl border border-white/15 bg-slate-900/80 flex items-center justify-center shadow-xl shadow-fuchsia-500/20">
<span className="text-lg font-semibold tracking-[0.35em] uppercase text-fuchsia-300">A</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight text-slate-50">آلاء</span>
<span className="text-[11px] text-slate-400">فنانة بصرية · مصممة جرافيك</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-200 hover:text-fuchsia-300 transition-colors" href="#hero">الرئيسية</a>
<a className="text-slate-200 hover:text-fuchsia-300 transition-colors" href="#about">عن آلاء</a>
<a className="text-slate-200 hover:text-fuchsia-300 transition-colors" href="#projects">الأعمال</a>
<a className="text-slate-200 hover:text-fuchsia-300 transition-colors" href="#services">الخدمات</a>
<a className="text-slate-200 hover:text-fuchsia-300 transition-colors" href="#contact">تواصل</a>
</nav>

<a className="inline-flex items-center gap-2 text-xs sm:text-sm px-4 py-2 rounded-full border border-fuchsia-400/50 bg-fuchsia-500/10 text-fuchsia-100 hover:bg-fuchsia-500/20 hover:border-fuchsia-300 transition-all duration-200 shadow-lg shadow-fuchsia-500/20" href="#contact">
<i className="lucide lucide-sparkles" style={{strokeWidth: '1.5'}}></i>
<span>احجز مشروعاً فنياً</span>
</a>
</div>
</header>

<main className="flex-1">

<section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 lg:pt-20 lg:pb-20" id="hero">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

<div className="space-y-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/60 px-3 py-1 backdrop-blur">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-xs text-slate-200">عالم آلاء البصري · تجربة غامرة</span>
</div>
<div className="space-y-3">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 leading-tight">
                أخلق عوالم بصرية
                <span className="inline-block bg-gradient-to-l from-fuchsia-400 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
                  جريئة وحسية
                </span>
                تحكي قصتك.
              </h1>
<p className="text-sm sm:text-base text-slate-200/90 leading-relaxed max-w-xl">
                آلاء فنانة تشكيلية ومصممة جرافيك تمزج بين اللوحات اليدوية والتصميم الرقمي، لتخلق بصمات بصرية
                فريدة للعلامات التجارية، المشاريع الإبداعية، والأفراد الباحثين عن هوية تلمس الحواس قبل العين.
              </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium tracking-tight bg-slate-50 text-slate-950 hover:bg-fuchsia-300 hover:text-slate-950 transition-all duration-200 shadow-lg shadow-slate-900/80 border border-slate-200/80" href="#projects">
<i className="lucide lucide-gallery-horizontal" style={{strokeWidth: '1.5'}}></i>
<span>استكشاف الأعمال</span>
</a>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm text-slate-100 border border-slate-500/40 bg-slate-900/50 hover:bg-slate-800/80 hover:border-fuchsia-400/60 transition-all duration-200" href="#about">
<i className="lucide lucide-pen-tool" style={{strokeWidth: '1.5'}}></i>
<span>حكاية آلاء</span>
</a>
</div>
<div className="grid grid-cols-3 gap-4 max-w-md pt-3 border-t border-white/10">
<div className="space-y-1">
<p className="text-lg font-semibold tracking-tight text-fuchsia-200">+٧ سنوات</p>
<p className="text-[11px] text-slate-400">خبرة في الفنون البصرية والتصميم</p>
</div>
<div className="space-y-1">
<p className="text-lg font-semibold tracking-tight text-emerald-200">+٥٠ مشروع</p>
<p className="text-[11px] text-slate-400">هويات بصرية ولوحات مخصصة</p>
</div>
<div className="space-y-1">
<p className="text-lg font-semibold tracking-tight text-sky-200">+١٥ علامة</p>
<p className="text-[11px] text-slate-400">تعاون مع علامات ومجلات إبداعية</p>
</div>
</div>
</div>

<div className="relative">
<div className="relative w-full max-w-md mx-auto">

<div className="absolute -top-6 -left-4 w-20 h-20 rounded-3xl border border-fuchsia-400/60 bg-fuchsia-500/20 backdrop-blur-xl shadow-xl shadow-fuchsia-500/40 animate-[float_8s_ease-in-out_infinite]" style={{animationDelay: '0.1s'}}></div>
<div className="absolute -bottom-10 -right-4 w-24 h-24 rounded-[2rem] border border-sky-400/60 bg-sky-500/20 backdrop-blur-xl shadow-xl shadow-sky-500/40 animate-[float_9s_ease-in-out_infinite]" style={{animationDelay: '0.4s'}}></div>
<div className="absolute top-24 -right-10 w-16 h-16 rounded-3xl border border-emerald-400/60 bg-emerald-500/20 backdrop-blur-xl shadow-xl shadow-emerald-500/40 animate-[float_7s_ease-in-out_infinite]" style={{animationDelay: '0.7s'}}></div>

<div className="relative rounded-3xl border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-slate-900/90 overflow-hidden">

<div className="absolute top-3 left-3 z-20 inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-white/15 px-3 py-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
<span className="text-[11px] text-slate-200">لوحة جديدة قيد الاكتمال</span>
</div>

<div className="p-3 sm:p-4 lg:p-5">
<div className="grid grid-cols-3 gap-2 sm:gap-3">
<div className="col-span-2 row-span-2 rounded-2xl overflow-hidden border border-white/10">
<img alt="لوحة فنية تجريدية" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10">
<img alt="تفاصيل فرشاة ولوحة ألوان" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10">
<img alt="قوام ورق وحبر" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="col-span-3 rounded-2xl overflow-hidden border border-white/10">
<img alt="تركيبة ألوان رقمية وفنية" className="w-full h-32 sm:h-40 object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
</div>
</div>

<div className="border-t border-white/10 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full overflow-hidden border border-white/15">
<img alt="صورة آلاء" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium tracking-tight text-slate-100">آلاء</span>
<span className="text-[11px] text-slate-400">فنانة بصرية · جرافيك آرت دايركتور</span>
</div>
</div>
<div className="flex items-center gap-3 text-[11px] text-slate-300">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-emerald-400/50 bg-emerald-500/10">
<i className="lucide lucide-brush" style={{strokeWidth: '1.5'}}></i>
<span>ألوان أكريليك</span>
</div>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-sky-400/50 bg-sky-500/10">
<i className="lucide lucide-monitor" style={{strokeWidth: '1.5'}}></i>
<span>جرافيك ديزاين</span>
</div>
</div>
</div>
</div>

<div className="hidden sm:flex absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90 origin-left items-center gap-2">
<div className="h-px w-10 bg-slate-300/40"></div>
<span className="text-[11px] tracking-[0.25em] uppercase text-slate-300/80">Visual Atmosphere</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20" id="about">
<div className="relative rounded-3xl border border-white/10 bg-slate-950/80 backdrop-blur-xl overflow-hidden">

<div className="absolute inset-y-0 left-0 w-1/2 opacity-[0.09]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="grid md:grid-cols-[1.4fr,1fr] gap-0">

<div className="relative p-6 sm:p-8 lg:p-10">
<div className="flex items-center gap-2 pb-3 border-b border-white/10 mb-4">
<div className="w-7 h-7 rounded-lg border border-fuchsia-400/60 bg-fuchsia-500/15 flex items-center justify-center">
<i className="lucide lucide-quote" style={{strokeWidth: '1.5'}}></i>
</div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">عن آلاء</h2>
</div>
<div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-slate-200">
<p>
                  ولدت آلاء بين رائحة الألوان المائية وصفحات المجلات الفنية القديمة. منذ طفولتها كانت ترى العالم كمشهد
                  مفتوح لإعادة التشكيل؛ الشارع لوحة، الوجوه خطوط، والضوء بداية حكاية جديدة.
                </p>
<p>
                  درست التصميم الجرافيكي لكنها لم تتخلَّ عن الفرشاة والملمس اليدوي، فخلقت لغة بصرية تمزج بين
                  <span className="text-fuchsia-200">التجريد الحسي</span>،
                  <span className="text-sky-200">الهوية البصرية المعاصرة</span>
                  و<span className="text-emerald-200">التجارب الطباعية والتكوينية</span>.
                  أعمالها تظهر كأنها حوار بين لوحة معلّقة على جدار داخلي ومشهد ضوئي على شاشة رقمية.
                </p>
<p>
                  آلاء تؤمن أن التصميم ليس مجرد شكل جميل؛ بل مساحة آمنة لقصص الناس والعلامات. لذلك تسعى في كل مشروع
                  إلى خلق تجربة بصرية كاملة: من أول خط يتكوّن على الورق إلى آخر بكسل يضيء على الشاشة.
                </p>
<p>
                  تعمل مع علامات تجارية ناشئة، مجلات فنية، موسيقيين مستقلين، وأفراد يرغبون في تحويل مشاعرهم إلى
                  لوحات أو تصميمات ملموسة. كل مشروع بالنسبة لها هو طقوس خاصة، تبدأ من الإصغاء وتنتهي بانتماء بصري حقيقي.
                </p>
</div>

<div className="flex flex-wrap gap-2 mt-6">
<span className="px-3 py-1 rounded-full text-[11px] border border-fuchsia-400/50 bg-fuchsia-500/10 text-fuchsia-100">هوية بصرية</span>
<span className="px-3 py-1 rounded-full text-[11px] border border-sky-400/50 bg-sky-500/10 text-sky-100">أغلفة ألبومات</span>
<span className="px-3 py-1 rounded-full text-[11px] border border-emerald-400/50 bg-emerald-500/10 text-emerald-100">لوحات تجريدية</span>
<span className="px-3 py-1 rounded-full text-[11px] border border-amber-400/40 bg-amber-500/10 text-amber-100">طباعة فنية</span>
</div>
</div>

<div className="relative border-t md:border-t-0 md:border-r border-white/10">
<div className="absolute inset-0 opacity-[0.18] bg-gradient-to-b from-fuchsia-500/40 via-transparent to-sky-400/40 mix-blend-overlay"></div>
<div className="h-full grid grid-rows-[1.4fr,1fr]">

<div className="relative overflow-hidden">
<img alt="آلاء في المرسم" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent">
<p className="text-xs text-slate-100">
                      المرسم الخاص بآلاء · حيث تمتزج الفوضى المنظمة بطقوس الألوان اليومية.
                    </p>
</div>
</div>

<div className="relative p-4 sm:p-5 flex flex-col gap-4 bg-slate-950/80">
<div className="grid grid-cols-3 gap-3">
<div className="col-span-2 rounded-2xl overflow-hidden border border-white/10">
<img alt="دمج بين الرسم والتصميم الرقمي" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10">
<img alt="ألوان حبر ولوحة" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&amp;fit=crop&amp;w=700&amp;q=80"/>
</div>
</div>
<div className="flex items-center justify-between gap-4 text-[11px] text-slate-300">
<div className="flex flex-col">
<span className="font-medium text-slate-100">المزاج البصري</span>
<span>حسي · ملوّن · حاد الحضور · عميق التفاصيل</span>
</div>
<div className="flex flex-col text-right">
<span className="font-medium text-slate-100">الموقع</span>
<span>بين اللوحة والشاشة · بين العتمة واللون</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20" id="projects">
<div className="flex items-center justify-between gap-4 mb-6">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50 mb-1">عوالم وأعمال مختارة</h2>
<p className="text-sm text-slate-300">
              مجموعة متنوّعة من اللوحات، الهويات البصرية، أغلفة الألبومات، والتجارب الطباعية.
            </p>
</div>
<div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-300">
<span>فلتر حسب المزاج:</span>
<span className="px-3 py-1 rounded-full border border-slate-500/40 bg-slate-900/70 text-slate-100">تجريدي</span>
<span className="px-3 py-1 rounded-full border border-slate-500/30 bg-slate-900/40 hover:border-fuchsia-400/60 hover:text-fuchsia-100 transition-colors cursor-pointer">هوية</span>
<span className="px-3 py-1 rounded-full border border-slate-500/30 bg-slate-900/40 hover:border-sky-400/60 hover:text-sky-100 transition-colors cursor-pointer">غلاف</span>
</div>
</div>

<div className="grid lg:grid-cols-[1.4fr,1fr] gap-6 mb-10">
<div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/70 backdrop-blur-xl">
<div className="absolute inset-0 opacity-[0.16] bg-gradient-to-r from-fuchsia-500/40 via-transparent to-sky-400/40 mix-blend-soft-light"></div>
<div className="grid md:grid-cols-3 h-full">
<div className="md:col-span-2 relative overflow-hidden">
<img alt="لوحة تجريدية كبيرة" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1200ms]" src="https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 right-0 p-4 sm:p-5 flex flex-col items-start gap-2">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] bg-slate-950/70 border border-white/20 text-slate-100">
<i className="lucide lucide-palette" style={{strokeWidth: '1.5'}}></i>
                    مجموعة "نبض المدينة"
                  </span>
<p className="text-sm sm:text-base font-medium tracking-tight text-slate-50">
                    لوحات تجريدية مستوحاة من حركة المدينة الليلية وانعكاس الأضواء على الواجهات الزجاجية.
                  </p>
</div>
</div>
<div className="flex flex-col justify-between p-4 sm:p-5">
<div className="space-y-2 text-sm text-slate-200">
<h3 className="text-base font-semibold tracking-tight text-slate-50">نبض المدينة · سلسلة لوحات</h3>
<p className="text-xs sm:text-sm text-slate-300">
                    مشروع شخصي يمزج بين الطبقات اللونية الكثيفة والخطوط الهندسية، يحاول التقاط توتر المدينة وهشاشتها
                    في آن واحد.
                  </p>
<div className="flex flex-wrap gap-2 pt-2">
<span className="px-2 py-1 rounded-full text-[11px] bg-fuchsia-500/10 border border-fuchsia-400/50 text-fuchsia-100">أكريليك</span>
<span className="px-2 py-1 rounded-full text-[11px] bg-emerald-500/10 border border-emerald-400/50 text-emerald-100">قماش</span>
<span className="px-2 py-1 rounded-full text-[11px] bg-sky-500/10 border border-sky-400/50 text-sky-100">تجريد هندسي</span>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/10 mt-4">
<div className="flex flex-col text-[11px] text-slate-300">
<span>السنة</span>
<span className="text-slate-100 font-medium">٢٠٢٤</span>
</div>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] border border-slate-500/50 bg-slate-900/70 hover:border-fuchsia-300 hover:bg-slate-900 transition-all duration-200 text-slate-100">
<i className="lucide lucide-maximize-2" style={{strokeWidth: '1.5'}}></i>
                    مشاهدة تفاصيل المجموعة
                  </button>
</div>
</div>
</div>
</div>

<div className="space-y-4">

<article className="group relative rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur-lg overflow-hidden hover:border-fuchsia-400/60 transition-colors">
<div className="relative h-40 overflow-hidden">
<img alt="هوية بصرية لمقهى فني" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
<div className="absolute bottom-2 right-3">
<span className="px-2.5 py-1 rounded-full text-[10px] bg-slate-950/70 border border-white/20 text-slate-50">
                    هوية بصرية · مقهى فني
                  </span>
</div>
</div>
<div className="p-4 space-y-2">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">
                  "حبر وقهوة" · نظام بصري لمقهى فني مستقل
                </h3>
<p className="text-xs text-slate-300">
                  تطوير هوية كاملة تشمل الشعار، القوائم، التعبئة، والجداريات الداخلية، بلمسة يدوية وملمس ورقي.
                </p>
<div className="flex justify-between items-center pt-2">
<div className="flex gap-1.5 text-[10px] text-slate-400">
<span className="px-2 py-0.5 rounded-full bg-slate-900/60 border border-slate-600/60">شعار</span>
<span className="px-2 py-0.5 rounded-full bg-slate-900/60 border border-slate-600/60">مطبوعة</span>
</div>
<span className="text-[11px] text-slate-400">٢٠٢٣</span>
</div>
</div>
</article>

<article className="group relative rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur-lg overflow-hidden hover:border-sky-400/60 transition-colors">
<div className="relative h-40 overflow-hidden">
<img alt="غلاف ألبوم موسيقي" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
<div className="absolute bottom-2 right-3">
<span className="px-2.5 py-1 rounded-full text-[10px] bg-slate-950/70 border border-white/20 text-slate-50">
                    غلاف ألبوم · موسيقى تجريبية
                  </span>
</div>
</div>
<div className="p-4 space-y-2">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">
                  "أصداء باطنية" · غلاف ألبوم وفن مرئي حيّ
                </h3>
<p className="text-xs text-slate-300">
                  تصميم غلاف ألبوم لموسيقي تجريبي، مع سلسلة بصريات حيّة مرافقة للحفلات باستخدام طبقات فيديو ولوحات مرسومة.
                </p>
<div className="flex justify-between items-center pt-2">
<div className="flex gap-1.5 text-[10px] text-slate-400">
<span className="px-2 py-0.5 rounded-full bg-slate-900/60 border border-slate-600/60">غلاف</span>
<span className="px-2 py-0.5 rounded-full bg-slate-900/60 border border-slate-600/60">موشن</span>
</div>
<span className="text-[11px] text-slate-400">٢٠٢٢</span>
</div>
</div>
</article>
</div>
</div>

<div className="grid md:grid-cols-3 gap-4">

<article className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950/70 backdrop-blur-lg">
<div className="relative h-52 overflow-hidden">
<img alt="لوحات صغيرة على الحائط" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
<div className="absolute bottom-3 right-3 flex flex-col gap-1">
<span className="px-2.5 py-1 rounded-full text-[10px] bg-slate-950/80 border border-white/25 text-slate-50">
                  سلسلة مصغّرات · "بقايا ضوء"
                </span>
<span className="text-[11px] text-slate-300">لوحات صغيرة تجمع بين الحبر والذهبي.</span>
</div>
</div>
</article>

<article className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950/70 backdrop-blur-lg">
<div className="relative h-52 overflow-hidden">
<img alt="تجارب طباعية" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
<div className="absolute bottom-3 right-3 flex flex-col gap-1">
<span className="px-2.5 py-1 rounded-full text-[10px] bg-slate-950/80 border border-white/25 text-slate-50">
                  تجربة طباعية · "أصوات صامتة"
                </span>
<span className="text-[11px] text-slate-300">أعمال مطبوعة بتقنية المونوبرنت مع تدخل يدوي.</span>
</div>
</div>
</article>

<article className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950/70 backdrop-blur-lg">
<div className="relative h-52 overflow-hidden">
<img alt="تفاصيل أدوات الرسم" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
<div className="absolute bottom-3 right-3 flex flex-col gap-1">
<span className="px-2.5 py-1 rounded-full text-[10px] bg-slate-950/80 border border-white/25 text-slate-50">
                  طقس يومي · "طاولة الفوضى"
                </span>
<span className="text-[11px] text-slate-300">توثيق بصري لطقوس العمل والمواد في المرسم.</span>
</div>
</div>
</article>
</div>
</section>

<section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20" id="services">
<div className="flex items-center justify-between gap-4 mb-6">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50 mb-1">مساحات العمل والخدمات</h2>
<p className="text-sm text-slate-300">
              يمكنك التعاون مع آلاء في مشاريع شخصية، تجارية، وموسيقية ذات حس بصري عميق.
            </p>
</div>
<div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-300">
<i className="lucide lucide-wand-2" style={{strokeWidth: '1.5'}}></i>
<span>كل مشروع يبدأ من جلسة استكشاف بصرية.</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-5">

<div className="relative rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-lg p-5 flex flex-col gap-4 hover:border-fuchsia-400/60 hover:bg-slate-950 transition-colors">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-xl border border-fuchsia-400/60 bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-100">
<i className="lucide lucide-shapes" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">هويات بصرية وحضور للعلامات</h3>
</div>
<span className="text-[11px] px-2 py-1 rounded-full bg-slate-900/80 border border-slate-600/70 text-slate-200">للشركات</span>
</div>
<p className="text-xs text-slate-300 leading-relaxed">
              تصميم هوية متكاملة للعلامات التجارية، من الشعار إلى نظام الألوان، نمط الصور، التايبوغرافي، والتطبيقات على
              المواد المطبوعة والرقمية، بأسلوب فني غني بالطبقات.
            </p>
<ul className="text-[11px] text-slate-300 space-y-1">
<li className="flex items-center gap-1.5">
<span className="w-1 h-1 rounded-full bg-fuchsia-300"></span>
                نظام هوية مرن يناسب المنصات الرقمية والورقية.
              </li>
<li className="flex items-center gap-1.5">
<span className="w-1 h-1 rounded-full bg-fuchsia-300"></span>
                لوحات اتجاه بصري (Moodboards) وعوالم ألوان.
              </li>
<li className="flex items-center gap-1.5">
<span className="w-1 h-1 rounded-full bg-fuchsia-300"></span>
                اقتراحات تطبيق على واجهات، تغليف، ولوحات جدارية.
              </li>
</ul>
</div>

<div className="relative rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-lg p-5 flex flex-col gap-4 hover:border-sky-400/60 hover:bg-slate-950 transition-colors">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-xl border border-sky-400/60 bg-sky-500/10 flex items-center justify-center text-sky-100">
<i className="lucide lucide-vinyl" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">أغلفة ألبومات ومشاهد موسيقية</h3>
</div>
<span className="text-[11px] px-2 py-1 rounded-full bg-slate-900/80 border border-slate-600/70 text-slate-200">للموسيقيين</span>
</div>
<p className="text-xs text-slate-300 leading-relaxed">
              تصميم غلاف ألبوم وصور ترويجية، مع إمكانية تطوير بصريات عروض حيّة (Visuals) تستجيب للصوت وتشكّل معه حواراً.
            </p>
<ul className="text-[11px] text-slate-300 space-y-1">
<li className="flex items-center gap-1.5">
<span className="w-1 h-1 rounded-full bg-sky-300"></span>
                غلاف ألبوم رئيسي ومتغيرات للمنصات الرقمية.
              </li>
<li className="flex items-center gap-1.5">
<span className="w-1 h-1 rounded-full bg-sky-300"></span>
                تيزرات بصرية قصيرة ومشاهد متحركة.
              </li>
<li className="flex items-center gap-1.5">
<span className="w-1 h-1 rounded-full bg-sky-300"></span>
                بوسترات للحفلات وبطاقات دعوة رقمية.
              </li>
</ul>
</div>

<div className="relative rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-lg p-5 flex flex-col gap-4 hover:border-emerald-400/60 hover:bg-slate-950 transition-colors">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-xl border border-emerald-400/60 bg-emerald-500/10 flex items-center justify-center text-emerald-100">
<i className="lucide lucide-frame" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">لوحات مخصّصة وتجارب فنية شخصية</h3>
</div>
<span className="text-[11px] px-2 py-1 rounded-full bg-slate-900/80 border border-slate-600/70 text-slate-200">للأفراد</span>
</div>
<p className="text-xs text-slate-300 leading-relaxed">
              إنشاء لوحة أو سلسلة لوحات تحكي قصتك الخاصة: ذكريات، مدينة أحببتها، شعور معيّن، أو مساحة تريد أن تتحول
              إلى مشهد حميم.
            </p>
<ul className="text-[11px] text-slate-300 space-y-1">
<li className="flex items-center gap-1.5">
<span className="w-1 h-1 rounded-full bg-emerald-300"></span>
                جلسة استماع وتخيل للمشهد والمشاعر المرتبطة به.
              </li>
<li className="flex items-center gap-1.5">
<span className="w-1 h-1 rounded-full bg-emerald-300"></span>
                اقتراح مقاسات، مواد، ولوحة ألوان تناسب المكان.
              </li>
<li className="flex items-center gap-1.5">
<span className="w-1 h-1 rounded-full bg-emerald-300"></span>
                تسليم رقمي عالي الدقة بالإضافة إلى العمل الأصلي (حسب الإمكانية اللوجستية).
              </li>
</ul>
</div>
</div>
</section>

<section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20" id="contact">
<div className="grid lg:grid-cols-[1.1fr,1fr] gap-8">

<div className="relative rounded-3xl border border-white/10 bg-slate-950/85 backdrop-blur-xl p-6 sm:p-8">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-xl border border-fuchsia-400/60 bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-100">
<i className="lucide lucide-mail-plus" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-50">لنخلق عالماً بصرياً معاً</h2>
<p className="text-xs text-slate-300 mt-1">
                  اكتب لآلاء عن مشروعك، شعورك، أو حتى مشهد تتمنّى أن يتحول إلى لوحة. الرد غالباً خلال ٤٨ ساعة.
                </p>
</div>
</div>
<form className="space-y-4 mt-4">

<div className="grid sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs text-slate-200" htmlFor="name">الاسم الكامل</label>
<div className="relative">
<input className="w-full rounded-2xl bg-slate-900/70 border border-slate-600/60 px-3.5 py-2.5 text-sm text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/70 focus:border-fuchsia-400/70 transition-shadow" id="name" placeholder="اكتب اسمك هنا" type="text"/>
<div className="pointer-events-none absolute left-3 top-2.5 text-slate-500">
<i className="lucide lucide-user" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs text-slate-200" htmlFor="email">البريد الإلكتروني</label>
<div className="relative">
<input className="w-full rounded-2xl bg-slate-900/70 border border-slate-600/60 px-3.5 py-2.5 text-sm text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/70 focus:border-fuchsia-400/70 transition-shadow" id="email" placeholder="example@email.com" type="email"/>
<div className="pointer-events-none absolute left-3 top-2.5 text-slate-500">
<i className="lucide lucide-at-sign" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs text-slate-200" htmlFor="project-type">نوع المشروع</label>
<div className="relative">
<select className="w-full appearance-none rounded-2xl bg-slate-900/70 border border-slate-600/60 px-3.5 py-2.5 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/70 focus:border-fuchsia-400/70 transition-shadow" id="project-type">
<option className="bg-slate-900">هوية بصرية لعلامة</option>
<option className="bg-slate-900">غلاف ألبوم / مشروع موسيقي</option>
<option className="bg-slate-900">لوحة مخصّصة لمساحة</option>
<option className="bg-slate-900">تعاون فني / معرض</option>
<option className="bg-slate-900">أخرى (اذكر التفاصيل في الرسالة)</option>
</select>
<div className="pointer-events-none absolute left-3 top-2.5 text-slate-500">
<i className="lucide lucide-chevron-down" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs text-slate-200" htmlFor="budget">المدى التقريبي للميزانية</label>
<div className="relative">
<select className="w-full appearance-none rounded-2xl bg-slate-900/70 border border-slate-600/60 px-3.5 py-2.5 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/70 focus:border-fuchsia-400/70 transition-shadow" id="budget">
<option className="bg-slate-900">لم أحدد بعد</option>
<option className="bg-slate-900">حتى ٥٠٠ دولار</option>
<option className="bg-slate-900">٥٠٠ - ١٥٠٠ دولار</option>
<option className="bg-slate-900">أكثر من ١٥٠٠ دولار</option>
</select>
<div className="pointer-events-none absolute left-3 top-2.5 text-slate-500">
<i className="lucide lucide-wallet" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs text-slate-200" htmlFor="message">احكِ عن المشروع، المزاج، والألوان التي تتخيلها</label>
<textarea className="w-full rounded-2xl bg-slate-900/70 border border-slate-600/60 px-3.5 py-2.5 text-sm text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/70 focus:border-fuchsia-400/70 transition-shadow" id="message" placeholder="شارك آلاء أكبر قدر ممكن من التفاصيل: نوع العمل، المكان الذي سيُعرض فيه، الأبعاد المفضّلة، المراجع البصرية، أو أي شيء يشبه شعور العمل الذي تتخيله." rows="4"></textarea>
</div>

<div className="flex items-start gap-2 text-[11px] text-slate-300">
<div className="mt-0.5 w-4 h-4 rounded-md border border-slate-500/70 bg-slate-900/60 flex items-center justify-center">
<div className="w-2 h-2 rounded-sm bg-fuchsia-400/80"></div>
</div>
<p>
                  أوافق على استخدام تفاصيل مشروعي ضمن محفظة آلاء بعد التنفيذ، مع حفظ الخصوصية الشخصية.
                </p>
</div>

<div className="flex flex-wrap items-center justify-between gap-3 pt-2">
<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium tracking-tight bg-fuchsia-400 text-slate-950 hover:bg-fuchsia-300 transition-colors shadow-lg shadow-fuchsia-500/30 border border-fuchsia-200" type="submit">
<i className="lucide lucide-send" style={{strokeWidth: '1.5'}}></i>
<span>إرسال الرسالة إلى آلاء</span>
</button>
<div className="flex items-center gap-2 text-[11px] text-slate-400">
<i className="lucide lucide-clock-3" style={{strokeWidth: '1.5'}}></i>
<span>متوسط وقت الرد: ٤٨ ساعة · يمكن التواصل بلغات أخرى عند الحاجة.</span>
</div>
</div>
</form>
</div>

<div className="space-y-4">
<div className="relative rounded-3xl border border-white/10 bg-slate-950/80 backdrop-blur-xl p-5 flex flex-col gap-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-xl border border-emerald-400/60 bg-emerald-500/10 flex items-center justify-center text-emerald-100">
<i className="lucide lucide-rss" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">قنوات أخرى</h3>
<p className="text-xs text-slate-300">مساحات يتسرّب منها عمل آلاء إلى العالم.</p>
</div>
</div>
<div className="space-y-2 text-sm">
<a className="flex items-center justify-between gap-2 px-3 py-2 rounded-2xl border border-slate-600/70 bg-slate-900/60 hover:border-fuchsia-400/60 hover:bg-slate-900 transition-colors" href="#">
<div className="flex items-center gap-2">
<i className="lucide lucide-instagram" style={{strokeWidth: '1.5'}}></i>
<span className="text-slate-50 text-xs">إنستغرام · يوميات من المرسم</span>
</div>
<span className="text-[11px] text-slate-400">@alaa.studio</span>
</a>
<a className="flex items-center justify-between gap-2 px-3 py-2 rounded-2xl border border-slate-600/70 bg-slate-900/60 hover:border-sky-400/60 hover:bg-slate-900 transition-colors" href="#">
<div className="flex items-center gap-2">
<i className="lucide lucide-dribbble" style={{strokeWidth: '1.5'}}></i>
<span className="text-slate-50 text-xs">منصة أعمال رقمية</span>
</div>
<span className="text-[11px] text-slate-400">تجارب UI, غلافات, ملصقات</span>
</a>
<a className="flex items-center justify-between gap-2 px-3 py-2 rounded-2xl border border-slate-600/70 bg-slate-900/60 hover:border-emerald-400/60 hover:bg-slate-900 transition-colors" href="#">
<div className="flex items-center gap-2">
<i className="lucide lucide-link" style={{strokeWidth: '1.5'}}></i>
<span className="text-slate-50 text-xs">نشرة بريدية موسمية</span>
</div>
<span className="text-[11px] text-slate-400">معارض، قطع جديدة، وسير عمل</span>
</a>
</div>
</div>
<div className="relative rounded-3xl border border-white/10 bg-slate-950/80 backdrop-blur-xl overflow-hidden">
<div className="absolute inset-0 opacity-[0.2]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1516571137133-1be29e37143a?auto=format&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="relative p-5 flex flex-col justify-between h-full">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-1.5">مواعيد الجلسات الافتراضية</h3>
<p className="text-xs text-slate-200">
                    يمكن حجز جلسة استكشاف بصري (٣٠ دقيقة) لمناقشة فكرة مشروعك قبل البدء بالتنفيذ.
                  </p>
</div>
<div className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-100">
<div className="rounded-2xl bg-slate-950/85 border border-white/15 px-3 py-2 flex flex-col gap-1">
<span className="text-slate-300">الأيام المتاحة</span>
<span>الاثنين · الأربعاء · الجمعة</span>
</div>
<div className="rounded-2xl bg-slate-950/85 border border-white/15 px-3 py-2 flex flex-col gap-1">
<span className="text-slate-300">التوقيت</span>
<span>٦ م - ٩ م (توقيت محلي)</span>
</div>
</div>
<button className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] border border-slate-500/60 bg-slate-950/90 hover:border-fuchsia-400/70 hover:bg-slate-950 transition-colors text-slate-100">
<i className="lucide lucide-calendar-plus" style={{strokeWidth: '1.5'}}></i>
<span>طلب حجز جلسة استكشاف</span>
</button>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-slate-950/90 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
<div className="flex items-center gap-2">
<span className="px-2 py-1 rounded-full border border-slate-600/70 bg-slate-900/80 text-slate-200">
            آلاء · مساحة فنية حية
          </span>
<span>© <span className="tabular-nums">٢٠٢٥</span> · كل الحقوق محفوظة للقصص البصرية.</span>
</div>
<div className="flex items-center gap-3">
<span>اللغة: العربية</span>
<span className="w-1 h-1 rounded-full bg-slate-500"></span>
<span>مقرّ العمل: في مكانٍ بين الضوء والظل.</span>
</div>
</div>
</footer>
</div>

<style>
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
  </style>

    </>
  );
}
