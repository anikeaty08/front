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



        document.getElementById('year').textContent = new Date().getFullYear();

        // Language Switcher Logic
        const toggle = document.getElementById('lang-toggle');
        const langEn = document.getElementById('lang-en');
        const langAr = document.getElementById('lang-ar');
        const htmlElement = document.documentElement;

        function updateLanguage() {
            const isArabic = toggle.checked;
            
            // Toggle direction
            htmlElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
            
            // Update Toggle UI text colors
            if(isArabic) {
                langAr.classList.replace('text-slate-500', 'text-slate-900');
                langEn.classList.replace('text-slate-900', 'text-slate-500');
            } else {
                langEn.classList.replace('text-slate-500', 'text-slate-900');
                langAr.classList.replace('text-slate-900', 'text-slate-500');
            }

            // Swap text content based on data attributes (Safely preserving icons and HTML)
            document.querySelectorAll('[data-en][data-ar]').forEach(el => {
                if(el.tagName === 'INPUT' && el.type === 'placeholder') {
                     el.placeholder = isArabic ? el.getAttribute('data-ar') : el.getAttribute('data-en');
                } else {
                     el.textContent = isArabic ? el.getAttribute('data-ar') : el.getAttribute('data-en');
                }
            });
        }

        toggle.addEventListener('change', updateLanguage);
    
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
      

<div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50/50">
<div className="absolute top-[-10%] left-[-10%] w-3/5 h-3/5 rounded-full bg-emerald-200/40 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-[20%] right-[-10%] w-3/5 h-3/5 rounded-full bg-cyan-200/40 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
<div className="absolute bottom-[-20%] left-[20%] w-3/5 h-3/5 rounded-full bg-purple-200/30 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
</div>

<nav className="sticky top-0 z-50 w-full border-b border-white/60 bg-white/40 backdrop-blur-xl transition-all duration-300">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-8">

<a className="text-xl font-medium tracking-tighter text-slate-900 transition-opacity hover:opacity-80" href="#">
                    DTI.
                </a>

<div className="hidden md:flex md:gap-6">
<a className="text-sm font-normal transition-colors hover:text-slate-900" data-ar="عن المعهد" data-en="About" href="#about">About</a>
<a className="text-sm font-normal transition-colors hover:text-slate-900" data-ar="المكتبة" data-en="Library" href="#library">Library</a>
<a className="text-sm font-normal transition-colors hover:text-slate-900" data-ar="الأنشطة" data-en="Activities" href="#activities">Activities</a>
<a className="text-sm font-normal transition-colors hover:text-slate-900" data-ar="المركز الإعلامي" data-en="Media" href="#media">Media</a>
</div>
</div>
<div className="flex items-center gap-6">

<div className="flex items-center gap-2 text-xs font-normal">
<span className="text-slate-500" id="lang-en">EN</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 border-white/80 shadow-sm appearance-none cursor-pointer transition-all duration-300 z-10 top-0 left-0" id="lang-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-white/60 backdrop-blur-md border border-white/50 cursor-pointer transition-colors duration-300" htmlFor="lang-toggle"></label>
</div>
<span className="text-slate-900" id="lang-ar">AR</span>
</div>
<a className="hidden rounded-full bg-slate-900/90 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5 md:block" data-ar="اتصل بنا" data-en="Contact Us" href="#contact">
                    Contact Us
                </a>

