import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
dark: '#0A0A0A',
light: '#FFFFFF',
gray: '#B0B0B0',
accent: '#00FF7F',
'accent-dark': '#00CC66',
'ai-blue': '#007BFF',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
'pulse-glow': {
'0%, 100%': { opacity: '1', transform: 'scale(1)' },
'50%': { opacity: '.5', transform: 'scale(1.1)' },
}
}
}
}
}



        // 1. Header Blur on Scroll
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-[#0A0A0A]/80', 'backdrop-blur-md', 'shadow-lg');
            } else {
                header.classList.remove('bg-[#0A0A0A]/80', 'backdrop-blur-md', 'shadow-lg');
            }
        });

        // 2. Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => revealObserver.observe(el));

        // 3. Referral Interaction (Scaling Section)
        const referralBtn = document.getElementById('referral-btn');
        const colleagueCard = document.getElementById('colleague-card');
        const connectionLine = document.getElementById('connection-line');
        const balanceDisplay = document.getElementById('balance-display');
        let isAnimated = false;

        referralBtn.addEventListener('mouseenter', () => {
            if(isAnimated) return;
            isAnimated = true;
            
            // Show line
            connectionLine.style.width = '160px'; // approximate distance
            
            setTimeout(() => {
                // Show card
                colleagueCard.classList.remove('opacity-0', 'scale-75');
                colleagueCard.classList.add('opacity-100', 'scale-100');
                
                // Animate numbers
                let start = 0;
                const end = 20;
                const duration = 500;
                const startTime = performance.now();

                function animate(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const value = Math.floor(progress * end);
                    
                    balanceDisplay.innerText = `$${value}`;
                    balanceDisplay.classList.add('text-accent');

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                }
                requestAnimationFrame(animate);

            }, 300);
        });

        // 4. AI Typewriter & Animation
        const typewriterText = document.getElementById('typewriter-text');
        const aiResults = document.getElementById('ai-results');
        const aiSection = document.querySelector('.bg-ai-blue\\/5'); // Using background as selector for section parent roughly
        const fullText = "Запиши Машу на завтра на 10 утра, абонемент на 8 занятий.";
        let hasTyped = false;

        const aiObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasTyped) {
                    hasTyped = true;
                    let i = 0;
                    typewriterText.innerHTML = '';
                    
                    function type() {
                        if (i < fullText.length) {
                            typewriterText.innerHTML += fullText.charAt(i);
                            i++;
                            setTimeout(type, 40);
                        } else {
                            // Typing done, show results
                            document.querySelector('.cursor-blink').style.display = 'none';
                            setTimeout(() => {
                                aiResults.classList.remove('opacity-0');
                                aiResults.classList.add('opacity-100', 'translate-y-[-10px]');
                            }, 500);
                        }
                    }
                    setTimeout(type, 500); // Slight delay before starting
                }
            });
        }, { threshold: 0.5 });

        aiObserver.observe(document.getElementById('ai-wave'));

        // 5. Safe Transition Tabs
        const templates = {
            'hard': "С этого дня я больше не веду запись в личных сообщениях. Все расписание теперь в боте — пожалуйста, запишись там. Это сэкономит время нам обоим.",
            'soft': "Привет! Я тестирую нового помощника для записи, чтобы не терять ваши сообщения. Попробуй записаться через него, это очень удобно!",
            'neutral': "Теперь актуальное расписание и остаток занятий можно посмотреть в моем боте. Ссылка ниже 👇"
        };

        const btns = {
            'hard': document.getElementById('btn-hard'),
            'soft': document.getElementById('btn-soft'),
            'neutral': document.getElementById('btn-neutral')
        };
        const templateText = document.getElementById('template-text');

        function changeTemplate(type) {
            // Reset Styles
            Object.values(btns).forEach(btn => {
                btn.className = 'template-btn px-4 py-2 rounded-lg text-sm font-medium transition-all text-gray hover:text-white';
            });
            
            // Set Active Style
            btns[type].className = 'template-btn px-4 py-2 rounded-lg text-sm font-medium transition-all bg-white/10 text-white shadow-sm';
            
            // Fade out, change text, fade in
            templateText.style.opacity = 0;
            setTimeout(() => {
                templateText.innerText = `"${templates[type]}"`;
                templateText.style.opacity = 1;
            }, 200);
        }
        
        // Set initial state
        changeTemplate('soft');

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent" id="header">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight text-white select-none">FitFormAdmin</span>
</div>

<button className="interactive-hover group relative px-5 py-2 rounded-lg border border-white/20 text-sm font-medium text-white overflow-hidden bg-transparent hover:bg-accent hover:border-accent transition-colors">
<span className="relative z-10 group-hover:text-dark transition-colors">Делегировать бесплатно</span>
</button>
</div>
</header>
<main className="">

