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



      document.getElementById("year").textContent = new Date().getFullYear();
    
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
      
<div className="min-h-screen flex flex-col">

<div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-orange-400/20 via-transparent to-transparent blur-3xl opacity-80"></div>

<header className="relative z-10 border-b border-orange-400/60 bg-white/80 backdrop-blur">
<div className="mx-auto max-w-6xl flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 py-4">
<a className="flex items-center gap-2" href="#">
<img alt="App Logo" className="h-8 w-8 rounded-xl object-contain" src="https://a.top4top.io/p_36146by281.jpg"/>
<span className="text-sm font-semibold tracking-tight text-slate-900">براكت | Pract</span>
</a>
</div>
</header>

<main className="relative z10 flex-1">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px- py-10 lg:py-20">
<div className="grid gap-12 lg:grid-cols-[minmax(01.1fr),minmax(0,1fr)] items-center">

<div className="space-y-4">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
               ! يا مرحبااا 
                </h1>
<p className="text-base sm:text-lg text-slate-700 max-w-xl">
</p><p className="text-base sm:text-lg text-slate-700 max-w-xl">
                    قربنا نطلق تطبيق براكت، اللي بيجمع لك تمرينك وتغذيتك في مكان واحد.وداعاً للتخمين، ومرحباً
                    بالنتائج المضمونة
                  </p>
<p></p>
<p className="text-base sm:text-lg text-slate-700 max-w-xl">
                      نبيك تكون من الأوائل اللي يجربون التطبيق قبل الكل! سجل إيميلك عشان توصلك دعوة الوصول المبكر
                                </p>
</div>

<div className="rounded-2xl border border-orange-400/60 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] p-4 sm:p-5 space-y-4 max-w-xl">
<div className="flex items-center gap-2 text-[0.7rem] text-slate-600">
<i className="lucide lucide-mail text-slate-500 text-xs" style={{strokeWidth: '1.5'}}></i>
<span>سجل و خصم 20% لك لحالك، وبتكون أول واحد يدري!</span>
</div>
<form action="https://example.com/your-endpoint" className="space-y-3" method="POST">
<div className="grid gap-3 sm:grid-cols-[minmax(0,1.3fr),minmax(0,0.9fr)]">
<label className="relative flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2 focus-within:border-orange-500/80 focus-within:bg-white transition-colors">
<i className="lucide lucide-at-sign mr-2 text-slate-400 text-xs" style={{strokeWidth: '1.5'}}></i>
<input className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none" name="email" placeholder="حط إيميلك هنا..." required="" type="email"/>
</label>
<button className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-orange-500/90 px-3.5 py-2 text-sm font-medium text-white shadow-sm shadow-orange-500/40 hover:bg-orange-400 transition-colors" type="submit">
<span>بلّغوني متى يشتغل Pract!</span>
<i className="lucide lucide-send text-[0.7rem]" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<p className="text-xs text-slate-600">
</p>
<div className="flex items-center gap-1 text-[0.7rem] text-slate-600">
<i className="lucide lucide-shield-check text-[0.7rem]" style={{strokeWidth: '1.5'}}></i>
<span>ودّع الجداول القديمة، وياهلا بالتدريب اللي على أصوله</span>
</div>
</div>
</form>
</div>

<div className="p-4 sm:p-5 space-y-3 bg-white/80">
<div className="flex items-center justify-between text-[0.7rem] text-slate-500 mb-1">
<span>رسائل من الفريق لكم</span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5">
</span></div>
<div className="space-y-1.5">

<div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-3 py-2.5">
<div className="flex items-center gap-2.5">
<div className="h-7 w-7 rounded-full bg-gradient-to-tr from-orange-500 to-orange-300 text-white text-xs font-semibold flex items-center justify-center">
                          F
                        </div>
<div>
<div className="text-xs font-medium text-slate-900 tracking-tight">
                            فهد الدليجان ، قائد الفريق
                          </div>
<p className="text-[0.65rem] text-slate-500">
                            راح نخلص التطبيق قبل نهاية السنه، انتظرونا
                          </p>