<button className="md:hidden text-slate-900 text-2xl flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative overflow-hidden px-6 py-24 md:py-32 lg:py-40">
<div className="mx-auto max-w-4xl text-center">
<div className="mb-6 inline-flex items-center gap-2 rounded-full glass-card px-3 py-1.5 text-xs font-normal text-slate-600">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
<span data-ar="تعزيز القانون الدولي الإنساني في دول مجلس التعاون" data-en="Advancing International Humanitarian Law in the GCC">Advancing International Humanitarian Law in the GCC</span>
</div>
<h1 className="mb-8 text-4xl font-medium tracking-tight text-slate-900 md:text-5xl lg:text-6xl leading-tight drop-shadow-sm">
<span data-ar="حماية الكرامة الإنسانية" data-en="Protecting Human Dignity">Protecting Human Dignity</span>
<br className="hidden md:block"/>
<span data-ar="أثناء النزاعات المسلحة." data-en="During Armed Conflicts.">During Armed Conflicts.</span>
</h1>
<p className="mx-auto mb-10 max-w-2xl text-base font-light leading-relaxed text-slate-600 md:text-lg" data-ar="معهد دونان للتدريب هو منظمة غير ربحية مكرسة للتوعية والتعليم وبناء القدرات في مجال القانون الإنساني في جميع أنحاء منطقة الخليج." data-en="Donan Training Institute is a non-profit organization dedicated to awareness, education, and capacity building in humanitarian law across the Gulf region.">
                Donan Training Institute is a non-profit organization dedicated to awareness, education, and capacity building in humanitarian law across the Gulf region.
            </p>
<div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
<a className="w-full rounded-full bg-slate-900/90 backdrop-blur-md px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto" data-ar="اكتشف رسالتنا" data-en="Discover Our Mission" href="#about">
                    Discover Our Mission
                </a>
<a className="group flex w-full items-center justify-center gap-2 rounded-full glass-card px-6 py-2.5 text-sm font-medium text-slate-900 sm:w-auto" href="#library">
<span data-ar="تصفح المكتبة" data-en="Explore Library">Explore Library</span>
<iconify-icon className="text-lg transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="px-6 py-16 md:py-24 relative z-10">
<div className="mx-auto max-w-4xl">
<div className="glass-panel rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-100 rounded-full blur-2xl opacity-50"></div>
<div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-100 rounded-full blur-2xl opacity-50"></div>
<iconify-icon className="mb-6 text-4xl text-slate-400/50 drop-shadow-sm relative z-10" icon="solar:quote-left-linear"></iconify-icon>
<h2 className="mb-8 text-2xl font-medium tracking-tight text-slate-900 md:text-3xl leading-snug relative z-10" data-ar="تأسس المعهد استجابة للأزمات الإنسانية والنزوح. ينصب تركيزنا الأساسي على الحماية الثابتة للكرامة الإنسانية، وخاصة للفئات الأكثر ضعفاً." data-en="The institute was established in response to humanitarian crises and displacement. Our core focus is the unwavering protection of human dignity, especially for the most vulnerable.">
                    "The institute was established in response to humanitarian crises and displacement. Our core focus is the unwavering protection of human dignity, especially for the most vulnerable."
                </h2>
<div className="flex flex-col items-center justify-center relative z-10">
<span className="text-sm font-medium text-slate-900" data-ar="المدير العام" data-en="Director General">Director General</span>
<span className="text-xs font-light text-slate-500" data-ar="معهد دونان للتدريب" data-en="Donan Training Institute">Donan Training Institute</span>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 relative z-10" id="about">
<div className="mx-auto max-w-7xl">
<div className="grid gap-8 md:grid-cols-2 lg:gap-12">

<div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl glass-panel relative z-10">
<iconify-icon className="text-3xl text-emerald-600/80" icon="solar:eye-linear"></iconify-icon>
</div>
<h3 className="mb-4 text-xl font-medium tracking-tight text-slate-900 relative z-10" data-ar="رؤيتنا" data-en="Our Vision">Our Vision</h3>
<p className="text-sm font-light leading-relaxed text-slate-600 relative z-10" data-ar="أن نصبح معهداً مرجعياً إقليمياً رائداً في الخليج، يعزز ويرسخ ثقافة القانون الدولي الإنساني، ويساهم بعمق في حماية الكرامة الإنسانية أثناء النزاعات المسلحة." data-en="To become a leading regional reference institute in the Gulf, promoting and strengthening the culture of International Humanitarian Law, and contributing profoundly to protecting human dignity during armed conflicts.">
                        To become a leading regional reference institute in the Gulf, promoting and strengthening the culture of International Humanitarian Law, and contributing profoundly to protecting human dignity during armed conflicts.
                    </p>
