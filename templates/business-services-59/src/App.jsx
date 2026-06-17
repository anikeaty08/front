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
      

<section className="relative min-h-[85vh] flex flex-col items-center justify-start pt-32 pb-20 overflow-hidden bg-[#006A60]">

<div className="absolute inset-0 z-0">
<img alt="Riyadh Skyline" className="w-full h-full object-cover object-center opacity-80 mix-blend-luminosity" src="https://tameh.sa/wp-content/uploads/2025/08/tameh-hero.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#006A60]/90 via-[#006A60]/80 to-[#00524a]/95"></div>
</div>

<div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 z-0 opacity-10 pointer-events-none select-none flex flex-col items-start">
<span className="text-white text-5xl font-semibold tracking-tight">رؤية</span>
<span className="text-white text-9xl transform scale-150 origin-left font-semibold leading-none tracking-tighter mt-4 mb-8">2030</span>
<span className="text-white text-3xl font-regular tracking-tight mt-6">المملكة</span>
<span className="text-white text-xl font-regular tracking-wide uppercase mt-2">SAUDI ARABIA</span>
</div>

<header className="absolute top-0 left-0 w-full z-50">
<div className="max-w-[90rem] mx-auto px-6 py-8 flex items-center justify-between">

<a className="flex-shrink-0 transition-opacity hover:opacity-90" href="#">
<img alt="Tameh Logo" className="h-10 w-auto" src="https://tameh.sa/wp-content/uploads/2025/03/LOGO-WHITE-300x67.webp"/>
</a>

<nav className="hidden lg:flex items-center gap-10">
<a className="text-white text-base font-regular tracking-wide hover:text-white/70 transition-colors" href="#home">الرئيسية</a>
<a className="text-white text-base font-regular tracking-wide hover:text-white/70 transition-colors" href="#about">عن طامح</a>
<a className="text-white text-base font-regular tracking-wide hover:text-white/70 transition-colors" href="#services">خدماتنا</a>
<a className="text-white text-base font-regular tracking-wide hover:text-white/70 transition-colors" href="#packages">الباقات</a>
<a className="text-white text-base font-regular tracking-wide hover:text-white/70 transition-colors" href="#contact">تواصل معنا</a>
</nav>

<a className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white px-6 py-3 rounded-lg transition-all duration-300 text-base font-regular group" href="#">
<span>احجز استشارتك</span>
<iconify-icon className="text-xl transition-transform group-hover:-translate-x-1" icon="solar:arrow-left-linear"></iconify-icon>
</a>
</div>
</header>

<div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center mt-12">

<div className="inline-flex items-center justify-center bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-full px-8 py-3 mb-16 transform transition-transform hover:scale-[1.02]">
<h1 className="text-[#00524a] text-xl font-semibold tracking-tight m-0">
                    حلول احترافية لتأسيس الشركات الأجنبية في السعودية
                </h1>
</div>

<div className="relative flex flex-col items-center justify-center text-white opacity-95 select-none mt-8">
<svg className="drop-shadow-2xl" fill="none" height="280" viewbox="0 0 100 120" width="240" xmlns="http://www.w3.org/2000/svg">
<path d="M70 20 H30 V40 H70 V60 H50" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path>
<path d="M80 60 C80 90, 50 110, 20 100" stroke="white" strokeLinecap="round" strokeWidth="8"></path>
<path d="M50 80 H20" stroke="white" strokeLinecap="round" strokeWidth="8"></path>
</svg>
</div>
</div>
</section>

<section className="relative py-32 bg-white overflow-hidden border-b border-gray-100">

<div className="absolute inset-0 z-0 opacity-[0.03]" style={{backgroundImage: 'url(\'https://tameh.sa//wp-content//uploads//2025//04//pattren-2.webp\')', backgroundSize: '400px', backgroundRepeat: 'repeat'}}></div>
<div className="relative z-10 max-w-[90rem] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white border border-gray-100/80 rounded-3xl p-10 flex flex-col items-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group">
<div className="w-14 h-14 bg-[#006A60]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#006A60]/10 transition-all duration-500">
<iconify-icon className="text-3xl text-[#006A60]" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="text-gray-900 text-xl font-semibold tracking-tight mb-3 group-hover:text-[#006A60] transition-colors">خبرة ورؤية عالمية</h3>
<p className="text-gray-500 text-sm font-regular leading-relaxed">نعرف السوق السعودي بعمق ونساعدك في كل خطوة لانطلاقة ناجحة.</p>
</div>

