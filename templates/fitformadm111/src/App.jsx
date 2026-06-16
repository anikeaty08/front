import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
},
extend: {
colors: {
page: '#0A0A0A',
card: '#1A1A1A',
border: '#2A2A2A',
primary: '#FFFFFF',
secondary: '#B0B0B0',
accent: '#00FF7F',
negative: '#FF4136',
},
fontSize: {
xs: '0.75rem',
sm: '0.875rem',
base: '1rem',
lg: '1.125rem',
xl: '1.25rem',
'2xl': '1.5rem',
'3xl': '1.875rem',
'4xl': '2.25rem',
'5xl': '3rem',
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.05em',
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. SCROLL OBSERVER (Fade In)
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in-section').forEach(el => {
                observer.observe(el);
            });

            // 2. HEADER SCROLL EFFECT
            const header = document.getElementById('main-header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('bg-page/80', 'backdrop-blur-md', 'border-white/5');
                } else {
                    header.classList.remove('bg-page/80', 'backdrop-blur-md', 'border-white/5');
                }
            });

            // 3. HERO ANIMATION SEQUENCE
            setTimeout(() => {
                document.getElementById('hero-loss').style.opacity = '1';
                document.getElementById('hero-loss').style.transform = 'translateY(0)';
            }, 500);

            setTimeout(() => {
                document.getElementById('hero-gain-content').style.opacity = '1';
                document.getElementById('hero-gain-content').style.transform = 'translateY(0)';
            }, 1500);

            // 4. LOSS CALCULATOR
            const slider = document.getElementById('loss-slider');
            const tooltip = document.getElementById('slider-tooltip');
            const amountDisplay = document.getElementById('loss-amount');

            const updateSlider = () => {
                const val = slider.value;
                const percent = (val / slider.max) * 100;
                
                // Update tooltip position
                tooltip.style.left = `calc(${percent}% + (${8 - percent * 0.15}px))`;
                tooltip.textContent = val;
                
                // Update amount
                const lostMoney = val * 20;
                amountDisplay.textContent = `$${lostMoney}`;
            };

            slider.addEventListener('input', updateSlider);
            updateSlider(); // Init

            // 5. UX FLOW INTERACTION
            window.activateUxFlow = function() {
                const step1 = document.getElementById('ux-step-1');
                const step2 = document.getElementById('ux-step-2');
                
                // Hide button
                step1.style.opacity = '0';
                step1.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    step1.style.display = 'none';
                    
                    // Show interface
                    step2.style.opacity = '1';
                    step2.style.filter = 'blur(0)';
                    step2.style.transform = 'scale(1)';
                    step2.style.pointerEvents = 'auto';
                }, 300);
            };

            const messages = {
                hard: "Добрый день. С этого момента запись на тренировки только через бота. Правила отмены: не позднее чем за 24 часа. Поздняя отмена = оплата занятия. Ссылка для подключения ниже.",
                soft: "Привет! Я подключил удобного бота-помощника для записи на тренировки. Там можно выбрать удобное время, получать напоминания и видеть историю занятий. Попробуй, это бесплатно первый месяц!",
                neutral: "Здравствуйте. Для вашего удобства я подключил систему записи на тренировки. Пожалуйста, используйте бота для бронирования времени и отслеживания занятий."
            };

            window.setTone = function(tone) {
                // Reset buttons
                ['hard', 'soft', 'neutral'].forEach(t => {
                    const btn = document.getElementById(`btn-${t}`);
                    btn.classList.remove('border-accent', 'text-white', 'shadow-[0_0_10px_rgba(0,255,127,0.1)]');
                    btn.classList.add('border-border', 'text-secondary');
                });

                // Activate selected
                const activeBtn = document.getElementById(`btn-${tone}`);
                activeBtn.classList.remove('border-border', 'text-secondary');
                activeBtn.classList.add('border-accent', 'text-white', 'shadow-[0_0_10px_rgba(0,255,127,0.1)]');

                // Change Text
                const msgBox = document.getElementById('message-content');
                msgBox.style.opacity = '0';
                setTimeout(() => {
                    msgBox.textContent = messages[tone];
                    msgBox.style.opacity = '1';
                }, 150);
            };
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent" id="main-header">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="font-bold text-xl tracking-tight text-white select-none">FitFormAdmin</div>
<a className="hidden sm:inline-flex items-center justify-center px-6 py-2 border border-white/20 text-sm font-medium rounded-full text-white transition-all duration-300 hover:bg-accent hover:border-accent hover:text-page hover:scale-105" href="#">
                Запустить бесплатно
            </a>