</div>

<div className="glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-bl from-white/40 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl glass-panel relative z-10">
<iconify-icon className="text-3xl text-cyan-600/80" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="mb-4 text-xl font-medium tracking-tight text-slate-900 relative z-10" data-ar="رسالتنا" data-en="Our Mission">Our Mission</h3>
<p className="text-sm font-light leading-relaxed text-slate-600 relative z-10" data-ar="تعزيز القانون الدولي الإنساني من خلال برامج التدريب المتخصصة والاستشارات الخبيرة وبناء القدرات. نعمل بالتعاون مع اللجان الخليجية والمؤسسات التعليمية العسكرية والمدنية." data-en="To promote International Humanitarian Law through specialized training programs, expert consultations, and capacity building. We work in cooperation with Gulf committees and military/civil educational institutions.">
                        To promote International Humanitarian Law through specialized training programs, expert consultations, and capacity building. We work in cooperation with Gulf committees and military/civil educational institutions.
                    </p>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 relative z-10">
<div className="mx-auto max-w-7xl">
<div className="mb-16 max-w-2xl">
<h2 className="mb-4 text-3xl font-medium tracking-tight text-slate-900" data-ar="الأهداف الاستراتيجية" data-en="Strategic Objectives">Strategic Objectives</h2>
<p className="text-sm font-light text-slate-600" data-ar="تتماشى أهدافنا مع الحاجة الملحة لإنشاء أطر قوية للقانون الإنساني في المنطقة." data-en="Our goals are aligned with the pressing need to establish strong frameworks for humanitarian law in the region.">
                    Our goals are aligned with the pressing need to establish strong frameworks for humanitarian law in the region.
                </p>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group flex flex-col items-start rounded-2xl glass-card p-6">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/50 shadow-sm border border-white/60 transition-colors group-hover:bg-white/80">
<iconify-icon className="text-2xl text-slate-500 group-hover:text-emerald-600 transition-colors" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h4 className="mb-2 text-base font-medium text-slate-900" data-ar="نشر الوعي" data-en="Raise Awareness">Raise Awareness</h4>
<p className="text-xs font-light leading-relaxed text-slate-600" data-ar="رفع مستوى الفهم لمبادئ القانون الدولي الإنساني بين جميع فئات المجتمع." data-en="Elevate understanding of International Humanitarian Law principles among all segments of society.">Elevate understanding of International Humanitarian Law principles among all segments of society.</p>
</div>

<div className="group flex flex-col items-start rounded-2xl glass-card p-6">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/50 shadow-sm border border-white/60 transition-colors group-hover:bg-white/80">
<iconify-icon className="text-2xl text-slate-500 group-hover:text-cyan-600 transition-colors" icon="solar:hand-shake-linear"></iconify-icon>
</div>
<h4 className="mb-2 text-base font-medium text-slate-900" data-ar="دعم المؤسسات" data-en="Support Institutions">Support Institutions</h4>
<p className="text-xs font-light leading-relaxed text-slate-600" data-ar="تقديم الدعم الهيكلي والأكاديمي للجان الخليجية العاملة في القانون الإنساني." data-en="Provide structural and academic support to Gulf committees working in humanitarian law.">Provide structural and academic support to Gulf committees working in humanitarian law.</p>
</div>

