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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple Intersection Observer for scroll reveals
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Optional: Slow down tower on scroll
        window.addEventListener('scroll', () => {
            const tower = document.querySelector('.tower-stage');
            const scrolled = window.pageYOffset;
            tower.style.transform = `rotateY(${scrolled * 0.05}deg)`;
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
      

<nav className="fixed top-0 w-full z-[100] px-10 py-8 flex justify-between items-center mix-blend-difference">
<div className="text-2xl font-semibold tracking-tighter text-white">
            DAR<span className="text-amber-500">AL</span>SAMO
        </div>
<div className="hidden lg:flex gap-10 text-[10px] font-medium uppercase tracking-[0.4em] text-white/70">
<a className="hover:text-amber-500 transition-all" href="#vision">الرؤية</a>
<a className="hover:text-amber-500 transition-all" href="#projects">المشاريع</a>
<a className="hover:text-amber-500 transition-all" href="#engineering">الهندسة</a>
<a className="hover:text-amber-500 transition-all" href="#investment">الاستثمار</a>
<a className="hover:text-amber-500 transition-all" href="#contact">تواصل</a>
</div>
<button className="w-10 h-10 flex items-center justify-center bg-amber-500/10 border border-amber-500/20 text-amber-500">
<iconify-icon icon="solar:menu-dots-bold-duotone" width="24"></iconify-icon>
</button>
</nav>

<div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-6">
<div className="h-24 w-[1px] bg-white/10 mx-auto"></div>
<div className="flex flex-col gap-4 text-[9px] text-white/30 vertical-lr uppercase tracking-widest font-light">
<span>01 . HOME</span>
<span>02 . VISION</span>
<span>03 . PORTFOLIO</span>
<span>04 . LEGACY</span>
</div>
</div>

<main>

<section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
<div className="absolute inset-0 glow-overlay"></div>

<div className="absolute inset-0 flex items-center justify-center tower-viewport pointer-events-none">
<div className="tower-stage">
<div className="tower-face face-f"><div className="glass-shine"></div></div>
<div className="tower-face face-b"><div className="glass-shine"></div></div>
<div className="tower-face face-r"><div className="glass-shine"></div></div>
<div className="tower-face face-l"><div className="glass-shine"></div></div>

<div className="absolute -top-12 left-0 w-full h-12 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center" style={{transform: 'rotateX(90deg) translateZ(6px)'}}>
<div className="w-1 h-32 bg-amber-500 shadow-[0_0_30px_#d4af37]"></div>
</div>
</div>
</div>
<div className="relative z-10 text-center px-6">
<div className="mb-6 flex justify-center items-center gap-4 opacity-70">
<div className="h-[1px] w-12 bg-amber-500"></div>
<span className="text-xs uppercase tracking-[0.5em] text-amber-400">الرياض • المملكة العربية السعودية</span>
<div className="h-[1px] w-12 bg-amber-500"></div>
</div>
<h1 className="text-6xl md:text-9xl font-semibold tracking-tighter mb-8 leading-none">
                    نصيغ أفق <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-500 to-amber-800">المستقبل</span>
</h1>
<p className="text-sm md:text-lg text-stone-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
                    تطوير عقاري هندسي يتجاوز المألوف، نجمع بين الفخامة المعمارية وأعلى معايير الاستدامة لبناء أيقونات تليق برؤية 2030.
                </p>
<div className="flex justify-center gap-8">
<button className="px-10 py-5 bg-amber-600 text-slate-950 text-xs font-semibold uppercase tracking-widest hover:bg-amber-500 transition-all">تصفح المشاريع</button>
<button className="px-10 py-5 border border-white/10 text-white text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all">طلب استثمار</button>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
<iconify-icon icon="solar:mouse-minimalistic-linear" width="24"></iconify-icon>
</div>
</section>

<section className="py-32 px-10 md:px-20 grid lg:grid-cols-2 gap-20 items-center bg-slate-950/50" id="vision">
<div className="reveal">
<h2 className="text-xs uppercase tracking-[0.4em] text-amber-500 mb-6">من نحن</h2>
<h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 leading-tight">صناع النهضة العمرانية <br/> في قلب الجزيرة</h3>
<p className="text-stone-400 text-lg leading-relaxed mb-8">
                    تأسست دار السمو لتكون المحرك الرئيسي للمشاريع النوعية الكبرى. نحن نؤمن بأن كل مبنى هو قصة حضارة، وكل واجهة زجاجية هي مرآة لطموح لا حدود له.
                </p>
<div className="grid grid-cols-2 gap-8">
<div className="p-8 border border-white/5 bg-white/5">
<div className="text-3xl text-amber-500 font-medium mb-2">+40</div>
<div className="text-[10px] uppercase tracking-widest text-stone-500">مشروعاً أيقونياً</div>
</div>
<div className="p-8 border border-white/5 bg-white/5">
<div className="text-3xl text-amber-500 font-medium mb-2">90B</div>
<div className="text-[10px] uppercase tracking-widest text-stone-500">قيمة الأصول المدارة</div>
</div>
</div>
</div>
<div className="relative h-[600px] overflow-hidden group reveal">
<img className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
<div className="absolute bottom-10 right-10 flex gap-4">
<div className="w-16 h-[1px] bg-amber-500 my-auto"></div>
<span className="text-xs uppercase tracking-widest font-light italic">فلسفة البناء المعاصر</span>
</div>
</div>
</section>

<section className="py-32 relative bg-black overflow-hidden">
<div className="max-w-6xl mx-auto px-10 grid lg:grid-cols-5 gap-16 items-center">
<div className="lg:col-span-2 relative h-[700px] reveal">
<img className="w-full h-full object-cover grayscale opacity-60 contrast-125" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border-[20px] border-slate-950 -m-4"></div>
</div>
<div className="lg:col-span-3 reveal">
<iconify-icon className="text-6xl text-amber-500 opacity-20 mb-8" icon="solar:quote-left-bold-duotone"></iconify-icon>
<h3 className="text-3xl md:text-5xl font-light italic leading-relaxed text-stone-200 mb-10">
                        "نحن لا نبني للمستقبل فحسب، نحن نصنع وجهة عالمية تجسد روح المملكة وطموح شعبها العظيم."
                    </h3>
<div>
<div className="text-xl font-semibold text-white">م. عبدالعزيز بن سعود</div>
<div className="text-xs uppercase tracking-widest text-amber-500 mt-2">الرئيس التنفيذي للمجموعة</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-950" id="projects">
<div className="px-10 mb-20 flex justify-between items-end">
<div>
<h2 className="text-xs uppercase tracking-[0.5em] text-amber-500 mb-4">المشاريع الكبرى</h2>
<h3 className="text-5xl font-medium tracking-tighter">محفظة استثنائية</h3>
</div>
<div className="hidden md:flex gap-4">
<button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
<button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-1 px-10 no-scrollbar">

<div className="min-w-[400px] md:min-w-[600px] h-[800px] relative group overflow-hidden">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1541913057815-9984bfa4c66b?q=80&amp;w=2042&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
<div className="absolute bottom-16 right-16 left-16">
<div className="text-xs uppercase tracking-widest text-amber-500 mb-4">الرياض | 2026</div>
<h4 className="text-4xl font-semibold mb-6">برج السمو الماسي</h4>
<p className="text-stone-400 mb-8 max-w-sm font-light opacity-0 group-hover:opacity-100 transition-opacity">أطول ناطحة سحاب سكنية في منطقة المربع الجديد، مصممة بهيكل هندسي فريد.</p>
<button className="text-xs font-semibold uppercase tracking-widest flex items-center gap-4">
                            التفاصيل <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
</div>
</div>

<div className="min-w-[400px] md:min-w-[600px] h-[800px] relative group overflow-hidden">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1574950578143-858c6fc58922?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
<div className="absolute bottom-16 right-16 left-16">
<div className="text-xs uppercase tracking-widest text-amber-500 mb-4">نيوم | 2028</div>
<h4 className="text-4xl font-semibold mb-6">مجمع الابتكار المعرفي</h4>
<p className="text-stone-400 mb-8 max-w-sm font-light opacity-0 group-hover:opacity-100 transition-opacity">بيئة عمل ذكية مدمجة بالطبيعة الرقمية لأول مرة في الشرق الأوسط.</p>
<button className="text-xs font-semibold uppercase tracking-widest flex items-center gap-4">
                            التفاصيل <iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black relative" id="engineering">
<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-10 text-center reveal">
<h2 className="text-xs uppercase tracking-[0.5em] text-amber-500 mb-8">الدقة الهندسية</h2>
<h3 className="text-5xl md:text-7xl font-light mb-20 tracking-tighter">معايير تبني <br/> <span className="font-semibold">الأبدية</span></h3>
<div className="grid md:grid-cols-3 gap-px bg-white/10">
<div className="bg-black p-16 flex flex-col items-center">
<iconify-icon className="text-5xl text-amber-500 mb-8" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="text-xl font-medium mb-4">الاستدامة الذكية</h4>
<p className="text-stone-500 text-sm leading-relaxed">تقنيات توفير الطاقة بنسبة 40% باستخدام واجهات زجاجية نشطة.</p>
</div>
<div className="bg-black p-16 flex flex-col items-center border-x border-white/5">
<iconify-icon className="text-5xl text-amber-500 mb-8" icon="solar:cpu-linear"></iconify-icon>
<h4 className="text-xl font-medium mb-4">هندسة متطورة</h4>
<p className="text-stone-500 text-sm leading-relaxed">استخدام الذكاء الاصطناعي في محاكاة أحمال الرياح والاستقرار الزلزالي.</p>
</div>
<div className="bg-black p-16 flex flex-col items-center">
<iconify-icon className="text-5xl text-amber-500 mb-8" icon="solar:box-linear"></iconify-icon>
<h4 className="text-xl font-medium mb-4">مواد نادرة</h4>
<p className="text-stone-500 text-sm leading-relaxed">جلب أجود أنواع الرخام والمعادن من محاجرنا الخاصة حول العالم.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-900 border-y border-white/5" id="investment">
<div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-20">
<div className="reveal">
<h2 className="text-xs uppercase tracking-[0.5em] text-amber-500 mb-6">فرص استثمارية</h2>
<h3 className="text-5xl font-semibold mb-10 tracking-tighter">نمو برأس مال سيادي</h3>
<p className="text-stone-400 text-lg mb-12">نقدم عوائد استثمارية مستقرة من خلال مشاريع مدروسة بعناية فائقة، تضمن القيمة المضافة والموقع الاستراتيجي.</p>
<ul className="space-y-6">
<li className="flex items-center gap-4 text-white">
<iconify-icon className="text-amber-500 text-2xl" icon="solar:check-circle-linear"></iconify-icon>
<span>عائد سنوي متوقع يصل إلى 12%</span>
</li>
<li className="flex items-center gap-4 text-white">
<iconify-icon className="text-amber-500 text-2xl" icon="solar:check-circle-linear"></iconify-icon>
<span>صناديق استثمارية متوافقة مع الشريعة</span>
</li>
</ul>
</div>
<div className="bg-amber-600 p-16 flex flex-col justify-between reveal">
<h4 className="text-slate-950 text-3xl font-bold tracking-tighter">بوابة المستثمرين <br/> الرقمية</h4>
<p className="text-amber-950/70 text-sm mt-6 mb-12">قم بتسجيل اهتمامك الآن للحصول على النشرة الاستثمارية الخاصة بالمشروع القادم.</p>
<form className="space-y-4">
<input className="w-full bg-amber-500/20 border-b border-amber-950/30 p-4 text-slate-950 placeholder:text-amber-950/50 outline-none" placeholder="الاسم الكامل" type="text"/>
<input className="w-full bg-amber-500/20 border-b border-amber-950/30 p-4 text-slate-950 placeholder:text-amber-950/50 outline-none" placeholder="البريد الإلكتروني" type="email"/>
<button className="w-full py-5 bg-slate-950 text-white text-xs font-bold uppercase tracking-widest mt-6">إرسال الطلب</button>
</form>
</div>
</div>
</section>


<section className="py-32 px-10 bg-black text-center reveal">
<h2 className="text-xs uppercase tracking-[0.5em] text-amber-500 mb-16">المخطط العام التفاعلي</h2>
<div className="w-full aspect-video bg-white/5 relative border border-white/10 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 opacity-20 grayscale" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1449156001935-d2863fb72690?q=80&amp', backgroundSize: 'cover'}}></div>
<div className="relative z-10">
<iconify-icon className="text-9xl text-amber-500 hover:scale-110 transition-transform cursor-pointer" icon="solar:play-circle-bold-duotone"></iconify-icon>
<p className="mt-6 text-sm text-stone-500 tracking-widest uppercase">شاهد الرؤية الشاملة 8K</p>
</div>
</div>
</section>

<section className="py-32 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
<div className="aspect-square bg-slate-950 p-10 flex flex-col justify-end group">
<iconify-icon className="text-4xl text-amber-500 mb-auto" icon="solar:water-linear"></iconify-icon>
<h5 className="text-lg font-medium">نوادي صحية</h5>
</div>
<div className="aspect-square bg-slate-950 p-10 flex flex-col justify-end group">
<iconify-icon className="text-4xl text-amber-500 mb-auto" icon="solar:clapperboard-linear"></iconify-icon>
<h5 className="text-lg font-medium">سينما خاصة</h5>
</div>
<div className="aspect-square bg-slate-950 p-10 flex flex-col justify-end group">
<iconify-icon className="text-4xl text-amber-500 mb-auto" icon="solar:crown-linear"></iconify-icon>
<h5 className="text-lg font-medium">خدمة كونسيرج</h5>
</div>
<div className="aspect-square bg-slate-950 p-10 flex flex-col justify-end group">
<iconify-icon className="text-4xl text-amber-500 mb-auto" icon="solar:leaf-linear"></iconify-icon>
<h5 className="text-lg font-medium">حدائق معلقة</h5>
</div>
</section>

<section className="py-20 bg-black border-t border-white/5">
<div className="px-10 flex flex-wrap justify-between items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
<div className="text-xl font-bold tracking-tighter">ARUP</div>
<div className="text-xl font-bold tracking-tighter">ZAHA HADID</div>
<div className="text-xl font-bold tracking-tighter">FOSTER+PARTNERS</div>
<div className="text-xl font-bold tracking-tighter">SOM</div>
<div className="text-xl font-bold tracking-tighter">NEOM PARTNER</div>
</div>
</section>

<section className="py-32 bg-slate-950 px-10">
<h3 className="text-4xl font-semibold mb-16 text-center">أحدث المستجدات</h3>
<div className="grid md:grid-cols-3 gap-12">
<div className="reveal">
<div className="aspect-video bg-white/5 mb-6 overflow-hidden">
<img className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[10px] text-amber-500 font-bold uppercase">يناير 2024</span>
<h4 className="text-xl font-medium mt-2">اكتمال أعمال الهيكل الخرساني لبرج السمو الفندقي</h4>
</div>
<div className="reveal" style={{transitionDelay: '0.2s'}}>
<div className="aspect-video bg-white/5 mb-6 overflow-hidden">
<img className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1460472178825-e5240623abe5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[10px] text-amber-500 font-bold uppercase">فبراير 2024</span>
<h4 className="text-xl font-medium mt-2">توقيع اتفاقية شراكة استراتيجية مع صندوق الاستثمارات العامة</h4>
</div>
<div className="reveal" style={{transitionDelay: '0.4s'}}>
<div className="aspect-video bg-white/5 mb-6 overflow-hidden">
<img className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=1931&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[10px] text-amber-500 font-bold uppercase">مارس 2024</span>
<h4 className="text-xl font-medium mt-2">الحصول على جائزة "أفضل تصميم معماري مستدام" في دبي</h4>
</div>
</div>
</section>

<footer className="bg-black pt-32 pb-10 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-10 grid md:grid-cols-4 gap-20 mb-32">
<div className="col-span-2">
<div className="text-3xl font-bold tracking-tighter text-white mb-8">DARALSAMO</div>
<p className="text-stone-500 max-w-sm mb-8 leading-relaxed">المقر الرئيسي: مركز الملك عبدالله المالي، الرياض، المملكة العربية السعودية. الطابق 45، برج البنك الأهلي.</p>
<div className="flex gap-6 text-white/50">
<iconify-icon className="hover:text-amber-500 cursor-pointer" icon="solar:letter-linear" width="24"></iconify-icon>
<iconify-icon className="hover:text-amber-500 cursor-pointer" icon="solar:phone-linear" width="24"></iconify-icon>
<iconify-icon className="hover:text-amber-500 cursor-pointer" icon="solar:global-linear" width="24"></iconify-icon>
</div>
</div>
<div>
<h5 className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-8">القائمة</h5>
<ul className="space-y-4 text-sm text-stone-400">
<li><a className="hover:text-white transition-all" href="#">المشاريع الحالية</a></li>
<li><a className="hover:text-white transition-all" href="#">عن المجموعة</a></li>
<li><a className="hover:text-white transition-all" href="#">الاستثمار العقاري</a></li>
<li><a className="hover:text-white transition-all" href="#">فرص التوظيف</a></li>
</ul>
</div>
<div>
<h5 className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-8">اشترك في النشرة</h5>
<div className="relative">
<input className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-amber-500 transition-all" placeholder="البريد الإلكتروني" type="text"/>
<button className="absolute left-0 bottom-3 text-amber-500">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-10 px-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-600 uppercase tracking-[0.2em]">
<p>© 2024 جميع الحقوق محفوظة لشركة دار السمو للتطوير العقاري</p>
<div className="flex gap-8 mt-4 md:mt-0">
<a href="#">سياسة الخصوصية</a>
<a href="#">الشروط والأحكام</a>
</div>
</div>
</footer>
</main>


    </>
  );
}
