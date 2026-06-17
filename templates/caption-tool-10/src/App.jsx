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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Run once
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
            });
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
      

<div className="grid-lines">
<div className="v-line"><div className="beam"></div></div>
<div className="v-line"><div className="beam"></div></div>
<div className="v-line"><div className="beam"></div></div>
<div className="v-line"><div className="beam"></div></div>
<div className="v-line"><div className="beam"></div></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-semibold tracking-tighter text-xl">AMK<span className="text-emerald-400">CAPTIONS</span></div>
<div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-emerald-400 transition-colors" href="#features">الميزات</a>
<a className="hover:text-emerald-400 transition-colors" href="#how-it-works">كيف يعمل</a>
<a className="hover:text-emerald-400 transition-colors" href="#pricing">الباقات</a>
</div>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#pricing">احصل عليه الآن</a>
</div>
</nav>
<main className="relative z-10 pt-32 pb-24">

<section className="max-w-7xl mx-auto px-6 pt-20 pb-32 text-center reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-sm mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="font-medium text-emerald-100">أداة الكابشن الأقوى أصبحت متاحة</span>
</div>
<h1 className="text-heading-xl font-semibold mb-6 max-w-5xl mx-auto text-white">
                حوّل أي نص إلى <span className="text-emerald-400">كابشن متحرك</span> احترافي بضغطة زر داخل 
                <span className="word-rotator-container">
<span className="word-rotator">
<span>After Effects</span>
<span>Premiere Pro</span>
<span>Adobe</span>
<span>After Effects</span>
</span>
</span>
</h1>
<p className="text-body text-zinc-400 max-w-2xl mx-auto mb-10">
                أنشئ كابشن مثل CapCut بدون مغادرة Adobe، مع حركات جاهزة، كارايوكي، وإمكانية حفظها وإعادة استخدامها على أي مشروع لاحقًا.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<div className="sonar-wrapper">
<div className="sonar-ring"></div>
<a className="relative bg-emerald-500 text-black font-semibold text-body px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300" href="#pricing">
                        ابدأ مجانًا
                    </a>
</div>
<a className="font-medium text-body px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-zinc-300" href="#how-it-works">
                    شاهد كيف يعمل
                </a>
</div>
<div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500 font-medium">
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> تطبيق الحركات بضغطة زر</div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> لا حاجة لتعلم After Effects</div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> نتائج احترافية خلال ثواني</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
<div className="text-center mb-16 reveal">
<h2 className="text-heading-lg font-semibold tracking-tighter mb-4 text-white">كم مرة أضعت وقتك في عمل <span className="text-emerald-400">كابشن يدوي؟</span></h2>
<p className="text-body text-zinc-400 max-w-2xl mx-auto">إنشاء كابشن احترافي داخل After Effects عملية بطيئة ومتعبة. الوقت يضيع، والنتيجة غالبًا ليست بالمستوى المطلوب.</p>
</div>
<div className="holodex-container flex-col md:flex-row gap-6 reveal delay-200">
<div className="holodex-item holodex-side w-full md:w-1/3 glow-border rounded-2xl p-8 bg-zinc-950/50">
<iconify-icon className="text-4xl text-red-500/50 mb-4" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="text-xl font-semibold mb-2">ضبط يدوي</h3>
<p className="text-zinc-500">ساعات تضيع في ضبط توقيت الكلمات وتطبيق الكي فريمز.</p>
</div>
<div className="holodex-item holodex-center w-full md:w-1/3 glow-border rounded-2xl p-8 bg-zinc-900 border-red-500/20">
<iconify-icon className="text-5xl text-red-500 mb-4" icon="solar:danger-triangle-linear"></iconify-icon>
<h3 className="text-2xl font-semibold mb-2">تكرار ممل</h3>
<p className="text-zinc-400 text-lg">تحريك النص كلمة كلمة وتكرار نفس العمل في كل مشروع جديد.</p>
</div>
<div className="holodex-item holodex-side w-full md:w-1/3 glow-border rounded-2xl p-8 bg-zinc-950/50">
<iconify-icon className="text-4xl text-red-500/50 mb-4" icon="solar:export-linear"></iconify-icon>
<h3 className="text-xl font-semibold mb-2">خروج من Adobe</h3>
<p className="text-zinc-500">الاضطرار لاستخدام CapCut ثم العودة لبرنامج المونتاج.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-heading-lg font-semibold tracking-tighter mb-6 text-white">كل ما تحتاجه لصناعة <span className="text-emerald-400">كابشن احترافي</span>… داخل Adobe</h2>
<p className="text-body text-zinc-400 mb-8">AMK Captions يحوّل النص إلى كابشن متحرك جاهز خلال ثواني، بدون تعقيد، وبدون مغادرة مشروعك.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-body">
<iconify-icon className="text-2xl text-emerald-400 mt-1" icon="solar:magic-stick-3-linear"></iconify-icon>
<span>إنشاء الكابشن تلقائيًا بدقة عالية</span>
</li>
<li className="flex items-start gap-3 text-body">
<iconify-icon className="text-2xl text-emerald-400 mt-1" icon="solar:bolt-linear"></iconify-icon>
<span>تطبيق الحركات فورًا بضغطة واحدة</span>
</li>
<li className="flex items-start gap-3 text-body">
<iconify-icon className="text-2xl text-emerald-400 mt-1" icon="solar:clapperboard-play-linear"></iconify-icon>
<span>نتائج جاهزة للنشر مباشرة من التايملاين</span>
</li>
</ul>
</div>
<div className="relative reveal delay-200">
<div className="aspect-square rounded-full bg-gradient-to-tr from-emerald-900/40 to-zinc-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50 z-0"></div>
<div className="glow-border rounded-2xl p-2 relative z-10 bg-black/50 backdrop-blur-xl">

