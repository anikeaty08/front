import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form submission handler
        function handleSubmit(event) {
            event.preventDefault();
            const button = event.target.querySelector('button[type="submit"]');
            const originalText = button.innerHTML;
            
            button.innerHTML = '<iconify-icon icon="solar:refresh-linear" width="22" class="animate-spin"></iconify-icon> Отправка...';
            button.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                button.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="22"></iconify-icon> Заявка отправлена!';
                button.classList.remove('gradient-bg');
                button.classList.add('bg-emerald-500');
                
                setTimeout(() => {
                    event.target.reset();
                    button.innerHTML = originalText;
                    button.classList.add('gradient-bg');
                    button.classList.remove('bg-emerald-500');
                    button.disabled = false;
                }, 3000);
            }, 1500);
            
            return false;
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-pink-500/10"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16 fade-in">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-tight">
                    Вы отдаете до <span className="gradient-text">60% выручки</span> маркетплейсам.<br/>
                    Пора строить свой <span className="gradient-text">миллиардный актив</span>.
                </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
                    Мы не делаем сайты. Мы строим независимый бизнес, который за 3 года обгонит ваш оборот на Wildberries и Ozon. Наша модель: мы зарабатываем только с вашей прибыли.
                </p>
</div>

<div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
<div className="glass-card rounded-2xl p-8 hover-lift fade-in border-red-500/20">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-xl bg-red-500/10 flex items-center justify-center text-3xl">
<iconify-icon icon="solar:buildings-linear" style={{color: '#EF4444'}} width="32"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-red-400">Вы сейчас</h3>
<p className="text-zinc-400 text-sm">Арендатор</p>
</div>
</div>
<ul className="space-y-3 text-zinc-300">
<li className="flex items-start gap-2">
<span className="text-red-400 mt-1">×</span>
<span>Платите комиссию площадке</span>
</li>
<li className="flex items-start gap-2">
<span className="text-red-400 mt-1">×</span>
<span>Клиенты принадлежат маркетплейсу</span>
</li>
<li className="flex items-start gap-2">
<span className="text-red-400 mt-1">×</span>
<span>Зависите от алгоритмов</span>
</li>
</ul>
</div>
<div className="glass-card rounded-2xl p-8 hover-lift fade-in border-emerald-500/20 glow-effect">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center text-3xl">
<iconify-icon icon="solar:home-smile-linear" style={{color: '#10B981'}} width="32"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-emerald-400">Цель</h3>
<p className="text-zinc-400 text-sm">Собственник</p>
</div>
</div>
<ul className="space-y-3 text-zinc-300">
<li className="flex items-start gap-2">
<span className="text-emerald-400 mt-1">✓</span>
<span>Владеете базой клиентов</span>
</li>
<li className="flex items-start gap-2">
<span className="text-emerald-400 mt-1">✓</span>
<span>Контролируете правила игры</span>
</li>
<li className="flex items-start gap-2">
<span className="text-emerald-400 mt-1">✓</span>
<span>Строите миллиардный актив</span>
</li>
</ul>
</div>
</div>

<div className="text-center mb-12 fade-in">
<div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full">
<iconify-icon className="gradient-text" icon="solar:arrow-right-linear" width="24"></iconify-icon>
<span className="text-lg font-medium">За 3 года</span>
<iconify-icon className="gradient-text" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>

<div className="text-center mb-12 fade-in">
<p className="text-zinc-400 mb-2 text-sm uppercase tracking-wide">Social Proof</p>
<p className="text-lg">Уже считаем экономию для <span className="gradient-text font-semibold">27+ брендов</span> с оборотом 100+ млн ₽</p>
</div>

<div className="text-center fade-in">
<a className="inline-flex items-center gap-3 gradient-bg px-8 py-4 rounded-xl text-lg font-medium text-white btn-glow" href="#cta">
                    Рассчитать мой потенциал вне маркетплейсов
                    <iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 px-4 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 fade-in">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
                    Где на самом деле <span className="gradient-text">утекает ваша прибыль</span>?
                </h2>
