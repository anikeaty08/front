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
                        primary: '#00FF7F', // Green
                        secondary: '#34B7F1', // Blue
                        muted: '#888888',
                        danger: '#FF3B3B',
                        'danger-light': 'rgba(255, 59, 59, 0.2)',
                    },
                    fontFamily: {
                        sans: ['Manrope', 'sans-serif'],
                    },
                    boxShadow: {
                        'glow-green': '0 0 20px rgba(0, 255, 127, 0.15)',
                        'glow-red': '0 0 20px rgba(255, 59, 59, 0.15)',
                        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
                    }
                }
            }
        }
    


        // --- Header Scroll Effect ---
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('backdrop-blur-md', 'bg-bg/80', 'border-white/5', 'shadow-lg');
            } else {
                header.classList.remove('backdrop-blur-md', 'bg-bg/80', 'border-white/5', 'shadow-lg');
            }
        });

        // --- Scroll Reveal Animation ---
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));

        // --- Script Switcher Logic ---
        const scripts = {
            hard: {
                title: "Превью сообщения",
                content: "Привет! Важная новость. ⚡ Я полностью автоматизирую запись и учёт абонементов через систему FitForm. Это необходимо, чтобы исключить накладки и ошибки в подсчётах. Ручной записи больше не будет. Бот сам напомнит о тренировке и покажет баланс. Доступ платный ($7/мес), но сейчас действует бесплатный пробный период. Активируй сейчас: [ссылка]"
            },
            soft: {
                title: "Личное сообщение",
                content: "Привет! 🚀 Хочу сделать наше взаимодействие максимально удобным. Я подключил FitForm — твой личный ассистент. Записывайся/переноси в 1 клик 24/7, получай напоминания и следи за оплатами. Подписка стоит символические $7, но первый месяц я даю в подарок. Давай настроим: [ссылка]"
            },
            neutral: {
                title: "Шаблон сообщения",
                content: "Привет! 👋 Перехожу на цифровую систему FitForm, чтобы исключить путаницу с расписанием и оплатами. Теперь запись и переносы — только через бота. Это сэкономит время нам обоим. Ссылка для активации (бесплатно первый месяц): [ссылка]"
            }
        };

        function changeScript(type) {
            // Update Text
            const container = document.getElementById('script-content');
            container.style.opacity = '0';
            
            setTimeout(() => {
                container.innerHTML = `
                    <h3 class="text-secondary text-sm font-bold uppercase tracking-wider mb-4">${scripts[type].title}</h3>
                    <p class="text-base md:text-lg text-white leading-relaxed">${scripts[type].content}</p>
                `;
                container.style.opacity = '1';
            }, 300);

            // Update Buttons Styles
            const buttons = document.querySelectorAll('.script-btn');
            buttons.forEach(btn => {
                // Reset classes
                btn.className = 'script-btn text-left px-5 py-4 rounded-xl border border-white/10 text-sm font-semibold transition-all duration-200 bg-[#151515] hover:border-primary/50 focus:outline-none ring-0 text-white';
            });

            // Set Active Class
            const activeBtn = document.getElementById(`btn-${type}`);
            activeBtn.className = 'script-btn text-left px-5 py-4 rounded-xl border border-primary text-primary bg-primary/5 text-sm font-semibold transition-all duration-200 focus:outline-none ring-0 shadow-[0_0_15px_rgba(0,255,127,0.1)]';
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      




<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 border-b border-transparent" id="header">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="font-bold text-xl tracking-tight text-white select-none">
                FitFormAdmin
            </div>
<a className="group relative px-5 py-2 rounded-lg border border-primary text-primary text-sm font-semibold transition-all duration-300 hover:bg-primary hover:text-black overflow-hidden" href="#">
<span className="relative z-10">Запустить бесплатно</span>
</a>
</div>
</header>

<section className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="reveal flex flex-col items-start space-y-8">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                    Перестань быть <span className="text-white relative inline-block">«удобным»
                        <svg className="absolute w-full h-2 bottom-0 left-0 text-primary opacity-60" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
</svg>
</span> тренером. <br/>
                    Стань профессионалом, чей цифровой хребет не гнётся.
                </h1>
<p className="text-lg text-muted max-w-lg leading-relaxed">
                    FitFormAdmin — это автоматический щит для твоего дохода. Бот сам внедрит правила отмен и оплаты, которые тебе было неловко озвучить.
                </p>
<a className="bg-primary text-black px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-[0_0_20px_rgba(0,255,127,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2" href="#">
<span>Подключить ассистента за 0$</span>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>

<div className="reveal flex flex-col md:flex-row gap-6 items-center justify-center lg:justify-end relative">

<div className="w-64 bg-[#111] border border-white/5 rounded-2xl p-6 relative shadow-card group hover:shadow-glow-red transition-all duration-500 hover:-translate-y-2">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-danger to-transparent opacity-50"></div>
<div className="bg-[#1A1A1A] rounded-t-xl rounded-br-xl rounded-bl-none p-3 mb-4 inline-block max-w-[90%]">
<p className="text-xs text-muted">Сорян, я сегодня не приду</p>
</div>
<div className="flex items-center gap-3 mt-4">
<iconify-icon className="text-danger text-3xl" icon="solar:graph-down-linear"></iconify-icon>
<span className="text-4xl font-bold text-danger tracking-tighter">-$20</span>
</div>
</div>

<div className="w-64 bg-[#111] border border-white/5 rounded-2xl p-6 relative shadow-card group hover:shadow-glow-green transition-all duration-500 z-10 lg:-ml-12 lg:mt-24 bg-[#111]">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
<div className="bg-[#1A1A1A] rounded-t-xl rounded-br-xl rounded-bl-none p-3 mb-4 inline-block border-l-2 border-primary">
<p className="text-xs text-white">Списано за пропуск тренировки</p>
</div>
<div className="flex flex-col items-start mt-2">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
<iconify-icon className="text-primary text-2xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-xl font-bold text-primary tracking-tight">Доход защищён</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] relative border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Система работает, пока ты тренируешь.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