</div>
</div>
</div>
<div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5">
<div className="flex items-center gap-2.5">
<div className="h-7 w-7 rounded-full bg-gradient-to-tr from-sky-500 to-sky-300 text-white text-xs font-semibold flex items-center justify-center">
                          A
                        </div>
<div>
<div className="text-xs font-medium text-slate-900 tracking-tight">
                            احمد الدليجان ، قائد الترتيب
                          </div>
<p className="text-[0.65rem] text-slate-500">
                            راح نخلص التطبيق بداية السنه القادمة، انتظرونا
                          </p>
</div>
</div>
</div>
<div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5">
<div className="flex items-center gap-2.5">
<div className="h-7 w-7 rounded-full bg-gradient-to-tr from-emerald-500 to-lime-300 text-white text-xs font-semibold flex items-center justify-center">
                          Y
                        </div>
<div>
<div className="text-xs font-medium text-slate-900 tracking-tight">
                            يوسف ، قائد البرمجة
                          </div>
<p className="text-[0.65rem] text-slate-500">
                            لا تصدقون فهد و احمد
                          </p>
</div>
</div>
</div>
</div>
</div>

<section className="mt-١٠ lg:mt-20 space-y-8" id="features">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  ليش براكت غير عن الباقي؟
                </h2>
<p className="mt-3 text-base text-slate-700 max-w-2xl">
إذا كنت شخص صامل، بتفلّها معنا! لأننا ندعم أقوى التقنيات زي تقنية الجهد المتبقي و حاسبة حجم التمرين اللي ما تخطي. هذا
الأسلوب اللي بيخليك تتطور وتجلّد أرقامك القياسية كل مرة!

                </p>
<p className="mt-4 text-base text-slate-700 max-w-2xl">
في جانب التغذية، خلك مستعد تشوف إبداع وخاصيات ما قد مرت عليك في أي مكان، تضمن لك إنك ماشي على الطريق الصحيح للوصول لجسم
أحلامك
                                </p>
</div>
<div className="flex items-center gap-2 text-[0.7rem] text-slate-600">
<i className="lucide lucide-clock text-xs" style={{strokeWidth: '1.5'}}></i>
<span>Set up in under 10 minutes.</span>
</div>
</div>

<div className="rounded-2xl border border-orange-400/60 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] p-4 sm:p-5 space-y-4 max-w-xl">
<div className="flex items-center gap-2 text-[0.7rem] text-slate-600">
<i className="lucide lucide-mail text-slate-500 text-xs" style={{strokeWidth: '1.5'}}></i>
<span>سجل و خصم 20% لك لحالك، وبتكون أول واحد يدري!</span>
</div>
<form action="https://example.com/your-endpoint" className="space-y-3" method="POST">
<div className="grid gap-3 sm:grid-cols-[minmax(0,1.3fr),minmax(0,0.9fr)]">
<label className="relative flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2 focus-within:border-orange-500/80 focus-within:bg-white transition-colors">
<i className="lucide lucide-at-sign mr-2 text-slate-400 text-xs" style={{strokeWidth: '1.5'}}></i>
<input className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none" name="email" placeholder="حط إيميلك هنا..." required="" type="email"/>
</label>
<button className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-orange-500/90 px-3.5 py-2 text-sm font-medium text-white shadow-sm shadow-orange-500/40 hover:bg-orange-400 transition-colors" type="submit">
<span>بلّغوني متى يشتغل Pract!</span>
<i className="lucide lucide-send text-[0.7rem]" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<p className="text-xs text-slate-600">
</p>
<div className="flex items-center gap-1 text-[0.7rem] text-slate-600">
<i className="lucide lucide-shield-check text-[0.7rem]" style={{strokeWidth: '1.5'}}></i>
<span>ودّع الجداول القديمة، وياهلا بالتدريب اللي على أصوله</span>
</div>
</div>
</form>
</div>
</section></div>
</div>
</main></div>

<footer className="relative z-10 border-t border-orange-400/60 bg-white/90">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
<div className="flex items-center gap-2">
<span className="font-semibold tracking-tight text-slate-900">Flowstack</span>
<span className="text-slate-400">·</span>
<span>© <span id="year"></span> All rights reserved.</span>
</div>
<div className="flex flex-wrap items-center gap-4">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
