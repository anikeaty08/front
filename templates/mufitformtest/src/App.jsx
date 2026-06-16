import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
bg: '#0A0A0A',
primary: '#FFFFFF',
secondary: '#888888',
danger: '#FF4444',
success: '#00FF7F',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
}
}
}
}



        // --- Header Scroll Effect ---
        const header = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-black/80', 'backdrop-blur-md', 'border-white/5');
                header.classList.remove('border-transparent');
            } else {
                header.classList.remove('bg-black/80', 'backdrop-blur-md', 'border-white/5');
                header.classList.add('border-transparent');
            }
        });

        // --- Live Timer Logic ---
        const moneyEl = document.getElementById('money-counter');
        const timeEl = document.getElementById('time-counter');
        const clientsEl = document.getElementById('clients-counter');
        
        // Initial arbitrary values to look realistic on load
        let money = 1240.50;
        let minutes = 45;
        let clients = 3;

        // Money: +$0.50 every second
        setInterval(() => {
            money += 0.50;
            moneyEl.innerText = `$${money.toFixed(2)}`;
        }, 1000);

        // Time: +1 min every 3 seconds
        setInterval(() => {
            minutes += 1;
            timeEl.innerText = minutes;
        }, 3000);

        // Clients: +1 every 10 seconds
        setInterval(() => {
            clients += 1;
            clientsEl.innerText = clients;
        }, 10000);

        // --- Slider Logic ---
        const slider = document.getElementById('slider');
        const monthlyLossEl = document.getElementById('monthly-loss');
        const yearlyLossEl = document.getElementById('yearly-loss');

        slider.addEventListener('input', (e) => {
            const sessions = e.target.value;
            const monthly = sessions * 20; // $20 per session
            const yearly = monthly * 12;

            monthlyLossEl.innerText = monthly;
            yearlyLossEl.innerText = yearly;
        });

        // --- Chat Tabs Logic ---
        const chatMessage = document.getElementById('chat-message');
        const styleLabel = document.getElementById('style-label');
        const btnHard = document.getElementById('btn-hard');
        const btnSoft = document.getElementById('btn-soft');
        const btnNeutral = document.getElementById('btn-neutral');

        const messages = {
            hard: "Привет! Я перевожу всех клиентов на новую систему записи. Теперь бронирование и отмена — через бота. Отмена менее чем за 24 часа оплачивается полностью. Это поможет нам обоим ценить время друг друга. Вот ссылка: fitform.admin/u/you",
            soft: "Привет! Хочу поделиться удобной штукой — теперь можно записываться через бота, видеть свободные слоты и получать напоминания. Первый месяц бесплатно, попробуй! Вот ссылка: fitform.admin/u/you",
            neutral: "Привет! Подключаю новую систему записи. Теперь всё через бота — расписание, напоминания, оплата. Переходи по ссылке: fitform.admin/u/you"
        };

        const labels = {
            hard: "Жёстко",
            soft: "Мягко",
            neutral: "Нейтрально"
        };

        function setChatStyle(style) {
            // Update Text
            chatMessage.innerText = messages[style];
            styleLabel.innerText = labels[style];
            
            // Reset Buttons
            [btnHard, btnSoft, btnNeutral].forEach(btn => {
                btn.classList.remove('bg-white/5', 'text-white');
                btn.classList.add('text-secondary');
            });

            // Active Button
            const activeBtn = document.getElementById(`btn-${style}`);
            activeBtn.classList.remove('text-secondary');
            activeBtn.classList.add('bg-white/5', 'text-white');
        }

        // Fade In Animation on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent" id="main-header">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="font-semibold tracking-tight text-lg">FitFormAdmin</div>
<a className="group relative px-6 py-2 border border-success/50 rounded-full text-sm font-medium transition-all duration-300 hover:bg-success hover:text-black" href="#cta">
<span className="relative z-10">Подключить ассистента за 0$</span>
</a>
</div>
</header>

