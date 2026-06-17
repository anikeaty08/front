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



        // Hero Animation Sequence Logic
        const heroChatContainer = document.getElementById('hero-chat-container');
        
        const sequences = [
            {
                type: 'booking',
                msgs: [
                    { side: 'right', text: 'Привет, есть место на вторник?', delay: 500 },
                    { side: 'left', text: 'Привет! Да, есть слоты: 14:00 и 16:30.', delay: 1500 },
                    { side: 'right', text: 'Давай на 16:30.', delay: 3000 },
                    { side: 'left', text: 'Записал! Вторник, 16:30. Жду 💪', delay: 4500 }
                ]
            },
            {
                type: 'consult',
                msgs: [
                    { side: 'right', text: 'Болит колено после приседа. Что делать?', delay: 500 },
                    { side: 'left', text: 'AI: Снизь нагрузку. Вероятно, ошибка в технике. Пришли видео, я гляну. Пока используй мазь...', delay: 2000 }
                ]
            }
        ];

        let currentSequenceIndex = 0;

        function createBubble(text, side) {
            const div = document.createElement('div');
            const alignClass = side === 'left' ? 'self-start' : 'self-end';
            const bgClass = side === 'left' ? 'bg-[#1E1E1E] border border-white/10 text-white rounded-tl-sm' : 'bg-[#34B7F1] text-white rounded-tr-sm';
            
            div.className = `${alignClass} ${bgClass} p-3 rounded-2xl max-w-[85%] text-sm chat-bubble-anim shadow-sm`;
            div.innerHTML = text;
            return div;
        }

        async function playSequence() {
            heroChatContainer.innerHTML = '';
            const seq = sequences[currentSequenceIndex];
            
            for (const msg of seq.msgs) {
                await new Promise(r => setTimeout(r, msg.delay));
                heroChatContainer.appendChild(createBubble(msg.text, msg.side));
                heroChatContainer.scrollTop = heroChatContainer.scrollHeight;
            }

            // Wait before clearing and starting next
            await new Promise(r => setTimeout(r, 3000));
            currentSequenceIndex = (currentSequenceIndex + 1) % sequences.length;
            playSequence();
        }

        // Start Hero Animation
        window.addEventListener('load', playSequence);


        // Demo Logic
        function triggerDemo(action) {
            const chatArea = document.getElementById('demo-chat-area');
            const controls = document.getElementById('demo-controls');
            
            // Add User Message
            const userText = action === 'slots' ? 'Посмотреть свободные слоты' : 'Вопрос по питанию';
            const userBubble = document.createElement('div');
            userBubble.className = 'flex justify-end animate-fade-up';
            userBubble.innerHTML = `<div class="bg-[#34B7F1] text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] text-sm">${userText}</div>`;
            chatArea.appendChild(userBubble);
            
            // Hide controls temporarily
            controls.style.display = 'none';

            // Simulate Bot Typing
            setTimeout(() => {
                const botBubble = document.createElement('div');
                botBubble.className = 'flex justify-start animate-fade-up';
                
                let botText = '';
                if(action === 'slots') {
                    botText = '🗓 <b>Свободные окна на эту неделю:</b><br><br>• Четверг: 10:00, 14:00<br>• Пятница: 18:00, 19:00<br><br>На какое время записать?';
                } else {
                    botText = '<div class="flex items-center gap-1 text-[#00FF7F] mb-1 font-bold text-xs"><iconify-icon icon="solar:stars-minimalistic-bold"></iconify-icon> AI Совет</div>Опиши свой вопрос подробнее. Я могу рассчитать КБЖУ или подсказать замену продуктам.';
                }

                botBubble.innerHTML = `<div class="bg-[#1E1E1E] text-white p-3 rounded-2xl rounded-tl-none border border-white/10 max-w-[85%] text-sm leading-relaxed">${botText}</div>`;
                chatArea.appendChild(botBubble);
                chatArea.scrollTop = chatArea.scrollHeight;

                // Bring back controls for demo purposes
                setTimeout(() => {
                   controls.style.display = 'flex';
                   chatArea.appendChild(controls); // Move controls to bottom
                   chatArea.scrollTop = chatArea.scrollHeight;
                }, 1000);

            }, 600);
        }
    
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
      

