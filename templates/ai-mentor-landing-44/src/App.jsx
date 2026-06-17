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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Chat Logic ---
        const chatWindow = document.getElementById('chat-window');
        const chatForm = document.getElementById('chat-form');
        const chatInput = document.getElementById('chat-input');
        const btnStudent = document.getElementById('mode-student');
        const btnProducer = document.getElementById('mode-producer');

        let currentMode = 'student';

        const defaultMessages = {
            student: [
                { role: 'user', text: 'Как пробить финансовый потолок, если работаю по 12 часов?' },
                { role: 'ai', text: '<p class="mb-2">Привет! Помнишь, в 3-м модуле мы разбирали делегирование? Ты сейчас уперся именно в это.</p><p>Работать больше — не значит зарабатывать больше. Давай пересмотрим матрицу Эйзенхауэра. Скинь мне список задач на сегодня.</p>' }
            ],
            producer: [
                { role: 'user', text: 'Какие темы вызывают больше всего вопросов на этой неделе?' },
                { role: 'ai', text: '<p class="mb-2">Собрал аналитику за 7 дней. Топ сложностей:</p><ul class="list-disc pl-4 space-y-1 opacity-80 mt-2 mb-2"><li>Настройка таргета (145 вопросов)</li><li>Легализация доходов (89 вопросов)</li></ul><p class="mt-2 text-blue-600 font-medium cursor-pointer">Сгенерировать идею для поста по таргету?</p>' }
            ]
        };

        const renderMessage = (msg) => {
            const isUser = msg.role === 'user';
            const wrapper = document.createElement('div');
            wrapper.className = isUser ? 'flex items-end gap-3 justify-end animate-fade-in' : 'flex items-start gap-3 animate-fade-in';
            
            const avatar = isUser 
                ? `<div class="w-8 h-8 rounded-full bg-zinc-200 flex-shrink-0 flex items-center justify-center text-zinc-500"><iconify-icon icon="solar:user-linear" stroke-width="1.5"></iconify-icon></div>`
                : `<div class="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600"><span class="font-semibold text-xs tracking-tighter">TW</span></div>`;
                
            const bubbleStyle = isUser
                ? `bg-zinc-100 text-zinc-900 px-5 py-3 rounded-2xl rounded-br-sm text-sm max-w-[85%]`
                : `bg-blue-50 border border-blue-100 text-zinc-900 px-5 py-4 rounded-2xl rounded-bl-sm text-sm leading-relaxed max-w-[90%] shadow-sm`;

            wrapper.innerHTML = isUser 
                ? `<div class="${bubbleStyle}">${msg.text}</div>${avatar}` 
                : `${avatar}<div class="${bubbleStyle}">${msg.text}</div>`;
                
            return wrapper;
        };

        const getLoadingIndicator = () => {
            const wrapper = document.createElement('div');
            wrapper.id = 'typing-indicator';
            wrapper.className = 'flex items-start gap-3 animate-fade-in';
            wrapper.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600"><span class="font-semibold text-xs tracking-tighter">TW</span></div>
                <div class="bg-blue-50 border border-blue-100 px-5 py-4 rounded-2xl rounded-bl-sm flex gap-1 items-center h-[52px]">
                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full typing-dot"></div>
                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full typing-dot"></div>
                    <div class="w-1.5 h-1.5 bg-blue-400 rounded-full typing-dot"></div>
                </div>
            `;
            return wrapper;
        };

        const loadChat = (mode) => {
            chatWindow.innerHTML = '';
            defaultMessages[mode].forEach(msg => chatWindow.appendChild(renderMessage(msg)));
            chatWindow.scrollTop = chatWindow.scrollHeight;
        };

        const switchMode = (mode) => {
            currentMode = mode;
            if(mode === 'student') {
                btnStudent.className = 'px-5 py-2 rounded-full text-sm font-medium bg-white text-zinc-900 shadow-sm border border-zinc-200/50 transition-all';
                btnProducer.className = 'px-5 py-2 rounded-full text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-all';
            } else {
                btnProducer.className = 'px-5 py-2 rounded-full text-sm font-medium bg-white text-zinc-900 shadow-sm border border-zinc-200/50 transition-all';
                btnStudent.className = 'px-5 py-2 rounded-full text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-all';
            }
            loadChat(mode);
        };

        btnStudent.addEventListener('click', () => switchMode('student'));
        btnProducer.addEventListener('click', () => switchMode('producer'));

        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if(!text) return;

            chatWindow.appendChild(renderMessage({ role: 'user', text }));
            chatInput.value = '';
            chatWindow.scrollTop = chatWindow.scrollHeight;

            const typing = getLoadingIndicator();
            chatWindow.appendChild(typing);
            chatWindow.scrollTop = chatWindow.scrollHeight;

            setTimeout(() => {
                typing.remove();
                const aiResponse = currentMode === 'student' 
                    ? 'Отличный вопрос! База знаний говорит, что лучше начать с базовой настройки. Открой урок 4.2, там я даю пошаговый алгоритм на 5 минут.'
                    : 'Добавил этот инсайт в отчет. Сгенерировать план урока, чтобы закрыть этот пробел у студентов?';
                
                chatWindow.appendChild(renderMessage({ role: 'ai', text: aiResponse }));
                chatWindow.scrollTop = chatWindow.scrollHeight;
            }, 1500);
        });

        loadChat(currentMode);

        // --- Refined Slider Logic ---
        const slider = document.getElementById('compare-slider');
        const sliderAfter = document.getElementById('slider-after');
        const sliderHandle = document.getElementById('slider-handle');

        const updateSlider = () => {
            const val = slider.value;
            // The magic: clip-path masks the right side dynamically, revealing the beautiful AI dashboard
            sliderAfter.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
            sliderHandle.style.left = `${val}%`;
        };

        slider.addEventListener('input', () => requestAnimationFrame(updateSlider));
        updateSlider(); // Init

    
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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-semibold tracking-tighter text-xl text-zinc-900">
                TWIN.AI
            </div>
<div className="flex items-center gap-6">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Войти</a>
<a className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors" href="#">Попробовать</a>
</div>
</div>
</nav>

<section className="pt-32 pb-24 px-6 overflow-hidden">
<div className="max-w-5xl mx-auto text-center opacity-0 animate-fade-in">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight mb-8 text-zinc-900">
                Обучайте. Анализируйте. Создавайте.<br/>
<span className="text-zinc-400">Ваш ИИ-двойник — это личный ментор для каждого студента и гениальный продюсер для вас.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-3xl mx-auto mb-16 font-normal leading-relaxed">
                Загрузите свои видео и статьи за 15 минут. Нейросеть скопирует вашу манеру речи, чтобы консультировать учеников и генерировать идеальный контент вместе с вами.
            </p>

<div className="max-w-3xl mx-auto bg-white border border-zinc-200 shadow-2xl shadow-zinc-200/40 rounded-3xl overflow-hidden mb-12 text-left opacity-0 animate-fade-in delay-100 flex flex-col h-[550px]">

<div className="p-6 border-b border-zinc-100 bg-zinc-50/50 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="bg-zinc-100 p-1 rounded-full inline-flex items-center gap-1 border border-zinc-200/50">
<button className="px-5 py-2 rounded-full text-sm font-medium bg-white text-zinc-900 shadow-sm border border-zinc-200/50 transition-all" id="mode-student">
                            Студент (Обучение)
                        </button>
<button className="px-5 py-2 rounded-full text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-all" id="mode-producer">
                            Продюсер (Инсайты)
                        </button>
</div>
<div className="text-xs font-medium text-emerald-600 flex items-center gap-1 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        База знаний: Активна
                    </div>
</div>

<div className="flex-1 bg-white p-6 overflow-y-auto chat-scroll flex flex-col gap-6" id="chat-window">

</div>

<div className="p-4 bg-white border-t border-zinc-100">
<form className="flex items-center bg-zinc-50 border border-zinc-200 rounded-full p-1.5 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all max-w-2xl mx-auto" id="chat-form">
<div className="pl-4 text-zinc-400 flex items-center">
<iconify-icon className="text-lg" icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input autocomplete="off" className="flex-1 bg-transparent border-none focus:outline-none px-3 text-sm text-zinc-900 placeholder-zinc-400" id="chat-input" placeholder="Задайте вопрос..." type="text"/>
<button className="bg-blue-600 text-white w-10 h-10 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center flex-shrink-0" type="submit">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="opacity-0 animate-fade-in delay-200">
<a className="inline-flex items-center justify-center bg-zinc-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-zinc-800 transition-colors gap-2 shadow-lg shadow-zinc-900/20" href="#">
                    Создать двойника бесплатно
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50 border-y border-zinc-100 overflow-hidden">
<div className="max-w-5xl mx-auto px-6 text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Сложная аналитика простыми связями</h2>
<p className="text-sm md:text-base text-zinc-500">Ваши знания обучают двойника, а вопросы студентов формируют для вас инсайты.</p>
</div>
<div className="hidden md:block relative w-full max-w-4xl mx-auto aspect-[2/1] min-h-[400px]">
<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="xMidYMid meet" viewbox="0 0 1000 500">
<defs>
<lineargradient id="flow-grad-1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#e4e4e7"></stop>
<stop offset="100%" stop-color="#3b82f6"></stop>
</lineargradient>
<lineargradient id="flow-grad-2" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#3b82f6"></stop>
<stop offset="100%" stop-color="#a855f7"></stop>
</lineargradient>
<lineargradient id="flow-grad-feedback" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#a855f7"></stop>
<stop offset="100%" stop-color="#10b981"></stop>
</lineargradient>
</defs>
<g fill="none" stroke="#f4f4f5" strokeWidth="2">
<path d="M150,100 C300,100 350,250 500,250"></path>
<path d="M150,250 L500,250"></path>
<path d="M150,400 C300,400 350,250 500,250"></path>
<path d="M500,250 C650,250 700,150 850,150"></path>
<path d="M500,250 C650,250 700,350 850,350"></path>
<path d="M850,150 C750,200 750,300 850,350"></path>
</g>
<g className="animate-data-flow" fill="none" stroke-dasharray="6 12" strokeLinecap="round" strokeWidth="2.5">
<path d="M150,100 C300,100 350,250 500,250" stroke="url(#flow-grad-1)"></path>
<path d="M150,250 L500,250" stroke="url(#flow-grad-1)"></path>
<path d="M150,400 C300,400 350,250 500,250" stroke="url(#flow-grad-1)"></path>
<path d="M500,250 C650,250 700,150 850,150" stroke="url(#flow-grad-2)"></path>
<path d="M500,250 C650,250 700,350 850,350" stroke="url(#flow-grad-2)"></path>
</g>
<g className="animate-data-flow" fill="none" stroke-dasharray="4 8" strokeLinecap="round" strokeWidth="2">
<path d="M850,150 C750,200 750,300 850,350" stroke="url(#flow-grad-feedback)"></path>
</g>
<text className="tracking-tight" fill="#a1a1aa" fontSize="10" font-weight="500" text-anchor="middle" x="750" y="255">Поведение и вопросы</text>
</svg>

<div className="absolute left-[15%] top-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-500 shadow-sm relative z-10">
<iconify-icon className="text-2xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="mt-2 text-xs font-medium text-zinc-500 bg-white px-2 py-0.5 rounded-md border border-zinc-100">Notion</span>
</div>
<div className="absolute left-[15%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-500 shadow-sm relative z-10">
<iconify-icon className="text-2xl text-red-500" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="mt-2 text-xs font-medium text-zinc-500 bg-white px-2 py-0.5 rounded-md border border-zinc-100">YouTube</span>
</div>
<div className="absolute left-[15%] top-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-500 shadow-sm relative z-10">
<iconify-icon className="text-2xl" icon="solar:file-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="mt-2 text-xs font-medium text-zinc-500 bg-white px-2 py-0.5 rounded-md border border-zinc-100">PDF / DOCX</span>
</div>
<div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
<div className="relative">
<div className="absolute inset-0 rounded-2xl border-2 border-blue-400/50 animate-ping-slow"></div>
<div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(59,130,246,0.2)] relative z-10">
<iconify-icon className="text-3xl text-blue-400" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<span className="mt-3 text-sm font-medium text-zinc-900 bg-white px-3 py-1 rounded-full border border-zinc-200 shadow-sm">Нейро-Эксперт</span>
</div>
<div className="absolute left-[85%] top-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
<div className="w-12 h-12 bg-white border border-purple-200 rounded-xl flex items-center justify-center text-purple-600 shadow-sm relative z-10 shadow-purple-500/10">
<iconify-icon className="text-2xl" icon="solar:user-speak-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="mt-2 text-xs font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">Студентам</span>
</div>
<div className="absolute left-[85%] top-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
<div className="w-12 h-12 bg-white border border-emerald-200 rounded-xl flex items-center justify-center text-emerald-600 shadow-sm relative z-10 shadow-emerald-500/10">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="mt-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">Вам (Инсайты)</span>
</div>
</div>
<div className="md:hidden text-center text-sm text-zinc-500">
            [График потока данных доступен на ПК версии]
        </div>
</section>

<section className="py-32 px-6 bg-zinc-950 text-white overflow-hidden">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">Второй мозг для создателя</h2>
<p className="text-lg text-zinc-400">Пока двойник обучает, он собирает данные для вашего роста.</p>
</div>

<div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
<div className="flex-1 lg:pr-12">
<div className="w-12 h-12 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-blue-400 mb-6 group cursor-pointer hover:bg-zinc-800 transition-colors">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="solar:radar-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Радар аудитории</h3>
<p className="text-base text-zinc-400 leading-relaxed">
                        Аналитическая панель показывает, где студенты теряют мотивацию. Узнайте, на каком уроке возникает больше всего вопросов, чтобы улучшить продукт.
                    </p>
</div>
<div className="flex-1 w-full max-w-lg lg:max-w-none group cursor-pointer">
<div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-blue-900/20">
<div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-4">
<div className="text-sm font-medium text-zinc-300">Сложности по модулям</div>
<span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">Live Обновление</span>
</div>
<div className="flex items-end gap-3 h-40">
<div className="flex-1 bg-zinc-800 rounded-t-md relative hover:bg-zinc-700 transition-colors"><div className="absolute bottom-full w-full text-center text-xs text-zinc-500 mb-2">М1</div><div className="h-[30%] bg-zinc-600 rounded-t-md w-full transition-all duration-700 group-hover:h-[35%]"></div></div>
<div className="flex-1 bg-zinc-800 rounded-t-md relative hover:bg-zinc-700 transition-colors"><div className="absolute bottom-full w-full text-center text-xs text-zinc-500 mb-2">М2</div><div className="h-[45%] bg-zinc-600 rounded-t-md w-full transition-all duration-700 group-hover:h-[40%]"></div></div>
<div className="flex-1 bg-blue-900/30 rounded-t-md relative border border-blue-500/30"><div className="absolute bottom-full w-full text-center text-xs text-blue-400 mb-2 font-medium whitespace-nowrap -ml-4">М3 (Сложно)</div><div className="h-[85%] bg-blue-600 rounded-t-md w-full shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-700 group-hover:h-[95%]"></div></div>
<div className="flex-1 bg-zinc-800 rounded-t-md relative hover:bg-zinc-700 transition-colors"><div className="absolute bottom-full w-full text-center text-xs text-zinc-500 mb-2">М4</div><div className="h-[20%] bg-zinc-600 rounded-t-md w-full transition-all duration-700 group-hover:h-[25%]"></div></div>
</div>
</div>
</div>
</div>
<div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-32">
<div className="flex-1 lg:pl-12">
<div className="w-12 h-12 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-emerald-400 mb-6">
<iconify-icon className="text-2xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Генератор контента</h3>
<p className="text-base text-zinc-400 leading-relaxed">
                        Не знаете, о чем написать пост? Двойник анализирует самые частые вопросы студентов и генерирует черновики статей, постов или структуру новых курсов вместе с вами.
                    </p>
</div>
<div className="flex-1 w-full max-w-lg lg:max-w-none">
<div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-3 mb-6 relative z-10">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
<div className="text-sm font-medium text-emerald-400">Идея на основе 14 вопросов о налогах</div>
</div>
<div className="space-y-4 relative z-10">
<div className="text-sm text-zinc-300 font-medium">Тема: Как легально платить меньше, если вы фрилансер?</div>
<div className="text-xs text-zinc-500 leading-relaxed">Структура: 1. Выбор ИП или Самозанятость. 2. Лимиты по доходу на 2026 год. 3. Частая ошибка при работе с зарубежными клиентами...</div>
</div>
<div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end relative z-10">
<button className="text-xs font-medium bg-zinc-800 text-zinc-300 px-4 py-2 rounded-lg hover:bg-zinc-700 transition-colors" onclick="this.innerText='Скопировано!'; this.classList.add('bg-emerald-600', 'text-white'); setTimeout(()=&gt; {this.innerText='Копировать черновик'; this.classList.remove('bg-emerald-600', 'text-white')}, 2000)">
                                Копировать черновик
                            </button>
</div>
</div>
</div>
</div>
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1 lg:pr-12">
<div className="w-12 h-12 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-purple-400 mb-6">
<iconify-icon className="text-2xl" icon="solar:user-heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Проактивное удержание</h3>
<p className="text-base text-zinc-400 leading-relaxed">
                        Двойник замечает, если студент перестал учиться. Он сам напишет сообщение, предложит помощь или разбор сложной темы, возвращая мотивацию.
                    </p>
</div>
<div className="flex-1 w-full max-w-lg lg:max-w-none">
<div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl relative">
<div className="flex items-start gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex-shrink-0 flex items-center justify-center text-zinc-500 border border-zinc-700">
<iconify-icon className="text-lg" icon="solar:user-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<div className="text-sm font-medium text-zinc-200">Алексей С.</div>
<div className="text-xs text-zinc-500">Застрял на Модуле 3</div>
</div>
<button className="text-xs bg-purple-600 text-white px-3 py-1.5 rounded-full hover:bg-purple-700 transition-colors flex items-center font-medium border border-transparent" onclick="this.innerHTML='&lt;iconify-icon icon=\'solar:check-circle-linear\' class=\'mr-1\'&gt;&lt;/iconify-icon&gt; Отправлено'; this.classList.add('bg-purple-600/20', 'text-purple-400', 'border-purple-500/50'); this.classList.remove('bg-purple-600', 'text-white')">
                                        Отправить помощь
                                    </button>
</div>
</div>
</div>
<div className="bg-zinc-800 border border-zinc-700 text-zinc-300 px-5 py-4 rounded-2xl rounded-tl-sm text-sm">
<span className="text-purple-400 font-medium">Черновик ИИ:</span> "Алексей, привет! Вижу, сложно дается настройка рекламы. Давай я объясню это простым языком на примере кофейни? Жми 'Да', если готов."
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-zinc-50">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Масштаб без потери качества</h2>
<p className="text-lg text-zinc-500 max-w-2xl mx-auto">
                    ИИ-Двойник — это полноценная замена личному менторству, которая экономит ваши часы и позволяет обучать тысячи людей одновременно.
                </p>
</div>

<div className="max-w-5xl mx-auto mb-32 relative h-[450px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-zinc-200 bg-white group select-none">

<div className="absolute inset-0 flex flex-col p-8 md:p-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 text-rose-500 flex items-center justify-center shadow-sm">
<iconify-icon className="text-2xl" icon="solar:user-cross-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xl font-semibold tracking-tight text-zinc-900">Без Двойника</div>
<div className="text-sm font-medium text-zinc-500">Ручное ведение студентов</div>
</div>
</div>
<div className="md:text-right">
<div className="text-2xl font-semibold text-zinc-900">12 <span className="text-lg text-zinc-400 font-medium">/ 100</span></div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wider mt-1">Ответов в день</div>
</div>
</div>
<div className="flex-1 flex flex-col gap-4 max-w-2xl">

<div className="bg-zinc-50 border border-zinc-100 p-4 md:p-5 rounded-2xl flex items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex-shrink-0"></div>
<div>
<div className="text-sm font-semibold text-zinc-900">Алексей С.</div>
<div className="text-xs font-medium text-zinc-500 mt-0.5 truncate max-w-[200px] md:max-w-xs">Не понимаю, как работает цикл for...</div>
</div>
</div>
<div className="text-xs font-semibold text-rose-500 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-100 flex items-center gap-1.5 whitespace-nowrap">
<iconify-icon className="text-sm" icon="solar:clock-circle-linear"></iconify-icon> Ждет 4 часа
                            </div>
</div>

<div className="bg-zinc-50 border border-zinc-100 p-4 md:p-5 rounded-2xl flex items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex-shrink-0"></div>
<div>
<div className="text-sm font-semibold text-zinc-900">Мария В.</div>
<div className="text-xs font-medium text-zinc-500 mt-0.5 truncate max-w-[200px] md:max-w-xs">Проверьте домашнее задание, пожалуйста!</div>
</div>
</div>
<div className="text-xs font-semibold text-orange-500 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100 flex items-center gap-1.5 whitespace-nowrap">
<iconify-icon className="text-sm" icon="solar:clock-circle-linear"></iconify-icon> Ждет 1 день
                            </div>
</div>
<div className="flex-1 mt-2 border-2 border-dashed border-zinc-200 rounded-2xl flex items-center justify-center text-zinc-400 text-sm font-medium bg-zinc-50/50">
                            Предел пропускной способности достигнут
                        </div>
</div>
</div>

<div className="absolute inset-0 bg-zinc-950 z-10 pointer-events-none transition-transform" id="slider-after" style={{clipPath: 'inset(0 50% 0 0)'}}>
<div className="w-full h-full p-8 md:p-12 flex flex-col absolute inset-0 text-white min-w-full">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)]">
<iconify-icon className="text-2xl" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xl font-semibold tracking-tight text-white">С ИИ-Двойником</div>
<div className="text-sm font-medium text-zinc-400">Автоматизация и масштаб</div>
</div>
</div>
<div className="md:text-right">
<div className="text-2xl font-semibold text-white">1000+ <span className="text-lg text-emerald-400 font-medium">/ 100%</span></div>
<div className="text-xs text-zinc-400 font-medium uppercase tracking-wider mt-1">Ответов моментально</div>
</div>
</div>
<div className="flex-1 flex flex-col gap-4 max-w-2xl w-full">

<div className="bg-zinc-900 border border-zinc-800 p-4 md:p-5 rounded-2xl flex items-center justify-between gap-4 shadow-lg shadow-black/20">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-900/40 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
<iconify-icon className="text-lg" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-white">Алексей С.</div>
<div className="text-xs font-medium text-zinc-400 mt-0.5 truncate max-w-[200px] md:max-w-xs">Подробный разбор цикла for (Урок 3.2)</div>
</div>
</div>
<div className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-lg border border-emerald-400/20 flex items-center gap-1.5 whitespace-nowrap shadow-[0_0_10px_rgba(16,185,129,0.1)]">
<iconify-icon className="text-sm" icon="solar:bolt-linear"></iconify-icon> Решено за 1 сек
                                </div>
</div>

<div className="bg-zinc-900 border border-zinc-800 p-4 md:p-5 rounded-2xl flex items-center justify-between gap-4 shadow-lg shadow-black/20">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-900/40 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
<iconify-icon className="text-lg" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-white">Мария В.</div>
<div className="text-xs font-medium text-zinc-400 mt-0.5 truncate max-w-[200px] md:max-w-xs">Обратная связь по ДЗ отправлена</div>
</div>
</div>
<div className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-lg border border-emerald-400/20 flex items-center gap-1.5 whitespace-nowrap shadow-[0_0_10px_rgba(16,185,129,0.1)]">
<iconify-icon className="text-sm" icon="solar:bolt-linear"></iconify-icon> Решено за 1 сек
                                </div>
</div>
<div className="flex-1 mt-2 bg-gradient-to-r from-blue-900/20 to-emerald-900/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 text-sm font-medium gap-2 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-500/5 animate-pulse"></div>
<iconify-icon className="text-lg relative z-10" icon="solar:rocket-linear"></iconify-icon>
<span className="relative z-10">Система готова принять 10,000 новых учеников</span>
</div>
</div>
</div>
</div>

<input className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-ew-resize" id="compare-slider" max="100" min="0" type="range" value="50"/>

<div className="absolute top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)] left-[50%] -translate-x-1/2 pointer-events-none z-10" id="slider-handle">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full border border-zinc-200 shadow-xl flex items-center justify-center text-zinc-600 ring-4 ring-white/50">
<iconify-icon className="text-sm" icon="solar:round-alt-arrow-left-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:round-alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="relative group bg-white border border-zinc-200 rounded-[2rem] p-8 md:p-10 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:border-blue-200 flex flex-col h-full overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-colors duration-700 pointer-events-none"></div>
<div className="flex items-center justify-between mb-8 relative z-10">
<div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-900 border border-zinc-200 shadow-sm">
<iconify-icon className="text-3xl" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100 uppercase tracking-wider">Высокий чек</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 relative z-10">VIP-Тариф с ИИ-ментором</h3>
<p className="text-base text-zinc-500 leading-relaxed mb-8 relative z-10">
                        Сделайте двойника доступным только на премиум-тарифах. Студенты готовы платить больше за "ваше" внимание 24/7, а вы не тратите на это время. Идеальная замена штатным кураторам.
                    </p>

<div className="bg-zinc-50/80 border border-zinc-100 rounded-2xl p-6 mb-8 relative z-10 flex-1">
<div className="text-xs text-zinc-400 mb-4 font-semibold uppercase tracking-wider">Ценность для ученика</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-200"><span className="text-xs font-semibold">AI</span></div>
<div className="bg-white border border-zinc-200 text-zinc-700 text-sm font-medium px-5 py-4 rounded-2xl rounded-tl-none shadow-sm leading-relaxed relative">
                                Вижу, ты застрял на 3 уроке. Твоя целевая аудитория выбрана слишком широко. Давай сузим её до "молодых мам в декрете". Напиши "да", и я скину пример креатива.
                                <div className="absolute -right-2 -bottom-2 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-white shadow-sm"><iconify-icon className="text-[10px]" icon="solar:check-read-linear"></iconify-icon></div>
</div>
</div>
</div>
<ul className="space-y-3 relative z-10">
<li className="flex items-center gap-3 text-sm font-medium text-zinc-700">
<iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> 100% чистая маржа (нет ЗП кураторам)
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-zinc-700">
<iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Обоснование цены курса в x2-x3 раза
                        </li>
</ul>
</div>

<div className="relative group bg-white border border-zinc-200 rounded-[2rem] p-8 md:p-10 hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500 hover:border-purple-200 flex flex-col h-full overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] group-hover:bg-purple-500/10 transition-colors duration-700 pointer-events-none"></div>
<div className="flex items-center justify-between mb-8 relative z-10">
<div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 border border-purple-100 shadow-sm">
<iconify-icon className="text-3xl" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="bg-purple-50 text-purple-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-purple-100 uppercase tracking-wider">Рекуррент</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 relative z-10">Платный клуб в Telegram</h3>
<p className="text-base text-zinc-500 leading-relaxed mb-8 relative z-10">
                        Закрытый чат, где двойник отвечает на вопросы сообщества на основе ваших курсов. Пассивный рекуррентный доход, требующий 0 часов вашего участия после настройки.
                    </p>

<div className="bg-zinc-50/80 border border-zinc-100 rounded-2xl p-6 mb-8 relative z-10 flex-1">
<div className="text-xs text-zinc-400 mb-4 font-semibold uppercase tracking-wider">Telegram Уведомление</div>
<div className="flex items-center gap-4 bg-white p-4 border border-zinc-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-default">
<div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 shadow-inner">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-0.5">
<div className="text-sm font-semibold text-zinc-900">Приватный Клуб</div>
<div className="text-[10px] font-medium text-zinc-400">Только что</div>
</div>
<div className="text-xs font-medium text-zinc-500 line-clamp-2 leading-relaxed">🤖 ИИ-Ментор ответил на 15 новых вопросов участников по модулю налогов...</div>
</div>
</div>
</div>
<ul className="space-y-3 relative z-10">
<li className="flex items-center gap-3 text-sm font-medium text-zinc-700">
<iconify-icon className="text-purple-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Автоматическая модерация базы знаний
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-zinc-700">
<iconify-icon className="text-purple-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Постоянная ценность для LTV подписчиков
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-200 bg-white overflow-hidden flex flex-col">
<div className="text-center mb-16 px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Что говорят эксперты</h2>
</div>

<div className="relative w-full flex overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
<div className="flex animate-marquee hover:pause gap-8 px-8">

<div className="flex gap-8 shrink-0 items-stretch">

<div className="w-[350px] md:w-[420px] border border-zinc-200 rounded-3xl p-8 bg-zinc-50 flex flex-col justify-between hover:shadow-lg transition-shadow bg-white">
<div>
<iconify-icon className="text-4xl text-zinc-200 mb-4" icon="solar:quote-right-bold-duotone"></iconify-icon>
<p className="text-base md:text-lg text-zinc-700 mb-8 leading-relaxed font-medium">"Мой двойник закрыл 4,500 вопросов за месяц. NPS учеников вырос на 40%, а бот сам написал структуру интенсива."</p>
</div>
<div className="flex items-center gap-4 border-t border-zinc-100 pt-6">
<div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">МД</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Михаил Дашков</div>
<div className="text-xs text-zinc-500 mt-0.5">EdTech, 10k+ студентов</div>
</div>
</div>
</div>

<div className="w-[350px] md:w-[420px] border border-zinc-200 rounded-3xl p-8 bg-zinc-50 flex flex-col justify-between hover:shadow-lg transition-shadow bg-white">
<div>
<iconify-icon className="text-4xl text-zinc-200 mb-4" icon="solar:quote-right-bold-duotone"></iconify-icon>
<p className="text-base md:text-lg text-zinc-700 mb-8 leading-relaxed font-medium">"Уволила трех кураторов. ИИ отвечает точнее, ссылается на таймкоды моих видео и не устает. Чистая магия."</p>
</div>
<div className="flex items-center gap-4 border-t border-zinc-100 pt-6">
<div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm">АВ</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Анна Волкова</div>
<div className="text-xs text-zinc-500 mt-0.5">Курсы по маркетингу</div>
</div>
</div>
</div>

<div className="w-[350px] md:w-[420px] border border-zinc-200 rounded-3xl p-8 bg-zinc-50 flex flex-col justify-between hover:shadow-lg transition-shadow bg-white">
<div>
<iconify-icon className="text-4xl text-zinc-200 mb-4" icon="solar:quote-right-bold-duotone"></iconify-icon>
<p className="text-base md:text-lg text-zinc-700 mb-8 leading-relaxed font-medium">"Раньше я тратил 3 часа в день на разбор домашек. Теперь я просто читаю еженедельный отчет от своего двойника."</p>
</div>
<div className="flex items-center gap-4 border-t border-zinc-100 pt-6">
<div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm">ИП</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Илья Попов</div>
<div className="text-xs text-zinc-500 mt-0.5">Крипто-ментор</div>
</div>
</div>
</div>
</div>

<div className="flex gap-8 shrink-0 items-stretch">

<div className="w-[350px] md:w-[420px] border border-zinc-200 rounded-3xl p-8 bg-zinc-50 flex flex-col justify-between hover:shadow-lg transition-shadow bg-white">
<div>
<iconify-icon className="text-4xl text-zinc-200 mb-4" icon="solar:quote-right-bold-duotone"></iconify-icon>
<p className="text-base md:text-lg text-zinc-700 mb-8 leading-relaxed font-medium">"Мой двойник закрыл 4,500 вопросов за месяц. NPS учеников вырос на 40%, а бот сам написал структуру интенсива."</p>
</div>
<div className="flex items-center gap-4 border-t border-zinc-100 pt-6">
<div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">МД</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Михаил Дашков</div>
<div className="text-xs text-zinc-500 mt-0.5">EdTech, 10k+ студентов</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-zinc-950 text-center relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-3xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-white">
                Ваша аудитория ждет личного общения.
            </h2>
<p className="text-xl text-zinc-400 mb-10 font-normal">
                Дайте им это масштабируемо. Настройка займет 15 минут.
            </p>
<a className="inline-flex items-center justify-center bg-white text-zinc-950 px-10 py-5 rounded-full text-lg font-medium hover:bg-zinc-100 transition-colors shadow-xl shadow-white/10" href="#">
                Создать своего ИИ-Двойника
            </a>
</div>
</section>

<footer className="py-12 px-6 border-t border-zinc-200 bg-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="font-semibold tracking-tighter text-lg text-zinc-900">
                TWIN.AI
            </div>
<div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-500 font-medium">
<a className="hover:text-zinc-900 transition-colors" href="#">Интеграция с Telegram</a>
<span className="text-zinc-400 cursor-not-allowed">API Документация (coming soon)</span>
<a className="hover:text-zinc-900 transition-colors" href="#">GetCourse Webhooks</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Конфиденциальность</a>
</div>
<div className="text-sm text-zinc-400">
                © 2026. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
