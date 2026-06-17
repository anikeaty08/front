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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-zinc-100 font-semibold tracking-tighter text-xl">
                BLADE
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-zinc-100 transition-colors" href="#services">الخدمات</a>
<a className="hover:text-zinc-100 transition-colors" href="#about">الفن</a>
<a className="hover:text-zinc-100 transition-colors" href="#book">الموقع</a>
</div>
<button className="bg-zinc-100 text-zinc-950 px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-300 transition-all">
                حجز جلسة
            </button>
</div>
</nav>

<main className="pt-32 pb-20 px-6">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col items-center text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-300">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    نستقبل الحجوزات الآن
                </div>
<h1 className="text-5xl md:text-7xl font-semibold text-zinc-100 tracking-tight max-w-4xl leading-[1.3]">
                    حان الوعد للحلاقة، حان الوقت للتغيير
                </h1>
<p className="text-lg text-zinc-500 max-w-xl leading-relaxed">
                    تجربة حلاقة فاخرة تركز على المهارة التقنية والجماليات البسيطة. في قلب الحي المالي.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-zinc-100 text-zinc-950 px-8 py-4 rounded-xl font-medium text-base hover:scale-[1.02] transition-transform">
                        جدولة موعد
                    </button>
<button className="border border-zinc-800 text-zinc-100 px-8 py-4 rounded-xl font-medium text-base hover:bg-zinc-900 transition-colors">
                        معرض الأعمال
                    </button>
</div>
</div>

<div className="mt-24 relative rounded-2xl overflow-hidden border border-zinc-800 aspect-[21/9] bg-zinc-900">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10"></div>
<img alt="Studio" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute bottom-8 right-8 z-20">
<div className="flex items-center gap-6">
<div className="flex flex-col">
<span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">تأسيس</span>
<span className="text-zinc-100 text-sm font-medium">منذ ٢٠١٨</span>
</div>
<div className="h-8 w-[1px] bg-zinc-800"></div>
<div className="flex flex-col">
<span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">الحرفة</span>
<span className="text-zinc-100 text-sm font-medium">حلاقون معتمدون</span>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 px-6 border-t border-zinc-900" id="services">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="space-y-6">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<iconify-icon className="text-zinc-100 text-2xl" icon="solar:scissors-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-zinc-100 tracking-tight">قصة الشعر المميزة</h3>
<p className="text-sm leading-relaxed">قص شعر مخصص يتضمن استشارة مفصلة، غسيل، وتصفيف. معيارنا للتميز.</p>
<div className="flex items-center justify-between pt-4 border-t border-zinc-900">
<span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">٤٥ دقيقة</span>
<span className="text-sm font-semibold text-zinc-100">٥٥$</span>
</div>
</div>
<div className="space-y-6">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<iconify-icon className="text-zinc-100 text-2xl" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-zinc-100 tracking-tight">تهذيب اللحية</h3>
<p className="text-sm leading-relaxed">تحديد دقيق باستخدام الآلة والمقص، مع تحديد بالموس الحاد وزيت مرطب.</p>
<div className="flex items-center justify-between pt-4 border-t border-zinc-900">
<span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">٣٠ دقيقة</span>
<span className="text-sm font-semibold text-zinc-100">٣٥$</span>
</div>
</div>
<div className="space-y-6">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<iconify-icon className="text-zinc-100 text-2xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-zinc-100 tracking-tight">الطقس الكامل</h3>
<p className="text-sm leading-relaxed">التجربة القصوى. قصة الشعر المميزة مع تهذيب اللحية وحلاقة المنشفة الساخنة.</p>
<div className="flex items-center justify-between pt-4 border-t border-zinc-900">
<span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">٧٥ دقيقة</span>
<span className="text-sm font-semibold text-zinc-100">٨٥$</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900/30" id="book">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
<div className="space-y-8">
<h2 className="text-4xl font-semibold text-zinc-100 tracking-tight leading-tight">جاهز للتحول؟</h2>
<p className="text-base leading-relaxed text-zinc-400">اختر الحلاق المفضل لديك والوقت المناسب. نوصي بالحجز قبل ٤٨ ساعة لجلسات نهاية الأسبوع.</p>
<div className="space-y-4">
<div className="flex items-center gap-4">
<iconify-icon className="text-zinc-500 text-xl" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm text-zinc-300">١٢٤ طريق الأرشيف، استوديو ٤، ميتروبوليس</span>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-zinc-500 text-xl" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">الثلاثاء – السبت، ١٠:٠٠ ص – ٨:٠٠ م</span>
</div>
</div>
</div>
<div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 shadow-2xl">
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wider text-zinc-500">الخدمة</label>
<div className="relative">
<select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 appearance-none focus:outline-none focus:border-zinc-100 transition-colors">
<option>قصة الشعر المميزة</option>
<option>تهذيب اللحية</option>
<option>الطقس الكامل</option>
</select>
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wider text-zinc-500">التاريخ</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-zinc-100 transition-colors" type="date"/>
</div>
</div>
<div className="space-y-4">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-zinc-800 rounded bg-zinc-900 peer-checked:bg-zinc-100 peer-checked:border-zinc-100 transition-all flex items-center justify-center">
<iconify-icon className="text-zinc-950 text-xs opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">تلقي تذكير عبر الرسائل قبل ٢٤ ساعة</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-10 h-5 bg-zinc-800 rounded-full peer-checked:bg-zinc-100 transition-colors relative">
<div className="absolute top-1 right-1 w-3 h-3 bg-zinc-400 peer-checked:bg-zinc-950 peer-checked:-translate-x-5 transition-all rounded-full"></div>
</div>
</div>
<span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">جلسة صامتة VIP (بدون أحاديث جانبية)</span>
</label>
</div>
<button className="w-full bg-zinc-100 text-zinc-950 py-4 rounded-xl font-semibold text-sm hover:bg-white transition-colors">
                            تأكيد الحجز
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-zinc-900">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-zinc-100 font-semibold tracking-tighter text-lg">
                BLADE
            </div>
<div className="flex gap-8 text-xs font-medium uppercase tracking-widest">
<a className="hover:text-zinc-100 transition-colors" href="#">إنستغرام</a>
<a className="hover:text-zinc-100 transition-colors" href="#">المجلة</a>
<a className="hover:text-zinc-100 transition-colors" href="#">الخصوصية</a>
</div>
<p className="text-xs text-zinc-600">
                © ٢٠٢٤ استوديوهات BLADE. جميع الحقوق محفوظة.
            </p>
</div>
</footer>

    </>
  );
}
