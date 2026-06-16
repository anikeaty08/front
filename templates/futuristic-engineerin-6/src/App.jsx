import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
cream: '#EDEBDD',
dark: '#1B1717',
red: '#810100',
'dark-red': '#630000',
'deep-black': '#0a0a0a'
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed left-6 bottom-6 z-40 hidden lg:flex flex-col gap-4 mix-blend-difference text-cream pointer-events-none">
<span className="font-mono text-[10px] rotate-180" style={{writingMode: 'vertical-rl'}}>
<span className="lang-en">SYSTEM_ONLINE</span>
<span className="lang-ru">СИСТЕМА_ОНЛАЙН</span>
</span>
<div className="h-12 w-px bg-cream"></div>
<span className="font-cn text-xs" style={{writingMode: 'vertical-rl'}}>多尔戈波洛夫</span>
</div>

<header className="fixed top-0 left-0 w-full bg-cream/90 dark:bg-deep-black/90 backdrop-blur-md z-50 border-b border-red/20 transition-colors duration-300">
<div className="max-w-[1920px] mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="relative w-6 h-6 flex items-center justify-center bg-red text-cream">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="orbit"></i>
</div>
<div className="flex flex-col leading-none">
<span className="uppercase text-base font-bold tracking-[0.1em] font-mono dark:text-cream">DOLGOPOLOV</span>
</div>
</div>
<nav className="hidden md:flex gap-8 text-sm font-medium tracking-tight items-center text-dark dark:text-cream">
<a className="hover:text-red transition-colors flex gap-1" href="#hero">
<span className="lang-en">Index</span><span className="lang-ru">Главная</span>
<span className="text-[10px] font-mono align-top text-red">01</span>
</a>
<a className="hover:text-red transition-colors flex gap-1" href="#philosophy">
<span className="lang-en">Philosophy</span><span className="lang-ru">Философия</span>
<span className="text-[10px] font-mono align-top text-red">02</span>
</a>
<a className="hover:text-red transition-colors flex gap-1" href="#works">
<span className="lang-en">Engineering</span><span className="lang-ru">Инженерия</span>
<span className="text-[10px] font-mono align-top text-red">03</span>
</a>
<a className="hover:text-red transition-colors flex gap-1" href="#contact">
<span className="lang-en">Signal</span><span className="lang-ru">Контакты</span>
<span className="text-[10px] font-mono align-top text-red">04</span>
</a>
</nav>
<div className="flex items-center gap-4">

<button className="font-mono text-xs font-bold hover:text-red transition-colors w-8" onclick="document.body.classList.toggle('lang-ru')">
<span className="lang-en">RU</span>
<span className="lang-ru">EN</span>
</button>

<button className="hover:text-red transition-colors" onclick="document.documentElement.classList.toggle('dark')">
<i className="w-4 h-4 hidden dark:block" data-lucide="sun"></i>
<i className="w-4 h-4 block dark:hidden" data-lucide="moon"></i>
</button>
<a className="hidden sm:flex px-5 py-2 bg-dark dark:bg-cream text-cream dark:text-dark hover:bg-red dark:hover:bg-red hover:text-cream dark:hover:text-cream transition-colors text-xs font-mono uppercase tracking-wider border border-dark dark:border-cream items-center gap-2 group" href="#contact">
<i className="w-3 h-3 group-hover:text-cream transition-colors" data-lucide="zap"></i>
<span className="lang-en">Connect</span><span className="lang-ru">Связь</span>
</a>
</div>
</div>
</header>

<main className="pt-20 relative">
<div className="fixed inset-0 pointer-events-none z-0 y2k-grid dark:opacity-10"></div>

<section className="min-h-[90vh] flex flex-col justify-center border-b border-red/20 bg-cream dark:bg-deep-black relative overflow-hidden transition-colors duration-300" id="hero">