<div className="bg-zinc-900 rounded-xl p-6 border border-white/10">
<div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
<span className="font-semibold text-sm">AMK Captions Panel</span>
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</div>
<div className="space-y-3">
<div className="h-8 bg-zinc-800 rounded flex items-center px-3 justify-between">
<span className="text-xs text-zinc-400">Select Preset</span>
<iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="h-8 bg-zinc-800 rounded flex items-center px-3 justify-between">
<span className="text-xs text-zinc-400">Highlight Color</span>
<div className="w-4 h-4 rounded-full bg-emerald-400"></div>
</div>
<button className="w-full bg-emerald-500 text-black font-semibold text-sm py-2 rounded mt-4 hover:bg-emerald-400 transition-colors">Apply Animation</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5" id="how-it-works">
<div className="text-center mb-24 reveal">
<h2 className="text-heading-lg font-semibold tracking-tighter text-white">كيف <span className="text-emerald-400">يعمل؟</span></h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="relative reveal overflow-hidden glow-border rounded-3xl p-10 bg-zinc-950/30">
<span className="num-detail">01</span>
<div className="relative z-10">
<iconify-icon className="text-4xl text-emerald-400 mb-6" icon="solar:document-text-linear"></iconify-icon>
<h3 className="text-2xl font-semibold mb-3">استخرج النص</h3>
<p className="text-body text-zinc-400">استخرج النص من الصوت أو أدخله يدويًا داخل الإضافة بسهولة.</p>
</div>
</div>
<div className="relative reveal delay-200 overflow-hidden glow-border rounded-3xl p-10 bg-zinc-950/30">
<span className="num-detail">02</span>
<div className="relative z-10">
<iconify-icon className="text-4xl text-emerald-400 mb-6" icon="solar:video-library-linear"></iconify-icon>
<h3 className="text-2xl font-semibold mb-3">اختر الحركة</h3>
<p className="text-body text-zinc-400">تصفح مكتبة الحركات الجاهزة واختر الستايل المناسب لمشروعك.</p>
</div>
</div>
<div className="relative reveal delay-400 overflow-hidden glow-border rounded-3xl p-10 bg-zinc-950/30">
<span className="num-detail">03</span>
<div className="relative z-10">
<iconify-icon className="text-4xl text-emerald-400 mb-6" icon="solar:play-circle-linear"></iconify-icon>
<h3 className="text-2xl font-semibold mb-3">اضغط تطبيق</h3>
<p className="text-body text-zinc-400">كابشن متحرك احترافي جاهز داخل التايملاين مباشرة بثانية واحدة.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5" id="features">
<div className="mb-16 reveal">
<h2 className="text-heading-lg font-semibold tracking-tighter mb-4 text-white">ليس مجرد كابشن… بل <span className="text-emerald-400">نظام موشن كامل</span></h2>
<p className="text-body text-zinc-400">توفير وقت هائل + نتائج احترافية ثابتة.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="glow-border p-8 rounded-2xl bg-zinc-900/20 reveal hover:bg-zinc-900/50 transition-colors border-emerald-500/5">
<iconify-icon className="text-3xl text-emerald-400 mb-4" icon="solar:text-square-linear"></iconify-icon>
<h3 className="text-xl font-semibold mb-2">إنشاء كابشن تلقائي</h3>
<p className="text-zinc-500 text-body">حوّل الصوت إلى نص بسرعة داخل المشروع.</p>
</div>

