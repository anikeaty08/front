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
      
      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


    // Mobile menu toggle
    (function () {
      const btn = document.querySelector('[data-menu-toggle]');
      const panel = document.querySelector('[data-menu-panel]');
      if (btn && panel) {
        btn.addEventListener('click', () => {
          panel.classList.toggle('hidden');
        });
      }
    })();

    // Initialize Lucide icons
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
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
      
<div className="aura-background-component fixed top-0 w-full h-screen -z-10">
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="cqcLtDwfoHqqRPttBbQE"></div>

</div>

<header className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
<nav className="flex items-center justify-between border-b border-white/10 pb-4">

<a className="inline-flex items-center gap-3" href="#">
<div className="w-10 h-10 bg-gradient-to-br from-white to-white/80 rounded-xl flex items-center justify-center">
<span className="text-lg font-bold text-neutral-900 font-en">TF</span>
</div>
<div>
<span className="text-lg font-semibold tracking-tight font-en">TAPFORWARD</span>
<div className="text-sm text-white/60">تاب فوروارد</div>
</div>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-white/70 hover:text-white tracking-tight" href="#services">الخدمات</a>
<a className="text-sm text-white/70 hover:text-white tracking-tight" href="#portfolio">أعمالنا</a>
<a className="text-sm text-white/70 hover:text-white tracking-tight" href="#team">الفريق</a>
<a className="text-sm text-white/70 hover:text-white tracking-tight" href="#plans">الباقات</a>
<a className="text-sm text-white/70 hover:text-white tracking-tight" href="#contact">تواصل معنا</a>
</div>

<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 border border-white/10 shadow-sm" href="#contact">
<i data-lucide="phone" style={{width: `16px`, height: `16px`, strokeWidth: `1.5`}}></i>
<span>احصل على استشارة مجانية</span>
</a>
<button className="md:hidden inline-flex items-center justify-center rounded-full p-2 border border-white/10 bg-white/5 hover:bg-white/10" data-menu-toggle="" type="button">
<i data-lucide="menu" style={{width: `16px`, height: `16px`, strokeWidth: `1.5`}}></i>
</button>
</div>
</nav>

<div className="md:hidden hidden mt-3 rounded-2xl border border-white/10 bg-white/5 shadow-sm overflow-hidden" data-menu-panel="">
<div className="px-4 py-3 grid gap-2">
<a className="text-sm text-white/90 tracking-tight py-1.5" href="#services">الخدمات</a>
<a className="text-sm text-white/90 tracking-tight py-1.5" href="#portfolio">أعمالنا</a>
<a className="text-sm text-white/90 tracking-tight py-1.5" href="#team">الفريق</a>
<a className="text-sm text-white/90 tracking-tight py-1.5" href="#plans">الباقات</a>
<a className="text-sm text-white/90 tracking-tight py-1.5" href="#contact">تواصل معنا</a>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7">
<div className="mb-6">
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium text-white bg-white/10 border border-white/10">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
            متاحون الآن للمشاريع الجديدة
          </span>
</div>
<h1 className="leading-none text-white tracking-tight">
<span className="block text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] font-bold">
<span className="font-en">TAPFORWARD</span>
<span className="block text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[3vw] text-white/80 mt-2">
              حلولك الرقمية المتقدمة
            </span>
</span>
</h1>
<p className="mt-6 text-xl sm:text-2xl leading-relaxed max-w-2xl text-white/70">
          نقرة واحدة نحو مستقبل رقمي متقدم. نطور المواقع والمتاجر الإلكترونية والهوية البصرية للشركات السعودية الطموحة.
        </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 border border-white/10" href="#services">
