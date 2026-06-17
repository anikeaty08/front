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



try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        
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
      

<header className="fixed z-50 bg-[#435740]/80 w-full border-[#c7c3c1]/30 border-b top-0 backdrop-blur-md">
<div className="lg:px-20 flex -translate-y-12 -translate-y-3 -translate-x-1 -translate-y-2 max-w-[1280px] mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 rotate-y-15 items-center justify-between" style={{maskImage: 'linear-gradient(220deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 0%, black 100%, transparent)'}}>

<a className="flex flex-col items-start group" href="#">
<span className="text-2xl font-semibold text-[#ffffff] tracking-tighter">ماما هيلة</span>
<span className="text-sm text-lime-600 tracking-wide mt-1">نؤمن بك.. حتى تصل.</span>
</a>

<nav className="hidden md:flex gap-10 gap-x-10 gap-y-10 items-center">
<a className="nav-link hover:text-[#332410] transition-colors text-base font-medium text-yellow-100/80 font-geist" href="#story">حكاية ماما
            هيلة</a>
<a className="nav-link hover:text-[#332410] transition-colors text-base font-medium text-yellow-100/80 font-geist" href="#support">كيف نزيل
            العبات؟</a>
<a className="nav-link hover:text-[#332410] transition-colors text-base font-medium text-yellow-100/80 font-geist" href="#partner">ميتاق
  المؤسسة</a>
</nav>

<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<a className="hidden md:flex items-center gap-2 hover:bg-[#808120] transition-all duration-300 hover:text-stone-950 text-sm font-medium text-[#808120] border-[#808120] border rounded-full pt-2.5 pr-6 pb-2.5 pl-6" href="#contact">
<span className="">احكِ لنا قصتك</span>

<iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon>
</a>
<button className="md:hidden text-[#808120] p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Oceans of Andromeda | A Theme for the Depths</title>