<div className="glow-border p-8 rounded-2xl bg-zinc-900/20 reveal delay-100 hover:bg-zinc-900/50 transition-colors border-emerald-500/5">
<iconify-icon className="text-3xl text-emerald-400 mb-4" icon="solar:cursor-square-linear"></iconify-icon>
<h3 className="text-xl font-semibold mb-2">تطبيق بضغطة زر</h3>
<p className="text-zinc-500 text-body">اختر أي حركة وطبّقها فورًا بدون إعدادات معقدة.</p>
</div>

<div className="glow-border p-8 rounded-2xl bg-zinc-900/20 reveal delay-200 hover:bg-zinc-900/50 transition-colors border-emerald-500/5">
<iconify-icon className="text-3xl text-emerald-400 mb-4" icon="solar:folder-with-files-linear"></iconify-icon>
<h3 className="text-xl font-semibold mb-2">مكتبة حركات جاهزة</h3>
<p className="text-zinc-500 text-body">مجموعة من الحركات الاحترافية الجاهزة للاستخدام.</p>
</div>

<div className="glow-border p-8 rounded-2xl bg-zinc-900/20 reveal hover:bg-zinc-900/50 transition-colors border-emerald-500/5">
<iconify-icon className="text-3xl text-emerald-400 mb-4" icon="solar:bookmark-square-linear"></iconify-icon>
<h3 className="text-xl font-semibold mb-2">نظام Presets</h3>
<p className="text-zinc-500 text-body">احفظ الحركات الخاصة بك وطبّقها لاحقًا بضغطة واحدة.</p>
</div>

<div className="glow-border p-8 rounded-2xl bg-zinc-900/20 reveal delay-100 hover:bg-zinc-900/50 transition-colors border-emerald-500/5">
<iconify-icon className="text-3xl text-emerald-400 mb-4" icon="solar:music-note-slider-linear"></iconify-icon>
<h3 className="text-xl font-semibold mb-2">كارايوكي (Karaoke)</h3>
<p className="text-zinc-500 text-body">تمييز الكلمة النشطة أثناء النطق باحترافية.</p>
</div>

<div className="glow-border p-8 rounded-2xl bg-zinc-900/20 reveal delay-200 hover:bg-zinc-900/50 transition-colors border-emerald-500/5">
<iconify-icon className="text-3xl text-emerald-400 mb-4" icon="solar:pen-new-square-linear"></iconify-icon>
<h3 className="text-xl font-semibold mb-2">Highlight ديناميكي</h3>
<p className="text-zinc-500 text-body">مستطيل أو تأثير بصري خلف الكلمة النشطة مع تحكم كامل.</p>
</div>

<div className="glow-border p-8 rounded-2xl bg-zinc-900/20 reveal hover:bg-zinc-900/50 transition-colors border-emerald-500/5">
<iconify-icon className="text-3xl text-emerald-400 mb-4" icon="solar:settings-linear"></iconify-icon>
<h3 className="text-xl font-semibold mb-2">تحكم كامل بالشكل</h3>
<p className="text-zinc-500 text-body">ألوان، مسافات، أحجام، وزوايا قابلة للتخصيص.</p>
</div>

<div className="glow-border p-8 rounded-2xl bg-zinc-900/20 reveal delay-100 hover:bg-zinc-900/50 transition-colors border-emerald-500/5">
<iconify-icon className="text-3xl text-emerald-400 mb-4" icon="solar:layers-linear"></iconify-icon>
<h3 className="text-xl font-semibold mb-2">Batch Apply</h3>
<p className="text-zinc-500 text-body">تطبيق الحركات على جميع النصوص مرة واحدة.</p>
</div>

