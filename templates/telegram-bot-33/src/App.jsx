import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function selectTariff(tariffName) {
            const select = document.getElementById('niche');
            for(let i=0; i<select.options.length; i++){
                if(select.options[i].value.includes(tariffName)){
                    select.selectedIndex = i;
                    break;
                }
            }
        }

        async function submitForm(e) {
            e.preventDefault();
            
            const btn = document.getElementById('submit-btn');
            const status = document.getElementById('form-status');
            const originalText = btn.innerText;
            
            // Данные
            const name = document.getElementById('name').value;
            const contact = document.getElementById('contact-info').value;
            const niche = document.getElementById('niche').value;

            // Текст сообщения
            const text = `🔥 *Новая заявка с сайта!*\n\n👤 *Имя:* ${name}\n📱 *Контакт:* ${contact}\n💼 *Интерес:* ${niche}`;
            
            // Настройка API
            // ВАЖНО: Вставьте сюда реальный ID бота (например '123456789:ABCDef...') 
            // и ваш численный Chat ID, чтобы отправка шла фоном.
            // Если данные не верны, сработает автоматический переход в диалог (fallback).
            const botToken = '7154562060:AAFQIAirHICSG6Tn1Ux11rkWeNHuNzTvou8'; 
            const chatId = 'YOUR_NUMERIC_CHAT_ID_HERE'; 

            const myUsername = 'Karpenko_YA'; // Ваш юзернейм для переадресации

            btn.disabled = true;
            btn.innerHTML = '<div class="loading-spinner"></div> Отправка...';
            status.classList.add('hidden');

            // Функция для открытия Telegram с предзаполненным текстом (надежный способ)
            const openTelegramDirect = () => {
                const url = `https://t.me/${myUsername}?text=${encodeURIComponent(text.replace(/\*/g, ''))}`; // Убираем звездочки для URL
                window.open(url, '_blank');
                status.innerText = '✅ Перенаправляем в Telegram для отправки...';
                status.className = 'text-sm text-emerald-600 mt-2 block';
                btn.disabled = false;
                btn.innerText = originalText;
                document.getElementById('telegram-form').reset();
            };

            // Пытаемся отправить через API
            try {
                // Если токен дефолтный или chat_id не заполнен, сразу переходим к fallback
                if (botToken.includes('7154562060') && chatId === 'YOUR_NUMERIC_CHAT_ID_HERE') {
                    throw new Error('Config not set');
                }

                const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: text,
                        parse_mode: 'Markdown'
                    })
                });

                const data = await response.json();

                if (data.ok) {
                    status.innerText = '✅ Заявка успешно отправлена! Скоро свяжемся.';
                    status.className = 'text-sm text-emerald-600 mt-2 block';
                    document.getElementById('telegram-form').reset();
                    btn.disabled = false;
                    btn.innerText = originalText;
                } else {
                    throw new Error('API Error');
                }
            } catch (error) {
                // Если API не сработало (или не настроено), открываем диалог с юзером
                console.log('Sending via direct link fallback');
                openTelegramDirect();
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
<a className="text-xl font-bold tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="bot" strokeWidth="1.5"></i>
</div>
                TG.BOT
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#problem">Проблема</a>
<a className="hover:text-zinc-900 transition-colors" href="#solution">Решение</a>
<a className="hover:text-zinc-900 transition-colors" href="#cases">Кейсы</a>
<a className="hover:text-zinc-900 transition-colors" href="#pricing">Тарифы</a>
</nav>
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900" href="https://t.me/Karpenko_YA" target="_blank">
                Консультация
            </a>
</div>
</header>
<main className="pt-16">

<section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-50 via-white to-white"></div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="lg:w-1/2 flex flex-col items-start text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
                        Готовый бот за 2 часа
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-zinc-900 tracking-tight leading-[1.1] mb-6">
                        Telegram‑бот для вашего бизнеса <span className="text-sky-600">за ₽12K</span> вместо 2 недель
                    </h1>
<p className="text-lg text-zinc-500 mb-8 max-w-lg leading-relaxed">
                        Записи на услуги, заявки и продажи прямо в Telegram за 2–4 часа. Готовый бот уже завтра — без программистов и агентств.
                    </p>
<ul className="flex flex-col gap-3 mb-8 text-sm font-medium text-zinc-700">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle" strokeWidth="2"></i>
                            Запуск за 2–4 часа
                        </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle" strokeWidth="2"></i>
                            Стоимость от ₽12,000
                        </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle" strokeWidth="2"></i>
                            Поддержка и доработки по подписке
                        </li>
</ul>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-sky-600 rounded-full hover:bg-sky-500 transition-all shadow-[0_1px_2px_rgba(14,165,233,0.3)]" href="https://t.me/Karpenko_YA" target="_blank">
                            Получить бесплатную консультацию
                        </a>
<a className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-zinc-700 bg-white border border-zinc-200 rounded-full hover:bg-zinc-50 transition-colors" href="#cases">
                            Посмотреть примеры
                        </a>
</div>
</div>

<div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
<div className="relative w-[300px] h-[600px] bg-white rounded-[3rem] border-8 border-zinc-900 shadow-2xl overflow-hidden">
<div className="bg-sky-600 h-20 flex items-end px-4 py-3 text-white">
<div className="flex items-center gap-3 w-full">
<i className="w-6 h-6" data-lucide="chevron-left"></i>
<div className="flex-1">
<div className="text-sm font-semibold">Салон "Beauty"</div>
<div className="text-[10px] opacity-80">бот</div>
</div>
<div className="w-8 h-8 rounded-full bg-white/20"></div>
</div>
</div>
<div className="p-4 flex flex-col gap-4 h-[420px] bg-[#EBEBEB] overflow-hidden relative">
<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="self-start max-w-[85%] bg-white rounded-2xl rounded-tl-none p-3 shadow-sm z-10">
<p className="text-xs text-zinc-800 leading-relaxed">👋 Привет! Добро пожаловать в салон Beauty. Выберите действие:</p>
<span className="text-[10px] text-zinc-400 mt-1 block text-right">10:00</span>
</div>
<div className="self-end max-w-[85%] bg-sky-500 rounded-2xl rounded-tr-none p-3 shadow-sm z-10">
<p className="text-xs text-white leading-relaxed">Хочу записаться на маникюр</p>
<span className="text-[10px] text-sky-100 mt-1 block text-right">10:01</span>
</div>
<div className="self-start max-w-[85%] bg-white rounded-2xl rounded-tl-none p-3 shadow-sm z-10">
<p className="text-xs text-zinc-800 leading-relaxed">Отлично! Выберите мастера:</p>
<div className="mt-2 flex flex-col gap-1">
<button className="w-full py-2 bg-sky-50 text-sky-600 rounded text-xs font-medium">Анна (Топ-мастер)</button>
<button className="w-full py-2 bg-sky-50 text-sky-600 rounded text-xs font-medium">Елена (Мастер)</button>
</div>
<span className="text-[10px] text-zinc-400 mt-1 block text-right">10:01</span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 bg-white p-3 border-t border-zinc-100 flex items-center justify-center">
<div className="w-full py-3 bg-zinc-100 rounded-lg text-center text-zinc-400 text-xs">
                                Меню
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 border-y border-zinc-200" id="problem">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="max-w-2xl mb-12">
<h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight mb-4">
                        Вы теряете клиентов, потому что не успеваете им отвечать
                    </h2>
<p className="text-zinc-500">
                        Клиент пишет в Директ или Telegram, ждет 15 минут, не получает ответа и уходит к конкуренту. Для малого бизнеса это потеря 30–40% выручки ежемесячно.
                    </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
<div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 mb-4">
<i data-lucide="user-x" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Клиенты уходят</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Пока вы заняты работой, клиент пишет конкуренту, который ответил быстрее.
                        </p>
</div>
<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
<div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-500 mb-4">
<i data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Рутина съедает время</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Вы тратите часы на однотипные ответы: «Сколько стоит?», «Где находитесь?», «Есть место?».
                        </p>
</div>
<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
<div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-500 mb-4">
<i data-lucide="alert-circle" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Сложные альтернативы</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Агентства просят от ₽50K и делают недели. Конструкторы требуют времени на изучение.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="solution">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="md:w-1/2">
<h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight mb-6">
                            Готовый Telegram‑бот за 2–4 часа — под ваш бизнес
                        </h2>
<p className="text-zinc-500 mb-8">
                            Мы создаем бота на мощном конструкторе с индивидуальной логикой под ваши задачи. Это не шаблон, а инструмент, который закрывает ваши потребности: от записи на ноготочки до продажи курсов.
                        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-sky-600 mt-1" data-lucide="list-checks"></i>
<div>
<h4 className="font-medium text-zinc-900 text-sm">Сбор заявок 24/7</h4>
<p className="text-xs text-zinc-500 mt-1">Бот не спит и не обедает.</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-sky-600 mt-1" data-lucide="bell-ring"></i>
<div>
<h4 className="font-medium text-zinc-900 text-sm">Уведомления админу</h4>
<p className="text-xs text-zinc-500 mt-1">Мгновенно в ваш Telegram.</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-sky-600 mt-1" data-lucide="table-2"></i>
<div>
<h4 className="font-medium text-zinc-900 text-sm">База в Google Sheets</h4>
<p className="text-xs text-zinc-500 mt-1">Простейшая CRM бесплатно.</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-sky-600 mt-1" data-lucide="credit-card"></i>
<div>
<h4 className="font-medium text-zinc-900 text-sm">Прием оплат</h4>
<p className="text-xs text-zinc-500 mt-1">Интеграция с платежками.</p>
</div>
</div>
</div>
</div>
<div className="md:w-1/2 bg-zinc-50 rounded-3xl p-8 border border-zinc-200">
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 mb-4">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-100 shadow-sm flex justify-between items-center">
<span className="text-sm font-medium">Новая заявка: Маникюр</span>
<span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Оплачено</span>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-100 shadow-sm flex justify-between items-center opacity-75">
<span className="text-sm font-medium">Новая заявка: Консультация</span>
<span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">Ожидание</span>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-100 shadow-sm flex justify-between items-center opacity-50">
<span className="text-sm font-medium">Вопрос: Прайс-лист</span>
<span className="text-xs bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-full">Автоответ</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 border-y border-zinc-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<h2 className="text-2xl md:text-3xl font-semibold text-center text-zinc-900 tracking-tight mb-16">
                    Как мы запустим вам бота
                </h2>
<div className="grid md:grid-cols-4 gap-8 relative">
<div className="hidden md:block absolute top-6 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-zinc-200 -z-10"></div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 shadow-sm mb-4 z-10">
<i data-lucide="message-circle" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">1. Разбор задачи</h3>
<p className="text-sm text-zinc-500">30 минут созвона или переписки. Понимаем, что вам нужно.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 shadow-sm mb-4 z-10">
<i data-lucide="code-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">2. Разработка</h3>
<p className="text-sm text-zinc-500">2–4 часа магии. Собираем логику и подключаем сервисы.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 shadow-sm mb-4 z-10">
<i data-lucide="play-circle" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">3. Тестирование</h3>
<p className="text-sm text-zinc-500">30 минут. Проверяем все сценарии вместе с вами.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 shadow-sm mb-4 z-10">
<i data-lucide="rocket" strokeWidth="1.5"></i>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">4. Запуск и обучение</h3>
<p className="text-sm text-zinc-500">Передаем права, показываем как пользоваться.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight mb-4">
                        Чем мы отличаемся от остальных
                    </h2>
<p className="text-zinc-500">
                        Оптимальный баланс между стоимостью, скоростью и качеством для микробизнеса.
                    </p>
</div>
<div className="overflow-x-auto">
<div className="min-w-[600px] border border-zinc-200 rounded-2xl">
<div className="grid grid-cols-5 bg-zinc-50 border-b border-zinc-200 p-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
<div className="col-span-2">Решение</div>
<div>Цена</div>
<div>Сроки</div>
<div>Сложность</div>
</div>
<div className="grid grid-cols-5 p-4 border-b border-zinc-100 items-center hover:bg-zinc-50 transition-colors">
<div className="col-span-2 font-medium text-zinc-900">IT-Агентство</div>
<div className="text-sm text-zinc-600">₽50–300K</div>
<div className="text-sm text-zinc-600">2–6 недель</div>
<div className="text-sm text-zinc-600">Сложно</div>
</div>
<div className="grid grid-cols-5 p-4 border-b border-zinc-100 items-center hover:bg-zinc-50 transition-colors">
<div className="col-span-2 font-medium text-zinc-900">Фрилансер</div>
<div className="text-sm text-zinc-600">₽15–40K</div>
<div className="text-sm text-zinc-600">1–3 недели</div>
<div className="text-sm text-zinc-600">Рискованно</div>
</div>
<div className="grid grid-cols-5 p-4 border-b border-zinc-100 items-center hover:bg-zinc-50 transition-colors">
<div className="col-span-2 font-medium text-zinc-900">Конструктор (DIY)</div>
<div className="text-sm text-zinc-600">₽1.5K/мес</div>
<div className="text-sm text-zinc-600">Недели</div>
<div className="text-sm text-zinc-600">Нужно учиться</div>
</div>
<div className="grid grid-cols-5 p-4 bg-sky-50/50 items-center">
<div className="col-span-2 font-semibold text-sky-700 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check"></i> Наш сервис
                            </div>
<div className="text-sm font-medium text-zinc-900">от ₽12K</div>
<div className="text-sm font-medium text-zinc-900">2–4 часа</div>
<div className="text-sm font-medium text-zinc-900">Под ключ</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 border-y border-zinc-200" id="cases">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight mb-12">
                    Результаты клиентов
                </h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
<i className="w-4 h-4" data-lucide="scissors"></i>
</div>
<div className="text-sm font-medium">Салон красоты</div>
</div>
<p className="text-zinc-500 text-sm mb-6 flex-grow">
                            Раньше теряли заявки в директе. Бот теперь автоматически записывает на услуги и напоминает о визите.
                        </p>
<div className="pt-4 border-t border-zinc-100">
<span className="block text-2xl font-bold text-emerald-600 tracking-tight">+40%</span>
<span className="text-xs text-zinc-400 font-medium uppercase tracking-wide">Рост заявок за неделю</span>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
</div>
<div className="text-sm font-medium">Магазин косметики</div>
</div>
<p className="text-zinc-500 text-sm mb-6 flex-grow">
                            Продажи шли через ручные переписки. Внедрили каталог товаров и оплату прямо в боте.
                        </p>
<div className="pt-4 border-t border-zinc-100">
<span className="block text-2xl font-bold text-emerald-600 tracking-tight">+₽300,000</span>
<span className="text-xs text-zinc-400 font-medium uppercase tracking-wide">К обороту за месяц</span>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<i className="w-4 h-4" data-lucide="briefcase"></i>
</div>
<div className="text-sm font-medium">Юрист (Частная практика)</div>
</div>
<p className="text-zinc-500 text-sm mb-6 flex-grow">
                            Бот фильтрует обращения, отвечает на базовые вопросы и записывает только целевых клиентов.
                        </p>
<div className="pt-4 border-t border-zinc-100">
<span className="block text-2xl font-bold text-emerald-600 tracking-tight">2 часа/день</span>
<span className="text-xs text-zinc-400 font-medium uppercase tracking-wide">Экономия времени</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<h2 className="text-2xl md:text-3xl font-semibold text-center text-zinc-900 tracking-tight mb-16">
                    Тарифы под разные задачи
                </h2>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="border border-zinc-200 rounded-2xl p-8">
<h3 className="text-lg font-medium text-zinc-900">Старт</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-bold text-zinc-900 tracking-tight">₽12,000</span>
</div>
<p className="text-sm text-zinc-500 mt-2">Для салонов и простых услуг</p>
<ul className="mt-8 space-y-4 text-sm text-zinc-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-sky-600" data-lucide="check"></i> Скрипт записи/заявок</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-sky-600" data-lucide="check"></i> Уведомления админу</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-sky-600" data-lucide="check"></i> 1 месяц поддержки</li>
</ul>
<a className="block w-full mt-8 py-2.5 text-center text-sm font-medium text-zinc-700 border border-zinc-200 rounded-full hover:bg-zinc-50 hover:border-zinc-300 transition-all" href="#contact-section" onclick="selectTariff('Старт')">Выбрать тариф</a>
</div>

<div className="border border-sky-200 bg-sky-50/30 rounded-2xl p-8 relative shadow-lg shadow-sky-100/50 ring-1 ring-sky-500/20">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-sky-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">Рекомендуем</div>
<h3 className="text-lg font-medium text-zinc-900">Продажи</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-bold text-zinc-900 tracking-tight">₽25,000</span>
</div>
<p className="text-sm text-zinc-500 mt-2">Для магазинов и инфобизнеса</p>
<ul className="mt-8 space-y-4 text-sm text-zinc-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-sky-600" data-lucide="check"></i> Всё из тарифа «Старт»</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-sky-600" data-lucide="check"></i> Каталог товаров/услуг</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-sky-600" data-lucide="check"></i> Оплата внутри бота</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-sky-600" data-lucide="check"></i> Выгрузка в Google Sheets</li>
</ul>
<a className="block w-full mt-8 py-2.5 text-center text-sm font-medium text-white bg-sky-600 rounded-full hover:bg-sky-500 transition-all shadow-md shadow-sky-200" href="#contact-section" onclick="selectTariff('Продажи')">Выбрать тариф</a>
</div>

<div className="border border-zinc-200 rounded-2xl p-8">
<h3 className="text-lg font-medium text-zinc-900">Про</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-bold text-zinc-900 tracking-tight">от ₽50,000</span>
</div>
<p className="text-sm text-zinc-500 mt-2">Для сложных процессов</p>
<ul className="mt-8 space-y-4 text-sm text-zinc-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-sky-600" data-lucide="check"></i> Всё из тарифа «Продажи»</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-sky-600" data-lucide="check"></i> Интеграция с CRM</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-sky-600" data-lucide="check"></i> AI-ответы (ChatGPT)</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-sky-600" data-lucide="check"></i> Сложная логика</li>
</ul>
<a className="block w-full mt-8 py-2.5 text-center text-sm font-medium text-zinc-700 border border-zinc-200 rounded-full hover:bg-zinc-50 hover:border-zinc-300 transition-all" href="#contact-section" onclick="selectTariff('Про')">Обсудить проект</a>
</div>
</div>
<div className="mt-8 text-center text-sm text-zinc-500">
                    Техническая поддержка, правки и доработки после запуска — <span className="font-medium text-zinc-700">от ₽3,000/мес</span>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 border-y border-zinc-200">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<h2 className="text-2xl md:text-3xl font-semibold text-center text-zinc-900 tracking-tight mb-12">
                    Частые вопросы
                </h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-zinc-200 overflow-hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-zinc-900 hover:bg-zinc-50 transition-colors">
                            Сколько реально времени занимает запуск?
                            <i className="w-4 h-4 text-zinc-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-600 leading-relaxed">
                            Обычно 2–4 часа после согласования сценария. В простой нише (например, запись на маникюр) можем запустить в тот же день, когда вы оставили заявку.
                        </div>
</details>
<details className="group bg-white rounded-xl border border-zinc-200 overflow-hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-zinc-900 hover:bg-zinc-50 transition-colors">
                            Мне нужны технические навыки?
                            <i className="w-4 h-4 text-zinc-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-600 leading-relaxed">
                            Нет, работать с ботом так же просто, как переписываться в Telegram. Мы проводим короткое обучение при передаче бота.
                        </div>
</details>
<details className="group bg-white rounded-xl border border-zinc-200 overflow-hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-zinc-900 hover:bg-zinc-50 transition-colors">
                            Как оплачивать?
                            <i className="w-4 h-4 text-zinc-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 text-sm text-zinc-600 leading-relaxed">
                            Работаем официально. Безналичный расчет или оплата картой через платежный агрегатор. При необходимости заключаем договор.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="contact-section">
<div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight mb-6">
                    Готовы перестать терять клиентов?
                </h2>
<p className="text-zinc-500 mb-10 max-w-lg mx-auto">
                    Оставьте заявку. Вы будете перенаправлены в Telegram для подтверждения.
                </p>
<form className="max-w-sm mx-auto flex flex-col gap-4 mb-8" id="telegram-form" onsubmit="submitForm(event)">
<div>
<label className="sr-only" htmlFor="name">Имя</label>
<input className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" id="name" placeholder="Ваше имя" required="" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="contact-info">Телефон или Telegram</label>
<input className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all" id="contact-info" placeholder="@username или телефон" required="" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="niche">Ниша</label>
<select className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-sm text-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all bg-white" id="niche" required="">
<option disabled="" selected="" value="">Тип бизнеса / Тариф</option>
<option value="Салон красоты">Салон красоты / Бьюти</option>
<option value="Магазин">Магазин / Товары</option>
<option value="Услуги">Услуги / Агентство</option>
<option value="Консультации">Консультации / Эксперт</option>
<option value="Тариф Старт">Тариф: Старт</option>
<option value="Тариф Продажи">Тариф: Продажи</option>
<option value="Тариф Про">Тариф: Про</option>
<option value="Другое">Другое</option>
</select>
</div>
<button className="w-full py-3.5 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-500 transition-all shadow-lg shadow-sky-200 flex items-center justify-center gap-2" id="submit-btn" type="submit">
                        Забронировать консультацию
                    </button>
<p className="text-sm hidden" id="form-status"></p>
</form>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-500">
<a className="hover:text-sky-600 transition-colors flex items-center gap-2" href="https://t.me/Karpenko_YA" target="_blank">
<i className="w-4 h-4" data-lucide="send"></i> Написать напрямую
                    </a>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-50/50 rounded-full blur-3xl -z-10"></div>
</section>
</main>
<footer className="py-8 bg-zinc-50 border-t border-zinc-200 text-center text-xs text-zinc-400">
<div className="max-w-6xl mx-auto px-4">
<p className="mb-2">TG.BOT © 2023</p>
<p className="text-zinc-500 font-medium">+7 (901) 464-24-30</p>
</div>
</footer>


    </>
  );
}
