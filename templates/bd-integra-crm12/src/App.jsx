import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
primary: '#E53935',
primaryDark: '#C62828',
secondary: '#1A1A2E',
secondaryDark: '#2D2D44',
surface: '#F5F5F5',
border: '#E5E7EB',
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'glow': '0 0 40px -10px rgba(229, 57, 53, 0.3)',
}
}
}
}



        // Scroll Reveal Animation
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 100;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        reveal(); // Trigger on load

        // FAQ Accordion
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.iconify');
            
            // Close other open accordions
            document.querySelectorAll('.max-h-[500px]').forEach(el => {
                if(el !== content) {
                    el.style.maxHeight = '0';
                    el.classList.remove('max-h-[500px]');
                    el.previousElementSibling.querySelector('.iconify').style.transform = 'rotate(0deg)';
                }
            });

            if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                content.style.maxHeight = '0';
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.maxHeight = '500px'; // approximate max height
                icon.style.transform = 'rotate(180deg)';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 glass-dark transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-semibold tracking-tight hover:opacity-90 transition-opacity" href="#">
                BD INTEGRA
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-gray-300 hover:text-white transition-colors font-medium" href="#solutions">Решения</a>
<a className="text-sm text-gray-300 hover:text-white transition-colors font-medium" href="#process">Процесс</a>
<a className="text-sm text-gray-300 hover:text-white transition-colors font-medium" href="#cases">Кейсы</a>
<a className="text-sm text-gray-300 hover:text-white transition-colors font-medium" href="#pricing">Стоимость</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-primary hover:bg-primaryDark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors" href="#contact">
<span>Обсудить проект</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>

<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden mesh-bg">
<div className="absolute right-0 top-1/4 -translate-y-1/2 translate-x-1/4">
<div className="abstract-shape"></div>
</div>
<div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Принимаем заявки на март
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                    Создаём архитектуру <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">роста бизнеса</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 font-normal leading-relaxed max-w-lg">
                    CRM Битрикс24 + AI-боты + автоматизация — внедряем системы, которые работают, а не пылятся.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primaryDark text-white px-8 py-4 rounded-xl text-base font-medium transition-all shadow-glow hover:scale-[1.02]" href="#pricing">
                        Заказать Discovery
                    </a>
<a className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-xl text-base font-medium transition-all hover:scale-[1.02]" href="#cases">
                        Смотреть кейсы
                    </a>
</div>
<div className="text-sm text-gray-500">
                    Discovery — предпроектное исследование вашего бизнеса за 3-30 дней
                </div>
<div className="pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-400">
<div className="flex items-center gap-2">
<span className="iconify text-primary" data-icon="lucide:check-circle" data-width="16"></span>
                        15+ проектов
                    </div>
<div className="flex items-center gap-2">
<span className="iconify text-primary" data-icon="lucide:trending-up" data-width="16"></span>
                        +29% к продажам
                    </div>
<div className="flex items-center gap-2">
<span className="iconify text-primary" data-icon="lucide:wallet" data-width="16"></span>
                        Экономия 40 000₽/мес
                    </div>
</div>
</div>
<div className="relative hidden lg:block reveal delay-200">

<div className="relative bg-[#1E1E34] border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-700 ease-out">
<div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-2xl"></div>

<div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="h-2 w-32 bg-white/10 rounded-full"></div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-white/5 p-4 rounded-lg">
<div className="flex items-center gap-2 mb-2">
<span className="iconify text-primary" data-icon="lucide:bar-chart-2"></span>
<span className="text-xs text-gray-400">Продажи</span>
</div>
<div className="text-2xl text-white font-semibold">2.4M ₽</div>
<div className="text-xs text-green-400 mt-1">+12% vs last month</div>
</div>
<div className="bg-white/5 p-4 rounded-lg">
<div className="flex items-center gap-2 mb-2">
<span className="iconify text-blue-400" data-icon="lucide:users"></span>
<span className="text-xs text-gray-400">Лиды</span>
</div>
<div className="text-2xl text-white font-semibold">142</div>
<div className="text-xs text-gray-500 mt-1">15 новых сегодня</div>
</div>
</div>

