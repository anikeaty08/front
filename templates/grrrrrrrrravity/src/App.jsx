import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
zinc: {
950: '#09090b',
900: '#18181b',
850: '#202024',
},
accent: '#D138E5', // New Accent Color
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">

<span className="text-4xl font-black tracking-tighter text-accent uppercase leading-none">GRRR</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-400">
<a className="hover:text-white transition-colors" href="#intro">О нас</a>
<a className="hover:text-white transition-colors" href="#pricing">Абонементы</a>
<a className="hover:text-white transition-colors" href="#certificates">Сертификаты</a>
<a className="hover:text-white transition-colors" href="#contact">Контакты</a>
</div>

<a className="hidden sm:flex text-xs font-semibold bg-white text-black px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors items-center gap-2" href="#intro-lesson">
<span className="">Бесплатный урок</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="2" width="14"></iconify-icon>
</a>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Music Studio" className="w-full h-full object-cover opacity-40 grayscale contrast-125" src="https://img.freepik.com/free-photo/christmas-background-layout-black-background_1303-12762.jpg?t=st=1765724700~exp=1765728300~hmac=c9b6318fbb8b48b30039b2f808010f6584ba1dcf36859f8c9dbf5609e19e5f7d&amp;w=2000"/>
<div className="bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent absolute inset-0"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]"></div>
</div>
<div className="z-10 grid lg:grid-cols-2 gap-12 max-w-7xl w-full px-6 relative items-center">

<div className="fade-in-up space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-zinc-300">
<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                    Студия звукозаписи и обучения
                </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.05]">
                    Звучи громче.<br/>
<span className="text-zinc-500">Играй профессионально.</span>
</h1>
<p className="text-lg md:text-xl font-light text-zinc-400 max-w-lg leading-relaxed">
                    Индивидуальный подход, современное оборудование и атмосфера, где рождается настоящая музыка.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="text-sm font-medium bg-accent text-white px-8 py-3 rounded-full hover:bg-accent/90 transition-all shadow-[0_0_20px_-5px_#D138E5]" href="#intro-lesson">
                        Записаться на урок
                    </a>
<a className="text-sm font-medium border border-white/10 text-white px-8 py-3 rounded-full hover:bg-white/5 transition-colors" href="#pricing">
                        Смотреть цены
                    </a>
</div>
</div>

<div className="w-full max-w-md ml-auto fade-in-up delay-100">
<div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-70"></div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white">Быстрая связь</h3>
<p className="text-sm font-light text-zinc-400 mb-6">Оставьте заявку, и мы свяжемся с вами.</p>

<form action="https://formsubmit.co/lostvoxmusic@gmail.com" className="space-y-4" method="POST">

<input name="_subject" type="hidden" value="Заявка с сайта Гравитация (Главная)"/>
<input name="_captcha" type="hidden" value="false"/>
<input name="_template" type="hidden" value="table"/>

<input name="_next" type="hidden" value="https://yoursite.com/thanks.html"/>
<div>
<input className="w-full bg-zinc-900/80 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" name="name" placeholder="Ваше имя" required="" type="text"/>
</div>
<div>
<input className="w-full bg-zinc-900/80 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" name="contact" placeholder="Телефон или Telegram" required="" type="text"/>
</div>
<div className="">
<select className="w-full bg-zinc-900/80 border border-white/10 rounded-lg px-4 py-3 text-sm text-zinc-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none cursor-pointer" name="interest">
<option disabled="" selected="" value="">Интересующее направление</option>
<option value="Vocal">Вокал</option>
<option value="Guitar">Гитара</option>
<option value="Drums">Барабаны</option>
<option value="Studio">Студия / Запись</option>
</select>
</div>
<button className="w-full bg-white text-black font-semibold py-3 rounded-lg text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 mt-2" type="submit">
<span className="">Отправить заявку</span>
<iconify-icon icon="lucide:send" strokeWidth="2" width="16"></iconify-icon>
</button>
</form>
<p className="text-[10px] text-zinc-600 mt-4 text-center">Нажимая кнопку, вы соглашаетесь с обработкой данных.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-zinc-900 border-y border-white/5 relative overflow-hidden" id="intro-lesson">
<div className="absolute left-0 top-0 h-full w-1 bg-accent"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-start gap-6">
<div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 border border-accent/20">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="">
<h2 className="text-2xl font-semibold text-white mb-2">Бесплатное ознакомительное занятие</h2>
<p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                        Мы не предлагаем платные пробные периоды. Вместо этого запишитесь на полноценное <span className="text-white">30-минутное индивидуальное занятие</span> бесплатно. Познакомьтесь с педагогом, оцените студию и определите свой уровень.
                    </p>