<section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-16 items-center reveal">

<div className="space-y-8 z-10">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
                        Уволь себя с должности администратора. <br/>
<span className="text-gray-400">Тренируй, а не переписывайся.</span>
</h1>
<p className="text-lg text-gray leading-relaxed max-w-lg">
                        FitFormAdmin берет на себя 90% рутины: от записи и учета абонементов до напоминаний и сбора оплат.
                    </p>
<div>
<button className="interactive-hover bg-accent text-dark px-8 py-4 rounded-xl font-semibold text-base shadow-[0_0_20px_rgba(0,255,127,0.3)] hover:shadow-[0_0_30px_rgba(0,255,127,0.5)] transition-all flex items-center gap-2">
<span>Делегировать рутину бесплатно</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="relative flex justify-center lg:justify-end">
<div className="relative w-[300px] h-[600px] border-[8px] border-[#222] bg-[#0A0A0A] rounded-[3rem] shadow-2xl overflow-hidden phone-screen ring-1 ring-white/10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#222] rounded-b-xl z-20"></div>

<div className="absolute inset-0 pt-12 px-4 flex flex-col gap-3 chat-scroll">
<div className="self-start bg-[#222] p-3 rounded-2xl rounded-tl-none text-xs text-gray-300 max-w-[80%]">а есть место на 19:00?</div>
<div className="self-end bg-blue-600/20 p-3 rounded-2xl rounded-tr-none text-xs text-white max-w-[80%]">Привет! Сейчас гляну...</div>
<div className="self-start bg-[#222] p-3 rounded-2xl rounded-tl-none text-xs text-gray-300 max-w-[80%]">блин я опаздываю на 15 мин</div>
<div className="self-start bg-[#222] p-3 rounded-2xl rounded-tl-none text-xs text-gray-300 max-w-[80%]">сколько занятий осталось?</div>
<div className="self-start bg-[#222] p-3 rounded-2xl rounded-tl-none text-xs text-gray-300 max-w-[80%]">перенеси плиз на завтра</div>
<div className="self-end bg-blue-600/20 p-3 rounded-2xl rounded-tr-none text-xs text-white max-w-[80%]">Секунду, сверюсь с графиком</div>
<div className="self-start bg-[#222] p-3 rounded-2xl rounded-tl-none text-xs text-gray-300 max-w-[80%]">оплатила на карту</div>
<div className="self-start bg-[#222] p-3 rounded-2xl rounded-tl-none text-xs text-gray-300 max-w-[80%]">а можно заморозить?</div>
</div>

<div className="absolute inset-0 bg-[#0A0A0A] z-10 flex flex-col pt-12 px-4 calendar-overlay">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-medium text-white">Расписание</span>
<iconify-icon className="text-accent" icon="solar:calendar-linear"></iconify-icon>
</div>
<div className="space-y-3">
<div className="bg-[#151515] border border-white/5 p-3 rounded-xl flex items-center gap-3">
<div className="w-1 h-8 bg-accent rounded-full"></div>
<div>
<div className="text-xs text-gray-400">10:00 - 11:00</div>
<div className="text-sm font-medium text-white">Мария К. (Персональная)</div>
</div>
</div>
<div className="bg-[#151515] border border-white/5 p-3 rounded-xl flex items-center gap-3">
<div className="w-1 h-8 bg-blue-500 rounded-full"></div>
<div>
<div className="text-xs text-gray-400">12:30 - 13:30</div>
<div className="text-sm font-medium text-white">Группа (4 чел.)</div>
</div>
</div>
<div className="bg-[#151515] border border-white/5 p-3 rounded-xl flex items-center gap-3">
<div className="w-1 h-8 bg-accent rounded-full"></div>
<div>
<div className="text-xs text-gray-400">15:00 - 16:00</div>
<div className="text-sm font-medium text-white">Алексей В.</div>
</div>
</div>
</div>
<div className="mt-auto mb-6 bg-accent/10 border border-accent/20 p-3 rounded-xl flex items-center justify-center gap-2">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-accent">Все слоты подтверждены</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative reveal">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-8">
                    Ты тратишь 40 минут в день на «Ой, а можно перенести?».
                </h2>
<div className="my-12 p-8 border border-white/5 rounded-3xl bg-[#0F0F0F] relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<p className="text-3xl sm:text-4xl font-medium text-gray leading-tight relative z-10">
                        В году это <span className="text-accent font-semibold">240 часов</span>. Это <span className="text-accent font-semibold">целый месяц</span> полноценного отпуска, который ты просидел в мессенджерах.
                    </p>