<a className="sm:hidden text-accent" href="#">
<iconify-icon height="24" icon="solar:rocket-linear" width="24"></iconify-icon>
</a>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="flex flex-col items-start z-10 fade-in-section">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
                    Перестань быть <br className="hidden lg:block"/> «удобным» тренером. <br/>
<span className="text-secondary">Стань профессионалом, чьё время стоит дорого.</span>
</h1>
<p className="text-secondary text-base sm:text-lg max-w-lg mb-10 leading-relaxed">
                    FitFormAdmin — это автоматический щит для твоего дохода. Бот сам внедрит правила отмен и оплаты, которые тебе было неловко озвучить.
                </p>
<button className="group relative px-8 py-4 bg-accent text-page text-base font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,127,0.4)]">
                    Подключить ассистента за 0$
                </button>
</div>

<div className="relative w-full aspect-[4/3] lg:aspect-square flex flex-col justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/5 rounded-full blur-[100px]"></div>
<div className="relative grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-md mx-auto">

<div className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center aspect-square shadow-2xl relative overflow-hidden group">
<div className="bg-[#2A2A2A] rounded-tl-xl rounded-tr-xl rounded-br-xl p-3 mb-4 w-full text-xs text-gray-300">
                            Сорян, я сегодня не приду
                        </div>
<div className="text-4xl font-bold text-negative tracking-tight opacity-0 translate-y-4 transition-all duration-700" id="hero-loss">
                            -$20
                        </div>
</div>

<div className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center aspect-square shadow-2xl relative overflow-hidden">
<div className="flex flex-col items-center opacity-0 translate-y-4 transition-all duration-700" id="hero-gain-content">
<iconify-icon className="text-accent mb-3" height="48" icon="solar:check-circle-linear" strokeWidth="1.5" width="48"></iconify-icon>
<span className="text-xs text-secondary uppercase tracking-widest mb-1">Списано за пропуск</span>
<span className="text-lg font-semibold text-accent">Доход защищен</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-page relative">
<div className="max-w-4xl mx-auto px-6 text-center fade-in-section">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-16">
                Узнай стоимость своей неловкости
            </h2>
<div className="bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-2xl">
<label className="block text-secondary text-base mb-8 font-medium" htmlFor="loss-slider">
                    Сколько тренировок в месяц у тебя отменяют позже дедлайна?
                </label>
<div className="flex items-center gap-6 mb-12">
<span className="text-secondary text-sm">0</span>
<div className="relative w-full">
<input className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer" id="loss-slider" max="20" min="0" type="range" value="0"/>
<div className="absolute -top-10 left-0 -translate-x-1/2 text-accent font-bold text-xl transition-all" id="slider-tooltip">0</div>
</div>
<span className="text-secondary text-sm">20+</span>
</div>
<div className="text-xl sm:text-2xl font-semibold leading-relaxed text-white">
                    Ты даришь клиентам <span className="text-accent" id="loss-amount">$0</span> в месяц. <br/>
<span className="text-secondary">Мы вернем их тебе. FitFormAdmin окупает себя в первый же день.</span>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 relative overflow-hidden">
<div className="max-w-5xl mx-auto px-6 fade-in-section">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white text-center mb-16">
                Больше никаких долгих переписок и оправданий
            </h2>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

<div className="lg:col-span-3 bg-card border border-border rounded-3xl p-6 sm:p-8 h-[400px] flex flex-col justify-center relative shadow-2xl transition-all duration-300 hover:border-white/10">

<div className="absolute inset-0 flex items-center justify-center transition-all duration-500 z-20" id="ux-step-1">
<button className="px-8 py-3 bg-accent text-page font-semibold rounded-xl hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,127,0.3)] transition-all duration-300" onclick="activateUxFlow()">
                            Пригласить клиента
                        </button>
</div>

<div className="flex flex-col h-full opacity-0 pointer-events-none transition-all duration-500 blur-sm scale-95" id="ux-step-2">

<div className="flex gap-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
<button className="flex-1 min-w-[100px] py-2 px-3 rounded-lg border border-border bg-[#0A0A0A] text-sm text-secondary hover:border-accent hover:text-white transition-all" id="btn-hard" onclick="setTone('hard')">
                                🥋 Жестко
                            </button>
<button className="flex-1 min-w-[100px] py-2 px-3 rounded-lg border border-accent bg-[#0A0A0A] text-sm text-white shadow-[0_0_10px_rgba(0,255,127,0.1)] transition-all" id="btn-soft" onclick="setTone('soft')">
                                🤝 Мягко
                            </button>