<div className="space-y-3">
<div className="h-10 bg-white/5 rounded w-full flex items-center px-3">
<div className="w-8 h-8 rounded-full bg-white/10 mr-3"></div>
<div className="h-2 w-24 bg-white/10 rounded"></div>
<div className="ml-auto h-2 w-12 bg-green-500/20 rounded"></div>
</div>
<div className="h-10 bg-white/5 rounded w-full flex items-center px-3">
<div className="w-8 h-8 rounded-full bg-white/10 mr-3"></div>
<div className="h-2 w-32 bg-white/10 rounded"></div>
<div className="ml-auto h-2 w-12 bg-yellow-500/20 rounded"></div>
</div>
<div className="h-10 bg-white/5 rounded w-full flex items-center px-3">
<div className="w-8 h-8 rounded-full bg-white/10 mr-3"></div>
<div className="h-2 w-20 bg-white/10 rounded"></div>
<div className="ml-auto h-2 w-12 bg-blue-500/20 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface" id="problems">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-4 tracking-tight">Узнаёте себя?</h2>
<p className="text-gray-600 text-lg">Если эти ситуации знакомы вашему бизнесу, пришло время менять подход.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-soft hover-lift reveal delay-100 group">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
<span className="iconify text-primary" data-icon="lucide:trending-down" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-secondary mb-3">Заявки теряются</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Менеджеры забывают перезвонить, клиенты уходят к конкурентам. Вы не знаете, сколько денег упускаете.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-soft hover-lift reveal delay-200 group">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
<span className="iconify text-orange-500" data-icon="lucide:flame" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-secondary mb-3">Вы тушите пожары</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Бизнес держится на ручном контроле. Без вас ничего не работает, вы — главное узкое горлышко.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-soft hover-lift reveal delay-300 group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
<span className="iconify text-blue-600" data-icon="lucide:file-spreadsheet" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-secondary mb-3">Хаос в Excel</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Нет понятных цифр: конверсии, эффективность каналов. Аналитика собирается вручную и с ошибками.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-soft hover-lift reveal delay-400 group">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
<span className="iconify text-purple-600" data-icon="lucide:frown" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-secondary mb-3">CRM не прижилась</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Уже пробовали внедрять — менеджеры саботируют, система сложная, деньги потрачены впустую.
                    </p>
</div>
</div>
<div className="mt-12 text-center reveal">
<a className="inline-flex items-center gap-2 text-primary font-medium hover:text-primaryDark transition-colors" href="#contact">
                    Решить эти проблемы
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-2 tracking-tight">Что мы делаем</h2>
<p className="text-gray-500 text-lg">Не настраиваем кнопки — проектируем систему роста</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group border border-gray-100 rounded-2xl p-8 hover:border-primary/20 transition-colors reveal">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-secondary">
<span className="iconify" data-icon="lucide:search" data-width="20"></span>
</div>
<span className="px-2 py-1 bg-red-50 text-primary text-xs font-medium rounded">Точка входа</span>
</div>
<h3 className="text-xl font-semibold text-secondary mb-1">Discovery</h3>
<p className="text-sm text-gray-400 mb-4">Предпроектное исследование</p>
<p className="text-sm text-gray-600 mb-6 leading-relaxed">
                        Исследуем бизнес-процессы, выявляем узкие места, проектируем архитектуру и считаем экономику внедрения.
                    </p>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-medium text-secondary">от 25 000 ₽</span>
<a className="text-primary text-sm font-medium hover:underline" href="#pricing">Подробнее →</a>
</div>
</div>

<div className="group border border-gray-100 rounded-2xl p-8 hover:border-primary/20 transition-colors reveal delay-100">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-secondary">
<span className="iconify" data-icon="lucide:settings-2" data-width="20"></span>
</div>
</div>
<h3 className="text-xl font-semibold text-secondary mb-1">Внедрение CRM</h3>
<p className="text-sm text-gray-400 mb-4">Битрикс24 под ваш бизнес</p>
<p className="text-sm text-gray-600 mb-6 leading-relaxed">
                        7 слоёв настройки: архитектура, поля, автоматизация, документы, каналы связи, аналитика, права доступа.
                    </p>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-medium text-secondary">от 150 000 ₽</span>
<a className="text-primary text-sm font-medium hover:underline" href="#contact">Подробнее →</a>
</div>
</div>

