import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Simple script to add parallax effect to the floating croissant on scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const item = document.querySelector('.floating-croissant');
            if(item) {
                item.style.transform = `translateY(${scrolled * 0.1}px) rotate(${scrolled * 0.05}deg)`;
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: '1440px', height: '900px'}}></div>
</div>

<div className="bg-grain"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-neutral-950/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-700 flex items-center justify-center border border-white/10 group-hover:border-amber-500/50 transition-colors">
<iconify-icon className="text-white" icon="lucide:moon" width="18"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-sm uppercase">Lunar<span className="text-neutral-500">.Bakery</span></span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#technology">ТЕХНОЛОГИЯ</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#flavors">ВКУСЫ</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#lab">ЛАБОРАТОРИЯ</a>
</div>
<button className="flex items-center gap-2 px-4 py-1.5 bg-white text-black rounded-full text-xs font-medium hover:bg-neutral-200 transition-colors">
<span className="">Предзаказ</span>
<iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 grid-bg z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-200 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                    Новая партия выпечена
                </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight">Вкус, который <br/> <span className="text-gradient-gold">преодолел</span> гравитацию. Бро, ты в ахуе?</h1>
<p className="text-lg text-neutral-400 max-w-md font-light leading-relaxed">
                    Первые в мире круассаны из «Лунного теста». 
                    27 слоев невесомости, выпеченные в вакуумных печах для достижения структуры, невозможной на Земле.
                </p>
<div className="flex items-center gap-4 pt-4">
<button className="group px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-neutral-200 transition-all flex items-center gap-2">
<iconify-icon icon="lucide:rocket" width="18"></iconify-icon>
                        Попробовать
                    </button>
<button className="px-6 py-3 border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/5 transition-all">
                        О технологии
                    </button>
</div>
<div className="pt-8 flex items-center gap-6 text-neutral-500 text-xs">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="lucide:wind" width="16"></iconify-icon>
<span className="">Аэрация 98%</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="lucide:layers" width="16"></iconify-icon>
<span>27 Слоев</span>
</div>
</div>
</div>

<div className="relative h-[500px] w-full flex items-center justify-center perspective-[1000px]">

<div className="absolute w-[400px] h-[400px] rounded-full border border-white/5 animate-[spin-slow_20s_linear_infinite]"></div>
<div className="absolute w-[550px] h-[550px] rounded-full border border-white/5 animate-[spin-slow_30s_linear_infinite_reverse] opacity-50"></div>


<div className="floating-croissant relative z-20 w-80 h-80 md:w-96 md:h-96">
<img alt="Moon Croissant" className="w-full h-full object-cover rounded-full shadow-2xl mask-image-circle" src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&amp;fit=crop&amp;q=80&amp;w=1000&amp;ixlib=rb-4.0.3" style={{WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 70%)', maskImage: 'radial-gradient(circle, black 60%, transparent 70%)', transform: 'rotate(-15deg)'}}/>

<div className="absolute inset-0 bg-amber-500/20 blur-3xl -z-10 rounded-full"></div>
</div>

<div className="absolute top-20 right-10 bg-neutral-900/80 backdrop-blur-md border border-white/10 px-3 py-2 rounded-lg z-30 animate-pulse">
<p className="text-[10px] text-neutral-400 uppercase tracking-wider">Плотность</p>
<p className="text-white text-xs font-mono">0.05 g/cm³</p>
</div>
<div className="absolute bottom-20 left-0 bg-neutral-900/80 backdrop-blur-md border border-white/10 px-3 py-2 rounded-lg z-30">
<p className="text-[10px] text-neutral-400 uppercase tracking-wider">Масло</p>
<p className="text-white text-xs font-mono">84% Fat</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-neutral-950/50" id="technology">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Технология <span className="text-neutral-600">Moon Dough™</span></h2>
<p className="text-neutral-400 max-w-2xl">
                    Мы отказались от земных ограничений. Наша запатентованная технология ферментации создает тесто, которое легче воздуха.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glow-card group p-8 rounded-2xl bg-neutral-900/40 border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-white" icon="lucide:thermometer-snowflake" width="64"></iconify-icon>
</div>
<div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 border border-indigo-500/20">
<iconify-icon className="text-indigo-400" icon="lucide:snowflake" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Крио-ферментация</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Тесто созревает при температуре -150°C, останавливая время и позволяя вкусу раскрыться на молекулярном уровне.
                    </p>