<section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#8888880a_1px,transparent_1px),linear-gradient(to_bottom,#8888880a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="relative z-10 text-center max-w-4xl w-full">
<h1 className="text-xl md:text-3xl font-semibold text-white tracking-tight mb-12 md:mb-16 opacity-0 animate-fade-in-up" style={{animationFillMode: 'forwards', animationDelay: '0.2s'}}>
                Пока ты читаешь эту страницу, <br className="hidden md:block"/>тренеры без автоматизации теряют:
            </h1>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mb-16 w-full">

<div className="flex flex-col items-center p-4">
<div className="timer-glow font-mono text-5xl md:text-6xl text-danger mb-2 tracking-tighter" id="money-counter">
                        $0.00
                    </div>
<span className="text-xs md:text-sm text-secondary uppercase tracking-widest">потеряно на отменах</span>
</div>

<div className="flex flex-col items-center p-4 border-t border-white/5 md:border-t-0 md:border-l md:border-r">
<div className="flex items-baseline gap-1">
<div className="timer-glow font-mono text-5xl md:text-6xl text-danger mb-2 tracking-tighter" id="time-counter">
                            0
                        </div>
<span className="text-danger text-xl font-mono">мин</span>
</div>
<span className="text-xs md:text-sm text-secondary uppercase tracking-widest">потрачено на переписки</span>
</div>

<div className="flex flex-col items-center p-4 border-t border-white/5 md:border-t-0">
<div className="timer-glow font-mono text-5xl md:text-6xl text-danger mb-2 tracking-tighter" id="clients-counter">
                        0
                    </div>
<span className="text-xs md:text-sm text-secondary uppercase tracking-widest">ушли к конкурентам</span>
</div>
</div>
<p className="text-secondary text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
                FitFormAdmin — это автоматический щит для твоего дохода. Бот сам внедрит правила отмен и оплаты, которые тебе было неловко озвучить.
            </p>
<a className="inline-flex items-center justify-center px-8 py-4 bg-success text-black text-sm md:text-base font-semibold rounded-lg shadow-[0_0_20px_rgba(0,255,127,0.3)] hover:shadow-[0_0_30px_rgba(0,255,127,0.5)] hover:scale-105 transition-all duration-300" href="#loss-detector">
                Остановить потери
            </a>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="loss-detector">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold text-center mb-16 tracking-tight">Узнай стоимость своей неловкости.</h2>
<div className="bg-[#111] p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl">
<div className="mb-10">
<label className="block text-secondary text-sm md:text-base mb-6" htmlFor="slider">Сколько тренировок в месяц у тебя отменяют позже дедлайна?</label>
<input className="w-full mb-4" id="slider" max="20" min="0" type="range" value="4"/>
<div className="flex justify-between text-xs text-secondary font-mono">
<span>0</span>
<span>10</span>
<span>20</span>
</div>
</div>
<div className="bg-[#0A0A0A] rounded-xl p-6 border border-white/5 text-center">
<p className="text-lg md:text-xl text-white mb-2">
                        Ты даришь клиентам <span className="text-danger font-mono font-bold">$<span id="monthly-loss">80</span></span> в месяц.
                    </p>
<p className="text-sm md:text-base text-secondary mb-6">
                        За год это <span className="text-white font-mono">$<span id="yearly-loss">960</span></span> — хватит на отпуск.
                    </p>
<p className="text-xs text-success uppercase tracking-wider font-semibold">
                        FitFormAdmin окупает себя в первый же день.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="relative order-2 md:order-1">

<div className="bg-neutral-900 rounded-3xl p-4 border border-white/10 max-w-sm mx-auto shadow-2xl relative">

<div className="flex items-center gap-3 pb-4 border-b border-white/5 mb-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-success to-emerald-800 flex items-center justify-center text-[10px] text-black font-bold">FA</div>
<div>
<div className="text-xs font-semibold text-white">FitFormAdmin Bot</div>
<div className="text-[10px] text-success">bot</div>
</div>
</div>

