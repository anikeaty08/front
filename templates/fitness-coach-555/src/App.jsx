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
brand: {
green: '#00FF7F',
blue: '#007BFF',
gray: '#B0B0B0'
}
},
fontFamily: {
sans: ['Manrope', 'sans-serif'],
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'typing': 'typing 3.5s steps(40, end)',
'blink': 'blink .75s step-end infinite'
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
typing: {
'from': { width: '0' },
'to': { width: '100%' }
},
blink: {
'from, to': { borderColor: 'transparent' },
'50%': { borderColor: '#007BFF' }
}
}
}
}
}



        // Header Blur on Scroll
        const header = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('backdrop-blur-md', 'bg-[#0A0A0A]/80', 'border-white/10');
                header.classList.remove('border-white/0');
            } else {
                header.classList.remove('backdrop-blur-md', 'bg-[#0A0A0A]/80', 'border-white/10');
                header.classList.add('border-white/0');
            }
        });

        // Reveal Animation Observer
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Trigger AI cards if AI section
                    if(entry.target.querySelector('#ai-cards')) {
                        setTimeout(() => {
                            document.getElementById('ai-cards').classList.remove('opacity-0');
                        }, 3500); // Sync with typing animation duration
                    }
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => revealObserver.observe(el));

        // Interaction for Referral Button (Balance Ticker)
        const refBtn = document.getElementById('referral-btn');
        const balanceDisplay = document.getElementById('balance-display');
        
        refBtn.addEventListener('mouseenter', () => {
            balanceDisplay.classList.add('text-brand-green');
            balanceDisplay.innerText = '$20';
            setTimeout(() => { if(refBtn.matches(':hover')) balanceDisplay.innerText = '$40'; }, 800);
            setTimeout(() => { if(refBtn.matches(':hover')) balanceDisplay.innerText = '$60'; }, 1600);
        });
        
        refBtn.addEventListener('mouseleave', () => {
            balanceDisplay.classList.remove('text-brand-green');
            balanceDisplay.innerText = '$0';
        });

        // Template Switcher
        const templates = {
            hard: "«С 1 числа запись только через бота. В личке больше не отвечаю на вопросы про время и абонементы. Ссылка в профиле.»",
            soft: "«Привет! Я перехожу на новую систему записи. Теперь записаться и проверить абонемент можно через моего бота. Это удобнее для нас обоих — он работает 24/7.»",
            neutral: "«Друзья, запустил помощника для записи. Можно по-старинке, но через бота вы сразу увидите свободные окна и свой остаток занятий. Попробуйте 👇»"
        };

        function setTemplate(type, btn) {
            // Update Text
            const textBox = document.getElementById('template-text');
            textBox.style.opacity = '0';
            setTimeout(() => {
                textBox.innerText = templates[type];
                textBox.style.opacity = '1';
            }, 300);

            // Update Buttons
            document.querySelectorAll('.template-btn').forEach(b => {
                b.classList.remove('bg-white', 'text-dark');
                b.classList.add('bg-neutral-800', 'text-white');
            });
            btn.classList.remove('bg-neutral-800', 'text-white');
            btn.classList.add('bg-white', 'text-dark');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/0" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="font-bold text-xl tracking-tighter text-white">
                FitFormAdmin
            </div>
<a className="group relative px-6 py-2 border border-white/20 rounded-full text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:border-brand-green" href="#final-cta">
<span className="absolute inset-0 w-full h-full bg-brand-green/0 group-hover:bg-brand-green transition-all duration-300"></span>
<span className="relative z-10 group-hover:text-dark transition-colors duration-300">Делегировать бесплатно</span>
</a>
</div>
</header>
<main>

<section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 md:pt-0 max-w-7xl mx-auto px-6 gap-12 overflow-hidden">

<div className="w-full md:w-1/2 z-10 flex flex-col justify-center reveal">
<h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                    Уволь себя с должности администратора. <br/>
<span className="text-white/80">Тренируй, а не переписывайся.</span>
</h1>
<p className="text-brand-gray text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                    FitFormAdmin берет на себя 90% рутины: от записи и учета абонементов до напоминаний и сбора оплат.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="interactive-hover px-8 py-4 bg-brand-green text-dark font-bold rounded-xl text-lg w-full sm:w-auto text-center shadow-[0_0_20px_rgba(0,255,127,0.3)]">
                        Делегировать рутину бесплатно
                    </button>
</div>
</div>

<div className="w-full md:w-1/2 flex justify-center items-center h-[500px] reveal delay-200">

<div className="relative w-[300px] h-[600px] border-4 border-neutral-800 bg-[#0A0A0A] rounded-[3rem] shadow-2xl overflow-hidden z-10 ring-1 ring-white/10">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-2xl z-20"></div>

<div className="relative w-full h-full pt-10 px-4 pb-4 font-sans">

<div className="screen-chaos flex flex-col gap-3">
<div className="text-xs text-center text-white/30 mb-2">Telegram • 142 непрочитанных</div>

<div className="bg-neutral-800 p-3 rounded-2xl rounded-tl-none self-start max-w-[85%] border border-white/5">
<p className="text-xs text-white">Привет! А есть место на 19:00?</p>
</div>
<div className="bg-neutral-800 p-3 rounded-2xl rounded-tl-none self-start max-w-[85%] border border-white/5 opacity-80">
<p className="text-xs text-white">Слушай, я опоздаю на 15 мин...</p>
</div>
<div className="bg-neutral-800 p-3 rounded-2xl rounded-tl-none self-start max-w-[85%] border border-white/5 opacity-60">
<p className="text-xs text-white">Перенеси плиз тренировку</p>
</div>
<div className="bg-neutral-800 p-3 rounded-2xl rounded-tl-none self-start max-w-[85%] border border-white/5">
<p className="text-xs text-white">Сколько занятий осталось?</p>
</div>
<div className="bg-neutral-800 p-3 rounded-2xl rounded-tl-none self-start max-w-[85%] border border-white/5 opacity-90">
<p className="text-xs text-white">Забыл оплатить, ща кину</p>
</div>
<div className="bg-neutral-800 p-3 rounded-2xl rounded-tl-none self-start max-w-[85%] border border-white/5 mt-4">
<p className="text-xs text-white">Ау? Ты тут?</p>
</div>
</div>

<div className="screen-order flex flex-col h-full">
<div className="flex justify-between items-center mb-6 px-1">
<span className="text-brand-green text-sm font-bold tracking-wide">FITFORM</span>
<iconify-icon className="text-white text-lg" icon="solar:calendar-linear"></iconify-icon>
</div>
<div className="space-y-3">
<div className="bg-neutral-900/50 border border-brand-green/30 p-3 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-10 bg-brand-green rounded-full"></div>
<div>
<p className="text-xs text-white font-bold">10:00 — Мария К.</p>
<p className="text-[10px] text-brand-gray">Персональная • Оплачено</p>
</div>
</div>
<iconify-icon className="text-brand-green" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="bg-neutral-900/50 border border-brand-green/30 p-3 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-10 bg-brand-green rounded-full"></div>
<div>
<p className="text-xs text-white font-bold">12:00 — Алексей В.</p>
<p className="text-[10px] text-brand-gray">Сплит • Остаток 4</p>
</div>
</div>
<iconify-icon className="text-brand-green" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="bg-neutral-900/50 border border-white/10 p-3 rounded-xl flex items-center justify-between opacity-50">
<div className="flex items-center gap-3">
<div className="w-2 h-10 bg-gray-600 rounded-full"></div>
<div>
<p className="text-xs text-white font-bold">14:00 — Обед</p>
</div>
</div>
</div>
<div className="mt-8 p-4 bg-brand-green/10 rounded-xl border border-brand-green/20 text-center">
<p className="text-[10px] text-brand-gray uppercase tracking-wider mb-1">Доход сегодня</p>
<p className="text-xl font-bold text-brand-green">12 500 ₽</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-900/20 -skew-y-3 transform origin-top-left z-0"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center reveal">
<h2 className="text-2xl md:text-3xl font-semibold mb-12">
                    Ты тратишь 40 минут в день на <span className="text-white/60">«Ой, а можно перенести?»</span>.
                </h2>
<div className="mb-12">
<p className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                        В году это <span className="text-brand-green">240 часов</span>. <br/>
                        Это <span className="text-brand-green">целый месяц</span> полноценного отпуска, <br/>
                        который ты просидел в мессенджерах.
                    </p>
</div>
<div className="flex flex-col items-center max-w-xl mx-auto">
<p className="text-brand-gray text-lg mb-8">
                        Бот работает 24/7. Клиент записывается сам, бот сам считает остаток. Ты просто получаешь уведомление:
                    </p>

<div className="w-full max-w-sm bg-[#111] border border-brand-green/40 rounded-2xl p-4 shadow-[0_0_30px_rgba(0,255,127,0.1)] flex items-center gap-4 animate-float">
<div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
<iconify-icon height="20" icon="solar:bell-bing-linear" width="20"></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs text-brand-gray">FitFormAdmin • только что</p>
<p className="text-sm font-bold text-white">Новая запись на 18:00</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-b from-[#0A0A0A] to-[#0F0F0F] reveal">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

<div className="w-full md:w-1/2 flex justify-center">
<div className="relative w-full max-w-sm group" id="referral-demo">

<div className="bg-[#111] border border-white/10 p-8 rounded-3xl relative z-20 transition-all duration-300">
<div className="flex justify-between items-start mb-8">
<div className="bg-neutral-800 w-12 h-12 rounded-full flex items-center justify-center">
<iconify-icon className="text-white text-2xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div className="text-right">
<p className="text-xs text-brand-gray mb-1">Ваш баланс</p>
<p className="text-2xl font-bold text-white transition-colors duration-300" id="balance-display">$0</p>
</div>
</div>
<button className="w-full py-3 bg-neutral-800 hover:bg-neutral-700 border border-white/10 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-brand-green/50" id="referral-btn">
<iconify-icon className="text-lg" icon="solar:share-linear"></iconify-icon>
                                Посоветовать коллеге
                            </button>
</div>

<div className="absolute top-0 -right-24 md:-right-32 w-40 bg-[#151515] border border-brand-green/30 p-4 rounded-xl z-10 opacity-0 transform translate-x-[-20px] scale-90 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 shadow-[0_0_20px_rgba(0,255,127,0.1)]">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-brand-green text-black flex items-center justify-center text-[10px] font-bold">K</div>
<p className="text-[10px] text-white">Коллега</p>
</div>
<p className="text-[10px] text-brand-green font-bold">+ $20 получено</p>
</div>

<svg className="absolute top-1/2 right-0 w-32 h-12 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{transform: 'translate(60%, -50%)'}}>
<path d="M0,25 Q40,25 80,10" fill="none" stroke="#00FF7F" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
</div>
</div>

<div className="w-full md:w-1/2 text-left">
<h2 className="text-3xl md:text-4xl font-bold mb-6">Расти в доходе, <br/>а не в нагрузке.</h2>
<p className="text-brand-gray text-lg leading-relaxed">
                        Твой доход растет, даже когда ты не в зале. Платформа не просто экономит время, она становится твоим пассивным доходом.
                    </p>
</div>
</div>
</section>

<section className="py-32 relative reveal">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-bold mb-16 text-white" style={{textShadow: '0 0 30px rgba(0,123,255,0.4)'}}>
                    Голос вместо клавиатуры.
                </h2>
<div className="flex flex-col items-center justify-center">

<div className="flex items-center justify-center gap-8 mb-12">
<div className="w-16 h-16 rounded-full border border-brand-blue text-brand-blue flex items-center justify-center shadow-[0_0_20px_rgba(0,123,255,0.3)]">
<iconify-icon height="32" icon="solar:microphone-3-linear" width="32"></iconify-icon>
</div>
<div className="voice-wave h-12 flex items-center gap-1">
<span></span><span></span><span></span><span></span><span></span>
</div>
</div>

<div className="bg-brand-blue/10 border border-brand-blue/30 px-6 py-4 rounded-2xl rounded-bl-none mb-12 max-w-lg w-full text-left">
<p className="text-brand-blue font-mono text-sm md:text-base border-r-2 border-brand-blue pr-1 overflow-hidden whitespace-nowrap animate-typing animate-blink w-0" id="typing-text" style={{animationFillMode: 'forwards'}}>
                            Запиши Машу на завтра на 10 утра...
                        </p>
</div>

<div className="flex flex-wrap justify-center gap-4 opacity-0 transition-opacity duration-1000 delay-[3500ms]" id="ai-cards">
<div className="bg-[#111] border border-white/10 px-6 py-3 rounded-lg min-w-[140px]">
<p className="text-[10px] text-brand-gray uppercase mb-1">Клиент</p>
<p className="text-white font-semibold">Маша</p>
</div>
<div className="bg-[#111] border border-white/10 px-6 py-3 rounded-lg min-w-[140px]">
<p className="text-[10px] text-brand-gray uppercase mb-1">Время</p>
<p className="text-white font-semibold">31.01.2026, 10:00</p>
</div>
<div className="bg-[#111] border border-white/10 px-6 py-3 rounded-lg min-w-[140px]">
<p className="text-[10px] text-brand-gray uppercase mb-1">Услуга</p>
<p className="text-white font-semibold">Абонемент (8)</p>
</div>
</div>
<p className="mt-12 text-brand-gray max-w-lg mx-auto">
                        OpenAI распознает смысл и вносит данные в базу. Это магия, которая экономит еще 20% времени.
                    </p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 reveal">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-bold text-center mb-4">Внедрение за 5 минут. Без единого конфликта.</h2>
<p className="text-center text-brand-gray mb-16 max-w-2xl mx-auto">
                    Тебе не нужно ничего придумывать. Мы даем 3 готовых шаблона, чтобы мягко перевести твою базу на автопилот.
                </p>
<div className="flex flex-col md:flex-row gap-8 items-stretch">

<div className="w-full md:w-2/3 bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-8">
<div className="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
<button className="template-btn bg-neutral-800 text-white px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors hover:bg-neutral-700" onclick="setTemplate('hard', this)">🥋 Жестко</button>
<button className="template-btn bg-white text-dark px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors" onclick="setTemplate('soft', this)">🤝 Мягко</button>
<button className="template-btn bg-neutral-800 text-white px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors hover:bg-neutral-700" onclick="setTemplate('neutral', this)">🤖 Нейтрально</button>
</div>
<div className="bg-neutral-900 rounded-xl p-6 min-h-[140px] flex items-center border border-white/5 relative overflow-hidden">
<iconify-icon className="absolute top-4 right-4 text-white/10 text-4xl" icon="solar:chat-round-dots-linear"></iconify-icon>
<p className="text-white/90 text-sm md:text-base leading-relaxed transition-all duration-300" id="template-text">
                                «Привет! Я перехожу на новую систему записи. Теперь записаться и проверить абонемент можно через моего бота. Это удобнее для нас обоих — он работает 24/7.»
                            </p>
</div>
</div>

<div className="w-full md:w-1/3 bg-[#0A0A0A] border border-brand-green rounded-2xl p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/10 rounded-bl-[100px]"></div>
<h3 className="text-xl font-bold text-white mb-4 relative z-10">Нулевой риск для всех</h3>
<p className="text-brand-gray text-sm leading-relaxed relative z-10">
                            Для твоих клиентов — первый месяц <span className="text-white font-bold">0$</span>. <br/>
                            Для тебя — сервис всегда бесплатный. <br/><br/>
                            Это твой шанс навести порядок без сопротивления.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 text-center px-6 reveal" id="final-cta">
<h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 max-w-4xl mx-auto">
                Твоя работа — тренировать. <br/>
<span className="text-white/50">Остальное — работа для автопилота.</span>
</h2>
<div className="flex flex-col items-center">
<button className="interactive-hover px-10 py-5 bg-brand-green text-dark font-bold rounded-xl text-xl shadow-[0_0_40px_rgba(0,255,127,0.4)] mb-4">
                    Подключить автопилот бесплатно
                </button>
<p className="text-xs text-brand-gray opacity-60 uppercase tracking-widest">
                    Регистрация за 2 минуты. Без карт и обязательств.
                </p>
</div>
</section>
</main>

<footer className="bg-[#0A0A0A] border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-lg font-bold tracking-tighter text-white">
                FitFormAdmin
            </div>
<div className="flex gap-6 text-xs text-brand-gray">
<a className="hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
<a className="hover:text-white transition-colors" href="#">Условия использования</a>
</div>
<div className="flex gap-4">
<a className="text-white hover:text-brand-green transition-colors duration-300" href="#">
<iconify-icon icon="solar:brand-telegram-linear" width="24"></iconify-icon>
</a>
<a className="text-white hover:text-brand-green transition-colors duration-300" href="#">
<iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon>
</a>
</div>
</div>
<div className="text-center mt-8 text-[10px] text-white/20">
            © 2024 FitFormAdmin. All rights reserved.
        </div>
</footer>



    </>
  );
}