<p className="text-lg text-zinc-400 max-w-3xl mx-auto">
                    Сравните две модели: «арендатор» на маркетплейсе vs «собственник» своего канала
                </p>
</div>
<div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

<div className="glass-card rounded-2xl p-8 border-red-500/20 fade-in">
<div className="mb-6">
<h3 className="text-2xl font-semibold text-red-400 mb-2">Маркетплейсы</h3>
<p className="text-zinc-400">Модель «арендатора»</p>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center justify-between p-3 bg-red-500/5 rounded-lg border border-red-500/20">
<span className="text-zinc-300">Комиссия</span>
<span className="text-red-400 font-semibold">15-25%</span>
</div>
<div className="flex items-center justify-between p-3 bg-red-500/5 rounded-lg border border-red-500/20">
<span className="text-zinc-300">Логистика</span>
<span className="text-red-400 font-semibold">5-15%</span>
</div>
<div className="flex items-center justify-between p-3 bg-red-500/5 rounded-lg border border-red-500/20">
<span className="text-zinc-300">Хранение</span>
<span className="text-red-400 font-semibold">3-8%</span>
</div>
<div className="flex items-center justify-between p-3 bg-red-500/5 rounded-lg border border-red-500/20">
<span className="text-zinc-300">Штрафы и акции</span>
<span className="text-red-400 font-semibold">5-12%</span>
</div>
</div>
<div className="p-4 bg-red-500/10 rounded-xl border border-red-500/30 mb-6">
<div className="text-sm text-zinc-400 mb-1">Итого «налог»</div>
<div className="text-2xl font-semibold text-red-400">40-60% с выручки</div>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-zinc-300">
<iconify-icon className="text-red-400 mt-0.5" icon="solar:close-circle-linear" style={{minWidth: '20px'}} width="20"></iconify-icon>
<span>Покупатель принадлежит площадке</span>
</li>
<li className="flex items-start gap-2 text-zinc-300">
<iconify-icon className="text-red-400 mt-0.5" icon="solar:close-circle-linear" style={{minWidth: '20px'}} width="20"></iconify-icon>
<span>Вы зависите от алгоритмов</span>
</li>
</ul>
<div className="pt-6 border-t border-zinc-800">
<p className="text-zinc-400 text-sm mb-2">Пример</p>
<p className="text-base">Оборот <span className="text-white font-semibold">100 млн ₽</span> = <span className="text-red-400 font-semibold">~10 млн ₽</span> чистыми</p>
</div>
</div>

<div className="glass-card rounded-2xl p-8 border-emerald-500/20 fade-in glow-effect">
<div className="mb-6">
<h3 className="text-2xl font-semibold text-emerald-400 mb-2">Свой сайт</h3>
<p className="text-zinc-400">Модель «собственника»</p>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center justify-between p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
<span className="text-zinc-300">Расходы на привлечение</span>
<span className="text-emerald-400 font-semibold">10-25%</span>
</div>
<div className="flex items-center justify-between p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
<span className="text-zinc-300">Остальное</span>
<span className="text-emerald-400 font-semibold">Ваша маржа</span>
</div>
</div>
<div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/30 mb-6">
<div className="text-sm text-zinc-400 mb-1">Чистая прибыль</div>
<div className="text-2xl font-semibold text-emerald-400">В 2.5-4 раза больше</div>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-zinc-300">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear" style={{minWidth: '20px'}} width="20"></iconify-icon>
<span>Вы владеете базой клиентов</span>
</li>
<li className="flex items-start gap-2 text-zinc-300">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear" style={{minWidth: '20px'}} width="20"></iconify-icon>
<span>Вы контролируете правила</span>
</li>
<li className="flex items-start gap-2 text-zinc-300">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear" style={{minWidth: '20px'}} width="20"></iconify-icon>
<span>Строите миллиардный актив</span>
</li>
</ul>
<div className="pt-6 border-t border-zinc-800">
<p className="text-zinc-400 text-sm mb-2">Пример</p>
<p className="text-base">Оборот <span className="text-white font-semibold">100 млн ₽</span> = <span className="text-emerald-400 font-semibold">25-40 млн ₽</span> чистыми</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 fade-in">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight max-w-5xl mx-auto leading-tight">
                    Почему прошлые попытки запустить сайт <span className="gradient-text">проваливались</span>?
                </h2>