</div>
</div>
<a className="shrink-0 px-6 py-3 rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-all text-sm font-medium" href="#contact">
                Записаться на 30 мин
            </a>
</div>
</section>

<section className="py-24 bg-zinc-950 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Абонементы</h2>
<p className="text-zinc-400 font-light text-lg">Гибкая система оплаты для вашего прогресса.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border border-white/10 bg-zinc-900/40 hover:border-accent/50 transition-all group flex flex-col">
<div className="mb-6 p-3 bg-zinc-900 rounded-lg w-fit group-hover:bg-accent/10 group-hover:text-accent transition-colors">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Разовое занятие</h3>
<div className="my-4">
<span className="text-3xl font-semibold tracking-tight">2 500 ₽</span>
</div>
<p className="text-sm text-zinc-500 font-light mb-8">Индивидуальный урок для отработки конкретных навыков или консультации.</p>
<div className="mt-auto">
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-accent" icon="lucide:check" width="16"></iconify-icon> 1 индивидуальный урок
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="lucide:clock" width="16"></iconify-icon> 60 минут
                            </li>
</ul>
<a className="block w-full py-3 rounded-lg border border-white/10 text-center text-sm font-medium hover:bg-white hover:text-black transition-colors" href="#contact">Выбрать</a>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-zinc-900/40 hover:border-accent/50 transition-all group flex flex-col">
<div className="mb-6 p-3 bg-zinc-900 rounded-lg w-fit group-hover:bg-accent/10 group-hover:text-accent transition-colors">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Старт (4 занятия)</h3>
<div className="my-4">
<span className="text-3xl font-semibold tracking-tight">9 000 ₽</span>
<span className="text-xs text-zinc-500 block mt-1">2250 ₽ за урок</span>
</div>
<p className="text-sm text-zinc-500 font-light mb-8">Отличный старт для регулярных занятий раз в неделю.</p>
<div className="mt-auto">
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-accent" icon="lucide:check" width="16"></iconify-icon> 4 индивидуальных урока
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="lucide:calendar-clock" width="16"></iconify-icon> Срок: 42 дня
                            </li>
</ul>
<a className="block w-full py-3 rounded-lg bg-white text-black text-center text-sm font-semibold hover:bg-zinc-200 transition-colors" href="#contact">Выбрать</a>
</div>
</div>

<div className="p-8 rounded-2xl border border-accent bg-zinc-900 relative flex flex-col shadow-[0_0_30px_-15px_#D138E5]">
<div className="absolute top-0 right-0 px-3 py-1 bg-accent text-white text-[10px] uppercase font-bold tracking-wider rounded-bl-lg rounded-tr-lg">Популярный</div>
<div className="mb-6 p-3 bg-zinc-800 rounded-lg w-fit text-accent">
<iconify-icon icon="lucide:music-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Прогресс (8 занятий)</h3>
<div className="my-4">
<span className="text-3xl font-semibold tracking-tight">18 000 ₽</span>
<span className="text-xs text-zinc-500 block mt-1">2250 ₽ за урок</span>
</div>
<p className="text-sm text-zinc-400 font-light mb-8">Для тех, кто нацелен на быстрый результат. 2 раза в неделю.</p>
<div className="mt-auto">
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-accent" icon="lucide:check" width="16"></iconify-icon> 8 индивидуальных уроков
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="lucide:calendar-clock" width="16"></iconify-icon> Срок: 42 дня
                            </li>
