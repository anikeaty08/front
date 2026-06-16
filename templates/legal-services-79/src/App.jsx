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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-[#0B0C15]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse group" href="#">
<div className="bg-gradient-to-tr from-indigo-500 to-blue-600 text-white p-1.5 rounded-lg shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
<iconify-icon height="20" icon="solar:scale-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="self-center text-lg font-medium whitespace-nowrap text-white tracking-tight">Сургут<span className="text-slate-500">Право</span></span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<a className="text-black bg-white hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-indigo-900 font-medium rounded-full text-sm px-6 py-2.5 text-center transition-all duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.5)]" href="#contact">
                    Консультация
                </a>
<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-400 rounded-lg md:hidden hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-slate-600" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white/5 rounded-lg bg-white/5 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a className="block py-2 px-3 text-sm text-slate-400 rounded hover:bg-white/5 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors duration-300" href="#services">Услуги</a>
</li>
<li>
<a className="block py-2 px-3 text-sm text-slate-400 rounded hover:bg-white/5 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors duration-300" href="#about">О нас</a>
</li>
<li>
<a className="block py-2 px-3 text-sm text-slate-400 rounded hover:bg-white/5 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors duration-300" href="#faq">Вопросы</a>
</li>
<li>
<a className="block py-2 px-3 text-sm text-slate-400 rounded hover:bg-white/5 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors duration-300" href="#contacts">Контакты</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob"></div>
<div className="absolute top-20 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium tracking-wide uppercase backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Юридическая защита в Сургуте
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                    Правовая <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300 animate-gradient">уверенность</span> <br/>
                    в каждом шаге.
                </h1>
<p className="text-lg text-slate-400 max-w-lg leading-relaxed font-light">
                    Комплексная юридическая помощь нового поколения. Прозрачность процессов, современные подходы и фокус на результате.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="group inline-flex justify-center items-center py-3.5 px-8 text-sm font-medium text-center text-black bg-white rounded-full hover:bg-slate-200 focus:ring-4 focus:ring-indigo-900 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)]" href="#contact">
                        Начать работу
                        <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center py-3.5 px-8 text-sm font-medium text-center text-white border border-white/10 bg-white/5 rounded-full hover:bg-white/10 focus:ring-4 focus:ring-slate-800 transition-all backdrop-blur-sm" href="#services">
                        Наши услуги
                    </a>
</div>
<div className="pt-8 border-t border-white/10 flex items-center gap-8 text-slate-500 text-xs uppercase tracking-wider font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
<span>Опыт &gt; 10 лет</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
<span>98% побед</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
<span>Фикс. цены</span>
</div>
</div>
</div>
<div className="relative hidden lg:block perspective-1000">

<div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-1 backdrop-blur-md shadow-2xl shadow-indigo-500/10 rotate-y-12 rotate-x-6 transform transition-transform duration-500 hover:rotate-y-0 hover:rotate-x-0">
<div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px] rounded-2xl"></div>
<div className="relative rounded-xl overflow-hidden bg-[#0F111A]">
<img alt="Lawyer Office" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B0C15] via-transparent to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8 flex gap-4">
<div className="flex-1 bg-[#1A1D2D]/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-xl">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:gavel-bold" width="16"></iconify-icon>
</div>
<div className="text-xs text-slate-400">Статус дела</div>
</div>
<div className="text-white font-medium text-sm">Иск удовлетворен</div>
</div>
<div className="flex-1 bg-[#1A1D2D]/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-xl">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:calendar-bold" width="16"></iconify-icon>
</div>
<div className="text-xs text-slate-400">Консультация</div>
</div>
<div className="text-white font-medium text-sm">Сегодня, 14:00</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Наши компетенции</h2>
<p className="text-slate-400 text-lg">Специализируемся на ключевых областях права. Решаем сложные задачи простыми и понятными методами.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300 hover:bg-white/[0.04] overflow-hidden">
<div className="absolute right-0 top-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-600/20 border border-white/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:gavel-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Гражданские споры</h3>
<p className="text-slate-400 leading-relaxed text-sm max-w-md">Взыскание долгов, защита прав потребителей, имущественные споры и возмещение ущерба любой сложности. Мы берем на себя всю бюрократию.</p>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300 hover:bg-white/[0.04]">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 mb-6 group-hover:text-white group-hover:bg-white/10 transition-colors">
<iconify-icon height="24" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Семейное право</h3>
<p className="text-slate-500 text-sm">Расторжение брака, раздел имущества, алименты и вопросы опеки.</p>
</div>

