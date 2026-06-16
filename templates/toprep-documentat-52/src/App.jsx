import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Form Handling
        const form = document.getElementById('waitlistForm');
        const btnText = document.getElementById('btnText');
        const btnSpinner = document.getElementById('btnSpinner');
        const submitBtn = document.getElementById('submitBtn');
        const successMsg = document.getElementById('successMsg');
        const emailInput = document.getElementById('emailInput');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if(!emailInput.value) return;

            // Loading state
            btnText.classList.add('hidden');
            btnSpinner.classList.remove('hidden');
            submitBtn.classList.add('opacity-80', 'cursor-not-allowed');

            // Simulate API call
            setTimeout(() => {
                // Success state
                successMsg.classList.remove('opacity-0', 'pointer-events-none');
                successMsg.classList.add('opacity-100');
            }, 1000);
        });

        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal-up');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: "0px 0px -100px 0px" });

        revealElements.forEach(el => revealObserver.observe(el));

        // Nav styling on scroll
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) {
                nav.classList.add('shadow-[0_2px_10px_rgb(0,0,0,0.03)]');
            } else {
                nav.classList.remove('shadow-[0_2px_10px_rgb(0,0,0,0.03)]');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-black/5 bg-[#F9F9F8]/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-[75rem] mx-auto px-6 h-[4.5rem] flex items-center justify-between">
<div className="flex bg-center bg-blue-600 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91f4a3ef-f195-4cfc-81e0-e38179e7b815_3840w.jpg?w=800&amp;q=80)] bg-cover rounded-lg items-center justify-center">
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-[#666666]">
<a className="hover:text-[#111111] transition-colors" href="#features">База знаний</a>
<a className="hover:text-[#111111] transition-colors" href="#how-it-works">Как начать</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden items-center justify-center hover:bg-[#333333] transition-colors md:inline-flex text-sm font-normal text-white bg-blue-600 h-10 rounded-full pr-5 pl-5 shadow-sm" href="#waitlist">Войти</a>
<button className="md:hidden text-[#111111] text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="">

<section className="lg:pt-[12rem] lg:pb-[8rem] pt-[10rem] pr-6 pb-[6rem] pl-6 relative">
<div className="glow-bg top-[10%] left-[50%] -translate-x-[50%]"></div>
<div className="max-w-[75rem] mx-auto grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-8 items-center">
<div className="flex flex-col gap-8 reveal-up active">
<h1 className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] leading-[1.1] font-medium text-[#111111] tracking-tighter font-display">База знаний и инструкции платформы.</h1>
<p className="md:text-lg leading-relaxed text-base font-normal text-[#666666] max-w-[35rem]">Мы собрали подробные руководства, чтобы вы могли максимально эффективно использовать все инструменты для онлайн-преподавания на Toprep.</p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#111111] text-white text-base font-normal hover:bg-[#333333] shadow-sm transition-colors w-full sm:w-auto" href="#features">
                            Открыть справочник
                        </a>
<a className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-black/10 text-[#111111] text-base font-normal hover:bg-black/5 transition-colors w-full sm:w-auto gap-2 group" href="#how-it-works">
                            Перейти на Toprep
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<p className="text-xs text-[#666666] font-normal tracking-wide flex items-center gap-2">
<iconify-icon className="text-[#111111] text-base" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                        Доступно всем пользователям. От регистрации до проведения уроков.
                    </p>
</div>
<div className="relative w-full max-w-[32rem] mx-auto lg:ml-auto reveal-up active" style={{transitionDelay: '0.1s'}}>

<div className="absolute inset-0 bg-gradient-to-br from-[#EAEAEA] to-[#F3F3F1] rounded-xl transform translate-x-2 translate-y-2 border border-black/5"></div>
<div className="relative bg-white border border-black/5 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div className="flex items-center px-4 py-3 border-b border-black/5 bg-[#F9F9F8]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-black/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-black/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-black/10"></div>
</div>
<span className="ml-4 text-xs font-mono text-[#666666]">tutor-setup.js</span>
</div>
<div className="p-6 overflow-x-auto text-sm font-mono leading-relaxed text-[#111111]">
<pre className="m-0"><code className="language-js"><span className="token-keyword">import</span> Toprep <span className="token-keyword">from</span> <span className="token-string">'@toprep/sdk'</span>

<span className="token-keyword">const</span> app <span className="token-keyword">=</span> <span className="token-keyword">new</span> Toprep({ key: process.env.TOPREP_KEY })

<span className="token-keyword">const</span> lesson <span className="token-keyword">=</span> <span className="token-keyword">await</span> app.lessons.<span className="token-variable">create</span>({
  subject: <span className="token-string">'Математика'</span>,
  student: <span className="token-string">'Иван Иванов'</span>,
  tools: [<span className="token-string">'whiteboard'</span>, <span className="token-string">'video'</span>],
  date: <span className="token-string">'2023-11-01T15:00:00Z'</span>
})

<span className="token-comment">// Ваш идеальный урок готов.</span></code></pre>
</div>
</div>
</div>
</div>
</section>

<div className="overflow-hidden border-y reveal-up bg-white w-full border-black/5 pt-4 pb-4">
<div className="animate-marquee flex gap-12 items-center text-xs font-normal tracking-widest uppercase text-[#888888]">
<span className="">Онлайн-доска</span>
<span className="w-1.5 h-1.5 rounded-full bg-black/10"></span>
<span className="">Видеозвонки</span>
<span className="w-1.5 h-1.5 rounded-full bg-black/10"></span>
<span className="">Сохранение материалов</span>
<span className="w-1.5 h-1.5 rounded-full bg-black/10"></span>
<span className="">Система управления</span>
<span className="w-1.5 h-1.5 rounded-full bg-black/10"></span>
<span className="">Управление учениками</span>
<span className="w-1.5 h-1.5 rounded-full bg-black/10"></span>
</div>
</div>

<section className="py-[6rem] px-6 bg-white border-b border-black/5">
<div className="max-w-[50rem] mx-auto text-center reveal-up">
<h2 className="text-[2rem] md:text-[3rem] leading-tight font-medium text-[#111111] tracking-tight font-display mb-6">
  Вы профессионал в своем предмете. <br className="hidden md:block"/>
                    Техническую часть <span className="text-[#8C62EA]">мы берем на себя.</span>
</h2>
<p className="text-base text-[#666666] leading-relaxed font-normal">
                    Отбросьте десятки разрозненных сервисов. Toprep объединяет доску, звонки и расписание в одном окне. А наши пошаговые инструкции помогут настроить рабочее пространство за пару кликов.
                </p>
</div>
</section>

<section className="py-[8rem] px-6 bg-[#F9F9F8]" id="how-it-works">
<div className="max-w-[75rem] mx-auto">
<div className="mb-16 reveal-up">
<h2 className="font-display text-[2rem] md:text-[2.5rem] font-medium tracking-tight text-[#111111] mb-4">
                        Как начать работу на платформе.
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative reveal-up">

<div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>

<div className="relative pt-6 md:pt-12">
<div className="absolute top-0 left-0 text-[3rem] font-display font-medium text-black/5 leading-none">01</div>
<div className="w-2.5 h-2.5 rounded-full bg-[#111111] absolute top-[2.2rem] left-0 hidden md:block ring-4 ring-[#F9F9F8]"></div>
<h3 className="font-display text-lg font-medium text-[#111111] mb-3 mt-4 tracking-tight">Регистрация аккаунта</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Создайте профиль преподавателя, укажите предметы и выполните базовые настройки своего личного кабинета.</p>
</div>
<div className="relative pt-6 md:pt-12">
<div className="absolute top-0 left-0 text-[3rem] font-display font-medium text-black/5 leading-none">02</div>
<div className="w-2.5 h-2.5 rounded-full bg-[#5D72E9] absolute top-[2.2rem] left-0 hidden md:block ring-4 ring-[#F9F9F8]"></div>
<h3 className="font-display text-lg font-medium text-[#111111] mb-3 mt-4 tracking-tight">Добавление учеников</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Занесите студентов в базу. Вся история их занятий, выполненных домашек и оплат будет храниться в одном месте.</p>
</div>
<div className="relative pt-6 md:pt-12">
<div className="absolute top-0 left-0 text-[3rem] font-display font-medium text-black/5 leading-none">03</div>
<div className="w-2.5 h-2.5 rounded-full bg-[#8C62EA] absolute top-[2.2rem] left-0 hidden md:block ring-4 ring-[#F9F9F8]"></div>
<h3 className="font-display text-lg font-medium text-[#111111] mb-3 mt-4 tracking-tight">Настройка расписания</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Добавьте свободные окна в календарь. Вы сможете легко переносить уроки, создавать регулярные слоты и отмечать посещаемость.</p>
</div>
<div className="relative pt-6 md:pt-12">
<div className="absolute top-0 left-0 text-[3rem] font-display font-medium text-black/5 leading-none">04</div>
<div className="w-2.5 h-2.5 rounded-full bg-[#2E907B] absolute top-[2.2rem] left-0 hidden md:block ring-4 ring-[#F9F9F8]"></div>
<h3 className="font-display text-lg font-medium text-[#111111] mb-3 mt-4 tracking-tight">Проведение занятий</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Запускайте видеосвязь и интерактивную доску прямо из карточки урока. Сохраняйте материалы для будущих встреч.</p>
</div>
</div>
</div>
</section>

<section className="border-y bg-white border-black/5 pt-[8rem] pr-6 pb-[8rem] pl-6" id="features">
<div className="max-w-[75rem] mx-auto">
<div className="mb-16 reveal-up">
<h2 className="font-display text-[2rem] md:text-[2.5rem] font-medium tracking-tight text-[#111111] mb-4">
                        Разделы базы знаний.
                    </h2>
<p className="text-base text-[#666666] font-normal">Подробные руководства по каждому инструменту платформы.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 rounded-xl overflow-hidden reveal-up border border-black/5 shadow-sm">

<div className="bg-white p-8 hover:bg-[#F9F9F8] transition-colors relative group overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#5D72E9] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-[2rem] text-[#5D72E9] mb-6" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-display text-lg font-medium tracking-tight text-[#111111] mb-3">Интерактивная доска</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Как использовать инструменты рисования, загружать PDF-материалы, управлять страницами и сохранять результаты уроков.</p>
</div>

<div className="bg-white p-8 hover:bg-[#F9F9F8] transition-colors relative group overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#8C62EA] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-[2rem] text-[#8C62EA] mb-6" icon="solar:videocamera-record-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-display text-lg font-medium tracking-tight text-[#111111] mb-3">Видеозвонки</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Настройка камеры и микрофона, демонстрация экрана, использование встроенного чата и запись прошедших занятий.</p>
</div>

<div className="bg-white p-8 hover:bg-[#F9F9F8] transition-colors relative group overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#2E907B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-[2rem] text-[#2E907B] mb-6" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-display text-lg font-medium tracking-tight text-[#111111] mb-3">Управление расписанием</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Создание регулярных и разовых уроков, настройка часовых поясов, алгоритмы отмены и переносы занятий учениками.</p>
</div>

<div className="bg-white p-8 hover:bg-[#F9F9F8] transition-colors relative group overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#E08A3B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-[2rem] text-[#E08A3B] mb-6" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-display text-lg font-medium tracking-tight text-[#111111] mb-3">База учеников</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Ведение карточек студентов, добавление системных заметок после уроков и контроль за выполнением домашних заданий.</p>
</div>

<div className="bg-white p-8 hover:bg-[#F9F9F8] transition-colors relative group overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#D45454] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-[2rem] text-[#D45454] mb-6" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-display text-lg font-medium tracking-tight text-[#111111] mb-3">Финансы и статистика</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Учет оплат за проведенные уроки, удобное отслеживание задолженностей учеников и общая аналитика вашего дохода.</p>
</div>

<div className="bg-white p-8 hover:bg-[#F9F9F8] transition-colors relative group overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#111111] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-[2rem] text-[#111111] mb-6" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-display text-lg font-medium tracking-tight text-[#111111] mb-3">Настройки профиля</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Управление тарифами, безопасность аккаунта, настройка уведомлений и гибкая персонализация вашего рабочего пространства.</p>
</div>
</div>
<p className="text-sm text-[#666666] mt-8 text-center font-normal reveal-up">
                    Не нашли нужный ответ? Наша служба поддержки всегда на связи во встроенном чате платформы.
                </p>
</div>
</section>


<section className="py-[8rem] px-6 bg-white border-t border-black/5">
<div className="max-w-[75rem] mx-auto">
<div className="mb-12 text-center reveal-up">
<h2 className="font-display text-[2rem] md:text-[2.5rem] font-medium tracking-tight text-[#111111]">
                        Отвечаем на вопросы репетиторов любого уровня.
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-up">

<div className="bg-[#F9F9F8] rounded-xl p-8 border border-black/5 flex flex-col hover:border-black/10 transition-colors">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-blue-50 text-[#5D72E9] border border-blue-100 flex items-center justify-center font-display font-medium text-sm">А</div>
<div>
<div className="text-[#111111] font-medium text-sm">Анна — Английский язык</div>
<div className="text-xs text-[#666666] font-normal">Начинающий репетитор</div>
</div>
</div>
<div className="flex-1 space-y-4">
<p className="text-sm text-[#666666] leading-relaxed font-normal"> Никогда раньше не преподавала онлайн.</p>
<p className="text-sm text-[#666666] leading-relaxed font-normal"> Боялась технических сложностей и проблем с подключением учеников.</p>
<p className="text-sm leading-relaxed text-[#111111] bg-black/5 border-l-2 border-[#111111] p-3 rounded-r-md mt-4 font-normal">
                                 Пошаговые гайды помогли провести первый урок уверенно, без сбоев со связью и доской.
                            </p>
</div>
</div>

<div className="bg-[#F9F9F8] rounded-xl p-8 border border-black/5 flex flex-col hover:border-black/10 transition-colors">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-purple-50 text-[#8C62EA] border border-purple-100 flex items-center justify-center font-display font-medium text-sm">М</div>
<div className="">
<div className="text-[#111111] font-medium text-sm">Михаил — Математика</div>
<div className="text-xs text-[#666666] font-normal">Профессиональный репетитор</div>
</div>
</div>
<div className="flex-1 space-y-4">
<p className="text-sm text-[#666666] leading-relaxed font-normal"> Много учеников, плотный график.</p>
<p className="text-sm text-[#666666] leading-relaxed font-normal"> Постоянно путался в ссылках на Zoom и пересылке файлов в мессенджерах.</p>
<p className="text-sm leading-relaxed text-[#111111] bg-black/5 border-l-2 border-[#111111] p-3 rounded-r-md mt-4 font-normal">
                                 Изучил инструкции по переносу базы в Toprep. Теперь всё структурировано в одном месте.
                            </p>
</div>
</div>

<div className="bg-[#F9F9F8] rounded-xl p-8 border border-black/5 flex flex-col hover:border-black/10 transition-colors">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-[#2E907B] border border-emerald-100 flex items-center justify-center font-display font-medium text-sm">Е</div>
<div>
<div className="text-[#111111] font-medium text-sm">Елена — Подготовка к ЕГЭ</div>
<div className="text-xs text-[#666666] font-normal">Руководитель мини-групп</div>
</div>
</div>
<div className="flex-1 space-y-4">
<p className="text-sm text-[#666666] leading-relaxed font-normal"> Ведет занятия в группах по 5-10 человек.</p>
<p className="text-sm text-[#666666] leading-relaxed font-normal"> Нужно было понять, как эффективно контролировать оплаты от всех студентов.</p>
<p className="text-sm leading-relaxed text-[#111111] bg-black/5 border-l-2 border-[#111111] p-3 rounded-r-md mt-4 font-normal">
                                 Разделы по групповым звонкам и финансовому учету закрыли все технические вопросы.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-[10rem] px-6 overflow-hidden bg-[#F9F9F8]" id="waitlist">
<div className="glow-bg top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[50vw] h-[50vw] opacity-80"></div>
<div className="relative z-10 max-w-[40rem] mx-auto text-center bg-white/80 backdrop-blur-xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 md:p-16 rounded-3xl reveal-up">
<h2 className="font-display text-[2.5rem] md:text-[3rem] font-medium tracking-tighter text-[#111111] mb-4">
                    Подпишитесь на обновления платформы.
                </h2>
<p className="text-base text-[#666666] mb-10 leading-relaxed max-w-[32rem] mx-auto font-normal">
                    Оставьте свой email, чтобы первыми узнавать о новых функциях Toprep и получать полезные советы по онлайн-преподаванию.
                </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-[30rem] mx-auto mb-4 relative" id="waitlistForm">
<input className="flex-1 h-14 bg-[#F9F9F8] border border-black/10 rounded-full px-6 text-[#111111] text-base outline-none focus:border-[#111111] transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" id="emailInput" placeholder="ваш@email.com" required="" type="email"/>
<button className="h-14 px-8 bg-[#111111] text-white font-medium rounded-full hover:bg-[#333333] transition-colors whitespace-nowrap flex items-center justify-center min-w-[140px] shadow-sm" id="submitBtn" type="submit">
<span id="btnText">Подписаться</span>
<svg className="hidden animate-spin h-5 w-5 text-white" fill="none" id="btnSpinner" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path></svg>
</button>

<div className="absolute inset-0 bg-white border border-[#2E907B] rounded-full flex items-center justify-center text-[#2E907B] text-sm font-medium opacity-0 pointer-events-none transition-opacity duration-300 shadow-sm" id="successMsg">
<iconify-icon className="text-lg mr-2" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Вы успешно подписаны на обновления.
                    </div>
</form>
<p className="text-xs text-[#888888] mb-12 font-normal">Никакого спама. Только важные новости. Отписаться можно в любой момент.</p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left border-t border-black/5 pt-8">
<div className="text-xs text-[#666666] leading-relaxed font-normal">
<span className="block text-[#111111] font-medium mb-1">Понятные инструкции</span>
                        Пошаговые руководства со скриншотами и наглядными примерами.
                    </div>
<div className="text-xs text-[#666666] leading-relaxed font-normal">
<span className="block text-[#111111] font-medium mb-1">Быстрая поддержка</span>
                        Не нашли ответ? Помогаем разобраться с любыми сложностями в чате.
                    </div>
<div className="text-xs text-[#666666] leading-relaxed font-normal">
<span className="block text-[#111111] font-medium mb-1">Регулярные апдейты</span>
                        База знаний и инструкции пополняются с каждым новым релизом.
                    </div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-black/5 pt-12 pb-8 px-6">
<div className="max-w-[75rem] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
<div>
<a className="font-display text-2xl font-medium tracking-tighter text-[#111111] block mb-2" href="#">TOPREP</a>
<p className="text-sm text-[#666666] max-w-xs font-normal">Платформа для организации работы репетитора.</p>
</div>
<div className="flex items-center gap-6 text-sm text-[#666666] font-normal">
<a className="hover:text-[#111111] transition-colors" href="mailto:support@toprep.space">support@toprep.space</a>
<a className="hover:text-[#111111] transition-colors" href="#">База знаний</a>
</div>
</div>
<div className="max-w-[75rem] mx-auto border-t border-black/5 pt-8 text-xs text-[#888888] font-normal">
            © 2025 Toprep. All rights reserved.
        </div>
</footer>



    </>
  );
}