<i data-lucide="arrow-left" style={{width: `16px`, height: `16px`, strokeWidth: `1.5`}}></i>
<span>استكشف خدماتنا</span>
</a>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/15 text-base font-medium text-white tracking-tight bg-white/10 border-white/10 border rounded-full px-6 py-3 shadow-sm backdrop-blur" href="#contact">
<i data-lucide="phone" style={{width: `16px`, height: `16px`, strokeWidth: `1.5`}}></i>
<span className="font-en">+966 50 123 4567</span>
</a>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="flex items-start gap-3 border-t border-white/10 pt-4">
<i className="text-white/50 mt-1" data-lucide="map-pin" style={{width: `20px`, height: `20px`, strokeWidth: `1.5`}}></i>
<div>
<p className="text-sm font-medium">نخدم السوق السعودي</p>
<p className="text-xs text-white/60 mt-1">من مانيلا، الفلبين</p>
</div>
</div>
<div className="flex items-start gap-3 border-t border-white/10 pt-4">
<i className="text-white/50 mt-1" data-lucide="globe" style={{width: `20px`, height: `20px`, strokeWidth: `1.5`}}></i>
<div>
<p className="text-sm font-medium">مواقع ومتاجر إلكترونية</p>
<p className="text-xs text-white/60 mt-1">باللغتين العربية والإنجليزية</p>
</div>
</div>
<div className="flex items-start gap-3 border-t border-white/10 pt-4">
<i className="text-white/50 mt-1" data-lucide="clock" style={{width: `20px`, height: `20px`, strokeWidth: `1.5`}}></i>
<div>
<p className="text-sm font-medium">دعم فني سريع</p>
<p className="text-xs text-white/60 mt-1">استجابة خلال 24 ساعة</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative aspect-[4/5] sm:aspect-[5/6] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.35)] bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/10">

