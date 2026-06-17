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



      function switchPricing(t){document.querySelectorAll('[id^="tab-"]').forEach(function(e){e.className="px-6 py-2.5 rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 cursor-pointer"});var c=document.getElementById("tab-"+t);c.className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-white text-black shadow-lg shadow-white/5 cursor-default",document.querySelectorAll(".pricing-category").forEach(function(e){e.classList.add("hidden")}),document.getElementById("pricing-"+t).classList.remove("hidden")}
    
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
      

<div className="noise-bg"></div>

<div className="fixed top-0 right-0 -z-10 w-[45rem] h-[45rem] bg-[#FA704B] rounded-full blur-[140px] opacity-[0.12] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
<div className="fixed bottom-0 left-0 -z-10 w-[35rem] h-[35rem] bg-[#C6EEFF] rounded-full blur-[120px] opacity-[0.06] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

<nav className="w-full fixed top-0 z-40 border-b border-white/5 backdrop-blur-xl bg-black/70">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

<a className="text-xl font-semibold tracking-tight text-white z-50 group flex items-center gap-3" href="#">
<span className="w-2.5 h-2.5 rounded-full bg-[#FA704B] group-hover:shadow-[0_0_15px_#FA704B] transition-shadow duration-500"></span>
          MONOVA
        </a>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-light text-zinc-400 hover:text-white transition-colors duration-300" href="#about">
            من نحن
          </a>
<a className="text-sm font-light text-zinc-400 hover:text-white transition-colors duration-300" href="#services">
            خدماتنا
          </a>
<a className="text-sm font-light text-zinc-400 hover:text-white transition-colors duration-300" href="#pricing">
            الباقات
          </a>
<a className="text-sm font-light text-zinc-400 hover:text-white transition-colors duration-300" href="#philosophy">
            لماذا مونوفا
          </a>
</div>

<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium text-black bg-[#FCEFE0] rounded-full hover:bg-white hover:scale-105 transition-all duration-300" href="#contact">
          ابدأ مشروعك
        </a>

<button className="md:hidden text-white opacity-80">
<iconify-icon icon="solar:hamburger-menu-linear" width="26"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-48 pb-32 overflow-hidden min-h-screen flex flex-col justify-center">
<div className="max-w-7xl mx-auto px-6 w-full relative z-10">
<div className="max-w-4xl">

<div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-light text-[#FA704B] mb-8 tracking-wide">
<iconify-icon icon="solar:rocket-2-linear" width="14"></iconify-icon>
<span>الإبداع خارج حدود الجاذبية</span>
</div>

<h1 className="reveal reveal-delay-1 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.1] mb-8 text-white">
            نصمّم تجارب رقمية
            <br/>
<span className="text-gradient">تُفكّر، تشعر، وتُحقّق نتائج</span>
</h1>

<p className="reveal reveal-delay-2 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mb-12 font-light">
            مونوفا وكالة إبداعية رقمية نعمل على بناء العلامات، تصميم التجارب،
            وتسويق الأفكار بطريقة ذكية تخدم أهداف الأعمال.
          </p>

<div className="reveal reveal-delay-3 flex flex-wrap gap-4">
<a className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-[#FA704B] rounded-full overflow-hidden transition-all duration-300 hover:bg-[#ff8564]" href="#contact">
<span className="relative z-10">ابدأ مشروعك معنا</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white border border-white/10 rounded-full hover:bg-white/5 transition-all duration-300 group" href="#services">
<span>استعرض خدماتنا</span>
<iconify-icon className="mr-2 transition-transform group-hover:-translate-x-1" icon="solar:arrow-left-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
</header>

<section className="py-32 bg-[#FCEFE0] text-zinc-900 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
<div className="sticky top-32">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 leading-tight">
              مونوفا، أكثر من
              <br/>
              مجرد تصميم.
            </h2>
<div className="w-20 h-1.5 bg-black mb-8"></div>
<div className="flex gap-4 mt-8">
<div className="px-4 py-2 bg-black/5 rounded-lg border border-black/5 text-sm">
                استراتيجية
              </div>
<div className="px-4 py-2 bg-black/5 rounded-lg border border-black/5 text-sm">
                تجربة
              </div>
<div className="px-4 py-2 bg-black/5 rounded-lg border border-black/5 text-sm">
                نتائج
              </div>
</div>
</div>
<div className="">
<p className="text-lg md:text-xl leading-loose font-light text-zinc-700 mb-8">
              مونوفا هي وكالة إبداعية رقمية تؤمن أن التصميم الحقيقي يبدأ بالفهم
              قبل الشكل. نحن نحلل الفكرة، ندرس المستخدم، ونبني تجربة رقمية
              متكاملة تجمع بين
              <span className="font-medium text-black">
                الجمال، الوضوح، والوظيفة.
              </span>
</p>
<p className="text-lg md:text-xl leading-loose font-light text-zinc-700 mb-8">
              نعمل مع العلامات التجارية التي تبحث عن حضور قوي، هوية واضحة،
              وتجربة استخدام تُقنع وتُكمل رحلة العميل بسلاسة.
            </p>
<p className="text-lg md:text-xl leading-loose font-medium text-black">
              في مونوفا، كل قرار تصميمي له سبب، وكل تفصيلة لها هدف.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-black border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
<div>
<span className="text-[#FA704B] text-xs font-semibold tracking-widest uppercase mb-3 block">
              الخدمات
            </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              ماذا نقدم؟
            </h2>
</div>
<p className="text-zinc-500 max-w-md text-sm leading-relaxed font-light">
            حلول رقمية متكاملة تغطي كل جانب من جوانب تواجدك الرقمي.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#FA704B] mb-6">
<iconify-icon icon="solar:figma-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">UI/UX Design</h3>
<p className="text-zinc-400 text-sm leading-relaxed font-light">
              تصميم واجهات وتجارب مستخدم مبنية على البحث، تحليل السلوك، واختبار
              قابلية الاستخدام لضمان تجربة سلسة وفعالة.
            </p>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#C6EEFF] mb-6">
<iconify-icon icon="solar:palette-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">
              Branding &amp; Identity
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed font-light">
              بناء هوية بصرية متكاملة تشمل الشعار، الألوان، الخطوط، ونبرة
              العلامة لخلق صورة ذهنية قوية ومتناسقة.
            </p>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#FDDDB4] mb-6">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">
              Web &amp; App Design
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed font-light">
              تصميم مواقع وتطبيقات حديثة، مرنة، وسهلة الاستخدام، متوافقة مع
              مختلف الأجهزة.
            </p>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#EFFBFB] mb-6">
<iconify-icon icon="solar:megaphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">
              Digital Marketing
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed font-light">
              استراتيجيات تسويق ذكية: إدارة السوشيال ميديا، الحملات الإعلانية،
              وتحسين الظهور الرقمي.
            </p>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#FA704B] mb-6">
<iconify-icon icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">
              Visual Production
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed font-light">
              تصوير منتجات وبراندات، فيديوهات قصيرة (Reels)، موشن جرافيك
              وأنيميشن بجودة عالية.
            </p>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#C6EEFF] mb-6">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Design Systems</h3>
<p className="text-zinc-400 text-sm leading-relaxed font-light">
              إنشاء أنظمة تصميم تساعد الفرق على العمل بسرعة، الحفاظ على الاتساق،
              والتوسع بسهولة.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black border-t border-white/5 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-[#FDDDB4] text-xs font-semibold tracking-widest uppercase mb-3 block">
            الأسعار
          </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            باقات تناسب نموك
          </h2>
<p className="text-zinc-500 max-w-2xl mx-auto text-sm font-light">
            اختر الباقة المناسبة لأهدافك ومرحلة مشروعك الحالي.
          </p>
</div>

<div className="flex justify-center mb-16">
<div className="inline-flex bg-zinc-900/80 p-1.5 rounded-full border border-white/10 relative z-10 backdrop-blur-sm">
<button className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-white text-black shadow-lg shadow-white/5 cursor-default" id="tab-marketing" onclick="switchPricing('marketing')">
              باقات التسويق
            </button>
<button className="px-6 py-2.5 rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 cursor-pointer" id="tab-branding" onclick="switchPricing('branding')">
              الهوية البصرية
            </button>
<button className="hover:text-white transition-all duration-300 cursor-pointer text-sm font-medium text-zinc-400 rounded-full pt-2.5 pr-6 pb-2.5 pl-6" id="tab-uiux" onclick="switchPricing('uiux')">
              UI/UX Design
            </button>
</div>
</div>

<div className="flex flex-col gap-10 pricing-category transition-all duration-500" id="pricing-marketing">
<div className="text-center">
<h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              باقات التسويق الرقمي
            </h3>
<p className="text-zinc-500 font-light">تواجد ذكي، مؤثر، ويحقق نتائج</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-[2rem] border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-500 flex flex-col relative overflow-hidden">
<div className="mb-8 relative z-10">
<div className="w-12 h-12 rounded-2xl bg-[#FA704B]/10 flex items-center justify-center text-[#FA704B] mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">البداية</h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">
                  التواجد الأساسي للشركات الناشئة التي تبحث عن بداية صحيحة.
                </p>
</div>
<ul className="space-y-4 mb-10 flex-1 relative z-10">
<li className="flex items-center gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-[#FA704B]" icon="solar:check-read-linear" width="18"></iconify-icon>
                  خطة محتوى شهرية
                </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-[#FA704B]" icon="solar:check-read-linear" width="18"></iconify-icon>
                  إدارة حسابات التواصل
                </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-[#FA704B]" icon="solar:check-read-linear" width="18"></iconify-icon>
                  تصميم البوستات والستوري
                </li>
</ul>
<div className="mt-auto border-t border-white/5 pt-6 relative z-10">
<div className="flex items-center justify-between">
<span className="text-zinc-500 text-xs font-light">
                    الاستثمار الشهري
                  </span>
<span className="text-sm font-light text-zinc-400">1.5M IQD</span>
</div>
</div>
</div>

<div className="group p-8 rounded-[2rem] border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-500 flex flex-col relative overflow-hidden">
<div className="mb-8 relative z-10">
<div className="w-12 h-12 rounded-2xl bg-[#C6EEFF]/10 flex items-center justify-center text-[#C6EEFF] mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">النمو</h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">
                  للشركات التي تجاوزت مرحلة التأسيس وتبحث عن توسيع نطاق الوصول.
                </p>
</div>
<ul className="space-y-4 mb-10 flex-1 relative z-10">
<li className="flex items-center gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-[#C6EEFF]" icon="solar:check-read-linear" width="18"></iconify-icon>
                  استراتيجية محتوى متقدمة
                </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-[#C6EEFF]" icon="solar:check-read-linear" width="18"></iconify-icon>
                  ريلز وموشن جرافيك
                </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-[#C6EEFF]" icon="solar:check-read-linear" width="18"></iconify-icon>
                  تقارير أداء دورية
                </li>
</ul>
<div className="mt-auto border-t border-white/5 pt-6 relative z-10">
<div className="flex items-center justify-between">
<span className="text-zinc-500 text-xs font-light">
                    الاستثمار الشهري
                  </span>
<span className="text-sm font-light text-zinc-400">
                    2.25M IQD
                  </span>
</div>
</div>
</div>

<div className="group p-8 rounded-[2rem] border border-[#FA704B]/20 bg-zinc-900/40 hover:bg-zinc-900/60 transition-all duration-500 flex flex-col relative overflow-hidden shadow-2xl shadow-[#FA704B]/5">
<div className="absolute top-0 right-0 p-6 opacity-50">
<iconify-icon className="text-[#FA704B]" icon="solar:star-bold" width="24"></iconify-icon>
</div>
<div className="mb-8 relative z-10">
<div className="w-12 h-12 rounded-2xl bg-[#FDDDB4]/10 flex items-center justify-center text-[#FDDDB4] mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:crown-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">الهيمنة</h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">
                  حلول تسويقية متكاملة للعلامات التي تقود السوق.
                </p>
</div>
<ul className="space-y-4 mb-10 flex-1 relative z-10">
<li className="flex items-center gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-[#FDDDB4]" icon="solar:star-linear" width="18"></iconify-icon>
                  مدير حساب مخصص
                </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-[#FDDDB4]" icon="solar:star-linear" width="18"></iconify-icon>
                  إدارة حملات إعلانية كاملة
                </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-[#FDDDB4]" icon="solar:star-linear" width="18"></iconify-icon>
                  إنتاج إبداعي غير محدود
                </li>
</ul>
<div className="mt-auto border-t border-white/5 pt-6 relative z-10">
<div className="flex items-center justify-between">
<span className="text-zinc-500 text-xs font-light">
                    الاستثمار الشهري
                  </span>
<span className="text-sm font-light text-zinc-400">5.0M IQD</span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden flex flex-col gap-10 pricing-category transition-all duration-500" id="pricing-branding">
<div className="text-center">
<h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              باقات الهوية البصرية
            </h3>
<p className="text-zinc-500 font-light">
              هوية تُبنى لتعيش، مو مجرد شكل
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-6 rounded-[2rem] border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-500 flex flex-col overflow-hidden">
<div className="w-full aspect-[4/3] bg-gradient-to-br from-zinc-800 to-black rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
<div className="absolute inset-0 bg-[url('https://api.iconify.design/solar:graph-up-linear.svg?color=%23333')] opacity-20 bg-center"></div>
<iconify-icon className="text-zinc-500 relative z-10" icon="solar:pen-new-square-linear" width="48"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
                هوية البداية
              </h3>
<p className="text-sm text-zinc-400 font-normal mb-6">
                الأساسيات الضرورية لإنطلاق واثق.
              </p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-[#FA704B] mt-1" icon="solar:check-read-linear" width="16"></iconify-icon>
                  تصميم شعار احترافي
                </li>
<li className="flex gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-[#FA704B] mt-1" icon="solar:check-read-linear" width="16"></iconify-icon>
                  ألوان مدروسة نفسياً
                </li>
<li className="flex gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-[#FA704B] mt-1" icon="solar:check-read-linear" width="16"></iconify-icon>
                  خطوط متناسقة
                </li>
</ul>
<div className="pt-4 border-t border-white/5 flex justify-between items-center">
<span className="text-xs text-zinc-500 font-light">
                  استثمار المشروع
                </span>
<span className="text-sm text-zinc-400 font-light">800K IQD</span>
</div>
</div>

<div className="group relative p-6 rounded-[2rem] border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-white/20 transition-all duration-500 flex flex-col overflow-hidden">
<div className="w-full aspect-[4/3] bg-gradient-to-br from-[#1a1a1a] to-black rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FA704B] to-transparent"></div>
<div className="flex gap-4">
<div className="w-12 h-16 bg-zinc-800 rounded border border-white/5"></div>
<div className="w-12 h-16 bg-[#FA704B]/20 rounded border border-[#FA704B]/20 flex items-center justify-center text-[#FA704B]">
<iconify-icon icon="solar:bookmark-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
                الهوية الكاملة
              </h3>
<p className="text-sm text-zinc-400 font-normal mb-6">
                بناء صورة ذهنية قوية ومتكاملة.
              </p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-[#C6EEFF] mt-1" icon="solar:check-read-linear" width="16"></iconify-icon>
                  نظام شعار كامل (Logo System)
                </li>
<li className="flex gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-[#C6EEFF] mt-1" icon="solar:check-read-linear" width="16"></iconify-icon>
                  دليل استخدام الهوية (Brand Guide)
                </li>
<li className="flex gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-[#C6EEFF] mt-1" icon="solar:check-read-linear" width="16"></iconify-icon>
                  تطبيقات الهوية والسوشيال
                </li>
</ul>
<div className="pt-4 border-t border-white/5 flex justify-between items-center">
<span className="text-xs text-zinc-500 font-light">
                  استثمار المشروع
                </span>
<span className="text-sm text-zinc-400 font-light">1.5M IQD</span>
</div>
</div>

<div className="group relative p-6 rounded-[2rem] border border-[#FA704B]/20 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-[#FA704B]/30 transition-all duration-500 flex flex-col overflow-hidden">
<div className="w-full aspect-[4/3] bg-gradient-to-br from-[#FA704B]/5 to-black rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
<iconify-icon className="text-[#FA704B]/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow" icon="solar:atom-linear" style={{animationDuration: '10s'}} width="64"></iconify-icon>
<span className="relative z-10 text-xs tracking-widest uppercase text-[#FA704B] font-medium bg-[#FA704B]/10 px-3 py-1 rounded-full border border-[#FA704B]/20">
                  System
                </span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
                نظام براند متكامل
              </h3>
<p className="text-sm text-zinc-400 font-normal mb-6">
                استراتيجية بصرية للعلامات القيادية.
              </p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-[#FDDDB4] mt-1" icon="solar:star-linear" width="16"></iconify-icon>
                  استراتيجية الظهور الرقمي
                </li>
<li className="flex gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-[#FDDDB4] mt-1" icon="solar:star-linear" width="16"></iconify-icon>
                  نظام بصري شامل وممتد
                </li>
<li className="flex gap-3 text-sm text-zinc-300 font-normal">
<iconify-icon className="text-[#FDDDB4] mt-1" icon="solar:star-linear" width="16"></iconify-icon>
                  دعم فني واستشاري
                </li>
</ul>
<div className="pt-4 border-t border-white/5 flex justify-between items-center">
<span className="text-xs text-zinc-500 font-light">
                  استثمار المشروع
                </span>
<span className="text-sm text-zinc-400 font-light">3.0M IQD</span>
</div>
</div>
</div>
</div>

<div className="hidden flex flex-col gap-10 pricing-category transition-all duration-500" id="pricing-uiux">
<div className="text-center">
<h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              باقات تصميم UI/UX
            </h3>
<p className="text-zinc-500 font-light">نصمم تجربة… مو بس واجهة</p>
</div>
<div className="grid grid-cols-1 gap-6">

<div className="group p-8 rounded-[2rem] bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-all duration-500 grid grid-cols-1 md:grid-cols-4 items-center gap-8">
<div className="md:col-span-1">
<h3 className="text-lg font-semibold text-white mb-2">
                  تحسين (Audit)
                </h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">
                  تحليل ومعالجة المشاكل السريعة.
                </p>
<div className="mt-4 inline-flex items-center gap-2 text-xs text-[#FA704B] bg-[#FA704B]/5 px-3 py-1.5 rounded-full">
<iconify-icon icon="solar:bug-linear"></iconify-icon>
<span>Quick Fixes</span>
</div>
</div>
<div className="md:col-span-2 flex items-center justify-center gap-4 text-zinc-600">
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 border border-white/5">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px]">تحليل</span>
</div>
<div className="h-px w-12 bg-white/10"></div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-[#FA704B] border border-[#FA704B]/20">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px]">معالجة</span>
</div>
</div>
<div className="md:col-span-1 text-left md:text-left flex justify-between md:block">
<span className="block text-xs text-zinc-500 font-light mb-1">
                  يبدأ من
                </span>
<span className="text-sm text-zinc-300 font-light">1.0M IQD</span>
</div>
</div>

<div className="group p-8 rounded-[2rem] bg-gradient-to-r from-zinc-900/40 to-zinc-900/20 border border-white/10 hover:border-white/20 transition-all duration-500 grid grid-cols-1 md:grid-cols-4 items-center gap-8">
<div className="md:col-span-1">
<h3 className="text-lg font-semibold text-white mb-2">
                  تصميم منتج
                </h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">
                  رحلة تصميم كاملة من الفكرة للتسليم.
                </p>
<div className="mt-4 inline-flex items-center gap-2 text-xs text-[#C6EEFF] bg-[#C6EEFF]/5 px-3 py-1.5 rounded-full">
<iconify-icon icon="solar:smartphone-linear"></iconify-icon>
<span>App &amp; Web</span>
</div>
</div>
<div className="md:col-span-2">
<div className="flex items-center justify-between relative">
<div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10"></div>
<div className="flex flex-col items-center gap-3 bg-black/50 backdrop-blur px-2 py-1 rounded">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
</div>
<span className="text-[10px] text-zinc-500">بحث</span>
</div>
<div className="flex flex-col items-center gap-3 bg-black/50 backdrop-blur px-2 py-1 rounded">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:ruler-pen-linear" width="16"></iconify-icon>
</div>
<span className="text-[10px] text-zinc-500">هيكلة</span>
</div>
<div className="flex flex-col items-center gap-3 bg-black/50 backdrop-blur px-2 py-1 rounded">
<div className="w-8 h-8 rounded-full bg-[#C6EEFF]/10 border border-[#C6EEFF]/20 flex items-center justify-center text-[#C6EEFF]">
<iconify-icon icon="solar:palette-linear" width="16"></iconify-icon>
</div>
<span className="text-[10px] text-[#C6EEFF]">تصميم</span>
</div>
<div className="flex flex-col items-center gap-3 bg-black/50 backdrop-blur px-2 py-1 rounded">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:code-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-[10px] text-zinc-500">تسليم</span>
</div>
</div>
</div>
<div className="md:col-span-1 text-left md:text-left flex justify-between md:block">
<span className="block text-xs text-zinc-500 font-light mb-1">
                  يبدأ من
                </span>
<span className="text-sm text-zinc-300 font-light">2.0M IQD</span>
</div>
</div>

<div className="group p-8 rounded-[2rem] bg-zinc-900/20 border border-[#FA704B]/20 hover:bg-zinc-900/40 transition-all duration-500 grid grid-cols-1 md:grid-cols-4 items-center gap-8">
<div className="md:col-span-1">
<h3 className="text-lg font-semibold text-white mb-2">
                  شراكة رقمية
                </h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed">
                  فريق تصميم كامل يعمل معك.
                </p>
<div className="mt-4 inline-flex items-center gap-2 text-xs text-[#FDDDB4] bg-[#FDDDB4]/5 px-3 py-1.5 rounded-full">
<iconify-icon icon="solar:infinite-linear"></iconify-icon>
<span>Unlimited</span>
</div>
</div>
<div className="md:col-span-2 flex items-center justify-center">
<div className="flex gap-2">
<div className="px-4 py-2 rounded-lg border border-white/5 bg-white/5 text-xs text-zinc-300">
                    Design System
                  </div>
<div className="px-4 py-2 rounded-lg border border-white/5 bg-white/5 text-xs text-zinc-300">
                    Ongoing Support
                  </div>
<div className="px-4 py-2 rounded-lg border border-[#FA704B]/20 bg-[#FA704B]/5 text-xs text-[#FA704B]">
                    Scale
                  </div>
</div>
</div>
<div className="md:col-span-1 text-left md:text-left flex justify-between md:block">
<span className="block text-xs text-zinc-500 font-light mb-1">
                  شهرياً
                </span>
<span className="text-sm text-zinc-300 font-light">4.0M IQD</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FCEFE0] text-black" id="philosophy">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="py-24 px-6 md:px-16 border-b lg:border-b-0 lg:border-l border-black/5">
<span className="text-[#FA704B] text-xs font-semibold tracking-widest uppercase mb-4 block">
            المميزات
          </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            لماذا مونوفا؟
          </h2>
<ul className="space-y-8">
<li className="flex items-start gap-5">
<div className="mt-1 flex-shrink-0 text-[#FA704B] bg-[#FA704B]/10 p-2 rounded-full">
<iconify-icon icon="solar:tuning-square-2-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg mb-1">
                  تصميم مبني على استراتيجية
                </h4>
<p className="text-zinc-600 text-sm font-light leading-relaxed">
                  نحول الأهداف التجارية إلى حلول بصرية فعالة.
                </p>
</div>
</li>
<li className="flex items-start gap-5">
<div className="mt-1 flex-shrink-0 text-[#FA704B] bg-[#FA704B]/10 p-2 rounded-full">
<iconify-icon icon="solar:user-heart-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg mb-1">فهم حقيقي للمستخدم</h4>
<p className="text-zinc-600 text-sm font-light leading-relaxed">
                  نضع العميل النهائي في قلب العملية التصميمية.
                </p>
</div>
</li>
<li className="flex items-start gap-5">
<div className="mt-1 flex-shrink-0 text-[#FA704B] bg-[#FA704B]/10 p-2 rounded-full">
<iconify-icon icon="solar:target-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-lg mb-1">وضوح في الأهداف</h4>
<p className="text-zinc-600 text-sm font-light leading-relaxed">
                  شفافية كاملة وخطوات مدروسة نحو النجاح.
                </p>
</div>
</li>
</ul>
</div>

<div className="py-24 px-6 md:px-16 bg-black text-white flex flex-col justify-center relative overflow-hidden">

<div className="absolute top-0 right-0 w-80 h-80 bg-[#FA704B] rounded-full blur-[120px] opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-60 h-60 bg-[#C6EEFF] rounded-full blur-[100px] opacity-10 pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
<div className="relative z-10">
<iconify-icon className="text-zinc-600 mb-8" icon="solar:quote-up-linear" width="40"></iconify-icon>
<blockquote className="text-3xl md:text-5xl font-medium leading-[1.3] tracking-tight mb-8">
              "نحن لا نصمّم لنُبهر فقط،
              
              بل لنُبسّط، نُقنع، ونبني تجربة
              <span className="text-[#FA704B]">تُحدث فرقاً</span>
              ."
            </blockquote>
<div className="flex items-center gap-3">
<div className="w-8 h-px bg-zinc-700"></div>
<span className="text-xs text-zinc-400 tracking-wide uppercase">
                فلسفة مونوفا
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-36 bg-black relative overflow-hidden text-center border-t border-white/5" id="contact">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-tr from-[#FA704B] to-[#FDDDB4] rounded-full blur-[180px] opacity-[0.1] pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-8">
          اختر الخدمة، واحنا نهتم بالباقي
        </h2>
<p className="text-xl text-zinc-400 font-light mb-12">
          باقات مرنة، أسعار واضحة، وتنفيذ احترافي.
        </p>
<a className="group relative inline-flex items-center justify-center px-12 py-5 text-base font-medium text-zinc-900 bg-[#FCEFE0] rounded-full overflow-hidden transition-all duration-300 hover:scale-105" href="mailto:hello@monova.agency">
<span className="relative z-10">تواصل معنا</span>
<iconify-icon className="mr-2 relative z-10 transition-transform group-hover:translate-x-[-4px]" icon="solar:plain-3-linear" width="20"></iconify-icon>
<div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
</a>
</div>
</section>

<footer className="bg-black border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="text-center md:text-right">
<div className="flex items-center justify-center md:justify-start gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-[#FA704B]"></span>
<span className="text-white text-xl font-medium tracking-tight">
                MONOVA
              </span>
</div>
<p className="text-zinc-500 text-sm font-light">
              الإبداع خارج حدود الجاذبية
            </p>
</div>
<div className="flex items-center gap-6">
<a className="text-zinc-500 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10" href="#">
<iconify-icon icon="solar:brand-tiktok-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-zinc-600">
<p>Monova © Digital Creative Agency</p>
<div className="flex gap-6">
<a className="hover:text-zinc-400 transition-colors" href="#">
              سياسة الخصوصية
            </a>
<a className="hover:text-zinc-400 transition-colors" href="#">
              الشروط والأحكام
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
