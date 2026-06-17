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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a aria-label="DOTIQ Homepage" className="flex items-center gap-2" href="#">
<svg className="block" fill="none" height="32" viewbox="0 0 130 32" width="130" xmlns="http://www.w3.org/2000/svg">
<defs>
<mask id="header-mask-1">
<rect fill="white" height="100%" width="100%"></rect>
<circle cx="28" cy="16" fill="black" r="18"></circle>
</mask>
<mask id="header-mask-2">
<rect fill="white" height="100%" width="100%"></rect>
<circle cx="46" cy="16" fill="black" r="18"></circle>
</mask>
</defs>

<circle className="fill-emerald-500" cx="10" cy="16" mask="url(#header-mask-1)" r="16"></circle>

<circle className="fill-emerald-500" cx="28" cy="16" mask="url(#header-mask-2)" r="16"></circle>

<circle className="fill-emerald-500" cx="46" cy="16" r="16"></circle>

<text className="fill-zinc-900 tracking-tight" fontFamily="'IBM Plex Sans Arabic', sans-serif" fontSize="26" font-weight="700" x="66" y="24">DOTIQ</text>
</svg>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors duration-200" href="#">المناقشات</a>
<a className="hover:text-zinc-900 transition-colors duration-200" href="#">المعرض</a>
<a className="hover:text-zinc-900 transition-colors duration-200" href="#">الفعاليات</a>
<a className="hover:text-zinc-900 transition-colors duration-200" href="#">الوظائف</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">تسجيل الدخول</a>
<a className="text-xs font-semibold bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors shadow-sm" href="#">
                    انضم للمجتمع
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 grid-bg z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white text-zinc-600 text-xs font-medium mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                الإصدار 2.0 متاح الآن لجميع الأعضاء
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-zinc-900 tracking-tighter leading-[1.2] mb-6">
                ابنِ برمجيات أفضل،<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 via-emerald-500 to-teal-500">معاً.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                دوتيك هو التجمع الخاص للمهندسين ذوي النمو العالي.
                شارك المعرفة، أصلح الأنظمة المعقدة، وسرّع مسارك المهني في بيئة خالية من الضوضاء.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="group relative px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-lg transition-all w-full md:w-auto shadow-md hover:shadow-lg">
<span className="flex items-center justify-center gap-2">
                        ابدأ بالمساهمة
                        
<i className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" data-lucide="arrow-left"></i>
</span>
</button>
<button className="px-6 py-3 bg-white hover:bg-zinc-50 text-zinc-700 border border-zinc-200 hover:border-zinc-300 text-sm font-medium rounded-lg transition-all w-full md:w-auto shadow-sm">
                    اقرأ البيان
                </button>
</div>
</div>
</section>

<section className="py-10 border-b border-zinc-100">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-8">موثوق من قبل مهندسين في</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 code-ltr">
<span className="text-lg font-bold text-zinc-800 tracking-tight">ACME</span>
<span className="text-lg font-bold text-zinc-800 tracking-tight flex items-center gap-1"><i className="w-4 h-4 fill-current" data-lucide="triangle"></i> Vercel</span>
<span className="text-lg font-bold text-zinc-800 tracking-tight">Stripe</span>
<span className="text-lg font-bold text-zinc-800 tracking-tight flex items-center gap-1"><i className="w-4 h-4 fill-current" data-lucide="box"></i> Linear</span>
<span className="text-lg font-bold text-zinc-800 tracking-tight">Raycast</span>
</div>
</div>
</section>