<button className="flex-1 min-w-[100px] py-2 px-3 rounded-lg border border-border bg-[#0A0A0A] text-sm text-secondary hover:border-accent hover:text-white transition-all" id="btn-neutral" onclick="setTone('neutral')">
                                🤖 Нейтрально
                            </button>
</div>

<div className="flex-1 bg-[#0A0A0A] rounded-xl p-5 border border-white/5 relative group">
<p className="text-sm sm:text-base leading-relaxed text-gray-300" id="message-content">
                                Привет! Я подключил удобного бота-помощника для записи на тренировки. Там можно выбрать удобное время, получать напоминания и видеть историю занятий. Попробуй, это бесплатно первый месяц!
                            </p>
<button className="absolute bottom-4 right-4 text-secondary hover:text-accent transition-colors">
<iconify-icon height="20" icon="solar:copy-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="lg:col-span-2 space-y-6">
<h3 className="text-2xl font-semibold text-white">Тебе не нужно подбирать слова.</h3>
<p className="text-secondary text-lg leading-relaxed">
                        Мы уже создали 3 сценария под любой психотип клиента. Просто скопируй и отправь.
                    </p>
<ul className="space-y-4 text-secondary">
<li className="flex items-center gap-3">
<iconify-icon className="text-accent shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Сохраняет отношения с клиентом</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-accent shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Устанавливает границы сразу</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-[#050505]">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white text-center mb-16 fade-in-section">
                Нулевой риск при вводе базы
            </h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div className="flex flex-col justify-center fade-in-section">
<div className="text-secondary text-sm font-medium uppercase tracking-wider mb-4">Самое частое возражение:</div>
<div className="text-xl text-white mb-8 border-l-2 border-border pl-4 italic">
                        «Мои клиенты не будут платить»
                    </div>
<p className="text-lg sm:text-xl font-medium text-white leading-relaxed">
                        Мы проверили на 500+ клиентах. <br/>
<span className="text-accent">9 из 10 продлевают подписку</span> через месяц, потому что привыкают к удобству.
                    </p>
</div>

<div className="flex flex-col gap-4">

<div className="bg-card border border-border p-6 rounded-2xl flex items-center gap-6 transition-all duration-300 hover:border-accent hover:bg-white/5 glow-hover fade-in-section" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-accent" height="24" icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-white mb-1">Тренеру</h3>
<p className="text-secondary">Сервис стоит 0$ навсегда.</p>
</div>
</div>

<div className="bg-card border border-border p-6 rounded-2xl flex items-center gap-6 transition-all duration-300 hover:border-accent hover:bg-white/5 glow-hover fade-in-section" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-accent" height="24" icon="solar:gift-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-white mb-1">Клиенту</h3>
<p className="text-secondary">Первый месяц — 0$.</p>
</div>
</div>
</div>
</div>
<p className="text-center text-secondary text-sm mt-12 max-w-2xl mx-auto opacity-70 fade-in-section">
                Дай клиенту привыкнуть к комфорту личного кабинета и AI-напоминаний. Через 30 дней он сам не захочет возвращаться к хаосу в мессенджерах.
            </p>
</div>
</section>

<section className="py-24 sm:py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white text-center mb-16 fade-in-section">
                Почему клиенты скажут тебе «Спасибо»?
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-accent hover:-translate-y-1 fade-in-section delay-100">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center text-xs font-bold text-white">АК</div>
<div className="text-xs text-secondary">Вчера в 14:30</div>
</div>
<p className="text-white text-sm leading-relaxed bg-[#2A2A2A] p-3 rounded-lg rounded-tl-none">
                        О, круто, наконец-то я вижу свободные окошки и не жду твой ответ по полдня! 🔥
                    </p>
</div>

<div className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-accent hover:-translate-y-1 fade-in-section delay-200">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center text-xs font-bold text-white">МП</div>
<div className="text-xs text-secondary">Сегодня в 09:15</div>
</div>
<p className="text-white text-sm leading-relaxed bg-[#2A2A2A] p-3 rounded-lg rounded-tl-none">
                        Спасибо за напоминание! Если бы бот не написал, я бы реально забыл форму дома. 😅
                    </p>
</div>

