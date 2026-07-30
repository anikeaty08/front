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
      {

      function carousel() {
        return {
          activeSlide: 0,
          slides: [
            { img: 'https://source.unsplash.com/featured/960x640?conference', title: 'مؤتمر نور الدولي 2024', subtitle: 'انضمّوا إلينا في نقاشات رائدة حول أحدث الاكتشافات الإسلاميّة والجغرافيّة.' },
            { img: 'https://source.unsplash.com/featured/960x640?book', title: 'إصدار جديد: المجلة العلمية', subtitle: 'تابعوا أول عدد رقمي للمجلة العلمية لمؤسّسة نور قريبًا.' },
            { img: 'https://source.unsplash.com/featured/960x640?research', title: 'خدمة تقييم الأبحاث', subtitle: 'نساعد الباحثين والطلّاب على فحص صلاحية دراساتهم قبل النشر.' }
          ],
          next() { this.activeSlide = (this.activeSlide + 1) % this.slides.length },
          prev() { this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length }
        }
      }
    
}

{

    lucide.createIcons({ strokeWidth: 1.5 });

    document.addEventListener('DOMContentLoaded', () => {
      const el = document.getElementById('hijriDate');
      if (el) {
        try {
          const formatter = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
          el.textContent = formatter.format(new Date());
        } catch (e) {
          el.textContent = '';
        }
      }
    });
  
}
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
      

<header className="bg-gray-100/90 backdrop-blur border-b border-gray-200 text-xs md:text-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">

<span className="text-gray-600" id="hijriDate"></span>

<div className="flex items-center gap-2 text-gray-700">
<button className="hover:text-teal-600 font-medium">العربية</button>
<span className="text-gray-400">|</span>
<button className="hover:text-teal-600 font-medium">English</button>
</div>

<div className="flex items-center gap-3">
<a className="p-1 hover:text-teal-600 transition" href="#">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="twitter"></i>
</a>
<a className="p-1 hover:text-teal-600 transition" href="#">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="facebook"></i>
</a>
<a className="p-1 hover:text-teal-600 transition" href="#">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="linkedin"></i>
</a>
</div>
</div>
</header>

<header className="sticky top-9 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

<a className="text-2xl font-semibold tracking-tight text-teal-600">نور</a>

<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="hover:text-teal-600 transition" href="#about">عن المؤسّسة</a>
<a className="hover:text-teal-600 transition" href="#publications">منشوراتنا</a>
<a className="hover:text-teal-600 transition" href="#events">الفعاليّات</a>
<a className="hover:text-teal-600 transition" href="#services">الخدمات</a>
<a className="hover:text-teal-600 transition" href="#newsletter">النشرة</a>
</nav>

<button className="md:hidden relative" x-data="{open:false}">
<span className="fa-solid fa-bars text-xl text-teal-600 transition"></span>
<span className="fa-solid fa-xmark text-xl text-teal-600 transition absolute inset-0"></span>

<div className="absolute top-12 right-0 w-40 bg-white border border-gray-200 rounded-lg shadow-lg p-4 space-y-3 text-sm" x-show="open" x-transition="">
<a className="block hover:text-teal-600" href="#about">عن المؤسّسة</a>
<a className="block hover:text-teal-600" href="#publications">منشوراتنا</a>
<a className="block hover:text-teal-600" href="#events">الفعاليّات</a>
<a className="block hover:text-teal-600" href="#services">الخدمات</a>
<a className="block hover:text-teal-600" href="#newsletter">النشرة</a>
</div>
</button>
</div>
</header>

<section className="relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" x-data="carousel()">
<div className="relative h-[380px] md:h-[460px] overflow-hidden rounded-3xl shadow-lg">
<template x-for="(slide, index) in slides"><div className="absolute inset-0" x-show="activeSlide === index" x-transition:enter="transition ease-out duration-700" x-transition:enter-end="opacity-100 scale-100" x-transition:enter-start="opacity-0 scale-105"><img alt="" className="w-full h-full object-cover object-center" /><div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div><div className="absolute inset-0 flex flex-col items-end justify-center px-8 md:px-16 text-white"><h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4" x-text="slide.title"></h2><p className="text-sm md:text-base max-w-md" x-text="slide.subtitle"></p></div></div></template>

<button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur rounded-full p-2 hover:bg-white shadow">
<i className="fa-solid fa-chevron-left text-teal-600"></i>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur rounded-full p-2 hover:bg-white shadow">
<i className="fa-solid fa-chevron-right text-teal-600"></i>
</button>
</div>

<div className="flex justify-center gap-2 mt-4">
<template x-for="(slide, index) in slides"><button className="w-2.5 h-2.5 rounded-full"></button></template>
</div>
</div>

</section>