<section className="border-y border-zinc-100 bg-white">
<div className="max-w-6xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="text-center md:text-right pr-4 border-r-2 border-zinc-100">
<div className="text-3xl font-semibold text-zinc-900 tracking-tight code-ltr text-right">12k+</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide mt-1">مطور</div>
</div>
<div className="text-center md:text-right pr-4 border-r-2 border-zinc-100">
<div className="text-3xl font-semibold text-zinc-900 tracking-tight code-ltr text-right">850+</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide mt-1">مشروع مفتوح</div>
</div>
<div className="text-center md:text-right pr-4 border-r-2 border-zinc-100">
<div className="text-3xl font-semibold text-zinc-900 tracking-tight code-ltr text-right">2.4m</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide mt-1">سطر برمجي</div>
</div>
<div className="text-center md:text-right pr-4 border-r-2 border-zinc-100">
<div className="text-3xl font-semibold text-zinc-900 tracking-tight code-ltr text-right">99%</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide mt-1">وقت التشغيل</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-4">كل ما تحتاجه للإطلاق.</h2>
<p className="text-zinc-500 font-light max-w-xl">موارد وأدوات منتقاة بعناية مصممة لمساعدتك على التركيز على المنطق البرمجي، وليس اللوجستيات.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-white border border-zinc-200 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-zinc-700 group-hover:text-emerald-600 transition-colors" data-lucide="terminal"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">مراجعة الكود</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        احصل على ملاحظات حول طلبات الدمج (PRs) من كبار المهندسين خلال ساعات. معايير جودة صارمة تضمن نقداً بناءً.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-zinc-200 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-zinc-700 group-hover:text-emerald-600 transition-colors" data-lucide="cpu"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">تصميم الأنظمة</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        تعمق في الأنماط المعمارية. جلسات تخطيط أسبوعية مع مهندسين معماريين من كبرى شركات التكنولوجيا.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-zinc-200 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-zinc-700 group-hover:text-emerald-600 transition-colors" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">المسار المهني</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        مسارات إرشادية منظمة للانتقال من مبتدئ إلى خبير، أو من مساهم فردي إلى إدارة هندسية.
                    </p>
</div>

<div className="md:col-span-2 group p-8 rounded-2xl bg-white border border-zinc-200 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col md:flex-row gap-8 items-start">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-6">
<i className="w-5 h-5 text-zinc-700 group-hover:text-emerald-600 transition-colors" data-lucide="globe"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">هاكاثونات عالمية</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">
                            شارك في أحداث ربع سنوية تركز على المساهمة في المصادر المفتوحة. اربح منحاً وتراخيص برامج وشهادات تقدير.
                        </p>
<div className="flex items-center gap-3 code-ltr">
<span className="px-2 py-1 rounded bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-medium">Rust</span>
<span className="px-2 py-1 rounded bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-medium">Go</span>
<span className="px-2 py-1 rounded bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-medium">TypeScript</span>
</div>
</div>

<div className="w-full md:w-64 bg-white rounded-lg border border-zinc-200 p-4 shadow-xl shadow-zinc-200/50" dir="ltr">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
<div className="space-y-2">
<div className="h-2 w-3/4 bg-zinc-100 rounded"></div>
<div className="h-2 w-1/2 bg-zinc-100 rounded"></div>
<div className="h-2 w-full bg-zinc-100 rounded"></div>
<div className="h-2 w-5/6 bg-emerald-50 rounded"></div>
</div>
</div>
</div>

<div className="group p-8 rounded-2xl bg-white border border-zinc-200 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100 mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-zinc-700 group-hover:text-emerald-600 transition-colors" data-lucide="users"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">المطابقة الذكية</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        مطابقة مدعومة بالذكاء الاصطناعي للعثور على شركاء برمجة في منطقتك الزمنية بمهارات متوافقة.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-100">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="flex-1">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-6">تكامل سلس مع سير عملك الحالي.</h2>
<p className="text-zinc-500 mb-8 leading-relaxed">
                        لا نريد استبدال أدواتك. يتصل دوتيك مباشرةً بـ GitHub و GitLab و Jira لمزامنة المناقشات مع قاعدة التعليمات البرمجية الخاصة بك.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 text-emerald-600" data-lucide="check"></i>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">مزامنة ثنائية الاتجاه</h4>
<p className="text-xs text-zinc-500 mt-1">تظهر التعليقات على دوتيك كتعليقات في PR.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 text-emerald-600" data-lucide="check"></i>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">الوعي بالسياق</h4>
<p className="text-xs text-zinc-500 mt-1">إضافات IDE تجلب إجابات المجتمع إلى محررك.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
<i className="w-3.5 h-3.5 text-emerald-600" data-lucide="check"></i>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">الأمان والامتثال</h4>
<p className="text-xs text-zinc-500 mt-1">أمان جاهز للمؤسسات وحسابات الفرق.</p>
</div>
</li>
</ul>
</div>
<div className="flex-1 w-full">
<div className="relative rounded-xl bg-zinc-900 p-2 shadow-2xl ring-1 ring-zinc-200">
<div className="rounded-lg bg-zinc-900 border border-zinc-800 p-6 overflow-hidden code-ltr">
<div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-4">
<div className="text-xs text-zinc-400 font-mono">sync_worker.ts</div>
<div className="ml-auto flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
</div>
<div className="font-mono text-xs space-y-1">
<p className="text-purple-400">import <span className="text-white">{ DotiqSync }</span> from <span className="text-green-400">'@dotiq/core'</span>;</p>
<p className="text-zinc-500">// Initialize synchronization</p>
<p className="text-blue-400">const <span className="text-white">client</span> = <span className="text-purple-400">new</span> <span className="text-yellow-300">DotiqSync</span>({</p>
<p className="pl-4 text-white">apiKey: <span className="text-green-400">process.env.DOTIQ_KEY</span>,</p>
<p className="pl-4 text-white">repoId: <span className="text-orange-400">10492</span>,</p>
<p className="pl-4 text-white">onComment: <span className="text-blue-400">(<span className="text-orange-300">ctx</span>)</span> =&gt; {</p>
<p className="pl-8 text-zinc-400">console.log(<span className="text-green-400">'New insight received'</span>);</p>
<p className="pl-4 text-white">}</p>
<p className="text-white">});</p>
</div>

