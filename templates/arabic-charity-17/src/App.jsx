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
      

<nav className="absolute top-0 w-full z-50 border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
<svg className="lucide lucide-heart-handshake w-6 h-6 text-white" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight" style={{}}>بصمة خير</span>
</div>
<div className="hidden md:flex items-center gap-8 text-white/90 text-base font-medium">
<a className="hover:text-white transition-colors" href="#" style={{}}>الرئيسية</a>
<a className="hover:text-white transition-colors" href="#" style={{}}>تبرع</a>
<a className="hover:text-white transition-colors" href="#" style={{}}>المميزات</a>
<a className="hover:text-white transition-colors" href="#" style={{}}>تطوع</a>
<a className="hover:text-white transition-colors" href="#" style={{}}>من نحن</a>
</div>
<div className="flex items-center gap-4">
<button className="text-white hover:text-white/80 transition-colors">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 border border-white/30 rounded-lg text-white font-medium hover:bg-white hover:text-blue-800 transition-all duration-300 text-sm" href="#" style={{}}>
                    تبرع الآن
                </a>
<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<header className="overflow-hidden lg:pt-40 lg:pb-32 bg-blue-700 pt-32 pb-20 relative">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
<div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl" style={{}}></div>
<div className="absolute top-1/2 -left-24 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/50 border border-blue-500/50 text-blue-100 text-xs font-medium uppercase tracking-wider" style={{}}>
<span style={{}}>مهمتنا الإنسانية</span>
</div>
<h1 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.15] font-alexandria" style={{}}>
                        ساعد الناس، اصنع <br className="hidden lg:block"/> تغييرات كبيرة <br/> وساعد هذا العالم.
                    </h1>
<p className="leading-relaxed text-lg text-blue-100/90 max-w-xl" style={{}}>
                        نحن نكتشف رواد الأعمال الاجتماعيين الناشئين ونستثمر بعمق في نمو أفكارهم وقدراتهم. هدفنا بناء
                        شبكة واسعة لدعم هؤلاء القادة وهم يحلون أكبر مشاكل العالم.
                    </p>
<div className="flex flex-wrap gap-4 pt-2">
<a className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-800 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20" href="#" style={{}}>
                            ابدأ التبرع
                        </a>
<a className="inline-flex items-center justify-center px-6 py-3 border border-blue-400 text-white rounded-lg font-medium hover:bg-blue-600/50 transition-colors" href="#" style={{}}>
                            كيف نعمل
                        </a>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" style={{}}></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
<img alt="Volunteers" className="transform transition-transform duration-700 hover:scale-105 w-full h-auto object-cover" src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="bg-white/95 max-w-xs border-blue-100 border rounded pt-5 pr-5 pb-5 pl-5 absolute bottom-6 left-6 shadow-lg backdrop-blur-md">
<div className="flex items-center gap-4 mb-3">
<div className="bg-blue-100 p-2 rounded-lg text-blue-700" style={{}}>
<svg className="lucide lucide-package w-6 h-6" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline className="" points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<div className="">
<p className="text-sm font-semibold text-indigo-900" style={{}}>حملة الشتاء</p>
<p className="text-xs text-indigo-500" style={{}}>تم جمع ٨٠٪ من الهدف</p>
</div>
</div>
<div className="w-full bg-indigo-100 rounded-full h-2 overflow-hidden" style={{}}>
<div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 text-white/20">
<svg className="" fill="none" height="100" viewbox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M50 0L50 100M0 50L100 50" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl lg:text-4xl font-semibold text-indigo-900 tracking-tight mb-6 font-alexandria" style={{}}>
                    اكتشاف قادة أصحاب رؤية</h2>
<p className="text-lg text-indigo-500 leading-relaxed" style={{}}>
                    نحن نجد وندعم الأشخاص الذين يمتلكون أفضل الأفكار للتأثير الإيجابي على العالم. من خلال برنامجنا
                    المكثف وما بعده.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="space-y-16 text-center md:text-left">
<div className="group">
<h3 className="text-4xl font-semibold text-cyan-500 mb-2 font-alexandria" style={{}}>863</h3>
<p className="text-base text-indigo-600" style={{}}>شخص تمت مساعدتهم <br/>بواسطة بصمة خير</p>
</div>
<div className="group">
<h3 className="text-4xl font-semibold text-cyan-500 mb-2 font-alexandria" style={{}}>86</h3>
<p className="text-base text-indigo-600" style={{}}>دولة نصنع فيها <br/>الفارق الحقيقي</p>
</div>
</div>