<div className="bg-white border border-gray-100/80 rounded-3xl p-10 flex flex-col items-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group">
<div className="w-14 h-14 bg-[#006A60]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#006A60]/10 transition-all duration-500">
<iconify-icon className="text-3xl text-[#006A60]" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-gray-900 text-xl font-semibold tracking-tight mb-3 group-hover:text-[#006A60] transition-colors">التزام بالأنظمة</h3>
<p className="text-gray-500 text-sm font-regular leading-relaxed">نضمن الامتثال التام للوائح والقوانين السعودية دون أي تعقيدات.</p>
</div>

<div className="bg-white border border-gray-100/80 rounded-3xl p-10 flex flex-col items-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group">
<div className="w-14 h-14 bg-[#006A60]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#006A60]/10 transition-all duration-500">
<iconify-icon className="text-3xl text-[#006A60]" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-gray-900 text-xl font-semibold tracking-tight mb-3 group-hover:text-[#006A60] transition-colors">سرعة التنفيذ</h3>
<p className="text-gray-500 text-sm font-regular leading-relaxed">نوفر لك حلولاً سريعة وفعالة لتبدأ مزاولة نشاطك بأسرع وقت.</p>
</div>

<div className="bg-white border border-gray-100/80 rounded-3xl p-10 flex flex-col items-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group">
<div className="w-14 h-14 bg-[#006A60]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#006A60]/10 transition-all duration-500">
<iconify-icon className="text-3xl text-[#006A60]" icon="solar:headphones-round-sound-linear"></iconify-icon>
</div>
<h3 className="text-gray-900 text-xl font-semibold tracking-tight mb-3 group-hover:text-[#006A60] transition-colors">دعم مستمر</h3>
<p className="text-gray-500 text-sm font-regular leading-relaxed">فريقنا معك قبل وأثناء وبعد تأسيس شركتك لضمان استقرارك.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#f8f9fa] relative overflow-hidden" id="about">
<div className="max-w-[90rem] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="relative z-10">
<span className="text-[#006A60] text-sm font-semibold tracking-wide uppercase mb-3 block">من نحن</span>
<h2 className="text-gray-900 text-4xl font-semibold tracking-tight leading-tight mb-6">شريكك الموثوق لدخول السوق السعودي بنجاح</h2>
<p className="text-gray-500 text-base font-regular leading-relaxed mb-10">
                    في طامح، ندرك حجم الفرص الاستثمارية التي تتيحها رؤية المملكة 2030. نحن نقدم حلولاً متكاملة لتأسيس الشركات الأجنبية والمحلية، بدءاً من الاستشارات القانونية والمالية، وحتى استخراج التراخيص وبدء التشغيل الفعلي.
                </p>
<div className="space-y-5">
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#006A60]/10 flex items-center justify-center">
<iconify-icon className="text-[#006A60] text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<h4 className="text-gray-900 text-base font-semibold mb-1">فريق خبراء متخصص</h4>
<p className="text-gray-500 text-sm">نخبة من المستشارين ذوي الخبرة العميقة في السوق السعودي.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#006A60]/10 flex items-center justify-center">
<iconify-icon className="text-[#006A60] text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<h4 className="text-gray-900 text-base font-semibold mb-1">حلول مخصصة</h4>
<p className="text-gray-500 text-sm">نبني استراتيجيات تناسب حجم ونوع نشاطك التجاري بدقة.</p>
</div>
</div>
</div>
</div>

<div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgb(0,0,0,0.1)]">
<img alt="Riyadh Business" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#00524a]/80 to-transparent"></div>
<div className="absolute bottom-8 right-8 left-8">
<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
<div className="flex items-center gap-4">
<h3 className="text-white text-4xl font-semibold tracking-tighter">98%</h3>
<p className="text-white/90 text-sm font-regular leading-snug">نسبة رضا العملاء<br/>عن خدمات التأسيس</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative" id="services">
<div className="max-w-[90rem] mx-auto px-6">

<div className="text-center max-w-2xl mx-auto mb-20">
<span className="text-[#006A60] text-sm font-semibold tracking-wide uppercase mb-3 block">خدماتنا</span>
<h2 className="text-gray-900 text-4xl font-semibold tracking-tight mb-4">باقة متكاملة من الخدمات لرواد الأعمال</h2>
<p className="text-gray-500 text-base font-regular leading-relaxed">
                    نغطي كافة الجوانب الإدارية، القانونية، والمالية لتضمن انطلاقة قوية ومستقرة لأعمالك في المملكة العربية السعودية.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group cursor-pointer">
<iconify-icon className="text-4xl text-[#006A60] mb-6 block transition-transform group-hover:scale-110 origin-right" icon="solar:buildings-linear"></iconify-icon>
<h3 className="text-gray-900 text-lg font-semibold tracking-tight mb-3">تأسيس الشركات</h3>
<p className="text-gray-500 text-sm font-regular leading-relaxed mb-6">إجراءات إصدار السجل التجاري، وعقد التأسيس، وتراخيص الاستثمار الأجنبي MISA بكل احترافية.</p>
<a className="inline-flex items-center gap-2 text-[#006A60] text-sm font-semibold group-hover:gap-3 transition-all" href="#">
                        اقرأ المزيد <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</a>
</div>

<div className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group cursor-pointer">
<iconify-icon className="text-4xl text-[#006A60] mb-6 block transition-transform group-hover:scale-110 origin-right" icon="solar:document-text-linear"></iconify-icon>
<h3 className="text-gray-900 text-lg font-semibold tracking-tight mb-3">الاستشارات القانونية</h3>
<p className="text-gray-500 text-sm font-regular leading-relaxed mb-6">صياغة العقود، لوائح العمل الداخلية، وتقديم النصح القانوني لحماية مصالح شركتك بشكل كامل.</p>
<a className="inline-flex items-center gap-2 text-[#006A60] text-sm font-semibold group-hover:gap-3 transition-all" href="#">
                        اقرأ المزيد <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</a>
</div>

<div className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group cursor-pointer">
<iconify-icon className="text-4xl text-[#006A60] mb-6 block transition-transform group-hover:scale-110 origin-right" icon="solar:wallet-linear"></iconify-icon>
<h3 className="text-gray-900 text-lg font-semibold tracking-tight mb-3">الخدمات البنكية والمالية</h3>
<p className="text-gray-500 text-sm font-regular leading-relaxed mb-6">تسهيل فتح الحسابات البنكية للشركات، وتقديم الاستشارات المالية والتوجيه حول التمويل.</p>
<a className="inline-flex items-center gap-2 text-[#006A60] text-sm font-semibold group-hover:gap-3 transition-all" href="#">
                        اقرأ المزيد <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</a>
</div>

<div className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group cursor-pointer">
<iconify-icon className="text-4xl text-[#006A60] mb-6 block transition-transform group-hover:scale-110 origin-right" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h3 className="text-gray-900 text-lg font-semibold tracking-tight mb-3">إدارة الموارد البشرية</h3>
<p className="text-gray-500 text-sm font-regular leading-relaxed mb-6">التسجيل في التأمينات الاجتماعية، وزارة الموارد البشرية، واستخراج تأشيرات العمل للموظفين.</p>
<a className="inline-flex items-center gap-2 text-[#006A60] text-sm font-semibold group-hover:gap-3 transition-all" href="#">
                        اقرأ المزيد <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</a>
</div>

<div className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group cursor-pointer">
<iconify-icon className="text-4xl text-[#006A60] mb-6 block transition-transform group-hover:scale-110 origin-right" icon="solar:calculator-linear"></iconify-icon>
<h3 className="text-gray-900 text-lg font-semibold tracking-tight mb-3">الاستشارات الضريبية والزكاة</h3>
<p className="text-gray-500 text-sm font-regular leading-relaxed mb-6">التسجيل في هيئة الزكاة والضريبة والجمارك، وتقديم الإقرارات الضريبية لضمان الامتثال التام.</p>
<a className="inline-flex items-center gap-2 text-[#006A60] text-sm font-semibold group-hover:gap-3 transition-all" href="#">
                        اقرأ المزيد <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</a>
</div>

<div className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group cursor-pointer">
<iconify-icon className="text-4xl text-[#006A60] mb-6 block transition-transform group-hover:scale-110 origin-right" icon="solar:verified-check-linear"></iconify-icon>
<h3 className="text-gray-900 text-lg font-semibold tracking-tight mb-3">التراخيص المتخصصة</h3>
<p className="text-gray-500 text-sm font-regular leading-relaxed mb-6">استخراج التراخيص الصناعية، الطبية، التقنية، وغيرها من الجهات الحكومية ذات العلاقة.</p>
<a className="inline-flex items-center gap-2 text-[#006A60] text-sm font-semibold group-hover:gap-3 transition-all" href="#">
                        اقرأ المزيد <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#fafafa] relative border-t border-gray-100" id="packages">
<div className="max-w-[90rem] mx-auto px-6">

<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-gray-900 text-4xl font-semibold tracking-tight mb-4">باقات التأسيس المرنة</h2>
<p className="text-gray-500 text-base font-regular">اختر الباقة التي تتناسب مع حجم أعمالك وطموحاتك الاستثمارية.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col mt-4">
<h3 className="text-gray-900 text-lg font-semibold tracking-tight mb-2">الباقة الأساسية</h3>
<p className="text-gray-500 text-sm mb-6">مثالية للشركات الناشئة والمكاتب التمثيلية.</p>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tighter text-gray-900">4,900</span>
<span className="text-gray-500 text-sm font-regular">ر.س / شهرياً</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-[#006A60] text-lg" icon="solar:check-circle-linear"></iconify-icon> استخراج السجل التجاري
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-[#006A60] text-lg" icon="solar:check-circle-linear"></iconify-icon> فتح الحساب البنكي الأساسي
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-[#006A60] text-lg" icon="solar:check-circle-linear"></iconify-icon> التسجيل في الغرفة التجارية
                        </li>
</ul>
<a className="w-full py-3 px-4 rounded-xl border border-gray-200 text-gray-900 text-sm font-semibold text-center hover:bg-gray-50 transition-colors" href="#">اختيار الباقة</a>
</div>

<div className="bg-[#00524a] rounded-3xl p-8 border border-[#006A60] shadow-[0_20px_40px_rgb(0,82,74,0.15)] flex flex-col relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#006A60] text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/10">
                        الأكثر طلباً
                    </div>
<h3 className="text-white text-lg font-semibold tracking-tight mb-2">باقة الأعمال</h3>
<p className="text-white/70 text-sm mb-6">للاستثمارات الأجنبية والشركات المتوسطة.</p>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tighter text-white">9,500</span>
<span className="text-white/70 text-sm font-regular">ر.س / شهرياً</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white/90">
<iconify-icon className="text-[#006A60] bg-white rounded-full text-lg" icon="solar:check-circle-linear"></iconify-icon> جميع ميزات الباقة الأساسية
                        </li>
<li className="flex items-center gap-3 text-sm text-white/90">
<iconify-icon className="text-[#006A60] bg-white rounded-full text-lg" icon="solar:check-circle-linear"></iconify-icon> ترخيص وزارة الاستثمار (MISA)
                        </li>
<li className="flex items-center gap-3 text-sm text-white/90">
<iconify-icon className="text-[#006A60] bg-white rounded-full text-lg" icon="solar:check-circle-linear"></iconify-icon> استشارات ضريبية وقانونية
                        </li>
<li className="flex items-center gap-3 text-sm text-white/90">
<iconify-icon className="text-[#006A60] bg-white rounded-full text-lg" icon="solar:check-circle-linear"></iconify-icon> تسجيل العلامة التجارية
                        </li>
</ul>
<a className="w-full py-3 px-4 rounded-xl bg-white text-[#00524a] text-sm font-semibold text-center hover:bg-gray-50 transition-colors" href="#">اختيار الباقة</a>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col mt-4">
<h3 className="text-gray-900 text-lg font-semibold tracking-tight mb-2">الباقة الشاملة</h3>
<p className="text-gray-500 text-sm mb-6">تغطية 360 درجة للشركات الكبرى والمصانع.</p>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tighter text-gray-900">مخصصة</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-[#006A60] text-lg" icon="solar:check-circle-linear"></iconify-icon> إدارة متكاملة للموارد البشرية
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-[#006A60] text-lg" icon="solar:check-circle-linear"></iconify-icon> تراخيص صناعية متخصصة
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-[#006A60] text-lg" icon="solar:check-circle-linear"></iconify-icon> محاسبة ومسك دفاتر شهري
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-[#006A60] text-lg" icon="solar:check-circle-linear"></iconify-icon> مدير حساب خاص
                        </li>
</ul>
<a className="w-full py-3 px-4 rounded-xl border border-gray-200 text-gray-900 text-sm font-semibold text-center hover:bg-gray-50 transition-colors" href="#">تواصل معنا</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="bg-gradient-to-br from-[#00524a] to-[#006A60] rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden shadow-[0_20px_40px_rgb(0,106,96,0.2)]">

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
<h2 className="text-white text-3xl md:text-5xl font-semibold tracking-tight mb-6 relative z-10">هل أنت مستعد لدخول السوق السعودي؟</h2>
<p className="text-white/80 text-lg font-regular mb-10 max-w-2xl mx-auto relative z-10">دعنا نتحمل عنك عبء الإجراءات المعقدة لتتفرغ لتنمية أعمالك وتحقيق أهدافك الاستراتيجية.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
<a className="w-full sm:w-auto bg-white text-[#00524a] px-8 py-4 rounded-xl text-base font-semibold transition-transform hover:-translate-y-1 shadow-lg" href="#">
                        احجز استشارة مجانية
                    </a>
<a className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/10 transition-colors" href="#">
                        تصفح دليل التأسيس
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-20 pb-10" id="contact">
<div className="max-w-[90rem] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<img alt="Tameh Logo" className="h-10 w-auto mb-6 brightness-0 opacity-80" src="https://tameh.sa/wp-content/uploads/2025/03/LOGO-WHITE-300x67.webp"/>
<p className="text-gray-500 text-sm font-regular leading-relaxed mb-6">
                        شريكك الموثوق لتأسيس وتنمية أعمالك في المملكة العربية السعودية، نقدم حلولاً متكاملة تتوافق مع رؤية 2030.
                    </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#006A60] hover:text-white transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#006A60] hover:text-white transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#006A60] hover:text-white transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-gray-900 text-base font-semibold mb-6">الشركة</h4>
<ul className="space-y-4">
<li><a className="text-gray-500 text-sm hover:text-[#006A60] transition-colors" href="#">عن طامح</a></li>
<li><a className="text-gray-500 text-sm hover:text-[#006A60] transition-colors" href="#">فريق العمل</a></li>
<li><a className="text-gray-500 text-sm hover:text-[#006A60] transition-colors" href="#">شركاء النجاح</a></li>
<li><a className="text-gray-500 text-sm hover:text-[#006A60] transition-colors" href="#">المدونة</a></li>
<li><a className="text-gray-500 text-sm hover:text-[#006A60] transition-colors" href="#">تواصل معنا</a></li>
</ul>
</div>

<div>
<h4 className="text-gray-900 text-base font-semibold mb-6">الخدمات</h4>
<ul className="space-y-4">
<li><a className="text-gray-500 text-sm hover:text-[#006A60] transition-colors" href="#">تأسيس الشركات</a></li>
<li><a className="text-gray-500 text-sm hover:text-[#006A60] transition-colors" href="#">الاستشارات القانونية</a></li>
<li><a className="text-gray-500 text-sm hover:text-[#006A60] transition-colors" href="#">تراخيص الاستثمار</a></li>
<li><a className="text-gray-500 text-sm hover:text-[#006A60] transition-colors" href="#">إدارة الموارد البشرية</a></li>
<li><a className="text-gray-500 text-sm hover:text-[#006A60] transition-colors" href="#">الخدمات المحاسبية</a></li>
</ul>
</div>

<div>
<h4 className="text-gray-900 text-base font-semibold mb-6">النشرة البريدية</h4>
<p className="text-gray-500 text-sm mb-4">اشترك ليصلك أحدث التحديثات حول أنظمة الاستثمار والأعمال في السعودية.</p>
<form className="flex flex-col gap-3">
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006A60]/20 focus:border-[#006A60] transition-all" placeholder="البريد الإلكتروني" type="email"/>
<button className="w-full bg-[#00524a] hover:bg-[#006A60] text-white rounded-xl px-4 py-3 text-sm font-semibold transition-colors" type="submit">اشترك الآن</button>
</form>
</div>
</div>

<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-gray-400 text-xs font-regular">© 2024 طامح لخدمات الأعمال. جميع الحقوق محفوظة.</p>
<div className="flex items-center gap-6">
<a className="text-gray-400 text-xs hover:text-gray-900 transition-colors" href="#">سياسة الخصوصية</a>
<a className="text-gray-400 text-xs hover:text-gray-900 transition-colors" href="#">الشروط والأحكام</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-8 left-8 bg-[#1a1a1a] hover:bg-[#00524a] text-white p-3.5 rounded-xl shadow-lg transition-all duration-300 z-50 flex items-center justify-center group focus:outline-none" href="#">
<iconify-icon className="text-xl transition-transform group-hover:-translate-y-0.5" icon="solar:alt-arrow-up-linear"></iconify-icon>
</a>

    </>
  );
}