<div className="group border border-gray-100 rounded-2xl p-8 hover:border-primary/20 transition-colors reveal delay-200">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-secondary">
<span className="iconify" data-icon="lucide:bot" data-width="20"></span>
</div>
<span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded">AI Новинка</span>
</div>
<h3 className="text-xl font-semibold text-secondary mb-1">AI-боты</h3>
<p className="text-sm text-gray-400 mb-4">Искусственный интеллект</p>
<p className="text-sm text-gray-600 mb-6 leading-relaxed">
                        Квалификация лидов, генерация документов, помощник менеджера, аналитик продаж — автоматизация через AI.
                    </p>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-medium text-secondary">от 35 000 ₽</span>
<a className="text-primary text-sm font-medium hover:underline" href="#contact">Подробнее →</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-surface to-white" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-4 tracking-tight">Discovery — с чего всё начинается</h2>
<p className="text-gray-600 text-lg">Поймите, что именно нужно вашему бизнесу, прежде чем тратить бюджет на разработку.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all reveal delay-100">
<h3 className="text-xl font-semibold text-secondary">Discovery Lite</h3>
<div className="my-4">
<span className="text-3xl font-bold text-secondary">25 000 ₽</span>
</div>
<p className="text-sm text-gray-500 mb-6">Быстрый старт для небольших задач</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-600">
<span className="iconify text-green-500 mt-0.5 min-w-[16px]" data-icon="lucide:check" data-width="16"></span>
                            3 встречи по 1ч 20мин
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<span className="iconify text-green-500 mt-0.5 min-w-[16px]" data-icon="lucide:check" data-width="16"></span>
                            1 отдел / 1 процесс
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<span className="iconify text-green-500 mt-0.5 min-w-[16px]" data-icon="lucide:check" data-width="16"></span>
                            Схема бизнес-процесса
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<span className="iconify text-green-500 mt-0.5 min-w-[16px]" data-icon="lucide:check" data-width="16"></span>
                            Срок: 3-5 дней
                        </li>
</ul>
<a className="block w-full text-center py-3 border border-secondary text-secondary font-medium rounded-lg hover:bg-secondary hover:text-white transition-colors" href="#contact">Выбрать</a>
</div>

<div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-primary relative z-10 transform md:scale-105 reveal">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        Популярный
                    </div>
<h3 className="text-xl font-semibold text-secondary">Discovery Core</h3>
<div className="my-4">
<span className="text-3xl font-bold text-secondary">49 000 ₽</span>
</div>
<p className="text-sm text-gray-500 mb-6">Оптимальный вариант для внедрения CRM</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-secondary font-medium">
<span className="iconify text-primary mt-0.5 min-w-[16px]" data-icon="lucide:check" data-width="16"></span>
                            4-5 встреч с командой
                        </li>
<li className="flex items-start gap-3 text-sm text-secondary font-medium">
<span className="iconify text-primary mt-0.5 min-w-[16px]" data-icon="lucide:check" data-width="16"></span>
                            2-4 отдела компании
                        </li>
<li className="flex items-start gap-3 text-sm text-secondary font-medium">
<span className="iconify text-primary mt-0.5 min-w-[16px]" data-icon="lucide:check" data-width="16"></span>
                            Полная схема процессов
                        </li>
<li className="flex items-start gap-3 text-sm text-secondary font-medium">
<span className="iconify text-primary mt-0.5 min-w-[16px]" data-icon="lucide:check" data-width="16"></span>
                            Базовый AI-аудит
                        </li>
<li className="flex items-start gap-3 text-sm text-secondary font-medium">
<span className="iconify text-primary mt-0.5 min-w-[16px]" data-icon="lucide:check" data-width="16"></span>
                            ТЭО с расчётом ROI
                        </li>
<li className="flex items-start gap-3 text-sm text-secondary font-medium">
<span className="iconify text-primary mt-0.5 min-w-[16px]" data-icon="lucide:check" data-width="16"></span>
                            Срок: 7-10 дней
                        </li>