<div className="relative flex justify-center">
<div className="relative w-64 h-64 bg-[#E8Ccb5] rounded-lg shadow-xl flex items-center justify-center transform rotate-3 border-b-8 border-r-8 border-[#Cba585]">
<div className="absolute inset-4 border-2 border-dashed border-[#8d6e53]/30 rounded flex items-center justify-center bg-[#f3e6db]">
<span className="text-2xl font-bold text-blue-500/80 tracking-widest uppercase font-alexandria" style={{}}>تـبـرعـات</span>
</div>

<svg className="absolute -top-12 -left-12 w-24 h-24 text-teal-500 transform rotate-45 hidden md:block" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 11l5-5m0 0l5 5m-5-5v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<svg className="absolute -bottom-12 -right-12 w-24 h-24 text-teal-500 transform -rotate-135 hidden md:block" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 11l5-5m0 0l5 5m-5-5v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<div className="space-y-16 text-center md:text-right">
<div className="group">
<h3 className="text-4xl font-semibold text-cyan-500 mb-2 font-alexandria" style={{}}>$50.4M</h3>
<p className="text-base text-indigo-600" style={{}}>أموال تم توزيعها على <br/>المحتاجين حول العالم</p>
</div>
<div className="group">
<h3 className="text-4xl font-semibold text-cyan-500 mb-2 font-alexandria" style={{}}>68%</h3>
<p className="text-base text-indigo-600" style={{}}>من الزملاء بقوا في <br/>القطاع الاجتماعي</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-indigo-50 overflow-hidden" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl lg:text-4xl font-semibold text-indigo-900 tracking-tight mb-6 font-alexandria" style={{}}>اختر قضيتك الإنسانية</h2>
<p className="text-lg text-indigo-600 mb-8 leading-relaxed" style={{}}>
                        سنقوم بإنشاء صفحة مقصودة مخصصة تناسب قضيتك. نحن نعلم أن علامتك التجارية مهمة لقضيتك. هدفنا ليس
                        فقط تعزيز عطائك الواعي والخيري، ولكن أيضًا تكييفه ليناسب احتياجاتك وأسلوبك.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0" style={{}}>
<svg className="lucide lucide-check w-3 h-3 text-blue-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-base text-indigo-700" style={{}}>100% من الأموال التي يتم جمعها تذهب نحو هدفك العام</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0" style={{}}>
<svg className="lucide lucide-check w-3 h-3 text-blue-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-base text-indigo-700" style={{}}>عزز عطائك الواعي والخيري بسهولة</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0" style={{}}>
<svg className="lucide lucide-check w-3 h-3 text-blue-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-base text-indigo-700" style={{}}>اختر القضية التي تريد التبرع لها أو دع جمهورك يقرر</span>
</li>
</ul>
</div>

<div className="grid grid-cols-2 gap-4">
<img alt="Charity 1" className="rounded-2xl shadow-md w-full h-64 object-cover transform translate-y-8" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Charity 2" className="rounded-2xl shadow-md w-full h-64 object-cover" src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Charity 3" className="rounded-2xl shadow-md w-full h-64 object-cover transform translate-y-8" src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="w-full h-64 rounded-2xl bg-blue-100 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-smile w-16 h-16 text-blue-300" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
</div>
</div>
</div>
</section>

<section className="bg-blue-700 py-24 relative overflow-hidden" style={{}}>
<div className="absolute inset-0 opacity-10">
<svg className="h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
</svg>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-8 font-alexandria" style={{}}>
                أبوابنا مفتوحة دائمًا للمزيد من الأشخاص الذين يريدون دعم بعضهم البعض
            </h2>
<div className="flex justify-center gap-6 items-center">

<svg className="lucide lucide-hand-heart w-12 h-12 text-blue-200 opacity-50" data-lucide="hand-heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"></path><path d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95"></path><path d="m2 15 6 6"></path><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91"></path></svg>
<a className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-blue-800 transition-all font-medium" href="#" style={{}}>
                    شارك الآن
                    <svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</a>
<svg className="lucide lucide-heart w-12 h-12 text-blue-200 opacity-50" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl lg:text-4xl font-semibold text-indigo-900 tracking-tight mb-6 font-alexandria" style={{}}>
                        نربط المؤسسات غير الربحية والمانحين والشركات في كل بلد
                    </h2>
<p className="text-lg text-indigo-600 mb-8 leading-relaxed" style={{}}>
                        نساعد المؤسسات غير الربحية المحلية في الوصول إلى التمويل والأدوات والتدريب والدعم الذي يحتاجون
                        إليه ليصبحوا أكثر فعالية.
                    </p>
<a className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20 font-medium" href="#" style={{}}>
                        تبرع الآن
                        <svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</a>
</div>

<div className="grid sm:grid-cols-2 gap-8">