<div className="group flex flex-col items-start rounded-2xl glass-card p-6">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/50 shadow-sm border border-white/60 transition-colors group-hover:bg-white/80">
<iconify-icon className="text-2xl text-slate-500 group-hover:text-purple-600 transition-colors" icon="solar:database-linear"></iconify-icon>
</div>
<h4 className="mb-2 text-base font-medium text-slate-900" data-ar="بناء قاعدة بيانات الخبراء" data-en="Build Expert Database">Build Expert Database</h4>
<p className="text-xs font-light leading-relaxed text-slate-600" data-ar="إنشاء قاعدة بيانات إقليمية شاملة للخبراء والمحاضرين الخليجيين المؤهلين." data-en="Create a comprehensive regional database of qualified Gulf experts and lecturers.">Create a comprehensive regional database of qualified Gulf experts and lecturers.</p>
</div>

<div className="group flex flex-col items-start rounded-2xl glass-card p-6">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/50 shadow-sm border border-white/60 transition-colors group-hover:bg-white/80">
<iconify-icon className="text-2xl text-slate-500 group-hover:text-blue-600 transition-colors" icon="solar:shield-user-linear"></iconify-icon>
</div>
<h4 className="mb-2 text-base font-medium text-slate-900" data-ar="تدريب القوات" data-en="Train Forces">Train Forces</h4>
<p className="text-xs font-light leading-relaxed text-slate-600" data-ar="إجراء تدريب متخصص للقوات المسلحة وأفراد الأمن على مبادئ القانون الدولي الإنساني." data-en="Conduct specialized training for armed forces and security personnel on IHL principles.">Conduct specialized training for armed forces and security personnel on IHL principles.</p>
</div>

<div className="group flex flex-col items-start rounded-2xl glass-card p-6">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/50 shadow-sm border border-white/60 transition-colors group-hover:bg-white/80">
<iconify-icon className="text-2xl text-slate-500 group-hover:text-rose-600 transition-colors" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<h4 className="mb-2 text-base font-medium text-slate-900" data-ar="تطوير المناهج" data-en="Develop Curricula">Develop Curricula</h4>
<p className="text-xs font-light leading-relaxed text-slate-600" data-ar="مراجعة وتعزيز وتطوير مناهج القانون الدولي الإنساني المنفذة في الأكاديميات العسكرية." data-en="Review, enhance, and develop IHL curricula implemented in military academies.">Review, enhance, and develop IHL curricula implemented in military academies.</p>
</div>

<div className="group flex flex-col items-start rounded-2xl glass-card p-6">
<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/50 shadow-sm border border-white/60 transition-colors group-hover:bg-white/80">
<iconify-icon className="text-2xl text-slate-500 group-hover:text-amber-600 transition-colors" icon="solar:global-linear"></iconify-icon>
</div>
<h4 className="mb-2 text-base font-medium text-slate-900" data-ar="تعزيز الشراكات" data-en="Strengthen Partnerships">Strengthen Partnerships</h4>
<p className="text-xs font-light leading-relaxed text-slate-600" data-ar="عقد تحالفات مع المنظمات المحلية والإقليمية والدولية لتعظيم التأثير." data-en="Forge alliances with local, regional, and international organizations to maximize impact.">Forge alliances with local, regional, and international organizations to maximize impact.</p>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 relative z-10" id="library">
<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row">
<div className="w-full lg:w-1/2">
<div className="mb-4 inline-flex items-center gap-2 rounded-full glass-card px-3 py-1.5 text-xs font-normal text-slate-600">
<iconify-icon icon="solar:library-linear"></iconify-icon>
<span data-ar="الموارد الرقمية" data-en="Digital Resources">Digital Resources</span>
</div>
<h2 className="mb-6 text-3xl font-medium tracking-tight text-slate-900 md:text-4xl" data-ar="مكتبة شاملة للقانون الإنساني" data-en="Comprehensive IHL Library">Comprehensive IHL Library</h2>
<p className="mb-8 text-sm font-light leading-relaxed text-slate-600" data-ar="الوصول إلى ثروة من المعرفة بما في ذلك الكتب والبحوث والدراسات والاتفاقيات المكتوبة والقانون العرفي والسوابق القضائية. مصممة للباحثين والعسكريين والأكاديميين." data-en="Access a wealth of knowledge including books, research studies, written conventions, customary law, and judicial precedents. Designed for researchers, military personnel, and academics.">
                    Access a wealth of knowledge including books, research studies, written conventions, customary law, and judicial precedents. Designed for researchers, military personnel, and academics.
                </p>