<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] border border-red/5 rounded-full z-0 flex items-center justify-center">
<div className="w-[600px] h-[600px] border border-red/10 rounded-full"></div>
</div>
<div className="md:px-12 w-full max-w-[1920px] z-10 mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-end">

<div className="lg:col-span-7 relative z-10 pb-12 lg:pb-0">
<div className="mb-12">
<div className="flex items-center gap-2 mb-6">
<span className="inline-block px-3 py-1 bg-red text-cream text-[10px] font-mono uppercase tracking-widest">
<span className="lang-en">System Ready</span>
<span className="lang-ru">Система готова</span>
</span>
<span className="text-[10px] font-mono text-red uppercase tracking-widest">Lat: 55.7558° N</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.85] uppercase text-dark dark:text-cream">
<span className="lang-en">Pure</span><span className="lang-ru">Чистая</span><br/>
<span className="text-red"><span className="lang-en">Form</span><span className="lang-ru">Форма</span></span><br/>
<span className="lang-en">Function</span><span className="lang-ru">Функция</span>
</h1>
</div>
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center border-t border-red/20 pt-8 max-w-2xl">
<div className="w-16 h-16 bg-dark dark:bg-cream text-cream dark:text-dark flex items-center justify-center shrink-0">
<span className="font-cn text-2xl font-bold">力</span>
</div>
<p className="text-sm md:text-base text-dark/80 dark:text-cream/80 leading-relaxed max-w-md font-medium">
<span className="lang-en">Essentialism meets Futurism. We engineer clean forms for complex industrial functions in the post-digital age.</span>
<span className="lang-ru">Эссенциализм встречается с футуризмом. Мы создаем чистые формы для сложных промышленных задач постцифровой эпохи.</span>
</p>
</div>
</div>

<div className="lg:col-span-5 w-full h-[50vh] lg:h-[70vh] relative group">