<div className="p-6 rounded-2xl bg-white border border-indigo-100 shadow-sm hover:shadow-md transition-shadow" style={{}}>
<div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-600 mb-4">
<svg className="lucide lucide-utensils w-6 h-6" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</div>
<h3 className="text-xl font-semibold text-indigo-900 mb-2" style={{}}>طعام صحي</h3>
<p className="text-sm text-indigo-500 leading-relaxed" style={{}}>يتم توفير المساعدة كغذاء صحي يستخدم
                            للطهي وتناول الطعام.</p>
</div>

<div className="p-6 rounded-2xl bg-white border border-indigo-100 shadow-sm hover:shadow-md transition-shadow" style={{}}>
<div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-4">
<svg className="lucide lucide-activity w-6 h-6" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-indigo-900 mb-2" style={{}}>مساعدة طبية</h3>
<p className="text-sm text-indigo-500 leading-relaxed" style={{}}>يتم توفير المساعدة كدواء للأمراض
                            المختلفة والرعاية الصحية.</p>
</div>

<div className="p-6 rounded-2xl bg-white border border-indigo-100 shadow-sm hover:shadow-md transition-shadow" style={{}}>
<div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-500 mb-4">
<svg className="lucide lucide-book-open w-6 h-6" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-indigo-900 mb-2" style={{}}>تعليم</h3>
<p className="text-sm text-indigo-500 leading-relaxed" style={{}}>منح المتسوقين نقرة واحدة للخروج في
                            أي مكان عبر الشبكة التعليمية.</p>
</div>

<div className="p-6 rounded-2xl bg-white border border-indigo-100 shadow-sm hover:shadow-md transition-shadow" style={{}}>
<div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-4" style={{}}>
<svg className="lucide lucide-droplet w-6 h-6" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-indigo-900 mb-2" style={{}}>مياه نظيفة</h3>
<p className="text-sm text-indigo-500 leading-relaxed" style={{}}>يتم توفير المساعدة كمياه نظيفة للشرب
                            والطبخ والاستحمام.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-indigo-50" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl lg:text-4xl font-semibold text-indigo-900 tracking-tight font-alexandria" style={{}}>تعرف
                    على حملاتنا</h2>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-full bg-white border border-indigo-200 flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-colors" style={{}}>
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors" style={{}}>
<svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden border border-indigo-100 shadow-sm group hover:shadow-lg transition-all duration-300" style={{}}>
<div className="h-56 overflow-hidden">
<img alt="Water" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-indigo-900 mb-3" style={{}}>صدقة جارية: تدفق المياه للأمة
                        </h3>
<p className="text-sm text-indigo-500 mb-6 line-clamp-2" style={{}}>المشاركة في بناء بئر واحد في
                            المناطق النائية أمر استثنائي بالفعل...</p>
<div className="w-full bg-indigo-100 rounded-full h-1.5 mb-6" style={{}}>
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '45%'}}></div>
</div>
<div className="flex justify-between items-end text-sm">
<div>
<span className="block text-indigo-400 text-xs mb-1" style={{}}>الهدف</span>
<span className="font-semibold text-indigo-900" style={{}}>$8,500</span>
</div>
<div className="text-center">
<span className="block text-indigo-400 text-xs mb-1" style={{}}>تم جمع</span>
<span className="font-semibold text-blue-600" style={{}}>$3,200</span>
</div>
<div className="text-left">
<span className="block text-indigo-400 text-xs mb-1" style={{}}>المنظم</span>
<span className="font-semibold text-indigo-900" style={{}}>مسجد النور</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-indigo-100 shadow-sm group hover:shadow-lg transition-all duration-300" style={{}}>
<div className="h-56 overflow-hidden">
<img alt="Child" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-indigo-900 mb-3" style={{}}>تحدي الإحسان: مساعدة مرضى
                            السرطان</h3>
<p className="text-sm text-indigo-500 mb-6 line-clamp-2" style={{}}>ساعد في مكافحة السرطان بتبرعك
                            الصادق، مهما كان تبرعك يمكن أن يساعد...</p>
<div className="w-full bg-indigo-100 rounded-full h-1.5 mb-6" style={{}}>
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '70%'}}></div>
</div>
<div className="flex justify-between items-end text-sm">
<div>
<span className="block text-indigo-400 text-xs mb-1" style={{}}>الهدف</span>
<span className="font-semibold text-indigo-900" style={{}}>$10,200</span>
</div>
<div className="text-center">
<span className="block text-indigo-400 text-xs mb-1" style={{}}>تم جمع</span>
<span className="font-semibold text-blue-600" style={{}}>$7,480</span>
</div>
<div className="text-left">
<span className="block text-indigo-400 text-xs mb-1" style={{}}>المنظم</span>
<span className="font-semibold text-indigo-900" style={{}}>يوشوا مارسيلوس</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-indigo-100 shadow-sm group hover:shadow-lg transition-all duration-300" style={{}}>
<div className="h-56 overflow-hidden">
<img alt="Education" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-indigo-900 mb-3" style={{}}>مساعدة الطلاب المحرومين ليصبحوا
                            حفاظ</h3>