<div className="absolute bottom-6 right-6 bg-white rounded-lg p-3 shadow-lg border border-zinc-100 flex items-center gap-3 animate-bounce" dir="rtl">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<div>
<div className="text-xs font-semibold text-zinc-900">تمت المزامنة</div>
<div className="text-[10px] text-zinc-500">24 مناقشة جديدة</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50">
<div className="max-w-4xl mx-auto px-6">
<div className="flex items-center justify-between mb-10">
<h2 className="text-2xl font-semibold text-zinc-900 tracking-tight">مناقشات حية</h2>
<a className="text-xs text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1 transition-colors" href="#">
                    عرض الكل <i className="w-3 h-3" data-lucide="arrow-left"></i>
</a>
</div>
<div className="space-y-4">

<div className="flex items-start gap-4 p-5 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md hover:border-emerald-200 transition-all cursor-pointer group">
<div className="mt-1 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-600">JD</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium text-zinc-900 group-hover:text-emerald-600 transition-colors code-ltr text-right">Best practices for state management in 2024?</h4>
<span className="text-xs text-zinc-400">منذ دقيقتين</span>
</div>
<p className="text-xs text-zinc-500 mt-1 line-clamp-1">أنا متردد بين استخدام Redux Toolkit و Zustand لتطبيق مؤسسي كبير الحجم...</p>
<div className="flex items-center gap-4 mt-3">
<div className="flex items-center gap-1 text-xs text-zinc-500">
<i className="w-3 h-3" data-lucide="message-square"></i> 24
                            </div>
<div className="flex items-center gap-1 text-xs text-zinc-500">
<i className="w-3 h-3" data-lucide="thumbs-up"></i> 12
                            </div>
<span className="text-[10px] px-1.5 py-0.5 rounded border border-zinc-200 bg-zinc-50 text-zinc-500">React</span>
</div>
</div>
</div>

<div className="flex items-start gap-4 p-5 rounded-xl border border-zinc-200 bg-white shadow-sm hover:shadow-md hover:border-emerald-200 transition-all cursor-pointer group">
<div className="mt-1 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-medium text-emerald-600">AK</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium text-zinc-900 group-hover:text-emerald-600 transition-colors">تحسين استعلامات Postgres لملايين الصفوف</h4>
<span className="text-xs text-zinc-400">منذ 45 دقيقة</span>
</div>
<p className="text-xs text-zinc-500 mt-1 line-clamp-1">أبحث عن نصائح حول استراتيجيات الفهرسة لهيكل جدول يعتمد بشكل كبير على السلاسل الزمنية.</p>
<div className="flex items-center gap-4 mt-3">
<div className="flex items-center gap-1 text-xs text-zinc-500">
<i className="w-3 h-3" data-lucide="message-square"></i> 8
                            </div>
<div className="flex items-center gap-1 text-xs text-zinc-500">
<i className="w-3 h-3" data-lucide="thumbs-up"></i> 5
                            </div>
<span className="text-[10px] px-1.5 py-0.5 rounded border border-zinc-200 bg-zinc-50 text-zinc-500">Backend</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-4">خطط عضوية تناسب طموحك</h2>
<p className="text-zinc-500 font-light max-w-xl mx-auto">ابدأ مجاناً، وقم بالترقية عندما تحتاج إلى أدوات متقدمة وموارد حصرية.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors">
<h3 className="text-lg font-medium text-zinc-900 mb-2">مساهم</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-zinc-900">0$</span>
<span className="text-sm text-zinc-500">/شهرياً</span>
</div>
<p className="text-sm text-zinc-500 mb-8 h-10">مثالي للطلاب والهواة الذين يبدؤون رحلتهم في المصادر المفتوحة.</p>
<button className="w-full py-2.5 rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-900 text-sm font-medium hover:bg-zinc-100 transition-colors mb-8">البدء مجاناً</button>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-zinc-600">
<i className="w-4 h-4 text-zinc-400" data-lucide="check"></i> الوصول للمناقشات العامة
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<i className="w-4 h-4 text-zinc-400" data-lucide="check"></i> ملف شخصي أساسي
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<i className="w-4 h-4 text-zinc-400" data-lucide="check"></i> المشاركة في الهاكاثونات
                        </li>