<div className="reveal bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300">

<div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
<div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
<iconify-icon icon="solar:bot-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-bold text-white">FitForm Assistant</div>
<div className="text-xs text-secondary">bot</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-lg font-bold text-white">Твоя тренировка</h3>
<div className="space-y-2 text-sm text-gray-300">
<div className="flex items-center gap-2"><iconify-icon className="text-muted" icon="solar:calendar-linear"></iconify-icon> <span>Дата: <span className="text-white">02.02.2026</span></span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-muted" icon="solar:clock-circle-linear"></iconify-icon> <span>Время: <span className="text-white">07:00</span></span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-muted" icon="solar:dumbbells-linear"></iconify-icon> <span>Тип: Личная</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-muted" icon="solar:user-linear"></iconify-icon> <span>Тренер: Сергей Лавр</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-muted" icon="solar:ticket-linear"></iconify-icon> <span>По абонементу</span></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-muted" icon="solar:chart-linear"></iconify-icon>
<span>Осталось: <span className="bg-[rgba(255,59,59,0.2)] text-white px-1.5 rounded text-xs py-0.5">9/12</span></span>
</div>
<div className="flex items-start gap-2 mt-2">
<iconify-icon className="text-muted mt-1" icon="solar:forbidden-circle-linear"></iconify-icon>
<span>Отмена/перенос до: <span className="bg-[rgba(255,59,59,0.2)] text-white px-1.5 rounded text-xs py-0.5 whitespace-nowrap">01.02 23:00</span></span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-2 mt-6">
<div className="bg-[#2A2A2A] text-center py-2 rounded text-xs font-medium text-white cursor-pointer hover:bg-[#333] transition-colors">Перенести</div>
<div className="bg-[#2A2A2A] text-center py-2 rounded text-xs font-medium text-white cursor-pointer hover:bg-[#333] transition-colors">Отменить</div>
<div className="col-span-2 bg-[#2A2A2A] text-center py-2 rounded text-xs font-medium text-white cursor-pointer hover:bg-[#333] transition-colors">Назад</div>
</div>
</div>

<div className="reveal delay-100 bg-[#111] border border-danger/50 rounded-2xl p-6 md:p-8 relative overflow-hidden">

<div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
<div className="w-10 h-10 rounded-full bg-danger/10 flex items-center justify-center text-danger border border-danger/20">
<iconify-icon icon="solar:bot-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-bold text-white">FitForm Assistant</div>
<div className="text-xs text-secondary">bot</div>
</div>
</div>
<div className="space-y-4 relative z-10">
<h3 className="text-lg font-bold text-danger">Ошибка переноса</h3>
<p className="text-sm text-gray-300 leading-relaxed">
                            К сожалению, перенести или отменить эту тренировку уже нельзя. Дедлайн для изменений был до <span className="text-white">01.02 23:00</span>. 
                            <br/><br/>
                            Согласно правилам, <span className="border-b border-danger text-white pb-0.5">занятие будет списано с вашего абонемента</span>.
                        </p>
</div>

<div className="absolute bottom-0 right-0 w-32 h-32 bg-danger/10 blur-[50px] pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] relative">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-12 reveal text-center md:text-left">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Сними страх конфликта.</h2>
<p className="text-muted text-lg">Мы уже написали за тебя.</p>
</div>
<div className="flex flex-col md:flex-row gap-8 reveal">

<div className="flex flex-row md:flex-col gap-3 w-full md:w-1/4">
<button className="script-btn text-left px-5 py-4 rounded-xl border border-white/10 text-sm font-semibold transition-all duration-200 bg-[#151515] hover:border-primary/50 focus:outline-none ring-0" id="btn-hard" onclick="changeScript('hard')">
                        😡 Жёстко
                    </button>
<button className="script-btn text-left px-5 py-4 rounded-xl border border-white/10 text-sm font-semibold transition-all duration-200 bg-[#151515] hover:border-primary/50 focus:outline-none ring-0" id="btn-soft" onclick="changeScript('soft')">
                        🥰 Мягко
                    </button>
