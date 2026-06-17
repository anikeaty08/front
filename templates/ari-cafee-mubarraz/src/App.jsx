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



        // Initialize Icons
        lucide.createIcons();

        // Language Toggle Logic
        const langToggleBtn = document.getElementById('langToggle');
        const htmlElement = document.documentElement;

        langToggleBtn.addEventListener('click', () => {
            const currentDir = htmlElement.getAttribute('dir');
            if (currentDir === 'ltr') {
                htmlElement.setAttribute('dir', 'rtl');
                htmlElement.setAttribute('lang', 'ar');
            } else {
                htmlElement.setAttribute('dir', 'ltr');
                htmlElement.setAttribute('lang', 'en');
            }
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
      

<nav className="fixed z-50 transition-all duration-300 bg-[#FDFBF7]/80 w-full border-[#E7D6BA]/40 border-b top-0 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-1 font-[Outfit,sans-serif] text-2xl font-medium tracking-tight" href="#home">
<span className="inline-flex items-center"><img alt="ARi logo" className="block md:h-10 w-auto h-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3214bd7-d1fd-46bd-8ffc-071ca150220e_320w.png"/></span>
</a>

<div className="hidden md:flex items-center gap-8 text-lg">
<a className="hover:text-[#DFAA5E] transition-colors ltr:block rtl:hidden" href="#menu">Menu</a>
<a className="hover:text-[#DFAA5E] transition-colors rtl:block ltr:hidden" href="#menu">القائمة</a>
<a className="hover:text-[#DFAA5E] transition-colors ltr:block rtl:hidden" href="#about">Our Story</a>
<a className="hover:text-[#DFAA5E] transition-colors rtl:block ltr:hidden" href="#about">قصتنا</a>
<a className="hover:text-[#DFAA5E] transition-colors ltr:block rtl:hidden" href="#reviews">Reviews</a>
<a className="hover:text-[#DFAA5E] transition-colors rtl:block ltr:hidden" href="#reviews">الآراء</a>
</div>

<div className="flex items-center gap-4">
<button className="text-sm font-medium px-3 py-1.5 rounded-full border border-[#E7D6BA] hover:bg-[#E7D6BA]/20 transition-colors" id="langToggle">
<span className="ltr:block rtl:hidden">عربي</span>
<span className="rtl:block ltr:hidden">EN</span>
</button>
<a className="hidden md:flex items-center gap-2 bg-[#401C0C] text-[#FDFBF7] px-5 py-2.5 rounded-full hover:bg-[#401C0C]/90 transition-colors" href="#contact">
<span className="font-[Outfit,sans-serif] font-medium ltr:block rtl:hidden">Order</span>
<span className="font-[Outfit,sans-serif] font-medium rtl:block ltr:hidden">اطلب</span>
</a>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden flex min-h-[90vh] pt-48 pb-32 relative items-center" id="home" style={{backgroundImage: 'linear-gradient(to bottom, rgba(26,11,5,0.7), rgba(64,28,12,0.95)), url(\'https: //images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="z-10 flex flex-col text-center w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">
<span className="px-4 py-1.5 rounded-full bg-[#DFAA5E]/20 text-[#DFAA5E] border border-[#DFAA5E]/30 text-base mb-8 flex items-center gap-2 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="coffee" strokeWidth="1.5"></i>
<span className="ltr:block rtl:hidden">Now Open Until Midnight</span>
<span className="rtl:block ltr:hidden">مفتوح الآن حتى منتصف الليل</span>
</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight font-[Outfit,sans-serif] text-[#FDFBF7] mb-6 max-w-4xl leading-tight">
<span className="ltr:block rtl:hidden">The Fine Art of <br/> Every Detail.</span>
<span className="rtl:block ltr:hidden text-4xl md:text-6xl lg:text-7xl leading-snug">الفن الراقي في <br/> كل تفصيلة.</span>
</h1>
<p className="text-xl md:text-2xl text-[#E7D6BA] mb-12 max-w-2xl font-light leading-relaxed">
<span className="ltr:block rtl:hidden">Crafted with passion in a cozy, modern atmosphere. Experience premium coffee like never before.</span>
<span className="rtl:block ltr:hidden">محضرة بشغف في أجواء عصرية ومريحة. استمتع بتجربة قهوة فاخرة لا مثيل لها.</span>
</p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
<a className="w-full sm:w-auto bg-[#DFAA5E] text-[#401C0C] px-8 py-4 rounded-full font-[Outfit,sans-serif] font-medium text-lg hover:bg-[#c9964b] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#DFAA5E]/20" href="#contact">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
<span className="ltr:block rtl:hidden">Order via WhatsApp</span>
<span className="rtl:block ltr:hidden">اطلب عبر واتساب</span>
</a>
<a className="w-full sm:w-auto bg-white/10 text-[#FDFBF7] backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-[Outfit,sans-serif] font-medium text-lg hover:bg-white/20 transition-colors flex items-center justify-center" href="#menu">
<span className="ltr:block rtl:hidden">View Menu</span>
<span className="rtl:block ltr:hidden">عرض المنيو</span>
</a>
</div>
</div>
</section>

<section className="lg:py-32 pt-24 pb-24" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight font-[Outfit,sans-serif] mb-4">
<span className="ltr:block rtl:hidden">Curated Selection</span>
<span className="rtl:block ltr:hidden">خياراتنا المميزة</span>
</h2>
<p className="text-lg text-[#401C0C]/70">
<span className="ltr:block rtl:hidden">Discover our signature offerings</span>
<span className="rtl:block ltr:hidden">اكتشف تشكيلتنا الخاصة</span>
</p>
</div>

<div className="flex flex-wrap justify-center gap-3 mb-12">
<button className="px-6 py-2 rounded-full bg-[#401C0C] text-[#FDFBF7] text-lg font-medium transition-colors">
<span className="ltr:block rtl:hidden">All</span>
<span className="rtl:block ltr:hidden">الكل</span>
</button>
<button className="px-6 py-2 rounded-full bg-white border border-[#E7D6BA] text-[#401C0C] hover:bg-[#FDFBF7] text-lg transition-colors">
<span className="ltr:block rtl:hidden">Coffee</span>
<span className="rtl:block ltr:hidden">قهوة</span>
</button>
<button className="px-6 py-2 rounded-full bg-white border border-[#E7D6BA] text-[#401C0C] hover:bg-[#FDFBF7] text-lg transition-colors">
<span className="ltr:block rtl:hidden">Desserts</span>
<span className="rtl:block ltr:hidden">حلويات</span>
</button>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-3xl p-4 border border-[#E7D6BA]/40 shadow-sm hover:shadow-xl transition-all duration-300">
<div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-[#FDFBF7] relative">
<img alt="V60" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1610889556528-9a770e32642f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-2">
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl font-medium tracking-tight font-[Outfit,sans-serif]">
<span className="ltr:block rtl:hidden">V60 Pour Over</span>
<span className="rtl:block ltr:hidden">في 60</span>
</h3>
</div>
<p className="text-lg text-[#401C0C]/60 line-clamp-2 mb-6 font-light">
<span className="ltr:block rtl:hidden">Single origin beans carefully brewed for a clean, complex profile.</span>
<span className="rtl:block ltr:hidden">حبوب أحادية المصدر محضرة بعناية لمذاق نقي ومعقد.</span>
</p>
</div>
</div>

<div className="group bg-white rounded-3xl p-4 border border-[#E7D6BA]/40 shadow-sm hover:shadow-xl transition-all duration-300">
<div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-[#FDFBF7] relative">
<img alt="ARI Latte" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-[#DFAA5E] text-[#401C0C] text-xs font-medium px-3 py-1 rounded-full uppercase tracking-widest font-[Outfit,sans-serif]">Signature</div>
</div>
<div className="px-2">
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl font-medium tracking-tight font-[Outfit,sans-serif]">
<span className="ltr:block rtl:hidden">Ari Latte</span>
<span className="rtl:block ltr:hidden">آري لاتيه</span>
</h3>
</div>
<p className="text-lg text-[#401C0C]/60 line-clamp-2 mb-6 font-light">
<span className="ltr:block rtl:hidden">Our secret blend with a touch of toasted caramel and sea salt.</span>
<span className="rtl:block ltr:hidden">خلطتنا السرية مع لمسة من الكراميل المحمص وملح البحر.</span>
</p>
</div>
</div>

<div className="group bg-white rounded-3xl p-4 border border-[#E7D6BA]/40 shadow-sm hover:shadow-xl transition-all duration-300">
<div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-[#FDFBF7] relative">
<img alt="Tiramisu" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/01e6a608-d4cd-4fb2-ac20-53cb78889692/800w.png"/>
</div>
<div className="px-2">
<div className="flex justify-between items-start mb-2">
<h3 className="text-2xl font-medium tracking-tight font-[Outfit,sans-serif]">
<span className="ltr:block rtl:hidden">Classic Tiramisu</span>
<span className="rtl:block ltr:hidden">تيراميسو كلاسيك</span>
</h3>
</div>
<p className="text-lg text-[#401C0C]/60 line-clamp-2 mb-6 font-light">
<span className="ltr:block rtl:hidden">Authentic Italian recipe using our own espresso blend.</span>
<span className="rtl:block ltr:hidden">وصفة إيطالية أصلية باستخدام خليط الإسبريسو الخاص بنا.</span>
</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white border-y border-[#E7D6BA]/30 relative overflow-hidden" id="about">

<div className="absolute top-0 right-0 w-1/2 h-full bg-[#FDFBF7] rounded-l-[100px] -z-10 hidden lg:block"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
<img alt="Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-[#401C0C]/10 mix-blend-overlay"></div>
</div>
<div className="flex flex-col justify-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight font-[Outfit,sans-serif] mb-8 leading-tight">
<span className="ltr:block rtl:hidden">More than coffee.<br/>A modern sanctuary.</span>
<span className="rtl:block ltr:hidden text-3xl md:text-4xl">أكثر من مجرد قهوة.<br/>ملاذ عصري.</span>
</h2>
<div className="space-y-6 text-lg text-[#401C0C]/70 font-light leading-relaxed">
<p className="ltr:block rtl:hidden">
                            At Ari Cafe, we believe in the harmony of deep, rich flavors and a comforting environment. Our space, characterized by warm wood tones and modern aesthetics, is designed to be your escape from the everyday.
                        </p>
<p className="rtl:block ltr:hidden">
                            في آري كافيه، نؤمن بتناغم النكهات الغنية والعميقة مع البيئة المريحة. مساحتنا، التي تتميز بدرجات الخشب الدافئة والجماليات العصرية، مصممة لتكون ملاذك بعيداً عن صخب الحياة اليومية.
                        </p>
<p className="ltr:block rtl:hidden">
                            Every cup poured is a testament to our commitment to quality, sourcing only the finest beans and treating them with the respect they deserve.
                        </p>
<p className="rtl:block ltr:hidden">
                            كل كوب يُسكب هو دليل على التزامنا بالجودة، حيث نختار أجود أنواع البن ونعاملها بالاحترام الذي تستحقه.
                        </p>
</div>
<div className="mt-12 grid grid-cols-2 gap-8 pt-10 border-t border-[#E7D6BA]/50">
<div>
<div className="text-3xl font-medium font-[Outfit,sans-serif] text-[#DFAA5E] mb-2">100%</div>
<div className="text-base text-[#401C0C]/60 ltr:block rtl:hidden">Arabica Beans</div>
<div className="text-base text-[#401C0C]/60 rtl:block ltr:hidden">حبوب أرابيكا</div>
</div>
<div>
<div className="text-3xl font-medium font-[Outfit,sans-serif] text-[#DFAA5E] mb-2">Artisan</div>
<div className="text-base text-[#401C0C]/60 ltr:block rtl:hidden">Pastries Daily</div>
<div className="text-base text-[#401C0C]/60 rtl:block ltr:hidden">مخبوزات طازجة يومياً</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 pt-24 pb-24" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight font-[Outfit,sans-serif] mb-4">
<span className="ltr:block rtl:hidden">Community Love</span>
<span className="rtl:block ltr:hidden">ماذا يقول عملاؤنا</span>
</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl border border-[#E7D6BA]/40 shadow-sm flex flex-col justify-between">
<div className="">
<div className="flex gap-1 mb-6 text-[#DFAA5E]">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-[#401C0C]/80 mb-8 font-light italic">
<span className="ltr:block rtl:hidden">"The Ari Latte is a game changer. The ambiance makes it the perfect spot to work or catch up with friends. High-end feel without being pretentious."</span>
<span className="rtl:block ltr:hidden">"آري لاتيه يغير قواعد اللعبة. الأجواء تجعله المكان المثالي للعمل أو لقاء الأصدقاء. شعور راقي ومريح جداً."</span>
</p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-[#E7D6BA] rounded-full flex items-center justify-center font-[Outfit,sans-serif] font-medium text-[#401C0C]">S</div>
<div>
<div className="font-medium font-[Outfit,sans-serif]">Sarah M.</div>
<div className="text-sm text-[#401C0C]/50">Local Guide</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-[#E7D6BA]/40 shadow-sm flex flex-col justify-between">
<div>
<div className="flex gap-1 mb-6 text-[#DFAA5E]">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-[#401C0C]/80 mb-8 font-light italic">
<span className="ltr:block rtl:hidden">"Incredible V60 selection. You can tell the baristas really know their craft. The interior design with the dark woods and green tiles is stunning."</span>
<span className="rtl:block ltr:hidden">"تشكيلة في 60 مذهلة. يمكنك ملاحظة احترافية الباريستا. التصميم الداخلي مع الأخشاب الداكنة رائع."</span>
</p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-[#E7D6BA] rounded-full flex items-center justify-center font-[Outfit,sans-serif] font-medium text-[#401C0C]">A</div>
<div>
<div className="font-medium font-[Outfit,sans-serif]">Ahmed K.</div>
<div className="text-sm text-[#401C0C]/50">Coffee Enthusiast</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-[#E7D6BA]/40 shadow-sm flex flex-col justify-between">
<div className="">
<div className="flex gap-1 mb-6 text-[#DFAA5E]">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-[#401C0C]/80 mb-8 font-light italic">
<span className="ltr:block rtl:hidden">"Fastest WhatsApp ordering process. I order 10 mins before arriving and it's always ready. Excellent service!"</span>
<span className="rtl:block ltr:hidden">"أسرع عملية طلب عبر الواتساب. أطلب قبل وصولي بـ 10 دقائق وتكون جاهزة دائماً. خدمة ممتازة!"</span>
</p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-[#E7D6BA] rounded-full flex items-center justify-center font-[Outfit,sans-serif] font-medium text-[#401C0C]">F</div>
<div>
<div className="font-medium font-[Outfit,sans-serif]">Faisal R.</div>
<div className="text-sm text-[#401C0C]/50">Regular Customer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#401C0C] text-[#FDFBF7] relative" id="contact">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight font-[Outfit,sans-serif] mb-6">
<span className="ltr:block rtl:hidden">Skip the line.<br/>Order instantly.</span>
<span className="rtl:block ltr:hidden text-3xl md:text-4xl">تجاوز الطابور.<br/>اطلب فوراً.</span>
</h2>
<p className="text-xl text-[#E7D6BA] mb-12 font-light">
<span className="ltr:block rtl:hidden">Use our integrated system to place your order or ask us any questions. We reply in seconds.</span>
<span className="rtl:block ltr:hidden">استخدم نظامنا المدمج لتقديم طلبك أو طرح أي أسئلة. نرد في ثوانٍ.</span>
</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-[#DFAA5E]/20 flex items-center justify-center shrink-0 mt-1">
<i className="w-5 h-5 text-[#DFAA5E]" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div className="">
<h3 className="font-[Outfit,sans-serif] text-xl font-medium mb-2 ltr:block rtl:hidden">Visit Us</h3>
<h3 className="font-[Outfit,sans-serif] text-xl font-medium mb-2 rtl:block ltr:hidden">موقعنا</h3>
<p className="text-lg text-[#E7D6BA]/80 font-light">
<span className="ltr:block rtl:hidden">123 Premium Boulevard<br/>Downtown District</span>
<span className="rtl:block ltr:hidden">١٢٣ شارع بريميوم<br/>منطقة وسط المدينة</span>
</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-[#DFAA5E]/20 flex items-center justify-center shrink-0 mt-1">
<i className="w-5 h-5 text-[#DFAA5E]" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div className="">
<h3 className="font-[Outfit,sans-serif] text-xl font-medium mb-2 ltr:block rtl:hidden">Opening Hours</h3>
<h3 className="font-[Outfit,sans-serif] text-xl font-medium mb-2 rtl:block ltr:hidden">ساعات العمل</h3>
<p className="text-lg text-[#E7D6BA]/80 font-light">
<span className="ltr:block rtl:hidden">Everyday: 7:00 AM - 12:00 AM</span>
<span className="rtl:block ltr:hidden">يومياً: ٧:٠٠ صباحاً - ١٢:٠٠ منتصف الليل</span>
</p>
</div>
</div>
</div>
</div>

<div className="relative w-full h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#DFAA5E]/30 flex flex-col transform lg:-translate-y-12">

<div className="bg-[#FDFBF7] text-[#401C0C] p-5 flex justify-between items-center border-b border-[#E7D6BA]/50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#401C0C] rounded-full flex items-center justify-center">
<i className="w-5 h-5 text-[#DFAA5E]" data-lucide="coffee" strokeWidth="1.5"></i>
</div>
<div>
<div className="font-[Outfit,sans-serif] font-medium tracking-tight text-lg leading-none mb-1">Ari Cafe</div>
<div className="text-xs text-green-600 font-medium flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span className="ltr:block rtl:hidden">Online</span>
<span className="rtl:block ltr:hidden">متصل</span>
</div>
</div>
</div>
<i className="w-5 h-5 text-[#401C0C]/50" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</div>

<div className="flex-grow relative bg-[#F4F1EA]">

<iframe className="w-full h-full border-none" src="about:blank" title="Order Widget"></iframe>

<div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center pointer-events-none">
<div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
<i className="w-8 h-8 text-[#DFAA5E]" data-lucide="message-square-dashed" strokeWidth="1.5"></i>
</div>
<h4 className="font-[Outfit,sans-serif] text-2xl font-medium text-[#401C0C] mb-2">
<span className="ltr:block rtl:hidden">Order System Ready</span>
<span className="rtl:block ltr:hidden">نظام الطلب جاهز</span>
</h4>
<p className="text-lg text-[#401C0C]/60 font-light">
<span className="ltr:block rtl:hidden">Embedded conversion widget goes here.</span>
<span className="rtl:block ltr:hidden">أداة الطلب المدمجة توضع هنا.</span>
</p>
<div className="mt-8 px-6 py-3 bg-green-500 text-white rounded-full flex items-center gap-2 text-base font-medium opacity-50">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
                                Start Chat
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="text-[#E7D6BA] bg-[#1A0B05] border-[#401C0C] border-t pt-12 pb-12">
<div className="flex flex-col md:flex-row gap-6 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex gap-1 text-2xl font-medium tracking-tight font-[Outfit,sans-serif] items-center">
<span className="">AR</span>
<span className="relative flex items-center justify-center">
                    I
                    <i className="absolute -top-1 -right-2 w-3 h-3 text-[#DFAA5E] fill-[#DFAA5E]" data-lucide="star" strokeWidth="1.5"></i>
</span>
</div>
<div className="text-base text-[#E7D6BA]/60 font-light">
<span className="ltr:block rtl:hidden">© 2024 Ari Cafe. All rights reserved.</span>
<span className="rtl:block ltr:hidden">© ٢٠٢٤ آري كافيه. جميع الحقوق محفوظة.</span>
</div>
<div className="flex gap-4">
<a className="hover:text-[#DFAA5E] transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="hover:text-[#DFAA5E] transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 bg-[#DFAA5E] text-[#401C0C] px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-[#c9964b] hover:-translate-y-1 transition-all duration-300 group border border-[#DFAA5E]/50" href="#contact">
<span className="font-[Outfit,sans-serif] font-medium text-lg ltr:block rtl:hidden">Order Now</span>
<span className="font-[Outfit,sans-serif] font-medium text-lg rtl:block ltr:hidden">اطلب الآن</span>
<i className="w-5 h-5 group-hover:translate-x-1 transition-transform ltr:block rtl:hidden" data-lucide="arrow-right" strokeWidth="1.5"></i>
<i className="w-5 h-5 group-hover:-translate-x-1 transition-transform rtl:block ltr:hidden" data-lucide="arrow-left" strokeWidth="1.5"></i>
</a>



    </>
  );
}