</ul>
<a className="block w-full py-3 rounded-lg bg-accent text-white text-center text-sm font-semibold hover:bg-accent/90 transition-colors" href="#contact">Выбрать</a>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-zinc-900/40 hover:border-accent/50 transition-all group flex flex-col">
<div className="mb-6 p-3 bg-zinc-900 rounded-lg w-fit group-hover:bg-accent/10 group-hover:text-accent transition-colors">
<iconify-icon icon="lucide:trophy" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">ПРО (12 занятий)</h3>
<div className="my-4">
<span className="text-3xl font-semibold tracking-tight">27 000 ₽</span>
<span className="text-xs text-zinc-500 block mt-1">2250 ₽ за урок</span>
</div>
<p className="text-sm text-zinc-500 font-light mb-8">Максимальное погружение. Подходит для интенсивной подготовки.</p>
<div className="mt-auto">
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-accent" icon="lucide:check" width="16"></iconify-icon> 12 индивидуальных уроков
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="lucide:calendar-clock" width="16"></iconify-icon> Срок: 42 дня
                            </li>
</ul>
<a className="block w-full py-3 rounded-lg border border-white/10 text-center text-sm font-medium hover:bg-white hover:text-black transition-colors" href="#contact">Выбрать</a>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2 p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800/50 hover:border-accent/50 transition-all group flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-white/10 rounded text-accent">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Групповые занятия</h3>
</div>
<p className="text-sm text-zinc-400 font-light mb-4 max-w-md">
                            Проходят в формате ансамбля. Идеально для практики игры в коллективе. Требуется базовый уровень владения инструментом.
                        </p>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-accent" icon="lucide:check" width="16"></iconify-icon> 4 занятия в группе
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500" icon="lucide:info" width="16"></iconify-icon> Формат ансамбля
                            </li>
</ul>
</div>
<div className="flex flex-col items-center md:items-end gap-4 min-w-[200px]">
<div className="text-center md:text-right">
<span className="text-3xl font-semibold tracking-tight text-white">6 000 ₽</span>
<span className="text-xs text-zinc-500 block mt-1">1500 ₽ за урок</span>
</div>
<a className="px-8 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors w-full md:w-auto text-center" href="#contact">Записаться в группу</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5" id="certificates">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-2">Подарочные сертификаты</h2>
<p className="text-zinc-400 text-sm">Подарите эмоции и новый навык. Стильный дизайн, гибкий номинал.</p>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative overflow-hidden rounded-xl aspect-[1.6/1] bg-zinc-900 border border-white/10 transition-transform hover:-translate-y-1">

<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black"></div>