<section className="pt-20 lg:pt-24" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">من نحن؟</h2>
<p className="max-w-3xl mx-auto leading-relaxed text-gray-700">
        مؤسّسة نور للبحوث العلميّة كيان مستقلّ يسعى لدعم البحث العلمي ونشر المعرفة عبر تنظيم المؤتمرات،
        إصدار المنشورات الأكاديميّة، وتقديم خدمات استشاريّة للباحثين والطلّاب. تركز المؤسّسة حاليًّا على
        الدراسات الإسلامية والجغرافيّة، وتخطّط للتوسّع إلى مجالات علميّة أوسع في المستقبل القريب.
      </p>
</div>
</section>

<section className="pt-20 lg:pt-24" id="publications">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">أحدث المنشورات</h2>
<a className="inline-flex items-center gap-1 text-teal-600 hover:underline" href="#">
          استعرض الكل
          <i className="fa-solid fa-arrow-left-long text-sm"></i>
</a>
</div>

<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

<article className="group border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
<img alt="" className="w-full h-44 object-cover object-center group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="p-6 space-y-3">
<h3 className="text-lg font-medium text-gray-900 group-hover:text-teal-600 transition">دور الجغرافيا في
              تطوّر العلوم الإسلاميّة</h3>
<p className="text-sm text-gray-600">بحث تحليلي حول تأثير العوامل الجغرافية في نشأة المدارس الفكريّة.</p>
<div className="flex items-center justify-between text-xs text-gray-500">
<span>أبريل 2024</span>
<span className="flex items-center gap-1">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="file-text"></i> 124 صفحة
              </span>
</div>
</div>
</article>

<article className="group border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
<img alt="" className="w-full h-44 object-cover object-center group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="p-6 space-y-3">
<h3 className="text-lg font-medium text-gray-900 group-hover:text-teal-600 transition">الأطلس الجغرافي
              للعالم الإسلامي</h3>
<p className="text-sm text-gray-600">إصدار ممدود بالخرائط والتحليلات الديموغرافية الحديثة.</p>
<div className="flex items-center justify-between text-xs text-gray-500">
<span>يناير 2024</span>
<span className="flex items-center gap-1">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="map"></i> 320 صفحة
              </span>
</div>
</div>
</article>

<article className="group border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
<img alt="" className="w-full h-44 object-cover object-center group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="p-6 space-y-3">
<h3 className="text-lg font-medium text-gray-900 group-hover:text-teal-600 transition">العمارة الدينيّة
              وتحولات المكان</h3>
<p className="text-sm text-gray-600">مراجعة تاريخية لفنون العمارة الإسلامية ومدى ارتباطها بالمكان.</p>
<div className="flex items-center justify-between text-xs text-gray-500">
<span>سبتمبر 2023</span>
<span className="flex items-center gap-1">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="library"></i> 212 صفحة
              </span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="pt-20 lg:pt-24" id="events">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">جدول الفعاليّات</h2>
<a className="inline-flex items-center gap-1 text-teal-600 hover:underline" href="#">
          استعراض الكلي
          <i className="fa-solid fa-arrow-left-long text-sm"></i>
</a>
</div>
<div className="divide-y divide-gray-200 border border-gray-200 rounded-2xl bg-white overflow-hidden">

<div className="flex flex-col md:flex-row items-start md:items-center p-6 gap-4">
<div className="flex items-center gap-2 text-teal-600">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="calendar"></i>
<span className="font-medium">15 مايو 2024</span>
</div>
<h3 className="flex-1 text-gray-900 font-medium">ورشة عمل: منهجيّات البحث الميداني</h3>
<button className="px-4 py-2 text-sm font-medium rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition">
            تسجيل
          </button>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center p-6 gap-4">
<div className="flex items-center gap-2 text-teal-600">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="calendar"></i>
<span className="font-medium">28 يونيو 2024</span>
</div>
<h3 className="flex-1 text-gray-900 font-medium">ندوة عامّة: مستقبل الجغرافيا الرقميّة</h3>
<button className="px-4 py-2 text-sm font-medium rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition">
            تسجيل
          </button>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center p-6 gap-4">
<div className="flex items-center gap-2 text-teal-600">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="calendar"></i>
<span className="font-medium">12 يوليو 2024</span>
</div>
<h3 className="flex-1 text-gray-900 font-medium">محاضرة: المخطوطات الإسلامية غير المنشورة</h3>
<button className="px-4 py-2 text-sm font-medium rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition">
            تسجيل
          </button>
</div>
</div>
</div>
</section>

<section className="pt-20 lg:pt-24" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">خدماتنا</h2>
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

<div className="group border border-gray-200 bg-white rounded-2xl p-8 space-y-4 hover:border-teal-600 hover:shadow-md transition">
<i className="w-8 h-8 stroke-[1.5] text-teal-600" data-lucide="layout-dashboard"></i>
<h3 className="text-lg font-medium text-gray-900">تنظيم المؤتمرات والفعاليات</h3>
<p className="text-sm text-gray-600">تصميم وإدارة مؤتمرات علميّة متكاملة مع بنية تحتية تقنية وأكاديمية.</p>
</div>