</ul>
</div>

<div className="relative p-8 rounded-2xl border border-emerald-500/30 bg-zinc-900 shadow-2xl shadow-emerald-900/10">
<div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-[10px] font-bold text-white uppercase tracking-wide">الأكثر شيوعاً</div>
<h3 className="text-lg font-medium text-white mb-2">محترف</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-white">12$</span>
<span className="text-sm text-zinc-400">/شهرياً</span>
</div>
<p className="text-sm text-zinc-400 mb-8 h-10">للمطورين الجادين الباحثين عن النمو السريع والإرشاد.</p>
<button className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium transition-colors mb-8 shadow-lg shadow-emerald-500/20">انضم الآن</button>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> كل مميزات المساهم
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> مراجعة كود غير محدودة
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-emerald-400" data-lucide="check"></i> جلسات إرشاد شهرية
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors">
<h3 className="text-lg font-medium text-zinc-900 mb-2">فرق عمل</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold text-zinc-900">49$</span>
<span className="text-sm text-zinc-500">/للمقعد</span>
</div>
<p className="text-sm text-zinc-500 mb-8 h-10">للشركات الناشئة والفرق الهندسية التي تبني المنتجات بسرعة.</p>
<button className="w-full py-2.5 rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-900 text-sm font-medium hover:bg-zinc-100 transition-colors mb-8">تواصل للمبيعات</button>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-zinc-600">
<i className="w-4 h-4 text-zinc-400" data-lucide="check"></i> مساحة عمل خاصة للفريق
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<i className="w-4 h-4 text-zinc-400" data-lucide="check"></i> تكامل SSO و SAML
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<i className="w-4 h-4 text-zinc-400" data-lucide="check"></i> تحليلات أداء الفريق
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-100">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight text-center mb-16">محبوب من المجتمع</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 bg-white rounded-xl border border-zinc-200 shadow-sm">
<div className="flex gap-1 mb-4 text-emerald-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">"نسبة الفائدة إلى الضوضاء في دوتيك لا تضاهى. قمت بحل مشكلة معقدة في Redis خلال 20 دقيقة بفضل المجتمع."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200"></div>
<div>
<div className="text-xs font-semibold text-zinc-900">سارة الشمري</div>
<div className="text-[10px] text-zinc-500">كبيرة مهندسي برمجيات</div>
</div>
</div>
</div>
<div className="p-6 bg-white rounded-xl border border-zinc-200 shadow-sm">
<div className="flex gap-1 mb-4 text-emerald-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">"وجدت شريكي المؤسس هنا خلال الهاكاثون. جودة المطورين هنا من الطراز الرفيع. أنصح به بشدة."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200"></div>
<div>
<div className="text-xs font-semibold text-zinc-900">عمر يوسف</div>
<div className="text-[10px] text-zinc-500">CTO في Pulse</div>
</div>
</div>
</div>
<div className="p-6 bg-white rounded-xl border border-zinc-200 shadow-sm">
<div className="flex gap-1 mb-4 text-emerald-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-zinc-600 mb-6 leading-relaxed">"ساعدتني مسارات التطور المهني في الانتقال إلى الإدارة. المرشدون هم قادة حقيقيون في الصناعة."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200"></div>
<div>
<div className="text-xs font-semibold text-zinc-900">ليلى أحمد</div>
<div className="text-[10px] text-zinc-500">مديرة هندسية</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-12 text-center">الأسئلة الشائعة</h2>
<div className="space-y-6">
<div className="border-b border-zinc-100 pb-6">
<h3 className="text-base font-medium text-zinc-900 mb-2">كيف تختلف دوتيك عن Stack Overflow؟</h3>
<p className="text-sm text-zinc-500 leading-relaxed">دوتيك تركز على المناقشات العميقة، وتصميم الأنظمة، والإرشاد المهني بدلاً من مجرد حلول سريعة للأخطاء البرمجية. نحن مجتمع مغلق يضمن جودة عالية للمحتوى.</p>
</div>
<div className="border-b border-zinc-100 pb-6">
<h3 className="text-base font-medium text-zinc-900 mb-2">هل هناك عملية مراجعة للانضمام؟</h3>
<p className="text-sm text-zinc-500 leading-relaxed">نعم، لضمان جودة المجتمع، نقوم بمراجعة حسابات GitHub أو LinkedIn للمتقدمين للتأكد من خبرتهم وجديتهم في المساهمة.</p>
</div>
<div className="border-b border-zinc-100 pb-6">
<h3 className="text-base font-medium text-zinc-900 mb-2">هل يمكنني استرداد المبلغ إذا لم يعجبني الاشتراك؟</h3>
<p className="text-sm text-zinc-500 leading-relaxed">بالتأكيد. نقدم ضمان استرداد الأموال لمدة 14 يوماً للخطة الاحترافية، دون طرح أي أسئلة.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-200 bg-zinc-50">
<div className="max-w-xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-4">جاهز للبدء؟</h2>
<p className="text-zinc-500 mb-8 text-sm leading-relaxed">انضم إلى قائمة الانتظار للحصول على وصول حصري إلى فعاليات الفئة المميزة وحلقات الإرشاد.</p>
<form className="flex flex-col gap-4 text-right">
<div>
<label className="sr-only" htmlFor="email">البريد الإلكتروني</label>
<input className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-sm" id="email" placeholder="dev@example.com" type="email"/>
</div>
<div className="flex items-center gap-3">
<label className="flex items-center gap-2 cursor-pointer relative group">
<input className="sr-only custom-checkbox" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded bg-white flex items-center justify-center transition-colors">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-xs text-zinc-500 select-none group-hover:text-zinc-700">اشترك في النشرة البريدية</span>
</label>
</div>
<button className="mt-2 w-full bg-zinc-900 text-white font-semibold text-sm py-3 rounded-lg hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/10" type="button">
                    طلب الوصول
                </button>
