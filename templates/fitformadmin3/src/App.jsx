import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-E5PD672QYX');



tailwind.config = {
theme: {
extend: {
colors: {
bg: '#F7F7F7',
dark: '#0A0A0A',
brand: '#00D668',
surface: '#FFFFFF',
},
fontFamily: {
sans: ['Manrope', 'sans-serif'],
},
boxShadow: {
'glow': '0 0 40px -10px rgba(0, 214, 104, 0.3)',
'card': '0 4px 20px rgba(0,0,0,0.03)',
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'bounce-slight': 'bounceSlight 2s infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
bounceSlight: {
'0%, 100%': { transform: 'translateY(-3%)' },
'50%': { transform: 'translateY(0)' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const excuses = [
                "Я проспал",
                "Забыл форму",
                "Кот рожает",
                "Пробки 10 баллов",
                "Заболела голова",
                "Срочно вызвали",
                "Не то настроение",
                "Дождь идет"
            ];

            const wheel = document.getElementById('wheel');
            const spinBtn = document.getElementById('spin-btn');
            const btnText = document.getElementById('btn-text');
            const resultDisplay = document.getElementById('result-display');
            const resultText = document.getElementById('result-text');
            
            const segmentAngle = 360 / excuses.length;
            
            excuses.forEach((excuse, i) => {
                const sep = document.createElement('div');
                sep.className = 'separator';
                sep.style.transform = `rotate(${i * segmentAngle}deg)`;
                wheel.appendChild(sep);

                const text = document.createElement('div');
                text.className = 'slice-text';
                text.textContent = excuse;
                text.style.transform = `rotate(${i * segmentAngle + (segmentAngle/2)}deg)`;
                wheel.appendChild(text);
            });

            let currentRotation = 0;
            let spinCount = 0;
            let isSpinning = false;

            spinBtn.addEventListener('click', () => {
                if(isSpinning) return;
                isSpinning = true;
                spinBtn.style.opacity = '0.7';
                resultDisplay.classList.add('hidden');

                // More rotation for drama
                const spinAmount = 1440 + Math.floor(Math.random() * 360);
                currentRotation += spinAmount;
                
                wheel.style.transform = `rotate(-${currentRotation}deg)`;

                setTimeout(() => {
                    isSpinning = false;
                    spinBtn.style.opacity = '1';
                    spinCount++;

                    const actualDeg = currentRotation % 360;
                    const pointerOffset = 270; 
                    const winningAngle = (pointerOffset + actualDeg) % 360;
                    const winningIndex = Math.floor(winningAngle / segmentAngle);

                    resultText.textContent = `"${excuses[winningIndex]}"`;
                    resultDisplay.classList.remove('hidden');
                    btnText.textContent = "Еще разок?";

                    if(spinCount >= 2) {
                        setTimeout(() => {
                            document.getElementById('game-container').style.opacity = '0';
                            document.getElementById('game-container').style.transform = 'scale(0.9)';
                            document.getElementById('controls').style.display = 'none';
                            
                            setTimeout(() => {
                                document.getElementById('game-container').style.display = 'none';
                                const cta = document.getElementById('final-message');
                                cta.classList.remove('hidden');
                                cta.classList.add('flex');
                                document.getElementById('main-title').innerHTML = "Знакомо до боли?<br>Хватит терпеть.";
                            }, 500);
                        }, 2000);
                    }
                }, 4000);
            });

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
        });

        // Analytics
        document.addEventListener('DOMContentLoaded', function() {
            const trackClick = (id, label) => {
                const el = document.getElementById(id);
                if (el) el.addEventListener('click', () => {
                    gtag('event', 'button_click', { 'event_category': 'UI', 'event_label': label });
                    console.log('Tracked:', label);
                });
            };

            trackClick('header_cta_button', 'header_button');
            trackClick('spin-btn', 'spin_wheel_button');
            trackClick('mid_solution_button', 'solution_scroll_button');
            trackClick('final_cta_button', 'final_button');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 supports-[backdrop-filter]:bg-white/60">
<div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-9 h-9 bg-dark rounded-xl flex items-center justify-center text-brand shadow-lg shadow-brand/10">
<iconify-icon icon="solar:dumbbells-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-bold tracking-tight text-dark uppercase hidden sm:block">FitFormAdmin</span>
</div>
<a className="bg-dark hover:bg-gray-800 text-white text-xs font-semibold py-2.5 px-5 rounded-lg transition-all active:scale-95 shadow-md" href="https://t.me/FitFormAdminBot" id="header_cta_button" target="_blank">
                Открыть бота
            </a>
</div>
</header>

<main className="relative pt-24 pb-12 min-h-screen flex flex-col items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 opacity-[0.04]" style={{backgroundImage: 'radial-gradient(#0A0A0A 1px, transparent 1px)', backgroundSize: '32px 32px'}}>
</div>

<div className="absolute top-20 left-10 w-72 h-72 bg-brand/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6 animate-fade-in">
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
<span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Live Simulation</span>
</div>
<h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-dark mb-8 leading-[1.1]" id="main-title">
                Опять отмена?<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-dark to-gray-500">Крути барабан.</span>
</h1>

<div className="mb-10 transition-all duration-700 ease-in-out" id="game-container">
<div className="roulette-wrapper">
<div className="pointer"></div>
<div className="roulette-wheel" id="wheel">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-dark rounded-full z-10 shadow-sm ring-4 ring-gray-100"></div>
</div>
</div>
</div>

<div className="w-full flex flex-col items-center gap-4 h-28 relative z-20" id="controls">
<button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-dark bg-brand rounded-2xl hover:bg-[#00e673] active:scale-95 transition-all shadow-glow" id="spin-btn">
<span id="btn-text">Испытать удачу</span>
<iconify-icon className="ml-2.5 transition-transform duration-300 group-hover:scale-110" icon="solar:play-circle-linear" width="22"></iconify-icon>
</button>
<div className="hidden animate-fade-in absolute top-16 w-full flex justify-center" id="result-display">
<div className="bg-white/95 backdrop-blur-sm border border-gray-200/50 px-8 py-4 rounded-2xl shadow-xl max-w-[90%] sm:max-w-md transform transition-all">
<p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Вердикт</p>
<p className="text-xl font-bold text-dark leading-tight" id="result-text"></p>
</div>
</div>
</div>

<div className="hidden flex-col items-center animate-fade-in w-full px-4 mt-8" id="final-message">
<p className="text-gray-500 mb-8 text-base sm:text-lg max-w-lg mx-auto">
                    Клиенты всегда найдут причину. Твоя задача — не слушать их, а зарабатывать.
                </p>
<button className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-dark rounded-2xl shadow-xl shadow-dark/20 active:scale-95 transition-all hover:translate-y-[-2px]" id="mid_solution_button" onclick="document.getElementById('problem-grid').scrollIntoView({behavior: 'smooth'})">
<span>Решить проблему</span>
<iconify-icon className="animate-bounce" icon="solar:arrow-down-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</main>

<section className="py-20 bg-white relative" id="problem-grid">
<div className="max-w-6xl mx-auto px-4">
<h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4 tracking-tight">Цена твоего "понимания"</h2>
<p className="text-gray-500 text-center mb-12 max-w-xl mx-auto text-sm">Каждая "уважительная причина" клиента бьет по трем ключевым ресурсам твоего бизнеса.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#FFF5F5] to-white border border-red-100 hover:border-red-200 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5 reveal-on-scroll group">
<div className="w-14 h-14 rounded-2xl bg-white shadow-sm text-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-red-50">
<iconify-icon icon="solar:wallet-money-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="font-bold text-xl text-gray-900 mb-3">Деньги</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Простой зала не оплачивается. Отмена день в день — это прямой убыток, который ты почему-то берешь на себя.
                    </p>
</div>

<div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#F0F9FF] to-white border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-14 h-14 rounded-2xl bg-white shadow-sm text-blue-500 flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300 border border-blue-50">
<iconify-icon icon="solar:clock-circle-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="font-bold text-xl text-gray-900 mb-3">Время</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Ты тратишь часы на переписки и уговоры. Это время можно потратить на поиск новых клиентов или отдых.
                    </p>
</div>

<div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#FAF5FF] to-white border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="w-14 h-14 rounded-2xl bg-white shadow-sm text-purple-500 flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300 border border-purple-50">
<iconify-icon icon="solar:diploma-verified-bold-duotone" width="32"></iconify-icon>
</div>
<h3 className="font-bold text-xl text-gray-900 mb-3">Авторитет</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Прощая нарушения правил, ты показываешь, что твой график не важен. Клиенты это чувствуют и наглеют.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg border-y border-gray-100 overflow-hidden" id="solution">
<div className="max-w-6xl mx-auto px-4">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="w-full lg:w-1/2 reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand/10 text-brand-700 text-[11px] font-bold uppercase tracking-wider mb-6">
<iconify-icon icon="solar:stars-minimalistic-bold"></iconify-icon>
                        Smart Automation
                    </div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark mb-6 tracking-tight leading-[1.15]">
                        Бот без жалости,<br/>но с правилами
                    </h2>
<p className="text-gray-500 mb-10 text-lg font-light leading-relaxed">
                        FitFormAdmin берет на себя роль "плохого полицейского". Он четко следует заданным тобой правилам отмены и оплаты. Никаких эмоций, только бизнес.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
<div className="mt-1 text-brand">
<iconify-icon icon="solar:shield-check-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-dark text-sm">Авто-списание</h4>
<p className="text-xs text-gray-500 mt-1">Отмена меньше чем за 24 часа = списанное занятие. Автоматически.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
<div className="mt-1 text-brand">
<iconify-icon icon="solar:calendar-add-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-dark text-sm">Запись 24/7</h4>
<p className="text-xs text-gray-500 mt-1">Клиент видит свободные слоты и записывается сам. Ты только получаешь пуш.</p>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 flex justify-center lg:justify-end reveal-on-scroll">
<div className="relative w-[300px] sm:w-[320px] bg-white rounded-[2.5rem] border-[8px] border-dark shadow-2xl overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-24 bg-dark rounded-b-2xl z-20"></div>

<div className="h-[500px] bg-gray-50 flex flex-col pt-12 pb-4 px-4 overflow-hidden relative">

<div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white">
<iconify-icon icon="solar:robot-bold" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-bold text-dark">FitFormAdmin</div>
<div className="text-[10px] text-brand">online</div>
</div>
</div>
</div>

<div className="flex-1 space-y-4 overflow-y-auto no-scrollbar">
<div className="text-center text-[10px] text-gray-400 font-medium">Вчера, 22:45</div>

<div className="flex flex-col items-start gap-1 max-w-[85%]">
<div className="bg-white border border-gray-100 p-3.5 rounded-2xl rounded-tl-none shadow-sm text-dark text-xs leading-relaxed">
                                        Привет! Завтра не получится, пробки ужасные обещают 🚗 Давай перенесем?
                                    </div>
</div>

<div className="flex flex-col items-end gap-1 max-w-[90%] ml-auto">
<div className="bg-dark text-white p-3.5 rounded-2xl rounded-tr-none shadow-md text-xs leading-relaxed">
                                        Привет! До тренировки осталось менее 24 часов. Согласно правилам студии, занятие будет списано.
                                    </div>
<span className="text-[9px] text-gray-400 mr-1">delivered</span>
</div>

<div className="my-4 mx-2 bg-blue-50/50 border border-blue-100 rounded-xl p-3 flex flex-col items-center text-center animate-pulse">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mb-2">
<iconify-icon icon="solar:bill-check-bold" width="16"></iconify-icon>
</div>
<div className="text-xs font-bold text-gray-800">Списано: 1 занятие</div>
<div className="text-[10px] text-gray-400">Остаток абонемента: 4</div>
</div>
</div>

<div className="mt-auto pt-2">
<div className="h-10 bg-white border border-gray-200 rounded-full flex items-center px-4 justify-between">
<div className="w-20 h-2 bg-gray-100 rounded-full"></div>
<div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center text-white">
<iconify-icon icon="solar:arrow-up-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden bg-dark">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
                Начни уважать<br/>свое время
            </h2>
<p className="text-gray-400 mb-10 text-base font-light max-w-lg mx-auto">
                Подключи бота за 5 минут. Попробуй 14 дней бесплатно, без привязки карты.
            </p>
<a className="inline-flex items-center gap-3 bg-brand text-dark hover:bg-white text-base font-bold py-4 px-10 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-[0_0_40px_-10px_rgba(0,214,104,0.4)]" href="https://t.me/FitFormAdminBot" id="final_cta_button">
<iconify-icon icon="solar:rocket-2-bold-duotone" width="24"></iconify-icon>
                Запустить бесплатно
            </a>
<p className="mt-6 text-xs text-gray-600">Настройка займет меньше времени, чем одно кардио.</p>
</div>
</section>

<footer className="bg-dark border-t border-white/5 py-8">
<div className="max-w-6xl mx-auto px-4 text-center">
<p className="text-xs text-gray-500">© 2024 FitFormAdmin. Automation for fitness professionals.</p>
</div>
</footer>



    </>
  );
}