</ul>
<a className="block w-full text-center py-3 bg-primary text-white font-medium rounded-lg hover:bg-primaryDark transition-colors shadow-lg shadow-primary/30" href="#contact">Выбрать</a>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all reveal delay-200">
<h3 className="text-xl font-semibold text-secondary">Discovery Pro</h3>
<div className="my-4">
<span className="text-3xl font-bold text-secondary">89 000 ₽</span>
</div>
<p className="text-sm text-gray-500 mb-6">Комплексная цифровая стратегия</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-600">
<span className="iconify text-green-500 mt-0.5 min-w-[16px]" data-icon="lucide:check" data-width="16"></span>
                            7+ встреч со всеми отделами
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<span className="iconify text-green-500 mt-0.5 min-w-[16px]" data-icon="lucide:check" data-width="16"></span>
                            Вся компания целиком
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<span className="iconify text-green-500 mt-0.5 min-w-[16px]" data-icon="lucide:check" data-width="16"></span>
                            Детальная схема всех процессов
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<span className="iconify text-green-500 mt-0.5 min-w-[16px]" data-icon="lucide:check" data-width="16"></span>
                            Полный AI-аудит
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<span className="iconify text-green-500 mt-0.5 min-w-[16px]" data-icon="lucide:check" data-width="16"></span>
                            Дорожная карта на 12 мес
                        </li>
</ul>
<a className="block w-full text-center py-3 border border-secondary text-secondary font-medium rounded-lg hover:bg-secondary hover:text-white transition-colors" href="#contact">Выбрать</a>
</div>
</div>
<div className="mt-12 text-center text-sm text-gray-500">
<p className="mb-4">Не знаете, какой тариф выбрать? Оставьте заявку — поможем определиться</p>
<a className="text-primary font-medium border-b border-primary/30 hover:border-primary pb-0.5 transition-colors" href="#contact">Получить консультацию</a>
</div>
</div>
</section>

<section className="py-24 bg-secondary" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight">Как мы работаем</h2>
<p className="text-gray-400 text-lg">7 слоёв послойного внедрения системы</p>
</div>
<div className="relative space-y-4 max-w-4xl mx-auto">
<div className="absolute left-[20px] top-4 bottom-4 w-0.5 bg-white/10 md:hidden"></div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-6 reveal delay-100">
<div className="hidden md:flex w-24 text-right text-gray-500 text-sm font-mono">Слой 1</div>
<div className="flex-1 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm w-full">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded bg-secondaryDark flex items-center justify-center text-white/70 font-mono text-xs border border-white/10 md:hidden">01</span>
<span className="text-white font-medium">IT-инфраструктура и архитектура CRM</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-6 reveal delay-150">
<div className="hidden md:flex w-24 text-right text-gray-500 text-sm font-mono">Слой 2</div>
<div className="flex-1 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm w-full ml-0 md:ml-4">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded bg-secondaryDark flex items-center justify-center text-white/70 font-mono text-xs border border-white/10 md:hidden">02</span>
<span className="text-white font-medium">Наполнение сущностей — поля в карточках</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-6 reveal delay-200">
<div className="hidden md:flex w-24 text-right text-gray-500 text-sm font-mono">Слой 3</div>
<div className="flex-1 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm w-full ml-0 md:ml-8 border-l-4 border-l-primary">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded bg-secondaryDark flex items-center justify-center text-white/70 font-mono text-xs border border-white/10 md:hidden">03</span>
<span className="text-white font-medium">Автоматизация — роботы, триггеры, БП</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-6 reveal delay-250">
<div className="hidden md:flex w-24 text-right text-gray-500 text-sm font-mono">Слой 4</div>
<div className="flex-1 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm w-full ml-0 md:ml-12">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded bg-secondaryDark flex items-center justify-center text-white/70 font-mono text-xs border border-white/10 md:hidden">04</span>
<span className="text-white font-medium">Шаблоны документов</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-6 reveal delay-300">
<div className="hidden md:flex w-24 text-right text-gray-500 text-sm font-mono">Слой 5</div>
<div className="flex-1 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm w-full ml-0 md:ml-16">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded bg-secondaryDark flex items-center justify-center text-white/70 font-mono text-xs border border-white/10 md:hidden">05</span>
<span className="text-white font-medium">Источники заявок и каналы связи</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-6 reveal delay-350">
<div className="hidden md:flex w-24 text-right text-gray-500 text-sm font-mono">Слой 6</div>
<div className="flex-1 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm w-full ml-0 md:ml-20">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded bg-secondaryDark flex items-center justify-center text-white/70 font-mono text-xs border border-white/10 md:hidden">06</span>
<span className="text-white font-medium">Аналитика и отчёты</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-6 reveal delay-400">
<div className="hidden md:flex w-24 text-right text-gray-500 text-sm font-mono">Слой 7</div>
<div className="flex-1 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm w-full ml-0 md:ml-24">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded bg-secondaryDark flex items-center justify-center text-white/70 font-mono text-xs border border-white/10 md:hidden">07</span>
<span className="text-white font-medium">Права доступа и интерфейс</span>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm reveal">
                    Финальные 30% — тестирование, обучение, запуск с живыми клиентами
                </div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="cases">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-16 text-center tracking-tight reveal">Результаты наших клиентов</h2>