<div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300 hover:bg-white/[0.04]">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 mb-6 group-hover:text-white group-hover:bg-white/10 transition-colors">
<iconify-icon height="24" icon="solar:home-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Жилищные вопросы</h3>
<p className="text-slate-500 text-sm">Споры с ЖКХ, выселение/вселение, узаконивание перепланировок.</p>
</div>

<div className="md:col-span-2 group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300 hover:bg-white/[0.04] overflow-hidden">
<div className="absolute left-0 bottom-0 -mb-10 -ml-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
<div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
<div>
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border border-white/10 flex items-center justify-center text-blue-400 mb-6 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Административное право</h3>
<p className="text-slate-400 leading-relaxed text-sm">Обжалование штрафов и постановлений государственных органов. Защита интересов бизнеса при проверках.</p>
</div>
<div className="hidden md:block">

<div className="bg-white/5 border border-white/10 rounded-xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
<div className="space-y-3">
<div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
<div className="h-2 w-full bg-white/10 rounded-full"></div>
<div className="h-2 w-5/6 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300 hover:bg-white/[0.04]">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 mb-6 group-hover:text-white group-hover:bg-white/10 transition-colors">
<iconify-icon height="24" icon="solar:wheel-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Автоюрист</h3>
<p className="text-slate-500 text-sm">Споры по ДТП, лишение прав, споры со страховыми (ОСАГО/КАСКО).</p>
</div>

<div className="md:col-span-3 group p-1 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20">
<div className="h-full w-full bg-[#0B0C15] rounded-[22px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
<div className="absolute inset-0 bg-white/[0.02]"></div>
<div className="relative z-10">
<h3 className="text-2xl font-semibold text-white mb-2">Не нашли свою проблему?</h3>
<p className="text-slate-400">Опишите вашу ситуацию, и мы подскажем оптимальное решение.</p>
</div>
<div className="relative z-10">
<a className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-indigo-50 transition-colors shadow-lg shadow-indigo-500/20" href="#contact">
                                Написать нам
                                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Доверие, основанное на результате</h2>
<p className="text-slate-400 mb-10 leading-relaxed text-lg font-light">
                        Мы понимаем местную специфику судебной системы Сургута и ХМАО. Наша цель — не просто оказать услугу, а реально решить вашу проблему с минимальными потерями времени и средств.
                    </p>
<div className="space-y-6">

<div className="flex gap-5 group">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 shadow-[0_0_15px_-5px_rgba(99,102,241,0.3)] group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="22" icon="solar:map-point-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Местная экспертиза</h4>
<p className="text-slate-500 text-sm">Знаем тонкости работы судов Сургута и округа изнутри.</p>
</div>
</div>

<div className="flex gap-5 group">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 shadow-[0_0_15px_-5px_rgba(99,102,241,0.3)] group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="22" icon="solar:shield-check-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Прозрачность</h4>
<p className="text-slate-500 text-sm">Честно оцениваем перспективы дела на первой консультации. Никаких ложных надежд.</p>
</div>
</div>

<div className="flex gap-5 group">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 shadow-[0_0_15px_-5px_rgba(99,102,241,0.3)] group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="22" icon="solar:wallet-money-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">Фиксированные цены</h4>
<p className="text-slate-500 text-sm">Стоимость услуг прописывается в договоре и не меняется.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500 rounded-full mix-blend-screen filter blur-[60px] opacity-20"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-screen filter blur-[60px] opacity-20"></div>
<div className="relative bg-[#13151f] p-3 rounded-2xl border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700">
<img alt="Meeting" className="rounded-xl w-full object-cover h-[500px] opacity-80 hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white">Истории успеха</h2>
<p className="text-slate-500 mt-2">Реальные люди, реальные дела, реальные результаты.</p>
</div>
<div className="hidden sm:flex gap-3">
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
<iconify-icon height="20" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 px-6 pb-8 no-scrollbar snap-x snap-mandatory max-w-7xl mx-auto">