<div className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-accent hover:-translate-y-1 fade-in-section delay-300">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center text-xs font-bold text-white">ЕС</div>
<div className="text-xs text-secondary">Вчера в 19:45</div>
</div>
<p className="text-white text-sm leading-relaxed bg-[#2A2A2A] p-3 rounded-lg rounded-tl-none">
                        Удобно, что видно, сколько занятий в блоке осталось. Продлеваю! ✅
                    </p>
</div>
</div>
<div className="text-center mt-12 text-secondary text-sm fade-in-section">
                Это не «налог на тренера». Это апгрейд до уровня бизнес-класса.
            </div>
</div>
</section>

<section className="py-20 bg-page border-y border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center fade-in-section">
<h2 className="text-2xl font-semibold text-secondary mb-8">Справедливая сделка</h2>
<p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-12">
                Ты получаешь мощную CRM за 0$. <br/>
<span className="text-gray-500">Твой клиент получает персонального AI-ассистента по цене чашки кофе.</span>
</p>
<div className="text-left bg-card/50 border-l-4 border-accent p-6 rounded-r-xl max-w-2xl mx-auto">
<p className="text-base sm:text-lg text-secondary leading-relaxed">
<strong className="text-white block mb-2">Главный инсайт:</strong>
                    Те, кто не готов потратить $7 на твой комфорт после бесплатного месяца — это те самые «токсичные» клиенты, которые тянут твой бизнес на дно. Отсей их автоматически.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-page">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-center text-white mb-16 fade-in-section">Технологический стек</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 fade-in-section">

<div className="flex flex-col items-center group">
<div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(0,255,127,0.2)]">
<iconify-icon className="text-white group-hover:text-accent transition-colors" height="32" icon="simple-icons:openai" width="32"></iconify-icon>
</div>
<div className="font-bold text-white">OpenAI</div>
<div className="text-xs text-secondary mt-1">Голосовой ввод</div>
</div>

<div className="flex flex-col items-center group">
<div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(0,255,127,0.2)]">
<iconify-icon className="text-white group-hover:text-accent transition-colors" height="32" icon="simple-icons:googlecalendar" width="32"></iconify-icon>
</div>
<div className="font-bold text-white">Google Calendar</div>
<div className="text-xs text-secondary mt-1">Синхронизация</div>
</div>

<div className="flex flex-col items-center group">
<div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(0,255,127,0.2)]">
<iconify-icon className="text-white group-hover:text-accent transition-colors" height="32" icon="simple-icons:postgresql" width="32"></iconify-icon>
</div>
<div className="font-bold text-white">PostgreSQL</div>
<div className="text-xs text-secondary mt-1">Безопасность</div>
</div>

<div className="flex flex-col items-center group">
<div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(0,255,127,0.2)]">
<iconify-icon className="text-white group-hover:text-accent transition-colors" height="32" icon="simple-icons:telegram" width="32"></iconify-icon>
</div>
<div className="font-bold text-white">Telegram</div>
<div className="text-xs text-secondary mt-1">Интерфейс</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 fade-in-section">
<h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-8">
                Твоё время — это твой самый дорогой актив. <br/>
<span className="text-secondary">Перестань его разбазаривать.</span>
</h2>
<button className="px-8 py-5 bg-accent text-page text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,127,0.5)] mb-6">
                Запустить FitFormAdmin (Бесплатно)
            </button>
<div className="space-y-2 text-sm text-secondary">
<p>Регистрация за 2 минуты. Без карт. Без обязательств.</p>
<p className="text-xs opacity-60 max-w-lg mx-auto">
                    P.S. Первые 5 твоих клиентов подключим за 1 секунду по твоему инвайту. Попробуй на самой капризной клиентке. Если она оценит — оценят все.
                </p>
</div>
</div>
</section>

<footer className="bg-page border-t border-border py-12">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
<div className="text-center md:text-left">
<div className="font-bold text-white mb-1">FitFormAdmin</div>
<div className="text-xs text-secondary">© 2026 FitFormAdmin. All rights reserved.</div>
</div>
<div className="flex justify-center gap-6">
<a className="text-secondary hover:text-accent transition-colors" href="#">
<iconify-icon height="24" icon="simple-icons:telegram" width="24"></iconify-icon>
</a>
<a className="text-secondary hover:text-accent transition-colors" href="#">
<iconify-icon height="24" icon="simple-icons:instagram" width="24"></iconify-icon>
</a>
</div>
<div className="flex flex-col sm:flex-row justify-center md:justify-end gap-4 text-xs text-secondary text-center md:text-right">
<a className="hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
<a className="hover:text-white transition-colors" href="#">Условия использования</a>
</div>
</div>
</footer>



    </>
  );
}