<div className="absolute inset-4 bg-neutral-900 rounded-2xl border border-white/10 overflow-hidden">
<div className="p-4 border-b border-white/10">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="mt-3 text-xs text-white/60 text-center font-en">tapforward-dashboard.com</div>
</div>
<div className="p-4 space-y-4">
<div className="bg-white/5 rounded-lg p-3 border border-white/10">
<div className="text-sm font-medium mb-2">المشاريع النشطة</div>
<div className="text-2xl font-bold text-green-400">15</div>
</div>
<div className="bg-white/5 rounded-lg p-3 border border-white/10">
<div className="text-sm font-medium mb-2">العملاء الراضون</div>
<div className="text-2xl font-bold text-blue-400">98%</div>
</div>
<div className="bg-white/5 rounded-lg p-3 border border-white/10">
<div className="text-sm font-medium mb-2">سرعة الاستجابة</div>
<div className="text-2xl font-bold text-purple-400">{"<"} 24h</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-20 border-t border-white/10 pt-16" id="services">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">خدماتنا الأساسية</h2>
<p className="text-white/70 text-lg max-w-2xl mx-auto">نقدم حلولاً رقمية متكاملة للشركات السعودية الطموحة</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
<div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
<i className="text-blue-400" data-lucide="globe" style={{width: `24px`, height: `24px`, strokeWidth: `1.5`}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">المواقع الإلكترونية</h3>
<p className="text-white/70 text-sm mb-4">مواقع احترافية سريعة ومتجاوبة باللغتين العربية والإنجليزية</p>
<div className="text-sm font-medium text-white/90">5,000 - 20,000 ريال</div>
</div>

<div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
<div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
<i className="text-green-400" data-lucide="shopping-cart" style={{width: `24px`, height: `24px`, strokeWidth: `1.5`}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">المتاجر الإلكترونية</h3>
<p className="text-white/70 text-sm mb-4">متاجر جاهزة على منصة سلة مع تصميم وتخصيص كامل</p>
<div className="text-sm font-medium text-white/90">3,000 - 12,000 ريال</div>
</div>

<div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
<div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
<i className="text-purple-400" data-lucide="palette" style={{width: `24px`, height: `24px`, strokeWidth: `1.5`}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">الهوية البصرية</h3>
<p className="text-white/70 text-sm mb-4">تصميم الشعارات والهوية البصرية المتكاملة للشركات</p>
<div className="text-sm font-medium text-white/90">1,000 - 8,000 ريال</div>
</div>

<div className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
<div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
<i className="text-orange-400" data-lucide="server" style={{width: `24px`, height: `24px`, strokeWidth: `1.5`}}></i>
</div>
<h3 className="text-lg font-semibold mb-2">الاستضافة والدعم</h3>
<p className="text-white/70 text-sm mb-4">استضافة موثوقة مع دعم فني متواصل وصيانة دورية</p>
<div className="text-sm font-medium text-white/90">300 - 1,500 ريال/شهر</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-20 border-t border-white/10 pt-16" id="portfolio">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">نماذج من أعمالنا</h2>
<a className="inline-flex items-center gap-2 text-sm tracking-tight text-white/70 hover:text-white" href="#contact">
<span>شاهد المزيد</span>
<i data-lucide="arrow-up-left" style={{width: `16px`, height: `16px`, strokeWidth: `1.5`}}></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
<div className="aspect-[16/10] bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 flex items-center justify-center">
<div className="text-center">
<div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
<i data-lucide="building" style={{width: `32px`, height: `32px`, strokeWidth: `1.5`}}></i>
</div>
<div className="text-lg font-semibold">موقع شركة عقارية</div>
</div>
</div>
<div className="p-4">
<h3 className="font-semibold mb-2">موقع شركة الرؤية العقارية</h3>
<p className="text-white/70 text-sm">موقع احترافي لعرض العقارات مع نظام بحث متقدم</p>
</div>
</div>

<div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
<div className="aspect-[16/10] bg-gradient-to-br from-green-500/20 to-blue-500/20 p-6 flex items-center justify-center">
<div className="text-center">
<div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
<i data-lucide="shopping-bag" style={{width: `32px`, height: `32px`, strokeWidth: `1.5`}}></i>
</div>
<div className="text-lg font-semibold">متجر إلكتروني</div>
</div>
</div>
<div className="p-4">
<h3 className="font-semibold mb-2">متجر الأناقة للأزياء</h3>
<p className="text-white/70 text-sm">متجر متكامل على منصة سلة مع تصميم عصري</p>
</div>
</div>

<div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
<div className="aspect-[16/10] bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 flex items-center justify-center">
<div className="text-center">
<div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
<i data-lucide="palette" style={{width: `32px`, height: `32px`, strokeWidth: `1.5`}}></i>
</div>
<div className="text-lg font-semibold">هوية بصرية</div>
</div>
</div>
<div className="p-4">
<h3 className="font-semibold mb-2">هوية شركة التقنية المتقدمة</h3>
<p className="text-white/70 text-sm">شعار وهوية بصرية متكاملة لشركة تقنية ناشئة</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-20 border-t border-white/10 pt-16" id="team">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">فريق متخصص ومتفاني</h2>
<p className="text-white/70 text-lg leading-relaxed mb-8">
          يتكون فريقنا من خبراء متخصصين في التطوير والتصميم والتسويق الرقمي، نعمل معاً لتقديم أفضل الحلول الرقمية لعملائنا.
        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="bg-white/5 border border-white/10 rounded-xl p-4">
<div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
<i className="text-blue-400" data-lucide="code" style={{width: `24px`, height: `24px`, strokeWidth: `1.5`}}></i>
</div>
<h3 className="font-semibold mb-2">التطوير التقني</h3>
<p className="text-white/70 text-sm">خبراء في تطوير المواقع والأنظمة</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-4">
<div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-3">
<i className="text-purple-400" data-lucide="paintbrush" style={{width: `24px`, height: `24px`, strokeWidth: `1.5`}}></i>
</div>
<h3 className="font-semibold mb-2">التصميم الإبداعي</h3>
<p className="text-white/70 text-sm">مصممون محترفون للهوية البصرية</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-4">
<div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-3">
<i className="text-green-400" data-lucide="trending-up" style={{width: `24px`, height: `24px`, strokeWidth: `1.5`}}></i>
</div>
<h3 className="font-semibold mb-2">التسويق الرقمي</h3>
<p className="text-white/70 text-sm">استراتيجيات تسويقية فعالة</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-4">
<div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-3">
<i className="text-orange-400" data-lucide="users" style={{width: `24px`, height: `24px`, strokeWidth: `1.5`}}></i>
</div>
<h3 className="font-semibold mb-2">إدارة المشاريع</h3>
<p className="text-white/70 text-sm">متابعة وتنسيق مستمر</p>
</div>
</div>
</div>
<div className="relative">
<div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/10 p-8">
<div className="text-center mb-8">
<div className="text-4xl font-bold mb-2">5</div>
<p className="text-white/70">أعضاء الفريق الأساسي</p>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
<span className="text-white font-semibold font-en">CEO</span>
</div>
<div>
<div className="font-semibold">المؤسس والمدير التنفيذي</div>
<div className="text-white/70 text-sm">القيادة والرؤية الاستراتيجية</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
<span className="text-white font-semibold font-en">CMO</span>
</div>
<div>
<div className="font-semibold">مدير التسويق</div>
<div className="text-white/70 text-sm">الوصول للعملاء والنمو</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
<i className="text-white" data-lucide="code" style={{width: `24px`, height: `24px`, strokeWidth: `1.5`}}></i>
</div>
<div>
<div className="font-semibold">مطور متقدم</div>
<div className="text-white/70 text-sm">تطوير وبرمجة المواقع</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-20 border-t border-white/10 pt-16" id="plans">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">الباقات والأسعار</h2>
<p className="text-white/70 text-lg max-w-2xl mx-auto">خطط مرنة تناسب احتياجات مشروعك</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
<div className="mb-6">
<h3 className="text-xl font-semibold mb-2">الباقة الأساسية</h3>
<div className="text-3xl font-bold mb-2">5,000 ريال</div>
<p className="text-white/70 text-sm">موقع إلكتروني بسيط</p>
</div>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3">
<i className="text-green-400" data-lucide="check" style={{width: `16px`, height: `16px`, strokeWidth: `1.5`}}></i>
<span className="text-sm">تصميم متجاوب</span>
</div>
<div className="flex items-center gap-3">
<i className="text-green-400" data-lucide="check" style={{width: `16px`, height: `16px`, strokeWidth: `1.5`}}></i>
<span className="text-sm">5 صفحات داخلية</span>
</div>
<div className="flex items-center gap-3">
<i className="text-green-400" data-lucide="check" style={{width: `16px`, height: `16px`, strokeWidth: `1.5`}}></i>
<span className="text-sm">نماذج التواصل</span>
</div>
<div className="flex items-center gap-3">
<i className="text-green-400" data-lucide="check" style={{width: `16px`, height: `16px`, strokeWidth: `1.5`}}></i>
<span className="text-sm">دعم لمدة شهر</span>
</div>
</div>
<a className="block text-center bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm font-medium hover:bg-white/20 transition-colors" href="#contact">
          اختر الباقة
        </a>
</div>

<div className="bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 rounded-2xl p-6 hover:from-white/15 hover:to-white/10 transition-all duration-300 relative">
<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
<span className="bg-white text-neutral-900 px-3 py-1 rounded-full text-xs font-medium">الأكثر طلباً</span>
</div>
<div className="mb-6">
<h3 className="text-xl font-semibold mb-2">الباقة الاحترافية</h3>
<div className="text-3xl font-bold mb-2">12,000 ريال</div>
<p className="text-white/70 text-sm">موقع متكامل أو متجر إلكتروني</p>
</div>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3">
<i className="text-green-400" data-lucide="check" style={{width: `16px`, height: `16px`, strokeWidth: `1.5`}}></i>
<span className="text-sm">كل مميزات الباقة الأساسية</span>
</div>
<div className="flex items-center gap-3">
<i className="text-green-400" data-lucide="check" style={{width: `16px`, height: `16px`, strokeWidth: `1.5`}}></i>
<span className="text-sm">متجر إلكتروني على سلة</span>
</div>
<div className="flex items-center gap-3">
<i className="text-green-400" data-lucide="check" style={{width: `16px`, height: `16px`, strokeWidth: `1.5`}}></i>
<span className="text-sm">تكامل وسائل الدفع</span>
</div>
<div className="flex items-center gap-3">
<i className="text-green-400" data-lucide="check" style={{width: `16px`, height: `16px`, strokeWidth: `1.5`}}></i>
<span className="text-sm">تدريب على الإدارة</span>
</div>
<div className="flex items-center gap-3">
<i className="text-green-400" data-lucide="check" style={{width: `16px`, height: `16px`, strokeWidth: `1.5`}}></i>
<span className="text-sm">دعم لمدة 3 أشهر</span>
</div>
</div>
<a className="block text-center bg-white text-neutral-900 rounded-full px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors" href="#contact">
          اختر الباقة
        </a>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
<div className="mb-6">
<h3 className="text-xl font-semibold mb-2">الباقة المتقدمة</h3>
<div className="text-3xl font-bold mb-2">20,000+ ريال</div>
<p className="text-white/70 text-sm">حلول مخصصة للشركات</p>
</div>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3">
<i className="text-green-400" data-lucide="check" style={{width: `16px`, height: `16px`, strokeWidth: `1.5`}}></i>
<span className="text-sm">كل المميزات السابقة</span>
</div>
<div className="flex items-center gap-3">
<i className="text-green-400" data-lucide="check" style={{width: `16px`, height: `16px`, strokeWidth: `1.5`}}></i>
<span className="text-sm">تطوير مخصص</span>
</div>
<div className="flex items-center gap-3">
<i className="text-green-400" data-lucide="check" style={{width: `16px`, height: `16px`, strokeWidth: `1.5`}}></i>
<span className="text-sm">تكامل أنظمة متقدم</span>
</div>
<div className="flex items-center gap-3">
<i className="text-green-400" data-lucide="check" style={{width: `16px`, height: `16px`, strokeWidth: `1.5`}}></i>
<span className="text-sm">استشارة تقنية مستمرة</span>
</div>
<div className="flex items-center gap-3">
<i className="text-green-400" data-lucide="check" style={{width: `16px`, height: `16px`, strokeWidth: `1.5`}}></i>
<span className="text-sm">دعم لمدة 6 أشهر</span>
</div>
</div>
<a className="block text-center bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm font-medium hover:bg-white/20 transition-colors" href="#contact">
          تواصل معنا
        </a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-20 mb-16 border-t border-white/10 pt-16" id="contact">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 sm:p-12">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.07),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.06),transparent_60%)]"></div>