<div className="min-w-[320px] md:min-w-[400px] p-8 bg-gradient-to-b from-white/[0.03] to-white/[0.01] rounded-3xl border border-white/[0.05] snap-center backdrop-blur-sm">
<div className="flex items-center gap-1 text-indigo-400 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 mb-8 italic leading-relaxed text-sm">"Огромное спасибо за помощь в разделе имущества. Муж не хотел идти на уступки, но юристы грамотно составили иск и отстояли мои права. Очень профессионально."</p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 flex items-center justify-center text-white font-semibold text-xs shadow-lg shadow-indigo-500/20">ЕК</div>
<div>
<p className="text-sm font-medium text-white">Елена К.</p>
<p className="text-xs text-slate-500">Гражданское дело</p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] p-8 bg-gradient-to-b from-white/[0.03] to-white/[0.01] rounded-3xl border border-white/[0.05] snap-center backdrop-blur-sm">
<div className="flex items-center gap-1 text-indigo-400 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 mb-8 italic leading-relaxed text-sm">"Помогли оспорить незаконный штраф ГИБДД и вернуть водительские права. Всегда на связи, объясняют всё простым человеческим языком, без заумных фраз."</p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 flex items-center justify-center text-white font-semibold text-xs">АМ</div>
<div>
<p className="text-sm font-medium text-white">Алексей М.</p>
<p className="text-xs text-slate-500">Административное дело</p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] p-8 bg-gradient-to-b from-white/[0.03] to-white/[0.01] rounded-3xl border border-white/[0.05] snap-center backdrop-blur-sm">
<div className="flex items-center gap-1 text-indigo-400 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-slate-300 mb-8 italic leading-relaxed text-sm">"Обращался по вопросу защиты прав потребителей. Магазин отказывался возвращать деньги за брак. Вернули деньги и компенсацию сверху."</p>
<div className="flex items-center gap-4 border-t border-white/5 pt-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 flex items-center justify-center text-white font-semibold text-xs shadow-lg shadow-indigo-500/20">ДП</div>
<div>
<p className="text-sm font-medium text-white">Дмитрий П.</p>
<p className="text-xs text-slate-500">Защита прав потребителей</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.01]" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center text-white mb-12">Вопросы и ответы</h2>
<div className="space-y-4">
<details className="group bg-white/[0.02] rounded-2xl border border-white/[0.05] p-5 cursor-pointer open:bg-white/[0.04] transition-all duration-300">
<summary className="flex justify-between items-center font-medium text-slate-200">
                        Сколько стоит первичная консультация?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 mt-4 text-sm leading-relaxed border-t border-white/10 pt-4">
                        Краткая первичная консультация по телефону бесплатна. Полноценная консультация с изучением документов в офисе стоит от 1000 рублей, которая вычитается из стоимости услуг при заключении договора.
                    </div>
</details>
<details className="group bg-white/[0.02] rounded-2xl border border-white/[0.05] p-5 cursor-pointer open:bg-white/[0.04] transition-all duration-300">
<summary className="flex justify-between items-center font-medium text-slate-200">
                        Какие документы нужно взять на встречу?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 mt-4 text-sm leading-relaxed border-t border-white/10 pt-4">
                        Возьмите паспорт и все документы, относящиеся к вашему делу (договоры, переписку, иски, постановления). Чем больше информации у нас будет, тем точнее мы оценим ситуацию.
                    </div>