</div>
<div className="flex flex-col items-center gap-6">
<p className="text-gray text-lg max-w-2xl mx-auto">
                        Бот работает 24/7. Клиент записывается сам, бот сам считает остаток. Ты просто получаешь уведомление:
                    </p>

<div className="flex items-center gap-4 bg-[#0F0F0F] border-l-4 border-accent border-y border-r border-white/10 px-5 py-4 rounded-r-lg shadow-lg w-full max-w-sm transform hover:translate-y-[-2px] transition-transform duration-300">
<div className="bg-accent/20 p-2 rounded-full text-accent">
<iconify-icon icon="solar:bell-bing-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="text-left">
<div className="text-xs text-gray-400">FitFormAdmin • Только что</div>
<div className="text-sm text-white font-medium">Новая запись на 18:00</div>
</div>
</div>
</div>
</div>
</section>

<section className="reveal bg-[#0A0A0A] border-white/5 border-t pt-24 pb-24 relative">
<div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

<div className="relative h-[400px] flex items-center justify-center bg-[#0F0F0F] rounded-3xl border border-white/5 overflow-hidden" id="referral-container">

<div className="absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(#222 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: '0.5'}}></div>

<div className="relative z-20 bg-[#1A1A1A] border border-white/10 p-6 rounded-2xl w-64 text-center shadow-xl transition-all duration-300">
<div className="w-12 h-12 bg-white/10 rounded-full mx-auto mb-3 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<div className="text-sm text-gray mb-1">Ваш баланс</div>
<div className="text-3xl font-semibold text-white mb-4 transition-all duration-300" id="balance-display">$0</div>

<button className="interactive-hover w-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white py-2 rounded-lg text-sm font-medium transition-all" id="referral-btn">
                            Посоветовать коллеге
                        </button>
</div>

<div className="transition-all duration-500 z-10 text-center bg-[#1A1A1A] w-48 border-white/10 border rounded-xl p-4 shadow--y-0 lg:ml-6" id="colleague-card">
<div className="w-10 h-10 bg-accent/20 rounded-full mx-auto mb-2 flex items-center justify-center">
<iconify-icon className="text-accent" icon="solar:user-plus-linear" width="20"></iconify-icon>
</div>
<div className="text-xs text-white">Коллега подключился</div>
<div className="text-xs text-accent mt-1">+ $20</div>
</div>

<div className="absolute top-1/2 left-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-accent transition-all duration-500 z-0 origin-left" id="connection-line" style={{width: '160px'}}></div>
</div>

<div className="space-y-6">
<h2 className="text-3xl font-semibold text-white tracking-tight">Расти в доходе, а не в нагрузке.</h2>
<p className="text-lg text-gray leading-relaxed">
                        Твой доход растет, даже когда ты не в зале. Платформа не просто экономит время, она становится твоим пассивным доходом.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-gray-300">
<iconify-icon className="text-accent text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Бонус за каждого приглашенного тренера</span>
</li>
<li className="flex items-center gap-3 text-gray-300">
<iconify-icon className="text-accent text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Прозрачная статистика начислений</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden reveal">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ai-blue/5 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 drop-shadow-[0_0_15px_rgba(0,123,255,0.4)]">
                    Голос вместо клавиатуры.
                </h2>

<div className="relative bg-[#0F0F0F] border border-ai-blue/20 rounded-3xl p-8 sm:p-12 mb-8 overflow-hidden">

<div className="flex flex-col items-center justify-center mb-8">
<div className="relative w-16 h-16 bg-ai-blue/10 rounded-full flex items-center justify-center mb-6 glow-blue border border-ai-blue/30">
<iconify-icon className="text-ai-blue text-3xl" icon="solar:microphone-3-linear"></iconify-icon>

<div className="absolute inset-0 rounded-full border border-ai-blue/50 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
</div>

<div className="h-8 flex items-center gap-1 mb-6" id="ai-wave">
<div className="w-1 bg-ai-blue rounded-full wave-line h-full"></div>
<div className="w-1 bg-ai-blue rounded-full wave-line h-[60%]"></div>
<div className="w-1 bg-ai-blue rounded-full wave-line h-[80%]"></div>
<div className="w-1 bg-ai-blue rounded-full wave-line h-[40%]"></div>
<div className="w-1 bg-ai-blue rounded-full wave-line h-[90%]"></div>
</div>