<ul className="mb-8 space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="flex h-6 w-6 items-center justify-center rounded-full glass-card border-none bg-emerald-100/50">
<iconify-icon className="text-emerald-600" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span data-ar="مصادر القانون الدولي الإنساني" data-en="Sources of International Humanitarian Law">Sources of International Humanitarian Law</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="flex h-6 w-6 items-center justify-center rounded-full glass-card border-none bg-emerald-100/50">
<iconify-icon className="text-emerald-600" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span data-ar="الاتفاقيات المكتوبة والقانون العرفي" data-en="Written Conventions &amp; Customary Law">Written Conventions &amp; Customary Law</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="flex h-6 w-6 items-center justify-center rounded-full glass-card border-none bg-emerald-100/50">
<iconify-icon className="text-emerald-600" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span data-ar="البحوث والدراسات والسوابق القضائية" data-en="Research, Studies &amp; Judicial Precedents">Research, Studies &amp; Judicial Precedents</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition-all hover:text-emerald-600 group" href="#">
<span data-ar="تصفح المكتبة كاملة" data-en="Browse Full Library">Browse Full Library</span>
<iconify-icon className="text-lg transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="w-full lg:w-5/12">
<div className="relative rounded-3xl glass-panel p-6 lg:p-8">
<div className="absolute -left-6 -top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-xl z-20">
<iconify-icon className="text-2xl text-slate-800" icon="solar:book-linear"></iconify-icon>
</div>
<div className="space-y-4 pt-4 relative z-10">
<div className="flex items-start gap-4 rounded-2xl glass-card p-4 transition-all cursor-pointer">
<div className="h-12 w-10 shrink-0 rounded-lg bg-slate-200/50 border border-white/60 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:document-text-linear"></iconify-icon>
</div>
<div>
<h5 className="text-xs font-medium text-slate-900" data-ar="اتفاقيات جنيف (1949)" data-en="Geneva Conventions (1949)">Geneva Conventions (1949)</h5>
<p className="mt-1 text-xs text-slate-500" data-ar="المعاهدات الأساسية للقانون الدولي الإنساني" data-en="Core treaties of IHL">Core treaties of IHL</p>
</div>
</div>
<div className="flex items-start gap-4 rounded-2xl glass-card p-4 transition-all cursor-pointer">
<div className="h-12 w-10 shrink-0 rounded-lg bg-slate-200/50 border border-white/60 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:database-linear"></iconify-icon>
</div>
<div>
<h5 className="text-xs font-medium text-slate-900" data-ar="قاعدة بيانات القانون العرفي" data-en="Customary IHL Database">Customary IHL Database</h5>
<p className="mt-1 text-xs text-slate-500" data-ar="القواعد المطبقة في النزاعات المسلحة" data-en="Rules applicable in armed conflicts">Rules applicable in armed conflicts</p>
</div>
</div>
<div className="flex items-start gap-4 rounded-2xl glass-card p-4 transition-all cursor-pointer">
<div className="h-12 w-10 shrink-0 rounded-lg bg-slate-200/50 border border-white/60 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:diploma-linear"></iconify-icon>
</div>
<div>
<h5 className="text-xs font-medium text-slate-900" data-ar="دراسات القانون الإنساني الخليجي 2023" data-en="Gulf IHL Studies 2023">Gulf IHL Studies 2023</h5>
<p className="mt-1 text-xs text-slate-500" data-ar="الإصدارات الأكاديمية الحديثة" data-en="Recent academic publications">Recent academic publications</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/60 glass-panel pt-16 pb-8 relative z-10">
<div className="mx-auto max-w-7xl px-6">