<div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-colors"></div>
<div className="relative h-full p-6 flex flex-col justify-between z-10">
<div className="flex justify-between items-start">
<span className="text-xl font-black tracking-tighter text-white uppercase">GRRR</span>
<span className="text-xs font-mono text-zinc-500 border border-white/10 px-2 py-1 rounded">GIFT CARD</span>
</div>
<div>
<p className="text-2xl font-medium text-white mb-1">4 Урока</p>
<p className="text-xs text-zinc-400 uppercase tracking-widest">Курс "Старт"</p>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-4">
<span className="text-sm text-zinc-300">Номинал: 9 000 ₽</span>
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl aspect-[1.6/1] bg-zinc-900 border border-white/10 transition-transform hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-br from-[#2a1b3d] to-black"></div>
<div className="absolute -left-10 -bottom-10 w-40 h-40 bg-accent/40 rounded-full blur-3xl group-hover:bg-accent/50 transition-colors"></div>
<div className="relative h-full p-6 flex flex-col justify-between z-10">
<div className="flex justify-between items-start">
<span className="text-xl font-black tracking-tighter text-white uppercase">GRRR</span>
<span className="text-xs font-mono text-white/50 border border-white/10 px-2 py-1 rounded">GIFT CARD</span>
</div>
<div>
<p className="text-2xl font-medium text-white mb-1">Студийная запись</p>
<p className="text-xs text-zinc-400 uppercase tracking-widest">Создание трека</p>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-4">
<span className="text-sm text-zinc-300">Сумма на выбор</span>
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl aspect-[1.6/1] bg-zinc-900 border border-white/10 transition-transform hover:-translate-y-1">
<div className="absolute inset-0 bg-zinc-900"></div>
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D138E5_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="relative h-full p-6 flex flex-col justify-between z-10">
<div className="flex justify-between items-start">
<span className="text-xl font-black tracking-tighter text-white uppercase">GRRR</span>
<span className="text-xs font-mono text-zinc-500 border border-white/10 px-2 py-1 rounded">GIFT CARD</span>
</div>
<div className="">
<p className="text-2xl font-medium text-white mb-1">Безлимит</p>
<p className="text-xs text-zinc-400 uppercase tracking-widest">Любая сумма</p>
</div>
<div className="flex justify-between items-end border-t border-white/10 pt-4">
<span className="text-sm text-zinc-300">От 2 500 ₽</span>
<button className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_15px_-5px_#D138E5]">
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="space-y-12">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-6">Свяжитесь с нами</h2>
<p className="text-zinc-400 font-light max-w-sm">Мы всегда рады ответить на ваши вопросы и помочь с выбором программы обучения.</p>
</div>
<div className="space-y-6">

<div className="flex flex-col gap-2">
<span className="text-xs uppercase tracking-wider text-zinc-500">Мессенджер</span>
<a className="flex items-center gap-3 text-xl font-medium text-white hover:text-accent transition-colors w-fit" href="https://wa.me/79164578230">
<div className="w-10 h-10 rounded-full bg-[#25D366] text-black flex items-center justify-center">

<iconify-icon className="fill-current" icon="lucide:phone" strokeWidth="2" width="20"></iconify-icon>
</div>
                                8 (916) 457-8230
                            </a>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs uppercase tracking-wider text-zinc-500">Сотрудничество</span>
<a className="flex items-center gap-3 text-lg font-light text-zinc-300 hover:text-white transition-colors" href="mailto:lostvoxmusic@gmail.com">
<iconify-icon className="text-zinc-500" icon="lucide:mail" width="20"></iconify-icon>
                                lostvoxmusic@gmail.com
                            </a>
</div>
</div>

<div className="">
<span className="text-xs uppercase tracking-wider text-zinc-500 mb-4 block">Сканируй для WhatsApp</span>
<div className="p-2 bg-white rounded-2xl w-fit">

<img alt="QR Code WhatsApp" className="w-32 h-32 rounded-xl mix-blend-multiply" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&amp;data=https://wa.me/79164578230"/>
</div>
</div>
</div>

<div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8 lg:p-10">
<h3 className="text-xl font-medium text-white mb-8">Форма обратной связи</h3>
<form action="https://formsubmit.co/lostvoxmusic@gmail.com" className="space-y-6" method="POST">
<input name="_subject" type="hidden" value="Заявка с сайта Гравитация (Контакты)"/>
<input name="_template" type="hidden" value="table"/>
<div>
<label className="block text-xs text-zinc-500 mb-2 uppercase tracking-wider">Имя</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" name="name" required="" type="text"/>
</div>
<div className="">
<label className="block text-xs text-zinc-500 mb-2 uppercase tracking-wider">Контакты (Телефон / Email)</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" name="contact" required="" type="text"/>
</div>
<div className="">
<label className="block text-xs text-zinc-500 mb-2 uppercase tracking-wider">Ваш запрос</label>
<textarea className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none" name="message" rows="4"></textarea>
</div>
<button className="w-full bg-accent text-white font-medium py-4 rounded-lg hover:bg-accent/90 transition-all shadow-[0_0_20px_-5px_#D138E5]" type="submit">
                            Отправить сообщение
                        </button>
<p className="text-center text-xs text-zinc-600">Ваши данные отправляются на lostvoxmusic@gmail.com</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 py-12 text-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-xl font-black tracking-tighter text-zinc-700 uppercase">GRRR</span>
<span className="text-zinc-600">|</span>
<span className="text-zinc-500">© 2025 Музыкальная студия Гравитация</span>
</div>
<div className="flex gap-6 text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Telegram</a>
<a className="hover:text-white transition-colors" href="#">Договор оферты</a>
</div>
</div>
</footer>

    </>
  );
}