<div className="glow-border p-8 rounded-2xl bg-zinc-900/20 reveal delay-200 hover:bg-zinc-900/50 transition-colors border-emerald-500/5">
<iconify-icon className="text-3xl text-emerald-400 mb-4" icon="solar:transfer-horizontal-linear"></iconify-icon>
<h3 className="text-xl font-semibold mb-2">تصدير واستيراد</h3>
<p className="text-zinc-500 text-body">احفظ الكابشن أو الحركات واستخدمها في مشاريع أخرى.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5" id="pricing">
<div className="text-center mb-20 reveal">
<h2 className="text-heading-lg font-semibold tracking-tighter mb-4 text-white">اختر <span className="text-emerald-400">الباقة المناسبة</span> لعملك</h2>
<p className="text-body text-zinc-400">يعمل داخل Adobe مباشرة، يوفر ساعات من العمل، ومناسب للمونتيرين وصناع المحتوى.</p>
</div>
<div className="holodex-container flex-col md:flex-row gap-6 reveal">

<div className="holodex-item holodex-side w-full md:w-1/3 glow-border rounded-3xl p-8 bg-zinc-950/50">
<h3 className="text-xl font-semibold mb-2">Free</h3>
<div className="text-3xl font-semibold mb-6">مجانًا</div>
<ul className="space-y-4 mb-8 text-sm text-zinc-400">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> كابشن أساسي</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon> ميزات محدودة</li>
<li className="flex items-center gap-2 text-zinc-600"><iconify-icon icon="solar:close-circle-linear"></iconify-icon> بدون حفظ الحركات</li>
<li className="flex items-center gap-2 text-zinc-600"><iconify-icon icon="solar:close-circle-linear"></iconify-icon> بدون كارايوكي و Highlight</li>
</ul>
<button className="w-full py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-medium">ابدأ الآن</button>
</div>

<div className="holodex-item holodex-center w-full md:w-1/3 glow-border rounded-3xl p-8 bg-zinc-900 border-emerald-500/20">
<div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold tracking-tighter">الأكثر طلبًا</div>
<h3 className="text-xl font-semibold mb-2 text-white">Pro Monthly</h3>
<div className="text-4xl font-semibold mb-6 text-white">$15<span className="text-lg text-zinc-500 font-normal">/شهر</span></div>
<ul className="space-y-4 mb-8 text-sm text-zinc-300">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> تطبيق الحركات بضغطة زر</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> حفظ الحركات (Presets)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> كارايوكي + Highlight احترافي</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> تطبيق جماعي (Batch)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> تحديثات مستمرة</li>
</ul>
<button className="w-full py-3 rounded-full bg-emerald-500 text-black hover:bg-emerald-400 hover:scale-105 transition-all font-semibold">اشترك الآن</button>
</div>

<div className="holodex-item holodex-side w-full md:w-1/3 glow-border rounded-3xl p-8 bg-zinc-950/50">
<h3 className="text-xl font-semibold mb-2">Pro Yearly</h3>
<div className="text-3xl font-semibold mb-6">$120<span className="text-lg text-zinc-500 font-normal">/سنة</span></div>
<ul className="space-y-4 mb-8 text-sm text-zinc-400">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> كل ميزات Pro</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> توفير أفضل على المدى السنوي</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> دعم أولوية</li>
</ul>
<button className="w-full py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-medium">توفير سنوي</button>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-32 text-center reveal">
<h2 className="text-heading-lg font-semibold tracking-tighter mb-6 text-white">ابدأ الآن <span className="text-emerald-400">ووفّر وقتك</span></h2>
<p className="text-body text-zinc-400 mb-10">جرب النسخة المجانية وشاهد الفرق بنفسك.</p>
<div className="sonar-wrapper">
<div className="sonar-ring"></div>
<a className="relative bg-emerald-500 text-black font-semibold text-body px-10 py-4 rounded-full hover:scale-105 transition-transform duration-300" href="#">
                    ابدأ مجانًا
                </a>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-12 text-center relative z-10 bg-black">
<div className="max-w-3xl mx-auto px-6">
<div className="font-semibold tracking-tighter text-2xl mb-4 text-zinc-700">AMK<span className="text-emerald-900">CAPTIONS</span></div>
<p className="text-xs text-zinc-600 leading-relaxed max-w-lg mx-auto mb-6">
                هذا المنتج مصمم لتسريع عملك داخل Adobe وتحويل الكابشن من مهمة معقدة إلى عملية بسيطة وسريعة.
            </p>
<div className="text-xs text-zinc-800">
                © 2024 AMK Captions. جميع الحقوق محفوظة.
            </div>
</div>
</footer>



    </>
  );
}
