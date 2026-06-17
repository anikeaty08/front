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



tailwind.config = {
theme: {
extend: {
colors: {
cream: '#FCEFE0',
accent: '#FA704B', // Orange
highlight: '#FDDDB4', // Yellow
void: '#050505', // Deep Black
surface: '#0F0F0F',
},
fontFamily: {
sans: ['IBM Plex Sans Arabic', 'sans-serif'],
}
}
}
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
      

<nav className="w-full max-w-7xl mx-auto p-6 flex justify-between items-center z-20 relative">
<div className="text-xl tracking-widest font-medium uppercase text-white/90">
            Aura
        </div>
<button className="text-sm text-neutral-400 hover:text-white transition-colors duration-300">
            تواصل معنا
        </button>
</nav>

<main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 relative z-10">

<div className="text-center mb-16 space-y-4">
<h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-highlight leading-tight">
                الإبداع خارج <br className="md:hidden"/> <span className="text-cream">حدود الجاذبية.</span>
</h1>
<p className="text-neutral-500 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                باقات مصممة لتنقل علامتك التجارية من الظهور إلى الهيمنة.
            </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start relative">

<div className="glass-card rounded-3xl p-8 flex flex-col gap-6 group hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
<div className="space-y-2">
<h3 className="text-neutral-400 font-medium text-sm tracking-wide">Plan 01</h3>
<div className="text-2xl font-medium text-white tracking-tight">Starter Presence</div>
</div>
<div className="flex items-baseline gap-1 text-highlight">
<span className="text-3xl font-semibold tracking-tight">١.٥</span>
<span className="text-lg text-neutral-500 font-light">مليون / شهر</span>
</div>
<p className="text-sm text-neutral-400 font-light leading-relaxed min-h-[3rem]">
                    مناسب للبراندات الجديدة، بداية حضور مرتب بدون تعقيد.
                </p>
<div className="h-px w-full bg-white/5"></div>
<ul className="space-y-4 text-sm text-cream/80 font-light">
<li className="flex items-center gap-3">
<span className="iconify text-neutral-600" data-icon="lucide:check" data-width="18"></span>
                        ١٥ بوست (تصاميم احترافية)
                    </li>
<li className="flex items-center gap-3">
<span className="iconify text-neutral-600" data-icon="lucide:check" data-width="18"></span>
                        ١٥ ستوري تفاعلي
                    </li>
<li className="flex items-center gap-3">
<span className="iconify text-neutral-600" data-icon="lucide:check" data-width="18"></span>
                        ١ فيديو موشن (Animation)
                    </li>
<li className="flex items-center gap-3">
<span className="iconify text-neutral-600" data-icon="lucide:check" data-width="18"></span>
                        إدارة Instagram &amp; TikTok
                    </li>
<li className="flex items-center gap-3">
<span className="iconify text-neutral-600" data-icon="lucide:check" data-width="18"></span>
                        تخطيط محتوى + جدولة
                    </li>
</ul>
<div className="mt-auto pt-6">
<button className="w-full py-3 rounded-xl border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium">
                        ابدأ الآن
                    </button>
</div>
</div>

<div className="glass-card rounded-3xl p-8 flex flex-col gap-6 relative lg:-mt-4 lg:mb-4 bg-white/[0.03] border-accent/30 glow-hover transition-all duration-500 group">

<div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-void text-xs font-semibold px-3 py-1 rounded-full shadow-[0_0_20px_rgba(250,112,75,0.4)] z-10">
                    موصى به
                </div>
<div className="space-y-2 relative z-10">
<h3 className="text-accent font-medium text-sm tracking-wide">Plan 02</h3>
<div className="text-2xl font-medium text-white tracking-tight">Growth Mode</div>
</div>
<div className="flex items-baseline gap-1 text-highlight relative z-10">
<span className="text-4xl font-semibold tracking-tight">٢.٢٥</span>
<span className="text-lg text-neutral-500 font-light">مليون / شهر</span>
</div>
<p className="text-sm text-neutral-300 font-light leading-relaxed min-h-[3rem] relative z-10">
                    براند يريد يكبر ويبان بشكل أقوى مع تركيز على التفاعل.
                </p>
<div className="h-px w-full bg-accent/20"></div>
<ul className="space-y-4 text-sm text-cream font-light relative z-10">
<li className="flex items-center gap-3">
<span className="iconify text-accent" data-icon="lucide:check-circle" data-width="18"></span>
                        ٢٠ بوست
                    </li>
<li className="flex items-center gap-3">
<span className="iconify text-accent" data-icon="lucide:check-circle" data-width="18"></span>
                        ٣٠ ستوري
                    </li>
<li className="flex items-center gap-3">
<span className="iconify text-accent" data-icon="lucide:check-circle" data-width="18"></span>
                        ٢ فيديو موشن جرافيك
                    </li>
<li className="flex items-center gap-3">
<span className="iconify text-accent" data-icon="lucide:check-circle" data-width="18"></span>
                        إدارة Instagram &amp; TikTok شاملة
                    </li>
<li className="flex items-center gap-3">
<span className="iconify text-accent" data-icon="lucide:check-circle" data-width="18"></span>
                        تحسين الأداء البصري والـ Engagement
                    </li>
</ul>
<div className="mt-auto pt-6 relative z-10">
<button className="w-full py-3 rounded-xl bg-accent text-void hover:bg-highlight hover:shadow-[0_0_20px_rgba(253,221,180,0.3)] transition-all duration-300 text-sm font-semibold">
                        ابدأ النمو
                    </button>
</div>
</div>

<div className="glass-card rounded-3xl p-8 flex flex-col gap-6 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
<div className="space-y-2">
<h3 className="text-neutral-400 font-medium text-sm tracking-wide">Plan 03</h3>
<div className="text-2xl font-medium text-white tracking-tight">Domination</div>
</div>
<div className="flex items-baseline gap-1 text-highlight">
<span className="text-3xl font-semibold tracking-tight">٥</span>
<span className="text-lg text-neutral-500 font-light">مليون / شهر</span>
</div>
<p className="text-sm text-neutral-400 font-light leading-relaxed min-h-[3rem]">
                    براند يريد يسيطر مو بس يتواجد. حلول تسويقية متكاملة.
                </p>
<div className="h-px w-full bg-white/5"></div>
<ul className="space-y-4 text-sm text-cream/80 font-light">
<li className="flex items-center gap-3">
<span className="iconify text-neutral-500" data-icon="lucide:crown" data-width="18"></span>
                        جملة إعلانية قوية (Big Campaign)
                    </li>
<li className="flex items-center gap-3">
<span className="iconify text-neutral-500" data-icon="lucide:crown" data-width="18"></span>
                        مدير تسويق مخصص لحسابك
                    </li>
<li className="flex items-center gap-3">
<span className="iconify text-neutral-500" data-icon="lucide:crown" data-width="18"></span>
                        تخطيط استراتيجي + تنفيذ كامل
                    </li>
<li className="flex items-center gap-3">
<span className="iconify text-neutral-500" data-icon="lucide:crown" data-width="18"></span>
                        إدارة محتوى وإعلانات ومتابعة دقيقة
                    </li>
</ul>
<div className="mt-auto pt-6">
<button className="w-full py-3 rounded-xl border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium">
                        احجز استشارة
                    </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

<div className="glass-card rounded-3xl p-6 flex flex-col sm:flex-row gap-6 items-center border-accent/20 bg-gradient-to-r from-transparent to-accent/5">
<div className="flex-shrink-0 relative">
<div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10 overflow-hidden">
<span className="iconify text-neutral-600" data-icon="lucide:user" data-width="32"></span>
</div>
<div className="absolute -bottom-1 -right-1 bg-highlight text-void text-[10px] font-bold px-2 py-0.5 rounded-full">
                        76K
                    </div>
</div>
<div className="flex-grow text-center sm:text-right space-y-2">
<div className="flex items-center justify-center sm:justify-start gap-2">
<h4 className="text-lg font-medium text-white">Influencer Add-On</h4>
<span className="iconify text-accent" data-icon="lucide:flame" data-width="16"></span>
</div>
<p className="text-sm text-neutral-400 font-light">تعاون مع مؤثرة مختصة لزيادة الثقة والوصول.</p>
<div className="flex flex-wrap gap-3 justify-center sm:justify-start mt-2">
<span className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-cream">
                            تصوير فقط: 300$
                        </span>
<span className="text-xs px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent">
                            Collaboration كامل: 500$
                        </span>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-6 flex flex-col justify-center space-y-4">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
<span className="iconify" data-icon="lucide:rocket" data-width="20"></span>
</div>
<h4 className="text-lg font-medium text-white">Marketing Boost <span className="text-xs text-neutral-500 font-normal mr-2">(اختياري)</span></h4>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
<span className="text-sm text-neutral-300 font-light">إدارة حملات ترويج</span>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
<span className="text-sm text-neutral-300 font-light">تحليل أداء دقيق</span>
</div>
<div className="flex items-center gap-2 col-span-2">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
<span className="text-xs text-neutral-500 font-light">*ميزانية الترويج تُحسب بشكل منفصل</span>
</div>
</div>
</div>
</div>

<div className="mt-16 text-center border-t border-white/5 pt-8">
<p className="text-neutral-600 text-xs tracking-widest uppercase">
                Premium Agency Services © 2024
            </p>
</div>
</main>

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-highlight/5 rounded-full blur-[100px]"></div>
</div>

    </>
  );
}