<div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar">
<button className="chat-btn px-3 py-1.5 rounded-full text-[10px] border border-white/20 text-white hover:border-success transition-colors bg-white/5" id="btn-hard" onclick="setChatStyle('hard')">🥋 Жёстко</button>
<button className="chat-btn px-3 py-1.5 rounded-full text-[10px] border border-white/20 text-secondary hover:border-success transition-colors" id="btn-soft" onclick="setChatStyle('soft')">🤝 Мягко</button>
<button className="chat-btn px-3 py-1.5 rounded-full text-[10px] border border-white/20 text-secondary hover:border-success transition-colors" id="btn-neutral" onclick="setChatStyle('neutral')">🤖 Нейтрально</button>
</div>

<div className="space-y-3">
<div className="flex justify-end">
<div className="bg-[#2A2A2A] text-white text-xs p-3 rounded-2xl rounded-tr-none max-w-[85%]">
<p className="opacity-70 mb-1 text-[10px]">Вы выбрали стиль: <span className="text-success" id="style-label">Жёстко</span></p>
<div className="leading-relaxed" id="chat-message">
                                    Привет! Я перевожу всех клиентов на новую систему записи. Теперь бронирование и отмена — через бота. Отмена менее чем за 24 часа оплачивается полностью. Вот ссылка: fitform.admin/u/you
                                </div>
</div>
</div>
<div className="flex justify-center mt-4">
<button className="text-[10px] text-secondary flex items-center gap-1 hover:text-white transition-colors">
<iconify-icon icon="solar:copy-linear"></iconify-icon> Нажми, чтобы скопировать
                            </button>
</div>
</div>
</div>

<div className="absolute -inset-4 bg-success/5 blur-3xl -z-10 rounded-full"></div>
</div>

<div className="order-1 md:order-2">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Больше никаких долгих переписок и оправданий.</h2>
<p className="text-secondary text-base md:text-lg leading-relaxed mb-8">
                    Тебе не нужно подбирать слова. Мы уже создали 3 сценария под любой психотип клиента. Просто выбери стиль, скопируй и отправь.
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-success text-xl" icon="solar:check-circle-linear"></iconify-icon>
                        Автоматический трекинг отмен
                    </div>
<div className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-success text-xl" icon="solar:check-circle-linear"></iconify-icon>
                        Генерация сообщений на базе AI
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0F0F0F]">
<div className="max-w-2xl mx-auto">
<div className="relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
<div className="bg-[#0A0A0A] rounded-xl p-8 md:p-10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-success/10 blur-3xl rounded-full -mr-10 -mt-10"></div>
<h3 className="text-2xl font-semibold mb-8 text-white tracking-tight text-center">Нулевой риск при вводе базы.</h3>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center text-success">
<iconify-icon icon="solar:user-linear" width="18"></iconify-icon>
</div>
<span className="text-lg text-white">Тренеру: Сервис стоит <span className="text-success font-bold">0$</span> навсегда.</span>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center text-success">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
</div>
<span className="text-lg text-white">Клиенту: Первый месяц — <span className="text-success font-bold">0$</span>.</span>
</div>
</div>
<p className="text-secondary text-sm mb-8 leading-relaxed">
                        Самое частое возражение: «Мои клиенты не будут платить». Тесты показывают: 9 из 10 продлевают подписку через месяц, потому что привыкают к удобству личного кабинета и AI-напоминаний.
                    </p>
<div className="bg-white/5 border-l-2 border-success p-4 rounded-r-lg">
<p className="text-xs md:text-sm text-white italic opacity-90">
                            "Те, кто не готов потратить $7 на твой комфорт после бесплатного месяца — это те самые «токсичные» клиенты, которые тянут твой бизнес на дно. Отсей их автоматически."
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold text-center mb-16 tracking-tight">Почему клиенты скажут тебе «Спасибо»?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#111] border border-white/5 p-6 rounded-2xl rounded-bl-none relative">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-success text-black flex items-center justify-center font-bold text-sm">АК</div>
<div className="text-xs text-secondary">Алексей К.</div>
</div>
<p className="text-sm text-white leading-relaxed">
                        О, круто, наконец-то я вижу свободные окошки и не жду твой ответ по полдня!
                    </p>
</div>