</div>
<div className="relative">
<div className="text-center mb-12">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            انقر... وتقدم <span className="text-white/70">للأمام</span>
</h2>
<p className="text-xl text-white/70 max-w-2xl mx-auto">
            ابدأ رحلتك الرقمية معنا اليوم واحصل على استشارة مجانية
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
<div className="text-center">
<div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
<i className="text-blue-400" data-lucide="phone" style={{width: `32px`, height: `32px`, strokeWidth: `1.5`}}></i>
</div>
<h3 className="font-semibold mb-2">اتصل بنا</h3>
<p className="text-white/70 font-en text-lg">+966 50 123 4567</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
<i className="text-green-400" data-lucide="mail" style={{width: `32px`, height: `32px`, strokeWidth: `1.5`}}></i>
</div>
<h3 className="font-semibold mb-2">راسلنا</h3>
<p className="text-white/70 font-en text-lg">hello@tapforward.sa</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
<i className="text-purple-400" data-lucide="calendar" style={{width: `32px`, height: `32px`, strokeWidth: `1.5`}}></i>
</div>
<h3 className="font-semibold mb-2">احجز موعد</h3>
<p className="text-white/70">استشارة مجانية لمدة 30 دقيقة</p>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center gap-3 bg-white text-neutral-900 rounded-full px-8 py-4 text-lg font-medium hover:bg-white/90 transition-colors" href="tel:+966501234567">
<i data-lucide="phone" style={{width: `20px`, height: `20px`, strokeWidth: `1.5`}}></i>
<span>احصل على استشارة مجانية الآن</span>
</a>
</div>
<div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
<p>© 2025 TAPFORWARD — تاب فوروارد. جميع الحقوق محفوظة.</p>
<p className="mt-2">مانيلا، الفلبين | نخدم السوق السعودي</p>
</div>
</div>
</div>
</section>


    </>
  );
}
