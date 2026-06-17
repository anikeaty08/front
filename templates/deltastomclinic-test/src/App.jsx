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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('reveal-hidden');
                        entry.target.classList.add('reveal-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.js-reveal').forEach((elem) => {
                observer.observe(elem);
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-20 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[120px] animate-float"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/10 blur-[150px] animate-float-delayed"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/60 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-normal tracking-tighter text-white flex items-center gap-2" href="#">
<iconify-icon className="text-2xl text-blue-500 glow-text" icon="solar:tooth-linear"></iconify-icon>
                DELTA STOM
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-light text-zinc-400">
<a className="hover:text-white transition-colors" href="#services">Услуги</a>
<a className="hover:text-white transition-colors" href="#cases">Работы</a>
<a className="hover:text-white transition-colors" href="#team">Команда</a>
<a className="hover:text-white transition-colors" href="#reviews">Отзывы</a>
<a className="hover:text-white transition-colors" href="#contacts">Контакты</a>
</nav>
<div className="flex items-center gap-6">
<a className="hidden lg:flex items-center gap-2 text-sm font-light text-zinc-300 hover:text-white transition-colors" href="tel:+77750077861">
<iconify-icon className="text-blue-500" icon="solar:phone-calling-linear"></iconify-icon>
                    +7‒775‒007‒78‒61
                </a>
<a className="bg-white text-zinc-950 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2" href="#contacts">
                    Записаться
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</header>
<main>

<section className="pt-40 pb-20 px-6 relative min-h-screen flex items-center">

<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-[20%] left-[10%] glass-panel p-4 rounded-2xl animate-float opacity-70">
<iconify-icon className="text-3xl text-blue-400" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="absolute bottom-[30%] right-[15%] glass-panel p-4 rounded-2xl animate-float-delayed opacity-70">
<iconify-icon className="text-3xl text-indigo-400" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
</div>
<div className="max-w-7xl mx-auto text-center js-reveal reveal-hidden relative z-10 w-full">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-white/10 text-zinc-300 text-xs font-light mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Инновационные цифровые протоколы
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tighter text-white max-w-5xl mx-auto leading-tight mb-8">
                    Эстетика и здоровье зубов <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white glow-text">с ювелирной точностью</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                    Применяем цифровые протоколы и лечение под микроскопом. Спасаем зубы, от которых отказываются другие. Без боли, скрытых платежей и стресса.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full text-sm font-normal hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2" href="tel:+77750077861">
<iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
                        Записаться на прием
                    </a>
<a className="w-full sm:w-auto glass-panel text-white px-8 py-4 rounded-full text-sm font-normal hover:bg-white/10 transition-all flex items-center justify-center gap-2" href="#cases">
<iconify-icon className="text-lg" icon="solar:camera-minimalistic-linear"></iconify-icon>
                        Посмотреть кейсы
                    </a>
</div>
</div>
</section>

<section className="py-12 px-6 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto js-reveal reveal-hidden">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-white/5">
<div className="text-center px-4 group">
<div className="text-4xl md:text-5xl font-normal text-white tracking-tighter mb-2 group-hover:scale-110 transition-transform text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">&gt;5000</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Довольных пациентов</div>
</div>
<div className="text-center px-4 group">
<div className="text-4xl md:text-5xl font-normal text-white tracking-tighter mb-2 group-hover:scale-110 transition-transform text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">5.0</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Рейтинг в 2GIS</div>
</div>
<div className="text-center px-4 group">
<div className="text-4xl md:text-5xl font-normal text-white tracking-tighter mb-2 group-hover:scale-110 transition-transform text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">10+</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Лет опыта врачей</div>
</div>
<div className="text-center px-4 group">
<div className="text-4xl md:text-5xl font-normal text-white tracking-tighter mb-2 group-hover:scale-110 transition-transform text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">100%</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest">Стерильность</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="approach">
<div className="max-w-7xl mx-auto">
<div className="js-reveal reveal-hidden mb-16 max-w-2xl">
<h2 className="text-3xl md:text-5xl font-normal tracking-tighter text-white mb-6">Мы знаем, почему вы откладываете визит</h2>
<p className="text-base text-zinc-400 font-light leading-relaxed">Стандартный подход к лечению зубов часто ассоциируется с дискомфортом. Мы перестроили все процессы, интегрировав 3D-технологии, чтобы ваш опыт был иным.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="perspective-1000 js-reveal reveal-hidden">
<div className="glass-panel p-8 rounded-3xl h-full card-3d-hover relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 bg-zinc-900/50 rounded-2xl border border-white/10 flex items-center justify-center text-blue-400 mb-8 relative z-10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
<iconify-icon className="text-2xl" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white tracking-tight mb-4 relative z-10">Страх боли</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10">
                                Используем многоступенчатую анестезию. Вы не почувствуете даже момент укола благодаря специальному гелю. Лечение проходит в состоянии полного покоя.
                            </p>
</div>
</div>

<div className="perspective-1000 js-reveal reveal-hidden" style={{transitionDelay: '100ms'}}>
<div className="glass-panel p-8 rounded-3xl h-full card-3d-hover relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 bg-zinc-900/50 rounded-2xl border border-white/10 flex items-center justify-center text-indigo-400 mb-8 relative z-10 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white tracking-tight mb-4 relative z-10">Непрозрачные цены</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10">
                                После 3D-диагностики составляем подробный финансовый план. Цена фиксируется до начала лечения и не меняется в процессе.
                            </p>
</div>
</div>

<div className="perspective-1000 js-reveal reveal-hidden" style={{transitionDelay: '200ms'}}>
<div className="glass-panel p-8 rounded-3xl h-full card-3d-hover relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 bg-zinc-900/50 rounded-2xl border border-white/10 flex items-center justify-center text-zinc-300 mb-8 relative z-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<iconify-icon className="text-2xl" icon="solar:history-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white tracking-tight mb-4 relative z-10">Потеря времени</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed relative z-10">
                                Все специалисты работают в одном месте. Мы не отправляем пациентов в другие клиники для снимков или сложных процедур.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-zinc-950 relative" id="services">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 js-reveal reveal-hidden">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-normal tracking-tighter text-white mb-6">Направления лечения</h2>
<p className="text-base text-zinc-400 font-light">Комплексный подход к здоровью полости рта. От профессиональной 3D-диагностики до тотальной реабилитации улыбки.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-1000">

<div className="js-reveal reveal-hidden group relative rounded-3xl overflow-hidden glass-panel aspect-[4/3] md:aspect-auto md:h-[28rem] card-3d-hover transform-3d">
<img alt="Имплантация" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
<div className="absolute inset-0 p-10 flex flex-col justify-end transform-3d" style={{transform: 'translateZ(30px)'}}>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center">
<iconify-icon className="text-2xl text-white" icon="solar:bone-linear"></iconify-icon>
</div>
<h3 className="text-3xl font-normal tracking-tighter text-white">Имплантация</h3>
</div>
<p className="text-sm text-zinc-300 font-light max-w-md leading-relaxed">Восстановление утраченных зубов с пожизненной гарантией на системы имплантатов. Безболезненно и эстетично, с использованием 3D-шаблонов.</p>
</div>
</div>

<div className="js-reveal reveal-hidden group relative rounded-3xl overflow-hidden glass-panel aspect-[4/3] md:aspect-auto md:h-[28rem] card-3d-hover transform-3d" style={{transitionDelay: '100ms'}}>
<img alt="Эстетика" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
<div className="absolute inset-0 p-10 flex flex-col justify-end transform-3d" style={{transform: 'translateZ(30px)'}}>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center">
<iconify-icon className="text-2xl text-white" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-3xl font-normal tracking-tighter text-white">Виниры и эстетика</h3>
</div>
<p className="text-sm text-zinc-300 font-light max-w-md leading-relaxed">Керамические реставрации для создания безупречной, но естественной архитектуры улыбки. Цифровое моделирование результата.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="cases">
<div className="max-w-7xl mx-auto">
<div className="js-reveal reveal-hidden mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-normal tracking-tighter text-white mb-6">Ювелирная точность в деталях</h2>
<p className="text-base text-zinc-400 font-light">Результаты до и после. Потяните ползунок, чтобы увидеть разницу.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">

<div className="js-reveal reveal-hidden transform-3d card-3d-hover relative w-full aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/10 group" style={{'--val': '50%'}}>

<img alt="После" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 w-full h-full pointer-events-none" style={{clipPath: 'polygon(0 0, var(--val) 0, var(--val) 100%, 0 100%)'}}>

<img alt="До" className="absolute inset-0 w-full h-full object-cover saturate-50 contrast-75 brightness-90" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-6 left-6 z-0 glass-panel px-4 py-1.5 rounded-full text-xs text-white backdrop-blur-xl pointer-events-none shadow-lg">До</div>
<div className="absolute top-6 right-6 z-0 glass-panel px-4 py-1.5 rounded-full text-xs text-white backdrop-blur-xl pointer-events-none shadow-lg">После</div>

<div className="absolute bottom-6 left-6 right-6 z-0 glass-panel p-4 rounded-2xl pointer-events-none">
<h4 className="text-white font-normal text-sm mb-1">Тотальная реабилитация</h4>
<p className="text-zinc-400 text-xs font-light">Керамические виниры e.max</p>
</div>

<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0" max="100" min="0" oninput="this.parentNode.style.setProperty('--val', this.value + '%')" type="range" value="50"/>

<div className="absolute top-0 bottom-0 w-0.5 bg-white/80 z-10 pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-75" style={{left: 'var(--val)', transform: 'translateX(-50%)'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-zinc-900/80 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center text-white shadow-2xl">
<iconify-icon className="text-sm" icon="solar:alt-arrow-left-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="js-reveal reveal-hidden transform-3d card-3d-hover relative w-full aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/10 group" style={{'--val': '50%', transitionDelay: '100ms'}}>

<img alt="После" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1590625624220-424f1c991b8d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 w-full h-full pointer-events-none" style={{clipPath: 'polygon(0 0, var(--val) 0, var(--val) 100%, 0 100%)'}}>
<img alt="До" className="absolute inset-0 w-full h-full object-cover saturate-50 contrast-75 brightness-90" src="https://images.unsplash.com/photo-1560961803-0c48e8940604?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-6 left-6 z-0 glass-panel px-4 py-1.5 rounded-full text-xs text-white backdrop-blur-xl pointer-events-none shadow-lg">До</div>
<div className="absolute top-6 right-6 z-0 glass-panel px-4 py-1.5 rounded-full text-xs text-white backdrop-blur-xl pointer-events-none shadow-lg">После</div>
<div className="absolute bottom-6 left-6 right-6 z-0 glass-panel p-4 rounded-2xl pointer-events-none">
<h4 className="text-white font-normal text-sm mb-1">Имплантация All-on-4</h4>
<p className="text-zinc-400 text-xs font-light">Восстановление зубного ряда</p>
</div>

<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0" max="100" min="0" oninput="this.parentNode.style.setProperty('--val', this.value + '%')" type="range" value="50"/>

<div className="absolute top-0 bottom-0 w-0.5 bg-white/80 z-10 pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-75" style={{left: 'var(--val)', transform: 'translateX(-50%)'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-zinc-900/80 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center text-white shadow-2xl">
<iconify-icon className="text-sm" icon="solar:alt-arrow-left-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white/[0.01] border-y border-white/5" id="team">
<div className="max-w-7xl mx-auto">
<div className="js-reveal reveal-hidden mb-16 text-center">
<h2 className="text-3xl md:text-5xl font-normal tracking-tighter text-white mb-6">Создаем улыбки</h2>
<p className="text-base text-zinc-400 font-light max-w-2xl mx-auto">Сплоченная команда профильных специалистов. Каждый врач регулярно проходит обучение у мировых экспертов.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

<div className="md:col-span-2 relative rounded-3xl overflow-hidden glass-panel group js-reveal reveal-hidden card-3d-hover">
<img alt="Главный врач" className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-light mb-3 border border-blue-500/20">
                                Главный врач / Ортопед
                            </div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-2">Александр Смирнов</h3>
<p className="text-sm text-zinc-400 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                                Эксперт в области эстетического протезирования и тотальной реабилитации. Опыт работы более 15 лет.
                            </p>
</div>
</div>

<div className="md:col-span-1 relative rounded-3xl overflow-hidden glass-panel group js-reveal reveal-hidden card-3d-hover" style={{transitionDelay: '100ms'}}>
<img alt="Хирург" className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1594824436998-d50d03b0c51b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-xs text-indigo-300 font-light mb-2 uppercase tracking-widest">Хирург-имплантолог</div>
<h3 className="text-xl font-normal text-white tracking-tight">Елена Давыдова</h3>
</div>
</div>

<div className="md:col-span-1 relative rounded-3xl overflow-hidden glass-panel group js-reveal reveal-hidden card-3d-hover">
<img alt="Терапевт" className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1651008376811-b90ba11ea3cb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="text-xs text-zinc-400 font-light mb-2 uppercase tracking-widest">Эндодонтист</div>
<h3 className="text-xl font-normal text-white tracking-tight">Мария Ким</h3>
</div>
</div>

<div className="md:col-span-2 relative rounded-3xl overflow-hidden glass-panel group js-reveal reveal-hidden card-3d-hover" style={{transitionDelay: '100ms'}}>
<img alt="Ортодонт" className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-zinc-300 text-xs font-light mb-3 border border-white/10">
                                Врач-ортодонт
                            </div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-2">Денис Волков</h3>
<p className="text-sm text-zinc-400 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                                Специалист по элайнерам и цифровой ортодонтии. Создает идеальный прикус незаметно для окружающих.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 overflow-hidden relative" id="reviews">
<div className="max-w-7xl mx-auto">
<div className="js-reveal reveal-hidden mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-normal tracking-tighter text-white mb-4">Нам доверяют самое ценное</h2>
<p className="text-base text-zinc-400 font-light">Реальные истории пациентов Дельта Стом.</p>
</div>
<a className="text-sm font-light text-blue-400 hover:text-white flex items-center gap-2 transition-colors glass-panel px-6 py-3 rounded-full" href="https://go.2gis.com/y7J7q" target="_blank">
                        Читать все отзывы в 2GIS
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="flex gap-6 overflow-x-auto pb-12 pt-4 no-scrollbar snap-x js-reveal reveal-hidden">

<div className="min-w-[320px] md:min-w-[450px] glass-panel p-10 rounded-3xl snap-center hover:-translate-y-2 transition-transform duration-500">
<div className="flex text-blue-400 mb-6 text-xl">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-zinc-300 font-light leading-relaxed mb-8">«Первый раз в жизни заснула на приеме у стоматолога! Лечила сложный пульпит под микроскопом. Никакой боли, врач все комментировал. Очень чистая и современная клиника.»</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-normal text-white">АК</div>
<div className="text-sm font-normal text-white">Алия К.</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[450px] glass-panel p-10 rounded-3xl snap-center hover:-translate-y-2 transition-transform duration-500">
<div className="flex text-blue-400 mb-6 text-xl">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-zinc-300 font-light leading-relaxed mb-8">«Ставил имплант. Боялся жутко, но все прошло минут за 20. На следующий день даже обезболивающее не пил. Понравилось, что цену назвали сразу и она не поменялась.»</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-normal text-white">ДТ</div>
<div className="text-sm font-normal text-white">Данияр Т.</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[450px] glass-panel p-10 rounded-3xl snap-center hover:-translate-y-2 transition-transform duration-500">
<div className="flex text-blue-400 mb-6 text-xl">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-zinc-300 font-light leading-relaxed mb-8">«Пришла переделывать работу другой клиники. Спасли зуб! Оборудование космос, отношение к пациенту на высшем уровне. Теперь только сюда всей семьей.»</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-normal text-white">МС</div>
<div className="text-sm font-normal text-white">Мадина С.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-3xl mx-auto js-reveal reveal-hidden">
<h2 className="text-3xl md:text-5xl font-normal tracking-tighter text-white mb-12 text-center">Частые вопросы</h2>
<div className="space-y-4">
<details className="group glass-panel rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 md:p-8 text-white">
<h3 className="font-normal text-lg tracking-tight">Это больно? Я очень боюсь стоматологов.</h3>
<span className="transition duration-300 group-open:-rotate-180 bg-white/5 p-2 rounded-full">
<iconify-icon className="text-xl text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 md:px-8 pb-8 text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                            Абсолютно нет. Мы используем современные анестетики и специальные техники введения (предварительно обезболиваем десну гелем). Большинство пациентов во время лечения смотрят фильмы или просто спят.
                        </div>
</details>
<details className="group glass-panel rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 md:p-8 text-white">
<h3 className="font-normal text-lg tracking-tight">Как узнать точную стоимость лечения?</h3>
<span className="transition duration-300 group-open:-rotate-180 bg-white/5 p-2 rounded-full">
<iconify-icon className="text-xl text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 md:px-8 pb-8 text-sm md:text-base text-zinc-400 font-light leading-relaxed">
                            Точную стоимость мы сможем назвать после очной консультации и 3D-снимка (КТ). Мы составляем подробный финансовый план, где расписан каждый этап. Сумма фиксируется и не меняется в процессе.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6" id="contacts">
<div className="max-w-7xl mx-auto">
<div className="glass-panel rounded-[2.5rem] p-10 md:p-20 relative overflow-hidden js-reveal reveal-hidden border-t border-white/20">
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-16">
<div className="max-w-xl text-center md:text-left">
<h2 className="text-4xl md:text-6xl font-normal tracking-tighter text-white mb-6">Сделайте первый шаг к здоровой улыбке</h2>
<p className="text-lg text-zinc-400 font-light mb-10 leading-relaxed">
                                Запишитесь на первичную 3D-консультацию. Врач проведет осмотр, сделает необходимые снимки и составит детальный план лечения.
                            </p>
<a className="inline-flex items-center gap-3 bg-white text-zinc-950 px-8 py-5 rounded-full text-base font-medium hover:bg-zinc-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 duration-300" href="tel:+77750077861">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                                Позвонить: +7‒775‒007‒78‒61
                            </a>
</div>

<div className="bg-zinc-950/50 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl w-full md:w-auto min-w-[320px]">
<h3 className="text-xl font-normal text-white mb-8 border-b border-white/10 pb-6 tracking-tight">Контакты клиники</h3>
<ul className="space-y-6 text-sm text-zinc-300 font-light">
<li className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
<iconify-icon className="text-2xl text-blue-400" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-white font-normal mb-1">Мы на карте (2GIS)</p>
<a className="hover:text-blue-400 transition-colors text-zinc-400" href="https://go.2gis.com/y7J7q" target="_blank">Открыть маршрут</a>
</div>
</li>
<li className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
<iconify-icon className="text-2xl text-blue-400" icon="solar:camera-minimalistic-linear"></iconify-icon>
</div>
<div>
<p className="text-white font-normal mb-1">Instagram</p>
<a className="hover:text-blue-400 transition-colors text-zinc-400" href="https://instagram.com/deltastom.kz" target="_blank">@deltastom.kz</a>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start gap-3">
<span className="text-xl font-normal tracking-tighter text-white flex items-center gap-2">
<iconify-icon className="text-2xl text-blue-500" icon="solar:tooth-linear"></iconify-icon>
                    DELTA STOM
                </span>
<p className="text-sm text-zinc-500 font-light">Инновационная цифровая стоматология</p>
</div>
<div className="text-xs text-zinc-500 font-light text-center md:text-right leading-relaxed">
<p>© 2024 Дельта Стом. Все права защищены.</p>
<p className="mt-2 text-zinc-600">Имеются противопоказания. Необходима консультация специалиста.</p>
</div>
</div>
</footer>

<div className="md:hidden fixed bottom-6 left-6 right-6 z-50 pointer-events-none flex justify-center">
<a className="pointer-events-auto w-full glass-panel bg-zinc-900/90 text-white px-6 py-4 rounded-full text-sm font-normal hover:bg-zinc-800 transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center gap-2 border border-white/10 backdrop-blur-xl" href="tel:+77750077861">
<iconify-icon className="text-lg text-blue-400" icon="solar:phone-calling-linear"></iconify-icon>
            Позвонить в клинику
        </a>
</div>



    </>
  );
}