<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-surface rounded-2xl p-8 reveal">
<div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Производство</div>
<h3 className="text-lg font-semibold text-secondary mb-4">Потеря заявок и хаос в Excel</h3>
<div className="space-y-4">
<div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
<div className="text-2xl font-bold text-green-600">+35%</div>
<div className="text-xs text-gray-500">Конверсия в продажу</div>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
<div className="text-2xl font-bold text-secondary">0</div>
<div className="text-xs text-gray-500">Потерянных заявок</div>
</div>
<div className="text-sm text-gray-600 pt-2">
                            "Менеджеры перестали забывать клиентов. Экономия 2ч/день на сотрудника."
                        </div>
</div>
</div>

<div className="bg-surface rounded-2xl p-8 reveal delay-100">
<div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Торговля</div>
<h3 className="text-lg font-semibold text-secondary mb-4">Отсутствие аналитики</h3>
<div className="space-y-4">
<div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
<div className="text-2xl font-bold text-green-600">+29%</div>
<div className="text-xs text-gray-500">К выручке</div>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
<div className="text-2xl font-bold text-secondary">340%</div>
<div className="text-xs text-gray-500">ROI внедрения</div>
</div>
<div className="text-sm text-gray-600 pt-2">
                            "Теперь мы видим полную прозрачность воронки и знаем, где теряем деньги."
                        </div>
</div>
</div>

<div className="bg-surface rounded-2xl p-8 reveal delay-200">
<div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Сервис</div>
<h3 className="text-lg font-semibold text-secondary mb-4">CRM не прижилась</h3>
<div className="space-y-4">
<div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
<div className="text-2xl font-bold text-green-600">100%</div>
<div className="text-xs text-gray-500">Adoption сотрудниками</div>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
<div className="text-2xl font-bold text-secondary">2 мес</div>
<div className="text-xs text-gray-500">Окупаемость</div>
</div>
<div className="text-sm text-gray-600 pt-2">
                            "Система стала помощником, а не обузой. Экономим более 40 часов в месяц."
                        </div>
</div>
</div>
</div>
<div className="text-center mt-12 reveal">
<a className="text-primary font-medium hover:text-primaryDark transition-colors" href="#contact">Смотреть все кейсы →</a>
</div>
</div>
</section>

<section className="py-24 bg-surface">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-16 text-center tracking-tight reveal">Почему мы</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="bg-white p-6 rounded-xl shadow-sm hover-lift reveal">
<span className="text-4xl mb-4 block">🎯</span>
<h4 className="text-lg font-semibold mb-2 text-secondary">Discovery вместо брифа</h4>
<p className="text-sm text-gray-500">Не делаем «как скажете» — исследуем бизнес и проектируем правильную архитектуру.</p>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm hover-lift reveal delay-100">
<span className="text-4xl mb-4 block">🤖</span>
<h4 className="text-lg font-semibold mb-2 text-secondary">AI-боты и автоматизация</h4>
<p className="text-sm text-gray-500">Внедряем искусственный интеллект: квалификация, генерация документов, аналитика.</p>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm hover-lift reveal delay-200">
<span className="text-4xl mb-4 block">📊</span>
<h4 className="text-lg font-semibold mb-2 text-secondary">ТЭО с расчётом ROI</h4>
<p className="text-sm text-gray-500">Считаем экономику до старта — вы видите, сколько заработаете и когда окупится.</p>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm hover-lift reveal delay-300">
<span className="text-4xl mb-4 block">🎓</span>
<h4 className="text-lg font-semibold mb-2 text-secondary">Обучение и поддержка</h4>
<p className="text-sm text-gray-500">2 модуля обучения, видеоинструкции — система работает без нас.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-12 text-center tracking-tight reveal">Частые вопросы</h2>
<div className="space-y-4 reveal">

