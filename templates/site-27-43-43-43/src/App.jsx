import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
background: '#0B0E14',
surface: '#111827',
surfaceHighlight: '#1F2937',
border: '#374151',
textMain: '#F9FAFB',
textMuted: '#9CA3AF',
accent: '#14B8A6', // Teal
accentGlow: 'rgba(20, 184, 166, 0.2)',
success: '#10B981',
warning: '#FBBF24',
process: '#3B82F6',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
boxShadow: {
'glow': '0 0 20px -5px rgba(20, 184, 166, 0.3)',
'card': '0 4px 6px -1px rgba(0, 0, 0, 0.5)',
}
}
}
}



        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // FAQ Toggle
        function toggleFaq(element) {
            const isActive = element.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Open clicked if it wasn't active
            if (!isActive) {
                element.classList.add('active');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center font-bold text-white tracking-tighter">DT</div>
<span className="font-bold text-lg tracking-tight text-white">Digital Tula</span>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm text-textMuted hover:text-accent transition-colors" href="#services">Услуги</a>
<a className="text-sm text-textMuted hover:text-accent transition-colors" href="#process">Процесс</a>
<a className="text-sm text-textMuted hover:text-accent transition-colors" href="#faq">FAQ</a>
<a className="text-sm text-textMuted hover:text-accent transition-colors" href="#contact">Контакты</a>
</nav>

<div className="hidden md:flex">
<a className="bg-accent/10 hover:bg-accent text-accent hover:text-white border border-accent/50 transition-all duration-300 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider shadow-glow" href="#contact">
                        Бесплатная консультация
                    </a>
</div>

<div className="md:hidden">
<button className="text-textMuted hover:text-white" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-surface border-b border-border absolute w-full" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-2">
<a className="block py-2 text-textMuted hover:text-white" href="#services">Услуги</a>
<a className="block py-2 text-textMuted hover:text-white" href="#process">Процесс</a>
<a className="block py-2 text-textMuted hover:text-white" href="#faq">FAQ</a>
<a className="block py-2 text-textMuted hover:text-white" href="#contact">Контакты</a>
</div>
</div>
</header>
<main className="pt-24 pb-12">

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border">
<span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
<span className="text-xs font-mono text-textMuted tracking-wide uppercase">System Online v2.0.4</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                    Разработаем сайт или <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">чат-бота за 3 дня</span>
</h1>
<p className="text-lg text-textMuted font-light leading-relaxed max-w-lg">
                    Построим экосистему из российских сервисов. Tilda, MAX, 1С, YandexGPT. Всё работает как единый механизм — от заявки до отгрузки.
                </p>
<div className="flex flex-wrap gap-4">
<a className="flex items-center justify-center px-6 py-3 bg-accent text-white rounded-xl font-semibold hover:bg-teal-500 transition shadow-glow" href="#contact">
                        Рассчитать проект
                    </a>
<a className="flex items-center justify-center px-6 py-3 border border-border text-textMain rounded-xl font-medium hover:border-textMuted transition" href="#services">
                        Посмотреть работы
                    </a>
</div>
<div className="flex gap-4 text-xs font-mono text-textMuted opacity-60">
<span>#AUTOMATION</span>
<span>#WEBDEV</span>
<span>#INTEGRATION</span>
</div>
</div>

<div className="relative group">

<div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>

<div className="relative bg-surface border border-border rounded-xl shadow-2xl overflow-hidden font-mono text-xs md:text-sm">

<div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<span className="text-textMuted text-xs">system_status.log</span>
</div>

<div className="p-6 space-y-2 text-gray-300">
<div className="flex gap-3">
<span className="text-textMuted opacity-50">09:41:22</span>
<span className="text-process">INFO</span>
<span>New Lead detected from VK Ads</span>
</div>
<div className="flex gap-3">
<span className="text-textMuted opacity-50">09:41:23</span>
<span className="text-warning">PROCESS</span>
<span>Sending data to CRM (Bitrix24) ...</span>
</div>
<div className="flex gap-3">
<span className="text-textMuted opacity-50">09:41:24</span>
<span className="text-success">SUCCESS</span>
<span>Data synchronized. ID: #4829</span>
</div>
<div className="flex gap-3">
<span className="text-textMuted opacity-50">09:41:25</span>
<span className="text-purple-400">AI_AGENT</span>
<span>Generating personalized offer via YandexGPT ...</span>
</div>
<div className="flex gap-3">
<span className="text-textMuted opacity-50">09:41:28</span>
<span className="text-blue-400">SENT</span>
<span>Message sent to Telegram Bot <span className="cursor-blink bg-accent w-2 h-4 inline-block align-middle ml-1"></span></span>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-surfaceHighlight/20">
<div className="max-w-7xl mx-auto px-4 py-12">
<div className="text-center mb-10">
<h2 className="text-2xl font-bold mb-2">Вся Россия в одном цифровом пространстве</h2>
<p className="text-textMuted text-sm">2026 год — время отечественных технологий. Интегрируем лучшие решения.</p>
</div>
<div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">

<div className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-textMuted group-hover:text-accent transition" icon="solar:server-square-linear"></iconify-icon>
<span className="font-bold text-lg group-hover:text-white transition">Tilda</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-textMuted group-hover:text-accent transition" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="font-bold text-lg group-hover:text-white transition">Bitrix24</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-textMuted group-hover:text-accent transition" icon="solar:graph-new-up-linear"></iconify-icon>
<span className="font-bold text-lg group-hover:text-white transition">Yandex</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-textMuted group-hover:text-accent transition" icon="solar:box-linear"></iconify-icon>
<span className="font-bold text-lg group-hover:text-white transition">1C</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-textMuted group-hover:text-accent transition" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="font-bold text-lg group-hover:text-white transition">Telegram</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-textMuted group-hover:text-accent transition" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="font-bold text-lg group-hover:text-white transition">YandexGPT</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-textMuted group-hover:text-accent transition" icon="solar:link-circle-linear"></iconify-icon>
<span className="font-bold text-lg group-hover:text-white transition">n8n</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="services">
<div className="mb-12">
<h2 className="text-3xl font-bold tracking-tight mb-4">Строим цифровую экосистему под ключ</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="tech-card bg-surfaceHighlight/30 border border-border rounded-2xl p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
<iconify-icon icon="solar:laptop-linear" width="64"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-accent mb-4">
<iconify-icon icon="solar:laptop-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2">Сайты и магазины</h3>
<p className="text-sm text-textMuted font-light">Разработка на Tilda или коде. SEO-оптимизированные, быстрые решения с высокой конверсией.</p>
</div>

<div className="tech-card bg-surfaceHighlight/30 border border-border rounded-2xl p-6 relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-accent mb-4">
<iconify-icon icon="solar:chat-square-code-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2">Чат-боты MAX/TG</h3>
<p className="text-sm text-textMuted font-light">Умные боты для продаж. Интеграция с базой знаний и автоматическая обработка заявок.</p>
</div>

<div className="tech-card bg-surfaceHighlight/30 border border-border rounded-2xl p-6 relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-accent mb-4">
<iconify-icon icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2">Интеграция с 1С</h3>
<p className="text-sm text-textMuted font-light">Бесшовный обмен данными. Склад, бухгалтерия и продажи в одном окне без дублей.</p>
</div>

<div className="tech-card bg-surfaceHighlight/30 border border-border rounded-2xl p-6 relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-accent mb-4">
<iconify-icon icon="solar:stars-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2">AI-автоматизация</h3>
<p className="text-sm text-textMuted font-light">Внедрение YandexGPT. Генерация контента, ответов клиентам и глубокая аналитика.</p>
</div>

<div className="tech-card bg-surfaceHighlight/30 border border-border rounded-2xl p-6 relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-accent mb-4">
<iconify-icon icon="solar:programming-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2">n8n — нервная система</h3>
<p className="text-sm text-textMuted font-light">Связываем любые сервисы между собой. Сложные сценарии автоматизации без лишнего кода.</p>
</div>

<div className="tech-card bg-surfaceHighlight/30 border border-border rounded-2xl p-6 relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-accent mb-4">
<iconify-icon icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2">Telegram Mini Apps</h3>
<p className="text-sm text-textMuted font-light">Полноценные веб-приложения внутри Telegram. Интернет-магазины и личные кабинеты.</p>
</div>

<div className="tech-card bg-surfaceHighlight/30 border border-border rounded-2xl p-6 relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-accent mb-4">
<iconify-icon icon="solar:bell-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2">Рассылки</h3>
<p className="text-sm text-textMuted font-light">Триггерные цепочки сообщений. Возврат клиентов, повышение LTV и лояльности.</p>
</div>

<div className="tech-card bg-surfaceHighlight/30 border border-border rounded-2xl p-6 relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-accent mb-4">
<iconify-icon icon="solar:play-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2">RUTUBE и Видео</h3>
<p className="text-sm text-textMuted font-light">Оформление и продвижение каналов. Видеомаркетинг на отечественных площадках.</p>
</div>

<div className="tech-card bg-surfaceHighlight/30 border border-border rounded-2xl p-6 relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-accent mb-4">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2">Реклама и Трафик</h3>
<p className="text-sm text-textMuted font-light">Настройка Яндекс.Директ и VK Ads. Приводим целевых клиентов, а не просто клики.</p>
</div>
</div>
</section>

<section className="bg-surfaceHighlight/10 border-y border-white/5 py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-10">
<h2 className="text-3xl font-bold tracking-tight">Технологии, которым можно доверять</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-surface border border-border rounded-xl p-6">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-accent" icon="solar:stopwatch-linear" width="32"></iconify-icon>
<span className="font-mono text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded">ROI &gt; 300%</span>
</div>
<h4 className="text-lg font-bold mb-2">Скорость</h4>
<p className="text-sm text-textMuted">Результат за дни. Используем готовые модули и no-code решения без потери качества.</p>
</div>

<div className="bg-surface border border-border rounded-xl p-6">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-accent" icon="solar:wallet-money-linear" width="32"></iconify-icon>
<span className="font-mono text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded">SAVINGS: 70%</span>
</div>
<h4 className="text-lg font-bold mb-2">Экономия</h4>
<p className="text-sm text-textMuted">Экономия бюджета за счёт автоматизации рутины и отказа от дорогого кастомного кода.</p>
</div>

<div className="bg-surface border border-border rounded-xl p-6">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-accent" icon="solar:shield-check-linear" width="32"></iconify-icon>
<span className="font-mono text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">RU_SERVER_NODE_1</span>
</div>
<h4 className="text-lg font-bold mb-2">Безопасность</h4>
<p className="text-sm text-textMuted">Вся инфраструктура на российских серверах. Независимость от санкций и блокировок.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="process">
<div className="mb-12 md:flex md:items-end md:justify-between">
<div>
<h2 className="text-3xl font-bold tracking-tight mb-4">От идеи до запуска</h2>
<p className="text-textMuted">Мы берём на себя всю техническую сложность. Прозрачный процесс.</p>
</div>
<div className="hidden md:block">
<iconify-icon className="text-accent animate-spin-slow" icon="solar:settings-linear" width="40"></iconify-icon>
</div>
</div>
<div className="relative grid gap-8 md:grid-cols-4">

<div className="hidden md:block absolute top-8 left-0 w-full h-px bg-gradient-to-r from-accent/50 to-transparent -z-10"></div>

<div className="bg-surface border border-border rounded-xl p-6 relative hover:border-accent transition group">
<div className="w-16 h-16 bg-surfaceHighlight rounded-lg flex items-center justify-center border border-border mb-4 group-hover:border-accent group-hover:text-accent transition">
<span className="font-mono text-xl font-bold">01</span>
</div>
<h4 className="font-bold text-lg mb-2">Анализ</h4>
<p className="text-sm text-textMuted mb-4">Изучаем бизнес, подбираем сервисы, строим схему данных.</p>
<div className="font-mono text-xs text-yellow-500 bg-yellow-500/10 inline-block px-2 py-1 rounded">Analysis Engine RUNNING</div>
</div>

<div className="bg-surface border border-border rounded-xl p-6 relative hover:border-accent transition group">
<div className="w-16 h-16 bg-surfaceHighlight rounded-lg flex items-center justify-center border border-border mb-4 group-hover:border-accent group-hover:text-accent transition">
<span className="font-mono text-xl font-bold">02</span>
</div>
<h4 className="font-bold text-lg mb-2">Прототип</h4>
<p className="text-sm text-textMuted mb-4">Показываем визуализацию и логику работы системы.</p>
<div className="font-mono text-xs text-blue-400 bg-blue-500/10 inline-block px-2 py-1 rounded">PROTOTYPE READY</div>
</div>

<div className="bg-surface border border-border rounded-xl p-6 relative hover:border-accent transition group">
<div className="w-16 h-16 bg-surfaceHighlight rounded-lg flex items-center justify-center border border-border mb-4 group-hover:border-accent group-hover:text-accent transition">
<span className="font-mono text-xl font-bold">03</span>
</div>
<h4 className="font-bold text-lg mb-2">Сборка и AI</h4>
<p className="text-sm text-textMuted mb-4">Создаём сайты, ботов, настраиваем n8n, обучаем нейросети.</p>
<div className="font-mono text-xs text-purple-400 bg-purple-500/10 inline-block px-2 py-1 rounded">ACTIVE COMPONENTS: 12</div>
</div>

<div className="bg-surface border border-border rounded-xl p-6 relative hover:border-accent transition group">
<div className="w-16 h-16 bg-surfaceHighlight rounded-lg flex items-center justify-center border border-border mb-4 group-hover:border-accent group-hover:text-accent transition">
<span className="font-mono text-xl font-bold">04</span>
</div>
<h4 className="font-bold text-lg mb-2">Запуск</h4>
<p className="text-sm text-textMuted mb-4">Тестируем, запускаем рекламу и передаём доступы.</p>
<div className="font-mono text-xs text-green-400 bg-green-500/10 inline-block px-2 py-1 rounded">SUPPORT MODE</div>
</div>
</div>
<div className="mt-10 text-center">
<a className="inline-flex items-center gap-2 text-accent font-semibold hover:text-white transition" href="#contact">
                    Начать работу <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="max-w-3xl mx-auto px-4 py-20" id="faq">
<h2 className="text-3xl font-bold mb-8 text-center">Отвечаем на важные вопросы</h2>
<div className="space-y-4">

<div className="faq-item border-b border-border pb-4 cursor-pointer" onclick="toggleFaq(this)">
<div className="flex justify-between items-center py-2">
<h3 className="font-semibold text-lg">Сколько это стоит?</h3>
<iconify-icon className="faq-icon text-textMuted" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>
<div className="faq-content text-textMuted text-sm leading-relaxed">
<p className="pt-2">Называем точную стоимость до старта. Сайт-визитка от 15 000 ₽, магазин от 30 000 ₽, бот от 10 000 ₽. Поэтапная оплата, никаких скрытых платежей.</p>
</div>
</div>

<div className="faq-item border-b border-border pb-4 cursor-pointer" onclick="toggleFaq(this)">
<div className="flex justify-between items-center py-2">
<h3 className="font-semibold text-lg">Зачем мне экосистема?</h3>
<iconify-icon className="faq-icon text-textMuted" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>
<div className="faq-content text-textMuted text-sm leading-relaxed">
<p className="pt-2">Чтобы исключить человеческий фактор. Клиент оставляет заявку → она в 1С → менеджер уведомлен. Всё само. Это экономит часы работы.</p>
</div>
</div>

<div className="faq-item border-b border-border pb-4 cursor-pointer" onclick="toggleFaq(this)">
<div className="flex justify-between items-center py-2">
<h3 className="font-semibold text-lg">Я не понимаю в технологиях</h3>
<iconify-icon className="faq-icon text-textMuted" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>
<div className="faq-content text-textMuted text-sm leading-relaxed">
<p className="pt-2">Это наша любимая категория клиентов. Вы рассказываете о бизнесе, мы предлагаем готовое решение и обучаем вашу команду.</p>
</div>
</div>

<div className="faq-item border-b border-border pb-4 cursor-pointer" onclick="toggleFaq(this)">
<div className="flex justify-between items-center py-2">
<h3 className="font-semibold text-lg">Вы работаете только в Туле?</h3>
<iconify-icon className="faq-icon text-textMuted" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>
<div className="faq-content text-textMuted text-sm leading-relaxed">
<p className="pt-2">Физически мы в Туле, но работаем удалённо со всей Россией. Все встречи в удобных мессенджерах.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-surfaceHighlight/10 rounded-3xl mx-4 mb-20 border border-border" id="contact">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-bold mb-4">Давайте обсудим ваш проект</h2>
<p className="text-textMuted mb-8">Напишите в удобный мессенджер или оставьте почту. Мы подготовим предварительный план за 24 часа.</p>
<div className="flex gap-4 mb-8">
<a className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-blue-600 hover:text-white transition group" href="#">
<iconify-icon icon="solar:plain-linear" width="24"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-green-600 hover:text-white transition group" href="#">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</a>
</div>
</div>
<div className="bg-surface p-8 rounded-2xl border border-border shadow-card">
<form className="space-y-4">
<div>
<label className="block text-xs font-mono text-textMuted mb-2">CONTACT_EMAIL</label>
<input className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition" placeholder="name@company.ru" type="email"/>
</div>
<button className="w-full bg-accent hover:bg-teal-500 text-white font-semibold py-3 rounded-lg shadow-glow transition duration-300" type="button">
                            Получить консультацию
                        </button>
<p className="text-[10px] text-textMuted text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-background py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-accent flex items-center justify-center font-bold text-white text-xs">DT</div>
<span className="font-bold tracking-tight">Digital Tula</span>
</div>
<div className="flex gap-6 text-sm text-textMuted">
<a className="hover:text-white transition" href="#services">Услуги</a>
<a className="hover:text-white transition" href="#process">Кейсы</a>
<a className="hover:text-white transition" href="#">Политика</a>
</div>
<div className="flex gap-4 text-textMuted">
<a className="hover:text-accent transition" href="#"><iconify-icon icon="solar:plain-linear" width="20"></iconify-icon></a>
<a className="hover:text-accent transition" href="#"><iconify-icon icon="solar:chat-square-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="text-center mt-8 text-xs text-textMuted/50 font-mono">
            © 2026 Digital Tula. All systems operational.
        </div>
</footer>



    </>
  );
}