<button className="script-btn text-left px-5 py-4 rounded-xl border border-primary text-primary bg-primary/5 text-sm font-semibold transition-all duration-200 focus:outline-none ring-0 shadow-[0_0_15px_rgba(0,255,127,0.1)]" id="btn-neutral" onclick="changeScript('neutral')">
                        😐 Нейтрально
                    </button>
</div>

<div className="w-full md:w-3/4 bg-[#111] border border-white/10 rounded-2xl p-8 relative min-h-[250px] flex flex-col justify-center">
<div className="absolute top-4 right-4 text-xs text-muted font-mono tracking-widest uppercase">Preview</div>
<div className="transition-opacity duration-300" id="script-content">
<h3 className="text-secondary text-sm font-bold uppercase tracking-wider mb-4">Шаблон сообщения</h3>
<p className="text-base md:text-lg text-white leading-relaxed">
                            "Привет! 👋 Перехожу на цифровую систему FitForm, чтобы исключить путаницу с расписанием и оплатами. Теперь запись и переносы — только через бота. Это сэкономит время нам обоим. Ссылка для активации (бесплатно первый месяц): [ссылка]"
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050505]">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight">Всё под контролем в одном окне.</h2>
</div>
<div className="reveal bg-[#111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl mx-auto relative max-w-md md:max-w-2xl w-full">

<div className="h-2 w-full bg-gradient-to-r from-secondary via-primary to-secondary"></div>
<div className="p-6 md:p-8 space-y-8">

<div className="flex flex-col md:flex-row items-center md:items-start gap-6">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-black border-2 border-white/10 flex items-center justify-center shrink-0">
<span className="text-2xl font-bold text-white">SL</span>
</div>
<div className="text-center md:text-left space-y-2 flex-1">
<h3 className="text-xl font-bold text-white">Сергей Лавр</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-400">
<div className="flex items-center gap-1.5 justify-center md:justify-start">
<iconify-icon icon="solar:dumbbell-linear"></iconify-icon> Personal Training
                                </div>
<div className="flex items-center gap-1.5 justify-center md:justify-start">
<iconify-icon icon="solar:global-linear"></iconify-icon> Asia/Tbilisi
                                </div>
<div className="flex items-center gap-1.5 justify-center md:justify-start col-span-1 md:col-span-2">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Пн, Вт, Ср, Чт, Пт, Сб
                                </div>
<div className="flex items-center gap-1.5 justify-center md:justify-start col-span-1 md:col-span-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 07:00-13:00, 17:00-21:00
                                </div>
</div>
<div className="mt-3 inline-flex items-center gap-1 text-secondary text-xs bg-secondary/10 px-2 py-1 rounded border border-secondary/20">
<iconify-icon icon="solar:link-linear"></iconify-icon> fitform.app/slavr
                            </div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<button className="flex items-center justify-center gap-2 bg-[#1A1A1A] border border-white/10 hover:border-white/30 text-white py-3 rounded-xl text-sm font-medium transition-all">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon> Settings
                        </button>
<button className="flex items-center justify-center gap-2 bg-[#1A1A1A] border border-white/10 hover:border-white/30 text-white py-3 rounded-xl text-sm font-medium transition-all">
<iconify-icon className="text-lg" icon="solar:link-circle-linear"></iconify-icon> Invite Client
                        </button>
</div>
<button className="w-full bg-[#1A1A1A] border border-primary/20 text-primary hover:bg-primary/5 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear"></iconify-icon> Пригласи тренера
                    </button>
</div>

<div className="bg-black border-t border-white/5 p-4 grid grid-cols-3 gap-2">
<div className="flex flex-col items-center justify-center gap-1 text-white opacity-50 hover:opacity-100 cursor-pointer transition-opacity">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-[10px]">My Clients</span>
</div>
<div className="flex flex-col items-center justify-center gap-1 text-white opacity-50 hover:opacity-100 cursor-pointer transition-opacity">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
<span className="text-[10px]">My Invite</span>
</div>
<div className="flex flex-col items-center justify-center gap-1 text-primary cursor-pointer">
<iconify-icon className="text-xl" icon="solar:calendar-linear"></iconify-icon>
<span className="text-[10px]">Schedule</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Твоё время — это твой самый дорогой актив. <br className="hidden md:block"/>
                Перестань его разбазаривать.
            </h2>
<div className="flex flex-col items-center gap-4">
<a className="bg-primary text-black text-lg md:text-xl font-bold px-10 py-5 rounded-xl hover:scale-105 hover:shadow-glow-green transition-all duration-300 transform" href="#">
                    Построить свой цифровой хребет (Бесплатно)
                </a>
<p className="text-sm text-muted">Регистрация за 2 минуты. Без карт. Без обязательств.</p>
</div>
</div>
</section>

<footer className="py-10 border-t border-white/5 bg-black text-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-bold tracking-tight text-white">FitFormAdmin</div>
<div className="text-muted text-center md:text-left">© 2026 FitFormAdmin. All Rights Reserved.</div>
<div className="flex gap-6">
<a className="text-muted hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
<a className="text-muted hover:text-white transition-colors" href="#">Условия использования</a>
</div>
</div>
</footer>



    </>
  );
}