<div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-red z-20"></div>
<div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-red z-20"></div>
<div className="absolute inset-0 bg-cream border border-red grayscale contrast-125 overflow-hidden">
<img alt="Industrial Design" className="w-full h-full object-cover opacity-90 mix-blend-multiply hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute top-0 left-0 p-4 border-r border-b border-red bg-cream dark:bg-deep-black z-10 transition-colors">
<span className="font-mono text-xs text-red">FIG. 01 // <span className="font-cn">宇宙</span></span>
</div>
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-red/30 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-red rounded-full"></div>
</div>
<div className="absolute top-1/2 left-0 w-full h-px bg-red/20"></div>
<div className="absolute top-0 left-1/2 h-full w-px bg-red/20"></div>
</div>
<div className="absolute bottom-4 right-4 flex items-center gap-2 text-cream font-mono text-[10px] uppercase tracking-widest mix-blend-difference z-20">
<span>Log 2025</span>
<div className="w-8 h-px bg-cream"></div>
<span className="lang-en">Scanning...</span>
<span className="lang-ru">Сканирование...</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-dark dark:bg-[#050505] text-cream border-b border-red/30 overflow-hidden relative transition-colors duration-300" id="philosophy">

<div className="absolute top-10 right-20 text-red opacity-50">✦</div>
<div className="absolute bottom-20 left-10 text-red opacity-50 text-2xl">✦</div>
<div className="md:px-12 md:py-32 max-w-[1920px] z-10 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div className="flex flex-col justify-between h-full">
<div className="space-y-2">
<div className="flex justify-between items-center">
<h2 className="text-sm font-mono uppercase tracking-widest text-red">
<span className="lang-en">001 — Identity</span>
<span className="lang-ru">001 — Идентичность</span>
</h2>
<span className="font-cn text-xs text-dark-red">身份</span>
</div>
<div className="w-full h-px bg-red/30 my-4"></div>
</div>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mt-8 lg:mt-0">
<span className="lang-en">Synthesis of <span className="text-red">Essentialism</span> and <span className="italic font-mono">Space-Age</span> Geometry.</span>
<span className="lang-ru">Синтез <span className="text-red">Эссенциализма</span> и Геометрии <span className="italic font-mono">Космической Эры</span>.</span>
</h3>
</div>
<div className="space-y-12">
<p className="text-lg text-cream/80 leading-relaxed font-light">
<span className="lang-en">My approach solves complex problems through reduction. Drawing inspiration from brutalist aesthetics and Asian futurism—precision, balance, and silent power. We build for the orbital age.</span>
<span className="lang-ru">Мой подход решает сложные задачи через редукцию. Вдохновляясь бруталистской эстетикой и азиатским футуризмом — точность, баланс и тихая сила. Мы строим для орбитальной эры.</span>
</p>
<div className="grid grid-cols-2 gap-0 border border-red/30">
<div className="hover:bg-red/10 transition-colors group border-red/30 border-r pt-8 pr-8 pb-8 pl-8">
<i className="w-6 h-6 stroke-[1.5] mb-4 text-red group-hover:text-cream transition-colors" data-lucide="layers"></i>
<h4 className="font-mono text-xs uppercase tracking-widest text-dark-red mb-2 group-hover:text-cream">
<span className="lang-en">Method</span><span className="lang-ru">Метод</span>
</h4>
<span className="text-xl font-medium">
<span className="lang-en">Reduction</span><span className="lang-ru">Редукция</span>
</span>
</div>
<div className="p-8 hover:bg-red/10 transition-colors group">
<i className="w-6 h-6 stroke-[1.5] mb-4 text-red group-hover:text-cream transition-colors" data-lucide="maximize"></i>
<h4 className="font-mono text-xs uppercase tracking-widest text-dark-red mb-2 group-hover:text-cream">
<span className="lang-en">Focus</span><span className="lang-ru">Фокус</span>
</h4>
<span className="text-xl font-medium">
<span className="lang-en">Scale</span><span className="lang-ru">Масштаб</span>
</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-cream dark:bg-deep-black transition-colors duration-300" id="works">

<div className="border-b border-red/20 bg-cream dark:bg-deep-black transition-colors">
<div className="max-w-[1920px] mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-end">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-mono uppercase tracking-widest text-red block">
<span className="lang-en">002 — Prototype Log</span>
<span className="lang-ru">002 — Журнал Прототипов</span>
</span>
<div className="h-px w-8 bg-red"></div>
</div>
<h3 className="text-5xl font-semibold tracking-tighter uppercase text-dark dark:text-cream">
<span className="lang-en">Engineering</span><span className="lang-ru">Инженерия</span>
</h3>
</div>
<div className="flex gap-2 mt-6 md:mt-0">
<button className="w-10 h-10 border border-dark dark:border-cream bg-cream dark:bg-deep-black text-dark dark:text-cream flex items-center justify-center hover:bg-red hover:text-cream hover:border-red transition-colors">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 border border-dark dark:border-cream bg-cream dark:bg-deep-black text-dark dark:text-cream flex items-center justify-center hover:bg-red hover:text-cream hover:border-red transition-colors">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 border-b border-red/20">

<div className="group border-b md:border-b-0 md:border-r border-red/20 bg-cream dark:bg-deep-black relative hover:bg-red transition-colors duration-500">
<div className="aspect-[4/5] w-full overflow-hidden grayscale relative p-4">
<div className="absolute top-8 left-8 z-10 bg-cream px-2 border border-dark text-[10px] font-mono uppercase tracking-widest text-dark">
<span className="lang-en">Robotics // </span><span className="lang-ru">Робототехника // </span> <span className="font-cn">机器人技术</span>
</div>
<div className="w-full h-full border border-dark/10 group-hover:border-cream/20 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:contrast-125 transition-all duration-700 mix-blend-multiply group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>

<div className="absolute bottom-2 right-2 text-cream font-mono text-[8px] hidden group-hover:block">
                                DATA_STREAM_ACTIVE
                            </div>
</div>
</div>
<div className="p-6 border-t border-red/20 group-hover:border-cream/20">
<div className="flex justify-between items-center group-hover:text-cream text-dark dark:text-cream">
<h4 className="text-xl font-medium tracking-tight">Drone V4</h4>
<span className="text-xs font-mono opacity-60">2024</span>
</div>
</div>
</div>

<div className="group border-b md:border-b-0 md:border-r border-red/20 bg-cream dark:bg-deep-black relative hover:bg-red transition-colors duration-500">
<div className="aspect-[4/5] w-full overflow-hidden grayscale relative p-4">
<div className="absolute top-8 left-8 z-10 bg-cream px-2 border border-dark text-[10px] font-mono uppercase tracking-widest text-dark">
<span className="lang-en">Interface // </span><span className="lang-ru">Интерфейс // </span> <span className="font-cn">界面设计</span>
</div>
<div className="w-full h-full border border-dark/10 group-hover:border-cream/20 overflow-hidden">
<img className="w-full h-full object-cover group-hover:contrast-125 transition-all duration-700 mix-blend-multiply group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>
<div className="p-6 border-t border-red/20 group-hover:border-cream/20">
<div className="flex justify-between items-center group-hover:text-cream text-dark dark:text-cream">
<h4 className="text-xl font-medium tracking-tight">Haptic Wearable</h4>
<span className="text-xs font-mono opacity-60">2023</span>
</div>
</div>
</div>

<div className="group bg-cream dark:bg-deep-black relative hover:bg-red transition-colors duration-500">
<div className="aspect-[4/5] w-full overflow-hidden grayscale relative p-4">
<div className="absolute top-8 left-8 z-10 bg-cream px-2 border border-dark text-[10px] font-mono uppercase tracking-widest text-dark">
<span className="lang-en">Structure // </span><span className="lang-ru">Структура // </span> <span className="font-cn">结构工程</span>
</div>
<div className="w-full h-full border border-dark/10 group-hover:border-cream/20 overflow-hidden">
<img className="w-full h-full object-cover group-hover:contrast-125 transition-all duration-700 mix-blend-multiply group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>
<div className="p-6 border-t border-red/20 group-hover:border-cream/20">
<div className="flex justify-between items-center group-hover:text-cream text-dark dark:text-cream">
<h4 className="text-xl font-medium tracking-tight">Carbon Frame</h4>
<span className="text-xs font-mono opacity-60">2023</span>
</div>
</div>
</div>
</div>

<div className="py-16 md:py-24 px-6 text-center bg-cream dark:bg-deep-black border-b border-red/20 transition-colors">
<div className="flex justify-center items-center gap-4 mb-6">
<span className="text-red text-2xl">✦</span>
<i className="w-8 h-8 stroke-[1] text-dark dark:text-cream" data-lucide="orbit"></i>
<span className="text-red text-2xl">✦</span>
</div>
<p className="text-2xl md:text-3xl font-medium tracking-tight max-w-3xl mx-auto leading-tight font-mono text-dark dark:text-cream">
<span className="lang-en">"DESIGN IS NOT JUST WHAT IT LOOKS LIKE. DESIGN IS HOW IT <span className="bg-dark text-cream dark:bg-cream dark:text-dark px-1">WORKS</span>."</span>
<span className="lang-ru">"ДИЗАЙН — ЭТО НЕ ТОЛЬКО ВНЕШНИЙ ВИД. ДИЗАЙН — ЭТО ТО, КАК ОНО <span className="bg-dark text-cream dark:bg-cream dark:text-dark px-1">РАБОТАЕТ</span>."</span>
</p>
</div>
</section>

<section className="bg-dark-red text-cream py-24 px-6 md:px-12 border-t border-red relative overflow-hidden" id="contact">

<div className="absolute inset-0 y2k-grid opacity-10 pointer-events-none"></div>
<div className="max-w-[1920px] mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="flex flex-col justify-between h-full">
<div className="">
<div className="flex items-center gap-2 mb-6">
<div className="w-2 h-2 bg-cream animate-pulse"></div>
<span className="text-xs font-mono uppercase tracking-widest text-cream/70 block">
<span className="lang-en">003 — Signal // </span><span className="lang-ru">003 — Сигнал // </span> <span className="font-cn">信号</span>
</span>
</div>
<h3 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 leading-[0.9]">
<span className="lang-en">INITIATE</span><span className="lang-ru">ИНИЦИИРОВАТЬ</span><br/>
<span className="font-mono text-4xl md:text-6xl text-dark bg-cream px-2">
<span className="lang-en">PROTOCOL</span><span className="lang-ru">ПРОТОКОЛ</span>
</span>
</h3>
<p className="text-cream/80 max-w-md text-lg font-light leading-relaxed mb-12">
<span className="lang-en">Open for high-complexity engineering challenges.</span>
<span className="lang-ru">Открыт для сложных инженерных задач.</span>
<br/>
<span className="font-mono text-xs mt-2 block opacity-60">
<span className="lang-en">STATUS: AVAILABLE FOR DEPLOYMENT</span>
<span className="lang-ru">СТАТУС: ГОТОВ К РАЗВЕРТЫВАНИЮ</span>
</span>
</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 mt-8">
<a className="inline-flex items-center justify-center gap-3 bg-cream text-dark-red px-8 py-3 font-mono text-sm uppercase tracking-wider hover:bg-dark hover:text-cream transition-colors" href="mailto:engineer@future.com">
                                 Email
                             </a>
<a className="inline-flex items-center justify-center gap-3 border border-cream/30 text-cream px-8 py-3 font-mono text-sm uppercase tracking-wider hover:bg-cream hover:text-dark-red transition-colors" href="#">
                                 Telegram
                             </a>
</div>
</div>
<div className="border-t border-cream/20 pt-8 lg:pt-0 lg:border-t-0 lg:border-l lg:pl-16">
<div className="grid grid-cols-2 gap-12">
<div className="">
<h4 className="text-xs font-mono uppercase text-cream/60 mb-4"><span className="lang-en">Location</span><span className="lang-ru">Локация</span></h4>
<p className="text-lg">Moscow, RU</p>
</div>
<div className="">
<h4 className="text-xs font-mono uppercase text-cream/60 mb-4"><span className="lang-en">Services</span><span className="lang-ru">Услуги</span></h4>
<ul className="space-y-2 text-cream/80 text-sm">
<li className=""><span className="lang-en">Industrial Design // </span><span className="lang-ru">Промдизайн // </span> <span className="font-cn">工业设计</span></li>
<li className=""><span className="lang-en">Hardware Eng. // </span><span className="lang-ru">Хардвер // </span> <span className="font-cn">硬件工程</span></li>
<li><span className="lang-en">Prototyping // </span><span className="lang-ru">Прототипирование // </span> <span className="font-cn">原型制作</span></li>
<li><span className="lang-en">R&amp;D Strategy // </span><span className="lang-ru">R&amp;D Стратегия // </span> <span className="font-cn">研发策略</span></li>
</ul>
</div>
</div>
<div className="mt-24 pt-8 border-t border-cream/20 flex justify-between items-end">
<p className="text-[10px] uppercase text-cream/60 font-mono">© 2025. DOLGOPOLOV</p>
<div className="flex gap-4 opacity-50">
<i className="w-4 h-4 text-cream stroke-[1.5]" data-lucide="triangle"></i>
<i className="w-4 h-4 text-cream stroke-[1.5]" data-lucide="disc"></i>
<i className="w-4 h-4 text-cream stroke-[1.5]" data-lucide="square"></i>
</div>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