<div className="bg-[#1A1A1A] px-6 py-3 rounded-2xl rounded-bl-none border border-white/5 inline-block max-w-lg mx-auto">
<span className="text-lg text-white font-light" id="typewriter-text">З</span><span className="cursor-blink text-ai-blue">|</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 opacity-0 transition-all duration-700" id="ai-results">
<div className="bg-[#0A0A0A] border border-white/10 p-4 rounded-xl text-left">
<div className="text-xs text-gray-500 mb-1">Клиент</div>
<div className="text-white font-medium">Маша</div>
</div>
<div className="bg-[#0A0A0A] border border-white/10 p-4 rounded-xl text-left">
<div className="text-xs text-gray-500 mb-1">Время</div>
<div className="text-white font-medium">31.01.2026, 10:00</div>
</div>
<div className="bg-[#0A0A0A] border border-white/10 p-4 rounded-xl text-left">
<div className="text-xs text-gray-500 mb-1">Услуга</div>
<div className="text-white font-medium">Абонемент (8)</div>
</div>
</div>
</div>
<p className="text-gray text-lg max-w-2xl mx-auto">
                    OpenAI распознает смысл и вносит данные в базу. Это магия, которая экономит еще <span className="text-ai-blue">20% времени</span>.
                </p>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-t border-white/5 reveal">
<div className="max-w-6xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Внедрение за 5 минут. Без единого конфликта.</h2>
<p className="text-gray text-lg max-w-2xl mx-auto">
                        Тебе не нужно ничего придумывать. Мы даем 3 готовых шаблона, чтобы мягко перевести твою базу на автопилот.
                    </p>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<div className="space-y-6">
<div className="flex gap-4 p-1 bg-[#151515] rounded-xl border border-white/5 w-fit">
<button className="template-btn px-4 py-2 rounded-lg text-sm font-medium transition-all text-gray hover:text-white" id="btn-hard" onclick="changeTemplate('hard')">
                                🥋 Жестко
                            </button>
<button className="template-btn px-4 py-2 rounded-lg text-sm font-medium transition-all bg-white/10 text-white shadow-sm" id="btn-soft" onclick="changeTemplate('soft')">
                                🤝 Мягко
                            </button>
<button className="template-btn px-4 py-2 rounded-lg text-sm font-medium transition-all text-gray hover:text-white" id="btn-neutral" onclick="changeTemplate('neutral')">
                                🤖 Нейтрально
                            </button>
</div>
<div className="bg-[#151515] border border-white/10 p-6 rounded-2xl min-h-[180px] flex items-center relative">
<div className="absolute top-4 left-4 flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
<p className="text-white/90 text-lg italic mt-4" id="template-text" style={{opacity: '1'}}>"Привет! Я тестирую нового помощника для записи, чтобы не терять ваши сообщения. Попробуй записаться через него, это очень удобно!"</p>
</div>
</div>

<div className="h-full">
<div className="h-full bg-gradient-to-b from-[#0F0F0F] to-[#0A0A0A] border border-accent/30 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
<h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-accent" icon="solar:shield-check-linear"></iconify-icon>
                                Нулевой риск для всех
                            </h3>
<p className="text-gray leading-relaxed">
                                Для твоих клиентов — <span className="text-accent">первый месяц 0$</span>. 
                                Для тебя — сервис всегда бесплатный. 
                                Это твой шанс навести порядок без сопротивления.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative reveal">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-10 leading-tight">
                    Твоя работа — тренировать. 
                    Остальное — работа для автопилота.
                </h2>
<div className="flex flex-col items-center gap-4">
<button className="interactive-hover bg-accent text-dark px-10 py-5 rounded-xl font-bold text-lg shadow-[0_0_40px_rgba(0,255,127,0.2)] hover:shadow-[0_0_60px_rgba(0,255,127,0.4)] transition-all">
                        Подключить автопилот бесплатно
                    </button>
<p className="text-xs text-gray-500 tracking-wide uppercase">Регистрация за 2 минуты. Без карт и обязательств.</p>
</div>
</div>
</section>
</main>

<footer className="bg-[#0A0A0A] border-t border-white/5 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
<div className="text-xl font-semibold tracking-tight text-white">FitFormAdmin</div>
<div className="flex items-center gap-6">
<a className="text-white hover:text-accent hover:drop-shadow-[0_0_8px_rgba(0,255,127,0.5)] transition-all" href="#">
<iconify-icon icon="solar:brand-telegram-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<a className="text-white hover:text-accent hover:drop-shadow-[0_0_8px_rgba(0,255,127,0.5)] transition-all" href="#">
<iconify-icon icon="solar:instagram-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-sm text-gray-500 border-t border-white/5 pt-8">
<p>© 2026 FitFormAdmin. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
<a className="hover:text-white transition-colors" href="#">Условия использования</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