</div>

<div className="glow-card group p-8 rounded-2xl bg-neutral-900/40 border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-white" icon="lucide:wind" width="64"></iconify-icon>
</div>
<div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 border border-amber-500/20">
<iconify-icon className="text-amber-400" icon="lucide:feather" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Антигравитационный подъем</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Выпекание происходит в камерах с пониженным давлением, позволяя тесту подниматься в 3 раза выше обычного.
                    </p>
</div>

<div className="glow-card group p-8 rounded-2xl bg-neutral-900/40 border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-white" icon="lucide:boxes" width="64"></iconify-icon>
</div>
<div className="w-10 h-10 bg-neutral-700/30 rounded-lg flex items-center justify-center mb-6 border border-white/10">
<iconify-icon className="text-neutral-300" icon="lucide:box" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Звездная пыль</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Мы используем муку сверхтонкого помола, напоминающую лунную пыль, для создания идеально гладкой текстуры.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="flavors">

<div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Флот вкусов</h2>
<p className="text-neutral-500 text-sm">Выберите свою миссию</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 text-white transition-colors">
<iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 text-white transition-colors">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x">

<div className="min-w-[300px] md:min-w-[340px] snap-center group">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 border border-white/5 bg-neutral-900">
<img alt="Classic" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-mono text-amber-300 mb-2 block">MK-1</span>
<h3 className="text-xl font-medium text-white">Армстронг</h3>
<p className="text-sm text-neutral-400 mt-1">Классическое масло, морская соль</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[340px] snap-center group">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 border border-white/5 bg-neutral-900">
<img alt="Chocolate" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-mono text-indigo-300 mb-2 block">MK-2</span>
<h3 className="text-xl font-medium text-white">Темная Материя</h3>
<p className="text-sm text-neutral-400 mt-1">Бельгийский шоколад, какао-нибсы</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[340px] snap-center group">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 border border-white/5 bg-neutral-900">
<img alt="Almond" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-mono text-pink-300 mb-2 block">MK-3</span>
<h3 className="text-xl font-medium text-white">Красная Планета</h3>
<p className="text-sm text-neutral-400 mt-1">Малина, миндальный крем, розовая пудра</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[340px] snap-center group">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 border border-white/5 bg-neutral-900 flex items-center justify-center">
<div className="text-center p-6">
<div className="w-12 h-12 rounded-full border border-dashed border-neutral-600 flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-neutral-500" icon="lucide:plus"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white">Секретная разработка</h3>
<p className="text-xs text-neutral-500 mt-2">Доступно через 12 дней</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-neutral-900/20 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
<div>
<p className="text-4xl font-semibold text-white mb-2 tracking-tight">10k+</p>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Доставок</p>
</div>
<div>
<p className="text-4xl font-semibold text-white mb-2 tracking-tight">27</p>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Слоев теста</p>
</div>
<div>
<p className="text-4xl font-semibold text-white mb-2 tracking-tight">0.0</p>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Земной гравитации</p>
</div>
<div>
<p className="text-4xl font-semibold text-white mb-2 tracking-tight">24/7</p>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Лаборатория</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-indigo-950/10 to-neutral-950"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-amber-200 mb-6" icon="lucide:sparkles" width="32"></iconify-icon>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Готовы к взлету?</h2>
<p className="text-lg text-neutral-400 mb-10 font-light">
                Оформите подписку на еженедельную поставку свежих круассанов. 
                Первая доставка в вакуумной упаковке — бесплатно.
            </p>
<form className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors text-sm" placeholder="email@cosmos.com" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition-colors text-sm whitespace-nowrap">
                    Подписаться
                </button>
</form>
<p className="text-[10px] text-neutral-600 mt-4">Нажимая кнопку, вы соглашаетесь с правилами межгалактической торговли.</p>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:moon" width="12"></iconify-icon>
</div>
<span className="text-white font-medium text-sm tracking-tight">LUNAR</span>
</div>
<div className="flex gap-8 text-xs text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
<div className="text-[10px] text-neutral-700">
                    © 2024 Lunar Bakery Inc. Earth Sector.
                </div>
</div>
</div>
</footer>


    </>
  );
}