<p className="text-sm text-indigo-500 mb-6 line-clamp-2" style={{}}>نريد دعوة الجميع ليكونوا
                            #آباء_بالكفالة من خلال تقديم الصدقات والتعويض...</p>
<div className="w-full bg-indigo-100 rounded-full h-1.5 mb-6" style={{}}>
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '30%'}}></div>
</div>
<div className="flex justify-between items-end text-sm">
<div>
<span className="block text-indigo-400 text-xs mb-1" style={{}}>الهدف</span>
<span className="font-semibold text-indigo-900" style={{}}>$12,600</span>
</div>
<div className="text-center">
<span className="block text-indigo-400 text-xs mb-1" style={{}}>تم جمع</span>
<span className="font-semibold text-blue-600" style={{}}>$3,600</span>
</div>
<div className="text-left">
<span className="block text-indigo-400 text-xs mb-1" style={{}}>المنظم</span>
<span className="font-semibold text-indigo-900" style={{}}>رواد الإحسان</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-0 bg-white overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl lg:text-5xl font-semibold text-indigo-900 tracking-tight mb-6 font-alexandria" style={{}}>
                ادعم رؤيتنا لمستقبل أفضل
            </h2>
<p className="text-lg text-indigo-500 mb-8 max-w-2xl mx-auto" style={{}}>
                جاهز لإحداث تأثير في الحياة، انضم إلى مجتمعنا لتوزيع التبرعات ويمكنك التطوع لمساعدة الآخرين.
            </p>
<a className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 font-medium" href="#" style={{}}>
                انضم الآن
            </a>
</div>

<div className="max-w-6xl mx-auto px-6 relative">
<img alt="Group of volunteers" className="w-full object-cover rounded-t-3xl mask-image-bottom" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900 to-transparent" style={{}}>
</div>
</div>
</section>

<footer className="bg-blue-900 text-white pt-20 pb-10" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="bg-white/10 p-1.5 rounded-lg">
<svg className="lucide lucide-heart-handshake w-6 h-6 text-white" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight" style={{}}>بصمة خير</span>
</div>
<p className="text-blue-200/80 text-sm leading-relaxed max-w-sm mb-6" style={{}}>
                        منصة بصمة خير الرقمية لجمع التبرعات وتوزيعها على المحتاجين حول العالم بشفافية ومصداقية.
                    </p>
<div className="flex gap-4">
<a className="text-blue-200 hover:text-white transition-colors" href="#" style={{}}><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-blue-200 hover:text-white transition-colors" href="#" style={{}}><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-blue-200 hover:text-white transition-colors" href="#" style={{}}><svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
<a className="text-blue-200 hover:text-white transition-colors" href="#" style={{}}><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>

<div>
<h4 className="font-semibold text-lg mb-6" style={{}}>القائمة</h4>
<ul className="space-y-4 text-sm text-blue-200/80" style={{}}>
<li><a className="hover:text-white transition-colors" href="#" style={{}}>التبرعات</a></li>
<li><a className="hover:text-white transition-colors" href="#" style={{}}>المميزات</a></li>
<li><a className="hover:text-white transition-colors" href="#" style={{}}>التصنيفات</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-lg mb-6" style={{}}>التصنيفات</h4>
<ul className="space-y-4 text-sm text-blue-200/80" style={{}}>
<li><a className="hover:text-white transition-colors" href="#" style={{}}>طعام صحي</a></li>
<li><a className="hover:text-white transition-colors" href="#" style={{}}>التعليم</a></li>
<li><a className="hover:text-white transition-colors" href="#" style={{}}>مياه نظيفة</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-lg mb-6" style={{}}>عن بصمة خير</h4>
<ul className="space-y-4 text-sm text-blue-200/80" style={{}}>
<li><a className="hover:text-white transition-colors" href="#" style={{}}>من نحن؟</a></li>
<li><a className="hover:text-white transition-colors" href="#" style={{}}>اتصل بنا</a></li>
<li><a className="hover:text-white transition-colors" href="#" style={{}}>الأسئلة الشائعة</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-300/60" style={{}}>
<p style={{}}>© 2024 بصمة خير. جميع الحقوق محفوظة.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#" style={{}}>سياسة الخصوصية</a>
<a className="hover:text-white" href="#" style={{}}>شروط الاستخدام</a>
<a className="hover:text-white" href="#" style={{}}>سياسة الإلغاء</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