<div className="mb-16 border-b border-white/40 pb-16">
<p className="mb-8 text-center text-xs font-medium tracking-widest text-slate-500 uppercase" data-ar="بالتعاون مع شركاء عالميين" data-en="In Cooperation With Global Partners">In Cooperation With Global Partners</p>
<div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 grayscale transition-all hover:grayscale-0">
<span className="text-sm font-medium tracking-tight text-slate-800">UN</span>
<span className="text-sm font-medium tracking-tight text-slate-800">ICRC</span>
<span className="text-sm font-medium tracking-tight text-slate-800 text-center">San Remo<br/>Institute</span>
<span className="text-sm font-medium tracking-tight text-slate-800">Humanitarian Mag</span>
</div>
</div>
<div className="grid gap-8 md:grid-cols-4 lg:gap-12">
<div className="md:col-span-2">
<a className="mb-4 block text-xl font-medium tracking-tighter text-slate-900" href="#">
                        DTI.
                    </a>
<p className="max-w-xs text-xs font-light leading-relaxed text-slate-600" data-ar="معهد دونان للتدريب. تعزيز وترسيخ ثقافة القانون الدولي الإنساني لحماية الكرامة الإنسانية." data-en="Donan Training Institute. Promoting and strengthening the culture of International Humanitarian Law to protect human dignity.">
                        Donan Training Institute. Promoting and strengthening the culture of International Humanitarian Law to protect human dignity.
                    </p>
</div>
<div>
<h6 className="mb-4 text-xs font-medium text-slate-900" data-ar="المعهد" data-en="Institute">Institute</h6>
<ul className="space-y-3 text-xs font-light text-slate-600">
<li><a className="hover:text-emerald-600 transition-colors" data-ar="معلومات عنا" data-en="About Us" href="#">About Us</a></li>
<li><a className="hover:text-emerald-600 transition-colors" data-ar="المدير العام" data-en="Director General" href="#">Director General</a></li>
<li><a className="hover:text-emerald-600 transition-colors" data-ar="المحاضرون والمدربون" data-en="Lecturers &amp; Trainers" href="#">Lecturers &amp; Trainers</a></li>
<li><a className="hover:text-emerald-600 transition-colors" data-ar="معرض الوسائط" data-en="Media Gallery" href="#">Media Gallery</a></li>
</ul>
</div>
<div>
<h6 className="mb-4 text-xs font-medium text-slate-900" data-ar="الموارد" data-en="Resources">Resources</h6>
<ul className="space-y-3 text-xs font-light text-slate-600">
<li><a className="hover:text-emerald-600 transition-colors" data-ar="المكتبة" data-en="Library" href="#">Library</a></li>
<li><a className="hover:text-emerald-600 transition-colors" data-ar="المنشورات" data-en="Publications" href="#">Publications</a></li>
<li><a className="hover:text-emerald-600 transition-colors" data-ar="الفعاليات" data-en="Events" href="#">Events</a></li>
<li><a className="hover:text-emerald-600 transition-colors" data-ar="اتصل" data-en="Contact" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-16 flex flex-col items-center justify-between border-t border-white/40 pt-8 sm:flex-row">
<p className="text-xs font-light text-slate-500">
                    © <span id="year"></span> Donan Training Institute. <span data-ar="جميع الحقوق محفوظة." data-en="All rights reserved.">All rights reserved.</span>
</p>
<div className="mt-4 flex gap-4 sm:mt-0">
<a className="flex h-8 w-8 items-center justify-center rounded-full glass-card text-slate-500 hover:text-emerald-600 hover:scale-110" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
<a className="flex h-8 w-8 items-center justify-center rounded-full glass-card text-slate-500 hover:text-emerald-600 hover:scale-110" href="#"><iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
