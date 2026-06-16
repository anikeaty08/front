import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
colors: {
mito: {
light: '#dcfce7', // green-100
DEFAULT: '#16a34a', // green-600
dark: '#14532d', // green-900
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="glass-nav fixed w-full z-50 top-0 left-0">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tight uppercase">Мито Аптека</span>
<span className="hidden sm:inline-block text-xs text-neutral-400 font-medium px-2 py-0.5 border border-neutral-200 rounded-full">by Аптека 245</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#about">О митохондриях</a>
<a className="hover:text-neutral-900 transition-colors" href="#biology">Биология</a>
<a className="hover:text-neutral-900 transition-colors" href="#experts">Эксперты</a>
<a className="hover:text-neutral-900 transition-colors" href="#products">Подборки</a>
</div>

<a className="flex items-center gap-2 text-sm font-medium hover:text-neutral-600 transition-colors" href="https://apteka245.ru/" target="_blank">
<iconify-icon icon="solar:cart-large-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="hidden sm:inline">Магазин</span>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="orb w-96 h-96 bg-green-200 top-0 left-1/2 -translate-x-1/2"></div>
<div className="max-w-4xl mx-auto px-4 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-medium text-neutral-500 mb-8 shadow-sm">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Аптека нового формата
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-neutral-900 mb-6 leading-[1.1]">
                Открой своим клеткам <br className="hidden md:block"/>
                вторую молодость.
            </h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
                МИТО Аптека — это научно обоснованный подход к энергии и долголетию через поддержку митохондриального здоровья.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-neutral-200" href="https://mitocommunity.com/" target="_blank">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Пройти тест «Как у вас с энергией?»
                </a>
<a className="w-full sm:w-auto px-8 py-3 bg-white text-neutral-900 border border-neutral-200 text-sm font-medium rounded-lg hover:bg-neutral-50 transition-all flex items-center justify-center gap-2" href="#about">
<iconify-icon icon="solar:book-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Читать гид
                </a>
</div>

<div className="mt-16 pt-8 border-t border-neutral-200/60 grid grid-cols-1 md:grid-cols-3 gap-6 text-neutral-500">
<div className="flex flex-col items-center gap-2">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium">С 1972г. на страже здоровья</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium">Доставка по Самарской обл. и РФ</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon icon="solar:user-speak-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium">Персональный подбор</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-neutral-100" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-6">Что такое митохондрии?</h2>
<div className="prose prose-neutral text-neutral-500 font-light leading-relaxed">
<p className="mb-4">
                            МИТО – это комплексная многоуровневая поддержка ресурсов организма, осуществляемая через воздействие на работу митохондрий.
                        </p>
<p className="mb-4">
                            Митохондрии — это «электростанции» наших клеток. От их целостности и работоспособности зависят ваша активность, когнитивные способности, иммунитет и устойчивость к стрессам.
                        </p>
<div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100 mt-6">
<p className="text-sm">
<span className="text-green-700 font-medium">Здоровые митохондрии</span> = энергия, молодость, бодрость.<br/>
<span className="text-red-700 font-medium">Поврежденные митохондрии</span> = старение, усталость, болезни.
                            </p>
</div>
</div>
</div>
<div className="relative h-96 rounded-2xl bg-neutral-50 overflow-hidden border border-neutral-100 flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-100/50 via-transparent to-transparent"></div>

<div className="relative z-10 text-center">
<iconify-icon className="text-green-600/80 animate-spin-slow" icon="solar:atom-linear" strokeWidth="1" width="120"></iconify-icon>
<div className="mt-4 text-xs font-medium text-neutral-400 uppercase tracking-widest">Источник энергии АТФ</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight mb-4">Почему мы заговорили об этом сейчас?</h2>
<p className="text-neutral-500 max-w-2xl">Наука меняет взгляд на здоровье. Превентивная медицина официально стала приоритетом, а митохондрии признаны ключевым звеном восстановления.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
<div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
<div className="text-4xl font-light text-neutral-300 mb-2">1960</div>
<div className="h-0.5 w-12 bg-neutral-200 mb-4"></div>
<h3 className="font-medium mb-1">Органы</h3>
<p className="text-sm text-neutral-500">Здоровье воспринималось как отсутствие болезней органов.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
<div className="text-4xl font-light text-neutral-300 mb-2">2000</div>
<div className="h-0.5 w-12 bg-neutral-200 mb-4"></div>
<h3 className="font-medium mb-1">Клетки</h3>
<p className="text-sm text-neutral-500">Фокус сместился на здоровье клетки как единицы жизни.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-green-500/30 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon icon="solar:graph-up-linear" width="100"></iconify-icon>
</div>
<div className="text-4xl font-light text-green-600 mb-2">2020+</div>
<div className="h-0.5 w-12 bg-green-500 mb-4"></div>
<h3 className="font-medium mb-1">Митохондрии</h3>
<p className="text-sm text-neutral-500">Ключ к энергии и управлению старением.</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="bg-neutral-900 text-neutral-300 p-8 rounded-2xl flex flex-col justify-between">
<div>
<div className="text-5xl text-white font-medium tracking-tighter mb-2">25 539</div>
<p className="text-sm font-medium">публикаций и исследований за один 2021 год</p>
</div>
<div className="mt-8 pt-6 border-t border-neutral-800">
<p className="text-xs text-neutral-500">Тема митохондриального здоровья переживает научный бум.</p>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-neutral-200">
<div className="flex items-start gap-4">
<iconify-icon className="text-neutral-400" icon="solar:document-text-linear" width="32"></iconify-icon>
<div>
<h4 className="font-medium text-neutral-900 mb-2">Указ Президента РФ №529</h4>
<p className="text-sm text-neutral-500 leading-relaxed mb-4">
                                От 18 июня 2024 года. Утверждены ключевые направления: превентивная и персонализированная медицина, обеспечение здорового долголетия.
                            </p>
<a className="text-xs font-medium underline text-neutral-400 hover:text-neutral-900" href="https://pubmed.ncbi.nlm.nih.gov/">Смотреть исследования (PubMed)</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="biology">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-medium tracking-tight mb-10 text-center">Зачем заботиться о митохондриях?</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-neutral-100 hover:border-neutral-300 transition-colors group">
<div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center mb-4 group-hover:bg-green-50 transition-colors">
<iconify-icon className="text-neutral-600 group-hover:text-green-600" icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Энергия (АТФ)</h3>
<p className="text-sm text-neutral-500">Основной источник энергии. Без АТФ клетки не функционируют, что ведет к хронической усталости.</p>
</div>

<div className="p-6 rounded-2xl border border-neutral-100 hover:border-neutral-300 transition-colors group">
<div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center mb-4 group-hover:bg-green-50 transition-colors">
<iconify-icon className="text-neutral-600 group-hover:text-green-600" icon="solar:scale-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Метаболизм и вес</h3>
<p className="text-sm text-neutral-500">Преобразуют жиры и углеводы в энергию. Нарушения ведут к метаболическим сбоям.</p>
</div>

<div className="p-6 rounded-2xl border border-neutral-100 hover:border-neutral-300 transition-colors group">
<div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center mb-4 group-hover:bg-green-50 transition-colors">
<iconify-icon className="text-neutral-600 group-hover:text-green-600" icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Иммунитет</h3>
<p className="text-sm text-neutral-500">Активируют иммунные клетки для борьбы с инфекциями.</p>
</div>

<div className="p-6 rounded-2xl border border-neutral-100 hover:border-neutral-300 transition-colors group">
<div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center mb-4 group-hover:bg-green-50 transition-colors">
<iconify-icon className="text-neutral-600 group-hover:text-green-600" icon="solar:umbrella-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Защита от стресса</h3>
<p className="text-sm text-neutral-500">Контролируют свободные радикалы, предотвращая повреждение ДНК.</p>
</div>

<div className="p-6 rounded-2xl border border-neutral-100 hover:border-neutral-300 transition-colors group">
<div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center mb-4 group-hover:bg-green-50 transition-colors">
<iconify-icon className="text-neutral-600 group-hover:text-green-600" icon="solar:bone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Баланс кальция</h3>
<p className="text-sm text-neutral-500">Критично для мышц, нервной системы и передачи сигналов.</p>
</div>

<div className="p-6 rounded-2xl border border-neutral-100 hover:border-neutral-300 transition-colors group">
<div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center mb-4 group-hover:bg-green-50 transition-colors">
<iconify-icon className="text-neutral-600 group-hover:text-green-600" icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Обновление клеток</h3>
<p className="text-sm text-neutral-500">Регулируют гибель старых клеток. Важно для профилактики онкологии.</p>
</div>
</div>
<div className="mt-8 p-4 bg-red-50 rounded-xl border border-red-100 text-center">
<p className="text-xs text-red-800 font-medium">Дисфункция связана с: нейродегенерацией, ССЗ, миопатиями, хронической усталостью.</p>
</div>
</div>
</section>

<section className="py-12 bg-neutral-50 border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h3 className="text-xl font-medium mb-6">Что вас беспокоит больше всего?</h3>
<div className="flex flex-wrap justify-center gap-3">
<button className="px-5 py-2 rounded-full bg-white border border-neutral-200 text-sm hover:border-neutral-400 transition-all">Энергия</button>
<button className="px-5 py-2 rounded-full bg-white border border-neutral-200 text-sm hover:border-neutral-400 transition-all">Сон</button>
<button className="px-5 py-2 rounded-full bg-white border border-neutral-200 text-sm hover:border-neutral-400 transition-all">Стресс</button>
<button className="px-5 py-2 rounded-full bg-white border border-neutral-200 text-sm hover:border-neutral-400 transition-all">Гормоны</button>
<button className="px-5 py-2 rounded-full bg-white border border-neutral-200 text-sm hover:border-neutral-400 transition-all">Антиэйдж</button>
<button className="px-5 py-2 rounded-full bg-white border border-neutral-200 text-sm hover:border-neutral-400 transition-all">Иммунитет</button>
</div>
</div>
</section>

<section className="py-20 bg-white" id="experts">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="max-w-xl">
<h2 className="text-3xl font-medium tracking-tight mb-4">Мнение экспертов</h2>
<p className="text-neutral-500">Рекомендации специалистов по питанию, режиму и нутрицевтической поддержке.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-1 bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
<div className="w-20 h-20 bg-neutral-200 rounded-full mb-6 overflow-hidden relative">
<iconify-icon className="absolute bottom-0 left-1/2 -translate-x-1/2 text-neutral-400" icon="solar:user-linear" width="60"></iconify-icon>
</div>
<h3 className="text-lg font-medium">Юлия Анатольевна Янкина</h3>
<p className="text-xs font-medium text-green-600 uppercase tracking-wide mt-1 mb-4">Интегративный нутрициолог</p>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Эксперт по восстановлению энергии через питание, движение и клеточную поддержку. Помогает выстроить стабильный режим работы организма.
                    </p>
</div>

<div className="lg:col-span-2 grid gap-4">
<a className="block group p-6 border border-neutral-100 rounded-2xl hover:border-neutral-300 transition-all" href="https://samaraonline24.ru/samara/view/hroniceskie-bolezni-nacinautsa-zdes-intervu-s-samarskim-nutriciologom-o-mitohondriah">
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium group-hover:text-green-700 transition-colors">Хронические болезни начинаются здесь</h4>
<p className="text-sm text-neutral-500 mt-2">Интервью о митохондриях и начале заболеваний.</p>
</div>
<iconify-icon className="text-neutral-300 group-hover:text-green-700" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>
<a className="block group p-6 border border-neutral-100 rounded-2xl hover:border-neutral-300 transition-all" href="https://samaraonline24.ru/samara/view/vraci-preduprezdaut-k-oseni-vozrastet-risk-prostud-kak-podgotovitsa-uze-sejcas">
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium group-hover:text-green-700 transition-colors">Как оставаться полными сил в сезон простуд</h4>
<p className="text-sm text-neutral-500 mt-2">Подготовка иммунитета заранее.</p>
</div>
<iconify-icon className="text-neutral-300 group-hover:text-green-700" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>
<a className="block group p-6 border border-neutral-100 rounded-2xl hover:border-neutral-300 transition-all" href="https://samaraonline24.ru/samara/view/gormonalnaa-perestrojka-kak-podderzat-zdorove-zensiny-v-period-klimaksa">
<div className="flex justify-between items-start">
<div>
<h4 className="font-medium group-hover:text-green-700 transition-colors">Гормональная перестройка</h4>
<p className="text-sm text-neutral-500 mt-2">Как поддержать здоровье женщины в период климакса.</p>
</div>
<iconify-icon className="text-neutral-300 group-hover:text-green-700" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-50" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-medium tracking-tight mb-10">Популярные подборки МИТО</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="bg-white rounded-2xl p-8 border border-neutral-200 flex flex-col h-full">
<div className="mb-6">
<span className="text-xs font-semibold text-white bg-neutral-900 px-2 py-1 rounded">Клеточная основа</span>
<h3 className="text-xl font-medium mt-4 mb-2">Комплексная энергия</h3>
<p className="text-sm text-neutral-500">База для восстановления энергетического дефицита.</p>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex gap-3 text-sm">
<span className="font-medium text-neutral-900 min-w-[80px]">T8 STONE</span>
<span className="text-neutral-500">Мягкая детоксикация гуминовыми кислотами.</span>
</li>
<li className="flex gap-3 text-sm">
<span className="font-medium text-neutral-900 min-w-[80px]">T8 EXTRA</span>
<span className="text-neutral-500">Активация митохондрий полипренолами.</span>
</li>
<li className="flex gap-3 text-sm">
<span className="font-medium text-neutral-900 min-w-[80px]">T8 VITEN</span>
<span className="text-neutral-500">Антиоксидантная защита.</span>
</li>
</ul>
<a className="text-sm font-medium text-green-700 flex items-center gap-1 hover:gap-2 transition-all" href="https://apteka245.ru/" target="_blank">
                        Перейти в магазин <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</article>

<article className="bg-white rounded-2xl p-8 border border-neutral-200 flex flex-col h-full">
<div className="mb-6">
<span className="text-xs font-semibold text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Детокс и Красота</span>
<h3 className="text-xl font-medium mt-4 mb-2">Кожа и очищение</h3>
<p className="text-sm text-neutral-500">Поддержка печени, лимфы и синтеза коллагена.</p>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex gap-3 text-sm">
<span className="font-medium text-neutral-900 min-w-[80px]">T8 FEEL</span>
<span className="text-neutral-500">Глубокий детокс и защита ДНК.</span>
</li>
<li className="flex gap-3 text-sm">
<span className="font-medium text-neutral-900 min-w-[80px]">ТАИТА</span>
<span className="text-neutral-500">Эликсир Детокс для печени и лимфы.</span>
</li>
<li className="flex gap-3 text-sm">
<span className="font-medium text-neutral-900 min-w-[80px]">Коллаген</span>
<span className="text-neutral-500">15000 мг морского коллагена из медуз.</span>
</li>
</ul>
<a className="text-sm font-medium text-green-700 flex items-center gap-1 hover:gap-2 transition-all" href="https://apteka245.ru/" target="_blank">
                        Перейти в магазин <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</article>

<article className="bg-white rounded-2xl p-8 border border-neutral-200 flex flex-col h-full">
<div className="mb-6">
<span className="text-xs font-semibold text-neutral-600 bg-neutral-100 px-2 py-1 rounded">ЖКТ и pH</span>
<h3 className="text-xl font-medium mt-4 mb-2">Микробиота и баланс</h3>
<p className="text-sm text-neutral-500">Восстановление среды и работы кишечника.</p>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex gap-3 text-sm">
<span className="font-medium text-neutral-900 min-w-[80px]">T8 DROPS</span>
<span className="text-neutral-500">Регуляция pH, снижение закисления.</span>
</li>
<li className="flex gap-3 text-sm">
<span className="font-medium text-neutral-900 min-w-[80px]">TEO GREEN</span>
<span className="text-neutral-500">Клетчатка для питания полезных бактерий.</span>
</li>
<li className="flex gap-3 text-sm">
<span className="font-medium text-neutral-900 min-w-[80px]">MOBIO+</span>
<span className="text-neutral-500">Метабиотик для быстрого восстановления.</span>
</li>
</ul>
<a className="text-sm font-medium text-green-700 flex items-center gap-1 hover:gap-2 transition-all" href="https://apteka245.ru/" target="_blank">
                        Перейти в магазин <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</article>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-lg font-semibold tracking-tight uppercase block mb-4">МИТО Аптека</span>
<a className="text-xs text-neutral-400 hover:text-neutral-900 underline block mb-2" href="https://apteka245.ru/licenses">Лицензии и свидетельства</a>
</div>
<div className="col-span-1 md:col-span-1">
<h4 className="font-medium mb-4 text-sm">Магазин</h4>
<a className="block text-sm text-neutral-500 hover:text-neutral-900 mb-2" href="https://apteka245.ru/">apteka245.ru</a>
</div>
<div className="col-span-1 md:col-span-1">
<h4 className="font-medium mb-4 text-sm">Социальные сети</h4>
<div className="flex flex-col gap-2">
<a className="flex items-center gap-2 text-sm text-neutral-500 hover:text-blue-500 transition-colors" href="https://t.me/apteka245">
<iconify-icon icon="solar:plain-linear"></iconify-icon> Telegram
                        </a>
<a className="flex items-center gap-2 text-sm text-neutral-500 hover:text-blue-700 transition-colors" href="https://vk.com/apteka245">
<iconify-icon icon="solar:globus-linear"></iconify-icon> VKontakte
                        </a>
<a className="flex items-center gap-2 text-sm text-neutral-500 hover:text-orange-500 transition-colors" href="https://ok.ru/group/52986321043645">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Odnoklassniki
                        </a>
</div>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400 max-w-2xl text-center md:text-left">
                    Рекомендации носят информационный характер. При хронических состояниях и приёме препаратов проконсультируйтесь со специалистом. Не является публичной офертой.
                </p>
<p className="text-xs text-neutral-300">© 2024 Дежурная аптека 245</p>
</div>
</div>
</footer>

    </>
  );
}