<div className="border border-gray-200 rounded-xl overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium text-secondary">Что такое Discovery и зачем он нужен?</span>
<span className="iconify transform transition-transform text-gray-400" data-icon="lucide:chevron-down" data-width="20"></span>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out bg-gray-50">
<div className="p-6 text-sm text-gray-600 pt-0 border-t border-gray-100">
<p className="mt-4">Discovery — это предпроектное исследование вашего бизнеса. Мы проводим 3-7 встреч с командой, изучаем процессы, выявляем узкие места и проектируем архитектуру решения. Без Discovery высок риск внедрить систему, которая не приживётся.</p>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-xl overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium text-secondary">Сколько стоит внедрение CRM?</span>
<span className="iconify transform transition-transform text-gray-400" data-icon="lucide:chevron-down" data-width="20"></span>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out bg-gray-50">
<div className="p-6 text-sm text-gray-600 pt-0 border-t border-gray-100">
<p className="mt-4">Типовой проект внедрения CRM Битрикс24 стоит 150-300 тыс. рублей и занимает 8-16 недель. Точная стоимость определяется после Discovery, когда мы понимаем объём работ.</p>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-xl overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium text-secondary">У нас уже есть Битрикс24, нужен ли Discovery?</span>
<span className="iconify transform transition-transform text-gray-400" data-icon="lucide:chevron-down" data-width="20"></span>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out bg-gray-50">
<div className="p-6 text-sm text-gray-600 pt-0 border-t border-gray-100">
<p className="mt-4">Да, особенно если система «не прижилась» или работает не так, как нужно. Discovery поможет понять, что исправить и как настроить правильно.</p>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-xl overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors" onclick="toggleFaq(this)">
<span className="font-medium text-secondary">Можно сразу внедрение без Discovery?</span>
<span className="iconify transform transition-transform text-gray-400" data-icon="lucide:chevron-down" data-width="20"></span>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out bg-gray-50">
<div className="p-6 text-sm text-gray-600 pt-0 border-t border-gray-100">
<p className="mt-4">Мы не рекомендуем. 80% проваленных внедрений — результат работы без исследования. Discovery — страховка от потери денег.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br from-primary to-primaryDark" id="contact">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight reveal">Готовы навести порядок в продажах?</h2>
<p className="text-white/80 text-lg mb-12 reveal delay-100">Начните с Discovery — предпроектного исследования вашего бизнеса</p>
<form className="bg-white rounded-2xl p-8 shadow-2xl max-w-lg mx-auto reveal delay-200" onsubmit="event.preventDefault(); alert('Спасибо! Мы свяжемся с вами в ближайшее время.');">
<div className="space-y-4">
<div className="text-left">
<label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Иван Иванов" required="" type="text"/>
</div>
<div className="text-left">
<label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="+7 (999) 000-00-00" required="" type="tel"/>
</div>
<div className="text-left">
<label className="block text-sm font-medium text-gray-700 mb-1">Кратко о задаче (необязательно)</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Хочу внедрить CRM..." rows="3"></textarea>
</div>
<button className="w-full bg-secondary hover:bg-secondaryDark text-white font-medium py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.01]" type="submit">
                        Заказать Discovery
                    </button>
</div>
<p className="text-xs text-gray-400 mt-4">Перезвоним в течение 2 часов в рабочее время</p>
</form>
</div>
</section>

<footer className="bg-secondary pt-16 pb-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="text-white text-xl font-bold tracking-tight block mb-6" href="#">BD INTEGRA</a>
<p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                        Интегратор Битрикс24 и автоматизации. Создаём архитектуру роста для современных компаний.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Услуги</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Discovery</a></li>
<li><a className="hover:text-white transition-colors" href="#">Внедрение CRM</a></li>
<li><a className="hover:text-white transition-colors" href="#">AI-боты</a></li>
<li><a className="hover:text-white transition-colors" href="#">Обучение</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Контакты</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:phone" data-width="16"></span>
                            +7 (918) 33-21-695
                        </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
                            info@bd-integra.ru
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
<div>© 2025 BD INTEGRA. Создаём архитектуру роста бизнеса.</div>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