</form>
<p className="text-[10px] text-zinc-400 mt-6">بانضمامك، أنت توافق على قواعد السلوك الخاصة بنا. يمنع دخول مسؤولي التوظيف.</p>
</div>
</section>

<footer className="border-t border-zinc-200 bg-white pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 md:col-span-2">

<div className="mb-4">
<svg className="block" fill="none" height="24" viewbox="0 0 130 32" width="100" xmlns="http://www.w3.org/2000/svg">
<defs>
<mask id="footer-mask-1">
<rect fill="white" height="100%" width="100%"></rect>
<circle cx="28" cy="16" fill="black" r="18"></circle>
</mask>
<mask id="footer-mask-2">
<rect fill="white" height="100%" width="100%"></rect>
<circle cx="46" cy="16" fill="black" r="18"></circle>
</mask>
</defs>
<circle className="fill-emerald-500" cx="10" cy="16" mask="url(#footer-mask-1)" r="16"></circle>
<circle className="fill-emerald-500" cx="28" cy="16" mask="url(#footer-mask-2)" r="16"></circle>
<circle className="fill-emerald-500" cx="46" cy="16" r="16"></circle>
<text className="fill-zinc-900 tracking-tight" fontFamily="'IBM Plex Sans Arabic', sans-serif" fontSize="26" font-weight="700" x="66" y="24">DOTIQ</text>
</svg>
</div>
<p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
                        مجتمع لامركزي للنظام البيئي الحديث للويب. بني بواسطة المطورين، لأجل المطورين.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">المنصة</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-emerald-600 transition-colors" href="#">المعرض</a></li>
<li><a className="text-xs text-zinc-500 hover:text-emerald-600 transition-colors" href="#">المناقشات</a></li>
<li><a className="text-xs text-zinc-500 hover:text-emerald-600 transition-colors" href="#">الوظائف</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">الشركة</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-emerald-600 transition-colors" href="#">عن دوتيك</a></li>
<li><a className="text-xs text-zinc-500 hover:text-emerald-600 transition-colors" href="#">المدونة</a></li>
<li><a className="text-xs text-zinc-500 hover:text-emerald-600 transition-colors" href="#">الوظائف</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">القانونية</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-emerald-600 transition-colors" href="#">الخصوصية</a></li>
<li><a className="text-xs text-zinc-500 hover:text-emerald-600 transition-colors" href="#">الشروط</a></li>
<li><a className="text-xs text-zinc-500 hover:text-emerald-600 transition-colors" href="#">قواعد السلوك</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[10px] text-zinc-400">© 2024 دوتيك. جميع الحقوق محفوظة.</p>
<div className="flex items-center gap-6">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><i className="w-4 h-4" data-lucide="disc"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