<p className="text-lg text-zinc-400 max-w-3xl mx-auto">
                    Вам продавали процесс, а не результат.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

<div className="glass-card rounded-2xl p-8 border-red-500/20 hover-lift fade-in">
<div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
<iconify-icon icon="solar:close-square-linear" style={{color: '#EF4444'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-4 text-red-400">Старая модель</h3>
<ul className="space-y-3 text-zinc-300 text-sm">
<li className="flex items-start gap-2">
<span className="text-red-400 mt-1">×</span>
<span>Фрилансеры берут деньги за дизайн и код</span>
</li>
<li className="flex items-start gap-2">
<span className="text-red-400 mt-1">×</span>
<span>Им все равно, купят у вас или нет</span>
</li>
<li className="flex items-start gap-2">
<span className="text-red-400 mt-1">×</span>
<span>Вы платите за процесс, а не за результат</span>
</li>
</ul>
</div>

<div className="glass-card rounded-2xl p-8 border-emerald-500/20 hover-lift fade-in glow-effect">
<div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
<iconify-icon icon="solar:check-square-linear" style={{color: '#10B981'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-4 text-emerald-400">Наша модель</h3>
<ul className="space-y-3 text-zinc-300 text-sm">
<li className="flex items-start gap-2">
<span className="text-emerald-400 mt-1">✓</span>
<span>Мы работаем за % от выручки вашего сайта</span>
</li>
<li className="flex items-start gap-2">
<span className="text-emerald-400 mt-1">✓</span>
<span>Наша прибыль зависит от вашего роста</span>
</li>
<li className="flex items-start gap-2">
<span className="text-emerald-400 mt-1">✓</span>
<span>Полная финансовая прозрачность</span>
</li>
</ul>
</div>

<div className="glass-card rounded-2xl p-8 border-indigo-500/20 hover-lift fade-in">
<div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
<iconify-icon icon="solar:shield-check-linear" style={{color: '#6366F1'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-4 text-indigo-400">Жесткий фильтр</h3>
<ul className="space-y-3 text-zinc-300 text-sm">
<li className="flex items-start gap-2">
<span className="text-indigo-400 mt-1">✓</span>
<span>Берем только проекты с потенциалом 100 млн+</span>
</li>
<li className="flex items-start gap-2">
<span className="text-indigo-400 mt-1">✓</span>
<span>Мы можем отказать, если нет потенциала</span>
</li>
<li className="flex items-start gap-2">
<span className="text-indigo-400 mt-1">✓</span>
<span>Нам нужны партнеры, а не клиенты</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 fade-in">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
                    Системный путь к <span className="gradient-text">1 000 000 000 ₽</span> за 3 года
                </h2>
<p className="text-lg text-zinc-400 max-w-3xl mx-auto">
                    Никакой магии, только прогрессия.
                </p>
</div>

<div className="relative max-w-6xl mx-auto">

<div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30"></div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="fade-in relative">
<div className="glass-card rounded-2xl p-6 hover-lift h-full">
<div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-xl font-semibold mb-4 mx-auto">0</div>
<h3 className="text-lg font-semibold mb-2 text-center">Аудит «Победа в Excel»</h3>
<p className="text-xs text-zinc-400 mb-4 text-center">Сейчас</p>
<ul className="space-y-2 text-sm text-zinc-300">
<li className="flex items-start gap-2">
<iconify-icon className="text-indigo-400 mt-0.5" icon="solar:check-circle-linear" style={{minWidth: '16px'}} width="16"></iconify-icon>
<span>30 минут разбора экономики</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-indigo-400 mt-0.5" icon="solar:check-circle-linear" style={{minWidth: '16px'}} width="16"></iconify-icon>
<span>Честный ответ: есть потенциал или нет</span>
</li>
</ul>
</div>
</div>

<div className="fade-in relative">
<div className="glass-card rounded-2xl p-6 hover-lift h-full">
<div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-xl font-semibold mb-4 mx-auto">1</div>
<h3 className="text-lg font-semibold mb-2 text-center">Фундамент</h3>
<p className="text-xs text-zinc-400 mb-4 text-center">0-15 дней</p>
<ul className="space-y-2 text-sm text-zinc-300">
<li className="flex items-start gap-2">
<iconify-icon className="text-purple-400 mt-0.5" icon="solar:check-circle-linear" style={{minWidth: '16px'}} width="16"></iconify-icon>
<span>Запуск. Первые транзакции</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-purple-400 mt-0.5" icon="solar:check-circle-linear" style={{minWidth: '16px'}} width="16"></iconify-icon>
<span>Автоперенос карточек с WB/Ozon</span>
</li>
</ul>
</div>
</div>

<div className="fade-in relative">
<div className="glass-card rounded-2xl p-6 hover-lift h-full">
<div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-xl font-semibold mb-4 mx-auto">2</div>
<h3 className="text-lg font-semibold mb-2 text-center">Первый кэш</h3>
<p className="text-xs text-zinc-400 mb-4 text-center">1-3 месяца</p>
<ul className="space-y-2 text-sm text-zinc-300">
<li className="flex items-start gap-2">
<iconify-icon className="text-pink-400 mt-0.5" icon="solar:check-circle-linear" style={{minWidth: '16px'}} width="16"></iconify-icon>
<span>ROAS &gt;300%</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-pink-400 mt-0.5" icon="solar:check-circle-linear" style={{minWidth: '16px'}} width="16"></iconify-icon>
<span>CPO ниже комиссии маркетплейса</span>
</li>
</ul>
</div>
</div>

<div className="fade-in relative">
<div className="glass-card rounded-2xl p-6 hover-lift h-full border-emerald-500/20 glow-effect">
<div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-xl font-semibold mb-4 mx-auto">3</div>
<h3 className="text-lg font-semibold mb-2 text-center">Система и масштаб</h3>
<p className="text-xs text-zinc-400 mb-4 text-center">3-36 месяцев</p>
<ul className="space-y-2 text-sm text-zinc-300">
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear" style={{minWidth: '16px'}} width="16"></iconify-icon>
<span>1-3 → 10-20 → 100+ млн ₽/мес</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-400 mt-0.5" icon="solar:check-circle-linear" style={{minWidth: '16px'}} width="16"></iconify-icon>
<span>30% выручки с повторных продаж</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 fade-in">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
                    Инфраструктура на <span className="gradient-text">миллиард</span> с первого дня
                </h2>
</div>
<div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

<div className="glass-card rounded-2xl p-8 hover-lift fade-in">
<div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
<iconify-icon icon="solar:refresh-circle-linear" style={{color: '#6366F1'}} width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">LTV-машина</h3>
<p className="text-zinc-400 text-sm mb-4">CRM-маркетинг</p>
<p className="text-zinc-300">2-я и 10-я продажа — за 0 ₽ на привлечение</p>
</div>

<div className="glass-card rounded-2xl p-8 hover-lift fade-in">
<div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6">
<iconify-icon icon="solar:widget-5-linear" style={{color: '#8B5CF6'}} width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Автоматизация</h3>
<p className="text-zinc-400 text-sm mb-4">Роботы работают 24/7</p>
<p className="text-zinc-300">Возврат 15% брошенных корзин. Автоматические допродажи</p>
</div>

<div className="glass-card rounded-2xl p-8 hover-lift fade-in">
<div className="w-14 h-14 rounded-xl bg-pink-500/10 flex items-center justify-center mb-6">
<iconify-icon icon="solar:crown-linear" style={{color: '#EC4899'}} width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Полный контроль</h3>
<p className="text-zinc-400 text-sm mb-4">Ваши правила игры</p>
<p className="text-zinc-300">Данные покупателей — ваш главный актив. Прямые платежи</p>
</div>

<div className="glass-card rounded-2xl p-8 hover-lift fade-in">
<div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
<iconify-icon icon="solar:settings-linear" style={{color: '#10B981'}} width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Синхронизация</h3>
<p className="text-zinc-400 text-sm mb-4">Все в одной системе</p>
<p className="text-zinc-300">Склад, остатки, заказы. Автообновление с маркетплейсов</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 relative" id="cta">
<div className="max-w-3xl mx-auto">
<div className="glass-card rounded-3xl p-8 md:p-12 border-indigo-500/30 glow-effect fade-in">
<div className="text-center mb-8">
<h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
                        Шаг 0. Аудит <span className="gradient-text">«Победа в Excel»</span>
</h2>
<p className="text-base text-zinc-400 leading-relaxed">
                        Нам нужно 30 минут вашего времени. Мы не будем продавать. Мы будем считать. Если видим потенциал — предложим план. Если нет — честно скажем и дадим рекомендации.
                    </p>
</div>
<form className="space-y-5" onsubmit="return handleSubmit(event)">
<div>
<label className="block text-sm font-medium mb-2 text-zinc-300">Имя</label>
<input className="w-full px-4 py-3 rounded-xl text-zinc-100" placeholder="Как к вам обращаться?" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-zinc-300">Телефон или Telegram</label>
<input className="w-full px-4 py-3 rounded-xl text-zinc-100" placeholder="+7 или @username" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-zinc-300">Текущий оборот на маркетплейсах</label>
<select className="w-full px-4 py-3 rounded-xl text-zinc-100 cursor-pointer" required="">
<option value="">Выберите диапазон</option>
<option value="50-100">50-100 млн ₽/год</option>
<option value="100-500">100-500 млн ₽/год</option>
<option value="500+">500 млн ₽+/год</option>
</select>
</div>
<button className="w-full gradient-bg px-6 py-4 rounded-xl text-base font-medium text-white btn-glow flex items-center justify-center gap-3" type="submit">
                        Назначить время для расчета
                        <iconify-icon icon="solar:calendar-add-linear" width="22"></iconify-icon>
</button>
<p className="text-xs text-zinc-500 text-center">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
</form>
</div>
</div>
</section>

<footer className="py-16 px-4 relative border-t border-zinc-800/50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<p className="text-lg md:text-xl text-zinc-300 mb-2">
                    Стройте актив, который будет принадлежать вам.
                </p>
<p className="text-base text-zinc-400">
                    Не платите аренду всю жизнь.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-12">
<div>
<h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Контакты</h4>
<div className="space-y-3">
<a className="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
<span className="text-sm">hello@company.ru</span>
</a>
<a className="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 transition-colors" href="#">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
<span className="text-sm">@telegram</span>
</a>
</div>
</div>
<div>
<h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Компания</h4>
<div className="space-y-3 text-sm text-zinc-400">
<p>ООО «Компания»</p>
<p>ИНН 1234567890</p>
<p>ОГРН 1234567890123</p>
</div>
</div>
<div>
<h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Документы</h4>
<div className="space-y-2">
<a className="block text-sm text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Политика конфиденциальности</a>
<a className="block text-sm text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Пользовательское соглашение</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-zinc-800/50 text-center">
<p className="text-sm text-zinc-500">© 2024 Все права защищены</p>
</div>
</div>
</footer>


    </>
  );
}