<header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-[#121212]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-[#00FF7F] flex items-center justify-center text-[#121212]">
<iconify-icon icon="solar:dumbbells-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-lg text-white group-hover:text-[#00FF7F] transition-colors">FitFormAdmin</span>
</div>
<a className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-sm font-medium hover:bg-[#00FF7F] hover:border-[#00FF7F] hover:text-[#121212] transition-all duration-300" href="#create">
                Создать своего клона
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</header>
<main>

<section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">

<div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#00FF7F]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col gap-8 max-w-2xl animate-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
<span className="w-2 h-2 rounded-full bg-[#00FF7F] animate-pulse"></span>
<span className="text-xs font-medium tracking-wide text-gray-300 uppercase">AI-Assistant 2.0</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
                        Пока ты <span className="text-[#00FF7F]">тренируешь</span>, твой клон <span className="text-white/40">работает.</span>
</h1>
<p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                        FitFormAdmin — это твоя цифровая копия в Telegram. Он записывает клиентов, отвечает на вопросы 24/7 и управляет рутиной, освобождая тебя для главного — тренировок.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="px-8 py-4 bg-[#00FF7F] text-[#121212] rounded-xl font-semibold hover:bg-[#00e676] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_-10px_rgba(0,255,127,0.5)]">
                            Создать своего клона бесплатно
                        </button>
</div>
<div className="flex items-center gap-4 text-sm text-gray-500 pt-2">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#121212]"></div>
<div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-[#121212]"></div>
<div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-[#121212]"></div>
</div>
<p>Уже используют 500+ тренеров</p>
</div>
</div>

<div className="relative lg:h-[800px] flex items-center justify-center lg:justify-end animate-fade-up delay-300">
<div className="relative w-[340px] h-[700px] bg-[#1E1E1E] rounded-[3rem] border-8 border-[#2c2c2c] shadow-2xl overflow-hidden animate-float">

<div className="bg-[#1E1E1E] p-4 flex items-center gap-3 border-b border-white/5 z-10 relative">
<div className="w-8 h-8 rounded-full bg-[#00FF7F] flex items-center justify-center text-[#121212]">
<iconify-icon icon="solar:bot-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold">Твой Клон</h3>
<p className="text-[10px] text-[#00FF7F]">online</p>
</div>
</div>

<div className="p-4 space-y-4 h-full bg-[#121212] relative" id="hero-chat-container">

</div>

<div className="absolute bottom-0 w-full bg-[#1E1E1E] p-4 border-t border-white/5">
<div className="h-10 bg-[#121212] rounded-full flex items-center px-4 text-gray-600 text-xs">
                                Сообщение...
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Знакомо? <span className="text-gray-500">Твой день не должен так выглядеть.</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel p-6 rounded-2xl border-l-2 border-l-red-500/50 hover:bg-white/5 transition-all">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-red-400" icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
<span className="text-xs font-mono text-gray-500">23:45</span>
</div>
<h3 className="text-lg font-medium mb-2">47 сообщений</h3>
<p className="text-sm text-gray-400">Неотвеченные вопросы в Telegram, WhatsApp и Instagram.</p>
</div>

<div className="glass-panel p-6 rounded-2xl border-l-2 border-l-orange-500/50 hover:bg-white/5 transition-all md:translate-y-8">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-orange-400" icon="solar:calendar-date-linear" width="28"></iconify-icon>
<span className="text-xs font-mono text-gray-500">Сейчас</span>
</div>
<h3 className="text-lg font-medium mb-2">12 переносов</h3>
<p className="text-sm text-gray-400">Хаос в расписании, попытки найти свободное окно.</p>
</div>

<div className="glass-panel p-6 rounded-2xl border-l-2 border-l-yellow-500/50 hover:bg-white/5 transition-all">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-yellow-400" icon="solar:wallet-linear" width="28"></iconify-icon>
<span className="text-xs font-mono text-gray-500">Вчера</span>
</div>
<h3 className="text-lg font-medium mb-2">Где оплата?</h3>
<p className="text-sm text-gray-400">3 клиента забыли оплатить, нужно снова напоминать.</p>
</div>

<div className="glass-panel p-6 rounded-2xl border-l-2 border-l-purple-500/50 hover:bg-white/5 transition-all md:translate-y-8">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-purple-400" icon="solar:pizza-linear" width="28"></iconify-icon>
<span className="text-xs font-mono text-gray-500">02:15</span>
</div>
<h3 className="text-lg font-medium mb-2">Вопрос по еде</h3>
<p className="text-sm text-gray-400">"А можно съесть этот бургер?" посреди ночи.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#121212] relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E1E1E]/20 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-20">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-center">Три суперсилы <span className="text-[#00FF7F]">твоего клона</span></h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="group relative">
<div className="mb-8">
<div className="w-12 h-12 rounded-xl bg-[#00FF7F]/10 flex items-center justify-center text-[#00FF7F] mb-6">
<iconify-icon icon="solar:calendar-add-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3">Автоматическая запись</h3>
<p className="text-gray-400 leading-relaxed">Клиенты записываются сами. В любое время. Бот синхронизируется с твоим календарем.</p>
</div>

<div className="bg-[#1E1E1E] rounded-2xl p-4 border border-white/5 shadow-lg min-h-[300px] flex flex-col gap-3">
<div className="self-end bg-[#34B7F1] text-white text-sm p-3 rounded-2xl rounded-tr-sm max-w-[85%]">
                                Хочу записаться на среду.
                            </div>
<div className="self-start bg-[#1E1E1E] border border-white/10 text-white text-sm p-3 rounded-2xl rounded-tl-sm max-w-[90%]">
<p className="mb-2 text-[#00FF7F]">Свободные слоты на среду:</p>
<div className="flex flex-wrap gap-2">
<span className="bg-[#00FF7F]/20 text-[#00FF7F] text-xs px-2 py-1 rounded">10:00</span>
<span className="bg-[#00FF7F]/20 text-[#00FF7F] text-xs px-2 py-1 rounded">14:30</span>
<span className="bg-[#00FF7F]/20 text-[#00FF7F] text-xs px-2 py-1 rounded">18:00</span>
</div>
</div>
<div className="self-end bg-[#34B7F1] text-white text-sm p-3 rounded-2xl rounded-tr-sm max-w-[85%] mt-2">
                                Давай на 18:00
                            </div>
<div className="self-start bg-[#1E1E1E] border border-white/10 text-white text-sm p-3 rounded-2xl rounded-tl-sm max-w-[90%]">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#00FF7F]" icon="solar:check-circle-bold"></iconify-icon>
                                    Записал! Среда, 18:00.
                                </div>
</div>
</div>
</div>

<div className="group relative lg:mt-16">
<div className="mb-8">
<div className="w-12 h-12 rounded-xl bg-[#00FF7F]/10 flex items-center justify-center text-[#00FF7F] mb-6">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3">AI-Консультант 24/7</h3>
<p className="text-gray-400 leading-relaxed">Отвечает на вопросы, пока ты спишь. Экспертные ответы о питании, технике и режиме.</p>
</div>

<div className="bg-[#1E1E1E] rounded-2xl p-4 border border-white/5 shadow-lg min-h-[300px] flex flex-col gap-3">
<div className="self-end bg-[#34B7F1] text-white text-sm p-3 rounded-2xl rounded-tr-sm max-w-[85%]">
                                Что лучше съесть после тренировки для восстановления?
                            </div>
<div className="self-start bg-[#1E1E1E] border border-white/10 text-white text-sm p-3 rounded-2xl rounded-tl-sm max-w-[95%] relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#00FF7F]"></div>
<div className="flex items-center gap-2 mb-2 text-[#00FF7F] text-xs font-semibold uppercase tracking-wider">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon> AI Ответ
                                </div>
<p className="text-gray-300 leading-snug">Для восстановления идеально подойдет белково-углеводное окно. <br/><br/>Рекомендую: 25-30г белка (курица, рыба или протеин) + сложные углеводы (гречка, рис).</p>
</div>
</div>
</div>

<div className="group relative">
<div className="mb-8">
<div className="w-12 h-12 rounded-xl bg-[#00FF7F]/10 flex items-center justify-center text-[#00FF7F] mb-6">
<iconify-icon icon="solar:card-send-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3">Умные Напоминания</h3>
<p className="text-gray-400 leading-relaxed">Больше никаких неловких «ну что там с оплатой?». Бот сам напомнит и примет чек.</p>
</div>

<div className="bg-[#1E1E1E] rounded-2xl p-4 border border-white/5 shadow-lg min-h-[300px] flex flex-col gap-3">
<div className="self-start bg-[#1E1E1E] border border-white/10 text-white text-sm p-3 rounded-2xl rounded-tl-sm max-w-[90%]">
                                Привет! Завтра заканчивается абонемент. Продлеваем? 💪
                                <div className="mt-3 bg-[#00FF7F] text-[#121212] text-center py-2 rounded font-medium cursor-pointer text-xs">Оплатить онлайн</div>
</div>
<div className="self-end bg-[#34B7F1] text-white text-sm p-3 rounded-2xl rounded-tr-sm max-w-[85%] mt-2">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:file-check-linear"></iconify-icon>
                                    Чек отправлен
                                </div>
</div>
<div className="self-start bg-[#1E1E1E] border border-white/10 text-white text-sm p-3 rounded-2xl rounded-tl-sm max-w-[90%]">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#00FF7F]" icon="solar:verified-check-bold"></iconify-icon>
                                    Оплата получена! +12 тренировок.
                                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0e0e0e]">
<div className="max-w-4xl mx-auto px-6 text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Почувствуй, как это работает. <span className="text-[#00FF7F]">Прямо здесь.</span></h2>
</div>
<div className="max-w-lg mx-auto px-4">
<div className="bg-[#1E1E1E] rounded-3xl shadow-2xl overflow-hidden border border-white/10 h-[600px] flex flex-col relative">

<div className="bg-[#252525] p-4 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#00FF7F] flex items-center justify-center text-[#121212]">
<iconify-icon icon="solar:bot-bold" width="24"></iconify-icon>
</div>
<div className="text-left">
<div className="font-semibold text-white">FitForm Bot</div>
<div className="text-xs text-[#00FF7F]">bot</div>
</div>
</div>
<iconify-icon className="text-gray-400" icon="solar:menu-dots-linear" width="24"></iconify-icon>
</div>

<div className="flex-1 p-5 overflow-y-auto space-y-4 bg-[#121212]" id="demo-chat-area">

<div className="flex justify-start animate-fade-up">
<div className="bg-[#1E1E1E] text-white p-3 rounded-2xl rounded-tl-none border border-white/10 max-w-[85%] text-sm">
                                Привет! Я твой цифровой помощник. Что хочешь сделать?
                            </div>
</div>

<div className="flex flex-wrap gap-2 animate-fade-up delay-300" id="demo-controls">
<button className="bg-[#2a2a2a] hover:bg-[#333] border border-[#00FF7F]/30 text-[#00FF7F] text-xs px-4 py-2 rounded-xl transition-all" onclick="triggerDemo('slots')">
                                Посмотреть слоты
                            </button>
<button className="bg-[#2a2a2a] hover:bg-[#333] border border-[#00FF7F]/30 text-[#00FF7F] text-xs px-4 py-2 rounded-xl transition-all" onclick="triggerDemo('diet')">
                                Вопрос по питанию
                            </button>
</div>
</div>

<div className="p-3 bg-[#1E1E1E] border-t border-white/5">
<div className="h-10 bg-[#121212] rounded-xl flex items-center px-4 justify-between">
<span className="text-gray-600 text-sm">Сообщение...</span>
<iconify-icon className="text-gray-500" icon="solar:microphone-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-20">
<div>
<div className="text-5xl lg:text-6xl font-semibold text-white mb-2 tracking-tight">90%</div>
<div className="text-gray-400 text-sm uppercase tracking-wider">рутины автоматизировано</div>
</div>
<div>
<div className="text-5xl lg:text-6xl font-semibold text-[#00FF7F] mb-2 tracking-tight">+8ч</div>
<div className="text-gray-400 text-sm uppercase tracking-wider">свободного времени в неделю</div>
</div>
<div>
<div className="text-5xl lg:text-6xl font-semibold text-white mb-2 tracking-tight">20%</div>
<div className="text-gray-400 text-sm uppercase tracking-wider">рост дохода в среднем</div>
</div>
</div>
<div className="glass-panel p-8 md:p-12 rounded-3xl max-w-4xl mx-auto text-center relative overflow-hidden">
<iconify-icon className="absolute top-8 left-8 text-[#00FF7F]/20" icon="solar:quote-up-square-linear" width="80"></iconify-icon>
<p className="text-2xl md:text-3xl font-medium leading-normal relative z-10">
                        "Это действительно мой клон. Я больше не трачу время на переписки в WhatsApp, не путаюсь в записях. Я просто тренирую и живу."
                    </p>
<div className="mt-8 flex items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-700"></div>
<div className="text-left">
<div className="text-white font-semibold text-sm">Павел С.</div>
<div className="text-[#00FF7F] text-xs">Фитнес-тренер, Москва</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#121212] relative overflow-hidden text-center" id="create">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FF7F]/10 via-[#121212] to-[#121212]"></div>
<div className="relative z-10 max-w-2xl mx-auto px-6">
<h2 className="text-4xl lg:text-6xl font-semibold tracking-tight mb-6">Готов делегировать рутину?</h2>
<p className="text-lg text-gray-400 mb-10">Создай своего цифрового клона за 5 минут. Это бесплатно и не требует навыков программирования.</p>
<button className="w-full sm:w-auto px-10 py-5 bg-[#00FF7F] text-[#121212] text-lg rounded-xl font-semibold hover:bg-[#00e676] transition-all transform hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(0,255,127,0.6)]">
                    Начать бесплатно
                </button>
<p className="mt-4 text-xs text-gray-500">Credit card not required</p>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-12 bg-[#0e0e0e]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-[#00FF7F] flex items-center justify-center text-[#121212]">
<iconify-icon icon="solar:dumbbells-bold" width="14"></iconify-icon>
</div>
<span className="font-semibold text-white tracking-tight">FitFormAdmin</span>
</div>
<div className="flex gap-8 text-sm text-gray-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Use</a>
</div>
<div className="text-sm text-gray-600">
                © 2023 FitFormAdmin. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