<div className="bg-[#111] border border-white/5 p-6 rounded-2xl rounded-bl-none relative">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-success text-black flex items-center justify-center font-bold text-sm">МВ</div>
<div className="text-xs text-secondary">Мария В.</div>
</div>
<p className="text-sm text-white leading-relaxed">
                        Спасибо за напоминание! Если бы бот не написал, я бы реально забыла форму дома.
                    </p>
</div>

<div className="bg-[#111] border border-white/5 p-6 rounded-2xl rounded-bl-none relative">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-success text-black flex items-center justify-center font-bold text-sm">ДС</div>
<div className="text-xs text-secondary">Дмитрий С.</div>
</div>
<p className="text-sm text-white leading-relaxed">
                        Удобно, что видно, сколько занятий в блоке осталось. Продлеваю!
                    </p>
</div>
</div>
<p className="text-center text-secondary text-sm mt-12">
                Это не «налог на тренера». Это апгрейд до уровня бизнес-класса.
            </p>
</div>
</section>

<section className="py-16 px-6 border-y border-white/5 bg-black">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="flex flex-col items-center text-center group">
<iconify-icon className="text-white mb-4 group-hover:text-success transition-colors duration-300 stroke-[1.5]" height="40" icon="solar:brain-linear" width="40"></iconify-icon>
<span className="text-white font-semibold mb-1">OpenAI</span>
<span className="text-[10px] text-secondary uppercase tracking-wider">AI-ассистент</span>
</div>
<div className="flex flex-col items-center text-center group">
<iconify-icon className="text-white mb-4 group-hover:text-success transition-colors duration-300 stroke-[1.5]" height="40" icon="solar:calendar-linear" width="40"></iconify-icon>
<span className="text-white font-semibold mb-1">Google Calendar</span>
<span className="text-[10px] text-secondary uppercase tracking-wider">Синхронизация</span>
</div>
<div className="flex flex-col items-center text-center group">
<iconify-icon className="text-white mb-4 group-hover:text-success transition-colors duration-300 stroke-[1.5]" height="40" icon="solar:database-linear" width="40"></iconify-icon>
<span className="text-white font-semibold mb-1">PostgreSQL</span>
<span className="text-[10px] text-secondary uppercase tracking-wider">Безопасность</span>
</div>
<div className="flex flex-col items-center text-center group">
<iconify-icon className="text-white mb-4 group-hover:text-success transition-colors duration-300 stroke-[1.5]" height="40" icon="solar:plain-linear" width="40"></iconify-icon>
<span className="text-white font-semibold mb-1">Telegram</span>
<span className="text-[10px] text-secondary uppercase tracking-wider">Интерфейс</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="cta">

<div className="absolute inset-0 bg-gradient-to-b from-black to-[#111]"></div>
<div className="relative z-10 max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8 leading-tight">
                Твоё время — это твой самый дорогой актив. <br/><span className="text-secondary">Перестань его разбазаривать.</span>
</h2>
<button className="w-full md:w-auto px-10 py-5 bg-success text-black text-lg font-bold rounded-lg shadow-[0_0_20px_rgba(0,255,127,0.3)] hover:shadow-[0_0_40px_rgba(0,255,127,0.6)] hover:scale-105 transition-all duration-300 mb-4">
                Запустить FitFormAdmin бесплатно
            </button>
<p className="text-xs text-secondary mb-12">Регистрация за 2 минуты. Без карт. Без обязательств.</p>
<p className="text-sm text-white/80 italic max-w-lg mx-auto border-t border-white/5 pt-6">
                P.S. Первые 5 твоих клиентов подключим за 1 секунду по твоему инвайту. Попробуй на самой капризной клиентке. Если она оценит — оценят все.
            </p>
</div>
</section>

<footer className="bg-[#050505] border-t border-white/5 py-10 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-semibold tracking-tight text-white">FitFormAdmin</div>
<div className="text-xs text-secondary">
                © 2026 FitFormAdmin. All Rights Reserved.
            </div>
<div className="flex gap-6 text-xs text-secondary">
<a className="hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
<a className="hover:text-white transition-colors" href="#">Условия использования</a>
</div>
</div>
</footer>


<style>
        /* Add simple fade in utility here to avoid external css dependency for animation */
        .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>

    </>
  );
}