<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&amp;family=JetBrains+Mono:wght@400;500&amp;family=Inter:wght@300;400;500&amp;display=swap" rel="stylesheet"/>
<style>
/* Custom Utilities */
:root {
--depth-black: #000000;
--biolum-green: #1a5c4a;
--abyss-green: #0d1f1c;
}
body {
background-color: var(--depth-black);
color: #e5e5e5;
cursor: default;
}
.font-garamond { font-family: 'EB Garamond', serif; }
.font-mono { font-family: 'JetBrains Mono', monospace; }
.font-sans { font-family: 'Inter', sans-serif; }
/* Smooth reveal animations */
@keyframes drift {
0% { transform: translateY(0px); opacity: 0; }
100% { transform: translateY(-20px); opacity: 1; }
}
.animate-drift {
animation: drift 2s ease-out forwards;
}
.delay-500 { animation-delay: 500ms; }
.delay-1000 { animation-delay: 1000ms; }
.delay-1500 { animation-delay: 1500ms; }
/* Custom Scrollbar */
::-webkit-scrollbar {
width: 4px;
}
::-webkit-scrollbar-track {
background: #000;
}
::-webkit-scrollbar-thumb {
background: #1a5c4a;
border-radius: 2px;
}
/* Glow effects */
.biolum-text {
text-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
}
.biolum-box {
box-shadow: 0 0 40px -10px rgba(6, 78, 59, 0.4);
}
/* Code Syntax Highlighting specific to theme */
.syntax-pink { color: #d946ef; }
.syntax-cyan { color: #2dd4bf; }
.syntax-green { color: #34d399; }
.syntax-yellow { color: #facc15; }
.syntax-blue { color: #60a5fa; }
.syntax-comment { color: #4b5563; }
/* Smooth fade for images */
.image-mask {
mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
-webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
}
</style><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-roboto" rel="stylesheet"/><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style>

<div className="fixed inset-0 w-full h-full -z-20 overflow-hidden bg-black pointer-events-none">

<div className="aura-background-component absolute inset-0 w-full h-full opacity-60">
<div className="absolute w-full h-full left-0 top-0" data-us-project="uFY4IYPs2LU8fWm96Im2"></div>

</div>

<div className="absolute inset-0 bg-emerald-500/30 mix-blend-overlay"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 px-8 py-8 flex justify-between items-center mix-blend-screen pointer-events-none">
<div className="pointer-events-auto">
</div>
</nav>

<section className="flex flex-col z-10 w-full h-screen pr-6 pl-6 relative items-center justify-center">

<div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
<canvas className="w-full h-full" height="666" id="ocean-dust" width="952"></canvas>
</div>
<div className="text-center z-10 space-y-6">
<h1 className="animate-drift lg:text-9xl md:bg-clip-text md:text-transparent md:text-8xl text-6xl font-light tracking-wider font-sans bg-gradient-to-b from-white/50 via-[#8e9e7b] to-white/50 opacity-0" style={{filter: 'blur(0.23px)'}}>مؤسسة ماما هيلة الخيرية</h1>
<p className="md:text-base uppercase animate-drift delay-500 text-sm text-cyan-50/50 tracking-widest font-sans opacity-0"></p>
</div>
<div className="flex animate-drift delay-1000 opacity-0 w-full absolute bottom-12 justify-center">
<div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-emerald-800 to-transparent"></div>
</div>
</section>

<section className="md:py-48 flex z-10 w-full pt-32 pr-6 pb-32 pl-6 relative justify-center">
<div className="max-w-2xl text-center space-y-12">
<i className="mx-auto w-6 h-6 text-emerald-500/50 mb-8" data-lucide="waves"></i>
<p className="leading-relaxed md:text-2xl text-2xl font-light text-[#d8caaf]/80">هيلة، في اللغة،
                  تعني
                  الوفرة.. الكثرة التي لا تنضب. نحن هنا لنكون وفرة في حياة كل شاب وفتاة أوقفتهم الأقدار خلف باب مادي
                  موصد
            </p>
<p className="md:text-2xl leading-relaxed text-xl italic text-emerald-500/60 font-garamond">من الاجل العِلم ، نساعدكم </p>
<p className="leading-relaxed md:text-2xl text-2xl text-[#d8caaf]/70">رأينا أحلاماً تموت صغيرة
                  لأن القسط
                  الدراسي كان أثقل من الجبال
                  <br/>

قررنا أن نكون السند المادي الذي لا يخذلك.. أن نتحول من فكرة إلى يد تمتد بالعطاء والوفرة
            </p>
</div>
</section>

<section className="lg:pt-56 lg:pb-40 overflow-hidden default bg-white pt-40 pb-32 relative">
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qF3qXhdiOxdUeQYH8wCK"></div>
<div className="max-w-[1280px] mx-auto px-6 lg:px-20 relative z-10">
<div className="grid lg:grid-cols-12 gap-16 gap-x-16 gap-y-16 items-center">

<div className="lg:col-span-7 flex flex-col translate-y-12 space-y-10 items-start">
<h1 className="leading-tight lg:text-6xl md:text-7xl text-4xl font-semibold text-[#332410] tracking-tight text-center">برفقة <span className="text-[#808120]">"ماما هيلة"</span>.. <br/> مستقبلك بأمآن</h1>
<p className="leading-relaxed text-xl font-light text-[#332410]/85 text-center max-w-2xl">.<br className=""/> مؤسسة تعليمية غير ربحية، وُلدت كفكرة لرغبة الصادقة في أن نحتضن شبابنا حتى القمة. نحن هنا.. لنحمل عنك ثقل القسط، ونبعد عنك دربك العجز.</p>

<div className="border-r-[#808120] md:p-8 bg-black/20 max-w-xl border rounded-2xl border-r-4 pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm">
<p className="leading-relaxed text-xl italic text-[#808120] tracking-wide"> عجزك المالي ليس عائق بعد اليوم.. في
            مؤسسة 'ماما هيلة' الكل يستحق الفرصة.</p>
</div>
</div>

<div className="lg:col-span-5 hidden lg:bg-white min-h-[500px] h-full relative">
<div className="transform flex overflow-hidden bg-[#f9f6f0]/50 border-[#c7c3c1]/30 border rounded-[32px] absolute top-0 right-0 bottom-0 left-0 backdrop-blur-sm rotate-3 items-center justify-center">
<img alt="Artwork" className="w-full h-full object-cover" src="default"/>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-[#c7c3c1] border-[#c7c3c1]/50 pt-32 pb-32 relative" id="story">
<div className="lg:px-20 max-w-[1280px] mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col-reverse gap-x-16 items-center gap-y-20 lg:grid lg:grid-cols-12">

<div className="lg:col-span-4 flex lg:mt-0 w-full mt-12 relative justify-center">
<div className="aspect-[4/5] overflow-hidden flex bg-stone-50/30 w-full max-w-[300px] border-[#c7c3c1] border rounded-2xl relative items-center justify-center">
<iconify-icon className="text-7xl text-[#808120]/40" height="72" icon="solar:hand-heart-linear" style={{color: 'rgb(128, 129, 32)'}} width="72"></iconify-icon>
</div>
</div>

<div className="lg:col-span-8 w-full relative">

<div className="absolute -top-16 -right-8 text-[120px] text-[#808120] opacity-[0.05] font-english leading-none select-none">
    "
  </div>
<h2 className="lg:text-4xl text-3xl font-medium text-lime-700 tracking-tight mb-6">رؤيتنا لمد يد العون لك...</h2>
<p className="leadin &lt;h2 class= font-geist" font-medium="" lg:text-5xl="" mb-50"="" text-5xl="" text-[#ffffff]="" tracking-tight="">
  في ظل التحديات التي قد
  تجعلك تشعر بالعجز <span className="text-[#808120]">"ماما هيلة"</span> تمنحك الحافز للاستمرار

</p>
<div className="space-y-6 text-lg text-[#332410]/85 leading-relaxed font-light">
<p className="font-geist text-center rotate-y-90 perspective-distant">نحن هنا لنمنحك الحافز المناسب. إذا كنت عالقاً لأسباب خارجة عن إرادتك، في مسيرتك التعليمية فإننا نمد لك يد العون الفعلي.</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-32" id="support">
<div className="lg:px-20 max-w-[1280px] mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="lg:text-4xl text-3xl font-medium text-[#d8caaf] tracking-tight mb-6">كيف نساعدك في "ماما هيلة"؟</h2>
<p className="leading-relaxed text-base font-light text-slate-50">أربعة أعمدة نبني بها جسر عبورك نحو المستقبل، بحب
      وكرم.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-6">

<div className="glass-card lg:p-8 hover:-translate-y-2 hover:border-[#808120] hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.05)] group -multi bg-[#d8caaf] border-[#c7c3c1] border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-md">
<div className="w-14 h-14 rounded-full bg-[#d8caaf]/50 flex items-center justify-center text-[#808120] mb-6 group-hover:bg-[#808120] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" height="24" icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-lime-600 tracking-tight mb-4">سداد الرسوم</h3>
<p className="leading-relaxed text-sm text-stone-800 font-sans">لا تدع "القسط الدراسي" يوقف طموحك، نحن نتكفل بالرسوم الدراسية
        العالقة
        لتكمل مسيرتك بشغف.</p>
</div>

<div className="glass-card hover:-translate-y-2 hover:border-[#808120] hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.05)] group lg:p-8 bg-[#d8caaf] border-[#c7c3c1] border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-md">
<div className="w-14 h-14 rounded-full bg-[#d8caaf]/50 flex items-center justify-center text-[#808120] mb-6 group-hover:bg-[#808120] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:diploma-verified-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-lime-600 tracking-tight mb-4">الاعتماد المهني</h3>
<p className="leading-relaxed text-sm text-stone-800 font-sans">
        نساعدك في تكاليف شهادات مزاولة المهنة والاعتمادات القانونية والفنية لبدء حياتك العملية.
      </p>
</div>

<div className="glass-card lg:p-8 hover:-translate-y-2 hover:border-[#808120] hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.05)] group bg-[#d8caaf] border-[#c7c3c1] border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-md">
<div className="flex group-hover:bg-[#808120] group-hover:text-white transition-colors text-[#808120] bg-[#d8caaf]/50 w-14 h-14 rounded-full mb-6 items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:box-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-lime-600 tracking-tight bg-[#d8caaf] mb-4">الموارد العملية</h3>
<p className="leading-relaxed text-sm text-stone-800 font-sans">نوفر لك الأدوات، المعدات، والموارد التي تتطلبها دراستك المهنية
        أو الحرفية للنجاح .</p>
</div>

<div className="glass-card lg:p-8 hover:-translate-y-2 hover:border-[#808120] hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.05)] group bg-[#d8caaf] border-[#c7c3c1] border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-md">
<div className="w-14 h-14 rounded-full bg-[#d8caaf]/50 flex items-center justify-center text-[#808120] mb-6 group-hover:bg-[#808120] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-lime-600 tracking-tight mb-4">التوجيه المعنوي</h3>
<p className="leading-relaxed text-sm text-stone-800 font-sans">
        نحن معك خطوة بخطوة، نستمع إليك ونوجهك بحب، لأنك أحد أبناء هذا البيت الكبير.
      </p>
</div>
</div>
</div>
</section>
<section className="border-y bg-[#2f331d] border-[#c7c3c1]/50 pt-32 pb-32 relative" id="story">
<title>Process - Verd Architecture</title>
<style>
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box
    }

    html {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
    }

    body {
      font-family: var(--font-body);
      background: var(--color-bg);
      color: var(--color-text);
      line-height: 1.6;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center
    }

    :root {
      --color-bg: #0F0F0E;
      --color-bg-elevated: #1A1917;
      --color-bg-card: #22211E;
      --color-surface: #2C2B27;
      --color-copper: #C17F59;
      --color-copper-light: #D4A07A;
      --color-copper-bright: #E8B894;
      --color-terracotta: #C4704E;
      --color-gold: #C9A96E;
      --color-gold-light: #DFC08A;
      --color-sage: #8A9A7B;
      --color-cream: #F5F0EB;
      --color-cream-muted: #D9D2CA;
      --color-text: #F5F0EB;
      --color-text-muted: #9C9789;
      --color-text-subtle: #6B675E;
      --font-display: 'Playfair Display', Georgia, serif;
      --font-body: 'Inter', system-ui, -apple-system, sans-serif;
      --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
    }

    .container {
      max-width: 1320px;
      margin: 0 auto;
      padding: 0 clamp(1.5rem, 4vw, 3rem)
    }

    .section {
      padding: clamp(5rem, 12vh, 9rem) 0;
      position: relative
    }

    .section-label {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.7rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-copper);
      margin-bottom: 1.5rem;
    }

    .section-label::before {
      content: '';
      width: 30px;
      height: 1px;
      background: linear-gradient(90deg, var(--color-copper), transparent);
    }

    .section-title {
      font-family: var(--font-display);
      font-size: clamp(2rem, 4vw, 3.2rem);
      font-weight: 400;
      line-height: 1.15;
      color: var(--color-cream);
    }

    .section-title em {
      font-style: italic;
      color: var(--color-copper-light);
    }

    /* Reveal */
    .reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.8s var(--ease-out-expo), transform 0.8s var(--ease-out-expo)
    }

    .reveal.visible {
      opacity: 1;
      transform: translateY(0)
    }

    /* Process */
    .process {
      background: var(--color-bg-elevated);
      position: relative;
      overflow: hidden
    }

    .process::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 800px;
      height: 800px;
      background: radial-gradient(circle, rgba(138, 154, 123, 0.04) 0%, transparent 70%);
      pointer-events: none;
    }

    .process-header {
      text-align: center;
      margin-bottom: clamp(3rem, 6vw, 5rem);
    }

    .process-steps {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0;
      position: relative;
    }

    /* Connecting line */
    .process-steps::before {
      content: '';
      position: absolute;
      top: 44px;
      left: 12.5%;
      right: 12.5%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(193, 127, 89, 0.3) 20%, rgba(193, 127, 89, 0.3) 80%, transparent);
    }

    .process-step {
      text-align: center;
      padding: 0 1.5rem;
      position: relative;
    }

    .process-step-number {
      width: 88px;
      height: 88px;
      margin: 0 auto 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--color-bg);
      position: relative;
      z-index: 1;
      box-shadow: 0 0 0 1px rgba(193, 127, 89, 0.2);
    }

    .process-step-number::before {
      content: '';
      position: absolute;
      inset: -1px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(193, 127, 89, 0.4), transparent 60%);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      padding: 1px;
    }

    .process-step-number span {
      font-family: var(--font-display);
      font-size: 1.5rem;
      font-weight: 600;
      background: linear-gradient(135deg, var(--color-copper-light), var(--color-gold));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .process-step h4 {
      font-family: var(--font-display);
      font-size: 1.1rem;
      font-weight: 500;
      color: var(--color-cream);
      margin-bottom: 0.75rem;
    }

    .process-step p {
      font-size: 0.82rem;
      line-height: 1.7;
      color: var(--color-text-muted);
    }

    /* Stagger variant: slide from bottom with draw (process) */
    .stagger-draw>* {
      opacity: 0;
      transform: translateY(40px) scale(0.95);
      transition: opacity 0.8s var(--ease-out-expo), transform 0.9s var(--ease-out-expo);
    }

    .stagger-draw.visible>*:nth-child(1) {
      transition-delay: 0s
    }

    .stagger-draw.visible>*:nth-child(2) {
      transition-delay: 0.15s
    }

    .stagger-draw.visible>*:nth-child(3) {
      transition-delay: 0.3s
    }

    .stagger-draw.visible>*:nth-child(4) {
      transition-delay: 0.45s
    }

    .stagger-draw.visible>* {
      opacity: 1;
      transform: translateY(0) scale(1)
    }

    @media(max-width:1024px) {
      .process-steps {
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem
      }

      .process-steps::before {
        display: none
      }
    }

    @media(max-width:768px) {
      .process-steps {
        grid-template-columns: 1fr;
        gap: 2.5rem
      }
    }

  </style>

<div className="sm:mt-8 mt-6">
<h2 className="lg:text-4xl text-3xl font-medium text-[#d8caaf] tracking-tight text-center mb-6">ميثاقُ ماما هيلة: بوصلةٌ وقيمٌ لا تحيدُ عن سندِ الطالب..</h2>

<div className="sm:hidden space-y-6">
<div className="flex items-start gap-4">
<div className="relative">
<div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-emerald-500/50 bg-neutral-800 flex-shrink-0">
<img alt="Discovery phase" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6739d5c9-2ec9-43c0-94be-ec961704a2e0_800w.jpg"/>
</div>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 text-[10px] text-neutral-300 mb-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                DISCOVERY
              </div>
<p className="text-sm text-neutral-400 mb-2 font-geist">Research &amp; planning phase with stakeholder alignment
              </p>
<div className="text-xs text-neutral-500 font-geist">1-2 weeks</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="relative">
<div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-emerald-500/50 bg-neutral-800 flex-shrink-0">
<img alt="Architecture phase" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3393b787-4136-4ac8-915d-4b7a5185821d_800w.jpg"/>
</div>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 text-[10px] text-neutral-300 mb-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                ARCHITECTURE
              </div>
<p className="text-sm text-neutral-400 mb-2 font-geist">System design &amp; technical foundation</p>
<div className="text-xs text-neutral-500 font-geist">1-2 weeks</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="relative">
<div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-indigo-400/50 bg-neutral-800 flex-shrink-0">
<img alt="Build phase" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31acf2d9-1bfb-4a1c-8b2c-708955038c1c_800w.jpg"/>
</div>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 text-[10px] text-neutral-300 mb-2">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                BUILD
              </div>
<p className="text-sm text-neutral-400 mb-2 font-geist">Active development with iterative feedback</p>
<div className="text-xs text-neutral-500 font-geist">4-8 weeks</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="relative">
<div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-neutral-600/50 bg-neutral-700 flex-shrink-0">
<img alt="QA phase" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb6b509f-d7d6-4c5a-ab4e-9cc3661e184b_800w.jpg"/>
</div>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 text-[10px] text-neutral-300 mb-2">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-600"></span>
                QA
              </div>
<p className="text-sm text-neutral-400 mb-2 font-geist">Testing &amp; quality assurance</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="relative">
<div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-neutral-600/50 bg-neutral-700 flex-shrink-0">
<img alt="Launch phase" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f60cb04d-11d0-4cc7-941b-2d6c15a14f36_800w.jpg"/>
</div>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 text-[10px] text-neutral-300 mb-2">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-600"></span>
                LAUNCH
              </div>
<p className="text-sm text-neutral-400 mb-2 font-geist">Deployment &amp; go-live support</p>
</div>
</div>
</div>

<div className="hidden sm:block relative">
<div className="absolute top-6 sm:top-8 left-0 right-0 h-px bg-gradient-to-r from-white/0 via-white/15 to-white/0">
</div>
<div className="grid grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
<div className="flex flex-col sm:gap-4 font-geist text-center gap-x-3 gap-y-3 items-center">
<div className="relative">
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 sm:ring-3 ring-emerald-500/50 bg-neutral-800">
<img alt="Discovery phase" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6739d5c9-2ec9-43c0-94be-ec961704a2e0_800w.jpg"/>
</div>
</div>
<div className="flex text-[10px] sm:text-[21px] text-[#808120] gap-x-2 gap-y-2 items-center">غايتنا</div>
<p className="leading-relaxed sm:px-2 sm:text-lg text-xs text-slate-50 font-geist pr-1 pl-1">أن يبقى العلم حقًّا للطموحين</p>
</div>
<div className="flex flex-col gap-3 sm:gap-4 font-geist text-center gap-x-3 gap-y-3 items-center">
<div className="relative">
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 sm:ring-3 ring-emerald-500/50 bg-neutral-800">
<img alt="Architecture phase" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3393b787-4136-4ac8-915d-4b7a5185821d_800w.jpg"/>
</div>
</div>
<div className="flex gap-2 text-[10px] sm:text-[21px] text-[#808120] gap-x-2 gap-y-2 items-center">رسالتنا</div>
<p className="leading-relaxed sm:px-2 sm:text-lg text-xs text-slate-50 font-geist pr-1 pl-1">تقديم الدعم المادي لتسديد المستحقات الدراسية للطلاب العلِم</p>
</div>
<div className="flex flex-col gap-3 sm:gap-4 font-geist text-center gap-x-3 gap-y-3 items-center">
<div className="relative">
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 sm:ring-3 ring-indigo-400/50 bg-neutral-800">
<img alt="Build phase" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31acf2d9-1bfb-4a1c-8b2c-708955038c1c_800w.jpg"/>
</div>
</div>
<div className="flex text-[10px] sm:text-[21px] text-[#808120] gap-x-5 gap-y-20 items-center">رؤيتنا</div>
<p className="leading-relaxed sm:px-2 sm:text-lg text-xs text-slate-50 font-geist pr-1 pl-1">مجتمعٌ لا يُحرَم فيه طالبٌ من شهادته لأسباب مالية بحتة، ويكون فيه العطاء الخيري وقودًا لنهضة الأجيال</p></div>
<div className="flex flex-col gap-3 sm:gap-4 font-geist text-center gap-x-3 gap-y-3 items-center">
<div className="relative">
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 sm:ring-3 ring-neutral-600/50 bg-neutral-700">
<img alt="QA phase" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb6b509f-d7d6-4c5a-ab4e-9cc3661e184b_800w.jpg"/>
</div>
</div>
<div className="flex text-[10px] sm:text-[21px] text-[#808120] gap-x-2 gap-y-2 items-center">قيمنا</div>
<p className="leading-relaxed sm:px-2 sm:text-lg text-xs text-slate-50 font-geist pr-1 pl-1">الشفافية، و الحفاظ على كرامة المستفيد، وترسيخ ثقافة  الاستثمار في الأمة</p>
</div>
<div className="flex flex-col items-center gap-3 sm:gap-4 font-geist text-center">
<div className="relative">
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#f9f6f0] border-[#c7c3c1]/50 border-t pt-32 pb-32" id="contact">
<div className="lg:px-20 max-w-[1280px] mr-auto ml-auto pr-6 pl-6">
<div className="lg:p-12 overflow-hidden bg-black max-w-5xl border-[#c7c3c1] border rounded-2xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 relative" id="contact">
<div className="text-center mb-10 relative z-10">
<p className="text-3xl text-[#808120]">احكِ لنا قصتك...</p>
</div>
<form className="z-10 relative space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-xs font-medium text-[#d8caaf] ml-1">الاسم الكريم</label>
<input className="w-full bg-transparent border border-[#c7c3c1] rounded-lg px-4 py-3 text-sm text-[#332410] outline-none focus:border-[#808120] transition-colors placeholder:italic placeholder:text-[#c7c3c1]" placeholder="اسمك" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-[#d8caaf] ml-1">رقم التواصل</label>
<input className="w-full bg-transparent border border-[#c7c3c1] rounded-lg px-4 py-3 text-sm text-[#332410] font-english outline-none focus:border-[#808120] transition-colors placeholder:italic placeholder:text-[#c7c3c1] text-right" dir="ltr" placeholder="رقم الجوال" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-[#d8caaf] ml-1">كيف نستطيع مساعدتك؟</label>
<textarea className="outline-none focus:border-[#808120] transition-colors placeholder:italic placeholder:text-[#c7c3c1] resize-none text-sm text-[#332410] bg-transparent w-full border-[#c7c3c1] border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="..." rows="4"></textarea>
</div>
<button className="w-full flex justify-center items-center gap-2 px-8 py-4 border border-[#808120] text-[#808120] rounded-full text-sm font-medium hover:bg-[#808120] transition-all duration-300 mt-8 hover:text-black" type="button">
<span className="">إرسال بآمان</span>
<iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon>
</button>
</form>
<div className="mt-12 pt-8 border-t border-[#c7c3c1]/40 grid md:grid-cols-3 gap-6 relative z-10">
<div className="flex flex-col items-center text-center gap-2">
<iconify-icon className="text-2xl text-[#808120]" height="24" icon="solar:map-point-linear" style={{color: 'rgb(128, 129, 32)'}} width="24"></iconify-icon>
<span className="text-xs font-medium text-[#d8caaf]">مقرنا</span>
<span className="text-xs text-stone-50">الرياض - نفتح أبوابنا للطموحين</span>
</div>
<div className="flex flex-col gap-2 text-center gap-x-2 gap-y-2 items-center" id="contact">
<iconify-icon className="text-2xl text-[#808120]" icon="solar:phone-calling-linear"></iconify-icon>
<span className="text-xs font-medium text-[#d8caaf]">واتساب السند</span>
<span className="text-xs font-english text-stone-50" dir="ltr">+966 50 000 0000</span>
</div>
<div className="flex flex-col items-center text-center gap-2">
<iconify-icon className="text-2xl text-[#808120]" icon="solar:letter-linear"></iconify-icon>
<span className="text-xs font-medium text-[#d8caaf]">البريد الإلكتروني</span>
<span className="text-xs text-stone-50 font-english">Apply@MamaHealh.org</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#8e9e7b] pt-20 pb-10">
<div className="flex flex-col lg:px-20 text-[#3dc34b] text-center max-w-[1280px] mr-auto ml-auto pr-6 pl-6 items-center">
<h3 className="text-5xl font-medium text-lime-950 tracking-tight mb-2">مؤسسة ماما هيلة الخيرية</h3>
<p className="text-2xl italic text-lime-800 tracking-wide">نؤمن بك.. حتى تصل.</p>
<div className="w-10 h-[1px] bg-[#808120] my-10"></div>

<div className="flex flex-col gap-5">
<div className="flex gap-6 gap-x-6 gap-y-6 items-center">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all" href="#">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all" href="#">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path className="" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all" href="#">
<svg className="w-[18px] h-[18px]" data-icon-replaced="true" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect className="" height="12" width="4" x="2" y="9"></rect>
<circle className="" cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
<nav className="flex flex-wrap justify-center gap-6 mb-12">
<a className="text-xs text-[#c7c3c1] hover:text-[#808120] transition-colors" href="#">عن المؤسسة</a>
<a className="text-xs text-[#c7c3c1] hover:text-[#808120] transition-colors" href="#">سياسة الخصوصية</a>
<a className="text-xs text-[#c7c3c1] hover:text-[#808120] transition-colors" href="#">الشروط والأحكام</a>
</nav>
<p className="uppercase text-xs text-zinc-200/70 tracking-widest font-english">© <span className="font-english">2026</span> MAMA HِِِELAH FOUNDATION. ALL RIGHTS RESERVED.</p>
</div>
</footer>

    </>
  );
}