<div className="group border border-gray-200 bg-white rounded-2xl p-8 space-y-4 hover:border-teal-600 hover:shadow-md transition">
<i className="w-8 h-8 stroke-[1.5] text-teal-600" data-lucide="book-open"></i>
<h3 className="text-lg font-medium text-gray-900">نشر وتحكيم الدراسات</h3>
<p className="text-sm text-gray-600">توفير منصّة علميّة لتحكيم ونشر الكتب والمقالات وفق المعايير الدولية.</p>
</div>

<div className="group border border-gray-200 bg-white rounded-2xl p-8 space-y-4 hover:border-teal-600 hover:shadow-md transition">
<i className="w-8 h-8 stroke-[1.5] text-teal-600" data-lucide="graduation-cap"></i>
<h3 className="text-lg font-medium text-gray-900">دعم الباحثين والطلّاب</h3>
<p className="text-sm text-gray-600">مرافقة في إعداد الرسائل العلميّة، المراجعة اللغوية، وتقييم الصلاحية.</p>
</div>

<div className="group border border-gray-200 bg-white rounded-2xl p-8 space-y-4 hover:border-teal-600 hover:shadow-md transition">
<i className="w-8 h-8 stroke-[1.5] text-teal-600" data-lucide="cpu"></i>
<h3 className="text-lg font-medium text-gray-900">مجلة علميّة رقمية</h3>
<p className="text-sm text-gray-600">إطلاق مجلة رقمية دورية للأبحاث والمقالات المتخصصة قريبًا.</p>
</div>

<div className="group border border-gray-200 bg-white rounded-2xl p-8 space-y-4 hover:border-teal-600 hover:shadow-md transition">
<i className="w-8 h-8 stroke-[1.5] text-teal-600" data-lucide="users"></i>
<h3 className="text-lg font-medium text-gray-900">مجتمع علمي تفاعلي</h3>
<p className="text-sm text-gray-600">ملتقيات شهرية لتبادل الخبرات والاطلاع على آخر الأبحاث.</p>
</div>

<div className="group border border-gray-200 bg-white rounded-2xl p-8 space-y-4 hover:border-teal-600 hover:shadow-md transition">
<i className="w-8 h-8 stroke-[1.5] text-teal-600" data-lucide="mic"></i>
<h3 className="text-lg font-medium text-gray-900">أنشطة توعوية عامة</h3>
<p className="text-sm text-gray-600">محاضرات وندوات مفتوحة لنشر الثقافة العلميّة للمجتمع.</p>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-28" id="newsletter">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-teal-600 to-teal-500 text-white p-12 shadow-lg">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">اشترك في النشرة العلميّة</h2>
<p className="max-w-2xl mx-auto mb-8">تابع أحدث الإصدارات والفعاليّات والأخبار مباشرة إلى بريدك الإلكتروني.</p>
<form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
<input className="flex-1 px-5 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none" placeholder="أدخل بريدك الإلكتروني" type="email" />
<button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 rounded-lg font-medium transition">اشترك الآن</button>
</form>

<div aria-hidden="true" className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
<div aria-hidden="true" className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
</div>
</div>
</section>

<footer className="border-t border-gray-200 bg-white py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">

<div>
<a className="text-2xl font-semibold tracking-tight text-teal-600 block mb-4">نور</a>
<p className="text-sm text-gray-600 leading-relaxed">
          مؤسسة غير ربحية تسعى لتطوير البحث العلمي والمعرفة من خلال برامج شاملة ودعم مجتمعي.
        </p>
</div>

<div className="space-y-2 text-sm">
<h4 className="font-medium text-gray-900 mb-2">روابط سريعة</h4>
<a className="block hover:text-teal-600" href="#about">عن المؤسّسة</a>
<a className="block hover:text-teal-600" href="#publications">منشورات</a>
<a className="block hover:text-teal-600" href="#events">فعاليّات</a>
<a className="block hover:text-teal-600" href="#services">خدمات</a>
<a className="block hover:text-teal-600" href="#newsletter">النشرة</a>
</div>

<div className="space-y-4">
<h4 className="font-medium text-gray-900 mb-2">تواصل معنا</h4>
<p className="text-sm text-gray-600">البريد: info@nour.org</p>
<p className="text-sm text-gray-600">هاتف: ‎+963 123 456 789</p>
<div className="flex gap-3 mt-2">
<a className="p-2 rounded-full bg-gray-100 hover:bg-teal-600 hover:text-white transition" href="#">
<i className="fab fa-twitter"></i>
</a>
<a className="p-2 rounded-full bg-gray-100 hover:bg-teal-600 hover:text-white transition" href="#">
<i className="fab fa-facebook-f"></i>
</a>
<a className="p-2 rounded-full bg-gray-100 hover:bg-teal-600 hover:text-white transition" href="#">
<i className="fab fa-linkedin-in"></i>
</a>
</div>
</div>
</div>
<div className="text-center text-xs text-gray-500 mt-8">© 2024 مؤسسة نور للبحوث العلميّة. جميع الحقوق محفوظة.</div>
</footer>



    </>
  );
}