</details>
<details className="group bg-white/[0.02] rounded-2xl border border-white/[0.05] p-5 cursor-pointer open:bg-white/[0.04] transition-all duration-300">
<summary className="flex justify-between items-center font-medium text-slate-200">
                        Вы даете гарантию выигрыша дела?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-400 mt-4 text-sm leading-relaxed border-t border-white/10 pt-4">
                        Согласно кодексу этики, юрист не имеет права гарантировать 100% результат, так как решение принимает суд. Однако мы гарантируем, что приложим максимум усилий и профессионализма для защиты ваших интересов.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#05060A] text-white pt-24 pb-12 border-t border-white/5 relative" id="contact">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20">

<div>
<h3 className="text-2xl font-semibold mb-3">Запишитесь на консультацию</h3>
<p className="text-slate-400 mb-10 text-sm">Оставьте заявку, и мы свяжемся с вами в течение 15 минут.</p>
<form className="space-y-5">
<div className="grid md:grid-cols-2 gap-5">
<div>
<label className="block mb-2 text-xs font-medium text-slate-400 uppercase tracking-wide" htmlFor="name">Ваше имя</label>
<input className="bg-white/[0.03] border border-white/10 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3.5 placeholder-slate-600 transition-colors" id="name" placeholder="Иван Иванов" required="" type="text"/>
</div>
<div>
<label className="block mb-2 text-xs font-medium text-slate-400 uppercase tracking-wide" htmlFor="phone">Телефон</label>
<input className="bg-white/[0.03] border border-white/10 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3.5 placeholder-slate-600 transition-colors" id="phone" placeholder="+7 (999) 000-00-00" required="" type="tel"/>
</div>
</div>
<div>
<label className="block mb-2 text-xs font-medium text-slate-400 uppercase tracking-wide" htmlFor="topic">Тип вопроса</label>
<select className="bg-white/[0.03] border border-white/10 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3.5 text-slate-300 transition-colors [&amp;&gt;option]:bg-[#0B0C15]" id="topic">
<option>Гражданский спор</option>
<option>Семейное право</option>
<option>Административное дело</option>
<option>Другое</option>
</select>
</div>
<div>
<label className="block mb-2 text-xs font-medium text-slate-400 uppercase tracking-wide" htmlFor="message">Ситуация</label>
<textarea className="bg-white/[0.03] border border-white/10 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3.5 placeholder-slate-600 transition-colors" id="message" placeholder="Кратко опишите проблему..." rows="4"></textarea>
</div>
<button className="w-full text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-900 font-medium rounded-lg text-sm px-5 py-4 text-center transition-all shadow-[0_0_20px_-5px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_-5px_rgba(79,70,229,0.5)]" type="submit">
                            Отправить заявку
                        </button>
<p className="text-xs text-slate-500 text-center mt-3">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
</form>
</div>

<div className="space-y-10">
<div>
<h3 className="text-xl font-semibold mb-6 text-white">Контакты</h3>
<ul className="space-y-6 text-slate-400">
<li className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-colors">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 uppercase">Телефон</p>
<a className="text-white hover:text-indigo-400 transition" href="tel:+73462000000">+7 (3462) 00-00-00</a>
</div>
</li>
<li className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-colors">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 uppercase">Email</p>
<a className="text-white hover:text-indigo-400 transition" href="mailto:info@surgut-pravo.ru">info@surgut-pravo.ru</a>
</div>
</li>
<li className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-colors">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 uppercase">Адрес</p>
<span className="text-white">г. Сургут, пр. Ленина, д. 41, Офис 305</span>
</div>
</li>
</ul>
</div>

<div className="w-full h-64 bg-[#13151f] rounded-2xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0B0C15] to-[#0B0C15]"></div>
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="z-10 bg-[#0B0C15] p-3 rounded-full border border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
<iconify-icon className="text-indigo-500" icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<span className="text-slate-300 z-10 font-medium mt-3 text-sm">Показать на карте</span>
<a aria-label="Open Map" className="absolute inset-0 z-20" href="#"></a>
</div>
</div>
</div>
<div className="border-t border-white/5 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
<p>© 2026 Сургут-Право. Дизайн будущего.</p>
<div className="flex gap-8 mt-4 md:mt-0">
<a className="hover:text-white transition" href="#">Конфиденциальность</a>
<a className="hover:text-white transition" href="#">Оферта</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
